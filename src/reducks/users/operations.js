import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from "../../firebase/index"

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
        dispatch(push('/signin'))
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

          dispatch(push('/'))
        })
      }).catch(() => {
      });
  }
};

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
            dispatch(push('/'))
          })
        }
      }).catch((error) => {
        alert('アカウント登録に失敗しました。もう1度お試しください。')
        throw new Error(error)
      })
  }
}

// export const signOut = () => {
//   return async (dispatch) => {
//     auth.signOut()
//       .then(() => {
//         dispatch(signOutAction())
//         dispatch(push("./signin"))
//       })
//   }
// }

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
