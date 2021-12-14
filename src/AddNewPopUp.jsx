import React from "react";
import prog from "./programming.png";

function AddNewPopUp() {
  return (
    <div className="Popup">
      <img alt="PROGRAMMING IS FUN" src={prog} />
      <h1>ADD NEW REPOSITORY</h1>
      <form>
        <div className="form-group">
        <label for="Owner">Owner/Organization</label>
        <input
          type="text"
          class="form-control"
          id="Owner"
        />
        </div>

        <div className="form-group">
        <label for="Rep">Repository Name</label>
        <input
          type="text"
          class="form-control"
          id="Rep"
        />
        </div>
        <button type="submit" class="btn btn-primary">ADD</button>
      </form>
    </div>
  );
}

export default AddNewPopUp;
