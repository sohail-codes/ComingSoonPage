import React, { Component } from 'react'
import logo from '../logo.png';
import google from '../google-play-badge.png';
import '../App.css';
export default class home extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className={"logoholder"}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className={"headnameholder"}>
                    <div></div>
                    <h2 className={'headname'}>
                        SHOPSATH
                    </h2>
                    </div>
                    </div>
                </div>
                <div className={"contentArea"}>
                    <div className={"content"}>
                        <p className={"welcome"}>
                            Welcome To ShopSath!
                        </p>
                        <a className={"badgeholder"} href="https://play.google.com/store/apps/details?id=com.contexdo.shopsath">
                            <img  src={google} className={'playbadge'} alt="playstore"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
