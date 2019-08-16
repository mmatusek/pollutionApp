import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';

class AutoCompleteInput extends React.Component {

    state ={
        cities :
         [
        {id: 'PL', label: 'Poland' },
        {id: 'DE', label: 'Germany'},
        {id: 'ES', label: 'Spain' },
        {id: 'FR', label: 'France' }
        ]
    }

    handleOnChange = (event,value) => {
      localStorage.setItem('val', JSON.stringify(value));
      this.setState({ value: event.target.value});
    }
    handleSelect = (value) =>{
      this.setState({ value });
      const index = this.state.cities.find(item => item.label === value);
      this.props.handleCountryName(index.label, index.id);
      localStorage.setItem('val', JSON.stringify(index.label));
    }

    render(){
      const val = JSON.parse(localStorage.getItem('val'));
        return ( <React.Fragment>
        <p>Country</p>
        <ReactAutocomplete
            className='searchInput'
            items={this.state.cities}
            shouldItemRender={(item, value) =>  {
              if (!!value && typeof value === 'string'){
                return item.label.toLowerCase().indexOf(value.toLowerCase()) > -1;
               } else {
                  return value;
               }
              }
            }
            getItemValue={item => item.label}
            renderItem={(item, highlighted) =>
              <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
              >
                {item.label}
              </div>
            }
            value={val}
            onChange={this.handleOnChange}
            onSelect={this.handleSelect}
            wrapperStyle={{'margin':'5px 0'}}
          />
          </React.Fragment>);
    }
}

AutoCompleteInput.propTypes = {
  handleCountryName: PropTypes.func
};

export default AutoCompleteInput;