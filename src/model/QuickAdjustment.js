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
    root.infoplus.QuickAdjustment = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The QuickAdjustment model module.
   * @module model/QuickAdjustment
   * @version 1.0
   */

  /**
   * Constructs a new <code>QuickAdjustment</code>.
   * @alias module:model/QuickAdjustment
   * @class
   * @param warehouseId
   * @param locationId
   * @param adjustmentCode
   * @param totalQuantity
   */
  var exports = function(warehouseId, locationId, adjustmentCode, totalQuantity) {




    this['warehouseId'] = warehouseId;
    this['locationId'] = locationId;
    this['adjustmentCode'] = adjustmentCode;
    this['totalQuantity'] = totalQuantity;



  };

  /**
   * Constructs a <code>QuickAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuickAdjustment} obj Optional instance to populate.
   * @return {module:model/QuickAdjustment} The populated <code>QuickAdjustment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'Integer');
      }
      if (data.hasOwnProperty('adjustmentCode')) {
        obj['adjustmentCode'] = ApiClient.convertToType(data['adjustmentCode'], 'String');
      }
      if (data.hasOwnProperty('totalQuantity')) {
        obj['totalQuantity'] = ApiClient.convertToType(data['totalQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} locationId
   */
  exports.prototype['locationId'] = undefined;

  /**
   * @member {String} adjustmentCode
   */
  exports.prototype['adjustmentCode'] = undefined;

  /**
   * @member {Integer} totalQuantity
   */
  exports.prototype['totalQuantity'] = undefined;

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;




  return exports;
}));
