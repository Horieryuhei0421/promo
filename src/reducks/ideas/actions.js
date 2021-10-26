export const FETCH_IDEAS = "FETCH_IDEAS";
export const fetchIdeasAction = (ideas) => {
  return {
    type: "FETCH_IDEAS",
    payload: ideas
  }
}

// export const SAVE_IDEA = "SAVE_IDEA";
// export const saveOderAction = (data) => {
//   return {
//     type: "SAVE_IDEA",
//     payload: data
//   }
// }