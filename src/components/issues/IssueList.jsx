import React, { useEffect } from "react";
import IssueCard from "./IssueCard";
import { useDispatch } from "react-redux";
import { fetchIssues } from "../../reducks/issues/operations";
import { getIssues } from "../../reducks/issues/selectors";
import { useSelector } from "react-redux";

const IssueList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const issues = getIssues(selector);

  const query = window.location.search;

  useEffect(() => {
    dispatch(fetchIssues());
  }, [query]);

  return (
    <div className="main-pop-flame">
      <section className="c-section-wrapin">
        <div className="p-grid__row">
          {issues.length > 0 &&
            issues.map((issue) => (
              <IssueCard
                key={issue.id}
                id={issue.id}
                uid={issue.uid}
                name={issue.name}
                subHead={issue.subHead}
                images={issue.images}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default IssueList;
