import React from 'react';

function Author(props) {
  return (
    <div className="author_column">
      <div className="member_info">
        <div className="avatar">
          <div className="avatar_image">
          <img src={props.review ? props.review.user.avatarURL : ''} alt="avatar" /></div>
        </div>
        {props.review ? props.review.user.name : ''}
        {props.review ? props.review.user.reviewsCount : ''}
                reviews
      </div>
    </div>
  );
}

export default Author;
