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
    root.infoplus.CartonType = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartonType model module.
   * @module model/CartonType
   * @version v2.0
   */

  /**
   * Constructs a new <code>CartonType</code>.
   * @alias module:model/CartonType
   * @class
   * @param abbreviation
   * @param name
   * @param lengthIn
   * @param widthIn
   * @param heightIn
   * @param innerLengthIn
   * @param innerWidthIn
   * @param innerHeightIn
   * @param lobId
   * @param isActive
   */
  var exports = function(abbreviation, name, lengthIn, widthIn, heightIn, innerLengthIn, innerWidthIn, innerHeightIn, lobId, isActive) {


    this['abbreviation'] = abbreviation;
    this['name'] = name;
    this['lengthIn'] = lengthIn;
    this['widthIn'] = widthIn;
    this['heightIn'] = heightIn;
    this['innerLengthIn'] = innerLengthIn;
    this['innerWidthIn'] = innerWidthIn;
    this['innerHeightIn'] = innerHeightIn;

    this['lobId'] = lobId;
    this['isActive'] = isActive;

  };

  /**
   * Constructs a <code>CartonType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartonType} obj Optional instance to populate.
   * @return {module:model/CartonType} The populated <code>CartonType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('abbreviation')) {
        obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lengthIn')) {
        obj['lengthIn'] = ApiClient.convertToType(data['lengthIn'], 'Number');
      }
      if (data.hasOwnProperty('widthIn')) {
        obj['widthIn'] = ApiClient.convertToType(data['widthIn'], 'Number');
      }
      if (data.hasOwnProperty('heightIn')) {
        obj['heightIn'] = ApiClient.convertToType(data['heightIn'], 'Number');
      }
      if (data.hasOwnProperty('innerLengthIn')) {
        obj['innerLengthIn'] = ApiClient.convertToType(data['innerLengthIn'], 'Number');
      }
      if (data.hasOwnProperty('innerWidthIn')) {
        obj['innerWidthIn'] = ApiClient.convertToType(data['innerWidthIn'], 'Number');
      }
      if (data.hasOwnProperty('innerHeightIn')) {
        obj['innerHeightIn'] = ApiClient.convertToType(data['innerHeightIn'], 'Number');
      }
      if (data.hasOwnProperty('weightLbs')) {
        obj['weightLbs'] = ApiClient.convertToType(data['weightLbs'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
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
   * @member {String} abbreviation
   */
  exports.prototype['abbreviation'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Number} lengthIn
   */
  exports.prototype['lengthIn'] = undefined;

  /**
   * @member {Number} widthIn
   */
  exports.prototype['widthIn'] = undefined;

  /**
   * @member {Number} heightIn
   */
  exports.prototype['heightIn'] = undefined;

  /**
   * @member {Number} innerLengthIn
   */
  exports.prototype['innerLengthIn'] = undefined;

  /**
   * @member {Number} innerWidthIn
   */
  exports.prototype['innerWidthIn'] = undefined;

  /**
   * @member {Number} innerHeightIn
   */
  exports.prototype['innerHeightIn'] = undefined;

  /**
   * @member {Number} weightLbs
   */
  exports.prototype['weightLbs'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Boolean} isActive
   * @default false
   */
  exports.prototype['isActive'] = false;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
