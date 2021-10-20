import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchIdeas } from "../../reducks/ideas/operations";
import { getIdeas } from "../../reducks/ideas/selectors";

const IdeaList = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const ideas = getIdeas(selector);

  const query = window.location.search;

  const newidea = ideas.filter((idea) => idea.issueId === props.issueId);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, [query]);

  return (
    <>
      <div className="main-pop-flame-issue">
        {newidea.length > 0 && newidea.map((idea) => <p>{idea.idea}</p>)}
      </div>
    </>
  );
};

export default IdeaList;
