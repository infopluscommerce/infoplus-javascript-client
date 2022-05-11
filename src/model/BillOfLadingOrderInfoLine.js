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
    root.infoplus.BillOfLadingOrderInfoLine = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BillOfLadingOrderInfoLine model module.
   * @module model/BillOfLadingOrderInfoLine
   * @version v3.0
   */

  /**
   * Constructs a new <code>BillOfLadingOrderInfoLine</code>.
   * @alias module:model/BillOfLadingOrderInfoLine
   * @class
   * @param additionalShipperInfo {String} 
   */
  var exports = function(additionalShipperInfo) {
    var _this = this;





    _this['additionalShipperInfo'] = additionalShipperInfo;

  };

  /**
   * Constructs a <code>BillOfLadingOrderInfoLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillOfLadingOrderInfoLine} obj Optional instance to populate.
   * @return {module:model/BillOfLadingOrderInfoLine} The populated <code>BillOfLadingOrderInfoLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customerOrderNo')) {
        obj['customerOrderNo'] = ApiClient.convertToType(data['customerOrderNo'], 'String');
      }
      if (data.hasOwnProperty('noPackages')) {
        obj['noPackages'] = ApiClient.convertToType(data['noPackages'], 'Number');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('palletslip')) {
        obj['palletslip'] = ApiClient.convertToType(data['palletslip'], 'Boolean');
      }
      if (data.hasOwnProperty('additionalShipperInfo')) {
        obj['additionalShipperInfo'] = ApiClient.convertToType(data['additionalShipperInfo'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {String} customerOrderNo
   */
  exports.prototype['customerOrderNo'] = undefined;
  /**
   * @member {Number} noPackages
   */
  exports.prototype['noPackages'] = undefined;
  /**
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * @member {Boolean} palletslip
   * @default false
   */
  exports.prototype['palletslip'] = false;
  /**
   * @member {String} additionalShipperInfo
   */
  exports.prototype['additionalShipperInfo'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


