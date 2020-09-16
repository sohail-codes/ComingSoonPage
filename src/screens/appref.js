import React, { Component } from 'react';
import {withRouter} from 'react-router';
class appref extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        const referrer = "shareapp";
        const code = this.props.match.params.id;
        const prefix = "https://play.google.com/store/apps/details?id=com.shopsath.com&referrer=";
        const url  = prefix+referrer+"&code="+code;
        return (
            
            <div>
                <p>referrer = {referrer}</p>
                <p>code = {code}</p>
                <p>playstorelink = {url}</p>
            </div>
        )
    }
}
export default withRouter(appref);