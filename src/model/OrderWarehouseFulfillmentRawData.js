(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './OrderWarehouseFulfillmentRawSkuData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderWarehouseFulfillmentRawSkuData'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderWarehouseFulfillmentRawData = factory(root.infoplus.ApiClient, root.infoplus.OrderWarehouseFulfillmentRawSkuData);
  }
}(this, function(ApiClient, OrderWarehouseFulfillmentRawSkuData) {
  'use strict';

  /**
   * The OrderWarehouseFulfillmentRawData model module.
   * @module model/OrderWarehouseFulfillmentRawData
   * @version beta
   */

  /**
   * Constructs a new <code>OrderWarehouseFulfillmentRawData</code>.
   * @alias module:model/OrderWarehouseFulfillmentRawData
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>OrderWarehouseFulfillmentRawData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderWarehouseFulfillmentRawData} obj Optional instance to populate.
   * @return {module:model/OrderWarehouseFulfillmentRawData} The populated <code>OrderWarehouseFulfillmentRawData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('canFulfill')) {
        obj['canFulfill'] = ApiClient.convertToType(data['canFulfill'], 'Boolean');
      }
      if (data.hasOwnProperty('skuMap')) {
        obj['skuMap'] = ApiClient.convertToType(data['skuMap'], {'String': OrderWarehouseFulfillmentRawSkuData});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Boolean} canFulfill
   * @default false
   */
  exports.prototype['canFulfill'] = false;

  /**
   * @member {Object.<String, module:model/OrderWarehouseFulfillmentRawSkuData>} skuMap
   */
  exports.prototype['skuMap'] = undefined;




  return exports;
}));
