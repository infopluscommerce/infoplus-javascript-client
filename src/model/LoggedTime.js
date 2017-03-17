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
    root.infoplus.LoggedTime = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoggedTime model module.
   * @module model/LoggedTime
   * @version beta
   */

  /**
   * Constructs a new <code>LoggedTime</code>.
   * @alias module:model/LoggedTime
   * @class
   * @param duration
   * @param client
   * @param userId
   * @param warehouseId
   * @param loggedTimeTypeId
   * @param appId
   */
  var exports = function(duration, client, userId, warehouseId, loggedTimeTypeId, appId) {






    this['duration'] = duration;

    this['client'] = client;
    this['userId'] = userId;

    this['warehouseId'] = warehouseId;
    this['loggedTimeTypeId'] = loggedTimeTypeId;
    this['appId'] = appId;

  };

  /**
   * Constructs a <code>LoggedTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoggedTime} obj Optional instance to populate.
   * @return {module:model/LoggedTime} The populated <code>LoggedTime</code> instance.
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
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'Date');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'Integer');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('loggedTimeTypeId')) {
        obj['loggedTimeTypeId'] = ApiClient.convertToType(data['loggedTimeTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'Integer');
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
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;

  /**
   * @member {Date} end
   */
  exports.prototype['end'] = undefined;

  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {Integer} client
   */
  exports.prototype['client'] = undefined;

  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} loggedTimeTypeId
   */
  exports.prototype['loggedTimeTypeId'] = undefined;

  /**
   * @member {Integer} appId
   */
  exports.prototype['appId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
