(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReceivingWorksheetPutAwayPlan = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReceivingWorksheetPutAwayPlan model module.
   * @module model/ReceivingWorksheetPutAwayPlan
   * @version beta
   */

  /**
   * Constructs a new <code>ReceivingWorksheetPutAwayPlan</code>.
   * @alias module:model/ReceivingWorksheetPutAwayPlan
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ReceivingWorksheetPutAwayPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceivingWorksheetPutAwayPlan} obj Optional instance to populate.
   * @return {module:model/ReceivingWorksheetPutAwayPlan} The populated <code>ReceivingWorksheetPutAwayPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
