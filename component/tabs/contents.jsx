import React from 'react';
const { Component} = React;
import './contents.css';

class Contents extends Component {

    render() {
        return (
            <div className="tabs_contents">
                {this.props.contents}
            </div>
        )
    }
}

export default Contents;