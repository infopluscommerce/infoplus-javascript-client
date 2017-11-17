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
    root.infoplus.PickFaceAssignment = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PickFaceAssignment model module.
   * @module model/PickFaceAssignment
   * @version v2.0
   */

  /**
   * Constructs a new <code>PickFaceAssignment</code>.
   * @alias module:model/PickFaceAssignment
   * @class
   * @param warehouseId
   * @param locationId
   * @param replenishmentPoint
   * @param maxQuantity
   * @param active
   */
  var exports = function(warehouseId, locationId, replenishmentPoint, maxQuantity, active) {


    this['warehouseId'] = warehouseId;
    this['locationId'] = locationId;
    this['replenishmentPoint'] = replenishmentPoint;
    this['maxQuantity'] = maxQuantity;
    this['active'] = active;




  };

  /**
   * Constructs a <code>PickFaceAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PickFaceAssignment} obj Optional instance to populate.
   * @return {module:model/PickFaceAssignment} The populated <code>PickFaceAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'Integer');
      }
      if (data.hasOwnProperty('replenishmentPoint')) {
        obj['replenishmentPoint'] = ApiClient.convertToType(data['replenishmentPoint'], 'Integer');
      }
      if (data.hasOwnProperty('maxQuantity')) {
        obj['maxQuantity'] = ApiClient.convertToType(data['maxQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
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
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} locationId
   */
  exports.prototype['locationId'] = undefined;

  /**
   * @member {Integer} replenishmentPoint
   */
  exports.prototype['replenishmentPoint'] = undefined;

  /**
   * @member {Integer} maxQuantity
   */
  exports.prototype['maxQuantity'] = undefined;

  /**
   * @member {Boolean} active
   * @default false
   */
  exports.prototype['active'] = false;

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

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;




  return exports;
}));
