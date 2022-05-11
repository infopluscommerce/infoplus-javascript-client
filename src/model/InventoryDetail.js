/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: v3.0
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
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
   * @version v3.0
   */

  /**
   * Constructs a new <code>InventoryDetail</code>.
   * @alias module:model/InventoryDetail
   * @class
   * @param warehouseLocationId {Number} 
   */
  var exports = function(warehouseLocationId) {
    var _this = this;


    _this['warehouseLocationId'] = warehouseLocationId;




















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
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('warehouseLocationId')) {
        obj['warehouseLocationId'] = ApiClient.convertToType(data['warehouseLocationId'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('outstandingPickQuantity')) {
        obj['outstandingPickQuantity'] = ApiClient.convertToType(data['outstandingPickQuantity'], 'Number');
      }
      if (data.hasOwnProperty('distributionDate')) {
        obj['distributionDate'] = ApiClient.convertToType(data['distributionDate'], 'Date');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
      if (data.hasOwnProperty('quantityPerInnerPack')) {
        obj['quantityPerInnerPack'] = ApiClient.convertToType(data['quantityPerInnerPack'], 'Number');
      }
      if (data.hasOwnProperty('quantityPerCase')) {
        obj['quantityPerCase'] = ApiClient.convertToType(data['quantityPerCase'], 'Number');
      }
      if (data.hasOwnProperty('quantityPerPallet')) {
        obj['quantityPerPallet'] = ApiClient.convertToType(data['quantityPerPallet'], 'Number');
      }
      if (data.hasOwnProperty('estimatedInnerPacks')) {
        obj['estimatedInnerPacks'] = ApiClient.convertToType(data['estimatedInnerPacks'], 'Number');
      }
      if (data.hasOwnProperty('estimatedCases')) {
        obj['estimatedCases'] = ApiClient.convertToType(data['estimatedCases'], 'Number');
      }
      if (data.hasOwnProperty('estimatedPallets')) {
        obj['estimatedPallets'] = ApiClient.convertToType(data['estimatedPallets'], 'Number');
      }
      if (data.hasOwnProperty('unitsPerWrap')) {
        obj['unitsPerWrap'] = ApiClient.convertToType(data['unitsPerWrap'], 'Number');
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
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('poNo')) {
        obj['poNo'] = ApiClient.convertToType(data['poNo'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} warehouseLocationId
   */
  exports.prototype['warehouseLocationId'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Number} outstandingPickQuantity
   */
  exports.prototype['outstandingPickQuantity'] = undefined;
  /**
   * @member {Date} distributionDate
   */
  exports.prototype['distributionDate'] = undefined;
  /**
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * @member {Number} quantityPerInnerPack
   */
  exports.prototype['quantityPerInnerPack'] = undefined;
  /**
   * @member {Number} quantityPerCase
   */
  exports.prototype['quantityPerCase'] = undefined;
  /**
   * @member {Number} quantityPerPallet
   */
  exports.prototype['quantityPerPallet'] = undefined;
  /**
   * @member {Number} estimatedInnerPacks
   */
  exports.prototype['estimatedInnerPacks'] = undefined;
  /**
   * @member {Number} estimatedCases
   */
  exports.prototype['estimatedCases'] = undefined;
  /**
   * @member {Number} estimatedPallets
   */
  exports.prototype['estimatedPallets'] = undefined;
  /**
   * @member {Number} unitsPerWrap
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
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {String} poNo
   */
  exports.prototype['poNo'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


