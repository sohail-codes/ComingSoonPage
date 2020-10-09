import React, { Component } from 'react';
import {withRouter} from 'react-router';
class product extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        const referrer = "sahreproduct";
        const sku = this.props.match.params.id;
        const query = new URLSearchParams(this.props.location.search);
        const code = query.get('refer');
        const prefix = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.contexdo.shopsath&referrer=";
        const url  = prefix+referrer+"&sku="+sku+"&code="+code;
        window.location.replace(url);
        return null
    }
}
export default withRouter(product);