import { React, useEffect } from "react";
import {
  getUserName,
  getCompanyName,
  getCompanyAddress,
  getCompanyTel,
  getCompanyDescription,
} from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";
import Switch from "@mui/material/Switch";

const CompanyPage = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const companyname = getCompanyName(selector);
  const companyaddress = getCompanyAddress(selector);
  const companytel = getCompanyTel(selector);
  const companydescription = getCompanyDescription(selector);
  const dispatch = useDispatch();

  const query = window.location.search;
  useEffect(() => {}, [query]);

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
      <div>
        <h1>会社名:{companyname}</h1>
        <h1>住所:{companyaddress}</h1>
        <h1>電話番号:{companytel}</h1>
        <h1>会社の詳細:{companydescription}</h1>
      </div>
    </div>
  );
};
export default CompanyPage;
