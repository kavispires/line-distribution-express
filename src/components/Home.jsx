import React from 'react';
import logo from '../images/ld-express-logo-negative.svg';

function Home() {
  return (
    <main className="content home">
      <img src={logo} className="home__logo" alt="logo" />
      <p>Select a preset or create a new set to start distributing</p>
    </main>
  );
}

export default Home;
