import React, { useCallback } from 'react';

import { Container, ContainerList } from './styles';

import MovieCard from '../MovieCard';

function CardList({ list }) {
  const isShow = useCallback(list.length > 0, [list]);

  return !isShow ? null : (
    <Container>
      <ContainerList>
        {list.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ContainerList>
    </Container>
  );
}

export default CardList;
