import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Types } from 'store/reducers/movies';

import { Container, Content } from './styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

function Card({ movie }) {
  const { title, poster_path, id } = movie;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = () => {
    dispatch({ type: Types.SET_DETAIL, payload: movie });

    history.push(`/movie/detail/${id}`);
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
