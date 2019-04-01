import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Launch from './launch';
import Launches from './launches';
import Cart from './cart';
import Profile from './profile';
import { Footer, PageContainer } from '../components';

class Pages extends React.Component() {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <PageContainer>
          <Router primary={false} component={Fragment}>
            <Launches path="/" />
            <Launch path="launch/:launchId" />
            <Cart path="cart" />
            <Profile path="profile" />
          </Router>
        </PageContainer>
        <Footer />
      </Fragment>
    );
  }
}

export default Pages;