import React from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Types of Games</h1>
      </header>

      <section className="game-types">
        <div className="game-type">
          <h2>Action Games</h2>
          <p>
            Action games are fast-paced games that require quick reflexes and hand-eye coordination. They often involve combat, challenges, and intense scenarios. Examples include first-person shooters and platformers.
          </p>
        </div>

        <div className="game-type">
          <h2>Adventure Games</h2>
          <p>
            Adventure games focus on exploration and puzzle-solving. Players often navigate through immersive worlds, interact with characters, and solve mysteries. Examples include point-and-click adventures and open-world games.
          </p>
        </div>

        <div className="game-type">
          <h2>Role-Playing Games (RPGs)</h2>
          <p>
            RPGs involve players assuming the roles of characters in a fictional setting. These games often feature character development, story-driven quests, and intricate worlds. Examples include tabletop RPGs and action RPGs.
          </p>
        </div>

        <div className="game-type">
          <h2>Strategy Games</h2>
          <p>
            Strategy games require players to use tactics and planning to achieve victory. They can be real-time or turn-based and involve managing resources, making decisions, and executing strategies. Examples include real-time strategy (RTS) and turn-based strategy (TBS) games.
          </p>
        </div>

        <div className="game-type">
          <h2>Simulation Games</h2>
          <p>
            Simulation games mimic real-world activities and scenarios, allowing players to experience various aspects of life or systems. Examples include life simulators, vehicle simulators, and city-building games.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Game Types. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
