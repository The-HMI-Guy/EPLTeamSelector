import React, { useState } from "react";
import "./App.css";

const teams = [
  { id: 1, name: "Arsenal", logoUrl: "https://example.com/arsenal_logo.png" },
  { id: 2, name: "Chelsea", logoUrl: "https://example.com/chelsea_logo.png" },
  // Add other teams here
];

function App() {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [winner, setWinner] = useState(null);

  const handleCheckboxChange = (teamId) => {
    setSelectedTeams((prevState) =>
      prevState.includes(teamId)
        ? prevState.filter((id) => id !== teamId)
        : [...prevState, teamId]
    );
  };

  const shuffleTeams = () => {
    if (selectedTeams.length < 1) {
      alert("Please select at least one team.");
      return;
    }

    setWinner(null);

    const shuffleDuration = 3000;
    const intervalDuration = 100;
    let currentIndex = 0;

    const shuffleInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % selectedTeams.length;
      const teamId = selectedTeams[currentIndex];
      const team = teams.find((t) => t.id === teamId);
      setWinner(team);
    }, intervalDuration);

    setTimeout(() => {
      clearInterval(shuffleInterval);
    }, shuffleDuration);
  };

  return (
    <div className="App">
      <h1>Select Teams</h1>
      {teams.map((team) => (
        <div key={team.id} className="label-container">
          <input
            type="checkbox"
            id={`team-${team.id}`}
            value={team.id}
            onChange={() => handleCheckboxChange(team.id)}
          />
          <label htmlFor={`team-${team.id}`}>{team.name}</label>
        </div>
      ))}
      <button className="shuffle-button" onClick={shuffleTeams}>
        Shuffle
      </button>
      {winner && <h2 className="winner">Winner: {winner.name}</h2>}
    </div>
  );
}

export default App;
