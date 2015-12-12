var React = require('react'),
    ApiActions = require('../actions/api_actions'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

  var Map = React.createClass({
    componentDidMount: function(){
      this.token = BenchStore.addListener(this._onChange);
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat:37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.map.addListener("idle", function(){
        ApiUtil.fetchBenches();
      });
    },

    _onChange: function(){
      var theMap = this.map;
      BenchStore.all().forEach(function(bench){

        var pos = {lat: bench.lat, lng: bench.lng};
        var marker = new google.maps.Marker({
        position: pos,
        map: theMap,
        title: bench.description
        });

    });



    },

    render: function(){
      return(
            <div className="map" ref='map'/>
      );
    }
  });

  module.exports = Map;
