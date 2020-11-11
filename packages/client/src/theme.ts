import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Hind', sans-serif;"
  },
  palette: {
    primary: {
      main: cyan[700]
    },
    secondary: {
      main: green[500]
    }
  }
});

export default theme;
