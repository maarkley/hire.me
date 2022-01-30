import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.scss'
import { connect } from 'react-redux'
import * as User from '../../actions/User.js'
import ReactSVG from 'react-svg'

export default class Sidebar extends React.Component {

    constructor() {
        super()
        

    }

    render() {
        return <div className = {styles.sidebar}>
                    <ul>
                        <li>
                            <ReactSVG path="/public/img/004-database.svg"
                                      className = {styles.sidebarIcon} />
                            <Link to="/random">Dashboard</Link>                    
                        </li>
                        <li>
                            <ReactSVG path="/public/img/002-handshake.svg"
                                      className = {styles.sidebarIcon} />
                            <Link to="/random">Sesje</Link>                    
                        </li>
                        <li>
                            <ReactSVG path="/public/img/001-man-user.svg"
                                      className = {styles.sidebarIcon} />
                            <Link to="/random">Profil</Link>                    
                        </li>
                        <li>
                            <ReactSVG path="/public/img/003-configuration-cogwheel-interface-symbol.svg"
                                      className = {styles.sidebarIcon} />
                            <Link to="/random">Ustawienia</Link>                    
                        </li>
                    </ul>
                    
                </div>

    }

}