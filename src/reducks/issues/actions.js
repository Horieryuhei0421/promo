export const FETCH_ISSUES = "FETCH_ISSUES";
export const fetchIssuesAction = (issues) => {
  return {
    type: "FETCH_ISSUES",
    payload: issues
  }
}