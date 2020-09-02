import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

import { Container, Image, HeaderIcon } from './styles';

function Header() {
  return(
    <Container className="header">
      <HeaderIcon>
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      </HeaderIcon>

      <Image className="header__logo">
        <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"/>
      </Image>

      <HeaderIcon>
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </HeaderIcon>
    </Container>
  ) ;
}

export default Header;