import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          coming soon...Nicholas Regoli!!
        </p>

        <Projects />

        <Resume />

      </header>
    </div>
  );
}

export default App;
