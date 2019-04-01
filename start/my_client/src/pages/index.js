import React, { Fragment } from 'react';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

import Launches from './launches';

export default function Pages() {
    return (
        <Fragment>
            <PageContainer>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </nav>
                        <Route path="/" exact component={Launches} />
                    </div>
                </Router>
            </PageContainer>
        </Fragment>
    )
} 