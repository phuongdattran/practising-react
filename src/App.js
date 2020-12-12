import './App.css';
import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Word from './components/word';
import ResetBtn from './components/resetBtn';

let alphabet = 'azertyuiopqsdfghjklmwxcvbn'.toUpperCase().split('').sort();
let arrayObjectAlphabet = alphabet.map(letter => {return ({id: letter, value: letter, guessed:false})})

let word = 'banane'.toUpperCase().split('');
let arrayObjectWord = word.map(letter => {return ({id: Date.now()+Math.random() * 10000, value: letter, found:false})});

let hp = 6;

class App extends Component {
  state = {
    alphabet: arrayObjectAlphabet,
    word: arrayObjectWord,
    nbrOfLettersToGuess: arrayObjectWord.length,
    hp
  }

  handleGuess = (letter) => {
    let alphabet = [...this.state.alphabet];
    let index = alphabet.indexOf(letter)
    alphabet[index] = {...letter};
    alphabet[index].guessed = true;

    let word = [...this.state.word];
    word = word.map(letterWord => {return letterWord.value === letter.value ? {...letterWord, found: true} : letterWord});
    
    let nbrOfLettersToGuess = this.state.word.length;
    word.forEach(letter => letter.found && nbrOfLettersToGuess--)

    let hp = this.state.hp;
    let nbrNotCorrespondingLetter = word.filter(letterInWord => letterInWord.value !== letter.value && letterInWord.value).length //=== arrayObjectWord.length ? hp-- : hp;
    if (nbrNotCorrespondingLetter === arrayObjectWord.length) hp--;
    
    this.setState({ alphabet, word, nbrOfLettersToGuess, hp });
  };

  handleReset = () => {
    this.setState({
      alphabet: arrayObjectAlphabet,
      word: arrayObjectWord,
      nbrOfLettersToGuess: arrayObjectWord.length,
      hp
    })
  }

  render() {
    return (
      <div>
        <div id="hp">Life: {this.state.hp}</div>
        <Word word={this.state.word} />
        {this.state.nbrOfLettersToGuess !== 0 && this.state.hp > 0 ?  <Keyboard alphabet={this.state.alphabet} onGuess={this.handleGuess} /> : <ResetBtn onReset={this.handleReset} />}
      </div>
    );
  }
}

export default App;
