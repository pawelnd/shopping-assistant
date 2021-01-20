import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { AvatarButton } from './styles';
import LoggedUserDetails from '../LoggedUserDetails';
import { User } from '../../store/features/authSlice/auth.model';

const AVATAR_URL = 'images/img_avatar.png';

interface TopBarMenuProps {
  handleSignOut: () => void;
  loggedUser: User | undefined;
}
const TopBarMenu: React.FunctionComponent<TopBarMenuProps> = (props: TopBarMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { handleSignOut, loggedUser } = props;
  const { t } = useTranslation();
  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AvatarButton type="button" onClick={handleClick}>
        <Avatar alt="avatar" src={loggedUser?.photoUrl ?? AVATAR_URL} />
      </AvatarButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <LoggedUserDetails />
        <MenuItem onClick={() => handleSignOut()}> {t('logout')}</MenuItem>
      </Menu>
    </>
  );
};

export default TopBarMenu;
