import React from 'react';
import { MOVE_PAGE } from '../reducer/actions';
import { useDispatch, useImage } from '../Context/PhotoContext';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
`;

const Arrow = styled.button`
  all: unset;
  margin: 0 10px;
  cursor: ${(props) => (props.page === 1 ? 'inherit' : 'pointer')};
  color: ${(props) => (props.page === 1 ? '#edeff0' : 'inherit')};
`;

const Pages = () => {
  const state = useImage();
  const dispatch = useDispatch();

  const movePage = (dirt, page) => {
    dispatch({
      type: MOVE_PAGE,
      payload: {
        page: dirt === 'prev' ? page - 1 : page + 1,
      },
    });
  };

  return (
    <Container>
      <Arrow
        page={state.current_page}
        disabled={state.current_page === 1}
        onClick={() => movePage('prev', state.current_page)}
      >
        <span role="img" aria-label="arrow">
          ◀️
        </span>
      </Arrow>
      {state.current_page}{' '}
      {state.current_page !== state.totalPages ? (
        <Arrow onClick={() => movePage('next', state.current_page)}>
          <span role="img" aria-label="arrow">
            ▶️
          </span>
        </Arrow>
      ) : (
        <Arrow></Arrow>
      )}
    </Container>
  );
};

export default Pages;
