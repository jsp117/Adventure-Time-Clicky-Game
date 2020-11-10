import React from "react";
import "../styles/Main.css";
import finn from "../assets/finn.png"
import jake from "../assets/jake1.jpg"
import marceline from "../assets/marceline.jpg"
import pbg from "../assets/princessbub.png"
import bmo from "../assets/bmo1.jpg"
import iceking from "../assets/iceking.jpg"
import flame from "../assets/flameprincess.png"
import lsp from "../assets/lsp1.jpg"
import lemongrab from "../assets/lemongrab1.png"
import gunther from "../assets/gunther1.jpg"
import peppermint from "../assets/peppermintbutler1.jpg"
import prismo from "../assets/prismo1.jpg"


function Main() {
  return (
    <div className="container-fluid text-center" >
      <div className="row pb-3 pt-5">
        <div className="col-sm-3 character"><img src={finn} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={jake} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={marceline} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={pbg} alt="Finn The Human"></img></div>
      </div>
      <div className="row pb-3">
        <div className="col-sm-3 character"><img src={bmo} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={iceking} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={flame} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={lsp} alt="Finn The Human"></img></div>
      </div>
      <div className="row pb-3">
        <div className="col-sm-3 character"><img src={lemongrab} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={gunther} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={peppermint} alt="Finn The Human"></img></div>
        <div className="col-sm-3 character"><img src={prismo} alt="Finn The Human"></img></div>
      </div>
    </div>
  );
}

export default Main;
