import { INCREMENT_COUNTER } from '../actions/counter.js';

export const initialState = {
    count: 0,
};

export default function counterReducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                count: state.count++,
            };
        default:
            return state;
    }
}
