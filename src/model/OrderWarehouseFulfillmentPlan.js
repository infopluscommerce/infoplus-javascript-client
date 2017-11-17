(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './OrderWarehouseFulfillmentPlanDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderWarehouseFulfillmentPlanDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderWarehouseFulfillmentPlan = factory(root.infoplus.ApiClient, root.infoplus.OrderWarehouseFulfillmentPlanDetail);
  }
}(this, function(ApiClient, OrderWarehouseFulfillmentPlanDetail) {
  'use strict';

  /**
   * The OrderWarehouseFulfillmentPlan model module.
   * @module model/OrderWarehouseFulfillmentPlan
   * @version beta
   */

  /**
   * Constructs a new <code>OrderWarehouseFulfillmentPlan</code>.
   * @alias module:model/OrderWarehouseFulfillmentPlan
   * @class
   * @param planDetailList
   */
  var exports = function(planDetailList) {


    this['planDetailList'] = planDetailList;
  };

  /**
   * Constructs a <code>OrderWarehouseFulfillmentPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderWarehouseFulfillmentPlan} obj Optional instance to populate.
   * @return {module:model/OrderWarehouseFulfillmentPlan} The populated <code>OrderWarehouseFulfillmentPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Integer');
      }
      if (data.hasOwnProperty('planDetailList')) {
        obj['planDetailList'] = ApiClient.convertToType(data['planDetailList'], [OrderWarehouseFulfillmentPlanDetail]);
      }
    }
    return obj;
  }


  /**
   * @member {Integer} score
   */
  exports.prototype['score'] = undefined;

  /**
   * @member {Array.<module:model/OrderWarehouseFulfillmentPlanDetail>} planDetailList
   */
  exports.prototype['planDetailList'] = undefined;




  return exports;
}));
