import React from 'react';
import Review from './Review';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    const { reviews } = this.props;
    this.state = {
     // reviews,
    };
  }

  render() {
    return (
      <div id="reviews_review_list">

        <Review key="1" review={this.props.reviews[0]} />
        <Review key="2" review={this.props.reviews[1]} />
        <Review key="3" review={this.props.reviews[2]} />
        <Review key="4" review={this.props.reviews[3]} />
        <Review key="5" review={this.props.reviews[4]} />
        <Review key="6" review={this.props.reviews[5]} />
        <Review key="7" review={this.props.reviews[6]} />
        <Review key="8" review={this.props.reviews[7]} />
        <Review key="9" review={this.props.reviews[8]} />
        <Review key="10" review={this.props.reviews[9]} />

      </div>
    );
  }
}

export default ReviewList;
