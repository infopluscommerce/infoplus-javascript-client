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
    root.infoplus.Substitution = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Substitution model module.
   * @module model/Substitution
   * @version v2.0
   */

  /**
   * Constructs a new <code>Substitution</code>.
   * @alias module:model/Substitution
   * @class
   * @param lobId
   * @param orderSKUId
   * @param substituteSKUId
   * @param period
   * @param type
   * @param substitutionQuantity
   */
  var exports = function(lobId, orderSKUId, substituteSKUId, period, type, substitutionQuantity) {

    this['lobId'] = lobId;



    this['orderSKUId'] = orderSKUId;
    this['substituteSKUId'] = substituteSKUId;
    this['period'] = period;
    this['type'] = type;
    this['substitutionQuantity'] = substitutionQuantity;

  };

  /**
   * Constructs a <code>Substitution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Substitution} obj Optional instance to populate.
   * @return {module:model/Substitution} The populated <code>Substitution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('orderSKUId')) {
        obj['orderSKUId'] = ApiClient.convertToType(data['orderSKUId'], 'Integer');
      }
      if (data.hasOwnProperty('substituteSKUId')) {
        obj['substituteSKUId'] = ApiClient.convertToType(data['substituteSKUId'], 'Integer');
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('substitutionQuantity')) {
        obj['substitutionQuantity'] = ApiClient.convertToType(data['substitutionQuantity'], 'Number');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} orderSKUId
   */
  exports.prototype['orderSKUId'] = undefined;

  /**
   * @member {Integer} substituteSKUId
   */
  exports.prototype['substituteSKUId'] = undefined;

  /**
   * @member {String} period
   */
  exports.prototype['period'] = undefined;

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * @member {Number} substitutionQuantity
   */
  exports.prototype['substitutionQuantity'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
