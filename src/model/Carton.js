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
    root.infoplus.Carton = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Carton model module.
   * @module model/Carton
   * @version v2.0
   */

  /**
   * Constructs a new <code>Carton</code>.
   * @alias module:model/Carton
   * @class
   * @param orderNo
   * @param cartonTypeId
   */
  var exports = function(orderNo, cartonTypeId) {


    this['orderNo'] = orderNo;

    this['cartonTypeId'] = cartonTypeId;



  };

  /**
   * Constructs a <code>Carton</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Carton} obj Optional instance to populate.
   * @return {module:model/Carton} The populated <code>Carton</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('cartonNo')) {
        obj['cartonNo'] = ApiClient.convertToType(data['cartonNo'], 'Integer');
      }
      if (data.hasOwnProperty('cartonTypeId')) {
        obj['cartonTypeId'] = ApiClient.convertToType(data['cartonTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('cartonLPN')) {
        obj['cartonLPN'] = ApiClient.convertToType(data['cartonLPN'], 'String');
      }
      if (data.hasOwnProperty('weightLbs')) {
        obj['weightLbs'] = ApiClient.convertToType(data['weightLbs'], 'Number');
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
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;

  /**
   * @member {Integer} cartonNo
   */
  exports.prototype['cartonNo'] = undefined;

  /**
   * @member {Integer} cartonTypeId
   */
  exports.prototype['cartonTypeId'] = undefined;

  /**
   * @member {String} cartonLPN
   */
  exports.prototype['cartonLPN'] = undefined;

  /**
   * @member {Number} weightLbs
   */
  exports.prototype['weightLbs'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
