import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../reducks/users/selectors";
import ImageArea from "../components/issues/ImageArea";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { saveIssue } from "../reducks/issues/operations";
// import { db } from "../firebase";
import { push } from "connected-react-router";

const IssueEdit = () => {
  const dispatch = useDispatch();
  // let id = window.location.pathname.split("/product/edit")[1];
  // if (id !== "") {
  //   id = id.split("/")[1];
  // }

  const [name, setName] = useState(""),
    [subHead, setSubHead] = useState(""),
    [description, setDescription] = useState(""),
    [images, setImages] = useState([]),
    [price, setPrice] = useState("");

  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputSubHead = useCallback(
    (event) => {
      setSubHead(event.target.value);
    },
    [setSubHead]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );

  // useEffect(() => {
  //   if (id !== "") {
  //     db.collection("products")
  //       .doc(id)
  //       .get()
  //       .then((snapshot) => {
  //         const data = snapshot.data();
  //         setImages(data.images);
  //         setName(data.name);
  //         setDescription(data.description);
  //         setPrice(data.price);
  //       });
  //   }
  // }, [id]);

  return (
    <section>
      <div className="c-section-container">
        <h2 className="u-text__headline u-text-center">案件を記入する</h2>
        <ImageArea images={images} setImages={setImages} />
        <TextInput
          fullWidth={true}
          label={"会社名"}
          multiline={false}
          required={true}
          onChange={inputName}
          rows={1}
          value={name}
          type={"text"}
        />
        <TextInput
          fullWidth={true}
          label={"案件見出し"}
          multiline={false}
          required={true}
          onChange={inputSubHead}
          rows={1}
          value={subHead}
          type={"text"}
        />
        <TextInput
          fullWidth={true}
          label={"案件詳細"}
          multiline={true}
          required={true}
          onChange={inputDescription}
          rows={5}
          value={description}
          type={"text"}
        />
        <TextInput
          fullWidth={true}
          label={"価格"}
          multiline={false}
          required={true}
          onChange={inputPrice}
          rows={1}
          value={price}
          type={"number"}
        />
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={"提案を募集する"}
            onClick={() =>
              dispatch(
                saveIssue(name, subHead, description, price, images, uid)
              )
            }
          />
        </div>
      </div>
      <button onClick={() => dispatch(push("/companypage"))}>
        会社ページに戻りたーい！！
      </button>
    </section>
  );
};

export default IssueEdit;
