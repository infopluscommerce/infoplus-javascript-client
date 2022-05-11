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
    root.infoplus.QuickReceipt = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QuickReceipt model module.
   * @module model/QuickReceipt
   * @version v3.0
   */

  /**
   * Constructs a new <code>QuickReceipt</code>.
   * @alias module:model/QuickReceipt
   * @class
   * @param warehouseId {Number} 
   * @param lobId {Number} 
   * @param sku {String} 
   * @param locationId {Number} 
   * @param quantity {Number} 
   * @param weightPerWrap {Number} 
   */
  var exports = function(warehouseId, lobId, sku, locationId, quantity, weightPerWrap) {
    var _this = this;





    _this['warehouseId'] = warehouseId;
    _this['lobId'] = lobId;
    _this['sku'] = sku;
    _this['locationId'] = locationId;
    _this['quantity'] = quantity;





    _this['weightPerWrap'] = weightPerWrap;




















  };

  /**
   * Constructs a <code>QuickReceipt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuickReceipt} obj Optional instance to populate.
   * @return {module:model/QuickReceipt} The populated <code>QuickReceipt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('vendorId')) {
        obj['vendorId'] = ApiClient.convertToType(data['vendorId'], 'Number');
      }
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('unitCode')) {
        obj['unitCode'] = ApiClient.convertToType(data['unitCode'], 'String');
      }
      if (data.hasOwnProperty('wrapCode')) {
        obj['wrapCode'] = ApiClient.convertToType(data['wrapCode'], 'String');
      }
      if (data.hasOwnProperty('weightPerWrap')) {
        obj['weightPerWrap'] = ApiClient.convertToType(data['weightPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('unitsPerWrap')) {
        obj['unitsPerWrap'] = ApiClient.convertToType(data['unitsPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('quantityPerInnerPack')) {
        obj['quantityPerInnerPack'] = ApiClient.convertToType(data['quantityPerInnerPack'], 'Number');
      }
      if (data.hasOwnProperty('unitsPerCase')) {
        obj['unitsPerCase'] = ApiClient.convertToType(data['unitsPerCase'], 'Number');
      }
      if (data.hasOwnProperty('quantityPerPallet')) {
        obj['quantityPerPallet'] = ApiClient.convertToType(data['quantityPerPallet'], 'Number');
      }
      if (data.hasOwnProperty('caseWeight')) {
        obj['caseWeight'] = ApiClient.convertToType(data['caseWeight'], 'Number');
      }
      if (data.hasOwnProperty('productionLot')) {
        obj['productionLot'] = ApiClient.convertToType(data['productionLot'], 'String');
      }
      if (data.hasOwnProperty('revisionDate')) {
        obj['revisionDate'] = ApiClient.convertToType(data['revisionDate'], 'String');
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
      }
      if (data.hasOwnProperty('cartonLength')) {
        obj['cartonLength'] = ApiClient.convertToType(data['cartonLength'], 'Number');
      }
      if (data.hasOwnProperty('cartonWidth')) {
        obj['cartonWidth'] = ApiClient.convertToType(data['cartonWidth'], 'Number');
      }
      if (data.hasOwnProperty('cartonHeight')) {
        obj['cartonHeight'] = ApiClient.convertToType(data['cartonHeight'], 'Number');
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
      }
      if (data.hasOwnProperty('sellPrice')) {
        obj['sellPrice'] = ApiClient.convertToType(data['sellPrice'], 'Number');
      }
      if (data.hasOwnProperty('pricingPer')) {
        obj['pricingPer'] = ApiClient.convertToType(data['pricingPer'], 'String');
      }
      if (data.hasOwnProperty('generatedItemReceiptId')) {
        obj['generatedItemReceiptId'] = ApiClient.convertToType(data['generatedItemReceiptId'], 'Number');
      }
      if (data.hasOwnProperty('generatedASNId')) {
        obj['generatedASNId'] = ApiClient.convertToType(data['generatedASNId'], 'Number');
      }
      if (data.hasOwnProperty('dockDate')) {
        obj['dockDate'] = ApiClient.convertToType(data['dockDate'], 'Date');
      }
      if (data.hasOwnProperty('productIdTag')) {
        obj['productIdTag'] = ApiClient.convertToType(data['productIdTag'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
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
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * @member {Number} locationId
   */
  exports.prototype['locationId'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Number} vendorId
   */
  exports.prototype['vendorId'] = undefined;
  /**
   * @member {String} carrier
   */
  exports.prototype['carrier'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} unitCode
   */
  exports.prototype['unitCode'] = undefined;
  /**
   * @member {String} wrapCode
   */
  exports.prototype['wrapCode'] = undefined;
  /**
   * @member {Number} weightPerWrap
   */
  exports.prototype['weightPerWrap'] = undefined;
  /**
   * @member {Number} unitsPerWrap
   */
  exports.prototype['unitsPerWrap'] = undefined;
  /**
   * @member {Number} quantityPerInnerPack
   */
  exports.prototype['quantityPerInnerPack'] = undefined;
  /**
   * @member {Number} unitsPerCase
   */
  exports.prototype['unitsPerCase'] = undefined;
  /**
   * @member {Number} quantityPerPallet
   */
  exports.prototype['quantityPerPallet'] = undefined;
  /**
   * @member {Number} caseWeight
   */
  exports.prototype['caseWeight'] = undefined;
  /**
   * @member {String} productionLot
   */
  exports.prototype['productionLot'] = undefined;
  /**
   * @member {String} revisionDate
   */
  exports.prototype['revisionDate'] = undefined;
  /**
   * @member {String} origin
   */
  exports.prototype['origin'] = undefined;
  /**
   * @member {Number} cartonLength
   */
  exports.prototype['cartonLength'] = undefined;
  /**
   * @member {Number} cartonWidth
   */
  exports.prototype['cartonWidth'] = undefined;
  /**
   * @member {Number} cartonHeight
   */
  exports.prototype['cartonHeight'] = undefined;
  /**
   * @member {Number} cost
   */
  exports.prototype['cost'] = undefined;
  /**
   * @member {Number} sellPrice
   */
  exports.prototype['sellPrice'] = undefined;
  /**
   * @member {String} pricingPer
   */
  exports.prototype['pricingPer'] = undefined;
  /**
   * @member {Number} generatedItemReceiptId
   */
  exports.prototype['generatedItemReceiptId'] = undefined;
  /**
   * @member {Number} generatedASNId
   */
  exports.prototype['generatedASNId'] = undefined;
  /**
   * @member {Date} dockDate
   */
  exports.prototype['dockDate'] = undefined;
  /**
   * @member {String} productIdTag
   */
  exports.prototype['productIdTag'] = undefined;
  /**
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


