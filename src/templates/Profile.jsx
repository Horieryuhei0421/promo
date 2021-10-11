import { React, useState, useCallback } from "react";
import { getUserId } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { addUserSetting } from "../reducks/users/operations";
import { AnImageArea, PrimaryButton, TextInput } from "../components/UIkit";
import { FirebaseTimestamp } from "../firebase";
import { textAlign } from "@mui/system";

const Profile = () => {
  const dispatch = useDispatch();

  const [username, setUserName] = useState(""),
    [profession, setProfession] = useState(""),
    [birthday, setBirthday] = useState(""),
    [message, setMessage] = useState(""),
    [images, setImages] = useState([]);

  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const inputName = useCallback(
    (event) => {
      setUserName(event.target.value);
    },
    [setUserName]
  );

  const inputProfession = useCallback(
    (event) => {
      setProfession(event.target.value);
    },
    [setProfession]
  );

  const inputBirthday = useCallback(
    (event) => {
      setBirthday(event.target.value);
    },
    [setBirthday]
  );

  const inputMessage = useCallback(
    (event) => {
      setMessage(event.target.value);
    },
    [setMessage]
  );

  return (
    <div>
      <div>
        <div className="c-section-container">
          <h2 className="u-text-center u-text__headline">プロフィールの設定</h2>
          <div className="module-spacer--medium" />
          <AnImageArea images={images} setImages={setImages} />
          <TextInput
            fullWidth={true}
            label={"名前(必須)"}
            multiline={false}
            required={false}
            rows={1}
            value={username}
            type={"text"}
            onChange={inputName}
          />
          <TextInput
            fullWidth={true}
            label={"職業"}
            multiline={false}
            required={false}
            rows={1}
            value={profession}
            type={"text"}
            onChange={inputProfession}
          />
          <p align="left">生年月日</p>
          <TextInput
            fullWidth={true}
            label={""}
            multiline={false}
            required={false}
            rows={1}
            value={birthday}
            type={"date"}
            onChange={inputBirthday}
          />
          <TextInput
            fullWidth={true}
            label={"プロフィール"}
            multiline={true}
            required={false}
            rows={6}
            value={message}
            type={"text"}
            onChange={inputMessage}
          />

          <div className="module-spacer--medium" />
          <div className="center">
            <PrimaryButton
              label={"設定する"}
              onClick={() =>
                dispatch(
                  addUserSetting(
                    username,
                    profession,
                    birthday,
                    message,
                    images,
                    uid
                  )
                )
              }
            />
          </div>
          <p>※必須項目を記入した後、ボタンを押して下さい。</p>
        </div>
      </div>
      <div>
        <button onClick={() => dispatch(push("/adviserpage"))}>
          会社のホームに戻る
        </button>
      </div>
    </div>
  );
};

export default Profile;
