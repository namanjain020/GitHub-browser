import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import { SplitPane } from "react-collapse-pane";
import RepositoryBox from "./RepositoryBox";
import AddRep from "./AddRep";
import DeleteRep from "./DeleteRep";
import RepDetail from "./RepDetail";
import Header from "./Header";
import SetUser from "./SetUser";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [repName, setRepName] = useState("");
  const URL_BASE = "https://api.github.com/users/" + user + "/repos?&per_page=100";
  const [dataArray, setDataArray] = useState([]);

  useEffect(()=>{
    axios.get(URL_BASE).then(function (res) {
      setDataArray(res.data);
    });
    console.log(dataArray.length);
  },[user,URL_BASE])
  return (
    <div>
      <Header />
      <SplitPane split="vertical" minSize={50} maxSize={1000000}>
        <div className="LeftPane" >
        <SetUser setUser={setUser}/>
          <div className="scrollBox">
            {
              dataArray.map((rep) => (
                <RepositoryBox
                  name={rep.name}
                  descrip={rep.description}
                  setRepName={setRepName}
                />
              ))
            }
          </div>
          <AddRep />
        </div>
        <div className="RightPane">
          <DeleteRep
            dataArray={dataArray}
            setDataArray={setDataArray}
            repName={repName}
            setRepName={setRepName}
          />
          <RepDetail user={user} repName={repName} />
        </div>
      </SplitPane>
    </div>
  );
}
export default App;
