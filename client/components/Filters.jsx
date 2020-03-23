import React from 'react';
// import Checkboxes from './Checkboxes';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {
        excellent: null,
        veryGood: null,
        average: null,
        poor: null,
        terrible: null,
      },
      travelerType: [],
      timeOfYear: [],
      language: '',
    };
  }

  // TO DO: Refactor into subcomponents
  render() {
    return (
    <div className="temp">
      <img className="temp" src="https://i.imgur.com/DGuU9Yz.png" width="750px" />
    </div>
    );
  }
}

export default Filters;
