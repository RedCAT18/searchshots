import React from 'react';
import styled from 'styled-components';
import { useDispatch } from '../Context/PhotoContext';
import { TOGGLE_MODAL } from '../reducer/actions';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Close = styled.p`
  position: fixed;
  top: 0;
  margin-top: 5px;
  text-align: center;
  color: white;
`;
const Image = styled.img`
  margin: auto;
  max-width: 96vw;
  max-height: 96vh;
`;

const Modal = ({ link }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: TOGGLE_MODAL, payload: { link: '' } });
  };
  // console.log(link);
  return (
    <Container>
      <Content onClick={closeModal}>
        <Close>Click anywhere to close</Close>
        <Image src={link} alt="" />
        Content
      </Content>
      <Background />
    </Container>
  );
};

export default Modal;
