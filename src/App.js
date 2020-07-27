import React from 'react';
import './App.css';
import SignIn from './component/SignIn/SignIn.component';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard.component';
import Navbar from './component/Navbar/Navbar';
import ViewEmployee from './component/ViewEmployee/ViewEmployee';
import AddEmployee from './component/AddEmployee/AddEmployee';


function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Router>
        <Switch>
          <Route path='/' exact component={SignIn} /> 
          <Route path='/signin' exact component={SignIn} /> 
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/view/:id' exact component={ViewEmployee} />
          <Route path='/addEmp' exact component={AddEmployee} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
