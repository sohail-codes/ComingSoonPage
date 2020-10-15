import React, { Component } from 'react'
import logo from '../assets/loaderanimation1.png';
// import google from '../google-play-badge.png';
import '../App.css';
export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            current : 0,
            images : [
                "welcomeen",
                "categoryen",
                "dealsen",
                "feeden",
                "language",
                "producten",
                "walleten",
                "welcomeen"
            ]
        }
    }
    componentDidMount()
    {
        this.interval = setInterval(() => this.handlenext(), 1500);
    }
    componentWillUnmount()
    {
        clearInterval(this.interval);
    }
    handlenext()
    {
        var length =  this.state.images.length;
        if(this.state.current < length-1)
        {
            this.setState({
                current : this.state.current+1
            })
        }else{
            this.setState({
                current: 0
            });
        }
    }
    render() {
        return (
            <div className="app">
            <div className="content">
            <div className="header">
                <img src={logo} height={'80%'} className="logo" alt="https://play.google.com/store/apps/details?id=com.contexdo.shopsath"/>
            </div>
            <div className="mainArea">
                <div className="phoneArea">
                    <div className="phone" style={{backgroundImage : `url(${require("../assets/screens/"+this.state.images[this.state.current]+".jpg")})`}}>
                    </div>
                </div>
                <div className="textArea">
                    <div className="headrow">
                        <h1 className="headtext">
                            Download Now And Get ₹50
                        </h1>
                        <a href="https://play.google.com/store/apps/details?id=com.contexdo.shopsath" style={{width : '40%'}}>
                        <img src={require('../assets/google-play-badge.png')} width="100%" alt="https://play.google.com/store/apps/details?id=com.contexdo.shopsath"/>
                        </a>
                    </div>
                    <div className="feature">
                        Bharat Ki Apni Dukaan
                    </div>
                    <div className="feature">
                    Share products with friends and earn money
                    </div>
                    <div className="feature">
                    Quality products at wholesale prices
                    </div>
                </div>
            </div>
            </div>
            <div className="footer">
                <div className="footercolumn">
                    <div className="footerentry">
                       Contact us at <a href="mailto:contact@shopsath.com" className="footeranchor">contact@shopsath.com</a>
                    </div>
                    <div className="footerentry">
                       <a href="https://magento.shopsath.com/media/terms.html" className="footeranchor"> Terms & Conditions </a> 
                    </div>
                    <div className="footerentry">
                       <a href="https://magento.shopsath.com/media/privacy-policy.html" className="footeranchor"> Privacy Policy </a> 
                    </div>
                </div>
                <div className="footercolumn2">
                    <a href="https://www.shopsath.com"  className="clickable">
                        <img src={require('../assets/sharechat.png')} alt="sharechat" height="40px" className="sharechat"/>
                    </a>
                    <a href="https://www.instagram.com/shopsath/" className="clickable">
                        <img src={require('../assets/insta.png')} alt="sharechat" height="45px" className="insta"/>
                    </a>
                    <a href="https://www.facebook.com/shopsath" className="clickable">
                        <img src={require('../assets/facebook.png')} alt="sharechat" height="55px" className="facebook"/>
                    </a>
                </div>
            </div>
            </div>
        )
    }
}
