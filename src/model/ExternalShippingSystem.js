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
    root.infoplus.ExternalShippingSystem = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExternalShippingSystem model module.
   * @module model/ExternalShippingSystem
   * @version v2.0
   */

  /**
   * Constructs a new <code>ExternalShippingSystem</code>.
   * @alias module:model/ExternalShippingSystem
   * @class
   * @param name
   * @param systemType
   * @param apiKey
   * @param apiSecret
   */
  var exports = function(name, systemType, apiKey, apiSecret) {


    this['name'] = name;
    this['systemType'] = systemType;
    this['apiKey'] = apiKey;
    this['apiSecret'] = apiSecret;



  };

  /**
   * Constructs a <code>ExternalShippingSystem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalShippingSystem} obj Optional instance to populate.
   * @return {module:model/ExternalShippingSystem} The populated <code>ExternalShippingSystem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('systemType')) {
        obj['systemType'] = ApiClient.convertToType(data['systemType'], 'String');
      }
      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
      }
      if (data.hasOwnProperty('apiSecret')) {
        obj['apiSecret'] = ApiClient.convertToType(data['apiSecret'], 'String');
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
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} systemType
   */
  exports.prototype['systemType'] = undefined;

  /**
   * @member {String} apiKey
   */
  exports.prototype['apiKey'] = undefined;

  /**
   * @member {String} apiSecret
   */
  exports.prototype['apiSecret'] = undefined;

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
