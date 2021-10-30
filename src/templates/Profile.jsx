import { React, useState, useCallback } from "react";
import { getUserId } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addUserSetting } from "../reducks/users/operations";
import { push } from "connected-react-router";
import { AnImageArea, PrimaryButton, TextInput } from "../components/UIkit";

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
      <div className="main-back">
        <div className="main-pop-flame3">
          <section className="c-section-wrapin">
            <h1 onClick={() => dispatch(push("/adviserpage"))} className="batu">
              ×
            </h1>
            <h2 className="u-text-center u-text__headline">プロフィール設定</h2>
            <div className="main-pop-flame2">
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
              <div className="module-spacer--extra-small" />
              <p>※必須項目を記入した後、ボタンを押して下さい。</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
