import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SearchPollutedCitiesPage  from './SearchPollutedCitiesPage';

configure({adapter: new Adapter()});

it ('renders without crashing', () => {
  shallow(<SearchPollutedCitiesPage />);
});