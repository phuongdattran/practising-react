import React, { Component } from 'react';
import Letter from './letter';

class Word extends Component {
    render() { 
        return ( 
            <div id="word">
            {this.props.word.map(letter => <Letter key={letter.id} letter={letter} />)}
            </div>
        );
    }
}

export default Word;