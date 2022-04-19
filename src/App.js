import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Create from "./components/Create";
import Data from "./components/Data";

import Deposit from "./components/Deposit";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Withdraw from "./components/Withdraw";
import AppRouter from "./Router/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter>
        <Navbar />
        {/* <Home />
        <Create />
        <Deposit />
        <Withdraw />
        <Data /> */}
      </AppRouter>
    </div>
  );
};

export default App;