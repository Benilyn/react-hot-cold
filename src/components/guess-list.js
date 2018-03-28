import React from 'react';

import './guess-list.css';

export default function GuessList({guesses=[]}) {
  const items = guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {items}
    </ul>
  );
}
