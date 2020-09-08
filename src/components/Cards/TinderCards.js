import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';

import database from '../../Firebase/Firebase';
import { Container, Div, CardContainer } from './styles';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    //isto vai ser para o código rodar

    database.collection('people').onSnapshot(snapshot => {
      setPeople(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
 // const people = [];
  //people.push = [];

  //setPeople([...people, 'sonny', 'quazi'])

  return( 
    <Container>
      <h1>Tinder Cards</h1>
      <CardContainer className="tinderCards_cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <Div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </Div>
          </TinderCard>
        ))}
      </CardContainer>
    </Container>
  );
}

export default TinderCards;