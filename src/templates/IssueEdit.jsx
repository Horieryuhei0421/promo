import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../reducks/users/selectors";
import ImageArea from "../components/issues/ImageArea";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { saveIssue } from "../reducks/issues/operations";

const IssueEdit = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  // let id = window.location.pathname.split("/issue/edit")[1];
  // if (id !== "") {
  //   console.log(id);
  //   id = id.split("/")[1];
  // }

  const [name, setName] = useState(""),
    [subHead, setSubHead] = useState(""),
    [description, setDescription] = useState(""),
    [images, setImages] = useState([]);

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

  // useEffect(() => {
  //   if (id !== "") {
  //     db.collection("issues")
  //       .doc(id)
  //       .get()
  //       .then((snapshot) => {
  //         const data = snapshot.data();
  //         setName(data.name);
  //         setSubHead(data.subHead);
  //         setDescription(data.description);
  //         setImages(data.images);
  //       });
  //   }
  // }, [id]);

  return (
    <section>
      <div className="main-back">
        <div className="main-pop-flame3">
          <h2 className="u-text__headline u-text-center">案件を記入する</h2>
          <div className="main-pop-flame2">
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
            <div className="module-spacer--small" />
            <div className="center">
              <PrimaryButton
                label={"提案を募集する"}
                // onClick={() =>
                //   dispatch(
                //     saveIssue(id, name, subHead, description, images, uid)
                //   )
                onClick={() =>
                  dispatch(saveIssue(name, subHead, description, images, uid))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssueEdit;
