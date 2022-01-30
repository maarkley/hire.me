import $ from 'jquery'
import Toast from 'modern-toastr'

const initialState = {
    authenticated: false,
    user: {
        login: '',
        name: '',
        email: ''
    }
}

let UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTHENTICATE':
        Toast.success('Authenticated from last session successfully!')
            return Object.assign({}, state, {
                authenticated: true, 
                user: {
                    login: 'marecki',
                    name: 'marecki',
                    email: 'websterskjy@gmail.com'
                }
            })
        case 'LOGIN':
        console.log('action received: ', action)
            if ( action.payload.email == 'websterskjy@gmail.com' && action.payload.password == '1234' ) {
                Toast.success('Successfully logged in!')
                localStorage.setItem('userToken', 'mytoken')
                return Object.assign({}, state, {
                    authenticated: true,
                    user: {
                        login: 'marecki',
                        name: 'marecki',
                        email: 'websterskjy@gmail.com'
                    }
                })
            } else {
                Toast.error('Could not log in, try again!')                
                return state
            }
        case 'LOGOUT':
         Toast.success('You have been logged out.')
         localStorage.removeItem('userToken')
         return Object.assign({}, state, {
             authenticated: false,
             user: {
                 login: '',
                 name: '',
                 email: ''
             }
         })
        case 'REGISTER':
            if ( action.payload.email == 'websterskjy@gmail.com' ) {
                Toast.error('E-mail already being used, try a different one.')
                return state
            } else if (action.payload.email == '' ) {
                Toast.error('You have to fill in an e-mail address.')
                return state
            } else {
                Toast.success('Successfully registered! Check your e-mail for more details.')
                return state
            }
        default:
            return state
    }

}

export default UserReducer