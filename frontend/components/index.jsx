var React = require('react'),
    ApiActions = require('../actions/api_actions'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

var BenchesIndex = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    this.token = BenchStore.addListener(this._onChange);
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all()});
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  render: function(){
    var that = this;
    var List = this.state.benches.map(function(bench, idx) {
      return <li key={bench.description}>{bench.description}</li>
    });

    return(
          <ul>
            {List}
          </ul>
        );
  }

});

module.exports = BenchesIndex;
