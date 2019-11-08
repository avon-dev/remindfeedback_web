import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers';
import AppHeader from '../components/AppHeader';

const RemindFeedback = ({Component, store}) => {
    return(
        <> 
            <Provider store={store}>
                <AppHeader/>
                <Component/>
            </Provider>
        </>
    )
}

RemindFeedback.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

export default withRedux((initialState, options) => {
    const middlewares = [];
    const enhancer = compose(
        applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
      );
      const store = createStore(reducer, initialState, enhancer);
      return store;

})(RemindFeedback);

