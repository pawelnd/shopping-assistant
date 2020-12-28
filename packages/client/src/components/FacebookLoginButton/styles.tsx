import styled from 'styled-components';

export const FacebookButtonWrapper = styled.div`
  background: #3b5998;
  border-radius: 3px;
  font-weight: 600;
  padding: 5px 8px;
  display: inline-block;
  position: static;

  &:hover {
    cursor: pointer;
    background: #213a6f;
  }
`;

export const StyledFacebookIcon = styled.svg`
  width: 18px;
  fill: white;
  vertical-align: middle;
  border-radius: 2px;
`;

export const StyledTextWrapper = styled.a`
  vertical-align: middle;
  color: white;
  font-size: 14px;
  padding: 0 3px;
  text-decoration: none;
`;
