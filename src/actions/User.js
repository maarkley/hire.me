

export function authenticate() {
    return {
        type: 'AUTHENTICATE'
    }
}

export function login(data) {
    return {
        type: 'LOGIN',
        payload: data
    }
}

export function logout(data) {
    return {
        type: 'LOGOUT'
    }
}

export function register(data) {
    return {
        type: 'REGISTER',
        payload: data
    }
}