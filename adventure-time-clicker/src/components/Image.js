import React from "react";
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

var array = [finn, jake, marceline, pbg, bmo, iceking, flame, lsp, lemongrab, gunther, peppermint, prismo];
function shuffle() {
    for (let i = 0; i < array.length; i++) {
      var x = Math.floor(Math.random() * i);
      var y = array[i];
      array[i] = array[x];
      array[x] = y;
    }
}

function Image(props){
    // shuffle();
    return <img className="img" src={array[props.index]} alt="Adventure Time Character"></img>;
}

export default Image;