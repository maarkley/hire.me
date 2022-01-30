import React from 'react'
import { connect } from 'react-redux'


class ContractAdd extends React.Component {

    constructor() {
        super()
    }

    render() {

        return <div className="form-wrapper">
                    <form>
                        <h3 className="form-title">Schreibe dein Projekt aus.</h3>
                        <div className="form-group">
                            <label>Titel:</label>
                            <input type="text" placeholder="" ref="title" onChange={this.onInputChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label>Kategorie:</label>
                            <select ref="categorie" onChange={this.onInputChange.bind(this)}>
                                <option selected value="">Wahle eine Kategorie...</option>
                                <option value="webseiten">Webseiten</option>
                                <option value="social-media">Social Media</option>
                                <option value="marketing">Marketing</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="programming-help">Programmierungs schnapchen</option>                                
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Beschreibung:</label>
                            <textarea placeholder="">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <label>Budget (EUR):</label>
                            <input type="number" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="primary-btn">
                                Ausschreiben
                            </button>
                        </div>
                    </form>
               </div>
    }
    onInputChange() {

        console.log('input changed: ', this.refs)

    }

}



function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null, null, {
    pure: false
})(ContractAdd)