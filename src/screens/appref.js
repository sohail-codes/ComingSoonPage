import React, { Component } from 'react';
import {withRouter} from 'react-router';
class appref extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        const referrer = "shareapp";
        const code = this.props.match.params.id;
        const query = new URLSearchParams(this.props.location.search);
        const prefix = "https://play.google.com/store/apps/details?id=com.shopsath.com&referrer=";
        const url  = prefix+referrer+"&id="+id;
        return (
            
            <div>
                <p>referrer = {referrer}</p>
                <p>id = {id}</p>
                <p>playstorelink = {url}</p>
            </div>
        )
    }
}
export default withRouter(appref);