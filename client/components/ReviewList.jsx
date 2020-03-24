import React from 'react';
import Review from './Review';

function ReviewList(props) {
  // TO DO: Account for edge case of n < 10
  const reviews = props.reviews.slice(0, 10).map((review) =>
    <Review key={review._id} review={review} />
  );
  return (
  <div>
    {reviews}
  </div>
  );
}

export default ReviewList;
