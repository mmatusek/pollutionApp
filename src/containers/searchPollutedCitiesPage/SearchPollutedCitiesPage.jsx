import React from 'react';

import AutoCompleteInput from '../../components/autoCompleteInput/AutoCompleteInput.jsx';
import PollutedCities from '../../components/pollutedCities/PollutedCities.jsx';
import AccordionList from '../../components/accordionList/AccordionList.jsx';

class App extends React.Component {

  state = {
    currentCities: [],
    country: '',
    id: ''
  }

  /**
   *  Function for handle data received from child component - AutoCompleteInput
   *  @param {string} countryName - current country name  i.e. "Poland"
   *  @param {string} id - current country id - i.e. 'PL'
   */
  countryName = (countryName,id) => {
    this.setState({
      country: countryName,
      id
    });

    if (countryName === '' & id===''){
      this.setState({
        country:'Poland',
        id: 'PL'
      });
    }
  }

 /**
   *  Function for handle data received from child component - PollutedCities
   *  @param {object} countryName -object with the information about air conditions in cities. Value- desc
   *  - i.e. 1:{location:"AM1 Gdańsk Śródmieście",city:"Gdańsk",parameter:"co",value:9584.94999,unit:"µg/m³",...},
   *  2:{location:"Wrocław-Korzeniowskiego",city:"Wrocław" parameter:"co",value:6645.08,unit:"µg/m³", …}
   */
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
    localStorage.setItem('currentCities', JSON.stringify(result.slice(0,10)));
    this.setState({
      currentCities: result.slice(0,10)
    });
  }

  render(){
  const currentCities = JSON.parse(localStorage.getItem('currentCities'));
  return (
  <React.Fragment>
   <AutoCompleteInput handleCountryName={this.countryName}/>
   <PollutedCities currentCountryID={this.state.id} currentCitiesList={this.citiesList}/>
   <AccordionList citiesToDisplay={currentCities}/>
  </React.Fragment>
  );
}
}

export default App;
