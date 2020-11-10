import React from "react";
import "../styles/Main.css";
import finn from "../assets/finn.png"
import jake from "../assets/jake1.png"
import marceline from "../assets/marceline.jpg"
import pbg from "../assets/princessbub.png"
import bmo from "../assets/bmo1.png"
// import finn from "../assets/finn.png"
// import finn from "../assets/finn.png"
// import finn from "../assets/finn.png"
// import finn from "../assets/finn.png"
// import finn from "../assets/finn.png"
// import finn from "../assets/finn.png"
// import finn from "../assets/finn.png"


function Main() {
  return (
    <div className="container-fluid text-center" >
      <div className="row pb-3 pt-5">
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     </div>
     <div className="row pb-3">
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     </div>
     <div className="row pb-3">
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     <div className="col-sm-3"><img src={finn} alt="Finn The Human"></img></div>
     </div>
    </div>
  );
}

export default Main;
