import React from 'react';

import { Container, ContainerList, NoResults } from './styles';

import MovieCard from '../MovieCard';

function CardList({ list }) {
  return (
    <Container>
      {list.length > 0 ? (
        <ContainerList>
          {list.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </ContainerList>
      ) : (
        <NoResults>No records</NoResults>
      )}
    </Container>
  );
}

export default CardList;
