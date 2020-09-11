import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

import { Container } from './styles';
import '../../../assets/styles/global.css';

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <Container className="chat">
        <Avatar className="chat_image" alt={name} src={profilePic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat_timestamp">{timestamp}</p>
      </Container>
    </Link>
  );
}

export default Chat;