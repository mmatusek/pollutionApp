import React from 'react';
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

    handleOnChange = e => {
      this.setState({ value: e.target.value});
    }

    handleSelect = (value) =>{
      this.setState({ value });
      const index = this.state.cities.find(item => item.label === value);
      this.props.handleCountryName(index.label, index.id);
    }

    render(){
        return ( <ReactAutocomplete
            items={this.state.cities}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) =>
              <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
              >
                {item.label}
              </div>
            }
            value={this.state.value}
            onChange={this.handleOnChange}
            onSelect={this.handleSelect}
          />);
    }
}

export default AutoCompleteInput;