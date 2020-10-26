import  { Component } from 'react';
import {withRouter} from 'react-router';
import ReactPixel from 'react-facebook-pixel';
const advancedMatching = { }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
class product extends Component {

    render() {
        const referrer = "shareproduct";
        const sku = this.props.match.params.id;
        const query = new URLSearchParams(this.props.location.search);
        const code = query.get('refer');
        const prefix = "https://play.google.com/store/apps/details?id=com.contexdo.shopsath&referrer=";
        const url  = prefix+referrer+"%26"+sku+"%26"+code;
        ReactPixel.init('361469531723659', advancedMatching, options);
        ReactPixel.trackCustom('productrefer', {
            sku , code
        });
        window.location.replace(url);
        return null
    }
}
export default withRouter(product);