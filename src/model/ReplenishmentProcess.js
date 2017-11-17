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
    root.infoplus.ReplenishmentProcess = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReplenishmentProcess model module.
   * @module model/ReplenishmentProcess
   * @version v2.0
   */

  /**
   * Constructs a new <code>ReplenishmentProcess</code>.
   * @alias module:model/ReplenishmentProcess
   * @class
   * @param warehouseId
   * @param replenishmentPlanId
   * @param status
   */
  var exports = function(warehouseId, replenishmentPlanId, status) {




    this['warehouseId'] = warehouseId;
    this['replenishmentPlanId'] = replenishmentPlanId;
    this['status'] = status;



  };

  /**
   * Constructs a <code>ReplenishmentProcess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplenishmentProcess} obj Optional instance to populate.
   * @return {module:model/ReplenishmentProcess} The populated <code>ReplenishmentProcess</code> instance.
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
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('replenishmentPlanId')) {
        obj['replenishmentPlanId'] = ApiClient.convertToType(data['replenishmentPlanId'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('estimatedWork')) {
        obj['estimatedWork'] = ApiClient.convertToType(data['estimatedWork'], 'Integer');
      }
      if (data.hasOwnProperty('workBatchId')) {
        obj['workBatchId'] = ApiClient.convertToType(data['workBatchId'], 'Integer');
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
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} replenishmentPlanId
   */
  exports.prototype['replenishmentPlanId'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Integer} estimatedWork
   */
  exports.prototype['estimatedWork'] = undefined;

  /**
   * @member {Integer} workBatchId
   */
  exports.prototype['workBatchId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
