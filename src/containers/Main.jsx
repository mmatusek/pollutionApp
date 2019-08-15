import React from 'react';

import AutoCompleteInput from '../components/autoCompleteInput/AutoCompleteInput.jsx';
import PollutedCities from '../components/pollutedCities/PollutedCities.jsx';
import AccordionList from '../components/accordionList/AccordionList.jsx';
import './Main.css';

class App extends React.Component {

  state = {
    currentCities: [],
    country: '',
    id: ''
  }
  countryName = (countryName,id) => {
    this.setState({
      country: countryName,
      id
    });
  }

  citiesList= (cities) => {
    let result = [];
    const currentCity = cities.results.map(item => item.city);
    currentCity.forEach((element, index) =>{
      if (currentCity.indexOf(element, index) > -1) {
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });
    this.setState({
      currentCities: result.slice(0,10)
    });
  }

  render(){
  return (
  <React.Fragment>
   <AutoCompleteInput handleCountryName={this.countryName}/>
   <PollutedCities currentCountryID={this.state.id} currentCitiesList={this.citiesList}/>
   <AccordionList citiesToDisplay={this.state.currentCities}/>
  </React.Fragment>
  );
}
}

export default App;
