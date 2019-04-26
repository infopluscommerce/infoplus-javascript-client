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
    root.infoplus.ReqParcelAccessoryData = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReqParcelAccessoryData model module.
   * @module model/ReqParcelAccessoryData
   * @version beta
   */

  /**
   * Constructs a new <code>ReqParcelAccessoryData</code>.
   * @alias module:model/ReqParcelAccessoryData
   * @class
   * @param accessory {String} 
   */
  var exports = function(accessory) {
    var _this = this;

    _this['accessory'] = accessory;


  };

  /**
   * Constructs a <code>ReqParcelAccessoryData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReqParcelAccessoryData} obj Optional instance to populate.
   * @return {module:model/ReqParcelAccessoryData} The populated <code>ReqParcelAccessoryData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessory')) {
        obj['accessory'] = ApiClient.convertToType(data['accessory'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {String} accessory
   */
  exports.prototype['accessory'] = undefined;
  /**
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


