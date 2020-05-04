import { SEARCH, MOVE_PAGE, TOGGLE_MODAL } from './actions';

export const initialState = {
  images: [],
  current_page: 1,
  search: '',
  openModal: false,
  link: '',
  pages: 0,
};

export const modalState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.payload.searchTerm,
        images: action.payload.images,
        current_page:
          state.search === action.payload.searchTerm ? action.payload.page : 1,
        pages: action.payload.totalPages,
      };
    case MOVE_PAGE:
      return {
        ...state,
        current_page: action.payload.page,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        openModal: !state.openModal,
        link: action.payload.link,
      };
    default:
      return state;
  }
};

export default reducer;
