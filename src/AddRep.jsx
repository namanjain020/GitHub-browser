import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddNewPopUp from "./AddNewPopUp";


function AddRep(){
    return (<div >
    <Popup trigger={<button className="AddButton"> + </button>} modal>
<AddNewPopUp />
</Popup>
    </div>)
}

export default AddRep;

