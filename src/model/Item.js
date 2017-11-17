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
    root.infoplus.Item = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Item model module.
   * @module model/Item
   * @version beta
   */

  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   * @class
   * @param majorGroupId
   * @param subGroupId
   * @param lobId
   * @param sku
   * @param itemDescription
   * @param backorder
   * @param chargeCode
   * @param criticalAmount
   * @param maxCycle
   * @param maxInterim
   * @param status
   * @param seasonalItem
   * @param secure
   * @param serialCode
   * @param unitCode
   * @param unitsPerWrap
   * @param wrapCode
   * @param forwardLotMixingRule
   * @param storageLotMixingRule
   * @param forwardItemMixingRule
   * @param storageItemMixingRule
   * @param allocationRule
   * @param hazmat
   */
  var exports = function(majorGroupId, subGroupId, lobId, sku, itemDescription, backorder, chargeCode, criticalAmount, maxCycle, maxInterim, status, seasonalItem, secure, serialCode, unitCode, unitsPerWrap, wrapCode, forwardLotMixingRule, storageLotMixingRule, forwardItemMixingRule, storageItemMixingRule, allocationRule, hazmat) {






    this['majorGroupId'] = majorGroupId;
    this['subGroupId'] = subGroupId;



    this['lobId'] = lobId;
    this['sku'] = sku;


    this['itemDescription'] = itemDescription;



    this['backorder'] = backorder;
    this['chargeCode'] = chargeCode;



    this['criticalAmount'] = criticalAmount;





    this['maxCycle'] = maxCycle;
    this['maxInterim'] = maxInterim;





    this['status'] = status;
    this['seasonalItem'] = seasonalItem;


    this['secure'] = secure;
    this['serialCode'] = serialCode;
    this['unitCode'] = unitCode;
    this['unitsPerWrap'] = unitsPerWrap;


    this['wrapCode'] = wrapCode;













    this['forwardLotMixingRule'] = forwardLotMixingRule;
    this['storageLotMixingRule'] = storageLotMixingRule;
    this['forwardItemMixingRule'] = forwardItemMixingRule;
    this['storageItemMixingRule'] = storageItemMixingRule;
    this['allocationRule'] = allocationRule;



    this['hazmat'] = hazmat;































  };

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item} obj Optional instance to populate.
   * @return {module:model/Item} The populated <code>Item</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('accountCodeId')) {
        obj['accountCodeId'] = ApiClient.convertToType(data['accountCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('lowStockContactId')) {
        obj['lowStockContactId'] = ApiClient.convertToType(data['lowStockContactId'], 'Integer');
      }
      if (data.hasOwnProperty('legacyLowLevelContactId')) {
        obj['legacyLowLevelContactId'] = ApiClient.convertToType(data['legacyLowLevelContactId'], 'Integer');
      }
      if (data.hasOwnProperty('lowStockCodeId')) {
        obj['lowStockCodeId'] = ApiClient.convertToType(data['lowStockCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('majorGroupId')) {
        obj['majorGroupId'] = ApiClient.convertToType(data['majorGroupId'], 'Integer');
      }
      if (data.hasOwnProperty('subGroupId')) {
        obj['subGroupId'] = ApiClient.convertToType(data['subGroupId'], 'Integer');
      }
      if (data.hasOwnProperty('productCodeId')) {
        obj['productCodeId'] = ApiClient.convertToType(data['productCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('summaryCodeId')) {
        obj['summaryCodeId'] = ApiClient.convertToType(data['summaryCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('buyerId')) {
        obj['buyerId'] = ApiClient.convertToType(data['buyerId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('vendorSKU')) {
        obj['vendorSKU'] = ApiClient.convertToType(data['vendorSKU'], 'String');
      }
      if (data.hasOwnProperty('upc')) {
        obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
      }
      if (data.hasOwnProperty('itemDescription')) {
        obj['itemDescription'] = ApiClient.convertToType(data['itemDescription'], 'String');
      }
      if (data.hasOwnProperty('packingSlipDescription')) {
        obj['packingSlipDescription'] = ApiClient.convertToType(data['packingSlipDescription'], 'String');
      }
      if (data.hasOwnProperty('absoluteMax')) {
        obj['absoluteMax'] = ApiClient.convertToType(data['absoluteMax'], 'String');
      }
      if (data.hasOwnProperty('additionalDescription')) {
        obj['additionalDescription'] = ApiClient.convertToType(data['additionalDescription'], 'String');
      }
      if (data.hasOwnProperty('backorder')) {
        obj['backorder'] = ApiClient.convertToType(data['backorder'], 'String');
      }
      if (data.hasOwnProperty('chargeCode')) {
        obj['chargeCode'] = ApiClient.convertToType(data['chargeCode'], 'String');
      }
      if (data.hasOwnProperty('commodityCode')) {
        obj['commodityCode'] = ApiClient.convertToType(data['commodityCode'], 'String');
      }
      if (data.hasOwnProperty('compCode')) {
        obj['compCode'] = ApiClient.convertToType(data['compCode'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('criticalAmount')) {
        obj['criticalAmount'] = ApiClient.convertToType(data['criticalAmount'], 'Integer');
      }
      if (data.hasOwnProperty('overallFixedReorderPoint')) {
        obj['overallFixedReorderPoint'] = ApiClient.convertToType(data['overallFixedReorderPoint'], 'Integer');
      }
      if (data.hasOwnProperty('overallLeadTime')) {
        obj['overallLeadTime'] = ApiClient.convertToType(data['overallLeadTime'], 'Integer');
      }
      if (data.hasOwnProperty('sellPrice')) {
        obj['sellPrice'] = ApiClient.convertToType(data['sellPrice'], 'Number');
      }
      if (data.hasOwnProperty('pricingPer')) {
        obj['pricingPer'] = ApiClient.convertToType(data['pricingPer'], 'String');
      }
      if (data.hasOwnProperty('lotControlFlag')) {
        obj['lotControlFlag'] = ApiClient.convertToType(data['lotControlFlag'], 'String');
      }
      if (data.hasOwnProperty('maxCycle')) {
        obj['maxCycle'] = ApiClient.convertToType(data['maxCycle'], 'Integer');
      }
      if (data.hasOwnProperty('maxInterim')) {
        obj['maxInterim'] = ApiClient.convertToType(data['maxInterim'], 'Integer');
      }
      if (data.hasOwnProperty('numericSortOrder')) {
        obj['numericSortOrder'] = ApiClient.convertToType(data['numericSortOrder'], 'Integer');
      }
      if (data.hasOwnProperty('outsideVendor')) {
        obj['outsideVendor'] = ApiClient.convertToType(data['outsideVendor'], 'Integer');
      }
      if (data.hasOwnProperty('pickNo')) {
        obj['pickNo'] = ApiClient.convertToType(data['pickNo'], 'String');
      }
      if (data.hasOwnProperty('podOrderSuffix')) {
        obj['podOrderSuffix'] = ApiClient.convertToType(data['podOrderSuffix'], 'Integer');
      }
      if (data.hasOwnProperty('podRevDate')) {
        obj['podRevDate'] = ApiClient.convertToType(data['podRevDate'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('seasonalItem')) {
        obj['seasonalItem'] = ApiClient.convertToType(data['seasonalItem'], 'String');
      }
      if (data.hasOwnProperty('requiresProductionLot')) {
        obj['requiresProductionLot'] = ApiClient.convertToType(data['requiresProductionLot'], 'String');
      }
      if (data.hasOwnProperty('sector')) {
        obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
      }
      if (data.hasOwnProperty('secure')) {
        obj['secure'] = ApiClient.convertToType(data['secure'], 'String');
      }
      if (data.hasOwnProperty('serialCode')) {
        obj['serialCode'] = ApiClient.convertToType(data['serialCode'], 'String');
      }
      if (data.hasOwnProperty('unitCode')) {
        obj['unitCode'] = ApiClient.convertToType(data['unitCode'], 'String');
      }
      if (data.hasOwnProperty('unitsPerWrap')) {
        obj['unitsPerWrap'] = ApiClient.convertToType(data['unitsPerWrap'], 'Integer');
      }
      if (data.hasOwnProperty('weightPerWrap')) {
        obj['weightPerWrap'] = ApiClient.convertToType(data['weightPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('voidDate')) {
        obj['voidDate'] = ApiClient.convertToType(data['voidDate'], 'Date');
      }
      if (data.hasOwnProperty('wrapCode')) {
        obj['wrapCode'] = ApiClient.convertToType(data['wrapCode'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText1')) {
        obj['extrinsicText1'] = ApiClient.convertToType(data['extrinsicText1'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText2')) {
        obj['extrinsicText2'] = ApiClient.convertToType(data['extrinsicText2'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText3')) {
        obj['extrinsicText3'] = ApiClient.convertToType(data['extrinsicText3'], 'String');
      }
      if (data.hasOwnProperty('extrinsicNumber1')) {
        obj['extrinsicNumber1'] = ApiClient.convertToType(data['extrinsicNumber1'], 'Integer');
      }
      if (data.hasOwnProperty('extrinsicNumber2')) {
        obj['extrinsicNumber2'] = ApiClient.convertToType(data['extrinsicNumber2'], 'Integer');
      }
      if (data.hasOwnProperty('extrinsicDecimal1')) {
        obj['extrinsicDecimal1'] = ApiClient.convertToType(data['extrinsicDecimal1'], 'Number');
      }
      if (data.hasOwnProperty('extrinsicDecimal2')) {
        obj['extrinsicDecimal2'] = ApiClient.convertToType(data['extrinsicDecimal2'], 'Number');
      }
      if (data.hasOwnProperty('casebreakEnabled')) {
        obj['casebreakEnabled'] = ApiClient.convertToType(data['casebreakEnabled'], 'String');
      }
      if (data.hasOwnProperty('vendorId')) {
        obj['vendorId'] = ApiClient.convertToType(data['vendorId'], 'Integer');
      }
      if (data.hasOwnProperty('vendorPrice')) {
        obj['vendorPrice'] = ApiClient.convertToType(data['vendorPrice'], 'Number');
      }
      if (data.hasOwnProperty('vendorPer')) {
        obj['vendorPer'] = ApiClient.convertToType(data['vendorPer'], 'String');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('behaviorType')) {
        obj['behaviorType'] = ApiClient.convertToType(data['behaviorType'], 'String');
      }
      if (data.hasOwnProperty('forwardLotMixingRule')) {
        obj['forwardLotMixingRule'] = ApiClient.convertToType(data['forwardLotMixingRule'], 'String');
      }
      if (data.hasOwnProperty('storageLotMixingRule')) {
        obj['storageLotMixingRule'] = ApiClient.convertToType(data['storageLotMixingRule'], 'String');
      }
      if (data.hasOwnProperty('forwardItemMixingRule')) {
        obj['forwardItemMixingRule'] = ApiClient.convertToType(data['forwardItemMixingRule'], 'String');
      }
      if (data.hasOwnProperty('storageItemMixingRule')) {
        obj['storageItemMixingRule'] = ApiClient.convertToType(data['storageItemMixingRule'], 'String');
      }
      if (data.hasOwnProperty('allocationRule')) {
        obj['allocationRule'] = ApiClient.convertToType(data['allocationRule'], 'String');
      }
      if (data.hasOwnProperty('barcodeField')) {
        obj['barcodeField'] = ApiClient.convertToType(data['barcodeField'], 'String');
      }
      if (data.hasOwnProperty('warehouseDisplayField')) {
        obj['warehouseDisplayField'] = ApiClient.convertToType(data['warehouseDisplayField'], 'String');
      }
      if (data.hasOwnProperty('productIdTagSchemeId')) {
        obj['productIdTagSchemeId'] = ApiClient.convertToType(data['productIdTagSchemeId'], 'Integer');
      }
      if (data.hasOwnProperty('hazmat')) {
        obj['hazmat'] = ApiClient.convertToType(data['hazmat'], 'String');
      }
      if (data.hasOwnProperty('isAlcohol')) {
        obj['isAlcohol'] = ApiClient.convertToType(data['isAlcohol'], 'Boolean');
      }
      if (data.hasOwnProperty('alcoholType')) {
        obj['alcoholType'] = ApiClient.convertToType(data['alcoholType'], 'String');
      }
      if (data.hasOwnProperty('alcoholContent')) {
        obj['alcoholContent'] = ApiClient.convertToType(data['alcoholContent'], 'Number');
      }
      if (data.hasOwnProperty('alcoholContainer')) {
        obj['alcoholContainer'] = ApiClient.convertToType(data['alcoholContainer'], 'String');
      }
      if (data.hasOwnProperty('alcoholVintageYear')) {
        obj['alcoholVintageYear'] = ApiClient.convertToType(data['alcoholVintageYear'], 'String');
      }
      if (data.hasOwnProperty('alcoholCountry')) {
        obj['alcoholCountry'] = ApiClient.convertToType(data['alcoholCountry'], 'String');
      }
      if (data.hasOwnProperty('alcoholState')) {
        obj['alcoholState'] = ApiClient.convertToType(data['alcoholState'], 'String');
      }
      if (data.hasOwnProperty('alcoholRegion')) {
        obj['alcoholRegion'] = ApiClient.convertToType(data['alcoholRegion'], 'String');
      }
      if (data.hasOwnProperty('alcoholBrand')) {
        obj['alcoholBrand'] = ApiClient.convertToType(data['alcoholBrand'], 'String');
      }
      if (data.hasOwnProperty('alcoholUPCCode')) {
        obj['alcoholUPCCode'] = ApiClient.convertToType(data['alcoholUPCCode'], 'String');
      }
      if (data.hasOwnProperty('alcoholNAMBCACode')) {
        obj['alcoholNAMBCACode'] = ApiClient.convertToType(data['alcoholNAMBCACode'], 'String');
      }
      if (data.hasOwnProperty('alcoholUNIMERCCode')) {
        obj['alcoholUNIMERCCode'] = ApiClient.convertToType(data['alcoholUNIMERCCode'], 'String');
      }
      if (data.hasOwnProperty('alcoholSCCCode')) {
        obj['alcoholSCCCode'] = ApiClient.convertToType(data['alcoholSCCCode'], 'String');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('topUp')) {
        obj['topUp'] = ApiClient.convertToType(data['topUp'], 'Boolean');
      }
      if (data.hasOwnProperty('shipSolo')) {
        obj['shipSolo'] = ApiClient.convertToType(data['shipSolo'], 'Boolean');
      }
      if (data.hasOwnProperty('inventoryUpdateTimestamp')) {
        obj['inventoryUpdateTimestamp'] = ApiClient.convertToType(data['inventoryUpdateTimestamp'], 'Date');
      }
      if (data.hasOwnProperty('availableQuantity')) {
        obj['availableQuantity'] = ApiClient.convertToType(data['availableQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('damagedQuantity')) {
        obj['damagedQuantity'] = ApiClient.convertToType(data['damagedQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('inFulfillmentProcessQuantity')) {
        obj['inFulfillmentProcessQuantity'] = ApiClient.convertToType(data['inFulfillmentProcessQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('onHandQuantity')) {
        obj['onHandQuantity'] = ApiClient.convertToType(data['onHandQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('openOrderQuantity')) {
        obj['openOrderQuantity'] = ApiClient.convertToType(data['openOrderQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('openPOQuantity')) {
        obj['openPOQuantity'] = ApiClient.convertToType(data['openPOQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('orderableQuantity')) {
        obj['orderableQuantity'] = ApiClient.convertToType(data['orderableQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('unallocatableQuantity')) {
        obj['unallocatableQuantity'] = ApiClient.convertToType(data['unallocatableQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('unavailableQuantity')) {
        obj['unavailableQuantity'] = ApiClient.convertToType(data['unavailableQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('overallDaysOnHand')) {
        obj['overallDaysOnHand'] = ApiClient.convertToType(data['overallDaysOnHand'], 'Integer');
      }
      if (data.hasOwnProperty('overallStockStatus')) {
        obj['overallStockStatus'] = ApiClient.convertToType(data['overallStockStatus'], 'String');
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
   * @member {Integer} accountCodeId
   */
  exports.prototype['accountCodeId'] = undefined;

  /**
   * @member {Integer} lowStockContactId
   */
  exports.prototype['lowStockContactId'] = undefined;

  /**
   * @member {Integer} legacyLowLevelContactId
   */
  exports.prototype['legacyLowLevelContactId'] = undefined;

  /**
   * @member {Integer} lowStockCodeId
   */
  exports.prototype['lowStockCodeId'] = undefined;

  /**
   * @member {Integer} majorGroupId
   */
  exports.prototype['majorGroupId'] = undefined;

  /**
   * @member {Integer} subGroupId
   */
  exports.prototype['subGroupId'] = undefined;

  /**
   * @member {Integer} productCodeId
   */
  exports.prototype['productCodeId'] = undefined;

  /**
   * @member {Integer} summaryCodeId
   */
  exports.prototype['summaryCodeId'] = undefined;

  /**
   * @member {Integer} buyerId
   */
  exports.prototype['buyerId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;

  /**
   * @member {String} vendorSKU
   */
  exports.prototype['vendorSKU'] = undefined;

  /**
   * @member {String} upc
   */
  exports.prototype['upc'] = undefined;

  /**
   * @member {String} itemDescription
   */
  exports.prototype['itemDescription'] = undefined;

  /**
   * @member {String} packingSlipDescription
   */
  exports.prototype['packingSlipDescription'] = undefined;

  /**
   * @member {String} absoluteMax
   */
  exports.prototype['absoluteMax'] = undefined;

  /**
   * @member {String} additionalDescription
   */
  exports.prototype['additionalDescription'] = undefined;

  /**
   * @member {String} backorder
   */
  exports.prototype['backorder'] = undefined;

  /**
   * @member {String} chargeCode
   */
  exports.prototype['chargeCode'] = undefined;

  /**
   * @member {String} commodityCode
   */
  exports.prototype['commodityCode'] = undefined;

  /**
   * @member {Integer} compCode
   */
  exports.prototype['compCode'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Integer} criticalAmount
   */
  exports.prototype['criticalAmount'] = undefined;

  /**
   * @member {Integer} overallFixedReorderPoint
   */
  exports.prototype['overallFixedReorderPoint'] = undefined;

  /**
   * @member {Integer} overallLeadTime
   */
  exports.prototype['overallLeadTime'] = undefined;

  /**
   * @member {Number} sellPrice
   */
  exports.prototype['sellPrice'] = undefined;

  /**
   * @member {String} pricingPer
   */
  exports.prototype['pricingPer'] = undefined;

  /**
   * @member {String} lotControlFlag
   */
  exports.prototype['lotControlFlag'] = undefined;

  /**
   * @member {Integer} maxCycle
   */
  exports.prototype['maxCycle'] = undefined;

  /**
   * @member {Integer} maxInterim
   */
  exports.prototype['maxInterim'] = undefined;

  /**
   * @member {Integer} numericSortOrder
   */
  exports.prototype['numericSortOrder'] = undefined;

  /**
   * @member {Integer} outsideVendor
   */
  exports.prototype['outsideVendor'] = undefined;

  /**
   * @member {String} pickNo
   */
  exports.prototype['pickNo'] = undefined;

  /**
   * @member {Integer} podOrderSuffix
   */
  exports.prototype['podOrderSuffix'] = undefined;

  /**
   * @member {String} podRevDate
   */
  exports.prototype['podRevDate'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} seasonalItem
   */
  exports.prototype['seasonalItem'] = undefined;

  /**
   * @member {String} requiresProductionLot
   */
  exports.prototype['requiresProductionLot'] = undefined;

  /**
   * @member {String} sector
   */
  exports.prototype['sector'] = undefined;

  /**
   * @member {String} secure
   */
  exports.prototype['secure'] = undefined;

  /**
   * @member {String} serialCode
   */
  exports.prototype['serialCode'] = undefined;

  /**
   * @member {String} unitCode
   */
  exports.prototype['unitCode'] = undefined;

  /**
   * @member {Integer} unitsPerWrap
   */
  exports.prototype['unitsPerWrap'] = undefined;

  /**
   * @member {Number} weightPerWrap
   */
  exports.prototype['weightPerWrap'] = undefined;

  /**
   * @member {Date} voidDate
   */
  exports.prototype['voidDate'] = undefined;

  /**
   * @member {String} wrapCode
   */
  exports.prototype['wrapCode'] = undefined;

  /**
   * @member {String} extrinsicText1
   */
  exports.prototype['extrinsicText1'] = undefined;

  /**
   * @member {String} extrinsicText2
   */
  exports.prototype['extrinsicText2'] = undefined;

  /**
   * @member {String} extrinsicText3
   */
  exports.prototype['extrinsicText3'] = undefined;

  /**
   * @member {Integer} extrinsicNumber1
   */
  exports.prototype['extrinsicNumber1'] = undefined;

  /**
   * @member {Integer} extrinsicNumber2
   */
  exports.prototype['extrinsicNumber2'] = undefined;

  /**
   * @member {Number} extrinsicDecimal1
   */
  exports.prototype['extrinsicDecimal1'] = undefined;

  /**
   * @member {Number} extrinsicDecimal2
   */
  exports.prototype['extrinsicDecimal2'] = undefined;

  /**
   * @member {String} casebreakEnabled
   */
  exports.prototype['casebreakEnabled'] = undefined;

  /**
   * @member {Integer} vendorId
   */
  exports.prototype['vendorId'] = undefined;

  /**
   * @member {Number} vendorPrice
   */
  exports.prototype['vendorPrice'] = undefined;

  /**
   * @member {String} vendorPer
   */
  exports.prototype['vendorPer'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {String} behaviorType
   */
  exports.prototype['behaviorType'] = undefined;

  /**
   * @member {String} forwardLotMixingRule
   */
  exports.prototype['forwardLotMixingRule'] = undefined;

  /**
   * @member {String} storageLotMixingRule
   */
  exports.prototype['storageLotMixingRule'] = undefined;

  /**
   * @member {String} forwardItemMixingRule
   */
  exports.prototype['forwardItemMixingRule'] = undefined;

  /**
   * @member {String} storageItemMixingRule
   */
  exports.prototype['storageItemMixingRule'] = undefined;

  /**
   * @member {String} allocationRule
   */
  exports.prototype['allocationRule'] = undefined;

  /**
   * @member {String} barcodeField
   */
  exports.prototype['barcodeField'] = undefined;

  /**
   * @member {String} warehouseDisplayField
   */
  exports.prototype['warehouseDisplayField'] = undefined;

  /**
   * @member {Integer} productIdTagSchemeId
   */
  exports.prototype['productIdTagSchemeId'] = undefined;

  /**
   * @member {String} hazmat
   */
  exports.prototype['hazmat'] = undefined;

  /**
   * @member {Boolean} isAlcohol
   * @default false
   */
  exports.prototype['isAlcohol'] = false;

  /**
   * @member {String} alcoholType
   */
  exports.prototype['alcoholType'] = undefined;

  /**
   * @member {Number} alcoholContent
   */
  exports.prototype['alcoholContent'] = undefined;

  /**
   * @member {String} alcoholContainer
   */
  exports.prototype['alcoholContainer'] = undefined;

  /**
   * @member {String} alcoholVintageYear
   */
  exports.prototype['alcoholVintageYear'] = undefined;

  /**
   * @member {String} alcoholCountry
   */
  exports.prototype['alcoholCountry'] = undefined;

  /**
   * @member {String} alcoholState
   */
  exports.prototype['alcoholState'] = undefined;

  /**
   * @member {String} alcoholRegion
   */
  exports.prototype['alcoholRegion'] = undefined;

  /**
   * @member {String} alcoholBrand
   */
  exports.prototype['alcoholBrand'] = undefined;

  /**
   * @member {String} alcoholUPCCode
   */
  exports.prototype['alcoholUPCCode'] = undefined;

  /**
   * @member {String} alcoholNAMBCACode
   */
  exports.prototype['alcoholNAMBCACode'] = undefined;

  /**
   * @member {String} alcoholUNIMERCCode
   */
  exports.prototype['alcoholUNIMERCCode'] = undefined;

  /**
   * @member {String} alcoholSCCCode
   */
  exports.prototype['alcoholSCCCode'] = undefined;

  /**
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;

  /**
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;

  /**
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;

  /**
   * @member {Boolean} topUp
   * @default false
   */
  exports.prototype['topUp'] = false;

  /**
   * @member {Boolean} shipSolo
   * @default false
   */
  exports.prototype['shipSolo'] = false;

  /**
   * @member {Date} inventoryUpdateTimestamp
   */
  exports.prototype['inventoryUpdateTimestamp'] = undefined;

  /**
   * @member {Integer} availableQuantity
   */
  exports.prototype['availableQuantity'] = undefined;

  /**
   * @member {Integer} damagedQuantity
   */
  exports.prototype['damagedQuantity'] = undefined;

  /**
   * @member {Integer} inFulfillmentProcessQuantity
   */
  exports.prototype['inFulfillmentProcessQuantity'] = undefined;

  /**
   * @member {Integer} onHandQuantity
   */
  exports.prototype['onHandQuantity'] = undefined;

  /**
   * @member {Integer} openOrderQuantity
   */
  exports.prototype['openOrderQuantity'] = undefined;

  /**
   * @member {Integer} openPOQuantity
   */
  exports.prototype['openPOQuantity'] = undefined;

  /**
   * @member {Integer} orderableQuantity
   */
  exports.prototype['orderableQuantity'] = undefined;

  /**
   * @member {Integer} unallocatableQuantity
   */
  exports.prototype['unallocatableQuantity'] = undefined;

  /**
   * @member {Integer} unavailableQuantity
   */
  exports.prototype['unavailableQuantity'] = undefined;

  /**
   * @member {Integer} overallDaysOnHand
   */
  exports.prototype['overallDaysOnHand'] = undefined;

  /**
   * @member {String} overallStockStatus
   */
  exports.prototype['overallStockStatus'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
