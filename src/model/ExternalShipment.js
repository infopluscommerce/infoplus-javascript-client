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
    root.infoplus.ExternalShipment = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExternalShipment model module.
   * @module model/ExternalShipment
   * @version v2.0
   */

  /**
   * Constructs a new <code>ExternalShipment</code>.
   * @alias module:model/ExternalShipment
   * @class
   * @param orderId
   * @param carrierId
   * @param parcelAccountId
   * @param trackingNo
   */
  var exports = function(orderId, carrierId, parcelAccountId, trackingNo) {




    this['orderId'] = orderId;
    this['carrierId'] = carrierId;
    this['parcelAccountId'] = parcelAccountId;


    this['trackingNo'] = trackingNo;









  };

  /**
   * Constructs a <code>ExternalShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalShipment} obj Optional instance to populate.
   * @return {module:model/ExternalShipment} The populated <code>ExternalShipment</code> instance.
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
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
      }
      if (data.hasOwnProperty('carrierId')) {
        obj['carrierId'] = ApiClient.convertToType(data['carrierId'], 'Integer');
      }
      if (data.hasOwnProperty('parcelAccountId')) {
        obj['parcelAccountId'] = ApiClient.convertToType(data['parcelAccountId'], 'Integer');
      }
      if (data.hasOwnProperty('thirdPartyParcelAccountId')) {
        obj['thirdPartyParcelAccountId'] = ApiClient.convertToType(data['thirdPartyParcelAccountId'], 'Integer');
      }
      if (data.hasOwnProperty('freight')) {
        obj['freight'] = ApiClient.convertToType(data['freight'], 'Number');
      }
      if (data.hasOwnProperty('trackingNo')) {
        obj['trackingNo'] = ApiClient.convertToType(data['trackingNo'], 'String');
      }
      if (data.hasOwnProperty('dim1In')) {
        obj['dim1In'] = ApiClient.convertToType(data['dim1In'], 'Number');
      }
      if (data.hasOwnProperty('dim2In')) {
        obj['dim2In'] = ApiClient.convertToType(data['dim2In'], 'Number');
      }
      if (data.hasOwnProperty('dim3In')) {
        obj['dim3In'] = ApiClient.convertToType(data['dim3In'], 'Number');
      }
      if (data.hasOwnProperty('weightLbs')) {
        obj['weightLbs'] = ApiClient.convertToType(data['weightLbs'], 'Number');
      }
      if (data.hasOwnProperty('dimWeight')) {
        obj['dimWeight'] = ApiClient.convertToType(data['dimWeight'], 'Number');
      }
      if (data.hasOwnProperty('residential')) {
        obj['residential'] = ApiClient.convertToType(data['residential'], 'Boolean');
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
   * @member {Number} orderId
   */
  exports.prototype['orderId'] = undefined;

  /**
   * @member {Integer} carrierId
   */
  exports.prototype['carrierId'] = undefined;

  /**
   * @member {Integer} parcelAccountId
   */
  exports.prototype['parcelAccountId'] = undefined;

  /**
   * @member {Integer} thirdPartyParcelAccountId
   */
  exports.prototype['thirdPartyParcelAccountId'] = undefined;

  /**
   * @member {Number} freight
   */
  exports.prototype['freight'] = undefined;

  /**
   * @member {String} trackingNo
   */
  exports.prototype['trackingNo'] = undefined;

  /**
   * @member {Number} dim1In
   */
  exports.prototype['dim1In'] = undefined;

  /**
   * @member {Number} dim2In
   */
  exports.prototype['dim2In'] = undefined;

  /**
   * @member {Number} dim3In
   */
  exports.prototype['dim3In'] = undefined;

  /**
   * @member {Number} weightLbs
   */
  exports.prototype['weightLbs'] = undefined;

  /**
   * @member {Number} dimWeight
   */
  exports.prototype['dimWeight'] = undefined;

  /**
   * @member {Boolean} residential
   * @default false
   */
  exports.prototype['residential'] = false;

  /**
   * @member {String} zone
   */
  exports.prototype['zone'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
