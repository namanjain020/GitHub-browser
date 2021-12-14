import React, { useState } from "react";
import IssueTab from "./IssueTab";
import axios from "axios";

function RepDetail(props) {
  const initState = [];
  const [description, setDescription] = useState([{
    name:"",
    title:"",
    avatar_url:"",
    login:""
  }]);
  const [toggle,setToggle]=useState(true);
  const repName=props.repName;
  function branchClick() {
    const URL_BRANCHES =
      "https://api.github.com/repos/"+props.user+"/" + repName + "/branches";
    setDescription(initState);
    axios.get(URL_BRANCHES).then(function (res) {
      res.data.forEach((element) => {
        setDescription((prevDescription) => {
          return [...prevDescription, {name:element.name}];
        });
      });
    });
    console.log(description);
    setToggle(true);
  }
  function issuesClick() {
    const URL_ISSUES =
      "https://api.github.com/repos/"+props.user+"/" + repName + "/issues";
    setDescription(initState);
    axios.get(URL_ISSUES).then(function (res) {
      res.data.forEach((element) => {
        setDescription((prevDescription) => {
          return [...prevDescription, {title:element.title,avatar_url:element.user.avatar_url,login:element.user.login}];
        });
      });
    });
    setToggle(false);
  }
  return (
    <div>
    <div className="RepBoxTab" onClick={branchClick}>
        BRANCHES
      </div>
      <div className="RepBoxTab" onClick={issuesClick}>
        ISSUES
      </div>
    <div className="RepBox">
      <h1>{repName}</h1>
      <ul className="list">
        {toggle?description.map(function (el) {
          return <div>{el.name}</div>;
        }):description.map(function (el) {
          return <IssueTab title={el.title} login={el.login} avatar_url={el.avatar_url}  />;
        })}
      </ul>
    </div>
    </div>
  );
}

export default RepDetail;
