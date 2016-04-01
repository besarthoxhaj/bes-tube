'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import Sidebar from '../components/sidebar.js'
import * as NavigationActions from '../actions/router.js';
import _routes from '../routing/routes.js';

const actionCreators = {
  ...NavigationActions,
};

class SidebarContainer extends Component {
  render(){
    return (<Sidebar {...this.props}/>);
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps,actionCreators)(SidebarContainer);