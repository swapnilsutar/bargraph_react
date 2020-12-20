import React, { useState } from "react";
import Bargraph from "./Bargraph";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from "./Student";

const App = () =>{
  const [info, setInfo] = useState({name:'Student',math:55,chemistry:65,physics:75});
  // console.log(info);
  return(
    <>
      <div className="row">
        <div className="col-lg-6 graph">
          <Bargraph 
          name={info.name}
          math={info.math}
          chemistry={info.chemistry}
          physics={info.physics}
        />
        
        <h3 className="text-center">Bargraph</h3>
        
        </div>
        <div className="col-lg-6 data">
        <h1>Student Data</h1>

        <Student 
            setIno={setInfo}
          />
        </div>
      </div>

      <footer className="text-center">
        <a href="https://swapnilsutar.netlify.com" target="_blank"> Swapnil Sutar</a>
        </footer>
    </>
  );
}

export default App;