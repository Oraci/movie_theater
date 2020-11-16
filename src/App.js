import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from 'theme/theme-styled';
import { store, persistor } from 'store';
import GlobalStyle from 'theme/global-style';

import Layout from 'components/Layout';

import Home from 'pages/Home';
import Detail from 'pages/Detail';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <GlobalStyle />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movie/detail/:id" component={Detail} />
              </Switch>
            </Layout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
