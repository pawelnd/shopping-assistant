import styled from 'styled-components/macro';
import common from '@material-ui/core/colors/common';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${common.white};
`;

export const Middle = styled.div`
  padding: 10px;
  background-color: var(--content-color);
  flex-grow: 1;
`;

export const Header = styled.header`
  background-color: var(--header-color);
  position: sticky;
  top: 0px;
  width: 100%;
  padding: 0.3em;
`;
export const FooterContainer = styled.footer`
  background-color: var(--header-color);
  padding: 1em;
`;
