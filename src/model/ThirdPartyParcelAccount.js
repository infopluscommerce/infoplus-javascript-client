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
    root.infoplus.ThirdPartyParcelAccount = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ThirdPartyParcelAccount model module.
   * @module model/ThirdPartyParcelAccount
   * @version beta
   */

  /**
   * Constructs a new <code>ThirdPartyParcelAccount</code>.
   * @alias module:model/ThirdPartyParcelAccount
   * @class
   * @param lobId
   * @param carrier
   * @param accountNo
   * @param accountName
   * @param billingCompany
   * @param street1
   * @param city
   * @param state
   * @param zipCode
   * @param active
   */
  var exports = function(lobId, carrier, accountNo, accountName, billingCompany, street1, city, state, zipCode, active) {


    this['lobId'] = lobId;
    this['carrier'] = carrier;
    this['accountNo'] = accountNo;
    this['accountName'] = accountName;
    this['billingCompany'] = billingCompany;

    this['street1'] = street1;


    this['city'] = city;
    this['state'] = state;

    this['zipCode'] = zipCode;

    this['active'] = active;



  };

  /**
   * Constructs a <code>ThirdPartyParcelAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThirdPartyParcelAccount} obj Optional instance to populate.
   * @return {module:model/ThirdPartyParcelAccount} The populated <code>ThirdPartyParcelAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
      }
      if (data.hasOwnProperty('accountNo')) {
        obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'String');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('billingCompany')) {
        obj['billingCompany'] = ApiClient.convertToType(data['billingCompany'], 'String');
      }
      if (data.hasOwnProperty('attention')) {
        obj['attention'] = ApiClient.convertToType(data['attention'], 'String');
      }
      if (data.hasOwnProperty('street1')) {
        obj['street1'] = ApiClient.convertToType(data['street1'], 'String');
      }
      if (data.hasOwnProperty('street2')) {
        obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
      }
      if (data.hasOwnProperty('street3')) {
        obj['street3'] = ApiClient.convertToType(data['street3'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
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
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} carrier
   */
  exports.prototype['carrier'] = undefined;

  /**
   * @member {String} accountNo
   */
  exports.prototype['accountNo'] = undefined;

  /**
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;

  /**
   * @member {String} billingCompany
   */
  exports.prototype['billingCompany'] = undefined;

  /**
   * @member {String} attention
   */
  exports.prototype['attention'] = undefined;

  /**
   * @member {String} street1
   */
  exports.prototype['street1'] = undefined;

  /**
   * @member {String} street2
   */
  exports.prototype['street2'] = undefined;

  /**
   * @member {String} street3
   */
  exports.prototype['street3'] = undefined;

  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;

  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * @member {String} active
   */
  exports.prototype['active'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
