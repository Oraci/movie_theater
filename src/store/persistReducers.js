import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'movie_theater',
      storage,
      whitelist: ['movies'],
    },
    reducers
  );

  return persistedReducer;
};
