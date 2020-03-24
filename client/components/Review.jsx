import React from 'react';
import ReviewContent from './ReviewContent';
import Author from './Author';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: null,
      helpfulVotesCount: null,
    };
  }

  // Stretch goal: Refactor into smaller React components
  // TO DO: There's something wacky going on with my badging element. Need to fix its styles.
  // Lots of cleaning up details.
  render() {

    // change key for className="review_body_entry_text";
    //it's currently written to facilitate a test that should be refactored
    // same with className="bubbles" and "date_ago"
    const { review } = this.props;
    return (
      <div className="review_container">
        <div className="review">
          <Author review={review} />
          <ReviewContent review={review} />
        </div>
      </div>
    );
  }
}

export default Review;
