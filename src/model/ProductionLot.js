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
    root.infoplus.ProductionLot = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductionLot model module.
   * @module model/ProductionLot
   * @version v3.0
   */

  /**
   * Constructs a new <code>ProductionLot</code>.
   * @alias module:model/ProductionLot
   * @class
   * @param productionLot {String} 
   * @param quantity {Number} 
   */
  var exports = function(productionLot, quantity) {
    var _this = this;



    _this['productionLot'] = productionLot;
    _this['quantity'] = quantity;


  };

  /**
   * Constructs a <code>ProductionLot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductionLot} obj Optional instance to populate.
   * @return {module:model/ProductionLot} The populated <code>ProductionLot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('productionLot')) {
        obj['productionLot'] = ApiClient.convertToType(data['productionLot'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {String} productionLot
   */
  exports.prototype['productionLot'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;



  return exports;
}));


