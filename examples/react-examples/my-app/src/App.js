import logo from './logo.svg';
import './App.css';
import Greetings  from './Greetings';

function App() {
  return (
    <div>
      <h1>Root Component</h1>
      <Greetings />
      <Greetings name = "Sachin" />
    </div>
  );
}

export default App;
