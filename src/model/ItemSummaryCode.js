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
    root.infoplus.ItemSummaryCode = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemSummaryCode model module.
   * @module model/ItemSummaryCode
   * @version beta
   */

  /**
   * Constructs a new <code>ItemSummaryCode</code>.
   * @alias module:model/ItemSummaryCode
   * @class
   * @param lobId
   * @param id
   * @param name
   */
  var exports = function(lobId, id, name) {

    this['lobId'] = lobId;

    this['id'] = id;
    this['name'] = name;

  };

  /**
   * Constructs a <code>ItemSummaryCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemSummaryCode} obj Optional instance to populate.
   * @return {module:model/ItemSummaryCode} The populated <code>ItemSummaryCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('internalId')) {
        obj['internalId'] = ApiClient.convertToType(data['internalId'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
   * @member {Integer} internalId
   */
  exports.prototype['internalId'] = undefined;

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
