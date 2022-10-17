import './App.css';
import Login  from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path='/'><Login/></Route>
      <Route exact path='/home'>
      <Header/>
        <Home/>
      </Route>
      </Switch>
 
    </Router>
    </>
   
  );
}

export default App;
