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
    root.infoplus.CustomerInvoiceTemplateLine = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerInvoiceTemplateLine model module.
   * @module model/CustomerInvoiceTemplateLine
   * @version beta
   */

  /**
   * Constructs a new <code>CustomerInvoiceTemplateLine</code>.
   * @alias module:model/CustomerInvoiceTemplateLine
   * @class
   * @param lobId
   * @param active
   * @param includeIfZero
   * @param billingRuleId
   * @param priceLevelMode
   */
  var exports = function(lobId, active, includeIfZero, billingRuleId, priceLevelMode) {




    this['lobId'] = lobId;



    this['active'] = active;
    this['includeIfZero'] = includeIfZero;



    this['billingRuleId'] = billingRuleId;
    this['priceLevelMode'] = priceLevelMode;


  };

  /**
   * Constructs a <code>CustomerInvoiceTemplateLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerInvoiceTemplateLine} obj Optional instance to populate.
   * @return {module:model/CustomerInvoiceTemplateLine} The populated <code>CustomerInvoiceTemplateLine</code> instance.
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
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('seqNo')) {
        obj['seqNo'] = ApiClient.convertToType(data['seqNo'], 'Integer');
      }
      if (data.hasOwnProperty('accountCode')) {
        obj['accountCode'] = ApiClient.convertToType(data['accountCode'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('includeIfZero')) {
        obj['includeIfZero'] = ApiClient.convertToType(data['includeIfZero'], 'Boolean');
      }
      if (data.hasOwnProperty('department')) {
        obj['department'] = ApiClient.convertToType(data['department'], 'String');
      }
      if (data.hasOwnProperty('itemCode')) {
        obj['itemCode'] = ApiClient.convertToType(data['itemCode'], 'String');
      }
      if (data.hasOwnProperty('invoiceTemplateId')) {
        obj['invoiceTemplateId'] = ApiClient.convertToType(data['invoiceTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('billingRuleId')) {
        obj['billingRuleId'] = ApiClient.convertToType(data['billingRuleId'], 'Integer');
      }
      if (data.hasOwnProperty('priceLevelMode')) {
        obj['priceLevelMode'] = ApiClient.convertToType(data['priceLevelMode'], 'String');
      }
      if (data.hasOwnProperty('scriptId')) {
        obj['scriptId'] = ApiClient.convertToType(data['scriptId'], 'Integer');
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
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {Integer} seqNo
   */
  exports.prototype['seqNo'] = undefined;

  /**
   * @member {String} accountCode
   */
  exports.prototype['accountCode'] = undefined;

  /**
   * @member {Boolean} active
   * @default false
   */
  exports.prototype['active'] = false;

  /**
   * @member {Boolean} includeIfZero
   * @default false
   */
  exports.prototype['includeIfZero'] = false;

  /**
   * @member {String} department
   */
  exports.prototype['department'] = undefined;

  /**
   * @member {String} itemCode
   */
  exports.prototype['itemCode'] = undefined;

  /**
   * @member {Integer} invoiceTemplateId
   */
  exports.prototype['invoiceTemplateId'] = undefined;

  /**
   * @member {Integer} billingRuleId
   */
  exports.prototype['billingRuleId'] = undefined;

  /**
   * @member {String} priceLevelMode
   */
  exports.prototype['priceLevelMode'] = undefined;

  /**
   * @member {Integer} scriptId
   */
  exports.prototype['scriptId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
