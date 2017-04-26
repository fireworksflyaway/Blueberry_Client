/**
 * Created by Mason Jackson in Office on 2017/4/25.
 */
import React from 'react';
import {Modal,Popover, Tooltip, OverlayTrigger} from 'react-overlays';

const Home = React.createClass({

    getInitialState(){
        return { showModal: false };
    },

    render() {

        return (
            <div className='modal-example'>
                <a href="#" onClick={this.open}>
                    Open Modal
                </a>
                <p>Click to get the full Modal experience!</p>

                <Modal
                    aria-labelledby='modal-label'
                    show={this.state.showModal}
                    onHide={this.close}
                >
                    <div className="dialogStyle" >
                        {this.props.children}
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
module.exports = Home;