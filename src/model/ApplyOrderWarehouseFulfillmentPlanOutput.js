(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ApplyOrderWarehouseFulfillmentPlanOutput = factory(root.infoplus.ApiClient, root.infoplus.Order);
  }
}(this, function(ApiClient, Order) {
  'use strict';

  /**
   * The ApplyOrderWarehouseFulfillmentPlanOutput model module.
   * @module model/ApplyOrderWarehouseFulfillmentPlanOutput
   * @version beta
   */

  /**
   * Constructs a new <code>ApplyOrderWarehouseFulfillmentPlanOutput</code>.
   * @alias module:model/ApplyOrderWarehouseFulfillmentPlanOutput
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ApplyOrderWarehouseFulfillmentPlanOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplyOrderWarehouseFulfillmentPlanOutput} obj Optional instance to populate.
   * @return {module:model/ApplyOrderWarehouseFulfillmentPlanOutput} The populated <code>ApplyOrderWarehouseFulfillmentPlanOutput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('orderList')) {
        obj['orderList'] = ApiClient.convertToType(data['orderList'], [Order]);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/Order>} orderList
   */
  exports.prototype['orderList'] = undefined;




  return exports;
}));
