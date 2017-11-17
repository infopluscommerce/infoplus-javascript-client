(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './OrderWarehouseFulfillmentPlan', './OrderWarehouseFulfillmentRawData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderWarehouseFulfillmentPlan'), require('./OrderWarehouseFulfillmentRawData'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.GetOrderWarehouseFulfillmentDataOutput = factory(root.infoplus.ApiClient, root.infoplus.OrderWarehouseFulfillmentPlan, root.infoplus.OrderWarehouseFulfillmentRawData);
  }
}(this, function(ApiClient, OrderWarehouseFulfillmentPlan, OrderWarehouseFulfillmentRawData) {
  'use strict';

  /**
   * The GetOrderWarehouseFulfillmentDataOutput model module.
   * @module model/GetOrderWarehouseFulfillmentDataOutput
   * @version beta
   */

  /**
   * Constructs a new <code>GetOrderWarehouseFulfillmentDataOutput</code>.
   * @alias module:model/GetOrderWarehouseFulfillmentDataOutput
   * @class
   * @param rawData
   * @param planList
   */
  var exports = function(rawData, planList) {

    this['rawData'] = rawData;
    this['planList'] = planList;
  };

  /**
   * Constructs a <code>GetOrderWarehouseFulfillmentDataOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOrderWarehouseFulfillmentDataOutput} obj Optional instance to populate.
   * @return {module:model/GetOrderWarehouseFulfillmentDataOutput} The populated <code>GetOrderWarehouseFulfillmentDataOutput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('rawData')) {
        obj['rawData'] = ApiClient.convertToType(data['rawData'], {'String': OrderWarehouseFulfillmentRawData});
      }
      if (data.hasOwnProperty('planList')) {
        obj['planList'] = ApiClient.convertToType(data['planList'], [OrderWarehouseFulfillmentPlan]);
      }
    }
    return obj;
  }


  /**
   * @member {Object.<String, module:model/OrderWarehouseFulfillmentRawData>} rawData
   */
  exports.prototype['rawData'] = undefined;

  /**
   * @member {Array.<module:model/OrderWarehouseFulfillmentPlan>} planList
   */
  exports.prototype['planList'] = undefined;




  return exports;
}));
