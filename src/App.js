import logo from './logo.svg';
import './App.css';
import DisplayPage from './Components/DisplayPage';
import Signin from './Signin/Signin';
import Signup1 from './Signup/Signup1';
import Signup2 from './Signup/Signup2';
import HomePage1 from './HomePage/HomePage1';
import HomePage2 from './HomePage/HomePage2';
import HomePage3 from './HomePage/HomePage3';
import Dashboard from './Dashboard/Dashboard';
import Router from './Router/Router';
import Messages from './Messages/Messages';

function App() {
  return (
    <div className="App">
      <Router/>
      {/* <DisplayPage/> */}
      {/* <Signin/> */}
      {/* <Signup1/> */}
       {/* <HomePage1/> */}
      {/* <HomePage2/> */}
      {/* <HomePage3/> */}
      {/* <Dashboard/> */}
      {/* <Signup2/> */}
    </div>
  );
}

export default App;
