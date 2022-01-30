import React from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'
import Register from './components/Register'
import Sidebar from './components/Sidebar'
import ContractPage from './components/ContractPage'
import HomeBanner from './components/HomeBanner'
import ContractAdd from './components/ContractAdd'
import ContractDetails from './components/ContractDetails'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as User from './actions/User.js'

class App extends React.Component {

    componentDidMount() {
    
        if ( localStorage.getItem('userToken') ) {
            console.log(localStorage)
            this.props.dispatch(User.authenticate())
        }

    }

    render() {
        return <div >
                        <Header />
                        <HomeBanner />
                        <Switch>
                            <Route path="/login" component = {Login} />
                            <Route path="/contract/add" component = {ContractAdd} />                            
                            <Route path="/register" component = {Register} />
                            <Route path="/contracts" component = {ContractPage} /> 
                            <Route path="/contract/:slug?" component = {ContractDetails} />                                                                                   
                        </Switch>
               </div>

    }

}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, null, null, {
    pure: false
})(App)