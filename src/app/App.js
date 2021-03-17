import './App.scss';
import { Nav } from '../components/nav/Nav';
import { Location } from '../components/location/Location';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Location />
      </header>
    </div>
  );
}

export default App;
