import React from 'react';

class PollutedCities extends React.Component {


    state = {
        cities: [],
        fetchOptions: {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
          }
    }

    componentDidUpdate = (prevProps)=> {
        const { fetchOptions } = this.state;
        if (this.props.currentCountryID !== prevProps.currentCountryID){
        const  cityAPI=`https://api.openaq.org/v1/measurements?country=${this.props.currentCountryID}&order_by=value&sort=desc`;
        fetch(cityAPI, fetchOptions )
          .then(response => {
            if (response.status === 200){
              return response;
            }
            throw Error('No response from API');
          })
          .then(response => response.json())
          .then(cities => {
            this.setState({cities});
            this.props.currentCitiesList(cities)
          });
        }}


        render(){
            return(
                <React.Fragment></React.Fragment>
            )
        }

}

export default PollutedCities;