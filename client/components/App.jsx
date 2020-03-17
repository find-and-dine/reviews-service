import React from 'react';
import Header from './Header';
import Filters from './Filters';
import ReviewList from './ReviewList';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { var: 3};
  }

  render() {
    return (
      <>
        <Header />
        <Filters />
        <ReviewList />
        <Footer />
      </>
    );
  }
}

export default App;

{/*
        <ReviewList />
         */}