import {
    TOGGLE_LOGIN_MODAL,
    TOGGLE_SIGNUP_MODAL,
} from '../actions/modals.js';

export const initialState = {
    isLoginModalOpen: false,
    isSignupModalOpen: false,
};

export default function modalsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case TOGGLE_LOGIN_MODAL:
            return {
                ...state,
                isLoginModalOpen: typeof action.payload === 'boolean' ? action.payload : !state.isLoginModalOpen,
            };
        case TOGGLE_SIGNUP_MODAL:
            return {
                ...state,
                isSignupModalOpen: typeof action.payload === 'boolean' ? action.payload : !state.isSignupModalOpen,
            };
        default:
            return state;
    }
}
