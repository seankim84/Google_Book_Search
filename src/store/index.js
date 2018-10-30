import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

const initialProps = {};
const logger = createLogger();

const middleware = [ thunk, logger ];

export const store = createStore(
    rootReducer, 
    initialProps,
    compose (
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


