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
    root.infoplus.BillingCodeActivity = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BillingCodeActivity model module.
   * @module model/BillingCodeActivity
   * @version beta
   */

  /**
   * Constructs a new <code>BillingCodeActivity</code>.
   * @alias module:model/BillingCodeActivity
   * @class
   * @param quantity
   * @param lobId
   * @param userId
   * @param billingCodeTypeId
   */
  var exports = function(quantity, lobId, userId, billingCodeTypeId) {






    this['quantity'] = quantity;
    this['lobId'] = lobId;
    this['userId'] = userId;

    this['billingCodeTypeId'] = billingCodeTypeId;






  };

  /**
   * Constructs a <code>BillingCodeActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingCodeActivity} obj Optional instance to populate.
   * @return {module:model/BillingCodeActivity} The populated <code>BillingCodeActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('importedId')) {
        obj['importedId'] = ApiClient.convertToType(data['importedId'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('billingCodeTypeId')) {
        obj['billingCodeTypeId'] = ApiClient.convertToType(data['billingCodeTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('billingCodeTypeName')) {
        obj['billingCodeTypeName'] = ApiClient.convertToType(data['billingCodeTypeName'], 'String');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('recordTypeName')) {
        obj['recordTypeName'] = ApiClient.convertToType(data['recordTypeName'], 'String');
      }
      if (data.hasOwnProperty('recordTypeId')) {
        obj['recordTypeId'] = ApiClient.convertToType(data['recordTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('recordId')) {
        obj['recordId'] = ApiClient.convertToType(data['recordId'], 'String');
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
   * @member {Integer} importedId
   */
  exports.prototype['importedId'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {Integer} billingCodeTypeId
   */
  exports.prototype['billingCodeTypeId'] = undefined;

  /**
   * @member {String} billingCodeTypeName
   */
  exports.prototype['billingCodeTypeName'] = undefined;

  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;

  /**
   * @member {String} recordTypeName
   */
  exports.prototype['recordTypeName'] = undefined;

  /**
   * @member {Integer} recordTypeId
   */
  exports.prototype['recordTypeId'] = undefined;

  /**
   * @member {String} recordId
   */
  exports.prototype['recordId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
