import React from 'react';

import AutoCompleteInput from '../../components/autoCompleteInput/AutoCompleteInput.jsx';
import PollutedCities from '../../components/pollutedCities/PollutedCities.jsx';
import AccordionList from '../../components/accordionList/AccordionList.jsx';

class SearchPollutedCitiesPage extends React.Component {

  state = {
    currentCities: [],
    country: '',
    id: ''
  }

  componentDidMount() {
    // get the string entered before refreshing the site from localStorage
    const currentCities = JSON.parse(localStorage.getItem('currentCities'));

    this.setState({
      currentCities
    });
  }

  /**
   *  Function for handle data received from child component - AutoCompleteInput
   *  @param {string} countryName - current country name  i.e. "Poland"
   *  @param {string} id - current country id - i.e. 'PL'
   */
  countryName = (countryName, id) => {
    this.setState({
      country: countryName,
      id
    });
  }

 /**
   *  Function for handle data received from child component - PollutedCities
   *  @param {object} countryName - object with the information about air conditions in cities. Value - desc
   *  - i.e. 1:{location:"AM1 Gdańsk Śródmieście",city:"Gdańsk",parameter:"co",value:9584.94999,unit:"µg/m³",...},
   *         2:{location:"Wrocław-Korzeniowskiego",city:"Wrocław" parameter:"co",value:6645.08,unit:"µg/m³", …}
   */
  citiesList= (cities) => {
    const currentCities = cities.results.map(item => item.city);
    const uniqueCities = [...new Set(currentCities)];
    const limitedCities = uniqueCities.slice(0,10);

    // save currently entered string to the localStorage
    localStorage.setItem('currentCities', JSON.stringify(limitedCities));

    this.setState({
      currentCities: limitedCities
    });
  }

  render(){
    const { currentCities, id } = this.state;

    return (
      <React.Fragment>
        <AutoCompleteInput handleCountryName={this.countryName}/>
        <PollutedCities currentCountryID={id} currentCitiesList={this.citiesList}/>
        <AccordionList citiesToDisplay={currentCities}/>
      </React.Fragment>
    );
  }
}

export default SearchPollutedCitiesPage;