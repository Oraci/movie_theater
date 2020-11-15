import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Header,
  BackToButton,
  BackTo,
  TitleHeader,
  Info,
  Information,
  Image,
} from './styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Detail() {
  const { detail } = useSelector(({ movies }) => movies);

  const { title, vote_average, release_date, overview, poster_path } =
    detail || {};

  const history = useHistory();

  const onClickBack = () => {
    history.push('/');
  };

  return (
    Object.keys(detail) && (
      <Container>
        <Content>
          <Header>
            <BackToButton>
              <BackTo onClick={onClickBack}>
                <MdKeyboardBackspace size={24} style={{ marginRight: 6 }} />
                <p>Back</p>
              </BackTo>
            </BackToButton>
            <TitleHeader>
              <h1>{title}</h1>
            </TitleHeader>
          </Header>
          <Information>
            <Info>{`Release date: ${release_date}`}</Info>
            <Info>{`Vote average: ${vote_average}`}</Info>
            <Info>{overview}</Info>
          </Information>
        </Content>
        <Image>
          <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
        </Image>
      </Container>
    )
  );
}

export default Detail;
