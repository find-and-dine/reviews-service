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
      restaurantId: null,
    };
  }

  componentDidMount() {
    const { restaurantId } = this.props;
    fetch(`/api/reviews/${restaurantId}/`)
      .then((data) => data.json())
      .then((reviews) => {
        this.setState({
          allReviews: reviews,
          filteredReviews: reviews,
        });
      });
  }

  render() {
    return (
      <article id="reviews">
        <Header count={this.state.allReviews.length} />
        <Filters />
        <ReviewList reviews={this.state.allReviews} />
        <Footer count={this.state.allReviews.length} />
      </article>
    );
  }
}

export default App;
