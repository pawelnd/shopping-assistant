import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const AppBarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const AppBarStart = styled.div`
  cursor: pointer;
  flex: 2;
`;

export const AppBarCenter = styled.div`
  flex: 3;
`;

export const AppBarEnd = styled.div``;
