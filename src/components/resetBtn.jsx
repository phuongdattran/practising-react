import React, { Component } from 'react';

class resetBtn extends Component {
    render() { 
        return ( 
            <div id="btnContainer">
                <button id="resetBtn" onClick={this.props.onReset}>Reset</button>
            </div>
         );
    }
}
 
export default resetBtn;