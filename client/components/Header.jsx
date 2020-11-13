import React from 'react';

function Header(props) {
  const { count } = props;
  return (
    <header className="header">
      <h1 id="title_text">
        Reviews
          <span id="all_reviews_count">
            ({count})
          </span>
      </h1>
      <a href="" className="primary_button">Write a review</a>
    </header>
  );
}

export default Header;
