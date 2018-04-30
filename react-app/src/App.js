import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import BookingList from "./booking-list/BookingList"
import BookingAdd from "./booking-add/BookingAdd"
import BookingEdit from "./booking-edit/BookingEdit";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Phoenix</h1>
                </header>
                <p className="App-intro">
                </p>

                <BrowserRouter>
                    <div>
                        {/*<ul>*/}
                            {/*<li>*/}
                                {/*/!*<Link to="/">Home</Link>*!/*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*/!*<Link to="/about">About</Link>*!/*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*/!*<Link to="/topics">Topics</Link>*!/*/}
                            {/*</li>*/}
                        {/*</ul>*/}

                        <hr/>

                        <Route exact path="/" component={BookingList}/>
                        <Route path="/bookings" component={BookingList}/>
                        <Route path="/booking-add" component={BookingAdd}/>
                        <Route path="/booking-edit" component={BookingEdit}/>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
