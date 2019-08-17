import React from 'react';
import PropTypes from 'prop-types';

class PollutedCities extends React.Component {

  state = {
    apiUrl: 'https://api.openaq.org/v1/measurements?country=',
    cities: [],
    fetchOptions: {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.currentCountryID !== prevProps.currentCountryID) {
      this.fetchDataApi();
    }
  }

  /**
  *  Function for fetching data from API https://docs.openaq.org/
  */
  fetchDataApi = ()=> {
    const { fetchOptions, apiUrl } = this.state;
    const { currentCountryID } = this.props;

    const  cityAPI = `${apiUrl}${currentCountryID}&order_by=value&sort=desc`;

    fetch(cityAPI, fetchOptions)
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        throw Error('No response from API');
      })
      .then(response => response.json())
      .then(cities => {
        this.setState({cities});
        this.props.currentCitiesList(cities);
      });
  }

  render() {
    return <React.Fragment/>;
  }
}

PollutedCities.propTypes = {
  currentCitiesList: PropTypes.func,
  currentCountryID: PropTypes.string
};

export default PollutedCities;