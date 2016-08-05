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
    root.infoplus.Work = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Work model module.
   * @module model/Work
   * @version beta
   */

  /**
   * Constructs a new <code>Work</code>.
   * @alias module:model/Work
   * @class
   * @param sourceWarehouseId
   * @param sourceBuildingId
   * @param sourceLocation
   * @param destinationWarehouseId
   * @param destinationBuildingId
   * @param destinationLocation
   * @param type
   * @param priorityCode
   * @param status
   * @param userId
   */
  var exports = function(sourceWarehouseId, sourceBuildingId, sourceLocation, destinationWarehouseId, destinationBuildingId, destinationLocation, type, priorityCode, status, userId) {


    this['sourceWarehouseId'] = sourceWarehouseId;
    this['sourceBuildingId'] = sourceBuildingId;
    this['sourceLocation'] = sourceLocation;
    this['destinationWarehouseId'] = destinationWarehouseId;
    this['destinationBuildingId'] = destinationBuildingId;
    this['destinationLocation'] = destinationLocation;
    this['type'] = type;


    this['priorityCode'] = priorityCode;
    this['status'] = status;
    this['userId'] = userId;



  };

  /**
   * Constructs a <code>Work</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Work} obj Optional instance to populate.
   * @return {module:model/Work} The populated <code>Work</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('sourceWarehouseId')) {
        obj['sourceWarehouseId'] = ApiClient.convertToType(data['sourceWarehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceBuildingId')) {
        obj['sourceBuildingId'] = ApiClient.convertToType(data['sourceBuildingId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceLocation')) {
        obj['sourceLocation'] = ApiClient.convertToType(data['sourceLocation'], 'String');
      }
      if (data.hasOwnProperty('destinationWarehouseId')) {
        obj['destinationWarehouseId'] = ApiClient.convertToType(data['destinationWarehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationBuildingId')) {
        obj['destinationBuildingId'] = ApiClient.convertToType(data['destinationBuildingId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationLocation')) {
        obj['destinationLocation'] = ApiClient.convertToType(data['destinationLocation'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('priorityCode')) {
        obj['priorityCode'] = ApiClient.convertToType(data['priorityCode'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
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
   * @member {Integer} sourceWarehouseId
   */
  exports.prototype['sourceWarehouseId'] = undefined;

  /**
   * @member {Integer} sourceBuildingId
   */
  exports.prototype['sourceBuildingId'] = undefined;

  /**
   * @member {String} sourceLocation
   */
  exports.prototype['sourceLocation'] = undefined;

  /**
   * @member {Integer} destinationWarehouseId
   */
  exports.prototype['destinationWarehouseId'] = undefined;

  /**
   * @member {Integer} destinationBuildingId
   */
  exports.prototype['destinationBuildingId'] = undefined;

  /**
   * @member {String} destinationLocation
   */
  exports.prototype['destinationLocation'] = undefined;

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} priorityCode
   */
  exports.prototype['priorityCode'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

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
