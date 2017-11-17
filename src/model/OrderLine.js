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
    root.infoplus.OrderLine = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderLine model module.
   * @module model/OrderLine
   * @version v2.0
   */

  /**
   * Constructs a new <code>OrderLine</code>.
   * @alias module:model/OrderLine
   * @class
   * @param orderNo
   * @param lobId
   * @param sku
   * @param itemAccountCodeId
   * @param itemLegacyLowStockContactId
   * @param itemMajorGroupId
   * @param itemSubGroupId
   * @param itemSummaryCodeId
   */
  var exports = function(orderNo, lobId, sku, itemAccountCodeId, itemLegacyLowStockContactId, itemMajorGroupId, itemSubGroupId, itemSummaryCodeId) {


    this['orderNo'] = orderNo;
    this['lobId'] = lobId;
    this['sku'] = sku;




















    this['itemAccountCodeId'] = itemAccountCodeId;
    this['itemLegacyLowStockContactId'] = itemLegacyLowStockContactId;
    this['itemMajorGroupId'] = itemMajorGroupId;
    this['itemSubGroupId'] = itemSubGroupId;

    this['itemSummaryCodeId'] = itemSummaryCodeId;

  };

  /**
   * Constructs a <code>OrderLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderLine} obj Optional instance to populate.
   * @return {module:model/OrderLine} The populated <code>OrderLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('poNoId')) {
        obj['poNoId'] = ApiClient.convertToType(data['poNoId'], 'Integer');
      }
      if (data.hasOwnProperty('orderedQty')) {
        obj['orderedQty'] = ApiClient.convertToType(data['orderedQty'], 'Integer');
      }
      if (data.hasOwnProperty('allowedQty')) {
        obj['allowedQty'] = ApiClient.convertToType(data['allowedQty'], 'Integer');
      }
      if (data.hasOwnProperty('shippedQty')) {
        obj['shippedQty'] = ApiClient.convertToType(data['shippedQty'], 'Integer');
      }
      if (data.hasOwnProperty('backorderQty')) {
        obj['backorderQty'] = ApiClient.convertToType(data['backorderQty'], 'Integer');
      }
      if (data.hasOwnProperty('revDate')) {
        obj['revDate'] = ApiClient.convertToType(data['revDate'], 'String');
      }
      if (data.hasOwnProperty('chargeCode')) {
        obj['chargeCode'] = ApiClient.convertToType(data['chargeCode'], 'String');
      }
      if (data.hasOwnProperty('distributionCode')) {
        obj['distributionCode'] = ApiClient.convertToType(data['distributionCode'], 'String');
      }
      if (data.hasOwnProperty('upc')) {
        obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
      }
      if (data.hasOwnProperty('vendorSKU')) {
        obj['vendorSKU'] = ApiClient.convertToType(data['vendorSKU'], 'String');
      }
      if (data.hasOwnProperty('orderSourceSKU')) {
        obj['orderSourceSKU'] = ApiClient.convertToType(data['orderSourceSKU'], 'String');
      }
      if (data.hasOwnProperty('unitCost')) {
        obj['unitCost'] = ApiClient.convertToType(data['unitCost'], 'Number');
      }
      if (data.hasOwnProperty('unitSell')) {
        obj['unitSell'] = ApiClient.convertToType(data['unitSell'], 'Number');
      }
      if (data.hasOwnProperty('extendedCost')) {
        obj['extendedCost'] = ApiClient.convertToType(data['extendedCost'], 'Number');
      }
      if (data.hasOwnProperty('extendedSell')) {
        obj['extendedSell'] = ApiClient.convertToType(data['extendedSell'], 'Number');
      }
      if (data.hasOwnProperty('ncExtendedSell')) {
        obj['ncExtendedSell'] = ApiClient.convertToType(data['ncExtendedSell'], 'Number');
      }
      if (data.hasOwnProperty('itemWeight')) {
        obj['itemWeight'] = ApiClient.convertToType(data['itemWeight'], 'Number');
      }
      if (data.hasOwnProperty('productionLot')) {
        obj['productionLot'] = ApiClient.convertToType(data['productionLot'], 'String');
      }
      if (data.hasOwnProperty('weightPerWrap')) {
        obj['weightPerWrap'] = ApiClient.convertToType(data['weightPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('sector')) {
        obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCodeId')) {
        obj['itemAccountCodeId'] = ApiClient.convertToType(data['itemAccountCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('itemLegacyLowStockContactId')) {
        obj['itemLegacyLowStockContactId'] = ApiClient.convertToType(data['itemLegacyLowStockContactId'], 'Integer');
      }
      if (data.hasOwnProperty('itemMajorGroupId')) {
        obj['itemMajorGroupId'] = ApiClient.convertToType(data['itemMajorGroupId'], 'Integer');
      }
      if (data.hasOwnProperty('itemSubGroupId')) {
        obj['itemSubGroupId'] = ApiClient.convertToType(data['itemSubGroupId'], 'Integer');
      }
      if (data.hasOwnProperty('itemProductCodeId')) {
        obj['itemProductCodeId'] = ApiClient.convertToType(data['itemProductCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('itemSummaryCodeId')) {
        obj['itemSummaryCodeId'] = ApiClient.convertToType(data['itemSummaryCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;

  /**
   * @member {Integer} poNoId
   */
  exports.prototype['poNoId'] = undefined;

  /**
   * @member {Integer} orderedQty
   */
  exports.prototype['orderedQty'] = undefined;

  /**
   * @member {Integer} allowedQty
   */
  exports.prototype['allowedQty'] = undefined;

  /**
   * @member {Integer} shippedQty
   */
  exports.prototype['shippedQty'] = undefined;

  /**
   * @member {Integer} backorderQty
   */
  exports.prototype['backorderQty'] = undefined;

  /**
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;

  /**
   * @member {String} chargeCode
   */
  exports.prototype['chargeCode'] = undefined;

  /**
   * @member {String} distributionCode
   */
  exports.prototype['distributionCode'] = undefined;

  /**
   * @member {String} upc
   */
  exports.prototype['upc'] = undefined;

  /**
   * @member {String} vendorSKU
   */
  exports.prototype['vendorSKU'] = undefined;

  /**
   * @member {String} orderSourceSKU
   */
  exports.prototype['orderSourceSKU'] = undefined;

  /**
   * @member {Number} unitCost
   */
  exports.prototype['unitCost'] = undefined;

  /**
   * @member {Number} unitSell
   */
  exports.prototype['unitSell'] = undefined;

  /**
   * @member {Number} extendedCost
   */
  exports.prototype['extendedCost'] = undefined;

  /**
   * @member {Number} extendedSell
   */
  exports.prototype['extendedSell'] = undefined;

  /**
   * @member {Number} ncExtendedSell
   */
  exports.prototype['ncExtendedSell'] = undefined;

  /**
   * @member {Number} itemWeight
   */
  exports.prototype['itemWeight'] = undefined;

  /**
   * @member {String} productionLot
   */
  exports.prototype['productionLot'] = undefined;

  /**
   * @member {Number} weightPerWrap
   */
  exports.prototype['weightPerWrap'] = undefined;

  /**
   * @member {String} sector
   */
  exports.prototype['sector'] = undefined;

  /**
   * @member {Integer} itemAccountCodeId
   */
  exports.prototype['itemAccountCodeId'] = undefined;

  /**
   * @member {Integer} itemLegacyLowStockContactId
   */
  exports.prototype['itemLegacyLowStockContactId'] = undefined;

  /**
   * @member {Integer} itemMajorGroupId
   */
  exports.prototype['itemMajorGroupId'] = undefined;

  /**
   * @member {Integer} itemSubGroupId
   */
  exports.prototype['itemSubGroupId'] = undefined;

  /**
   * @member {Integer} itemProductCodeId
   */
  exports.prototype['itemProductCodeId'] = undefined;

  /**
   * @member {Integer} itemSummaryCodeId
   */
  exports.prototype['itemSummaryCodeId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
