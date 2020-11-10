import React from "react";
import "../styles/Main.css";
import finn from "../assets/finn.png";
import jake from "../assets/jake1.jpg";
import marceline from "../assets/marceline.jpg";
import pbg from "../assets/princessbub.png";
import bmo from "../assets/bmo1.jpg";
import iceking from "../assets/iceking.jpg";
import flame from "../assets/flameprincess.png";
import lsp from "../assets/lsp1.jpg";
import lemongrab from "../assets/lemongrab1.png";
import gunther from "../assets/gunther1.jpg";
import peppermint from "../assets/peppermintbutler1.jpg";
import prismo from "../assets/prismo1.jpg";

// var container = document.getElementsByClassName("container-fluid");
var array = [finn, jake, marceline, pbg, bmo, iceking, flame, lsp, lemongrab, gunther, peppermint, prismo];

shuffle();

function shuffle() {
  for (let i = 0; i < array.length; i++) {
    var x = Math.floor(Math.random() * i);
    var y = array[i];
    array[i] = array[x];
    array[x] = y;

  }
  console.log(array);
  // for (let i = 0; i < array.length; i++) {
  //   // let content = <img src={array[i]} alt="Adventure Time Character"></img>
  //   // container.innerHTML(content);
  // }

}

function calculate(){
  console.log("WORKING");
}


function Main() {
  return (
    <div className="wrapper">
      <div className="container text-center" >
        <div className="row pb-3 pt-5">
          <div className="col character" onClick={calculate()} data-value={array[0]}><img className="img" src={array[0]} alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[1]}><img className="img" src={array[1]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[2]}><img className="img" src={array[2]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[3]}><img className="img" src={array[3]}  alt="Adventure Time Character"></img></div>
        </div>
        <div className="row pb-3">
          <div className="col character" onClick={calculate()} data-value={array[4]}><img className="img" src={array[4]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[5]}><img className="img" src={array[5]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[6]}><img className="img" src={array[6]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[7]}><img className="img" src={array[7]}  alt="Adventure Time Character"></img></div>
        </div>
        <div className="row pb-3">
          <div className="col character" onClick={calculate()} data-value={array[8]}><img className="img" src={array[8]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[9]}><img className="img" src={array[9]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[10]}><img className="img" src={array[10]}  alt="Adventure Time Character"></img></div>
          <div className="col character" onClick={calculate()} data-value={array[11]}><img className="img" src={array[11]}  alt="Adventure Time Character"></img></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
