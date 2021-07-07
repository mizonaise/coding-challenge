import * as Constants from './filtersConstants';

const init = () => ({
    type: Constants.FILTERS_INIT,
})

const score = (score) => ({
    type: Constants.FILTERS_LOAD_SCORE,
    payload: {
        score,
    },
})

const query = (query) => ({
    type: Constants.FILTERS_LOAD_QUERY,
    payload: {
        query,
    },
})

const orderASC = (order_asc) => ({
    type: Constants.FILTERS_LOAD_ORDER_ASC,
    payload: {
        order_asc,
    },
})

const clear = () => ({
    type: Constants.FILTERS_CLEAR,
})

export const initFilter = () => {
    return (dispatch) => {
        dispatch(init())
    }
}

export const loadScore = (num) => {
    return (dispatch) => {
        dispatch(score(num))
    }
}

export const loadQuery = (str) => {
    return (dispatch) => {
        dispatch(query(str))
    }
}

export const loadOrderASC = (asc) => {
    return (dispatch) => {
        dispatch(orderASC(asc))
    }
}

export const filtersClear = () => {
    return (dispatch) => {
        dispatch(clear())
    }
}