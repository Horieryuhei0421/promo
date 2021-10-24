import React, { useEffect } from "react";
import IdeaCard from "./IdeaCard";
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
        <h1 className="idea-title">アイデア一覧</h1>

        {newidea.length > 0 ? (
          newidea.map((idea) => (
            <IdeaCard
              key={idea.id}
              id={idea.id}
              idea={idea.idea}
              price={idea.price}
              // uuid={props.uuid}
              quantity={idea.quantity}
            />
          ))
        ) : (
          <>
            <p className="noIdeaMess">届いているアイデアがありません</p>
          </>
        )}
      </div>
    </>
  );
};

export default IdeaList;
