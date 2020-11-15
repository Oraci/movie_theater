import { createTypes, createReducer } from 'reduxsauce';

export const Types = createTypes(
  `
  FETCH_SEARCH
  FETCH_DISCOVER
  SET_SEARCH_TEXT
  SET_SEARCH_LIST
  SET_DISCOVER_LIST
  SET_RATING
`,
  { prefix: 'MOVIES:' }
);

export const initialState = {
  searchText: '',
  searchList: [],
  discoverList: [],
  rating: undefined,
};

const setSearchList = (state = initialState, { payload: searchList }) => ({
  ...state,
  searchList,
});

const setDiscoverList = (state = initialState, { payload: discoverList }) => ({
  ...state,
  discoverList,
});

const setSearchText = (state = initialState, { payload: searchText }) => ({
  ...state,
  searchList: initialState.searchList,
  rating: initialState.rating,
  searchText,
});

const setRating = (state = initialState, { payload: rating }) => ({
  ...state,
  searchText: initialState.searchText,
  rating,
});

const reducer = createReducer(initialState, {
  [Types.SET_SEARCH_LIST]: setSearchList,
  [Types.SET_DISCOVER_LIST]: setDiscoverList,
  [Types.SET_SEARCH_TEXT]: setSearchText,
  [Types.SET_RATING]: setRating,
});

export default reducer;
