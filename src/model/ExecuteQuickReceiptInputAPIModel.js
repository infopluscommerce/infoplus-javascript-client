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
    root.infoplus.ExecuteQuickReceiptInputAPIModel = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExecuteQuickReceiptInputAPIModel model module.
   * @module model/ExecuteQuickReceiptInputAPIModel
   * @version beta
   */

  /**
   * Constructs a new <code>ExecuteQuickReceiptInputAPIModel</code>.
   * @alias module:model/ExecuteQuickReceiptInputAPIModel
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ExecuteQuickReceiptInputAPIModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExecuteQuickReceiptInputAPIModel} obj Optional instance to populate.
   * @return {module:model/ExecuteQuickReceiptInputAPIModel} The populated <code>ExecuteQuickReceiptInputAPIModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idList')) {
        obj['idList'] = ApiClient.convertToType(data['idList'], ['Integer']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<Integer>} idList
   */
  exports.prototype['idList'] = undefined;




  return exports;
}));
