import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  // const handleClick = () => {
  //   setEventText('Display joke here');
  // };
  // const [eventText, setEventText] = useState('');
  // function renderSetup() {
  //   const array = [];
  //   getJoke().then((data) => {
  //     array.push(data.setup);
  //   }).then(console.warn(array));

  //   setEventText(array);
  // }
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
      <h1>Joke Generator!</h1>
      <button type="button" onClick={handleJoke}>Get A Joke!</button>
      <h3 className="watch-event">{jokeSetup || ''}</h3>
      <h4 className="watch-event">{jokeDelivery || ''}</h4>
    </div>
  );
}

export default Home;
