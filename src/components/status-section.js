import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

export default function StatusSection({guesses=[], auralStatus}) {

  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}
