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
    root.infoplus.QuickReceipt = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The QuickReceipt model module.
   * @module model/QuickReceipt
   * @version 1.0
   */

  /**
   * Constructs a new <code>QuickReceipt</code>.
   * @alias module:model/QuickReceipt
   * @class
   * @param warehouseId
   * @param lobId
   * @param locationId
   * @param quantity
   * @param unitCode
   * @param wrapCode
   * @param weightPerWrap
   * @param unitsPerWrap
   */
  var exports = function(warehouseId, lobId, locationId, quantity, unitCode, wrapCode, weightPerWrap, unitsPerWrap) {





    this['warehouseId'] = warehouseId;
    this['lobId'] = lobId;
    this['locationId'] = locationId;
    this['quantity'] = quantity;



    this['unitCode'] = unitCode;
    this['wrapCode'] = wrapCode;
    this['weightPerWrap'] = weightPerWrap;
    this['unitsPerWrap'] = unitsPerWrap;













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
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Integer');
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
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'Integer');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('vendorId')) {
        obj['vendorId'] = ApiClient.convertToType(data['vendorId'], 'Integer');
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
        obj['unitsPerWrap'] = ApiClient.convertToType(data['unitsPerWrap'], 'Integer');
      }
      if (data.hasOwnProperty('unitsPerCase')) {
        obj['unitsPerCase'] = ApiClient.convertToType(data['unitsPerCase'], 'Integer');
      }
      if (data.hasOwnProperty('casesPerPallet')) {
        obj['casesPerPallet'] = ApiClient.convertToType(data['casesPerPallet'], 'Integer');
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
      if (data.hasOwnProperty('sell')) {
        obj['sell'] = ApiClient.convertToType(data['sell'], 'Number');
      }
      if (data.hasOwnProperty('pricingPer')) {
        obj['pricingPer'] = ApiClient.convertToType(data['pricingPer'], 'String');
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
   * @member {Integer} createdBy
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
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} locationId
   */
  exports.prototype['locationId'] = undefined;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Integer} vendorId
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
   * @member {Integer} unitsPerWrap
   */
  exports.prototype['unitsPerWrap'] = undefined;

  /**
   * @member {Integer} unitsPerCase
   */
  exports.prototype['unitsPerCase'] = undefined;

  /**
   * @member {Integer} casesPerPallet
   */
  exports.prototype['casesPerPallet'] = undefined;

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
   * @member {Number} sell
   */
  exports.prototype['sell'] = undefined;

  /**
   * @member {String} pricingPer
   */
  exports.prototype['pricingPer'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;




  return exports;
}));
