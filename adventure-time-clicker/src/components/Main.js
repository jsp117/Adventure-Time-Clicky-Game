import React from "react";
import Image from "./Image";
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

// shuffle();

function shuffle() {
  for (let i = 0; i < array.length; i++) {
    var x = Math.floor(Math.random() * i);
    var y = array[i];
    array[i] = array[x];
    array[x] = y;

  }
}

function calculate(){
  console.log("WORKING");
  shuffle();
}



function Main() {
  return (
    <div className="wrapper">
      <div className="container text-center" >
        <div className="row pb-3 pt-5">
          <div className="col character" onClick={calculate} data-value={array[0]}><Image index={0} /></div>
          <div className="col character" onClick={calculate} data-value={array[1]}><Image index={1} /></div>
          <div className="col character" onClick={calculate} data-value={array[2]}><Image index={2} /></div>
          <div className="col character" onClick={calculate} data-value={array[3]}><Image index={3} /></div>
        </div>
        <div className="row pb-3">
          <div className="col character" onClick={calculate} data-value={array[4]}><Image index={4} /></div>
          <div className="col character" onClick={calculate} data-value={array[5]}><Image index={5} /></div>
          <div className="col character" onClick={calculate} data-value={array[6]}><Image index={6} /></div>
          <div className="col character" onClick={calculate} data-value={array[7]}><Image index={7} /></div>
        </div>
        <div className="row pb-3">
          <div className="col character" onClick={calculate} data-value={array[8]}><Image index={8} /></div>
          <div className="col character" onClick={calculate} data-value={array[9]}><Image index={9} /></div>
          <div className="col character" onClick={calculate} data-value={array[10]}><Image index={10} /></div>
          <div className="col character" onClick={calculate} data-value={array[11]}><Image index={11} /></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
