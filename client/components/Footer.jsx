import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      var: 3
    };
  }

  // TO DO: Refactor pageNumber into subcomponent with more elegant logic
  // TO DO: Implement functionality of pagination
  render() {
    return (
      <div id="footer">
        <div id="pagination">

          <button type="button" id="previousButton">Previous</button>

          <div id="pageNumbers">

            <a href="http://localhost:3003/" className="page_number_selected">1</a>
            <a href="http://localhost:3003/" className="page_number">2</a>
            <a href="http://localhost:3003/" className="page_number">3</a>
            <a href="http://localhost:3003/" className="page_number">4</a>
            <a href="http://localhost:3003/" className="page_number">5</a>
            <a href="http://localhost:3003/" className="page_number">6</a>

            <a href="" id="pageSeparator">...</a>

            <a href="" className="page_number">{Math.ceil(this.props.count / 10)}</a>

          </div>

          <button type="button" id="nextButton">Next</button>

        </div>
      </div>
    );
  }
}

export default Footer;
