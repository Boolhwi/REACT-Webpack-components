import React from 'react';
const { Component } = React;

import Button from './modal/button.jsx';
import Window from './modal/window.jsx';


class Modal extends Component {

    state = {
        show: false,
    }

    modal_handler = e => {

        if (this.state.show) {
            this.setState({
                show: false
            })
        }
        else this.setState({
            show: true
        })
    }

    render() {
        if (this.state.show) {
            return (
                <div className="modal_container">
                    <div className="modal_button">
                        <Button button={this.props.modal.button} handler={this.modal_handler} />
                    </div>
                    <div className="window">
                        <Window window={this.props.modal.window} handler={this.modal_handler}/>
                    </div>
                </div>
            )
        }
        return (
            <div className="modal_container">
                <div className="modal_button">
                    <Button button={this.props.modal.button} handler={this.modal_handler} />
                </div>
            </div>
        )
    }
}

export default Modal;