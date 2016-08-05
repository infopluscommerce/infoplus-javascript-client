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
    root.infoplus.OverrideReturnAddress = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OverrideReturnAddress model module.
   * @module model/OverrideReturnAddress
   * @version beta
   */

  /**
   * Constructs a new <code>OverrideReturnAddress</code>.
   * @alias module:model/OverrideReturnAddress
   * @class
   * @param lobId
   * @param warehouseId
   * @param orderSourceId
   * @param name
   * @param street
   * @param city
   * @param state
   * @param zip
   * @param phone
   */
  var exports = function(lobId, warehouseId, orderSourceId, name, street, city, state, zip, phone) {




    this['lobId'] = lobId;
    this['warehouseId'] = warehouseId;
    this['orderSourceId'] = orderSourceId;
    this['name'] = name;

    this['street'] = street;

    this['city'] = city;
    this['state'] = state;
    this['zip'] = zip;

    this['phone'] = phone;

  };

  /**
   * Constructs a <code>OverrideReturnAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverrideReturnAddress} obj Optional instance to populate.
   * @return {module:model/OverrideReturnAddress} The populated <code>OverrideReturnAddress</code> instance.
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
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('orderSourceId')) {
        obj['orderSourceId'] = ApiClient.convertToType(data['orderSourceId'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('attention')) {
        obj['attention'] = ApiClient.convertToType(data['attention'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('street2')) {
        obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
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
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} orderSourceId
   */
  exports.prototype['orderSourceId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} attention
   */
  exports.prototype['attention'] = undefined;

  /**
   * @member {String} street
   */
  exports.prototype['street'] = undefined;

  /**
   * @member {String} street2
   */
  exports.prototype['street2'] = undefined;

  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;

  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;

  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
