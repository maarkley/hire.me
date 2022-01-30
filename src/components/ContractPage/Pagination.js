import React from 'react'
import { Link } from 'react-router-dom'
import * as Contract from '../../actions/Contract'
import { connect } from 'react-redux'

@connect((store) => {
    return {
        pagination: store.contract.pagination,
        contractCount: store.contract.contractCount
    }
})
export default class Pagination extends React.Component {

    constructor() {
        super()
    }

    render() {
        console.log('pagination')
        return <div className="pagination">
                    {this.renderPages()}
               </div>

    }

    renderPages() {
        let rows = []
        for ( var i=0; i<this.props.contractCount / 4; i++ ) {
            let active = this.props.pagination.activePage == i ? 'active' : ''
            rows.push(<Link to={"/contracts/"} className={ "page " + active } onClick={this.changePage.bind(this)}>
                    {i + 1}
            </Link>)                

        }
        return rows

    }

    changePage(e) {
        e.preventDefault()
        console.log('changepage clicked')

    }



}