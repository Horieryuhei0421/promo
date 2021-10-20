import { db, FirebaseTimestamp } from "../../firebase";
import { push } from "connected-react-router";
import { fetchIdeasAction } from "./actions";

const ideasRef = db.collection("ideas")

export const saveIdea = (iid, idea, price, uid) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      issueId: iid,
      idea: idea,
      price: price,
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