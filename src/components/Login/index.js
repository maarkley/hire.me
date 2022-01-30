import React from 'react'
import { connect } from 'react-redux'
import * as User from '../../actions/User.js'
import Toast from 'modern-toastr'

class Login extends React.Component {

    constructor() {
        super()
        console.log('constructing login')
    }

    componentDidUpdate(prevProps) {
        console.log('prev props: ', prevProps)
        if ( this.props.user.authenticated && prevProps.user.authenticated ) {
            Toast.success('You are already logged in, have fun!')
            this.props.history.push('/')
        } 
    }

    render() {
        return <div className = "loginWrapper">
                    <form>
                        <div className = "formGroup">
                            <input type="text" ref="email" placeholder="email"/>
                        </div>
                        <div className = "formGroup">
                            <input type="password" ref="password" placeholder="passwort"/>
                        </div>
                            <input type="submit" value="Einloggen" onClick = {this.submitForm.bind(this)}/>
                    </form>
               </div>

    }

    submitForm(e) {
        e.preventDefault()
        this.props.dispatch(User.login({
            email: this.refs.email.value,
            password: this.refs.password.value
        }))

    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null, null, {
    pure: false
})(Login)