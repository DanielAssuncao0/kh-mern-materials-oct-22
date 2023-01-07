import logo from './logo.svg';
import './App.css';
import {UserForm} from './Forms2';
import { Form } from './Forms';
import { Hello } from './Hello';
import Greetings from './Greetings';
import { Link, Routes, Route} from 'react-router-dom';
import {FakeUsers} from './FakeUsers';
function App() {
    return (
      <div className = 'container-fluid'>
        <div>
          <Link to = "/one">Registration Form</Link> <br />
          <Link to = "/two">Second Form</Link> <br />
          <Link to = "/three">Hello Component</Link> <br />
        </div>
        <div>
          <Routes>
            <Route path = "/one" element = {<UserForm />} />
            <Route path = "/two" element = {<Form />} />
            <Route path = "/three" element = {<Hello />} />
            <Route path = "" element = {<Greetings />} />
          </Routes>
        </div>
        <div>
          <FakeUsers />
        </div>
      </div>
  );
}

export default App;
