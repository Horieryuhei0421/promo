import { React, useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MyIssues from "../components/issues/MyIssues";
import { fetchIdeas } from "../reducks/ideas/operations";
import { getIdeas } from "../reducks/ideas/selectors";
import { getUserId } from "../reducks/users/selectors";

const Sales = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const ideas = getIdeas(selector);
  const uid = getUserId(selector);
  const query = window.location.search;

  const myidea = ideas.filter((idea) => idea.uuid === uid);
  const newmyidea = myidea.filter((newidea) => newidea.quantity === 0);

  console.log(newmyidea);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, [query]);

  return (
    <div>
      <div className="main-back">
        <div>
          {newmyidea.length > 0 ? (
            newmyidea.map((idea) => <p>{idea.idea}</p>)
          ) : (
            <>
              <p className="noIdeaMess">届いているアイデアがありません</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sales;
