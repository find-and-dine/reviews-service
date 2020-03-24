import React from 'react';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truncated: true,
      votes: null
    };
  }

  render() {

    // TO DO: Find a slightly smaller circle char to use
    // TO DO: Refactor helper functions to condense
    const bubble = (rating) => {
      let bubbles = '';
      let i = 0;
      for (i = 0; i < rating; i += 1) {
        bubbles += '\u2B24 ';
      }
      for (let x = i; x < 5; x += 1) {
        bubbles += '\u25EF ';
      }
      return bubbles;
    }

    const content = (body) => {
      const words = body.split(' ');

      if (words.length <= 45) {
        return body;
      }

      let text = words[0];
      for (let i = 1; i < 45; i += 1){
        text += ' ' + words[i];
      }

      return (
        <>
          {text}
          ...
          <span className="more">More</span>
        </>
      );
    };

    const ago = (reviewedDate) => {
      const milliAgo = new Date() - new Date(reviewedDate);
      let numUnits = null;
      let unit = '';

      if (milliAgo >= (1000 * 60 * 60 * 24 * 7 * 4 * 12)) { // years
        numUnits = Math.floor(milliAgo / (1000 * 60 * 60 * 24 * 7 * 4 * 12));
        unit = 'year';
      } else if (milliAgo >= (1000 * 60 * 60 * 24 * 7 * 4)) { // months
        numUnits = Math.floor(milliAgo / (1000 * 60 * 60 * 24 * 7 * 4));
        unit = 'month';
      } else if (milliAgo >= (1000 * 60 * 60 * 24 * 7)) { // weeks
        numUnits = Math.floor(milliAgo / (1000 * 60 * 60 * 24 * 7));
        unit = 'week';
      } else if (milliAgo >= (1000 * 60 * 60 * 24)) { // days
        numUnits = Math.floor(milliAgo / (1000 * 60 * 60 * 24));
        unit = 'day';
      } else if (milliAgo >= (1000 * 60 * 60)) { // hours
        numUnits = Math.floor(milliAgo / (1000 * 60 * 60));
        unit = 'hour';
      } else if (milliAgo >= (1000 * 60)) { // minutes
        numUnits = Math.floor(milliAgo / (1000 * 60));
        unit = 'minute';
      } else { // seconds
        numUnits = Math.floor(milliAgo / 1000);
        unit = 'second';
      }

      if (numUnits > 1) {
        numUnits += ' ' + unit + 's ';
      } else {
        numUnits += ' ' + unit + ' ';
      }

      return numUnits;
    }

    // TO DO: Refactor keys -- current vals don't make much sense
    // TO DO: Break into smaller subcomponents
    // TO DO: Build out additional features
    return (

      <div id="review_content">

        <span key={this.props.review ? this.props.review.rating + 'bubble': 0} className="bubbles">
          {this.props.review ? '' + bubble(this.props.review.rating) : ''}
        </span>
        <span key={this.props.review ? this.props.review.hereFor : ''} className="date_ago">
          Reviewed {this.props.review ? ago(this.props.review.timePosted) : ''} ago
        </span>

        <div className="review_title">
          <a href="https://www.tripadvisor.com/ShowUserReviews-g60878-d463486-r751001017-The_Pink_Door-Seattle_Washington.html">
            <span>
              {this.props.review ? this.props.review.title : ''}
            </span>
          </a>
        </div>

        <div className="review_body">
          <div key={this.props.review ? this.props.review.title : ''}>
              {this.props.review ? content(this.props.review.body) : ''}
          </div>
        </div>

      <div className="stay_date">
        <span className="stay_date_label">Date of Visit:</span> {this.props.review ? this.props.review.monthVisited : ''}
      </div>

      <div className="vote_line">

        <div className="report_area">
          <span className="report_icon">&#x2691;</span>
        </div>

        <div className="helpful_area">

          <span className="isHelpful">Helpful?</span>

          <span className="thankButton">
            <span className="helpful_text">
              <span className="thumbsIcon"><img id="thumbs" src="https://i.imgur.com/go45qVr.png" /> {this.props.review ? this.props.review.helpfulVotesCount : ''} </span>
            </span>
          </span>

        </div>

      </div>

    </div>
    )
  }
}

export default ReviewContent;
