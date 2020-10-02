import React from 'react';
const { Component} = React;
import './title.css';

class Title extends Component {
    render() {
        return (
            <div className="card_title">
                {this.props.title}
            </div>
        )
    }
}

export default Title;