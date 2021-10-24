import React, { useEffect } from "react";
import IssueCard from "./IssueCard";
import { useDispatch } from "react-redux";
import { fetchIssues } from "../../reducks/issues/operations";
import { getIssues } from "../../reducks/issues/selectors";
import { useSelector } from "react-redux";
import { getUserId } from "../../reducks/users/selectors";

const MyIssues = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const issues = getIssues(selector);
  const userId = getUserId(selector);
  const query = window.location.search;

  const myIssue = issues.filter((issue) => issue.uid === userId);

  useEffect(() => {
    dispatch(fetchIssues());
  }, [query]);

  return (
    <div className="main-pop-flame">
      <section className="c-section-wrapin">
        {myIssue.length > 0 ? (
          myIssue.map((issue) => (
            <div className="p-grid__row">
              <IssueCard
                key={issue.id}
                id={issue.id}
                uid={issue.uid}
                name={issue.name}
                subHead={issue.subHead}
                images={issue.images}
              />
            </div>
          ))
        ) : (
          <>
            <p className="noIssueMess">
              現在あなたが募集している案件はありません
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default MyIssues;
