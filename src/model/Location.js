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
    root.infoplus.Location = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Location model module.
   * @module model/Location
   * @version beta
   */

  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   * @class
   * @param warehouseId
   * @param billingTypeId
   * @param behaviorType
   * @param footprintId
   * @param online
   * @param allowItemMixing
   */
  var exports = function(warehouseId, billingTypeId, behaviorType, footprintId, online, allowItemMixing) {


    this['warehouseId'] = warehouseId;



    this['billingTypeId'] = billingTypeId;
    this['behaviorType'] = behaviorType;
    this['footprintId'] = footprintId;






    this['online'] = online;


    this['allowItemMixing'] = allowItemMixing;



  };

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
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
      if (data.hasOwnProperty('buildingId')) {
        obj['buildingId'] = ApiClient.convertToType(data['buildingId'], 'Integer');
      }
      if (data.hasOwnProperty('zoneId')) {
        obj['zoneId'] = ApiClient.convertToType(data['zoneId'], 'Integer');
      }
      if (data.hasOwnProperty('aisleId')) {
        obj['aisleId'] = ApiClient.convertToType(data['aisleId'], 'Integer');
      }
      if (data.hasOwnProperty('billingTypeId')) {
        obj['billingTypeId'] = ApiClient.convertToType(data['billingTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('behaviorType')) {
        obj['behaviorType'] = ApiClient.convertToType(data['behaviorType'], 'String');
      }
      if (data.hasOwnProperty('footprintId')) {
        obj['footprintId'] = ApiClient.convertToType(data['footprintId'], 'Integer');
      }
      if (data.hasOwnProperty('addressSchemeId')) {
        obj['addressSchemeId'] = ApiClient.convertToType(data['addressSchemeId'], 'Integer');
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ApiClient.convertToType(data['origin'], 'Integer');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Integer');
      }
      if (data.hasOwnProperty('bay')) {
        obj['bay'] = ApiClient.convertToType(data['bay'], 'Integer');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Integer');
      }
      if (data.hasOwnProperty('online')) {
        obj['online'] = ApiClient.convertToType(data['online'], 'Boolean');
      }
      if (data.hasOwnProperty('priorityCode')) {
        obj['priorityCode'] = ApiClient.convertToType(data['priorityCode'], 'Integer');
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'Integer');
      }
      if (data.hasOwnProperty('allowItemMixing')) {
        obj['allowItemMixing'] = ApiClient.convertToType(data['allowItemMixing'], 'Boolean');
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
   * @member {Integer} buildingId
   */
  exports.prototype['buildingId'] = undefined;

  /**
   * @member {Integer} zoneId
   */
  exports.prototype['zoneId'] = undefined;

  /**
   * @member {Integer} aisleId
   */
  exports.prototype['aisleId'] = undefined;

  /**
   * @member {Integer} billingTypeId
   */
  exports.prototype['billingTypeId'] = undefined;

  /**
   * @member {String} behaviorType
   */
  exports.prototype['behaviorType'] = undefined;

  /**
   * @member {Integer} footprintId
   */
  exports.prototype['footprintId'] = undefined;

  /**
   * @member {Integer} addressSchemeId
   */
  exports.prototype['addressSchemeId'] = undefined;

  /**
   * @member {Integer} origin
   */
  exports.prototype['origin'] = undefined;

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;

  /**
   * @member {Integer} level
   */
  exports.prototype['level'] = undefined;

  /**
   * @member {Integer} bay
   */
  exports.prototype['bay'] = undefined;

  /**
   * @member {Integer} number
   */
  exports.prototype['number'] = undefined;

  /**
   * @member {Boolean} online
   * @default false
   */
  exports.prototype['online'] = false;

  /**
   * @member {Integer} priorityCode
   */
  exports.prototype['priorityCode'] = undefined;

  /**
   * @member {Integer} cost
   */
  exports.prototype['cost'] = undefined;

  /**
   * @member {Boolean} allowItemMixing
   * @default false
   */
  exports.prototype['allowItemMixing'] = false;

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
