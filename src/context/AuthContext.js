

const user = {
    userId: 1,
    token: 'abc123',
    username: 'testuser',
    email: 'example@test.pl',
    firstName: 'Test',
    lastName: 'User',
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                userId: 1,
                token: 'abc123',
                username: 'testuser',
                email: 'example@test.pl',
                firstName: 'Test',
                lastName: 'User',
            }
        case 'logout':
            return null;
        default:
            return state;
    }
}

const login = (dispatch) => {

    return({username, password}) => {
        console.log('User' + username + 'logged in');
        dispatch({
            type: 'login',
            payload: {
                userId: 1,
                token: 'abc123',
                username: 'testuser',
                email: 'example@test.pl',
                firstName: 'Test',
                lastName: 'User',
            },
        });
    }

}