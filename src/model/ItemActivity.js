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
    root.infoplus.ItemActivity = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemActivity model module.
   * @module model/ItemActivity
   * @version beta
   */

  /**
   * Constructs a new <code>ItemActivity</code>.
   * @alias module:model/ItemActivity
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ItemActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemActivity} obj Optional instance to populate.
   * @return {module:model/ItemActivity} The populated <code>ItemActivity</code> instance.
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
      if (data.hasOwnProperty('inventoryChange')) {
        obj['inventoryChange'] = ApiClient.convertToType(data['inventoryChange'], 'Number');
      }
      if (data.hasOwnProperty('activityType')) {
        obj['activityType'] = ApiClient.convertToType(data['activityType'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
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
   * @member {Number} inventoryChange
   */
  exports.prototype['inventoryChange'] = undefined;
  /**
   * @member {String} activityType
   */
  exports.prototype['activityType'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
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


