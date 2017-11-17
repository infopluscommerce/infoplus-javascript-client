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
    root.infoplus.Kit = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Kit model module.
   * @module model/Kit
   * @version v2.0
   */

  /**
   * Constructs a new <code>Kit</code>.
   * @alias module:model/Kit
   * @class
   * @param lobId
   * @param kitSKUId
   * @param touches
   * @param isKOD
   * @param kodType
   */
  var exports = function(lobId, kitSKUId, touches, isKOD, kodType) {

    this['lobId'] = lobId;

    this['kitSKUId'] = kitSKUId;













    this['touches'] = touches;



    this['isKOD'] = isKOD;
    this['kodType'] = kodType;

  };

  /**
   * Constructs a <code>Kit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Kit} obj Optional instance to populate.
   * @return {module:model/Kit} The populated <code>Kit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('kitSKUId')) {
        obj['kitSKUId'] = ApiClient.convertToType(data['kitSKUId'], 'Integer');
      }
      if (data.hasOwnProperty('packagingType')) {
        obj['packagingType'] = ApiClient.convertToType(data['packagingType'], 'String');
      }
      if (data.hasOwnProperty('other')) {
        obj['other'] = ApiClient.convertToType(data['other'], 'String');
      }
      if (data.hasOwnProperty('numberOfComponents')) {
        obj['numberOfComponents'] = ApiClient.convertToType(data['numberOfComponents'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('line1')) {
        obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
      }
      if (data.hasOwnProperty('line2')) {
        obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
      }
      if (data.hasOwnProperty('line3')) {
        obj['line3'] = ApiClient.convertToType(data['line3'], 'String');
      }
      if (data.hasOwnProperty('line4')) {
        obj['line4'] = ApiClient.convertToType(data['line4'], 'String');
      }
      if (data.hasOwnProperty('line5')) {
        obj['line5'] = ApiClient.convertToType(data['line5'], 'String');
      }
      if (data.hasOwnProperty('line6')) {
        obj['line6'] = ApiClient.convertToType(data['line6'], 'String');
      }
      if (data.hasOwnProperty('line7')) {
        obj['line7'] = ApiClient.convertToType(data['line7'], 'String');
      }
      if (data.hasOwnProperty('line8')) {
        obj['line8'] = ApiClient.convertToType(data['line8'], 'String');
      }
      if (data.hasOwnProperty('touches')) {
        obj['touches'] = ApiClient.convertToType(data['touches'], 'Integer');
      }
      if (data.hasOwnProperty('minInvQty')) {
        obj['minInvQty'] = ApiClient.convertToType(data['minInvQty'], 'Integer');
      }
      if (data.hasOwnProperty('midInvQty')) {
        obj['midInvQty'] = ApiClient.convertToType(data['midInvQty'], 'Integer');
      }
      if (data.hasOwnProperty('maxInvQty')) {
        obj['maxInvQty'] = ApiClient.convertToType(data['maxInvQty'], 'Integer');
      }
      if (data.hasOwnProperty('isKOD')) {
        obj['isKOD'] = ApiClient.convertToType(data['isKOD'], 'String');
      }
      if (data.hasOwnProperty('kodType')) {
        obj['kodType'] = ApiClient.convertToType(data['kodType'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} kitSKUId
   */
  exports.prototype['kitSKUId'] = undefined;

  /**
   * @member {String} packagingType
   */
  exports.prototype['packagingType'] = undefined;

  /**
   * @member {String} other
   */
  exports.prototype['other'] = undefined;

  /**
   * @member {Integer} numberOfComponents
   */
  exports.prototype['numberOfComponents'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {String} line1
   */
  exports.prototype['line1'] = undefined;

  /**
   * @member {String} line2
   */
  exports.prototype['line2'] = undefined;

  /**
   * @member {String} line3
   */
  exports.prototype['line3'] = undefined;

  /**
   * @member {String} line4
   */
  exports.prototype['line4'] = undefined;

  /**
   * @member {String} line5
   */
  exports.prototype['line5'] = undefined;

  /**
   * @member {String} line6
   */
  exports.prototype['line6'] = undefined;

  /**
   * @member {String} line7
   */
  exports.prototype['line7'] = undefined;

  /**
   * @member {String} line8
   */
  exports.prototype['line8'] = undefined;

  /**
   * @member {Integer} touches
   */
  exports.prototype['touches'] = undefined;

  /**
   * @member {Integer} minInvQty
   */
  exports.prototype['minInvQty'] = undefined;

  /**
   * @member {Integer} midInvQty
   */
  exports.prototype['midInvQty'] = undefined;

  /**
   * @member {Integer} maxInvQty
   */
  exports.prototype['maxInvQty'] = undefined;

  /**
   * @member {String} isKOD
   */
  exports.prototype['isKOD'] = undefined;

  /**
   * @member {String} kodType
   */
  exports.prototype['kodType'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
