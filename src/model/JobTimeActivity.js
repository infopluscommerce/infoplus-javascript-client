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
    root.infoplus.JobTimeActivity = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JobTimeActivity model module.
   * @module model/JobTimeActivity
   * @version beta
   */

  /**
   * Constructs a new <code>JobTimeActivity</code>.
   * @alias module:model/JobTimeActivity
   * @class
   * @param secondDuration
   * @param userId
   * @param lobId
   * @param jobTypeId
   */
  var exports = function(secondDuration, userId, lobId, jobTypeId) {






    this['secondDuration'] = secondDuration;
    this['userId'] = userId;

    this['lobId'] = lobId;
    this['jobTypeId'] = jobTypeId;



  };

  /**
   * Constructs a <code>JobTimeActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobTimeActivity} obj Optional instance to populate.
   * @return {module:model/JobTimeActivity} The populated <code>JobTimeActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('importedId')) {
        obj['importedId'] = ApiClient.convertToType(data['importedId'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('secondDuration')) {
        obj['secondDuration'] = ApiClient.convertToType(data['secondDuration'], 'Integer');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('jobTypeId')) {
        obj['jobTypeId'] = ApiClient.convertToType(data['jobTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('jobTypeName')) {
        obj['jobTypeName'] = ApiClient.convertToType(data['jobTypeName'], 'String');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
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
   * @member {Integer} importedId
   */
  exports.prototype['importedId'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;

  /**
   * @member {Integer} secondDuration
   */
  exports.prototype['secondDuration'] = undefined;

  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} jobTypeId
   */
  exports.prototype['jobTypeId'] = undefined;

  /**
   * @member {String} jobTypeName
   */
  exports.prototype['jobTypeName'] = undefined;

  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
