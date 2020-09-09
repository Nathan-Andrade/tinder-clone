import React from 'react';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import { Container } from './styles';

function SwipeButtons() {
  return (
    <Container className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      
      <IconButton className="swipeButtons_left">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_star">
        <StarRateIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
      
    </Container>
  );
}

export default SwipeButtons;