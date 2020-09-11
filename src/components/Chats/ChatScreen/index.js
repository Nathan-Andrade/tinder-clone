import React, { useState } from 'react';

import { Container } from './styles';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
const [messages, setMessages] = useState([
    {
      name: 'Letty Ortiz',
      image: 'https://vignette.wikia.nocookie.net/pedrofilms-inc/images/c/ca/Letty_Ortiz_.jpeg/revision/latest?cb=20200519170200&path-prefix=pt-br',
      message: 'Hey, Whats up?'
    },
    {
      name: 'Letty Ortiz',
      image: 'https://vignette.wikia.nocookie.net/pedrofilms-inc/images/c/ca/Letty_Ortiz_.jpeg/revision/latest?cb=20200519170200&path-prefix=pt-br',
      message: 'How its going'
    },
    {
      message: 'Hi how are you Letty?'
    },
  ]);

  return (
    <Container clasName="chatScreen">
      <p className="chatScreen_timestamp">YOU MATCHED WITH LETTY ON 10/09/20</p> 
      {messages.map((message) => (
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      ))}

        <form className="chatScreen_input">
          <input
            className="chatScreen_inputField"
            placeholder="Type a message..."
            type="text" 
          />
          <button className="chatScreen_inputButton">SEND</button>
        </form>

    </Container>
  )
}

export default ChatScreen;