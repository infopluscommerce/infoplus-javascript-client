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
    root.infoplus.OrderSource = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderSource model module.
   * @module model/OrderSource
   * @version v2.0
   */

  /**
   * Constructs a new <code>OrderSource</code>.
   * @alias module:model/OrderSource
   * @class
   * @param lobId
   * @param name
   */
  var exports = function(lobId, name) {


    this['lobId'] = lobId;
    this['name'] = name;










  };

  /**
   * Constructs a <code>OrderSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderSource} obj Optional instance to populate.
   * @return {module:model/OrderSource} The populated <code>OrderSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('packingNotes')) {
        obj['packingNotes'] = ApiClient.convertToType(data['packingNotes'], 'String');
      }
      if (data.hasOwnProperty('requireCartonizedASN')) {
        obj['requireCartonizedASN'] = ApiClient.convertToType(data['requireCartonizedASN'], 'Boolean');
      }
      if (data.hasOwnProperty('requireGS1128Label')) {
        obj['requireGS1128Label'] = ApiClient.convertToType(data['requireGS1128Label'], 'Boolean');
      }
      if (data.hasOwnProperty('shippingNotes')) {
        obj['shippingNotes'] = ApiClient.convertToType(data['shippingNotes'], 'String');
      }
      if (data.hasOwnProperty('packingSlipId')) {
        obj['packingSlipId'] = ApiClient.convertToType(data['packingSlipId'], 'Integer');
      }
      if (data.hasOwnProperty('orderConfirmationEmailId')) {
        obj['orderConfirmationEmailId'] = ApiClient.convertToType(data['orderConfirmationEmailId'], 'Integer');
      }
      if (data.hasOwnProperty('shipmentConfirmationEmailId')) {
        obj['shipmentConfirmationEmailId'] = ApiClient.convertToType(data['shipmentConfirmationEmailId'], 'Integer');
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
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {String} packingNotes
   */
  exports.prototype['packingNotes'] = undefined;

  /**
   * @member {Boolean} requireCartonizedASN
   * @default false
   */
  exports.prototype['requireCartonizedASN'] = false;

  /**
   * @member {Boolean} requireGS1128Label
   * @default false
   */
  exports.prototype['requireGS1128Label'] = false;

  /**
   * @member {String} shippingNotes
   */
  exports.prototype['shippingNotes'] = undefined;

  /**
   * @member {Integer} packingSlipId
   */
  exports.prototype['packingSlipId'] = undefined;

  /**
   * @member {Integer} orderConfirmationEmailId
   */
  exports.prototype['orderConfirmationEmailId'] = undefined;

  /**
   * @member {Integer} shipmentConfirmationEmailId
   */
  exports.prototype['shipmentConfirmationEmailId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
