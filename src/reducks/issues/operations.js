import { db, FirebaseTimestamp } from "../../firebase";
import { push } from "connected-react-router";
import { fetchIssuesAction } from "./actions";

const issuesRef = db.collection("issues")

export const fetchIssues = () => {
  return async (dispatch) => {
    issuesRef.orderBy("updated_at", "desc").get()
      .then(snapshots => {
        const issueList = []
        snapshots.forEach(snapshot => {
          const issue = snapshot.data()
          issueList.push(issue)
        })
        dispatch(fetchIssuesAction(issueList))
      })
  }
}

export const saveIssue = (name, subHead, description, price, images, uid) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      name: name,
      subHead: subHead,
      description: description,
      price: parseInt(price, 10),
      images: images,
      updated_at: timestamp,

      uid: uid
      // images: images,
    }

    const ref = issuesRef.doc();
    const id = ref.id
    data.id = id
    data.created_at = timestamp

    return issuesRef.doc(id).set(data, { merge: true })
      .then(() => {
        dispatch(push("/adviserpage"))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}