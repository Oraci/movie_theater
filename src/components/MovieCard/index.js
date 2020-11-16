import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Types } from 'store/ducks/movies';

import { Container, Content, Img, Info } from './styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

function Card({ movie }) {
  const { title, poster_path, id, vote_average } = movie;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = () => {
    dispatch({ type: Types.SET_DETAIL, payload: movie });

    history.push(`/movie/detail/${id}`);
  };

  return (
    <Container onClick={handleOnClick}>
      <Content>
        <Img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
        <Info top="10px" right="0" textAlign="right">
          <div>{`Vote: ${vote_average}`}</div>
        </Info>
        <Info bottom="0" left="0">
          <div>{title}</div>
        </Info>
      </Content>
    </Container>
  );
}

export default Card;
