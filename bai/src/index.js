import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import './index.css';
import About from './pages/About';
import AcademicProgram from './pages/AcademicProgram';
import AdvocacyPrograms from './pages/AdvocacyPrograms';
import Conferences from './pages/BaiWorkshops/AllConferences';
import BAI2017 from './pages/BaiWorkshops/BAI2017';
import BAI2018 from './pages/BaiWorkshops/BAI2018';
import BAI2019 from './pages/BaiWorkshops/BAI2019';
import BAI2021 from './pages/BaiWorkshops/BAI2021';
import BAI2021CFP from './pages/BaiWorkshops/BAI2021/CallForPapers';
import BAI2021CallForStartups from './pages/BaiWorkshops/BAI2021/CallForStartups';
import BAI2021Team from './pages/BaiWorkshops/BAI2021/Team2021';
import BAI2021Keynote from './pages/BaiWorkshops/BAI2021/KeynoteSpeakers';
import FinancialSupport from './pages/FinancialSupport';
import EntrepreneurshipProgram from './pages/EntrepreneurshipProgram';
import SummerResearchPrograms from './pages/SummerResearchPrograms';
import { PressRoom,  BAIOpenPosition } from './pages/Media';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Partnership from './pages/Partnership';
import Programs from './pages/Programs';
import * as serviceWorker from './serviceWorker';
import NAACL2021 from './pages/BaiSocials/NAACL2021';
import ICML2021 from './pages/BaiSocials/ICML2021';
import Calendar from './pages/Calendar';

library.add(fab, fas);

ReactDOM.render(
    <HashRouter basename='/' hashType={'slash'}>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/membership" component={Membership} />
            <Route path="/partnership" component={Partnership} />
            <Route path="/programs/academic-program" component={AcademicProgram} />
            <Route path="/programs/advocacy" component={AdvocacyPrograms} />
            <Route path="/programs/financial-support" component={FinancialSupport} />
            <Route path="/programs/entrepreneurship-program" component={EntrepreneurshipProgram} />
            <Route path="/programs/summer-research-programs" component={SummerResearchPrograms} />
            <Route path="/programs" component={Programs} />
            <Route path="/conferences" component={Conferences} />
            <Route path="/workshop/bai2017" component={BAI2017} />
            <Route path="/workshop/bai2018" component={BAI2018} />
            <Route path="/workshop/bai2019" component={BAI2019} />
            <Route path="/workshop/bai2021" component={BAI2021} />
            <Route path="/workshop/bai2021-cfp" component={BAI2021CFP} />
            <Route path="/workshop/bai2021-call-for-startups" component={BAI2021CallForStartups} />
            <Route path="/workshop/bai2021-organizers" component={BAI2021Team} />
            <Route path="/workshop/bai2021-keynote-speakers" component={BAI2021Keynote} />
            <Route path="/media" component={PressRoom} />
            <Route path="/media/bai-open-position" component={BAIOpenPosition} />
            <Route path="/events/social-naacl-2021" component={NAACL2021}/>
            <Route path="/events/social-icml-2021" component={ICML2021}/>
            <Route path="/calendar" component={Calendar} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
