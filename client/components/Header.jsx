import React from 'react';

function Header(props) {
  const { count } = props;
  return (
    <div className="header">
      <span id="title_text">
        Reviews
          <span id="all_reviews_count">
            ({count})
          </span>
        </span>
      <div>
        <a href="" className="primary_button">Write a review</a>
      </div>
    </div>
  );
}

export default Header;
