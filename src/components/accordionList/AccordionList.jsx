import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import WikiMediaCityDescription from '../wikiMediaCityDescription/WikiMediaCityDescription.jsx';

 class AccordionList extends Component {

  state = { 
    activeIndex: 0
  }

  handleClick = (_e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  createListItem = () => {
    const { citiesToDisplay } = this.props;
    const { activeIndex } = this.state;

    const listItem = citiesToDisplay.map((item, i) => (
      <React.Fragment key={i}>
        <Accordion.Title
          active={activeIndex === i}
          index={i}
          onClick={this.handleClick}
        >
          <Icon name='dropdown'/>
          {item}
        </Accordion.Title>
        <Accordion.Content
          active={this.state.activeIndex === i}
        >
          <WikiMediaCityDescription cityName={item}/>
        </Accordion.Content>
      </React.Fragment>
    ));

    return listItem;
  }

  render() {
    const { citiesToDisplay } = this.props;

    return (
      citiesToDisplay
        ? <Accordion fluid styled>
            {this.createListItem()}
          </Accordion>
        : <div></div>
    );
  }
}

AccordionList.propTypes = {
  citiesToDisplay: PropTypes.array
};

export default AccordionList;