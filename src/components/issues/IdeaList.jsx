import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const IdeaList = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const query = window.location.search;

  useEffect(() => {
    console.log("asd");
  }, [query]);

  return (
    <>
      <div className="main-pop-flame-issue"></div>
    </>
  );
};

export default IdeaList;
