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
    root.infoplus.ParcelAccount = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParcelAccount model module.
   * @module model/ParcelAccount
   * @version v2.0
   */

  /**
   * Constructs a new <code>ParcelAccount</code>.
   * @alias module:model/ParcelAccount
   * @class
   * @param carrier
   * @param accountNo
   * @param name
   * @param manifestPartnerId
   */
  var exports = function(carrier, accountNo, name, manifestPartnerId) {




    this['carrier'] = carrier;
    this['accountNo'] = accountNo;

    this['name'] = name;
    this['manifestPartnerId'] = manifestPartnerId;

  };

  /**
   * Constructs a <code>ParcelAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelAccount} obj Optional instance to populate.
   * @return {module:model/ParcelAccount} The populated <code>ParcelAccount</code> instance.
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
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
      }
      if (data.hasOwnProperty('accountNo')) {
        obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'String');
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('manifestPartnerId')) {
        obj['manifestPartnerId'] = ApiClient.convertToType(data['manifestPartnerId'], 'String');
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
   * @member {String} carrier
   */
  exports.prototype['carrier'] = undefined;

  /**
   * @member {String} accountNo
   */
  exports.prototype['accountNo'] = undefined;

  /**
   * @member {Integer} client
   */
  exports.prototype['client'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} manifestPartnerId
   */
  exports.prototype['manifestPartnerId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
