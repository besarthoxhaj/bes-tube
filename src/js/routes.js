"use strict";

var React = require('react');
var routerModule = require('react-router')
var Router = routerModule.Router
var Route = routerModule.Route
var Redirect = routerModule.Redirect
var history = require('react-router/lib/HashHistory').history

var App = require('./app.js')
var Hello = require('./hello.js')

module.exports = function (injectHistoryArg, injectOnUpdateFun) {

  var historyArg = injectHistoryArg || history
  var onUpdateFun = injectOnUpdateFun || function () {}

  return (
    <Router history={historyArg} onUpdate={onUpdateFun}>
      <Route component={App}>
        <Route path='/' component={Hello}></Route>
      </Route>
    </Router>
  )
}

