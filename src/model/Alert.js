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
    root.infoplus.Alert = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Alert model module.
   * @module model/Alert
   * @version beta
   */

  /**
   * Constructs a new <code>Alert</code>.
   * @alias module:model/Alert
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>Alert</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Alert} obj Optional instance to populate.
   * @return {module:model/Alert} The populated <code>Alert</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('linkText')) {
        obj['linkText'] = ApiClient.convertToType(data['linkText'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
      if (data.hasOwnProperty('acknowledgeDate')) {
        obj['acknowledgeDate'] = ApiClient.convertToType(data['acknowledgeDate'], 'Date');
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
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * @member {String} level
   */
  exports.prototype['level'] = undefined;

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * @member {String} link
   */
  exports.prototype['link'] = undefined;

  /**
   * @member {String} linkText
   */
  exports.prototype['linkText'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;

  /**
   * @member {Date} acknowledgeDate
   */
  exports.prototype['acknowledgeDate'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
