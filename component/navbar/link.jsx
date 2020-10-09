import React from 'react';
const { Component} = React;

import './link.css';

class Link extends Component {

    render() {
        return (
            <div className="link_container">
                {this.props.link.map((link, idx) => {
                    return <button className="links" key={idx}>{link}</button>
                })}
            </div>
        )
    }
}

export default Link;