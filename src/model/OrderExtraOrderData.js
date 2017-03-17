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
    root.infoplus.OrderExtraOrderData = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderExtraOrderData model module.
   * @module model/OrderExtraOrderData
   * @version beta
   */

  /**
   * Constructs a new <code>OrderExtraOrderData</code>.
   * @alias module:model/OrderExtraOrderData
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>OrderExtraOrderData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderExtraOrderData} obj Optional instance to populate.
   * @return {module:model/OrderExtraOrderData} The populated <code>OrderExtraOrderData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {String} sequence
   */
  exports.prototype['sequence'] = undefined;

  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;

  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;

  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
