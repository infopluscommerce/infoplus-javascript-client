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
    root.infoplus.ItemReceipt = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemReceipt model module.
   * @module model/ItemReceipt
   * @version beta
   */

  /**
   * Constructs a new <code>ItemReceipt</code>.
   * @alias module:model/ItemReceipt
   * @class
   * @param lobId
   * @param warehouseId
   * @param sku
   * @param orderQuantity
   * @param requestedDeliveryDate
   * @param unitCode
   * @param wrapCode
   * @param unitsPerWrap
   * @param chargeFreight
   * @param distDate
   * @param maxOvers
   * @param maxUnders
   * @param vendorId
   */
  var exports = function(lobId, warehouseId, sku, orderQuantity, requestedDeliveryDate, unitCode, wrapCode, unitsPerWrap, chargeFreight, distDate, maxOvers, maxUnders, vendorId) {



    this['lobId'] = lobId;

    this['warehouseId'] = warehouseId;




    this['sku'] = sku;
    this['orderQuantity'] = orderQuantity;
    this['requestedDeliveryDate'] = requestedDeliveryDate;
    this['unitCode'] = unitCode;
    this['wrapCode'] = wrapCode;
    this['unitsPerWrap'] = unitsPerWrap;




    this['chargeFreight'] = chargeFreight;

    this['distDate'] = distDate;







    this['maxOvers'] = maxOvers;
    this['maxUnders'] = maxUnders;





















    this['vendorId'] = vendorId;





















  };

  /**
   * Constructs a <code>ItemReceipt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemReceipt} obj Optional instance to populate.
   * @return {module:model/ItemReceipt} The populated <code>ItemReceipt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('poNoId')) {
        obj['poNoId'] = ApiClient.convertToType(data['poNoId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('legacyPoNo')) {
        obj['legacyPoNo'] = ApiClient.convertToType(data['legacyPoNo'], 'String');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('orderDate')) {
        obj['orderDate'] = ApiClient.convertToType(data['orderDate'], 'Date');
      }
      if (data.hasOwnProperty('fullDescription')) {
        obj['fullDescription'] = ApiClient.convertToType(data['fullDescription'], 'String');
      }
      if (data.hasOwnProperty('factCost')) {
        obj['factCost'] = ApiClient.convertToType(data['factCost'], 'Number');
      }
      if (data.hasOwnProperty('mlCost')) {
        obj['mlCost'] = ApiClient.convertToType(data['mlCost'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('orderQuantity')) {
        obj['orderQuantity'] = ApiClient.convertToType(data['orderQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('requestedDeliveryDate')) {
        obj['requestedDeliveryDate'] = ApiClient.convertToType(data['requestedDeliveryDate'], 'Date');
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
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
      }
      if (data.hasOwnProperty('sellPrice')) {
        obj['sellPrice'] = ApiClient.convertToType(data['sellPrice'], 'Number');
      }
      if (data.hasOwnProperty('pricingPer')) {
        obj['pricingPer'] = ApiClient.convertToType(data['pricingPer'], 'String');
      }
      if (data.hasOwnProperty('maxFreight')) {
        obj['maxFreight'] = ApiClient.convertToType(data['maxFreight'], 'Number');
      }
      if (data.hasOwnProperty('chargeFreight')) {
        obj['chargeFreight'] = ApiClient.convertToType(data['chargeFreight'], 'String');
      }
      if (data.hasOwnProperty('maxOther')) {
        obj['maxOther'] = ApiClient.convertToType(data['maxOther'], 'Number');
      }
      if (data.hasOwnProperty('distDate')) {
        obj['distDate'] = ApiClient.convertToType(data['distDate'], 'Date');
      }
      if (data.hasOwnProperty('voidDate')) {
        obj['voidDate'] = ApiClient.convertToType(data['voidDate'], 'Date');
      }
      if (data.hasOwnProperty('freezeAction')) {
        obj['freezeAction'] = ApiClient.convertToType(data['freezeAction'], 'String');
      }
      if (data.hasOwnProperty('revDate')) {
        obj['revDate'] = ApiClient.convertToType(data['revDate'], 'String');
      }
      if (data.hasOwnProperty('artBack')) {
        obj['artBack'] = ApiClient.convertToType(data['artBack'], 'String');
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
      }
      if (data.hasOwnProperty('sample')) {
        obj['sample'] = ApiClient.convertToType(data['sample'], 'Integer');
      }
      if (data.hasOwnProperty('sampleTo')) {
        obj['sampleTo'] = ApiClient.convertToType(data['sampleTo'], 'String');
      }
      if (data.hasOwnProperty('maxOvers')) {
        obj['maxOvers'] = ApiClient.convertToType(data['maxOvers'], 'Integer');
      }
      if (data.hasOwnProperty('maxUnders')) {
        obj['maxUnders'] = ApiClient.convertToType(data['maxUnders'], 'Integer');
      }
      if (data.hasOwnProperty('receivedSfp')) {
        obj['receivedSfp'] = ApiClient.convertToType(data['receivedSfp'], 'Integer');
      }
      if (data.hasOwnProperty('budgetCode')) {
        obj['budgetCode'] = ApiClient.convertToType(data['budgetCode'], 'String');
      }
      if (data.hasOwnProperty('accountingCode')) {
        obj['accountingCode'] = ApiClient.convertToType(data['accountingCode'], 'String');
      }
      if (data.hasOwnProperty('taxExempt')) {
        obj['taxExempt'] = ApiClient.convertToType(data['taxExempt'], 'String');
      }
      if (data.hasOwnProperty('capitalize')) {
        obj['capitalize'] = ApiClient.convertToType(data['capitalize'], 'String');
      }
      if (data.hasOwnProperty('accrual')) {
        obj['accrual'] = ApiClient.convertToType(data['accrual'], 'String');
      }
      if (data.hasOwnProperty('oddQuantity')) {
        obj['oddQuantity'] = ApiClient.convertToType(data['oddQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('freightCost')) {
        obj['freightCost'] = ApiClient.convertToType(data['freightCost'], 'Number');
      }
      if (data.hasOwnProperty('receivedDate')) {
        obj['receivedDate'] = ApiClient.convertToType(data['receivedDate'], 'Date');
      }
      if (data.hasOwnProperty('receivedQuantity')) {
        obj['receivedQuantity'] = ApiClient.convertToType(data['receivedQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('fromProd')) {
        obj['fromProd'] = ApiClient.convertToType(data['fromProd'], 'Integer');
      }
      if (data.hasOwnProperty('sfpComplete')) {
        obj['sfpComplete'] = ApiClient.convertToType(data['sfpComplete'], 'String');
      }
      if (data.hasOwnProperty('endQuantity')) {
        obj['endQuantity'] = ApiClient.convertToType(data['endQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('endVal')) {
        obj['endVal'] = ApiClient.convertToType(data['endVal'], 'Number');
      }
      if (data.hasOwnProperty('endFact')) {
        obj['endFact'] = ApiClient.convertToType(data['endFact'], 'Number');
      }
      if (data.hasOwnProperty('interimQuantity')) {
        obj['interimQuantity'] = ApiClient.convertToType(data['interimQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('interimVal')) {
        obj['interimVal'] = ApiClient.convertToType(data['interimVal'], 'Number');
      }
      if (data.hasOwnProperty('interimFact')) {
        obj['interimFact'] = ApiClient.convertToType(data['interimFact'], 'Number');
      }
      if (data.hasOwnProperty('lastAct')) {
        obj['lastAct'] = ApiClient.convertToType(data['lastAct'], 'Date');
      }
      if (data.hasOwnProperty('weightPerWrap')) {
        obj['weightPerWrap'] = ApiClient.convertToType(data['weightPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('norcs')) {
        obj['norcs'] = ApiClient.convertToType(data['norcs'], 'String');
      }
      if (data.hasOwnProperty('vendorId')) {
        obj['vendorId'] = ApiClient.convertToType(data['vendorId'], 'Integer');
      }
      if (data.hasOwnProperty('bsVendor')) {
        obj['bsVendor'] = ApiClient.convertToType(data['bsVendor'], 'Integer');
      }
      if (data.hasOwnProperty('mlVendor')) {
        obj['mlVendor'] = ApiClient.convertToType(data['mlVendor'], 'Integer');
      }
      if (data.hasOwnProperty('receiptNo')) {
        obj['receiptNo'] = ApiClient.convertToType(data['receiptNo'], 'Integer');
      }
      if (data.hasOwnProperty('paidFull')) {
        obj['paidFull'] = ApiClient.convertToType(data['paidFull'], 'String');
      }
      if (data.hasOwnProperty('enteredBy')) {
        obj['enteredBy'] = ApiClient.convertToType(data['enteredBy'], 'String');
      }
      if (data.hasOwnProperty('receivedBy')) {
        obj['receivedBy'] = ApiClient.convertToType(data['receivedBy'], 'String');
      }
      if (data.hasOwnProperty('lineNo')) {
        obj['lineNo'] = ApiClient.convertToType(data['lineNo'], 'Integer');
      }
      if (data.hasOwnProperty('prodLot')) {
        obj['prodLot'] = ApiClient.convertToType(data['prodLot'], 'String');
      }
      if (data.hasOwnProperty('productIdTag')) {
        obj['productIdTag'] = ApiClient.convertToType(data['productIdTag'], 'String');
      }
      if (data.hasOwnProperty('unitsPerCase')) {
        obj['unitsPerCase'] = ApiClient.convertToType(data['unitsPerCase'], 'Integer');
      }
      if (data.hasOwnProperty('caseWeight')) {
        obj['caseWeight'] = ApiClient.convertToType(data['caseWeight'], 'Number');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('dockDate')) {
        obj['dockDate'] = ApiClient.convertToType(data['dockDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('impressions')) {
        obj['impressions'] = ApiClient.convertToType(data['impressions'], 'Integer');
      }
      if (data.hasOwnProperty('asnLine')) {
        obj['asnLine'] = ApiClient.convertToType(data['asnLine'], 'Integer');
      }
      if (data.hasOwnProperty('upc')) {
        obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
      }
      if (data.hasOwnProperty('vendorSKU')) {
        obj['vendorSKU'] = ApiClient.convertToType(data['vendorSKU'], 'String');
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
   * @member {Integer} poNoId
   */
  exports.prototype['poNoId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} legacyPoNo
   */
  exports.prototype['legacyPoNo'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Date} orderDate
   */
  exports.prototype['orderDate'] = undefined;

  /**
   * @member {String} fullDescription
   */
  exports.prototype['fullDescription'] = undefined;

  /**
   * @member {Number} factCost
   */
  exports.prototype['factCost'] = undefined;

  /**
   * @member {Number} mlCost
   */
  exports.prototype['mlCost'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;

  /**
   * @member {Integer} orderQuantity
   */
  exports.prototype['orderQuantity'] = undefined;

  /**
   * @member {Date} requestedDeliveryDate
   */
  exports.prototype['requestedDeliveryDate'] = undefined;

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
   * @member {Number} maxFreight
   */
  exports.prototype['maxFreight'] = undefined;

  /**
   * @member {String} chargeFreight
   */
  exports.prototype['chargeFreight'] = undefined;

  /**
   * @member {Number} maxOther
   */
  exports.prototype['maxOther'] = undefined;

  /**
   * @member {Date} distDate
   */
  exports.prototype['distDate'] = undefined;

  /**
   * @member {Date} voidDate
   */
  exports.prototype['voidDate'] = undefined;

  /**
   * @member {String} freezeAction
   */
  exports.prototype['freezeAction'] = undefined;

  /**
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;

  /**
   * @member {String} artBack
   */
  exports.prototype['artBack'] = undefined;

  /**
   * @member {String} origin
   */
  exports.prototype['origin'] = undefined;

  /**
   * @member {Integer} sample
   */
  exports.prototype['sample'] = undefined;

  /**
   * @member {String} sampleTo
   */
  exports.prototype['sampleTo'] = undefined;

  /**
   * @member {Integer} maxOvers
   */
  exports.prototype['maxOvers'] = undefined;

  /**
   * @member {Integer} maxUnders
   */
  exports.prototype['maxUnders'] = undefined;

  /**
   * @member {Integer} receivedSfp
   */
  exports.prototype['receivedSfp'] = undefined;

  /**
   * @member {String} budgetCode
   */
  exports.prototype['budgetCode'] = undefined;

  /**
   * @member {String} accountingCode
   */
  exports.prototype['accountingCode'] = undefined;

  /**
   * @member {String} taxExempt
   */
  exports.prototype['taxExempt'] = undefined;

  /**
   * @member {String} capitalize
   */
  exports.prototype['capitalize'] = undefined;

  /**
   * @member {String} accrual
   */
  exports.prototype['accrual'] = undefined;

  /**
   * @member {Integer} oddQuantity
   */
  exports.prototype['oddQuantity'] = undefined;

  /**
   * @member {Number} freightCost
   */
  exports.prototype['freightCost'] = undefined;

  /**
   * @member {Date} receivedDate
   */
  exports.prototype['receivedDate'] = undefined;

  /**
   * @member {Integer} receivedQuantity
   */
  exports.prototype['receivedQuantity'] = undefined;

  /**
   * @member {Integer} fromProd
   */
  exports.prototype['fromProd'] = undefined;

  /**
   * @member {String} sfpComplete
   */
  exports.prototype['sfpComplete'] = undefined;

  /**
   * @member {Integer} endQuantity
   */
  exports.prototype['endQuantity'] = undefined;

  /**
   * @member {Number} endVal
   */
  exports.prototype['endVal'] = undefined;

  /**
   * @member {Number} endFact
   */
  exports.prototype['endFact'] = undefined;

  /**
   * @member {Integer} interimQuantity
   */
  exports.prototype['interimQuantity'] = undefined;

  /**
   * @member {Number} interimVal
   */
  exports.prototype['interimVal'] = undefined;

  /**
   * @member {Number} interimFact
   */
  exports.prototype['interimFact'] = undefined;

  /**
   * @member {Date} lastAct
   */
  exports.prototype['lastAct'] = undefined;

  /**
   * @member {Number} weightPerWrap
   */
  exports.prototype['weightPerWrap'] = undefined;

  /**
   * @member {String} norcs
   */
  exports.prototype['norcs'] = undefined;

  /**
   * @member {Integer} vendorId
   */
  exports.prototype['vendorId'] = undefined;

  /**
   * @member {Integer} bsVendor
   */
  exports.prototype['bsVendor'] = undefined;

  /**
   * @member {Integer} mlVendor
   */
  exports.prototype['mlVendor'] = undefined;

  /**
   * @member {Integer} receiptNo
   */
  exports.prototype['receiptNo'] = undefined;

  /**
   * @member {String} paidFull
   */
  exports.prototype['paidFull'] = undefined;

  /**
   * @member {String} enteredBy
   */
  exports.prototype['enteredBy'] = undefined;

  /**
   * @member {String} receivedBy
   */
  exports.prototype['receivedBy'] = undefined;

  /**
   * @member {Integer} lineNo
   */
  exports.prototype['lineNo'] = undefined;

  /**
   * @member {String} prodLot
   */
  exports.prototype['prodLot'] = undefined;

  /**
   * @member {String} productIdTag
   */
  exports.prototype['productIdTag'] = undefined;

  /**
   * @member {Integer} unitsPerCase
   */
  exports.prototype['unitsPerCase'] = undefined;

  /**
   * @member {Number} caseWeight
   */
  exports.prototype['caseWeight'] = undefined;

  /**
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;

  /**
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;

  /**
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;

  /**
   * @member {Date} dockDate
   */
  exports.prototype['dockDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} impressions
   */
  exports.prototype['impressions'] = undefined;

  /**
   * @member {Integer} asnLine
   */
  exports.prototype['asnLine'] = undefined;

  /**
   * @member {String} upc
   */
  exports.prototype['upc'] = undefined;

  /**
   * @member {String} vendorSKU
   */
  exports.prototype['vendorSKU'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
