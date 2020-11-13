import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from 'theme/theme-styled';
import store from 'store/index';
import GlobalStyle from 'theme/global-style';

import Home from 'pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
