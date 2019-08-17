import React from 'react';
import PropTypes from 'prop-types';

class WikiMediaCityDescription extends React.Component {

    state = {
      api:'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1',
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
        if (this.props.cityName !== prevProps.cityName) {this.fetchDataApi();}
        }
        /**
        *  Function for fetching data from API https://www.mediawiki.org/wiki/API:Query
        */
        fetchDataApi = () =>{
          const cityName=this.props.cityName.split('/');
          const { fetchOptions} = this.state;
          const proxyurl = 'https://cors-anywhere.herokuapp.com/';
          const url = `${this.state.api}&titles=${cityName.length>1 ? cityName[1]: cityName[0]}`;
          fetch(proxyurl + url, fetchOptions)
          .then(response => {
              if (response.status === 200){
                  return response;
              }
              throw Error('No response from API');
              })
          .then((resp) => resp.json())
          .then(data => {
            this.setState({description: data.query.pages});
          });
        }
        render(){
          const descriptionValues = Object.values(this.state.description);
          const newDesp = descriptionValues[0];
          if (newDesp=== undefined) {
            return <p></p>;
          } else { return <p>{newDesp.extract}</p>;}
        }
}

WikiMediaCityDescription.propTypes = {
  cityName: PropTypes.string
};

export default WikiMediaCityDescription;