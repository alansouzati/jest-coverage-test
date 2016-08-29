// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';

var hi = "hi";

export default class Index extends React.Component {

  _onClickTest () {
    console.log('hi');
  }

  render () {
    return <div onClick={this._onClickTest}>{this.props.children}</div>;
  }
}
