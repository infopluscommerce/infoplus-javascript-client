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
    root.infoplus.ManageScheduledPlans = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ManageScheduledPlans model module.
   * @module model/ManageScheduledPlans
   * @version v2.0
   */

  /**
   * Constructs a new <code>ManageScheduledPlans</code>.
   * @alias module:model/ManageScheduledPlans
   * @class
   * @param warehouseId
   */
  var exports = function(warehouseId) {










    this['warehouseId'] = warehouseId;

  };

  /**
   * Constructs a <code>ManageScheduledPlans</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManageScheduledPlans} obj Optional instance to populate.
   * @return {module:model/ManageScheduledPlans} The populated <code>ManageScheduledPlans</code> instance.
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
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('scheduledplantypeid')) {
        obj['scheduledplantypeid'] = ApiClient.convertToType(data['scheduledplantypeid'], 'Integer');
      }
      if (data.hasOwnProperty('planid')) {
        obj['planid'] = ApiClient.convertToType(data['planid'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'Integer');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
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
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {Integer} scheduledplantypeid
   */
  exports.prototype['scheduledplantypeid'] = undefined;

  /**
   * @member {Integer} planid
   */
  exports.prototype['planid'] = undefined;

  /**
   * @member {Boolean} active
   * @default false
   */
  exports.prototype['active'] = false;

  /**
   * @member {Integer} user
   */
  exports.prototype['user'] = undefined;

  /**
   * @member {Boolean} deleted
   * @default false
   */
  exports.prototype['deleted'] = false;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
