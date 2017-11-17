(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ReceivingWorksheetLineItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReceivingWorksheetLineItem'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReceivingWorksheet = factory(root.infoplus.ApiClient, root.infoplus.ReceivingWorksheetLineItem);
  }
}(this, function(ApiClient, ReceivingWorksheetLineItem) {
  'use strict';

  /**
   * The ReceivingWorksheet model module.
   * @module model/ReceivingWorksheet
   * @version v2.0
   */

  /**
   * Constructs a new <code>ReceivingWorksheet</code>.
   * @alias module:model/ReceivingWorksheet
   * @class
   * @param warehouseId
   * @param serviceLevel
   * @param worksheetName
   * @param autoCommit
   */
  var exports = function(warehouseId, serviceLevel, worksheetName, autoCommit) {


    this['warehouseId'] = warehouseId;




    this['serviceLevel'] = serviceLevel;


    this['worksheetName'] = worksheetName;


    this['autoCommit'] = autoCommit;






  };

  /**
   * Constructs a <code>ReceivingWorksheet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceivingWorksheet} obj Optional instance to populate.
   * @return {module:model/ReceivingWorksheet} The populated <code>ReceivingWorksheet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('poNoId')) {
        obj['poNoId'] = ApiClient.convertToType(data['poNoId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('vendorId')) {
        obj['vendorId'] = ApiClient.convertToType(data['vendorId'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('serviceLevel')) {
        obj['serviceLevel'] = ApiClient.convertToType(data['serviceLevel'], 'String');
      }
      if (data.hasOwnProperty('receivingProcessId')) {
        obj['receivingProcessId'] = ApiClient.convertToType(data['receivingProcessId'], 'Integer');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Integer');
      }
      if (data.hasOwnProperty('worksheetName')) {
        obj['worksheetName'] = ApiClient.convertToType(data['worksheetName'], 'String');
      }
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
      }
      if (data.hasOwnProperty('onTheDock')) {
        obj['onTheDock'] = ApiClient.convertToType(data['onTheDock'], 'Boolean');
      }
      if (data.hasOwnProperty('autoCommit')) {
        obj['autoCommit'] = ApiClient.convertToType(data['autoCommit'], 'Boolean');
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [ReceivingWorksheetLineItem]);
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('workBatchId')) {
        obj['workBatchId'] = ApiClient.convertToType(data['workBatchId'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
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
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} poNoId
   */
  exports.prototype['poNoId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} vendorId
   */
  exports.prototype['vendorId'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} serviceLevel
   */
  exports.prototype['serviceLevel'] = undefined;

  /**
   * @member {Integer} receivingProcessId
   */
  exports.prototype['receivingProcessId'] = undefined;

  /**
   * @member {Integer} createdBy
   */
  exports.prototype['createdBy'] = undefined;

  /**
   * @member {String} worksheetName
   */
  exports.prototype['worksheetName'] = undefined;

  /**
   * @member {String} carrier
   */
  exports.prototype['carrier'] = undefined;

  /**
   * @member {Boolean} onTheDock
   * @default false
   */
  exports.prototype['onTheDock'] = false;

  /**
   * @member {Boolean} autoCommit
   * @default false
   */
  exports.prototype['autoCommit'] = false;

  /**
   * @member {Array.<module:model/ReceivingWorksheetLineItem>} lineItems
   */
  exports.prototype['lineItems'] = undefined;

  /**
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;

  /**
   * @member {Integer} workBatchId
   */
  exports.prototype['workBatchId'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
