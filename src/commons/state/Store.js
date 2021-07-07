import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import filtersReducer from '../../pages/videoGames/state/filtersReducer'

const rootReducer = combineReducers({
    filtersReducer
});

const configureStore = preloadedState => createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default configureStore