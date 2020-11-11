import React from "react";
import Image from "./Image";
import "../styles/Main.css";
import Header from "./Header";
import characters from "../assets/adventure.json";
// var container = document.getElementsByClassName("container-fluid");


class Main extends React.Component {

  state = {
    characters: characters,
    correct: 0,
    selected: [],
    highscore: 0

  }

  handleClick = id => {
    let correct = this.state.correct;
    console.log("all characters", this.state.characters);
    let selectedCharacter = this.state.characters[id - 1].name;
    if (this.state.selected.includes(selectedCharacter)) {
      correct = 0;
      this.setState({ correct: correct, selected: []});
  
      return alert("You already clicked me!");
    } else {
      correct += 1;
      this.setState({ correct: correct, selected: this.state.selected.concat([selectedCharacter]) });
      this.shuffle();
      console.log("already selected characters", this.state.selected);
      console.log("score", correct);
    }
    if(this.state.correct>this.state.highscore){
      this.setState({highscore: correct});
      // return alert("New High Score!");
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
    this.setState({ characters: holder })
  }

  render() {
    return (
      <React.Fragment>
        <Header score={this.state.correct} highscore={this.state.highscore} />

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
      </React.Fragment>
    );
  }
}

export default Main;
