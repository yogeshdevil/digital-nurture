import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Rohit', 'Virat', 'Pant', 'Surya', 'Bumrah'];
  const RanjiTrophyPlayers = ['Gambhir', 'Pujara', 'Unadkat', 'Iyer', 'Kuldeep'];

  // Merge arrays using spread operator
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Destructure odd and even team players
  const oddTeam = allPlayers.filter((_, i) => i % 2 !== 0);
  const evenTeam = allPlayers.filter((_, i) => i % 2 === 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
