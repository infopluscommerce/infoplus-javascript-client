(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ReceivingWorksheetPutAwayPlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReceivingWorksheetPutAwayPlan'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReceivingWorksheetLineItem = factory(root.infoplus.ApiClient, root.infoplus.ReceivingWorksheetPutAwayPlan);
  }
}(this, function(ApiClient, ReceivingWorksheetPutAwayPlan) {
  'use strict';

  /**
   * The ReceivingWorksheetLineItem model module.
   * @module model/ReceivingWorksheetLineItem
   * @version beta
   */

  /**
   * Constructs a new <code>ReceivingWorksheetLineItem</code>.
   * @alias module:model/ReceivingWorksheetLineItem
   * @class
   * @param receivingQty
   * @param unitCode
   * @param wrapCode
   * @param weightPerWrap
   */
  var exports = function(receivingQty, unitCode, wrapCode, weightPerWrap) {







    this['receivingQty'] = receivingQty;
    this['unitCode'] = unitCode;
    this['wrapCode'] = wrapCode;



    this['weightPerWrap'] = weightPerWrap;











  };

  /**
   * Constructs a <code>ReceivingWorksheetLineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceivingWorksheetLineItem} obj Optional instance to populate.
   * @return {module:model/ReceivingWorksheetLineItem} The populated <code>ReceivingWorksheetLineItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('sku2')) {
        obj['sku2'] = ApiClient.convertToType(data['sku2'], 'String');
      }
      if (data.hasOwnProperty('fullDescription')) {
        obj['fullDescription'] = ApiClient.convertToType(data['fullDescription'], 'String');
      }
      if (data.hasOwnProperty('orderedQty')) {
        obj['orderedQty'] = ApiClient.convertToType(data['orderedQty'], 'Integer');
      }
      if (data.hasOwnProperty('prevReceivedQty')) {
        obj['prevReceivedQty'] = ApiClient.convertToType(data['prevReceivedQty'], 'Integer');
      }
      if (data.hasOwnProperty('unreceivedQty')) {
        obj['unreceivedQty'] = ApiClient.convertToType(data['unreceivedQty'], 'Integer');
      }
      if (data.hasOwnProperty('receivingQty')) {
        obj['receivingQty'] = ApiClient.convertToType(data['receivingQty'], 'Integer');
      }
      if (data.hasOwnProperty('unitCode')) {
        obj['unitCode'] = ApiClient.convertToType(data['unitCode'], 'String');
      }
      if (data.hasOwnProperty('wrapCode')) {
        obj['wrapCode'] = ApiClient.convertToType(data['wrapCode'], 'String');
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
      if (data.hasOwnProperty('weightPerWrap')) {
        obj['weightPerWrap'] = ApiClient.convertToType(data['weightPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('weightPerCase')) {
        obj['weightPerCase'] = ApiClient.convertToType(data['weightPerCase'], 'Number');
      }
      if (data.hasOwnProperty('productionLot')) {
        obj['productionLot'] = ApiClient.convertToType(data['productionLot'], 'String');
      }
      if (data.hasOwnProperty('productIdTag')) {
        obj['productIdTag'] = ApiClient.convertToType(data['productIdTag'], 'String');
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
      if (data.hasOwnProperty('putAwayPlans')) {
        obj['putAwayPlans'] = ApiClient.convertToType(data['putAwayPlans'], [ReceivingWorksheetPutAwayPlan]);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;

  /**
   * @member {String} sku2
   */
  exports.prototype['sku2'] = undefined;

  /**
   * @member {String} fullDescription
   */
  exports.prototype['fullDescription'] = undefined;

  /**
   * @member {Integer} orderedQty
   */
  exports.prototype['orderedQty'] = undefined;

  /**
   * @member {Integer} prevReceivedQty
   */
  exports.prototype['prevReceivedQty'] = undefined;

  /**
   * @member {Integer} unreceivedQty
   */
  exports.prototype['unreceivedQty'] = undefined;

  /**
   * @member {Integer} receivingQty
   */
  exports.prototype['receivingQty'] = undefined;

  /**
   * @member {String} unitCode
   */
  exports.prototype['unitCode'] = undefined;

  /**
   * @member {String} wrapCode
   */
  exports.prototype['wrapCode'] = undefined;

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
   * @member {Number} weightPerWrap
   */
  exports.prototype['weightPerWrap'] = undefined;

  /**
   * @member {Number} weightPerCase
   */
  exports.prototype['weightPerCase'] = undefined;

  /**
   * @member {String} productionLot
   */
  exports.prototype['productionLot'] = undefined;

  /**
   * @member {String} productIdTag
   */
  exports.prototype['productIdTag'] = undefined;

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
   * @member {Array.<module:model/ReceivingWorksheetPutAwayPlan>} putAwayPlans
   */
  exports.prototype['putAwayPlans'] = undefined;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
