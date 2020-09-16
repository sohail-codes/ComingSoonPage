import React, { Component } from 'react';
import {withRouter} from 'react-router';
class appref extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        const utmsource = "shareapp";
        const utmmedium = "referral";
        const utmcontent = this.props.match.params.id;
        const prefix = "https://play.google.com/store/apps/details?id=com.shopsath.com&referrer=";
        const url  = prefix+"utm_source%3D"+utmsource+"%26utm_medium%3D"+utmmedium+"%26utm_content%3D"+utmcontent;
        return ( 
            <div>
                <p>utm_source = {utmsource}</p>
                <p>utm_medium = {utmmedium}</p>
                <p>utm_content = {utmcontent}</p>
                <p>playstorelink = {url}</p>
            </div>
        )
    }
}
export default withRouter(appref);