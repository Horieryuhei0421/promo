import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MyIssues from "../components/issues/MyIssues";
import { fetchIdeas } from "../reducks/ideas/operations";
import { getIdeas } from "../reducks/ideas/selectors";
import { getUserId } from "../reducks/users/selectors";
import GeneralCard from "../components/UIkit/GeneralCard";

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
    <div className="main-back">
      <div className="module-spacer--medium" />
      <div className="main-pop-flame2">
        <h2 className="idea-title">売り上げ一覧</h2>

        {newmyidea.length > 0 ? (
          newmyidea.map((order) => (
            <>
              <GeneralCard
                idea={order.idea}
                price={order.price}
                issueId={order.issueId}
              />
            </>
          ))
        ) : (
          <>
            <div>
              <div className="module-spacer--medium" />
              <div className="module-spacer--medium" />

              <p>購入された提案がありません</p>
            </div>
          </>
        )}
      </div>
      <div className="module-spacer--medium" />
    </div>
  );
};

export default Sales;
