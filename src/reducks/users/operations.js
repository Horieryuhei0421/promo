import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from "../../firebase/index"
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "./selectors";

const usersRef = db.collection('users')


export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        usersRef.doc(user.uid).get()
          .then(snapshot => {
            const data = snapshot.data()
            if (!data) {
              throw new Error('ユーザーデータが存在しません。')
            }

            // Update logged in user state
            dispatch(signInAction({
              customer_id: (data.customer_id) ? data.customer_id : "",
              email: data.email,
              isSignedIn: true,
              payment_method_id: (data.payment_method_id) ? data.payment_method_id : "",
              role: data.role,
              uid: user.uid,
              username: data.username,
            }))
          })
      } else {
        dispatch(push('/top'))
      }
    })
  }
};

export const signIn = (email, password) => {
  return async (dispatch) => {

    return auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const userState = result.user
        if (!userState) {
          throw new Error('ユーザーIDを取得できません');
        }
        const userId = userState.uid;

        return usersRef.doc(userId).get().then(snapshot => {
          const data = snapshot.data();
          if (!data) {
            throw new Error('ユーザーデータが存在しません');
          }

          dispatch(signInAction({
            customer_id: (data.customer_id) ? data.customer_id : "",
            email: data.email,
            isSignedIn: true,
            role: data.role,
            payment_method_id: (data.payment_method_id) ? data.payment_method_id : "",
            uid: userId,
            username: data.username,
          }));

          dispatch(push('/adviserpage'))
        })
      }).catch(() => {
      });
  }
};


export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("必修項目が未入力です")
      return false
    } else {
      auth.sendPasswordResetEmail(email)
        .then(() => {
          alert("入力されたアドレスにパスワードリセット用のメールをお送りしました。")
          dispatch(push("/signin"))
        }).catch(() => {
          alert("パスワードリセットに失敗しました。通信環境をご確認後に再度お試しください。")
        })
    }
  }
}

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // Validations
    if (password !== confirmPassword) {
      alert('パスワードが一致しません。もう1度お試しください。')
      return false
    }
    if (password.length < 6) {
      alert('パスワードは6文字以上で入力してください。')
      return false
    }

    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            customer_id: "",
            created_at: timestamp,
            email: email,
            role: "customer",
            payment_method_id: "",
            uid: uid,
            updated_at: timestamp,
            username: username
          };

          usersRef.doc(uid).set(userInitialData).then(async () => {
            // const sendThankYouMail = functions.httpsCallable('sendThankYouMail');
            // await sendThankYouMail({
            //     email: email,
            //     userId: uid,
            //     username: username,
            // });
            dispatch(push('/adviserpage'))
          })
        }
      }).catch((error) => {
        alert('アカウント登録に失敗しました。もう1度お試しください。')
        throw new Error(error)
      })
  }
}

export const signOut = () => {
  return async (dispatch) => {
    // Sign out with Firebase Authentication
    auth.signOut().then(() => {
      console.log("できてる？")
      dispatch(signOutAction());
      dispatch(push('/signin'));
    }).catch(() => {
      throw new Error('ログアウトに失敗しました。')
    })
  }
};


// export const addCompanySetting = (companyname, uid) => {
//   return async (dispatch, getState) => {
//     const uid = getState().users.uid;
//     const companyRef = db.collection('users').doc(uid).collection('company').doc();
//     addedcompany['companyId'] = companyRef.id;
//     await companyRef.set(addedcompany);
//     dispatch(push('/companypage'))
//   }
// }

export const addCompanySetting = (companyname, uid) => {
  return async (dispatch, getState) => {
    const timestamp = FirebaseTimestamp.now()


    const data = {
      companyname: companyname,
      uid: uid
    }

    const companyRef = db.collection('users').doc(uid).collection('company').doc();
    const id = companyRef.id
    data.id = id
    data.created_at = timestamp

    return db.collection('users').doc(uid).collection('company').doc(id).set(data, { merge: true })
      .then(() => {
        dispatch(push("/adviserpage"))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}