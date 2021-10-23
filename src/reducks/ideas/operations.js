import { db, FirebaseTimestamp } from "../../firebase";
import { push } from "connected-react-router";
import { fetchIdeasAction } from "./actions";

const ideasRef = db.collection("ideas")


export const orderIdea = (id, idea, price, quantity) => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
    const userRef = db.collection('users').doc(uid);
    const timestamp = FirebaseTimestamp.now();

    // // 注文履歴に残す用
    // let ideas = [];
    // // 売り切れ時のモーダルの文言に必要
    let soldOutIdeas = [];

    const batch = db.batch();

    const snapshot = await ideasRef.doc(id).get();
    if (snapshot.quantity === 0) {
      soldOutIdeas.push(snapshot.name);
      return snapshot
    }
    if (snapshot.quantity === 1) {
      snapshot.quantity = 0;
      return snapshot
    }

    // ideas.push({
    //   id: snapshot.id,
    //   idea: snapshot.idea,
    //   issue: snapshot.issueId,
    //   price: snapshot.price,
    //   uid: snapshot.uid
    // });

    batch.update(ideasRef.doc(id), { quantity: 0 });

    if (soldOutIdeas === 0) {
      const errorMessage = soldOutIdeas[0];
      alert('大変申し訳ありません。' + errorMessage + 'が在庫切れとなったため注文処理を中断しました。');
      return false
    }
    else {

      batch.commit()
        .then(() => {
          // 注文履歴データを作成
          const orderRef = userRef.collection('orders').doc();
          quantity = 0

          const history = {
            ideaId: id,
            price: price,
            created_at: timestamp,
            id: orderRef.id,
            idea: idea,
            updated_at: timestamp,
            quantity: quantity,
          };

          orderRef.set(history)
          dispatch(push("order/complete"))

        }).catch(() => {
          alert('注文処理に失敗しました。通信環境をご確認のうえ、もう一度お試しください。')
          return false
        })

    }
  }
}


export const saveIdea = (iid, idea, price, quantity, uid) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      issueId: iid,
      idea: idea,
      price: price,
      quantity: quantity,
      updated_at: timestamp,
      uid: uid
    }

    const ref = ideasRef.doc();
    data.created_at = timestamp
    const id = ref.id;
    data.id = id;

    return ideasRef.doc(id).set(data, { merge: true })
      .then(() => {
        dispatch(push("/issues/" + iid))
        window.location.reload();
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

export const fetchIdeas = () => {
  return async (dispatch) => {
    ideasRef.orderBy("updated_at", "desc").get()
      .then(snapshots => {
        const ideaList = []
        snapshots.forEach(snapshot => {
          const idea = snapshot.data()
          ideaList.push(idea)
        })
        dispatch(fetchIdeasAction(ideaList))
      })
  }
}

