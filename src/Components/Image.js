import React from 'react';
import { useDispatch } from '../Context/PhotoContext';
import styled from 'styled-components';
import { TOGGLE_MODAL } from '../reducer/actions';

const ImageBox = styled.li`
  width: 220px;
  height: 165px;
  overflow: hidden;
  margin: 10px;
  &:hover img {
    transform: scale(1.65);
  }
`;

const ImageContent = styled.img`
  width: 100%;
  transform: scale(1.25);
  transition: transform 1.25s;
`;

const Image = ({ url, alt, link }) => {
  const dispatch = useDispatch();
  // console.log(alt);
  const openModal = () => {
    dispatch({ type: TOGGLE_MODAL, payload: { link } });
  };

  return (
    <ImageBox>
      <ImageContent src={url} alt={alt} onClick={openModal} />
    </ImageBox>
  );
};

export default Image;
