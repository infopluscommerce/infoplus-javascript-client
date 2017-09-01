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
    root.infoplus.ItemReceiptActivity = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemReceiptActivity model module.
   * @module model/ItemReceiptActivity
   * @version beta
   */

  /**
   * Constructs a new <code>ItemReceiptActivity</code>.
   * @alias module:model/ItemReceiptActivity
   * @class
   * @param lobId
   */
  var exports = function(lobId) {







    this['lobId'] = lobId;











































































  };

  /**
   * Constructs a <code>ItemReceiptActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemReceiptActivity} obj Optional instance to populate.
   * @return {module:model/ItemReceiptActivity} The populated <code>ItemReceiptActivity</code> instance.
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
      if (data.hasOwnProperty('receiptASNCreateDate')) {
        obj['receiptASNCreateDate'] = ApiClient.convertToType(data['receiptASNCreateDate'], 'Date');
      }
      if (data.hasOwnProperty('receiptModifyDate')) {
        obj['receiptModifyDate'] = ApiClient.convertToType(data['receiptModifyDate'], 'Date');
      }
      if (data.hasOwnProperty('itemReceiptId')) {
        obj['itemReceiptId'] = ApiClient.convertToType(data['itemReceiptId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('poNo')) {
        obj['poNo'] = ApiClient.convertToType(data['poNo'], 'String');
      }
      if (data.hasOwnProperty('receiptDistributionDate')) {
        obj['receiptDistributionDate'] = ApiClient.convertToType(data['receiptDistributionDate'], 'Date');
      }
      if (data.hasOwnProperty('receiptUnitsPerWrap')) {
        obj['receiptUnitsPerWrap'] = ApiClient.convertToType(data['receiptUnitsPerWrap'], 'Integer');
      }
      if (data.hasOwnProperty('receiptUnitsPerCase')) {
        obj['receiptUnitsPerCase'] = ApiClient.convertToType(data['receiptUnitsPerCase'], 'Integer');
      }
      if (data.hasOwnProperty('receiptRevisionDate')) {
        obj['receiptRevisionDate'] = ApiClient.convertToType(data['receiptRevisionDate'], 'String');
      }
      if (data.hasOwnProperty('receiptProductionLot')) {
        obj['receiptProductionLot'] = ApiClient.convertToType(data['receiptProductionLot'], 'String');
      }
      if (data.hasOwnProperty('receiptReceiveDate')) {
        obj['receiptReceiveDate'] = ApiClient.convertToType(data['receiptReceiveDate'], 'Date');
      }
      if (data.hasOwnProperty('receiptReceiveQuantity')) {
        obj['receiptReceiveQuantity'] = ApiClient.convertToType(data['receiptReceiveQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('receiptNumberOfCases')) {
        obj['receiptNumberOfCases'] = ApiClient.convertToType(data['receiptNumberOfCases'], 'Integer');
      }
      if (data.hasOwnProperty('receiptStatus')) {
        obj['receiptStatus'] = ApiClient.convertToType(data['receiptStatus'], 'String');
      }
      if (data.hasOwnProperty('receiptStatusName')) {
        obj['receiptStatusName'] = ApiClient.convertToType(data['receiptStatusName'], 'String');
      }
      if (data.hasOwnProperty('receiptUnitCode')) {
        obj['receiptUnitCode'] = ApiClient.convertToType(data['receiptUnitCode'], 'Integer');
      }
      if (data.hasOwnProperty('receiptUnitCodeText')) {
        obj['receiptUnitCodeText'] = ApiClient.convertToType(data['receiptUnitCodeText'], 'String');
      }
      if (data.hasOwnProperty('receiptWrapCode')) {
        obj['receiptWrapCode'] = ApiClient.convertToType(data['receiptWrapCode'], 'Integer');
      }
      if (data.hasOwnProperty('receiptWrapCodeText')) {
        obj['receiptWrapCodeText'] = ApiClient.convertToType(data['receiptWrapCodeText'], 'String');
      }
      if (data.hasOwnProperty('receiptWrapUnitWeight')) {
        obj['receiptWrapUnitWeight'] = ApiClient.convertToType(data['receiptWrapUnitWeight'], 'Number');
      }
      if (data.hasOwnProperty('receiptCaseWeight')) {
        obj['receiptCaseWeight'] = ApiClient.convertToType(data['receiptCaseWeight'], 'Number');
      }
      if (data.hasOwnProperty('receiptProductIdTag')) {
        obj['receiptProductIdTag'] = ApiClient.convertToType(data['receiptProductIdTag'], 'String');
      }
      if (data.hasOwnProperty('receiptEnteredBy')) {
        obj['receiptEnteredBy'] = ApiClient.convertToType(data['receiptEnteredBy'], 'String');
      }
      if (data.hasOwnProperty('receiptReceivedBy')) {
        obj['receiptReceivedBy'] = ApiClient.convertToType(data['receiptReceivedBy'], 'String');
      }
      if (data.hasOwnProperty('receiptType')) {
        obj['receiptType'] = ApiClient.convertToType(data['receiptType'], 'String');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseName')) {
        obj['warehouseName'] = ApiClient.convertToType(data['warehouseName'], 'String');
      }
      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'Integer');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('itemVendorSku')) {
        obj['itemVendorSku'] = ApiClient.convertToType(data['itemVendorSku'], 'String');
      }
      if (data.hasOwnProperty('itemUPC')) {
        obj['itemUPC'] = ApiClient.convertToType(data['itemUPC'], 'String');
      }
      if (data.hasOwnProperty('itemMajorGroup')) {
        obj['itemMajorGroup'] = ApiClient.convertToType(data['itemMajorGroup'], 'Integer');
      }
      if (data.hasOwnProperty('itemMajorGroupName')) {
        obj['itemMajorGroupName'] = ApiClient.convertToType(data['itemMajorGroupName'], 'String');
      }
      if (data.hasOwnProperty('itemSubGroup')) {
        obj['itemSubGroup'] = ApiClient.convertToType(data['itemSubGroup'], 'Integer');
      }
      if (data.hasOwnProperty('itemSubGroupName')) {
        obj['itemSubGroupName'] = ApiClient.convertToType(data['itemSubGroupName'], 'String');
      }
      if (data.hasOwnProperty('itemProductCode')) {
        obj['itemProductCode'] = ApiClient.convertToType(data['itemProductCode'], 'Integer');
      }
      if (data.hasOwnProperty('itemProductCodeName')) {
        obj['itemProductCodeName'] = ApiClient.convertToType(data['itemProductCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCode')) {
        obj['itemAccountCode'] = ApiClient.convertToType(data['itemAccountCode'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCodeName')) {
        obj['itemAccountCodeName'] = ApiClient.convertToType(data['itemAccountCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemSummaryCode')) {
        obj['itemSummaryCode'] = ApiClient.convertToType(data['itemSummaryCode'], 'Integer');
      }
      if (data.hasOwnProperty('itemSummaryCodeName')) {
        obj['itemSummaryCodeName'] = ApiClient.convertToType(data['itemSummaryCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemSector')) {
        obj['itemSector'] = ApiClient.convertToType(data['itemSector'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer1')) {
        obj['vendorComplianceSurveyAnswer1'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer1'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer2')) {
        obj['vendorComplianceSurveyAnswer2'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer2'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer3')) {
        obj['vendorComplianceSurveyAnswer3'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer3'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer4')) {
        obj['vendorComplianceSurveyAnswer4'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer4'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer5')) {
        obj['vendorComplianceSurveyAnswer5'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer5'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer6')) {
        obj['vendorComplianceSurveyAnswer6'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer6'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer7')) {
        obj['vendorComplianceSurveyAnswer7'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer7'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer8')) {
        obj['vendorComplianceSurveyAnswer8'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer8'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer9')) {
        obj['vendorComplianceSurveyAnswer9'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer9'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer10')) {
        obj['vendorComplianceSurveyAnswer10'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer10'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer11')) {
        obj['vendorComplianceSurveyAnswer11'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer11'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer12')) {
        obj['vendorComplianceSurveyAnswer12'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer12'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer13')) {
        obj['vendorComplianceSurveyAnswer13'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer13'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer14')) {
        obj['vendorComplianceSurveyAnswer14'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer14'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer15')) {
        obj['vendorComplianceSurveyAnswer15'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer15'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer16')) {
        obj['vendorComplianceSurveyAnswer16'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer16'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer17')) {
        obj['vendorComplianceSurveyAnswer17'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer17'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer18')) {
        obj['vendorComplianceSurveyAnswer18'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer18'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer19')) {
        obj['vendorComplianceSurveyAnswer19'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer19'], 'String');
      }
      if (data.hasOwnProperty('vendorComplianceSurveyAnswer20')) {
        obj['vendorComplianceSurveyAnswer20'] = ApiClient.convertToType(data['vendorComplianceSurveyAnswer20'], 'String');
      }
      if (data.hasOwnProperty('alcoholTypeId')) {
        obj['alcoholTypeId'] = ApiClient.convertToType(data['alcoholTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholTypeName')) {
        obj['alcoholTypeName'] = ApiClient.convertToType(data['alcoholTypeName'], 'String');
      }
      if (data.hasOwnProperty('alcoholContent')) {
        obj['alcoholContent'] = ApiClient.convertToType(data['alcoholContent'], 'Number');
      }
      if (data.hasOwnProperty('alcoholContainerId')) {
        obj['alcoholContainerId'] = ApiClient.convertToType(data['alcoholContainerId'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholContainerName')) {
        obj['alcoholContainerName'] = ApiClient.convertToType(data['alcoholContainerName'], 'String');
      }
      if (data.hasOwnProperty('alcoholContainerVolume')) {
        obj['alcoholContainerVolume'] = ApiClient.convertToType(data['alcoholContainerVolume'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholVintageYear')) {
        obj['alcoholVintageYear'] = ApiClient.convertToType(data['alcoholVintageYear'], 'String');
      }
      if (data.hasOwnProperty('alcoholCountryId')) {
        obj['alcoholCountryId'] = ApiClient.convertToType(data['alcoholCountryId'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholCountryName')) {
        obj['alcoholCountryName'] = ApiClient.convertToType(data['alcoholCountryName'], 'String');
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
      if (data.hasOwnProperty('alcoholNABCACode')) {
        obj['alcoholNABCACode'] = ApiClient.convertToType(data['alcoholNABCACode'], 'String');
      }
      if (data.hasOwnProperty('alcoholUNIMERCCode')) {
        obj['alcoholUNIMERCCode'] = ApiClient.convertToType(data['alcoholUNIMERCCode'], 'String');
      }
      if (data.hasOwnProperty('alcoholSCCCode')) {
        obj['alcoholSCCCode'] = ApiClient.convertToType(data['alcoholSCCCode'], 'String');
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
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Date} receiptASNCreateDate
   */
  exports.prototype['receiptASNCreateDate'] = undefined;

  /**
   * @member {Date} receiptModifyDate
   */
  exports.prototype['receiptModifyDate'] = undefined;

  /**
   * @member {Integer} itemReceiptId
   */
  exports.prototype['itemReceiptId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} poNo
   */
  exports.prototype['poNo'] = undefined;

  /**
   * @member {Date} receiptDistributionDate
   */
  exports.prototype['receiptDistributionDate'] = undefined;

  /**
   * @member {Integer} receiptUnitsPerWrap
   */
  exports.prototype['receiptUnitsPerWrap'] = undefined;

  /**
   * @member {Integer} receiptUnitsPerCase
   */
  exports.prototype['receiptUnitsPerCase'] = undefined;

  /**
   * @member {String} receiptRevisionDate
   */
  exports.prototype['receiptRevisionDate'] = undefined;

  /**
   * @member {String} receiptProductionLot
   */
  exports.prototype['receiptProductionLot'] = undefined;

  /**
   * @member {Date} receiptReceiveDate
   */
  exports.prototype['receiptReceiveDate'] = undefined;

  /**
   * @member {Integer} receiptReceiveQuantity
   */
  exports.prototype['receiptReceiveQuantity'] = undefined;

  /**
   * @member {Integer} receiptNumberOfCases
   */
  exports.prototype['receiptNumberOfCases'] = undefined;

  /**
   * @member {String} receiptStatus
   */
  exports.prototype['receiptStatus'] = undefined;

  /**
   * @member {String} receiptStatusName
   */
  exports.prototype['receiptStatusName'] = undefined;

  /**
   * @member {Integer} receiptUnitCode
   */
  exports.prototype['receiptUnitCode'] = undefined;

  /**
   * @member {String} receiptUnitCodeText
   */
  exports.prototype['receiptUnitCodeText'] = undefined;

  /**
   * @member {Integer} receiptWrapCode
   */
  exports.prototype['receiptWrapCode'] = undefined;

  /**
   * @member {String} receiptWrapCodeText
   */
  exports.prototype['receiptWrapCodeText'] = undefined;

  /**
   * @member {Number} receiptWrapUnitWeight
   */
  exports.prototype['receiptWrapUnitWeight'] = undefined;

  /**
   * @member {Number} receiptCaseWeight
   */
  exports.prototype['receiptCaseWeight'] = undefined;

  /**
   * @member {String} receiptProductIdTag
   */
  exports.prototype['receiptProductIdTag'] = undefined;

  /**
   * @member {String} receiptEnteredBy
   */
  exports.prototype['receiptEnteredBy'] = undefined;

  /**
   * @member {String} receiptReceivedBy
   */
  exports.prototype['receiptReceivedBy'] = undefined;

  /**
   * @member {String} receiptType
   */
  exports.prototype['receiptType'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {String} warehouseName
   */
  exports.prototype['warehouseName'] = undefined;

  /**
   * @member {Integer} itemId
   */
  exports.prototype['itemId'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;

  /**
   * @member {String} itemVendorSku
   */
  exports.prototype['itemVendorSku'] = undefined;

  /**
   * @member {String} itemUPC
   */
  exports.prototype['itemUPC'] = undefined;

  /**
   * @member {Integer} itemMajorGroup
   */
  exports.prototype['itemMajorGroup'] = undefined;

  /**
   * @member {String} itemMajorGroupName
   */
  exports.prototype['itemMajorGroupName'] = undefined;

  /**
   * @member {Integer} itemSubGroup
   */
  exports.prototype['itemSubGroup'] = undefined;

  /**
   * @member {String} itemSubGroupName
   */
  exports.prototype['itemSubGroupName'] = undefined;

  /**
   * @member {Integer} itemProductCode
   */
  exports.prototype['itemProductCode'] = undefined;

  /**
   * @member {String} itemProductCodeName
   */
  exports.prototype['itemProductCodeName'] = undefined;

  /**
   * @member {String} itemAccountCode
   */
  exports.prototype['itemAccountCode'] = undefined;

  /**
   * @member {String} itemAccountCodeName
   */
  exports.prototype['itemAccountCodeName'] = undefined;

  /**
   * @member {Integer} itemSummaryCode
   */
  exports.prototype['itemSummaryCode'] = undefined;

  /**
   * @member {String} itemSummaryCodeName
   */
  exports.prototype['itemSummaryCodeName'] = undefined;

  /**
   * @member {String} itemSector
   */
  exports.prototype['itemSector'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer1
   */
  exports.prototype['vendorComplianceSurveyAnswer1'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer2
   */
  exports.prototype['vendorComplianceSurveyAnswer2'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer3
   */
  exports.prototype['vendorComplianceSurveyAnswer3'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer4
   */
  exports.prototype['vendorComplianceSurveyAnswer4'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer5
   */
  exports.prototype['vendorComplianceSurveyAnswer5'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer6
   */
  exports.prototype['vendorComplianceSurveyAnswer6'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer7
   */
  exports.prototype['vendorComplianceSurveyAnswer7'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer8
   */
  exports.prototype['vendorComplianceSurveyAnswer8'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer9
   */
  exports.prototype['vendorComplianceSurveyAnswer9'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer10
   */
  exports.prototype['vendorComplianceSurveyAnswer10'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer11
   */
  exports.prototype['vendorComplianceSurveyAnswer11'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer12
   */
  exports.prototype['vendorComplianceSurveyAnswer12'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer13
   */
  exports.prototype['vendorComplianceSurveyAnswer13'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer14
   */
  exports.prototype['vendorComplianceSurveyAnswer14'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer15
   */
  exports.prototype['vendorComplianceSurveyAnswer15'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer16
   */
  exports.prototype['vendorComplianceSurveyAnswer16'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer17
   */
  exports.prototype['vendorComplianceSurveyAnswer17'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer18
   */
  exports.prototype['vendorComplianceSurveyAnswer18'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer19
   */
  exports.prototype['vendorComplianceSurveyAnswer19'] = undefined;

  /**
   * @member {String} vendorComplianceSurveyAnswer20
   */
  exports.prototype['vendorComplianceSurveyAnswer20'] = undefined;

  /**
   * @member {Integer} alcoholTypeId
   */
  exports.prototype['alcoholTypeId'] = undefined;

  /**
   * @member {String} alcoholTypeName
   */
  exports.prototype['alcoholTypeName'] = undefined;

  /**
   * @member {Number} alcoholContent
   */
  exports.prototype['alcoholContent'] = undefined;

  /**
   * @member {Integer} alcoholContainerId
   */
  exports.prototype['alcoholContainerId'] = undefined;

  /**
   * @member {String} alcoholContainerName
   */
  exports.prototype['alcoholContainerName'] = undefined;

  /**
   * @member {Integer} alcoholContainerVolume
   */
  exports.prototype['alcoholContainerVolume'] = undefined;

  /**
   * @member {String} alcoholVintageYear
   */
  exports.prototype['alcoholVintageYear'] = undefined;

  /**
   * @member {Integer} alcoholCountryId
   */
  exports.prototype['alcoholCountryId'] = undefined;

  /**
   * @member {String} alcoholCountryName
   */
  exports.prototype['alcoholCountryName'] = undefined;

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
   * @member {String} alcoholNABCACode
   */
  exports.prototype['alcoholNABCACode'] = undefined;

  /**
   * @member {String} alcoholUNIMERCCode
   */
  exports.prototype['alcoholUNIMERCCode'] = undefined;

  /**
   * @member {String} alcoholSCCCode
   */
  exports.prototype['alcoholSCCCode'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
