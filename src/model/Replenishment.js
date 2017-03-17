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
    root.infoplus.Replenishment = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Replenishment model module.
   * @module model/Replenishment
   * @version beta
   */

  /**
   * Constructs a new <code>Replenishment</code>.
   * @alias module:model/Replenishment
   * @class
   * @param locationId
   */
  var exports = function(locationId) {






    this['locationId'] = locationId;



  };

  /**
   * Constructs a <code>Replenishment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Replenishment} obj Optional instance to populate.
   * @return {module:model/Replenishment} The populated <code>Replenishment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('replenishmentProcess')) {
        obj['replenishmentProcess'] = ApiClient.convertToType(data['replenishmentProcess'], 'Integer');
      }
      if (data.hasOwnProperty('pickFaceAssignment')) {
        obj['pickFaceAssignment'] = ApiClient.convertToType(data['pickFaceAssignment'], 'Integer');
      }
      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'Integer');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
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
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} replenishmentProcess
   */
  exports.prototype['replenishmentProcess'] = undefined;

  /**
   * @member {Integer} pickFaceAssignment
   */
  exports.prototype['pickFaceAssignment'] = undefined;

  /**
   * @member {Integer} locationId
   */
  exports.prototype['locationId'] = undefined;

  /**
   * @member {Integer} quantity
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
