    // Stretch goal: refactor into additional sub-components/rethink file system
    // with potential nesting for sub-categories of components

import React from 'react';
import Header from './Header';
import Filters from './Filters';
import ReviewList from './ReviewList';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { var: 3};
  }

  render() {
    return (
      <div id="reviews_container">
        <div id="reviews_component">
          <Header />
          <Filters />
          <ReviewList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;