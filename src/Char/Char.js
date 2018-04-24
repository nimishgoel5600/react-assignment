import React, { Component } from 'react';

class Char extends Component {
    render() {
        let style={
            display:'inline-block',
            padding:'16px',
            textAlign:'center',
            margin:'16px',
            border:'1px solid black'
        };
        return (
            <div style={style} onClick={this.props.deleteChar}>
                {this.props.character}
            </div>
        );
    }
}

export default Char;