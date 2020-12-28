import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

const FacebookButtonWrapper = styled.div`
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

const StyledFacebookIcon = styled.svg`
  width: 18px;
  fill: white;
  vertical-align: middle;
  border-radius: 2px;
`;

const StyledTextWrapper = styled.a`
  vertical-align: middle;
  color: white;
  font-size: 14px;
  padding: 0 3px;
  text-decoration: none;
`;
const FacebookLoginButton = () => {
  return (
    <FacebookButtonWrapper>
      <StyledFacebookIcon viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
        <path d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z" />
      </StyledFacebookIcon>
      <StyledTextWrapper href="/api/auth/facebook">
        <Trans>loginWIthFacebook</Trans>
      </StyledTextWrapper>
    </FacebookButtonWrapper>
  );
};

export default FacebookLoginButton;
