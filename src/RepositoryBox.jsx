import React from "react";

function RepositoryBox(props) {
  function trigger(event) {
    props.setRepName(props.name);
  }
  return (
    <div className="RepBox" onClick={trigger}>
      <h1>{props.name.substring(0,25)}</h1>
      <p>{props.descrip}</p>
    </div>
  );
}

export default RepositoryBox;
