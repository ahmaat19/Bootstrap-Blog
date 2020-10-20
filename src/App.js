import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path to='/' component={Dashboard} />
          <Route path to='/post-detail' component={PostDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
