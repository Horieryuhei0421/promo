export const FETCH_ISSUES = "FETCH_ISSUES";
export const fetchIssuesAction = (issues) => {
  return {
    type: "FETCH_ISSUES",
    payload: issues
  }
}

export const DELETE_ISSUES = "DELETE_ISSUES";
export const deleteIssuesAction = (issues) => {
  return {
    type: "DELETE_ISSUES",
    payload: issues
  }
}