import { createTypes, createReducer } from 'reduxsauce';

export const Types = createTypes(
  `
  FETCH_SEARCH
  FETCH_DISCOVER
  SET_SEARCH_TEXT
  SET_SEARCH_LIST
  SET_DISCOVER_LIST
  SET_RATING
  SET_DETAIL
  SET_FILTERED
  CLEAR_RATING
`,
  { prefix: 'MOVIES:' }
);

export const initialState = {
  searchText: '',
  searchList: [],
  discoverList: [],
  rating: undefined,
  detail: {},
  filtered: [],
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
  // searchText: initialState.searchText,
  rating,
});

const setDetail = (state = initialState, { payload: detail }) => ({
  ...state,
  detail,
});

const setFiltered = (state = initialState, { payload: { list, id } }) => ({
  ...state,
  filtered:
    list?.filter((item) => {
      const { vote_average } = item;

      if (vote_average <= id) {
        return item;
      }

      return null;
    }) || [],
});

const clearRating = (state = initialState) => ({
  ...state,
  filtered: initialState.filtered,
  rating: initialState.rating,
});

const reducer = createReducer(initialState, {
  [Types.SET_SEARCH_LIST]: setSearchList,
  [Types.SET_DISCOVER_LIST]: setDiscoverList,
  [Types.SET_SEARCH_TEXT]: setSearchText,
  [Types.SET_RATING]: setRating,
  [Types.SET_DETAIL]: setDetail,
  [Types.SET_FILTERED]: setFiltered,
  [Types.CLEAR_RATING]: clearRating,
});

export default reducer;
