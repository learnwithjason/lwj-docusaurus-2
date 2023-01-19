import React, { useState } from 'react';

export function BoopASnoot() {
  const [boops, setBoops] = useState(0);
  return (
    <div>
      <p>{boops > 0 ? 'You did it!' : 'Go on, give it a boop.'}</p>
      <button onClick={() => setBoops(1)}>BOOP THIS SNOOT</button>
      <button onClick={() => setBoops(0)}>reset</button>
    </div>
  );
}
