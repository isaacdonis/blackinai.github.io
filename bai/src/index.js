import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/membership" component={Membership} exact/>
            <Route path="/partnership" component={Partnership} exact/>
            <Route path="/academic-programs" component={AcademicPrograms} exact/> 
            <Route path="/programs" component={Programs} exact/>
            <Route path="/conferences" component={Conferences} exact/>
            <Route path="/workshop/bai2017" component={Conferences} exact/>
            <Route path="/workshop/bai2018" component={Conferences} exact/>
            <Route path="/workshop/bai2019" component={Conferences} exact/>
            <Route path="/workshop/bai2020" component={Conferences} exact/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
