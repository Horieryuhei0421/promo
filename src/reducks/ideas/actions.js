export const FETCH_IDEAS = "FETCH_IDEAS";
export const fetchIdeasAction = (ideas) => {
  return {
    type: "FETCH_IDEAS",
    payload: ideas
  }
}