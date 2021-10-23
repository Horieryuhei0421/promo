import { db, FirebaseTimestamp } from "../../firebase";
import { push } from "connected-react-router";
import { deleteIssuesAction, fetchIssuesAction, } from "./actions";

const issuesRef = db.collection("issues")


export const deleteIssue = (id) => {
  return async (dispatch, getState) => {
    issuesRef.doc(id).delete()
      .then(() => {

        const prevIssues = getState().issues.list;
        const nextIssues = prevIssues.filter(issue => issue.id !== id)
        dispatch(deleteIssuesAction(nextIssues))
      })
  }
}

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



export const saveIssue = (name, subHead, description, images, uid) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      name: name,
      subHead: subHead,
      description: description,
      images: images,
      updated_at: timestamp,
      uid: uid
    }

    // if (id === "") {
    //   const ref = issuesRef.doc();
    //   data.created_at = timestamp
    //   id = ref.id;
    //   data.id = id;
    // }


    const ref = issuesRef.doc();
    data.created_at = timestamp
    const id = ref.id;
    data.id = id;


    return issuesRef.doc(id).set(data, { merge: true })
      .then(() => {
        dispatch(push("/adviserpage"))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}
