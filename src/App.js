import './App.css';
import PlayerSelect from './Components/PlayerSelect';
import Questions from './Components/Questions';
import TeamSelect from './Components/TeamSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TeamSelect />
        <PlayerSelect />
        <Questions />
      </header>
    </div>
  );
}

export default App;
