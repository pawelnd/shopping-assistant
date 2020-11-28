import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@material-ui/core';
import { IntlProvider } from 'react-intl';
import * as serviceWorker from './serviceWorker';
import App from './App';
import theme from './theme';
import { GlobalStyles } from './global-styles';
import Language from './i18n/languages';
import messagesEn from './i18n/messages_en';
import configureAxios from './axios-config';
import { ToasterContainer } from './components/Toaster';

configureAxios();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <IntlProvider messages={messagesEn} locale={Language.en} defaultLocale={Language.en}>
        <ToasterContainer>
          <App />
        </ToasterContainer>
      </IntlProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
