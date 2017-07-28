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
    root.infoplus.ParcelInvoice = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParcelInvoice model module.
   * @module model/ParcelInvoice
   * @version beta
   */

  /**
   * Constructs a new <code>ParcelInvoice</code>.
   * @alias module:model/ParcelInvoice
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>ParcelInvoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelInvoice} obj Optional instance to populate.
   * @return {module:model/ParcelInvoice} The populated <code>ParcelInvoice</code> instance.
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
      if (data.hasOwnProperty('invoiceNo')) {
        obj['invoiceNo'] = ApiClient.convertToType(data['invoiceNo'], 'String');
      }
      if (data.hasOwnProperty('accountNo')) {
        obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'String');
      }
      if (data.hasOwnProperty('invoiceDate')) {
        obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'Date');
      }
      if (data.hasOwnProperty('invoiceAmount')) {
        obj['invoiceAmount'] = ApiClient.convertToType(data['invoiceAmount'], 'Number');
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
   * @member {String} invoiceNo
   */
  exports.prototype['invoiceNo'] = undefined;

  /**
   * @member {String} accountNo
   */
  exports.prototype['accountNo'] = undefined;

  /**
   * @member {Date} invoiceDate
   */
  exports.prototype['invoiceDate'] = undefined;

  /**
   * @member {Number} invoiceAmount
   */
  exports.prototype['invoiceAmount'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
