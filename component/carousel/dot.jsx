import React from 'react';
const { Component} = React;

import './dot.css';

class Dot extends Component {
    render() {
        return (
            <div className="dot_container">
                {this.props.length.map((data, idx) => {
                    if(this.props.index === idx) {
                        return <div key={idx} className="selected_dot" onClick={()=>{this.props.handler(idx)}}></div>
                    }
                    else
                    {
                        return <div key={idx} className="unselected_dot" onClick={()=>{this.props.handler(idx)}}></div>
                    }
                })}
            </div>
        )
    }
}

export default Dot;