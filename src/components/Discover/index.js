import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../MovieList';

import { Container } from './styles';

function Discover() {
  const { discoverList, rating, filtered } = useSelector(
    ({ movies }) => movies
  );

  return (
    <Container>
      <h1>Suggested movies</h1>
      <MovieList list={rating ? filtered : discoverList} />
    </Container>
  );
}

export default Discover;
