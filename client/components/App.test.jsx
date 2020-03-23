// Current coverage: 81.43%

import React from 'react';
import "isomorphic-fetch";
import Enzyme from 'enzyme';
import App from './App';
// import Checkboxes from './Checkboxes';
import Filters from './Filters';
import Footer from './Footer';
import Header from './Header';
// import RatingBox from './RatingBox';
import Review from './Review';
import ReviewList from './ReviewList';

// TO DO: Improve test suite to increase coverage

let dummyData = [
  {
    restaurant: {
      restaurantId: 1,
      restaurantName: 'Burger King',
      claimed: false,
    },
    user: {
      userId: 1,
      name: 'John Doe',
      avatarURL: '',
      reviewsCount: 4,
      postsCount: 2,
      location: 'New York',
      level: 55,
    },
    title: 'Meh',
    body: 'It was just okay',
    timePosted: '2020-02-23',
    monthVisited: 'August',
    hereFor: 'Breakfast',
    votes: 3,
    device: 'mobile',
    travelerType: 'Family',
    language: 'English',
    rating: 5,
    serviceRating: 4,
    foodRating: 5,
    valueRating: 5,
    helpfulVotesCount: 5,
  },
  {
    restaurant: {
      restaurantId: 1,
      restaurantName: 'Burger King',
      claimed: false,
    },
    user: {
      userId: 2,
      name: 'Jane Doe',
      avatarURL: '',
      reviewsCount: 4,
      postsCount: 3,
      location: 'Seattle',
      level: 2,
    },
    title: 'Best!',
    body: "I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. ",
    timePosted: new Date(),
    monthVisited: 'January',
    hereFor: 'Lunch',
    votes: 5,
    device: 'mobile',
    travelerType: 'Solo',
    language: 'English',
    rating: 4,
    serviceRating: 3,
    foodRating: 5,
    valueRating: 2,
    helpfulVotesCount: 5,
  }
];

// TO DO: Uncomment Checkboxes and RatingBox once components implemented
it('exists and contains all the correct components', () => {
  const wrap = Enzyme.mount(<App />);
  expect(wrap.exists());
  // expect(wrap.containsMatchingElement(<Checkboxes />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<Filters />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<Footer />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<Header />)).toBeTruthy();
  // expect(wrap.containsMatchingElement(<RatingBox />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<Review />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<ReviewList />)).toBeTruthy();
});

it('truncates review bodies consisting of more than 45 words', () => {
  const wrap = Enzyme.mount(<App />);
  wrap.setState({ allReviews: dummyData} );
  expect(wrap.findWhere(node => node.key() === 'Best!').text()).toEqual('I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I want Burger King. I... More');
 });

 it('filled bubbles for reach review should match star rating', () => {
  const wrap = Enzyme.mount(<App />);
  wrap.setState({ allReviews: dummyData} );
  expect(wrap.findWhere(node => node.key() === '4bubble').text()).toEqual('⬤ ⬤ ⬤ ⬤ ◯  ');
  expect(wrap.findWhere(node => node.key() === '5bubble').text()).toEqual('⬤ ⬤ ⬤ ⬤ ⬤  ');
 });

 it('articulates date review posted in terms of units of time passed', () => {
  const wrap = Enzyme.mount(<App />);
  wrap.setState({ allReviews: dummyData} );
  expect(wrap.findWhere(node => node.key() === 'Breakfast').text()).toEqual(' Reviewed 1 month ago');
 });