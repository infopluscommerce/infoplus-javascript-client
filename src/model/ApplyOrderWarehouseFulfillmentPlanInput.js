(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './OrderWarehouseFulfillmentPlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderWarehouseFulfillmentPlan'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ApplyOrderWarehouseFulfillmentPlanInput = factory(root.infoplus.ApiClient, root.infoplus.OrderWarehouseFulfillmentPlan);
  }
}(this, function(ApiClient, OrderWarehouseFulfillmentPlan) {
  'use strict';

  /**
   * The ApplyOrderWarehouseFulfillmentPlanInput model module.
   * @module model/ApplyOrderWarehouseFulfillmentPlanInput
   * @version beta
   */

  /**
   * Constructs a new <code>ApplyOrderWarehouseFulfillmentPlanInput</code>.
   * @alias module:model/ApplyOrderWarehouseFulfillmentPlanInput
   * @class
   * @param orderNo
   * @param plan
   */
  var exports = function(orderNo, plan) {

    this['orderNo'] = orderNo;
    this['plan'] = plan;
  };

  /**
   * Constructs a <code>ApplyOrderWarehouseFulfillmentPlanInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplyOrderWarehouseFulfillmentPlanInput} obj Optional instance to populate.
   * @return {module:model/ApplyOrderWarehouseFulfillmentPlanInput} The populated <code>ApplyOrderWarehouseFulfillmentPlanInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'String');
      }
      if (data.hasOwnProperty('plan')) {
        obj['plan'] = OrderWarehouseFulfillmentPlan.constructFromObject(data['plan']);
      }
    }
    return obj;
  }


  /**
   * @member {String} orderNo
   */
  exports.prototype['orderNo'] = undefined;

  /**
   * @member {module:model/OrderWarehouseFulfillmentPlan} plan
   */
  exports.prototype['plan'] = undefined;




  return exports;
}));
