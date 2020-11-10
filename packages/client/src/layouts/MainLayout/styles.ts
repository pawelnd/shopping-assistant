import styled from 'styled-components';
import {blueGrey} from "@material-ui/core/colors";
import {Toolbar} from "@material-ui/core";

export const MainLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${blueGrey[50]};
  height: 100vh;
`;


export const AppBarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
