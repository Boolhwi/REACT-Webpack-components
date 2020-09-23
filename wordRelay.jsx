const React = require('react');
const { Component} = React;

class WordRelay extends Component {
    state = {
        text: 'hello, webpack'
    }

    render() {
        return <h1>{this.state.text} <div>오류떳니?로롤</div></h1>
    }
}

module.exports = WordRelay;