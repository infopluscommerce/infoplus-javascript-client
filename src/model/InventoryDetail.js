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
    root.infoplus.InventoryDetail = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InventoryDetail model module.
   * @module model/InventoryDetail
   * @version v2.0
   */

  /**
   * Constructs a new <code>InventoryDetail</code>.
   * @alias module:model/InventoryDetail
   * @class
   * @param warehouseLocationId
   */
  var exports = function(warehouseLocationId) {


    this['warehouseLocationId'] = warehouseLocationId;











  };

  /**
   * Constructs a <code>InventoryDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InventoryDetail} obj Optional instance to populate.
   * @return {module:model/InventoryDetail} The populated <code>InventoryDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationId')) {
        obj['warehouseLocationId'] = ApiClient.convertToType(data['warehouseLocationId'], 'Integer');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('distributionDate')) {
        obj['distributionDate'] = ApiClient.convertToType(data['distributionDate'], 'Date');
      }
      if (data.hasOwnProperty('unitsPerCase')) {
        obj['unitsPerCase'] = ApiClient.convertToType(data['unitsPerCase'], 'Integer');
      }
      if (data.hasOwnProperty('unitsPerWrap')) {
        obj['unitsPerWrap'] = ApiClient.convertToType(data['unitsPerWrap'], 'Integer');
      }
      if (data.hasOwnProperty('revisionDate')) {
        obj['revisionDate'] = ApiClient.convertToType(data['revisionDate'], 'String');
      }
      if (data.hasOwnProperty('productionLot')) {
        obj['productionLot'] = ApiClient.convertToType(data['productionLot'], 'String');
      }
      if (data.hasOwnProperty('oldestReceiptDate')) {
        obj['oldestReceiptDate'] = ApiClient.convertToType(data['oldestReceiptDate'], 'Date');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('poNo')) {
        obj['poNo'] = ApiClient.convertToType(data['poNo'], 'String');
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
   * @member {Integer} warehouseLocationId
   */
  exports.prototype['warehouseLocationId'] = undefined;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Date} distributionDate
   */
  exports.prototype['distributionDate'] = undefined;

  /**
   * @member {Integer} unitsPerCase
   */
  exports.prototype['unitsPerCase'] = undefined;

  /**
   * @member {Integer} unitsPerWrap
   */
  exports.prototype['unitsPerWrap'] = undefined;

  /**
   * @member {String} revisionDate
   */
  exports.prototype['revisionDate'] = undefined;

  /**
   * @member {String} productionLot
   */
  exports.prototype['productionLot'] = undefined;

  /**
   * @member {Date} oldestReceiptDate
   */
  exports.prototype['oldestReceiptDate'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} poNo
   */
  exports.prototype['poNo'] = undefined;

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
