import { React, useState, useCallback } from "react";
import { getUserId } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { addCompanySetting } from "../reducks/users/operations";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { FirebaseTimestamp } from "../firebase";

const CompanySetting = () => {
  const dispatch = useDispatch();

  const [companyname, setCompanyname] = useState(""),
    [companyaddress, setCompanyaddress] = useState(""),
    [companytel, setCompanytel] = useState(""),
    [companydescription, setCompanydescription] = useState("");
  // [images, setImages] = useState("");

  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const inputCompanyname = useCallback(
    (event) => {
      setCompanyname(event.target.value);
    },
    [setCompanyname]
  );

  const inputAddress = useCallback(
    (event) => {
      setCompanyaddress(event.target.value);
    },
    [setCompanyaddress]
  );

  const inputTel = useCallback(
    (event) => {
      setCompanytel(event.target.value);
    },
    [setCompanytel]
  );

  const inputDescription = useCallback(
    (event) => {
      setCompanydescription(event.target.value);
    },
    [setCompanydescription]
  );

  return (
    <div>
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
          <TextInput
            fullWidth={true}
            label={"住所"}
            multiline={false}
            required={true}
            rows={1}
            value={companyaddress}
            type={"text"}
            onChange={inputAddress}
          />
          <TextInput
            fullWidth={true}
            label={"電話番号"}
            multiline={false}
            required={true}
            rows={1}
            value={companytel}
            type={"number"}
            onChange={inputTel}
          />
          <TextInput
            fullWidth={true}
            label={"会社の詳細等"}
            multiline={true}
            required={true}
            rows={6}
            value={companydescription}
            type={"text"}
            onChange={inputDescription}
          />

          <div className="module-spacer--medium" />
          <div className="center">
            <PrimaryButton
              label={"設定する"}
              onClick={() =>
                dispatch(
                  addCompanySetting(
                    companyname,
                    companyaddress,
                    companytel,
                    companydescription,
                    uid
                  )
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanySetting;
