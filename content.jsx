import React from 'react';
const { Component} = React;

class Content extends Component {
    render() {
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}

export default Content;