import React from 'react';
const { Component} = React;

class Title extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default Title;