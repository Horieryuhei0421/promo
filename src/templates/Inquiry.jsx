import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { PrimaryButton, TextInput } from "../components/UIkit";
import { push } from "connected-react-router";

const Inquiry = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputForm = useCallback(
    (event) => {
      setForm(event.target.value);
    },
    [setForm]
  );

  const submitform = (name, email, form) => {
    const payload = {
      text:
        "お問い合わせがありました\n" +
        "お名前：" +
        name +
        "\n" +
        "Email：" +
        email +
        "\n" +
        "問い合わせ内容：\n" +
        form,
    };

    // const payload = {
    //   text: "これは、チャンネル内のテキスト行です。そしてもう1つテキスト行があります。",
    // };

    const url =
      "https://hooks.slack.com/services/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";

    fetch(url, {
      method: "post",
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信が完了しました。");
      dispatch(push("/adviserpage"));
    });
  };

  return (
    <div className="main-back">
      <div className="main-pop-flame3">
        <h2 className="u-text-center u-text__headline">お問い合わせ</h2>
        <div className="main-pop-flame2">
          <div className="module-spacer--medium" />
          <TextInput
            fullWidth={true}
            label={"名前"}
            multiline={false}
            required={true}
            rows={1}
            value={name}
            type={"name"}
            onChange={inputName}
          />
          <TextInput
            fullWidth={true}
            label={"E-mail"}
            multiline={false}
            required={true}
            rows={1}
            value={email}
            type={"email"}
            onChange={inputEmail}
          />
          <TextInput
            fullWidth={true}
            label={"こちらにご記入お願いします。"}
            multiline={true}
            required={true}
            rows={7}
            value={form}
            type={"form"}
            onChange={inputForm}
          />
          <div className="module-spacer--medium" />
          <div className="center">
            <PrimaryButton
              label={"送信"}
              onClick={() => submitform(name, email, form)}
            />
            <div className="module-spacer--medium" />
            <p onClick={() => dispatch(push("/adviserpage"))}>ホームに戻る</p>
          </div>
          <div className="module-spacer--medium" />
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
