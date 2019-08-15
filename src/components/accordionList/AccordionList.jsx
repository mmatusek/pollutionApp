import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import WikiMediaCityDescription from '../wikiMediaCityDescription/WikiMediaCityDescription.jsx';

 class AccordionList extends Component {
  state = { activeIndex: 0}

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  }

  render() {

   const listItem =this.props.citiesToDisplay.map((item,i) =>(
    <React.Fragment key={i}>
     <Accordion.Title active={this.state.activeIndex === i} index={i} onClick={this.handleClick}>
      <Icon name='dropdown' />
      {item}
    </Accordion.Title>
    <Accordion.Content active={this.state.activeIndex === i}>
        <WikiMediaCityDescription cityName={item}/>
    </Accordion.Content>
    </React.Fragment>));

    return (
      <Accordion fluid styled>
        {listItem}
      </Accordion>
    );
  }
}

AccordionList.propTypes = {
  citiesToDisplay: PropTypes.array.isRequired
};

export default AccordionList;