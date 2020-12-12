import React, { Component } from 'react';

class Letter extends Component {
    render() { 
        return ( 
                <span className="wordLetter">{this.displayLetter()}</span>
        );
    }
    displayLetter() {
        const {found, value} = this.props.letter
        return found ? value : "_";
    }
}

export default Letter;