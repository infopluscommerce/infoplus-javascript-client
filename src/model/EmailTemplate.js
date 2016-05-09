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
    root.infoplus.EmailTemplate = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailTemplate model module.
   * @module model/EmailTemplate
   * @version 1.0
   */

  /**
   * Constructs a new <code>EmailTemplate</code>.
   * @alias module:model/EmailTemplate
   * @class
   * @param lobId
   * @param name
   * @param fromName
   * @param fromAddress
   * @param emailTemplateType
   */
  var exports = function(lobId, name, fromName, fromAddress, emailTemplateType) {


    this['lobId'] = lobId;

    this['name'] = name;
    this['fromName'] = fromName;
    this['fromAddress'] = fromAddress;
    this['emailTemplateType'] = emailTemplateType;


  };

  /**
   * Constructs a <code>EmailTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailTemplate} obj Optional instance to populate.
   * @return {module:model/EmailTemplate} The populated <code>EmailTemplate</code> instance.
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
      if (data.hasOwnProperty('subjectText')) {
        obj['subjectText'] = ApiClient.convertToType(data['subjectText'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('fromName')) {
        obj['fromName'] = ApiClient.convertToType(data['fromName'], 'String');
      }
      if (data.hasOwnProperty('fromAddress')) {
        obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
      }
      if (data.hasOwnProperty('emailTemplateType')) {
        obj['emailTemplateType'] = ApiClient.convertToType(data['emailTemplateType'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
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
   * @member {String} subjectText
   */
  exports.prototype['subjectText'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} fromName
   */
  exports.prototype['fromName'] = undefined;

  /**
   * @member {String} fromAddress
   */
  exports.prototype['fromAddress'] = undefined;

  /**
   * @member {String} emailTemplateType
   */
  exports.prototype['emailTemplateType'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;




  return exports;
}));
