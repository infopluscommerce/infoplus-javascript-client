/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ParcelAccount = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ParcelAccount model module.
   * @module model/ParcelAccount
   * @version beta
   */

  /**
   * Constructs a new <code>ParcelAccount</code>.
   * @alias module:model/ParcelAccount
   * @class
   * @param carrierCompany {String} 
   * @param accountNo {String} 
   * @param name {String} 
   * @param manifestPartnerId {String} 
   * @param manifestPartnerCredentials {String} 
   */
  var exports = function(carrierCompany, accountNo, name, manifestPartnerId, manifestPartnerCredentials) {
    var _this = this;




    _this['carrierCompany'] = carrierCompany;
    _this['accountNo'] = accountNo;




    _this['name'] = name;

    _this['manifestPartnerId'] = manifestPartnerId;
    _this['manifestPartnerCredentials'] = manifestPartnerCredentials;

  };

  /**
   * Constructs a <code>ParcelAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelAccount} obj Optional instance to populate.
   * @return {module:model/ParcelAccount} The populated <code>ParcelAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('carrierCompany')) {
        obj['carrierCompany'] = ApiClient.convertToType(data['carrierCompany'], 'String');
      }
      if (data.hasOwnProperty('accountNo')) {
        obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('orderSourceId')) {
        obj['orderSourceId'] = ApiClient.convertToType(data['orderSourceId'], 'Number');
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'Number');
      }
      if (data.hasOwnProperty('ipcDatabaseId')) {
        obj['ipcDatabaseId'] = ApiClient.convertToType(data['ipcDatabaseId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('manifestPartner')) {
        obj['manifestPartner'] = ApiClient.convertToType(data['manifestPartner'], 'Number');
      }
      if (data.hasOwnProperty('manifestPartnerId')) {
        obj['manifestPartnerId'] = ApiClient.convertToType(data['manifestPartnerId'], 'String');
      }
      if (data.hasOwnProperty('manifestPartnerCredentials')) {
        obj['manifestPartnerCredentials'] = ApiClient.convertToType(data['manifestPartnerCredentials'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
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
   * @member {String} carrierCompany
   */
  exports.prototype['carrierCompany'] = undefined;
  /**
   * @member {String} accountNo
   */
  exports.prototype['accountNo'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Number} orderSourceId
   */
  exports.prototype['orderSourceId'] = undefined;
  /**
   * @member {Number} client
   */
  exports.prototype['client'] = undefined;
  /**
   * @member {Number} ipcDatabaseId
   */
  exports.prototype['ipcDatabaseId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} manifestPartner
   */
  exports.prototype['manifestPartner'] = undefined;
  /**
   * @member {String} manifestPartnerId
   */
  exports.prototype['manifestPartnerId'] = undefined;
  /**
   * @member {String} manifestPartnerCredentials
   */
  exports.prototype['manifestPartnerCredentials'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


