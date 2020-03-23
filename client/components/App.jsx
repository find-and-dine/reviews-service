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
    this.state = {
      allReviews: [],
      filteredReviews: [],
      displayedReviews: [],
      restaurantId: 4,
    };
  }

  componentDidMount() {
    fetch(`/api/reviews/4/`)
      .then((data) => data.json())
      .then((reviews) => {
        this.setState({
          allReviews: reviews,
        });
      });
  }

  render() {
    return (
      <div id="reviews_container">
        <div id="reviews_component">
          <Header count={this.state.allReviews.length} />
          <Filters />
          <ReviewList reviews={this.state.allReviews}/>
          <Footer count={this.state.allReviews.length}/>
        </div>
      </div>
    );
  }
}

export default App;
