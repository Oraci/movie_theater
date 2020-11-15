import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Types } from 'store/reducers/movies';

import { Container, Content, ContentStar, Svg, Button } from './styles';

const RATINGS = [2, 4, 6, 8, 10];

function RatingStar() {
  const [hoverStar, setHoverStar] = useState();

  const dispatch = useDispatch();

  const { rating } = useSelector(({ movies }) => movies);

  const onHandleSelectStar = useCallback(
    (id) => {
      dispatch({ type: Types.SET_RATING, payload: id });

      dispatch({ type: Types.FETCH_DISCOVER, payload: id });
    },
    [rating]
  );

  const getHoverColor = useCallback(
    (id) => {
      return id <= hoverStar;
    },
    [rating]
  );

  const getSelectedStar = useCallback(
    (id) => {
      return id <= Math.floor(rating);
    },
    [rating]
  );

  return (
    <Container>
      <Content>
        {RATINGS.map((item) => {
          return (
            <ContentStar key={item} onClick={() => onHandleSelectStar(item)}>
              <Svg
                selected={getSelectedStar(item)}
                hoverColor={getHoverColor(item)}
                onMouseEnter={() => setHoverStar(item)}
                onMouseLeave={() => setHoverStar()}
                viewBox="0 0 24 24"
              >
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </Svg>
            </ContentStar>
          );
        })}
        {rating && (
          <Button onClick={() => onHandleSelectStar()}>Clear rating</Button>
        )}
      </Content>
    </Container>
  );
}

export default RatingStar;
