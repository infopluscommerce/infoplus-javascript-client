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
    root.infoplus.Carrier = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Carrier model module.
   * @module model/Carrier
   * @version beta
   */

  /**
   * Constructs a new <code>Carrier</code>.
   * @alias module:model/Carrier
   * @class
   * @param carrier
   * @param label
   */
  var exports = function(carrier, label) {

    this['carrier'] = carrier;
    this['label'] = label;

  };

  /**
   * Constructs a <code>Carrier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Carrier} obj Optional instance to populate.
   * @return {module:model/Carrier} The populated <code>Carrier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'Integer');
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
   * @member {Integer} carrier
   */
  exports.prototype['carrier'] = undefined;

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
