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
    root.infoplus.FulfillmentProcess = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FulfillmentProcess model module.
   * @module model/FulfillmentProcess
   * @version beta
   */

  /**
   * Constructs a new <code>FulfillmentProcess</code>.
   * @alias module:model/FulfillmentProcess
   * @class
   * @param warehouseId
   * @param fulfillmentPlanId
   * @param pickScanSchemeId
   * @param status
   * @param createPackingSlip
   * @param createOrderInvoice
   * @param sendToExternalShippingSystem
   */
  var exports = function(warehouseId, fulfillmentPlanId, pickScanSchemeId, status, createPackingSlip, createOrderInvoice, sendToExternalShippingSystem) {






    this['warehouseId'] = warehouseId;
    this['fulfillmentPlanId'] = fulfillmentPlanId;
    this['pickScanSchemeId'] = pickScanSchemeId;
    this['status'] = status;

































    this['createPackingSlip'] = createPackingSlip;


    this['createOrderInvoice'] = createOrderInvoice;

    this['sendToExternalShippingSystem'] = sendToExternalShippingSystem;


  };

  /**
   * Constructs a <code>FulfillmentProcess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentProcess} obj Optional instance to populate.
   * @return {module:model/FulfillmentProcess} The populated <code>FulfillmentProcess</code> instance.
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
      if (data.hasOwnProperty('processNo')) {
        obj['processNo'] = ApiClient.convertToType(data['processNo'], 'Integer');
      }
      if (data.hasOwnProperty('workBatchId')) {
        obj['workBatchId'] = ApiClient.convertToType(data['workBatchId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('fulfillmentPlanId')) {
        obj['fulfillmentPlanId'] = ApiClient.convertToType(data['fulfillmentPlanId'], 'Integer');
      }
      if (data.hasOwnProperty('pickScanSchemeId')) {
        obj['pickScanSchemeId'] = ApiClient.convertToType(data['pickScanSchemeId'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('orderSmartFilterId')) {
        obj['orderSmartFilterId'] = ApiClient.convertToType(data['orderSmartFilterId'], 'Integer');
      }
      if (data.hasOwnProperty('locationSmartFilterId')) {
        obj['locationSmartFilterId'] = ApiClient.convertToType(data['locationSmartFilterId'], 'Integer');
      }
      if (data.hasOwnProperty('orderLimit')) {
        obj['orderLimit'] = ApiClient.convertToType(data['orderLimit'], 'Integer');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('numberOfOrders')) {
        obj['numberOfOrders'] = ApiClient.convertToType(data['numberOfOrders'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfLines')) {
        obj['numberOfLines'] = ApiClient.convertToType(data['numberOfLines'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfSKUs')) {
        obj['numberOfSKUs'] = ApiClient.convertToType(data['numberOfSKUs'], 'Integer');
      }
      if (data.hasOwnProperty('completedPicks')) {
        obj['completedPicks'] = ApiClient.convertToType(data['completedPicks'], 'Integer');
      }
      if (data.hasOwnProperty('totalPicks')) {
        obj['totalPicks'] = ApiClient.convertToType(data['totalPicks'], 'Integer');
      }
      if (data.hasOwnProperty('shippedCasebreaks')) {
        obj['shippedCasebreaks'] = ApiClient.convertToType(data['shippedCasebreaks'], 'Integer');
      }
      if (data.hasOwnProperty('totalCasebreaksToShip')) {
        obj['totalCasebreaksToShip'] = ApiClient.convertToType(data['totalCasebreaksToShip'], 'Integer');
      }
      if (data.hasOwnProperty('shippedOrders')) {
        obj['shippedOrders'] = ApiClient.convertToType(data['shippedOrders'], 'Integer');
      }
      if (data.hasOwnProperty('totalOrdersToShip')) {
        obj['totalOrdersToShip'] = ApiClient.convertToType(data['totalOrdersToShip'], 'Integer');
      }
      if (data.hasOwnProperty('completedToDo')) {
        obj['completedToDo'] = ApiClient.convertToType(data['completedToDo'], 'Integer');
      }
      if (data.hasOwnProperty('totalToDo')) {
        obj['totalToDo'] = ApiClient.convertToType(data['totalToDo'], 'Integer');
      }
      if (data.hasOwnProperty('createPickWork')) {
        obj['createPickWork'] = ApiClient.convertToType(data['createPickWork'], 'Boolean');
      }
      if (data.hasOwnProperty('pickingRule')) {
        obj['pickingRule'] = ApiClient.convertToType(data['pickingRule'], 'String');
      }
      if (data.hasOwnProperty('layoutRule')) {
        obj['layoutRule'] = ApiClient.convertToType(data['layoutRule'], 'String');
      }
      if (data.hasOwnProperty('pickSortRule')) {
        obj['pickSortRule'] = ApiClient.convertToType(data['pickSortRule'], 'String');
      }
      if (data.hasOwnProperty('firstPickPosition')) {
        obj['firstPickPosition'] = ApiClient.convertToType(data['firstPickPosition'], 'Integer');
      }
      if (data.hasOwnProperty('pickListFormat')) {
        obj['pickListFormat'] = ApiClient.convertToType(data['pickListFormat'], 'String');
      }
      if (data.hasOwnProperty('pickListLayout')) {
        obj['pickListLayout'] = ApiClient.convertToType(data['pickListLayout'], 'String');
      }
      if (data.hasOwnProperty('pickListGroup')) {
        obj['pickListGroup'] = ApiClient.convertToType(data['pickListGroup'], 'String');
      }
      if (data.hasOwnProperty('pickListSort')) {
        obj['pickListSort'] = ApiClient.convertToType(data['pickListSort'], 'String');
      }
      if (data.hasOwnProperty('pickSummaryFormat')) {
        obj['pickSummaryFormat'] = ApiClient.convertToType(data['pickSummaryFormat'], 'String');
      }
      if (data.hasOwnProperty('pickSummaryLayout')) {
        obj['pickSummaryLayout'] = ApiClient.convertToType(data['pickSummaryLayout'], 'String');
      }
      if (data.hasOwnProperty('pickSummarySort')) {
        obj['pickSummarySort'] = ApiClient.convertToType(data['pickSummarySort'], 'String');
      }
      if (data.hasOwnProperty('createPickSummary')) {
        obj['createPickSummary'] = ApiClient.convertToType(data['createPickSummary'], 'Boolean');
      }
      if (data.hasOwnProperty('createPickList')) {
        obj['createPickList'] = ApiClient.convertToType(data['createPickList'], 'Boolean');
      }
      if (data.hasOwnProperty('preGenerateParcelLabels')) {
        obj['preGenerateParcelLabels'] = ApiClient.convertToType(data['preGenerateParcelLabels'], 'Boolean');
      }
      if (data.hasOwnProperty('shipDate')) {
        obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'Date');
      }
      if (data.hasOwnProperty('autoShipCasebreakCartons')) {
        obj['autoShipCasebreakCartons'] = ApiClient.convertToType(data['autoShipCasebreakCartons'], 'Boolean');
      }
      if (data.hasOwnProperty('cartonizeOrders')) {
        obj['cartonizeOrders'] = ApiClient.convertToType(data['cartonizeOrders'], 'Boolean');
      }
      if (data.hasOwnProperty('createPackingSlip')) {
        obj['createPackingSlip'] = ApiClient.convertToType(data['createPackingSlip'], 'String');
      }
      if (data.hasOwnProperty('overridePackingSlipTemplateId')) {
        obj['overridePackingSlipTemplateId'] = ApiClient.convertToType(data['overridePackingSlipTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('createOrderAssemblyGuide')) {
        obj['createOrderAssemblyGuide'] = ApiClient.convertToType(data['createOrderAssemblyGuide'], 'Boolean');
      }
      if (data.hasOwnProperty('createOrderInvoice')) {
        obj['createOrderInvoice'] = ApiClient.convertToType(data['createOrderInvoice'], 'String');
      }
      if (data.hasOwnProperty('overrideOrderInvoiceTemplateId')) {
        obj['overrideOrderInvoiceTemplateId'] = ApiClient.convertToType(data['overrideOrderInvoiceTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('sendToExternalShippingSystem')) {
        obj['sendToExternalShippingSystem'] = ApiClient.convertToType(data['sendToExternalShippingSystem'], 'Boolean');
      }
      if (data.hasOwnProperty('externalShippingSystemId')) {
        obj['externalShippingSystemId'] = ApiClient.convertToType(data['externalShippingSystemId'], 'Integer');
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
   * @member {Integer} processNo
   */
  exports.prototype['processNo'] = undefined;

  /**
   * @member {Integer} workBatchId
   */
  exports.prototype['workBatchId'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} fulfillmentPlanId
   */
  exports.prototype['fulfillmentPlanId'] = undefined;

  /**
   * @member {Integer} pickScanSchemeId
   */
  exports.prototype['pickScanSchemeId'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Integer} orderSmartFilterId
   */
  exports.prototype['orderSmartFilterId'] = undefined;

  /**
   * @member {Integer} locationSmartFilterId
   */
  exports.prototype['locationSmartFilterId'] = undefined;

  /**
   * @member {Integer} orderLimit
   */
  exports.prototype['orderLimit'] = undefined;

  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;

  /**
   * @member {Integer} numberOfOrders
   */
  exports.prototype['numberOfOrders'] = undefined;

  /**
   * @member {Integer} numberOfLines
   */
  exports.prototype['numberOfLines'] = undefined;

  /**
   * @member {Integer} numberOfSKUs
   */
  exports.prototype['numberOfSKUs'] = undefined;

  /**
   * @member {Integer} completedPicks
   */
  exports.prototype['completedPicks'] = undefined;

  /**
   * @member {Integer} totalPicks
   */
  exports.prototype['totalPicks'] = undefined;

  /**
   * @member {Integer} shippedCasebreaks
   */
  exports.prototype['shippedCasebreaks'] = undefined;

  /**
   * @member {Integer} totalCasebreaksToShip
   */
  exports.prototype['totalCasebreaksToShip'] = undefined;

  /**
   * @member {Integer} shippedOrders
   */
  exports.prototype['shippedOrders'] = undefined;

  /**
   * @member {Integer} totalOrdersToShip
   */
  exports.prototype['totalOrdersToShip'] = undefined;

  /**
   * @member {Integer} completedToDo
   */
  exports.prototype['completedToDo'] = undefined;

  /**
   * @member {Integer} totalToDo
   */
  exports.prototype['totalToDo'] = undefined;

  /**
   * @member {Boolean} createPickWork
   * @default false
   */
  exports.prototype['createPickWork'] = false;

  /**
   * @member {String} pickingRule
   */
  exports.prototype['pickingRule'] = undefined;

  /**
   * @member {String} layoutRule
   */
  exports.prototype['layoutRule'] = undefined;

  /**
   * @member {String} pickSortRule
   */
  exports.prototype['pickSortRule'] = undefined;

  /**
   * @member {Integer} firstPickPosition
   */
  exports.prototype['firstPickPosition'] = undefined;

  /**
   * @member {String} pickListFormat
   */
  exports.prototype['pickListFormat'] = undefined;

  /**
   * @member {String} pickListLayout
   */
  exports.prototype['pickListLayout'] = undefined;

  /**
   * @member {String} pickListGroup
   */
  exports.prototype['pickListGroup'] = undefined;

  /**
   * @member {String} pickListSort
   */
  exports.prototype['pickListSort'] = undefined;

  /**
   * @member {String} pickSummaryFormat
   */
  exports.prototype['pickSummaryFormat'] = undefined;

  /**
   * @member {String} pickSummaryLayout
   */
  exports.prototype['pickSummaryLayout'] = undefined;

  /**
   * @member {String} pickSummarySort
   */
  exports.prototype['pickSummarySort'] = undefined;

  /**
   * @member {Boolean} createPickSummary
   * @default false
   */
  exports.prototype['createPickSummary'] = false;

  /**
   * @member {Boolean} createPickList
   * @default false
   */
  exports.prototype['createPickList'] = false;

  /**
   * @member {Boolean} preGenerateParcelLabels
   * @default false
   */
  exports.prototype['preGenerateParcelLabels'] = false;

  /**
   * @member {Date} shipDate
   */
  exports.prototype['shipDate'] = undefined;

  /**
   * @member {Boolean} autoShipCasebreakCartons
   * @default false
   */
  exports.prototype['autoShipCasebreakCartons'] = false;

  /**
   * @member {Boolean} cartonizeOrders
   * @default false
   */
  exports.prototype['cartonizeOrders'] = false;

  /**
   * @member {String} createPackingSlip
   */
  exports.prototype['createPackingSlip'] = undefined;

  /**
   * @member {Integer} overridePackingSlipTemplateId
   */
  exports.prototype['overridePackingSlipTemplateId'] = undefined;

  /**
   * @member {Boolean} createOrderAssemblyGuide
   * @default false
   */
  exports.prototype['createOrderAssemblyGuide'] = false;

  /**
   * @member {String} createOrderInvoice
   */
  exports.prototype['createOrderInvoice'] = undefined;

  /**
   * @member {Integer} overrideOrderInvoiceTemplateId
   */
  exports.prototype['overrideOrderInvoiceTemplateId'] = undefined;

  /**
   * @member {Boolean} sendToExternalShippingSystem
   * @default false
   */
  exports.prototype['sendToExternalShippingSystem'] = false;

  /**
   * @member {Integer} externalShippingSystemId
   */
  exports.prototype['externalShippingSystemId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
