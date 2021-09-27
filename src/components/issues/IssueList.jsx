import React, { useEffect } from "react";
// import IssueCard from "./IssueCard";
import { useDispatch } from "react-redux";
import { fetchIssues } from "../../reducks/issues/operations";
import { getIssues } from "../../reducks/issues/selectors";
import { useSelector } from "react-redux";

const IssueList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const issues = getIssues(selector);

  const query = window.location.search;
  const gender = /^\?gender=/.test(query) ? query.split("?gender=")[1] : "";
  const category = /^\?category=/.test(query)
    ? query.split("?category=")[1]
    : "";

  useEffect(() => {
    dispatch(fetchIssues(gender, category));
  }, [query]);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {issues.length > 0 &&
          issues.map((issue) => (
            // <IssueCard
            //   key={issue.id}
            //   id={issue.id}
            //   name={issue.name}
            //   images={issue.images}
            //   price={issue.price}
            // />
            <h1>{issue.name}</h1>
          ))}
      </div>
    </section>
  );
};

export default IssueList;
