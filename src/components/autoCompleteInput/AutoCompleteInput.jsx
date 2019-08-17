import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';

class AutoCompleteInput extends React.Component {

  state = {
    selectedCity: '',
    cities :
      [
        {id: 'PL', label: 'Poland' },
        {id: 'DE', label: 'Germany'},
        {id: 'ES', label: 'Spain' },
        {id: 'FR', label: 'France' }
      ]
  }

  componentDidMount() {
    // get city selected before refreshing the site from localStorage
    const lastSelectedCity = JSON.parse(localStorage.getItem('selectedCity'));

    this.setState({
      selectedCity: lastSelectedCity
    });
  }

  /**
   *  Function for handling onChange action
   *  @param {object} event -  event
   */
  handleOnChange = (event) => {
    const selectedCity = event.target.value;

    // save currently selected city to the localStorage
    localStorage.setItem('selectedCity', JSON.stringify(selectedCity));

    this.setState({ selectedCity });
  }

  /**
   *  Function for handling onSelect action
   *  @param {string} value -  value selected from input
   */
  handleSelect = (selectedCity) =>{
    const index = this.state.cities.find(item => item.label === selectedCity);

    // save currently selected city to the localStorage
    localStorage.setItem('selectedCity', JSON.stringify(selectedCity));

    this.setState({ selectedCity });
    this.props.handleCountryName(index.label, index.id);
  }

  /**
   *  Function to determine whether or not it should be displayed in the dropdown menu.
   *  @param {object} item - city details
   *  @param {string} value - city actual value in input field
   */
  shouldItemRender = (item, value) => {
    if (!!value && typeof value === 'string'){
      return item.label.toLowerCase().indexOf(value.toLowerCase()) > -1;
    } else {
      return value;
    }
  }

  /**
   *  Function invoked to generate the render tree for the dropdown menu
   *  @param {object} item - city details
   *  @param {boolean} highlighted - if item is highlighted
   */
  renderItem = (item, highlighted) => (
    <div
      key={item.id}
      style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
    >
      {item.label}
    </div>
  )

  render() {
    const { selectedCity } = this.state;

    return (
      <React.Fragment>
        <p>Search country</p>
        <ReactAutocomplete
          className='searchInput'
          items={this.state.cities}
          shouldItemRender={(item, value) => this.shouldItemRender(item, value)}
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => this.renderItem(item, highlighted)}
          value={selectedCity}
          onChange={this.handleOnChange}
          onSelect={this.handleSelect}
          wrapperStyle={{'margin':'5px 0'}}
        />
      </React.Fragment>
    );
  }
}

AutoCompleteInput.propTypes = {
  handleCountryName: PropTypes.func
};

export default AutoCompleteInput;

