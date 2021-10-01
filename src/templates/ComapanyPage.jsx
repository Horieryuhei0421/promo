import { React } from "react";
import { getUserId } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";
import Switch from "@mui/material/Switch";

const CompanyPage = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{uid}</p>
      <h2>Company</h2>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
      <div>
        <Switch
          checked={true}
          onChange={() => dispatch(push("/adviserpage"))}
          name="loading"
          color="primary"
        />
      </div>
      <div>
        <button onClick={() => dispatch(push("/issue/edit"))}>
          案件提案しちゃおっと！
        </button>
        <button onClick={() => dispatch(push("/companysetting"))}>
          会社の設定を書く
        </button>
      </div>
    </div>
  );
};
export default CompanyPage;
