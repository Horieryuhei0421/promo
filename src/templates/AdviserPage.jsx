import { React } from "react";
import { getUserName } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";
import Switch from "@mui/material/Switch";
import IssueList from "../components/issues/IssueList";

const AdviserPage = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="main-back">
        <div className="top-heignt">
          <h1>{username}</h1>
        </div>
        <div>
          <h2>Adviser</h2>
          <div>
            <Switch
              checked={false}
              onChange={() => dispatch(push("/companypage"))}
              name="loading"
              color="primary"
            />
          </div>
        </div>
        <div>
          <div className="module-spacer--medium" />
          <IssueList></IssueList>
          <div className="module-spacer--medium" />
          <div className="module-spacer--medium" />
        </div>
      </div>
    </div>
  );
};
export default AdviserPage;
