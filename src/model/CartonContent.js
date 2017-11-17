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
    root.infoplus.CartonContent = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartonContent model module.
   * @module model/CartonContent
   * @version v2.0
   */

  /**
   * Constructs a new <code>CartonContent</code>.
   * @alias module:model/CartonContent
   * @class
   * @param orderNo
   * @param cartonNoId
   * @param lineItemId
   * @param quantity
   */
  var exports = function(orderNo, cartonNoId, lineItemId, quantity) {



    this['orderNo'] = orderNo;
    this['cartonNoId'] = cartonNoId;
    this['lineItemId'] = lineItemId;

    this['quantity'] = quantity;






  };

  /**
   * Constructs a <code>CartonContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartonContent} obj Optional instance to populate.
   * @return {module:model/CartonContent} The populated <code>CartonContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('groupOrderId')) {
        obj['groupOrderId'] = ApiClient.convertToType(data['groupOrderId'], 'Number');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('cartonNoId')) {
        obj['cartonNoId'] = ApiClient.convertToType(data['cartonNoId'], 'Integer');
      }
      if (data.hasOwnProperty('lineItemId')) {
        obj['lineItemId'] = ApiClient.convertToType(data['lineItemId'], 'Integer');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('quantityScanned')) {
        obj['quantityScanned'] = ApiClient.convertToType(data['quantityScanned'], 'Integer');
      }
      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'Date');
      }
      if (data.hasOwnProperty('toteId')) {
        obj['toteId'] = ApiClient.convertToType(data['toteId'], 'String');
      }
      if (data.hasOwnProperty('pickerId')) {
        obj['pickerId'] = ApiClient.convertToType(data['pickerId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
   * @member {Number} groupOrderId
   */
  exports.prototype['groupOrderId'] = undefined;

  /**
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;

  /**
   * @member {Integer} cartonNoId
   */
  exports.prototype['cartonNoId'] = undefined;

  /**
   * @member {Integer} lineItemId
   */
  exports.prototype['lineItemId'] = undefined;

  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Integer} quantityScanned
   */
  exports.prototype['quantityScanned'] = undefined;

  /**
   * @member {Date} completed
   */
  exports.prototype['completed'] = undefined;

  /**
   * @member {String} toteId
   */
  exports.prototype['toteId'] = undefined;

  /**
   * @member {String} pickerId
   */
  exports.prototype['pickerId'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
