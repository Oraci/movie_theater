import React, { useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImFire, ImFinder } from 'react-icons/im';

import Header from 'components/Header';
import Filter from 'components/Filter';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

import { Types } from 'store/reducers/movies';

import { Container, Content, Title } from './styles';

function Home() {
  const {
    searchText,
    searchList,
    discoverList,
    rating,
    filtered,
  } = useSelector(({ movies }) => movies);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!discoverList.length) {
      dispatch({ type: Types.FETCH_DISCOVER });
    }
  }, []);

  const list = useMemo(() => {
    return !searchText ? discoverList : searchList;
  }, [searchText, discoverList, searchList]);

  const getTitle = useCallback(() => {
    return (
      <Title>
        {!searchText ? (
          <>
            <ImFire size={20} color="#EE1C4F" />
            <h1>Suggested movies</h1>
          </>
        ) : (
          <>
            <ImFinder size={20} color="#EE1C4F" />
            <h1>Search results</h1>
          </>
        )}
      </Title>
    );
  }, [searchText]);

  return (
    <Container>
      <Header>
        <Filter />
      </Header>
      <Content>
        <Loader />
        {getTitle()}
        <MovieList list={rating ? filtered : list} />
      </Content>
    </Container>
  );
}

export default Home;
