import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { ThemeProvider as ThemeProviderMaterial } from '@material-ui/core';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import App from './App';
import theme from './theme';
import { GlobalStyles } from './global-styles';
import { configureAxios } from './axios-config';
import { ToasterContainer } from './components/Toaster';
import store from './store/store';
import './i18n/i18config';

configureAxios();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProviderMaterial theme={theme}>
        <ThemeProviderStyled theme={theme}>
          <Suspense fallback={<></>}>
            <ToasterContainer>
              <App />
            </ToasterContainer>
          </Suspense>
        </ThemeProviderStyled>
      </ThemeProviderMaterial>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
