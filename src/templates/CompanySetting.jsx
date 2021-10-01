import { React, useState, useCallback } from "react";
import { getUserId } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { addCompanySetting } from "../reducks/users/operations";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { FirebaseTimestamp } from "../firebase";

const CompanySetting = () => {
  const dispatch = useDispatch();

  const [companyname, setCompanyname] = useState("");

  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const inputCompanyname = useCallback(
    (event) => {
      setCompanyname(event.target.value);
    },
    [setCompanyname]
  );

  return (
    <div>
      <h2>CompanySeeting</h2>
      <div>
        <button onClick={() => dispatch(push("/companypage"))}>
          会社のホームに戻る
        </button>
      </div>
      <div>
        <div className="c-section-container">
          <h2 className="u-text-center u-text__headline">会社の詳細設定</h2>
          <div className="module-spacer--medium" />
          <TextInput
            fullWidth={true}
            label={"会社名"}
            multiline={false}
            required={true}
            rows={1}
            value={companyname}
            type={"text"}
            onChange={inputCompanyname}
          />

          <div className="module-spacer--medium" />
          <div className="center">
            <PrimaryButton
              label={"設定する"}
              onClick={() => dispatch(addCompanySetting(companyname, uid))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanySetting;
