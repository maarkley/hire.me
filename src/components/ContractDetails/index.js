import React from 'react'
import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as Contract from '../../actions/Contract'

class ContractDetails extends React.Component {

    constructor() {
        super()

    }

    componentWillMount() {

        let { slug } = this.props.match.params.slug

        this.props.dispatch(Contract.getContractDetails(slug))

    }

    render() {
        console.log('rendering details')

        let { title, desc } = this.props.contractDetails

        return <section className="contract-details">
                    <div className="card main">
                        <h3 className="card-title">Informationen</h3>
                        <div className="upper">
                            <h2 className="contract-title">{title}</h2>
                            <div className="desc">
                                {desc}
                            </div>
                        </div>
                        <div className="lower">
                            <div className="icon icon-fill-gray icon-hover-fill-gray">
                                <ReactSVG path="/img/001-favorite-heart-button.svg"></ReactSVG>
                            </div>
                            <div className="icon icon-fill-gray icon-hover-fill-gray">
                                <ReactSVG path="/img/002-close-envelope.svg"></ReactSVG>
                            </div>
                            <div className="icon icon-fill-gray icon-hover-fill-gray">
                                <ReactSVG path="/img/003-more.svg"></ReactSVG>
                            </div>
                        </div>
                    </div>
                    <div className="card side-box">
                        <h3 className="card-title">Ahnliche Contracten</h3>
                    </div>
               </section>
    }

}

function mapStateToProps(state) {
    return {
        contractDetails: state.contract.contractDetails
    }
}

export default connect(mapStateToProps, null, null, {
    pure: false
})(ContractDetails)