import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component {
    closeModal() {
        let modal = document.getElementById('modal');
        modal.style.display = "none";
    }

    render(props) {
        return (
            <div id="modal" className="modal" onClick={this.closeModal}>
                <button title="Close modal" id="close" className="close" onClick={this.closeModal}><FontAwesomeIcon icon={faTimes} /></button>
                <div className="modal-content">
                    <img alt="Photo taken by Alejandro Escamillas" src={this.props.image}/>
                </div>
            </div>
        );
    }
}

export default Modal;