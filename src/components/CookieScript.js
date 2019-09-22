import React, { Component } from "react";
import Script from "react-load-script";

class CookieScript extends Component {
  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }
  render() {
    return (
      <div>
        <Script
          url="https://consent.cookiebot.com/uc.js?cbid=decdaada-09a0-457a-aaf7-fdfc0ffd1405"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </div>
    );
  }
}
export default CookieScript;
