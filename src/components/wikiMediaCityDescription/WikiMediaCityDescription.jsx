import React from 'react';

class wikiMediaCityDescription extends React.Component {

    state = {
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
         }}

        fetchDataApi = () =>{
          const { fetchOptions} = this.state
          const proxyurl = "https://cors-anywhere.herokuapp.com/";
          const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${this.props.cityName}`;
          fetch(proxyurl + url, fetchOptions)
          .then(response => {
              if (response.status === 200){
                  return response;
              }
              throw Error('No response from API');
              })
          .then((resp) => resp.json())
          .then(data => {
            this.setState({description: data.query.pages})
          });
        }

        descriptionBox = () =>{
          const descriptionValues = Object.values(this.state.description);
          const newDesp = descriptionValues[0];
          if(( newDesp=== undefined)){return <p></p>}
          else { return <p>{newDesp.extract}</p>}
        }
      
        render(){ 
            return(
              <React.Fragment>{this.descriptionBox()}</React.Fragment>
            );
        }

}

export default wikiMediaCityDescription;