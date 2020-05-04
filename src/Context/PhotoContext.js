import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from '../reducer/reducer';

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [images, setImages] = useState(initialState.images);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  // const runSearch = (query, page) => {
  // axios
  //   .get(
  //     `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&page=${page}`
  //   )
  //   fetchApi
  //     .getSearch(query, page)
  //     .then((response) => {
  //       setImages(response.data.photos.photo);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(
  //         'Encountered an error with fetching and parsing data.',
  //         error
  //       );
  //       setError(error);
  //     });
  // };

  return (
    <PhotoContext.Provider value={{ dispatch, state }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(PhotoContext);

  return dispatch;
};

export const useImage = () => {
  const { state } = useContext(PhotoContext);
  return state;
};

export default PhotoContextProvider;
