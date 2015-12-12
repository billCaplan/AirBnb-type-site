var AppDispatcher = require('../dispatcher/dispatcher');
var BenchesConstants = require('../constants/bench_constants');


ApiActions = {
  recieveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchesConstants.BENCHES_RECEIVED,
      benches: benches
 });
  }

};

module.exports = ApiActions;
