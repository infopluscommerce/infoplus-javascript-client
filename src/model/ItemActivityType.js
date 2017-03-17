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
    root.infoplus.ItemActivityType = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ItemActivityType model module.
   * @module model/ItemActivityType
   * @version beta
   */

  /**
   * Constructs a new <code>ItemActivityType</code>.
   * @alias module:model/ItemActivityType
   * @class
   * @param id
   * @param label
   */
  var exports = function(id, label) {

    this['id'] = id;
    this['label'] = label;
  };

  /**
   * Constructs a <code>ItemActivityType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemActivityType} obj Optional instance to populate.
   * @return {module:model/ItemActivityType} The populated <code>ItemActivityType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;




  return exports;
}));
