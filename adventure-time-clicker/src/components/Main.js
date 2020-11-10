import React from "react";
import Image from "./Image";
import "../styles/Main.css";

import characters from "../assets/adventure.json";
// var container = document.getElementsByClassName("container-fluid");


class Main extends React.Component {

  state = {
    characters: characters,
    correct: 0,
    selected: [],

  }

  handleClick = id => {
    let correct = this.state.correct;
    console.log("all characters", this.state.characters);
    let selectedCharacter = this.state.characters[id].name;
    if (this.state.selected.includes(selectedCharacter)) {
      correct = 0;
      this.setState({correct: correct});
      return alert("You already clicked me!");
    } else {
      this.state.selected.push(selectedCharacter);
     
      correct += 1;
      this.setState({correct: correct});
      this.shuffle();
      console.log("already selected characters", this.state.selected);
      console.log("score", correct);
    }

  }

  // shuffle();

  shuffle = () => {
    let holder = this.state.characters;
    for (let i = 0; i < holder.length; i++) {
      var x = Math.floor(Math.random() * i);
      var y = holder[i];
      holder[i] = holder[x];
      holder[x] = y;
    }
    console.log(holder);
    this.setState({characters: holder})
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
        <div className="text-center row" >
          {this.state.characters.map(characters => (
            <Image
              handleClick={this.handleClick}
              id={characters.id}
              key={characters.id}
              name={characters.name}
              image={characters.image}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
