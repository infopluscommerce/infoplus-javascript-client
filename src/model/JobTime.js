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
    root.infoplus.JobTime = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JobTime model module.
   * @module model/JobTime
   * @version beta
   */

  /**
   * Constructs a new <code>JobTime</code>.
   * @alias module:model/JobTime
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
   * Constructs a <code>JobTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobTime} obj Optional instance to populate.
   * @return {module:model/JobTime} The populated <code>JobTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('secondDuration')) {
        obj['secondDuration'] = ApiClient.convertToType(data['secondDuration'], 'Integer');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('jobTypeId')) {
        obj['jobTypeId'] = ApiClient.convertToType(data['jobTypeId'], 'Integer');
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
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} secondDuration
   */
  exports.prototype['secondDuration'] = undefined;

  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;

  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} jobTypeId
   */
  exports.prototype['jobTypeId'] = undefined;

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
