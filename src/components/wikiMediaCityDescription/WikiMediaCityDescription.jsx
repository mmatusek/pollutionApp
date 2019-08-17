import React from 'react';
import PropTypes from 'prop-types';

class WikiMediaCityDescription extends React.Component {

  state = {
    api: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1',
    proxyUrl: 'https://cors-anywhere.herokuapp.com/',
    description: '',
    fetchOptions: {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }
  }

  componentDidMount = () => {
    this.fetchDataApi();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.cityName !== prevProps.cityName) {
      this.fetchDataApi();
    }
  }

  /**
  *  Function for fetching data from API https://www.mediawiki.org/wiki/API:Query
  */
  fetchDataApi = () => {
    const { cityName } = this.props;
    const { fetchOptions, api, proxyUrl } = this.state;

    const currentCityName = cityName.split('/')[0];
    //console.log(currentCityName, ${proxyUrl}${api}&titles=${currentCityName})
    const url = `${proxyUrl}${api}&titles=${currentCityName}`;

    fetch(url, fetchOptions)
      .then(response => {
        if (response.status === 200){
          return response;
        }
        throw Error('No response from API');
      })
      .then((resp) => resp.json())
      .then(data => {
        const descriptionValues = Object.values(data.query.pages)[0];

        this.setState({
          description: descriptionValues
        });
      });
  }

  render() {
    const { description } = this.state;

    return (
      description
        ? <p>{description.extract}</p>
        : <p></p>
    );
  }
}

WikiMediaCityDescription.propTypes = {
  cityName: PropTypes.string
};

export default WikiMediaCityDescription;