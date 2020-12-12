import React, { Component } from 'react';

class LetterBtn extends Component {
    render() { 
        const {letter, onGuess} = this.props;
        return ( 
                <button className="letter" value={letter.value} onClick={()=>onGuess(letter)} disabled={this.getDisabled()}>{letter.value}</button>
        );
    }

    getDisabled() {
        return this.props.letter.guessed;
    }
}

export default LetterBtn;