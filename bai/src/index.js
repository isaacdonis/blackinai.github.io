import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter, BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker';
import Membership from './pages/Membership';
import Partnership from './pages/Partnership';
import AcademicPrograms from './pages/AcademicPrograms';
import Programs from './pages/Programs';
import Conferences from './pages/BaiWorkshops/AllConferences';

library.add(fab, fas);

ReactDOM.render(
    <HashRouter basename='/' hashType={'noslash'} >
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/membership" component={Membership}/>
            <Route path="/partnership" component={Partnership}/>
            <Route path="/academic-programs" component={AcademicPrograms}/> 
            <Route path="/programs" component={Programs}/>
            <Route path="/conferences" component={Conferences}/>
            <Route path="/workshop/bai2017" component={Conferences}/>
            <Route path="/workshop/bai2018" component={Conferences}/>
            <Route path="/workshop/bai2019" component={Conferences}/>
            <Route path="/workshop/bai2020" component={Conferences}/>
        </Switch>
    </HashRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
