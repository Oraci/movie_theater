import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/Header';
import Filter from 'components/Filter';
import MovieList from 'components/MovieList';
import Discover from 'components/Discover';

import { Types } from 'store/reducers/movies';

import { Container, Content } from './styles';

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

  return (
    <Container>
      <Header>
        <Filter />
      </Header>
      <Content>
        {!searchText ? (
          <Discover />
        ) : (
          <MovieList list={rating ? filtered : searchList} />
        )}
      </Content>
    </Container>
  );
}

export default Home;
