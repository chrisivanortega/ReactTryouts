import logo from './logo.svg';
import './App.css';
import Navig from './components/Navig';
import { Container,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <>
    
    <Router>
    <Navig/>


      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Container>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>        
        <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Login">
          <Login />
        </Route>

      </Switch>
      </Container>
  </Router>
      </>
  );
}

export default App;
