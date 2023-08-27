import logo from './logo.svg';
import './App.css';
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Project this is the git.
        </a>
      </header>
    </div>
    // git init - git initialize F
    // git add . 
    // git commit -m "Message"
    // git remote add origin url - F
    // git branch branch_name - jab branch bnani ho
    // git swicth branch_name - branch swithc krni ha
    // git push origin branch_name
    // git pull origin branch_name - jab kisi or branch ka code lena ho


  );
}

export default App;
