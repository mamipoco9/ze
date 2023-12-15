import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Counter from './counter/Counter';

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
          Learn React
        </a>
      </header>
      <h1>em abcd efu</h1>
      <Info a='b' b='c' c='d' name="ng vad a" age="lv3" phone="9998877000" />
      <Info a='b' b='c' c='d' name="le v bb" age="99" phone="0988555555"/>
      
      <Counter name='sdf sdfa' age='39'><h1> mot con co</h1></Counter>
    </div>
  );
}

export default App;
