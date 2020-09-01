import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import { Container, Image } from './styles';

function Header() {
  return(
    <Container className="header">
      <PersonIcon />
      <Image className="header__logo">
        <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"/>
      </Image>
      <ForumIcon />
    </Container>
  ) ;
}

export default Header;