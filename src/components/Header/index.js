import React from 'react'
import { Link } from 'react-router-dom'
// import styles from './style.scss'
import { connect } from 'react-redux'
import * as User from '../../actions/User.js'

@connect((state) => {
    return {
        user: state.user
    }
})
export default class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            showHeader: false
        }
    }

    componentWillMount() {

        this.checkOffset()
        window.onscroll = this.checkOffset.bind(this)

    }

    render() {
        console.log('rendered: ', this.props)

        let showHeaderClass = this.state.showHeader ? 'show' : ''

        return <div className={ "header " + showHeaderClass }>
                    <div className="logo">
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Suche..."/>
                        <label>search...</label>
                    </div>
                    {this.renderLoginLinks()}
                </div>

    }

    renderLoginLinks() {


        return <div className="links">
                        { this.props.user.authenticated ? 
                                                          <div>
                                                              <span className="item" onClick = {this.logout.bind(this)}>Logout</span>
                                                          </div> : 
                                                          <div>
                                                              <Link to='/login' className="item">Login</Link>
                                                              <Link to='/register' className="item">Register</Link>
                                                          </div> }
                    </div>
    }

    logout() {

        this.props.dispatch(User.logout())

    }

    checkOffset() {
        if ( window.pageYOffset > 40 && !this.state.showHeader ) {
            this.setState({
                showHeader: true
            })
        } else if ( window.pageYOffset < 40 && this.state.showHeader ) {
            this.setState({
                showHeader: false
            })
        }
    }

}