import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import GoSearch from 'react-icons/go';

import { Types } from 'store/reducers/movies';

import useDebounce from 'hooks/useDebounce';

import RatingStar from '../RatingStart';

import { Container, Form, FormControl, Input, SearchButton } from './styles';

function Filter() {
  const { searchText, rating } = useSelector(({ movies }) => movies);

  const dispatch = useDispatch();

  const inputRef = useRef();

  const debounceText = useDebounce(searchText, 400);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (searchText.trim().length > 0) {
      dispatch({ type: Types.FETCH_SEARCH, payload: searchText });
    }
  }, [debounceText]);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length > 0 && e.target.value !== searchText) {
      dispatch({ type: Types.FETCH_SEARCH, payload: searchText });
    }
  };

  const handleOnChange = (e) => {
    dispatch({ type: Types.SET_SEARCH_TEXT, payload: e.target.value });
  };

  return (
    <Container>
      <Form onSubmit={onHandleSubmit}>
        <FormControl>
          <Input
            ref={inputRef}
            disabled={rating}
            value={searchText}
            onChange={handleOnChange}
            placeholder="Search for a movie..."
          />
          <SearchButton type="submit">Search</SearchButton>
        </FormControl>
        <RatingStar />
      </Form>
    </Container>
  );
}

export default Filter;
