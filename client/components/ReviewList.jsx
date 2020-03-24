import React from 'react';
import Review from './Review';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truncated: true
    }
  }

  // TO DO: Account for edge case of n < 10
  render() {
    const reviews = this.props.reviews.slice(0, 10).map((review) =>
      <Review key={review._id} review={review} />
    );
    return (
    <div>
      {reviews}
    </div>
    );
  }
}

export default ReviewList;
