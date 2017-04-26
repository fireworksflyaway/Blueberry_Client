/**
 * Created by Mason Jackson in Office on 2017/4/26.
 */
import React from 'react';
import {Modal} from 'react-overlays';
import '../style/modal.scss'
const MyModal = React.createClass({

    getInitialState(){
        return { showModal: false };
    },

    render() {

        return (
            <div className='modal-example'>
                <Modal aria-labelledby='modal-label' show={this.state.showModal} onHide={this.close}>
                    <div className="dialogStyle" >
                        <div className="dialogHeader">
                            <span>{this.props.title}</span>
                            <a href="#" onClick={this.close} className="dialogCloseLink">X</a>
                        </div>
                        <div className="dialogContent">
                            {this.props.children}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    },

    close(){
        this.setState({ showModal: false });
    },

    open(){
        this.setState({ showModal: true });
    }
});
module.exports = MyModal;