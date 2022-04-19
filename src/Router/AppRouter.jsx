import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from '../components/Create';
import Data from '../components/Data';
import Deposit from '../components/Deposit';
import Home from '../components/Home';
import Login from '../components/Login';
import Withdraw from '../components/Withdraw';

const AppRouter = (props) => {
  return (
    <Router>
        {props.children}
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
            <Route path="/login" exact component={Login} />
            <Route path="/deposit" exact component={Deposit} />
            <Route path="/withdraw" exact component={Withdraw} />
            <Route path="/data" exact component={Data} />
        </Switch>
    </Router>
  );
};

export default AppRouter;