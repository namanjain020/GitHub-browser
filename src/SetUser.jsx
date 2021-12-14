import React, { useState } from "react";

function SetUser(props){
    const [temp,setTemp]=useState("");
    function ClickButton(){
        props.setUser(temp);
    }
    function trigger(e){
        setTemp(e.target.value);
    }
    return (<div >
    <input className="inputUser" value={temp} onChange={trigger} placeholder="Search"></input>
    <button className="Enter" onClick={ClickButton}>Enter</button>
    </div>)
}

export default SetUser;

