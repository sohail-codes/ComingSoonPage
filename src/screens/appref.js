import { Component } from 'react';
import {withRouter} from 'react-router';
class appref extends Component {
   
    render() {
        const referrer = "shareapp";
        const code = this.props.match.params.id;
        const prefix = "https://play.google.com/store/apps/details?id=com.contexdo.shopsath&referrer=";
        const url  = prefix+referrer+"%26"+code;
        window.location.replace(url);
        return null;
    }
}
export default withRouter(appref);