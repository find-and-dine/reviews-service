import React from 'react';

// TO DO: Make member_badge a subcomponent
// TO DO: Build out additional features
function Author(props) {
  return (
    <div className="author_column">
      <div className="member_info">
        <div className="avatar">
          <div className="avatar_image">
          <img src={props.review ? props.review.user.avatarURL : ''} alt="avatar" /></div>
        </div>
        <div className="author_name">
          {props.review ? props.review.user.name : ''}
        </div>
        <div className="member_badge">
          {props.review ? props.review.user.reviewsCount : ''} reviews
        </div>
      </div>
    </div>
  );
}

export default Author;
