# Adventure-Time-Clicky-Game

## Description

This application is a clicker game built with React. To begin this application, I built out the components necessary to display each portion of the page, starting with a header and body. The header consists of the title, a score tracker and a high score tracker. Each of these point values are sent to the header component as props. The file main.js contains a class that renders the header and body containing all of the images. This class also contains the functions that handle clicks and shuffle the images. The handleClick function contains the functionality to store user selected characters, increase score, and end the game. Each time a user clicks a character, there is an if statement that checks that character against an array of previously selected characters. If that character is in the "selected" array, an alert pops up that tells the user the game is over, and the users score resets to 0. If the clicked character isn't in the array, the users score goes up and the characters are shuffled using the shuffle function. The shuffle function simply shuffles the array of characters and the uses the setState method to render the page again. A user wins the game when they click a different character 12 times.  

![Usage](/src/assets/usage.gif)

## Table of Contents
* [Description](#description)
* [Deployed Link](#deployed-link)
* [Code Snippets](#code_snippets)
* [Built With](#built_with)
* [Author](#author)
* [License](#license)
* [Acknowledgements](#acknowledgements)


## Deployed Link

* [See Live Site](https://jsp117.github.io/Adventure-Time-Clicky-Game/)


## Code_Snippets

This code snippet displays the handleClick function, which contains almost all of the games functionality. It sets the state of the four variables that control the game: characters, correct, selected, and highscore. Characters are imported from the JSON file "adventure" and then used to pass the image urls and names onto the image component to display properly. Each time a user clicks a character, that character is checked against the array of selected characters stored as the state "selected". If the character is already in the array, the user loses. If it isnt, it is added to the array and the user gains a point. In both of these scenarios, the shuffle function is called after to shuffle the array of characters and render them. 


```
handleClick = id => {
    let correct = this.state.correct;
    let holder = this.state.characters.filter(x => x.id === id);
    let selectedCharacter = holder[0].name;
    if (this.state.selected.includes(selectedCharacter)) {
      if (this.state.correct > this.state.highscore) {
        this.setState({ highscore: correct });
        // return alert("New High Score!");
      }
      correct = 0;
      this.setState({ correct: correct, selected: [] });
      this.shuffle();
      return alert("Game over");
    } else {
      correct += 1;
      if (correct > this.state.highscore) {
        this.setState({ highscore: correct });
        // return alert("New High Score!");
      }
      if (correct > 11) {
        correct = 0;
        this.setState({ correct: correct, selected: [] });
        return alert("You Win!");
      }
      this.setState({ correct: correct, selected: this.state.selected.concat([selectedCharacter]) });
      this.shuffle();
    }

  }
```

This code snippet displays where the Image component is rendered, along with the props being passed. The handleClick function is the event handler and contains the games mechanics. 

```
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
```

## Built_with
* [React](https://reactjs.org/)
* JavaScript
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [npm](https://www.npmjs.com/)
* [Github](https://github.com/)

## Author
Jonathan SanPedro - Bachelors of Information Technology at Rutgers New Brunswick - Student at Berkeley Coding Bootcamp


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright &copy; [2020] [Jonathan J. SanPedro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgements

* Thank you to my teachers Jerome, Manuel, Kerwin and Ryan

