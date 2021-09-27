import { React } from "react";
import { getUserId } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";
import Switch from "@mui/material/Switch";

const AdviserPage = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{uid}</p>
      <h2>Adviser</h2>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
      <div>
        <Switch
          checked={false}
          onChange={() => dispatch(push("/companypage"))}
          name="loading"
          color="primary"
        />
      </div>
    </div>
  );
};
export default AdviserPage;
