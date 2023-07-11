import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [jokeSetup, setJokeSetup] = useState('');
  const [jokeDelivery, setJokeDelivery] = useState('');

  const handleJoke = async () => {
    try {
      const joke = await getJoke();
      setJokeSetup(joke.setup);
      setJokeDelivery(joke.delivery);
    } catch (error) {
      console.warn('Unable to retrieve joke');
    }
  };

  const [logic, setLogic] = useState(false);
  const [deliveryLogic, setDeliveryLogic] = useState(false);
  const [initBut, setInitBut] = useState(true);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {
        logic ? (
          <div>
            <h1>{jokeSetup || ''}</h1>
            <button type="button" onClick={() => { setDeliveryLogic(!deliveryLogic); setLogic(!logic); }}>Get Punchline</button>
          </div>
        ) : null
      }
      {
        deliveryLogic ? (
          <div>
            <h1>{jokeDelivery || ''}</h1>
            <button type="button" onClick={() => { setDeliveryLogic(!deliveryLogic); setInitBut(!initBut); }}>Get New Joke</button>
          </div>
        ) : null
      }
      {
        initBut ? (
          <div>
            <h1>Joke Generator</h1>
            <button type="button" onClick={() => { setInitBut(!initBut); handleJoke(); setLogic(!logic); }}>Get Joke</button>
          </div>
        ) : null
      }
    </div>
  );
}

export default Home;
