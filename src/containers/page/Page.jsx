import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from '../startPage/StartPage';
import SearchPollutedCities from '../searchPollutedCitiesPage/SearchPollutedCitiesPage.jsx';
import ErrorPage from '../errorPage/ErrorPage.jsx';

const Page = () => {
    return (
        <Switch>
            <Route path = "/" exact component = {StartPage} />
            <Route path = "/findCities" component = {SearchPollutedCities} />
            <Route component = {ErrorPage}/>
        </Switch>
    );
};

export default Page;

