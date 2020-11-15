import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';

import { Types } from 'store/reducers/movies';
import { Types as LoaderTypes } from 'store/reducers/loader';

function* fetchSearchMovies({ payload }) {
  const params = { query: payload };

  yield put({ type: LoaderTypes.SET_LOADING, payload: true });

  try {
    const { data } = yield axios.get('/search/movie', { params });

    yield put({ type: Types.SET_SEARCH_LIST, payload: data?.results || [] });
  } catch (error) {
    console.log(error);
  } finally {
    yield put({ type: LoaderTypes.SET_LOADING, payload: false });
  }
}

function* fetchDiscoverMovies({ payload }) {
  const params = {
    languge: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
  };

  yield put({ type: LoaderTypes.SET_LOADING, payload: true });

  try {
    const { data } = yield axios.get('/discover/movie', { params });

    let results = data?.results || [];
    if (payload) {
      results = results.filter((item) => {
        const { vote_average } = item;

        if (vote_average <= payload) {
          return item;
        }

        return null;
      });
    }

    yield put({ type: Types.SET_DISCOVER_LIST, payload: results });
  } catch (error) {
    console.log(error);
  } finally {
    yield put({ type: LoaderTypes.SET_LOADING, payload: false });
  }
}

export default all([
  takeLatest(Types.FETCH_SEARCH, fetchSearchMovies),
  takeLatest(Types.FETCH_DISCOVER, fetchDiscoverMovies),
]);
