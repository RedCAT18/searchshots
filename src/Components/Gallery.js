import React from 'react';
import styled from 'styled-components';
import NoImages from './NoImages';
import Image from './Image';
import Pages from './Pages';
import Modal from './Modal';
import { useImage } from '../Context/PhotoContext';

const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
  margin: auto;
`;

const Gallery = (props) => {
  // console.log(props);
  const { openModal, link } = useImage();
  const { data } = props;
  let images, noImages;

  if (data.length > 0) {
    images = data.map((image) => {
      let { farm, server, id, secret, title } = image;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      let link = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;
      return <Image url={url} key={id} link={link} alt={title} />;
    });
  } else {
    noImages = <NoImages />;
  }
  // console.log(images);
  return (
    <>
      <List>{images}</List>
      {noImages}
      {openModal ? <Modal link={link} /> : null}
      {images ? <Pages /> : null}
    </>
  );
};

export default Gallery;
