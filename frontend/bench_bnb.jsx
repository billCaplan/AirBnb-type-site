var React = require('react');
var ReactDOM = require('react-dom');


var ApiUtil = require('./util/api_util');
var BenchStore = require('./stores/bench.js');
var AppDispatcher = require('./dispatcher/dispatcher');
var BenchConstants = require('./constants/bench_constants');
var ApiActions = require('./actions/api_actions');
var BenchesIndex = require('./components/index.jsx');
var Search = require('./components/search.jsx');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    document.getElementById('content')
  );
});
