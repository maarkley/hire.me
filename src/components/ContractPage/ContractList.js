import React from 'react'
import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

export default class ContractPage extends React.Component {

    constructor() {
        super()

    }

    componentWillMount() {
    }

    render() {
        return <div className="contract-list card">
                    {this.props.contractList.map((item, key) => <Link to={'/contract/' + item.slug} className="item">
                                                                    <div className="content">
                                                                        <div className="upper">
                                                                            <h3 className="title">
                                                                                {item.title}
                                                                            </h3>
                                                                        </div>
                                                                        <div className="desc">
                                                                            {item.desc}
                                                                        </div>
                                                                    </div>
                                                                    <div className="options">
                                                                        <div className="left">
                                                                            <div className="icon icon-fill-gray">
                                                                                <ReactSVG path="/img/001-favorite-heart-button.svg"></ReactSVG>
                                                                            </div>
                                                                            <div className="icon icon-fill-gray">
                                                                                <ReactSVG path="/img/002-close-envelope.svg"></ReactSVG>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right">
                                                                            <div className="icon icon-fill-gray">
                                                                                <ReactSVG path="/img/003-more.svg"></ReactSVG>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                               </Link>)}
                </div>

    }

}