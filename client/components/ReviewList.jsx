import React from 'react';
import Review from './Review';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { var: 3};
  }

  render() {
    return (
      <div id="reviews_review_list">
        <ul>
          <Review />
        </ul>
      </div>
    );
  }
}

export default ReviewList;