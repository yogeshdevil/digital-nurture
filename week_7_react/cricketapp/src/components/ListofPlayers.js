import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 60 },
    { name: 'Dhoni', score: 95 },
    { name: 'Sachin', score: 45 },
    { name: 'Yuvraj', score: 72 },
    { name: 'Dravid', score: 68 },
    { name: 'Kohli', score: 100 },
    { name: 'Pant', score: 50 },
    { name: 'Rahul', score: 30 },
    { name: 'Jadeja', score: 78 },
    { name: 'Shami', score: 40 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
        <h2>list of players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                    {player.name}
                    </li>
                ))}
            </ul>
      <h2>Players with Score less than 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
