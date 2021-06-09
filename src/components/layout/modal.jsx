import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(!isOpen);

    if(!isOpen) {
        return (
            <button onClick={handleShow}>Open</button>
        )
    } else {
        return(
            <ModalContainer isOpen={isOpen} onHide={handleClose}>
                <ModalContent>
                    <ModalHeader>
                        <h4>Hello World!</h4>
                        <CloseIcon className="fas fa-times" onClick={handleClose} />
                    </ModalHeader>
                    <ModalBody>
                        This is Modal Body<br /> <br/>
                        <CloseLink href="" onClick={handleClose}>Close</CloseLink>
                    </ModalBody>
                </ModalContent>
            </ModalContainer>
        );
    }
}

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
`;

const ModalContent = styled.div`
  width: 30%;
  height: 30vh;
  background-color: #fff;
  border-radius: 4px;
`;

const ModalHeader = styled.div`
  width: 100%;
  //padding: 10px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    padding: 0 10px;
  }
`;

const ModalBody = styled.div`
  padding: 10px;
`;

const CloseIcon = styled.i`
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    color: #ddd;
    transition: all 0.2s ease-in-out;
  }
`;

const CloseLink = styled.a`
  text-decoration: none;
  padding: 10px;
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 4px;
  color: #000;
  &:hover {
    background-color: ${props => props.theme.cardBackgroundColor};
  }
`;
