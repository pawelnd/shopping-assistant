import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core';
import { IntlProvider } from 'react-intl';
import * as serviceWorker from './serviceWorker';
import App from './App';
import theme from './theme';
import { GlobalStyles } from './global-styles';
import Language from './i18n/languages';
import messagesEn from './i18n/messages_en';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IntlProvider messages={messagesEn} locale={Language.en} defaultLocale={Language.en}>
        <App />
        <GlobalStyles />
      </IntlProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
