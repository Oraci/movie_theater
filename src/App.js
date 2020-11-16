import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from 'theme/theme-styled';
import store from 'store';
import GlobalStyle from 'theme/global-style';

import Layout from 'components/Layout';

import Home from 'pages/Home';
import Detail from 'pages/Detail';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movie/detail/:id" component={Detail} />
            </Switch>
          </Layout>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
