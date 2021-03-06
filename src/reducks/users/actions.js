export const SIGN_IN = "SIGN_IN"
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username,
      image: userState.image,
      orders: userState.orders,
      profession: userState.profession,
      birthday: userState.birthday,
      message: userState.message,
      companyname: userState.companyname,
      companyaddress: userState.companyaddress,
      companytel: userState.companytel,
      companydescription: userState.companydescription,
      companyimage: userState.companyimage,
    }
  }
};

export const COMPANY_ACTION = "COMPANY_ACTION"
export const companyAction = (userState) => {
  return {
    type: "COMPANY_ACTION",
    payload: {
      companyname: userState.companyname,
      companyaddress: userState.address,
      companytel: userState.tel,
      companydescription: userState.description,
      companyimage: userState.companyimage,
      uid: userState.uid
    }
  }
};

export const USER_ACTION = "USER_ACTION"
export const userAction = (userState) => {
  return {
    type: "USER_ACTION",
    payload: {
      username: userState.username,
      image: userState.image,
      profession: userState.profession,
      birthday: userState.birthday,
      message: userState.message,
    }
  }
};

// export const COMPANY_SETTING = "COMPANY_SETTING"
// export const companySettingAction = (settingState) => {
//   return {
//     type: "COMPANY_SETTING",
//     payload: {
//       companyname: settingState.companyname,
//       address: settingState.address,
//       tel: settingState.tel,
//       description: settingState.description,
//       uid: settingState.uid
//     }

//   }
// };

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      role: "",
      uid: "",
      username: "",
      profession: "",
      birthday: "",
      message: "",
      companyname: "",
      companyaddress: "",
      companytel: "",
      companydescription: "",
    }
  }
}

export const SAVE_ORDER = "SAVE_ORDER";
export const saveOrderAction = (data) => {
  return {
    type: "SAVE_ORDER",
    payload: {
      orders: data.orders,

    }
  }
}

export const FETCH_ORDERS_HISTORY = "FETCH_ORDERS_HISTORY";
export const fetchOrdersHistoryAction = (history) => {
  return {
    type: "FETCH_ORDERS_HISTORY",
    payload: history
  }
}

