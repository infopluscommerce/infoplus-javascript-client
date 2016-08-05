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
    root.infoplus.FulfillmentPlan = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FulfillmentPlan model module.
   * @module model/FulfillmentPlan
   * @version beta
   */

  /**
   * Constructs a new <code>FulfillmentPlan</code>.
   * @alias module:model/FulfillmentPlan
   * @class
   * @param name
   * @param warehouseId
   * @param orderSmartFilterId
   * @param createPickWork
   * @param pickScanSchemeId
   * @param cartonizeOrders
   * @param createPackingSlip
   */
  var exports = function(name, warehouseId, orderSmartFilterId, createPickWork, pickScanSchemeId, cartonizeOrders, createPackingSlip) {




    this['name'] = name;

    this['warehouseId'] = warehouseId;
    this['orderSmartFilterId'] = orderSmartFilterId;


    this['createPickWork'] = createPickWork;












    this['pickScanSchemeId'] = pickScanSchemeId;
    this['cartonizeOrders'] = cartonizeOrders;



    this['createPackingSlip'] = createPackingSlip;


  };

  /**
   * Constructs a <code>FulfillmentPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentPlan} obj Optional instance to populate.
   * @return {module:model/FulfillmentPlan} The populated <code>FulfillmentPlan</code> instance.
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
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('orderSmartFilterId')) {
        obj['orderSmartFilterId'] = ApiClient.convertToType(data['orderSmartFilterId'], 'Integer');
      }
      if (data.hasOwnProperty('locationSmartFilterId')) {
        obj['locationSmartFilterId'] = ApiClient.convertToType(data['locationSmartFilterId'], 'Integer');
      }
      if (data.hasOwnProperty('maximumNumberOfOrders')) {
        obj['maximumNumberOfOrders'] = ApiClient.convertToType(data['maximumNumberOfOrders'], 'Integer');
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
      if (data.hasOwnProperty('createPickList')) {
        obj['createPickList'] = ApiClient.convertToType(data['createPickList'], 'Boolean');
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
      if (data.hasOwnProperty('createPickSummary')) {
        obj['createPickSummary'] = ApiClient.convertToType(data['createPickSummary'], 'Boolean');
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
      if (data.hasOwnProperty('pickScanSchemeId')) {
        obj['pickScanSchemeId'] = ApiClient.convertToType(data['pickScanSchemeId'], 'Integer');
      }
      if (data.hasOwnProperty('cartonizeOrders')) {
        obj['cartonizeOrders'] = ApiClient.convertToType(data['cartonizeOrders'], 'Boolean');
      }
      if (data.hasOwnProperty('autoShipCasebreakCartons')) {
        obj['autoShipCasebreakCartons'] = ApiClient.convertToType(data['autoShipCasebreakCartons'], 'Boolean');
      }
      if (data.hasOwnProperty('preGenerateParcelLabels')) {
        obj['preGenerateParcelLabels'] = ApiClient.convertToType(data['preGenerateParcelLabels'], 'Boolean');
      }
      if (data.hasOwnProperty('overridePackingSlipTemplateId')) {
        obj['overridePackingSlipTemplateId'] = ApiClient.convertToType(data['overridePackingSlipTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('createPackingSlip')) {
        obj['createPackingSlip'] = ApiClient.convertToType(data['createPackingSlip'], 'Boolean');
      }
      if (data.hasOwnProperty('createOrderAssemblyGuide')) {
        obj['createOrderAssemblyGuide'] = ApiClient.convertToType(data['createOrderAssemblyGuide'], 'Boolean');
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
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} orderSmartFilterId
   */
  exports.prototype['orderSmartFilterId'] = undefined;

  /**
   * @member {Integer} locationSmartFilterId
   */
  exports.prototype['locationSmartFilterId'] = undefined;

  /**
   * @member {Integer} maximumNumberOfOrders
   */
  exports.prototype['maximumNumberOfOrders'] = undefined;

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
   * @member {Boolean} createPickList
   * @default false
   */
  exports.prototype['createPickList'] = false;

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
   * @member {Boolean} createPickSummary
   * @default false
   */
  exports.prototype['createPickSummary'] = false;

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
   * @member {Integer} pickScanSchemeId
   */
  exports.prototype['pickScanSchemeId'] = undefined;

  /**
   * @member {Boolean} cartonizeOrders
   * @default false
   */
  exports.prototype['cartonizeOrders'] = false;

  /**
   * @member {Boolean} autoShipCasebreakCartons
   * @default false
   */
  exports.prototype['autoShipCasebreakCartons'] = false;

  /**
   * @member {Boolean} preGenerateParcelLabels
   * @default false
   */
  exports.prototype['preGenerateParcelLabels'] = false;

  /**
   * @member {Integer} overridePackingSlipTemplateId
   */
  exports.prototype['overridePackingSlipTemplateId'] = undefined;

  /**
   * @member {Boolean} createPackingSlip
   * @default false
   */
  exports.prototype['createPackingSlip'] = false;

  /**
   * @member {Boolean} createOrderAssemblyGuide
   * @default false
   */
  exports.prototype['createOrderAssemblyGuide'] = false;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
