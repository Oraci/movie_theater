import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { BiCalendarHeart } from 'react-icons/bi';
import { FcRating } from 'react-icons/fc';

import {
  Container,
  Content,
  Header,
  BackToButton,
  BackTo,
  Title,
  Info,
  Information,
  Image,
  InfoContainer,
  Icon,
  ContainerOverview,
  Img,
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
            <Title>
              <h1>{title}</h1>
            </Title>
          </Header>
          <Information>
            <InfoContainer>
              <Info
                borderLeft
                background="#EE1C4F"
                color="#000"
                paddingRight="5px"
              >
                <Icon>
                  <BiCalendarHeart color="#FFF" size={20} />
                </Icon>
                <p>Release date</p>
              </Info>
              <Info borderRigth>{release_date}</Info>
            </InfoContainer>
            <InfoContainer>
              <Info
                borderLeft
                background="#ffd700"
                color="#000"
                paddingRight="5px"
              >
                <Icon>
                  <FcRating color="#EE1C4F" size={20} />
                </Icon>
                <p>Vote average</p>
              </Info>
              <Info borderRigth>{vote_average}</Info>
            </InfoContainer>
            <InfoContainer direction="column">
              <ContainerOverview>
                <p>Overview</p>
                <div>{overview}</div>
              </ContainerOverview>
            </InfoContainer>
          </Information>
        </Content>
        <Image>
          <Img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
        </Image>
      </Container>
    )
  );
}

export default Detail;
