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
    root.infoplus.OrderWarehouseFulfillmentRawSkuData = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderWarehouseFulfillmentRawSkuData model module.
   * @module model/OrderWarehouseFulfillmentRawSkuData
   * @version beta
   */

  /**
   * Constructs a new <code>OrderWarehouseFulfillmentRawSkuData</code>.
   * @alias module:model/OrderWarehouseFulfillmentRawSkuData
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>OrderWarehouseFulfillmentRawSkuData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderWarehouseFulfillmentRawSkuData} obj Optional instance to populate.
   * @return {module:model/OrderWarehouseFulfillmentRawSkuData} The populated <code>OrderWarehouseFulfillmentRawSkuData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('canFulfill')) {
        obj['canFulfill'] = ApiClient.convertToType(data['canFulfill'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Boolean} canFulfill
   * @default false
   */
  exports.prototype['canFulfill'] = false;




  return exports;
}));
