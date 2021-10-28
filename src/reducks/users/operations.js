import { signInAction, signOutAction, companyAction, userAction, fetchOrdersHistoryAction } from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from "../../firebase/index"


const usersRef = db.collection('users')


export const fetchOrdersHistory = () => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
    const list = []

    db.collection("users").doc(uid).collection('orders')
      .orderBy('updated_at', "desc").get()
      .then((snapshots) => {
        snapshots.forEach(snapshot => {
          const data = snapshot.data();
          list.push(data)
        });
        dispatch(fetchOrdersHistoryAction(list))
      })
  }
}


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
              role: data.role,
              uid: user.uid,
              username: data.username,
              image: data.image,
              companyimage: data.companyimage,
              orders: data.orders,
              profession: data.profession,
              birthday: data.birthday,
              message: data.message,
              companyname: data.companyname,
              companyaddress: data.companyaddress,
              companytel: data.companytel,
              companydescription: data.companydescription,
            }))
          })
      } else {
        dispatch(push('/'))
      }
    })
  }
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    if (email === "" || password === "") {
      alert("必修項目が未入力です")
      return false
    }
    auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user
        if (user) {
          const uid = user.uid

          db.collection("users").doc(uid).get()
            .then(snapshot => {
              const data = snapshot.data()
              dispatch(signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
                image: data.image,
                companyimage: data.companyimage,
                orders: data.orders,
                profession: data.profession,
                birthday: data.birthday,
                message: data.message,
                companyname: data.companyname,
                companyaddress: data.companyaddress,
                companytel: data.companytel,
                companydescription: data.companydescription,
              }))
              // db.collection('users').doc(uid).collection('company').get()
              //   .then(snapshots => {
              //     const datas = snapshots.data()
              //     console.log(datas)
              //   })
              dispatch(push("/adviserpage"))
            })
        }
      })
  }
}


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
            username: username,
            image: [],
            companyimage: [],
            orders: [],
            profession: "未入力",
            birthday: "未入力",
            message: "未入力",
            companyname: "未入力",
            companyaddress: "未入力",
            companytel: "未入力",
            companydescription: "未入力",
          };

          usersRef.doc(uid).set(userInitialData).then(async () => {
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


export const addCompanySetting = (companyname, companyaddress, companytel, companydescription, companyimage, uid) => {
  return async (dispatch, getState) => {
    if (companyname === "") {
      alert('必須事項が記入されていません。ご確認ください。')
      return false
    }
    if (companyaddress === "") {
      companyaddress = "未入力"
    }
    if (companytel === "") {
      companytel = "未入力"
    }
    if (companydescription === "") {
      companydescription = "未入力"
    }
    // const timestamp = FirebaseTimestamp.now()

    const data = {
      companyname: companyname,
      companyaddress: companyaddress,
      companytel: companytel,
      companydescription: companydescription,
      companyimage: companyimage,
      uid: uid
    }

    return db.collection('users').doc(uid).set(data, { merge: true })
      .then(snapshot => {
        dispatch(companyAction(data))
        dispatch(push("/companypage"))
        window.location.reload();
      }).catch((error) => {
        throw new Error(error)
      })
  }
}

export const addUserSetting = (username, profession, birthday, message, image, uid) => {
  return async (dispatch, getState) => {
    if (username === "") {
      alert('必須事項が記入されていません。ご確認ください。')
      return false
    }

    if (profession === "") {
      profession = "未入力"
    }
    if (birthday === "") {
      birthday = "未入力"
    }
    if (message === "") {
      message = "未入力"
    }

    // const timestamp = FirebaseTimestamp.now()

    const userdata = {
      username: username,
      profession: profession,
      birthday: birthday,
      message: message,
      image: image,
      uid: uid
    }

    return db.collection('users').doc(uid).set(userdata, { merge: true })
      .then(snapshot => {
        dispatch(userAction(userdata))
        dispatch(push("/adviserpage"))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}


