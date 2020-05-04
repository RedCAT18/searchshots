import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useImage } from '../Context/PhotoContext';
import { SEARCH } from '../reducer/actions';
import { fetchApi } from '../api';
import Gallery from './Gallery';
import Loader from './Loader';
import Error from './Error';

const PhotoContainer = styled.div``;

const Container = ({ searchTerm }) => {
  // const { images, loading, runSearch, error, page } = useContext(PhotoContext);
  const state = useImage();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // runSearch(searchTerm, page);
    const fetchData = async () => {
      const result = await fetchApi.getSearch(searchTerm, state.current_page);
      dispatch({
        type: SEARCH,
        payload: {
          searchTerm,
          images: result.data.photos.photo,
          page: state.current_page,
          totalPages: result.data.photos.pages,
        },
      });
    };

    try {
      fetchData();
    } catch {
      setError('Encountered an error with fetching and parsing data.');
    } finally {
      setLoading(false);
    }
  }, [dispatch, searchTerm, state.current_page]);

  return (
    <PhotoContainer>
      {error.length !== 0 ? (
        <Error error={error} />
      ) : loading ? (
        <Loader />
      ) : (
        <Gallery data={state.images} />
      )}
    </PhotoContainer>
  );
};

export default Container;
