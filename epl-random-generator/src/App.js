import React, { useState } from "react";
import "./App.css";

const teams = [
  { id: 1, name: "Arsenal", logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" },
  { id: 2, name: "Aston Villa FC", logoUrl: "" },
  { id: 3, name: "Bournemouth AFC", logoUrl: "" },
  { id: 4, name: "Brentford", logoUrl: "" },
  { id: 5, name: "Brighton & Hove Albion", logoUrl: "" },
  { id: 6, name: "Chelsea", logoUrl: "" },
  { id: 7, name: "Crystal Palace", logoUrl: "" },
  { id: 8, name: "Everton FC", logoUrl: "" },
  { id: 9, name: "Fulham", logoUrl: "" },
  { id: 10, name: "Leicester City FC", logoUrl: "" },
  { id: 11, name: "Leeds United", logoUrl: "" },
  { id: 12, name: "Liverpool FC", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png" },
  { id: 13, name: "Manchester City FC", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" },
  { id: 14, name: "Manchester United FC", logoUrl: "" },
  { id: 15, name: "Newcastle United", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png" },
  { id: 16, name: "Manchester United FC", logoUrl: "" },
  { id: 17, name: "Nottingham Forest", logoUrl: "" },
  { id: 18, name: "Southampton FC", logoUrl: "" },
  { id: 19, name: "Tottenham Hotspur FC", logoUrl: "" },
  { id: 20, name: "West Ham United", logoUrl: "" },
  { id: 21, name: "Wolverhampton Wanderers", logoUrl: "" },
  
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
    let elapsedTime = 0;
  
    const fisherYatesShuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
  
    const shuffleInterval = setInterval(() => {
      elapsedTime += intervalDuration;
      fisherYatesShuffle(selectedTeams);
      const teamId = selectedTeams[0];
      const team = teams.find((t) => t.id === teamId);
      setWinner(team);
  
      if (elapsedTime >= shuffleDuration) {
        clearInterval(shuffleInterval);
      }
    }, intervalDuration);
  };
  
  

  return (
    <div className="App">
      <h1>Pick Teams You'd Like to Possibly Support</h1>
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
      {winner && (
        <div className="winner">
          <img src={winner.logoUrl} alt={winner.name} width="200" />
        </div>
      )}
    </div>
  );
}

export default App;
