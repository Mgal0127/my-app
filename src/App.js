import React from 'react';
import './App.css';
import Homepage from './pages/HomePage';
import Question2 from './pages/Question2';
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <Router>
      <div className="App">

    <Navbar/>
      <div id="page-body">
        <Switch>
          <Route path="/question_1" component={Homepage} exact />
          <Route path="/question_2" component={Question2} exact />
          <Route path="/question_3" component={Question3} exact />
          <Route path="/question_4" component={Question4} exact />
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
