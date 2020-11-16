import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { BiCalendarHeart } from 'react-icons/bi';
import { FcRating } from 'react-icons/fc';

import theme from 'theme/theme-styled';

import image from 'assets/no-image-detail.png';

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
  NoSelectedMovie,
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
    <Container>
      <Content>
        <Header>
          <BackToButton>
            <BackTo onClick={onClickBack}>
              <MdKeyboardBackspace size={24} style={{ marginRight: 6 }} />
              <p>Back</p>
            </BackTo>
          </BackToButton>
          <Title>{title}</Title>
        </Header>
        {Object.keys(detail).length > 0 ? (
          <Information>
            <InfoContainer>
              <Info
                borderLeft
                background={theme.background.amaranth}
                color={theme.text.black}
                paddingRight="5px"
              >
                <Icon>
                  <BiCalendarHeart color={theme.text.white} size={20} />
                </Icon>
                <p>Release date</p>
              </Info>
              <Info borderRigth>{release_date}</Info>
            </InfoContainer>
            <InfoContainer>
              <Info
                borderLeft
                background={theme.background.gold}
                color={theme.text.black}
                paddingRight="5px"
              >
                <Icon>
                  <FcRating color={theme.text.amaranth} size={20} />
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
        ) : (
          <NoSelectedMovie>
            No movie selected. Come back to home.
          </NoSelectedMovie>
        )}
      </Content>
      {Object.keys(detail).length > 0 && (
        <Image>
          <Img
            src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : image}
            alt={title}
          />
        </Image>
      )}
    </Container>
  );
}

export default Detail;
