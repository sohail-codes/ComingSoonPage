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
        const code = query.get('refer');
        const prefix = "https://play.google.com/store/apps/details?id=com.contexdo.shopsath&referrer=";
        const url  = prefix+referrer+"%26"+sku+"%26"+code;
        window.location.replace(url);
        return null
    }
}
export default withRouter(product);