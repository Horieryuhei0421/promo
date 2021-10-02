export const SIGN_IN = "SIGN_IN"
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username,
      companyname: userState.companyname,
      companyaddress: userState.companyaddress,
      companytel: userState.companytel,
      companydescription: userState.companydescription,
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
      uid: userState.uid
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
      username: ""
    }
  }
}