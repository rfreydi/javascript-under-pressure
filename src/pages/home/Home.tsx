import React from 'react';
import './home.css';

interface HomeProps {
  onStart: () => void;
}

export const Home: React.FC<HomeProps> = ({onStart}) => {
  return (
      <div id="home">
        <img src="/youcant.png" alt="You can't JavaScript under pressure" />
        <h2>Five functions to fill. One ticking clock. <b>How fast can you code?</b></h2>
        <button onClick={ onStart }>Start the game</button>
      </div>
  );
};
