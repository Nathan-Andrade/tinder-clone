import React from 'react';

import Chat from './components/Chat';
import { Container } from './styles';

function Chats() {
  return (
    <Container className="chats">
      <Chat
        name="Letty Ortiz"
        message="Hey, What's up?"
        timestamp="10 seconds ago"
        profilePic="https://vignette.wikia.nocookie.net/pedrofilms-inc/images/c/ca/Letty_Ortiz_.jpeg/revision/latest?cb=20200519170200&path-prefix=pt-br"
      />

      <Chat
        name="Mia Toretto"
        message="Hey man!"
        timestamp="50 seconds ago"
        profilePic="https://vignette.wikia.nocookie.net/fastandfurious/images/7/7c/Mia_Fast_7.jpg/revision/latest/scale-to-width-down/340?cb=20150322195245&path-prefix=fr"
      />

      <Chat
        name="Vanessa Kirby"
        message="Hey programmer !"
        timestamp="30 seconds ago"
        profilePic="https://br.web.img2.acsta.net/r_1280_720/pictures/18/10/22/16/36/4392719.jpg"
      />

      <Chat
        name="Eva Mendes"
        message="Hey baby!"
        timestamp="10 seconds ago"
        profilePic="https://www.ospaparazzi.com/imagem/201010/04180817.jpg"
      />
    </Container>
  );
}

export default Chats;