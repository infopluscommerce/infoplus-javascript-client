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
    root.infoplus.BillOfLadingCarrierInfoLine = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BillOfLadingCarrierInfoLine model module.
   * @module model/BillOfLadingCarrierInfoLine
   * @version v2.0
   */

  /**
   * Constructs a new <code>BillOfLadingCarrierInfoLine</code>.
   * @alias module:model/BillOfLadingCarrierInfoLine
   * @class
   * @param commodityDescription
   */
  var exports = function(commodityDescription) {








    this['commodityDescription'] = commodityDescription;



  };

  /**
   * Constructs a <code>BillOfLadingCarrierInfoLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillOfLadingCarrierInfoLine} obj Optional instance to populate.
   * @return {module:model/BillOfLadingCarrierInfoLine} The populated <code>BillOfLadingCarrierInfoLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('seqNo')) {
        obj['seqNo'] = ApiClient.convertToType(data['seqNo'], 'Integer');
      }
      if (data.hasOwnProperty('huQuantity')) {
        obj['huQuantity'] = ApiClient.convertToType(data['huQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('huType')) {
        obj['huType'] = ApiClient.convertToType(data['huType'], 'String');
      }
      if (data.hasOwnProperty('packageQuantity')) {
        obj['packageQuantity'] = ApiClient.convertToType(data['packageQuantity'], 'Integer');
      }
      if (data.hasOwnProperty('packageType')) {
        obj['packageType'] = ApiClient.convertToType(data['packageType'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Integer');
      }
      if (data.hasOwnProperty('isHazardousMaterial')) {
        obj['isHazardousMaterial'] = ApiClient.convertToType(data['isHazardousMaterial'], 'Boolean');
      }
      if (data.hasOwnProperty('commodityDescription')) {
        obj['commodityDescription'] = ApiClient.convertToType(data['commodityDescription'], 'String');
      }
      if (data.hasOwnProperty('nfmcNo')) {
        obj['nfmcNo'] = ApiClient.convertToType(data['nfmcNo'], 'String');
      }
      if (data.hasOwnProperty('carrierClass')) {
        obj['carrierClass'] = ApiClient.convertToType(data['carrierClass'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} seqNo
   */
  exports.prototype['seqNo'] = undefined;

  /**
   * @member {Integer} huQuantity
   */
  exports.prototype['huQuantity'] = undefined;

  /**
   * @member {String} huType
   */
  exports.prototype['huType'] = undefined;

  /**
   * @member {Integer} packageQuantity
   */
  exports.prototype['packageQuantity'] = undefined;

  /**
   * @member {String} packageType
   */
  exports.prototype['packageType'] = undefined;

  /**
   * @member {Integer} weight
   */
  exports.prototype['weight'] = undefined;

  /**
   * @member {Boolean} isHazardousMaterial
   * @default false
   */
  exports.prototype['isHazardousMaterial'] = false;

  /**
   * @member {String} commodityDescription
   */
  exports.prototype['commodityDescription'] = undefined;

  /**
   * @member {String} nfmcNo
   */
  exports.prototype['nfmcNo'] = undefined;

  /**
   * @member {String} carrierClass
   */
  exports.prototype['carrierClass'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
