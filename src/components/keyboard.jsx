import React, { Component } from 'react';
import LetterBtn from './letterBtn';

class Keyboard extends Component {
    render() { 
        const {alphabet, onGuess} = this.props
        
        return ( 
            <div id="keyboard">
                {alphabet.map(letter => (
                    <LetterBtn key={letter.id} letter={letter} onGuess={onGuess}/>
                ))}
            </div>
        );
    }
}

export default Keyboard;