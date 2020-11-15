import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Spinner } from './styles';

function Loader() {
  const { loading } = useSelector(({ loader }) => loader);

  return !loading ? null : (
    <Container data-testid="container-loader-id">
      <Spinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </Spinner>
    </Container>
  );
}

export default Loader;
