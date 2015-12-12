var ApiActions = require('../actions/api_actions.js');



ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      success: function(benches) {
        console.log("success");
        ApiActions.recieveAll(benches);
      }
      // create an action and sent to dispatcher
    });
  }
};



module.exports = ApiUtil;
