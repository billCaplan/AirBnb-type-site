var React = require('react'),
    ApiActions = require('../actions/api_actions'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util'),
    Map = require('./map'),
    BenchesIndex = require('./index');



var Search = React.createClass({
  render: function(){
    var mapDiv = <div> <Map /> </div>;
    var idxDiv = <div><BenchesIndex /></div>;
    return(
      <div>
        {mapDiv}
        {idxDiv}
      </div>
    )
  }
});


module.exports = Search;
