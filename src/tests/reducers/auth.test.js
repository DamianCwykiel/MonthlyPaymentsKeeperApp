import authReducer from '../../reducers/auth';

test ('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '1234567890'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test ('should clear uid for logout', () => {
    const action = {
        type:'LOGOUT'
    };
    const state = authReducer({ uid: 'xxxxxx'}, action);
    expect(state).toEqual({});
});