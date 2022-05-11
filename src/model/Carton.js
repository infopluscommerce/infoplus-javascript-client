/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: v3.0
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
    root.infoplus.Carton = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Carton model module.
   * @module model/Carton
   * @version v3.0
   */

  /**
   * Constructs a new <code>Carton</code>.
   * @alias module:model/Carton
   * @class
   * @param orderNo {Number} 
   * @param cartonNo {Number} 
   * @param cartonTypeId {Number} 
   * @param lobId {Number} 
   */
  var exports = function(orderNo, cartonNo, cartonTypeId, lobId) {
    var _this = this;


    _this['orderNo'] = orderNo;
    _this['cartonNo'] = cartonNo;
    _this['cartonTypeId'] = cartonTypeId;



    _this['lobId'] = lobId;

  };

  /**
   * Constructs a <code>Carton</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Carton} obj Optional instance to populate.
   * @return {module:model/Carton} The populated <code>Carton</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('cartonNo')) {
        obj['cartonNo'] = ApiClient.convertToType(data['cartonNo'], 'Number');
      }
      if (data.hasOwnProperty('cartonTypeId')) {
        obj['cartonTypeId'] = ApiClient.convertToType(data['cartonTypeId'], 'Number');
      }
      if (data.hasOwnProperty('cartonLPN')) {
        obj['cartonLPN'] = ApiClient.convertToType(data['cartonLPN'], 'String');
      }
      if (data.hasOwnProperty('weightLbs')) {
        obj['weightLbs'] = ApiClient.convertToType(data['weightLbs'], 'Number');
      }
      if (data.hasOwnProperty('layoutPosition')) {
        obj['layoutPosition'] = ApiClient.convertToType(data['layoutPosition'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
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
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;
  /**
   * @member {Number} cartonNo
   */
  exports.prototype['cartonNo'] = undefined;
  /**
   * @member {Number} cartonTypeId
   */
  exports.prototype['cartonTypeId'] = undefined;
  /**
   * @member {String} cartonLPN
   */
  exports.prototype['cartonLPN'] = undefined;
  /**
   * @member {Number} weightLbs
   */
  exports.prototype['weightLbs'] = undefined;
  /**
   * @member {String} layoutPosition
   */
  exports.prototype['layoutPosition'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


