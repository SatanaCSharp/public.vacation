import { createStore } from 'redux';
import rootReducer from './reducers';
const configureStore = preloadState => (
    createStore(
        rootReducer,
        preloadState
    )
);
const store = configureStore({});

export default store;