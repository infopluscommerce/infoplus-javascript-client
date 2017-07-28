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
    root.infoplus.OrderInvoiceTemplateLineItemDescriptionEnum = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderInvoiceTemplateLineItemDescriptionEnum model module.
   * @module model/OrderInvoiceTemplateLineItemDescriptionEnum
   * @version beta
   */

  /**
   * Constructs a new <code>OrderInvoiceTemplateLineItemDescriptionEnum</code>.
   * @alias module:model/OrderInvoiceTemplateLineItemDescriptionEnum
   * @class
   * @param id
   * @param label
   */
  var exports = function(id, label) {

    this['id'] = id;
    this['label'] = label;

  };

  /**
   * Constructs a <code>OrderInvoiceTemplateLineItemDescriptionEnum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderInvoiceTemplateLineItemDescriptionEnum} obj Optional instance to populate.
   * @return {module:model/OrderInvoiceTemplateLineItemDescriptionEnum} The populated <code>OrderInvoiceTemplateLineItemDescriptionEnum</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('fullEntityClassName')) {
        obj['fullEntityClassName'] = ApiClient.convertToType(data['fullEntityClassName'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * @member {String} fullEntityClassName
   */
  exports.prototype['fullEntityClassName'] = undefined;




  return exports;
}));
