export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL_OPEN';
export const TOGGLE_SIGNUP_MODAL = 'TOGGLE_SIGNUP_MODAL_OPEN';

export const toggleLoginModal = (payload) => ({
    type: TOGGLE_LOGIN_MODAL,
    payload,
});

export const toggleSignupModal = (payload) => ({
    type: TOGGLE_SIGNUP_MODAL,
    payload,
});
