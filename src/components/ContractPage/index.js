import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Contract from '../../actions/Contract'
import ContractList from './ContractList'
import Pagination from './Pagination'
import ReactSVG from 'react-svg'


@connect((store) => {
    return {
        contractList: store.contract.contractList,
        categoryList: store.contract.categoryList,
        currentPage: store.contract.currentPage,
        pages: store.contract.pages
    }
})
export default class ContractPage extends React.Component {

    componentWillMount() {

        this.props.dispatch(Contract.getContracts())

    }

    componentWillUpdate(nextProps) {
        console.log('nextprops: ', nextProps)
    }

    render() {
        return <div className="contract-page page">
                    <div className="container wrapper">
                        <div className="category-list card">
                            <h4 className="card-title">Kategorien</h4>
                            <ul>
                                {this.props.categoryList.map((item, key) => <li>
                                                                                <Link to={"/contracts/" + item.slug + '/' + this.props.currentPage}>
                                                                                    <span className="icon icon-fill-gray">
                                                                                        <ReactSVG path={"/img/categories/"+item.icon+".svg"} />
                                                                                    </span>
                                                                                    <span className="name">{item.name}</span>
                                                                                    {item.contracts ? <span className="amount">{item.contracts}</span> : null}
                                                                                </Link>
                                                                            </li>)}
                            </ul>
                        </div>
                        <ContractList contractList = {this.props.contractList} />
                        <Pagination pages = {this.props.pages} currentPage = {this.props.currentPage} />
                    </div>
               </div>

    }



}