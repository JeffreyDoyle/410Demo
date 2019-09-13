import { TOGGLE_SIGNED_IN } from '../actions/counter.js';

export const initialState = {
    signedIn: false,
};

export default function meReducer(state = initialState, action = {}) {
    switch (action.type) {
        case TOGGLE_SIGNED_IN:
            return {
                signedIn: typeof action.payload === 'boolean' ? action.payload : !state.signedIn,
            };
        default:
            return state;
    }
}
