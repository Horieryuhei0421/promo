import { React } from "react";
import { getUserName } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";
import Switch from "@mui/material/Switch";

const CompanyPage = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{username}</h1>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
      <div>
        <button onClick={() => dispatch(push("/issue/edit"))}>
          アイデアを募集する
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(push("/myissuelist"))}>
          タスク一覧を見る
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(push("/companysetting"))}>
          会社の設定を書く
        </button>
      </div>
      <h2>Company</h2>
      <div>
        <Switch
          checked={true}
          onChange={() => dispatch(push("/adviserpage"))}
          name="loading"
          color="primary"
        />
      </div>
    </div>
  );
};
export default CompanyPage;
