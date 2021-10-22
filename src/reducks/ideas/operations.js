import { db, FirebaseTimestamp } from "../../firebase";
import { push } from "connected-react-router";
import { fetchIdeasAction } from "./actions";

const ideasRef = db.collection("ideas")

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

