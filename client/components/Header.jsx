import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { count } = this.props;
    this.state = {
      count,
    };
  }

  render() {
    return (
      <div id="reviews_header">

        <div id="reviews_header_title">
          <span id="reviews_header_title_text">
            Reviews
            <span id="reviews_header_count">
              {this.props.count}
            </span>
          </span>

          <div id="reviews_header_button">
            Write a review
          </div>

        </div>

      </div>
    );
  }
}

export default Header;
