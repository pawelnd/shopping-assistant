import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const AVATAR_URL = 'images/img_avatar.png';

interface TopBarMenuProps {
  handleSignOut: () => void;
  photoUrl?: string;
  name?: string;
}
const TopBarMenu: React.FunctionComponent<TopBarMenuProps> = (props: TopBarMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { handleSignOut, photoUrl, name } = props;
  const { t } = useTranslation();
  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <a onClick={handleClick}>
        <Avatar alt="avatar" src={photoUrl} />
      </a>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleSignOut()}> {t('logout')}</MenuItem>
      </Menu>
    </div>
  );
};

TopBarMenu.defaultProps = {
  name: '',
  photoUrl: AVATAR_URL
};

export default TopBarMenu;
