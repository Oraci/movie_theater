import { createTypes, createReducer } from 'reduxsauce';

export const Types = createTypes(
  `
  SET_LOADING
`,
  { prefix: 'LOADER:' }
);

export const initialState = { loading: false };

const setLoading = (state = initialState, { payload: loading }) => ({
  ...state,
  loading,
});

const reducer = createReducer(initialState, {
  [Types.SET_LOADING]: setLoading,
});

export default reducer;
