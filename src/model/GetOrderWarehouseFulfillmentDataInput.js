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
    root.infoplus.GetOrderWarehouseFulfillmentDataInput = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetOrderWarehouseFulfillmentDataInput model module.
   * @module model/GetOrderWarehouseFulfillmentDataInput
   * @version beta
   */

  /**
   * Constructs a new <code>GetOrderWarehouseFulfillmentDataInput</code>.
   * @alias module:model/GetOrderWarehouseFulfillmentDataInput
   * @class
   * @param orderNo
   */
  var exports = function(orderNo) {

    this['orderNo'] = orderNo;
  };

  /**
   * Constructs a <code>GetOrderWarehouseFulfillmentDataInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOrderWarehouseFulfillmentDataInput} obj Optional instance to populate.
   * @return {module:model/GetOrderWarehouseFulfillmentDataInput} The populated <code>GetOrderWarehouseFulfillmentDataInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} orderNo
   */
  exports.prototype['orderNo'] = undefined;




  return exports;
}));
