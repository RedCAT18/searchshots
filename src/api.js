import axios from 'axios';
import { apiKey } from './config';

const api = axios.create({
  baseURL: `https://api.flickr.com/services/`,
  params: {
    method: 'flickr.photos.search',
    api_key: apiKey,
    per_page: '24',
    format: 'json',
    nojsoncallback: '1',
  },
});

export const fetchApi = {
  getSearch: (query, page) =>
    api.get('rest/', {
      params: {
        tags: query,
        page: page,
      },
    }),
};
