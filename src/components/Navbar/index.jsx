import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import Create from "../Create";
import Data from "../Data";
import Deposit from "../Deposit";
import Home from "../Home";
import Withdraw from "../Withdraw";

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    {/* <a className="navbar-brand" href="/">Home</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/create">Create Account</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/deposit">Deposit</Link>
                            <Link className="nav-link" to="/withdraw">Withdraw</Link>
                            <Link className="nav-link" to="/data">All Data</Link>
                            {/* <a className="nav-link" id="create_link" aria-current="page" href="/">Create Account</a>
                            <a className="nav-link" id="deposit_link" href="/">Deposit</a>
                            <a className="nav-link" id="withdraw_link" href="/">Withdraw</a>
                            <a className="nav-link" id="allData_link" href="/">All Data</a> */}
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;