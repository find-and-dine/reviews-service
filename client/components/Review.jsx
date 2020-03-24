import React from 'react';
import ReviewContent from './ReviewContent';
import Author from './Author';

class Review extends React.Component {
  constructor(props) {
    super(props);
    const { review } = this.props;
    this.state = {
      votes: null,
      helpfulVotesCount: null,

    };
  }

  // Stretch goal: Refactor into smaller React components
  // TO DO: There's something wacky going on with my badging element. Need to fix its styles.
  // Lots of cleaning up details.
  render() {

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

    // change key for className="review_body_entry_text";
    //it's currently written to facilitate a test that should be refactored
    // same with className="bubbles" and "date_ago"
    return (
      <div className="review_container">
        <div className="review_content">

          <div className="member_info">
            <div className="member_column_info">

              <div className="memberOverlayLink">

                <div className="member_avatar">
                  <div className="avatar_wrapper">
                    <div className="avatar_holder">
                      <img className="avatar_image" src={this.props.review ? this.props.review.user.avatarURL : ''} alt="avatar" />
                    </div>
                  </div>
                </div>

                <div className="info_text">
                  <div className="info_text_content">
                    {this.props.review ? this.props.review.user.name : ''}
                  </div>
                </div>

              </div>

              <div className="info_text">
                {this.props.review ? this.props.review.user.reviewsCount : ''}
                reviews
              </div>

            </div>
          </div>

          <div className="column_content">

            <span key={this.props.review ? this.props.review.rating + 'bubble': 0} className="bubbles">{this.props.review ? '' + bubble(this.props.review.rating) : ''} </span>
            <span key={this.props.review ? this.props.review.hereFor : ''} className="date_ago"> Reviewed {this.props.review ? ago(this.props.review.timePosted) : ''}ago</span>

            <div className="title_area">
              <a href="https://www.tripadvisor.com/ShowUserReviews-g60878-d463486-r751001017-The_Pink_Door-Seattle_Washington.html" className="title_text">
                <span>
                  {this.props.review ? this.props.review.title : ''}
                </span>
              </a>
            </div>

            <div className="review_body">
              <div className="review_body_entry">
                <div key={this.props.review ? this.props.review.title : ''}className="review_body_entry_text">
                    {this.props.review ? content(this.props.review.body) : ''}
                </div>
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

        </div>
      </div>
    );
  }
}

export default Review;
