import React from "react";
import Image from "./Image"
import "../styles/Main.css";

import characters from "../assets/adventure.json"

// var container = document.getElementsByClassName("container-fluid");


class Main extends Component {

  state = {
    characters: characters,
    correct: 0,
    selected: [],

  }

  handleClick = id => {

    const name = event.target.name;
  }

  // shuffle();

  shuffle = () => {
    for (let i = 0; i < array.length; i++) {
      var x = Math.floor(Math.random() * i);
      var y = array[i];
      array[i] = array[x];
      array[x] = y;
    }
    console.log(array);
  }

  render() {
    return (
      <div className="wrapper">
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
    );
  }
}

export default Main;
