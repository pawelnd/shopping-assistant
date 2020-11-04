import { createMuiTheme } from '@material-ui/core/styles';
import cyan from "@material-ui/core/colors/cyan";
import green from "@material-ui/core/colors/green";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[700]
    },
    secondary: {
      main: green[500]
    }
  }
});

export default theme
