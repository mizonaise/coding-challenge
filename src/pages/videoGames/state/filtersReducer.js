import * as Constants from './filtersConstants';

const initialState = {
    query: '',
    score: '',
    order_asc: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.FILTERS_LOAD_QUERY:
            return { ...state, query: action.payload.query }
        case Constants.FILTERS_LOAD_SCORE:
            return { ...state, score: action.payload.score }
        case Constants.FILTERS_LOAD_ORDER_ASC:
            return { ...state, order_asc: action.payload.order_asc }
        default:
            return initialState
    }
}