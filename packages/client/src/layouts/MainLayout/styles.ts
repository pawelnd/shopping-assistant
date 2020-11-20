import styled from 'styled-components';
import { blueGrey } from '@material-ui/core/colors';

export const MainLayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${blueGrey[50]};
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
`;
