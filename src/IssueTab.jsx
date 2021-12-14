import React from "react";

function IssueTab(props) {
  return (
    <div className="IssueTab">
    <p>{props.title}</p>
    <img alt="avatar" src={props.avatar_url} />
    <p>{props.login}</p>
    </div>
  );
}

export default IssueTab;
