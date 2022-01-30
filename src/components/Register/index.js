import React from 'react'
// import styles from './style.scss'
import { connect } from 'react-redux'
import * as User from '../../actions/User.js'

@connect((store) => {
    return store
})
export default class Register extends React.Component {

    render() {

        return <div className = {styles.registerWrapper}>
                    <form>
                        <div className = {styles.formGroup}>
                            <input type="text" ref="email" placeholder="email"/>
                        </div>
                        
                        <div className = {styles.formGroup}>
                            <input type="password" ref="password" placeholder="passwort"/>
                        </div>
                        <div className = {styles.formGroup}>
                            <input type="password" ref="passwordRepeat" placeholder="passwort wiederholen"/>
                        </div>
                        <div className = {styles.formGroup}>
                            <input type="text" ref="name" placeholder="name (optional)"/>
                        </div>
                        <div className = {styles.formGroup}>
                            <input type="text" ref="surname" placeholder="nachname (optional)"/>
                        </div>
                        <div className = {styles.formGroup}>
                            <input type="text" ref="companyname" placeholder="firmaname (optional)"/>
                        </div>
                            <input type="submit" value="Einloggen" onClick = {this.submitForm.bind(this)} />
                    </form>
               </div>

    }

     submitForm(e) {
        e.preventDefault()
        this.props.dispatch(User.register({
            email: this.refs.email.value,
            password: this.refs.password.value,
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            companyname: this.refs.companyname.value
        }))

    }

}