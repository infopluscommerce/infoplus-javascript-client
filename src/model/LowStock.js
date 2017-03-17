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
    root.infoplus.LowStock = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LowStock model module.
   * @module model/LowStock
   * @version beta
   */

  /**
   * Constructs a new <code>LowStock</code>.
   * @alias module:model/LowStock
   * @class
   * @param warehouseId
   */
  var exports = function(warehouseId) {


    this['warehouseId'] = warehouseId;








  };

  /**
   * Constructs a <code>LowStock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LowStock} obj Optional instance to populate.
   * @return {module:model/LowStock} The populated <code>LowStock</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('lowLevelDate')) {
        obj['lowLevelDate'] = ApiClient.convertToType(data['lowLevelDate'], 'Date');
      }
      if (data.hasOwnProperty('lowStockMessage')) {
        obj['lowStockMessage'] = ApiClient.convertToType(data['lowStockMessage'], 'String');
      }
      if (data.hasOwnProperty('printFlag')) {
        obj['printFlag'] = ApiClient.convertToType(data['printFlag'], 'String');
      }
      if (data.hasOwnProperty('isDelayed')) {
        obj['isDelayed'] = ApiClient.convertToType(data['isDelayed'], 'Boolean');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
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
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Date} lowLevelDate
   */
  exports.prototype['lowLevelDate'] = undefined;

  /**
   * @member {String} lowStockMessage
   */
  exports.prototype['lowStockMessage'] = undefined;

  /**
   * @member {String} printFlag
   */
  exports.prototype['printFlag'] = undefined;

  /**
   * @member {Boolean} isDelayed
   * @default false
   */
  exports.prototype['isDelayed'] = false;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;




  return exports;
}));
