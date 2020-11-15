import React from 'react';

import { Container, Content, Header } from './styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

function Card({ movie, onSelectedCard }) {
  const { title, poster_path } = movie;

  const handleOnClick = () => {
    onSelectedCard(movie);
  };

  return (
    <Container onClick={handleOnClick}>
      <Content>
        <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
      </Content>
    </Container>
  );
}

export default Card;
