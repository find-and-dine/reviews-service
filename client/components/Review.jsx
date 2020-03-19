import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = { var: 3 };
  }

  // Stretch goal: Refactor into smaller React components
  // TO DO: There's something wacky going on with my badging element. Need to fix its styles.
  render() {
    return (
      <div className="review_container">
        <div className="review_content">

          <div className="member_info">
            <div className="member_column_info">

              <div className="memberOverlayLink">

                <div className="member_avatar">
                  <div className="avatar_wrapper">
                    <div className="avatar_holder">
                      <img className="avatar_image" src="https://media-cdn.tripadvisor.com/media/photo-l/03/33/14/0c/facebook-avatar.jpg" />
                    </div>
                  </div>
                </div>

                <div className="info_text">
                  <div className="info_text_content">
                    yayymichela
                  </div>
                </div>

              </div>

              <div className="memberOverlayLink badging info_text">
                5 reviews
              </div>

            </div>
          </div>

          <div className="column_content">

            <span className="bubbles">00000 </span>
            <span className="date_ago"> Reviewed 3 days ago </span>

            <div className="title_area">
              <a href="https://www.tripadvisor.com/ShowUserReviews-g60878-d463486-r751001017-The_Pink_Door-Seattle_Washington.html" className="title_text">
                <span>Perfect Dinner Experience</span>
              </a>
            </div>

            <div className="review_body">
              <div className="review_body_entry">
                <div className="review_body_entry_text">
                  I am so glad we got to go before they temporarily closed down. For our one dinner in Seattle, we chose The Pink Door. I cannot recommend it more. The atmosphere was adorable, the food was delicious and the wine was amazing. Everything was perfect!
                </div>
              </div>
            </div>

            <div className="stay_date">
              <span className="stay_date_label">Date of Visit:</span> March 2020
            </div>

            <div className="vote_line">

              <div className="report_area">
                <span className="report_icon">flag</span>
              </div>

              <div className="helpful_area">

                <span className="isHelpful">Helpful?</span>

                <span className="thankButton">
                  <span className="helpful_text">
                    <span className="thumbsIcon">thumbs</span>
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