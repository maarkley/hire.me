import React from 'react'
import { Link } from 'react-router-dom'

export default class HomeBanner extends React.Component {


    render() {
        return <div className="home-banner">
                    <div className="container">
                        <div className="intro-text">
                            Finde passende Projekte von uber <strong>1743</strong> Auftragsgabern.
                        </div>
                    </div>
                    <Link to="/contracts" className="default-btn">Projekte suchen</Link>
                    <Link to="/contract/add" className="default-btn">Projekt ausgeben</Link>
                    
               </div>

    }

}