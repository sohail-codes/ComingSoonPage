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
        const prefix = "https://play.google.com/store/apps/details?id=com.contexdo.shopsath&referrer=";
        const url  = prefix+referrer+"&sku="+sku+"&code="+code;
        window.location.replace(url);
        return null
    }
}
export default withRouter(product);