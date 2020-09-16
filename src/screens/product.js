import React, { Component } from 'react';
import {withRouter} from 'react-router';
class product extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        const referrer = "shareproduct";
        const sku = this.props.match.params.id;
        const query = new URLSearchParams(this.props.location.search);
        const code = query.get('ref');
        const prefix = "https://play.google.com/store/apps/details?id=com.shopsath.com&referrer=";
        const url  = prefix+referrer+"&sku="+sku+"&code="+code;
        return (
            
            <div>
                <p>referrer = {referrer}</p>
                <p>sku = {sku}</p>
                <p>code = {code}</p>
                <p>playstorelink = {url}</p>
            </div>
        )
    }
}
export default withRouter(product);