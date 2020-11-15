import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../MovieList';

import { Container } from './styles';

function Discover() {
  const { discoverList } = useSelector(({ movies }) => movies);

  return (
    <Container>
      <h1>Suggested movies</h1>
      <MovieList list={discoverList} />
    </Container>
  );
}

export default Discover;
