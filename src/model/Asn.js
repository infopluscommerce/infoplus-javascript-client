(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ItemReceipt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemReceipt'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.Asn = factory(root.infoplus.ApiClient, root.infoplus.ItemReceipt);
  }
}(this, function(ApiClient, ItemReceipt) {
  'use strict';

  /**
   * The Asn model module.
   * @module model/Asn
   * @version beta
   */

  /**
   * Constructs a new <code>Asn</code>.
   * @alias module:model/Asn
   * @class
   * @param lobId
   * @param poNo
   * @param vendorId
   * @param warehouseId
   * @param orderDate
   * @param type
   */
  var exports = function(lobId, poNo, vendorId, warehouseId, orderDate, type) {




    this['lobId'] = lobId;
    this['poNo'] = poNo;
    this['vendorId'] = vendorId;
    this['warehouseId'] = warehouseId;
    this['orderDate'] = orderDate;
    this['type'] = type;





































  };

  /**
   * Constructs a <code>Asn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Asn} obj Optional instance to populate.
   * @return {module:model/Asn} The populated <code>Asn</code> instance.
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
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('poNo')) {
        obj['poNo'] = ApiClient.convertToType(data['poNo'], 'String');
      }
      if (data.hasOwnProperty('vendorId')) {
        obj['vendorId'] = ApiClient.convertToType(data['vendorId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('orderDate')) {
        obj['orderDate'] = ApiClient.convertToType(data['orderDate'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('billingName')) {
        obj['billingName'] = ApiClient.convertToType(data['billingName'], 'String');
      }
      if (data.hasOwnProperty('billingAttention')) {
        obj['billingAttention'] = ApiClient.convertToType(data['billingAttention'], 'String');
      }
      if (data.hasOwnProperty('billingStreet1')) {
        obj['billingStreet1'] = ApiClient.convertToType(data['billingStreet1'], 'String');
      }
      if (data.hasOwnProperty('billingStreet2')) {
        obj['billingStreet2'] = ApiClient.convertToType(data['billingStreet2'], 'String');
      }
      if (data.hasOwnProperty('billingCity')) {
        obj['billingCity'] = ApiClient.convertToType(data['billingCity'], 'String');
      }
      if (data.hasOwnProperty('billingState')) {
        obj['billingState'] = ApiClient.convertToType(data['billingState'], 'String');
      }
      if (data.hasOwnProperty('billingZipCode')) {
        obj['billingZipCode'] = ApiClient.convertToType(data['billingZipCode'], 'String');
      }
      if (data.hasOwnProperty('billingPhone')) {
        obj['billingPhone'] = ApiClient.convertToType(data['billingPhone'], 'String');
      }
      if (data.hasOwnProperty('shipToName')) {
        obj['shipToName'] = ApiClient.convertToType(data['shipToName'], 'String');
      }
      if (data.hasOwnProperty('shipToAddress')) {
        obj['shipToAddress'] = ApiClient.convertToType(data['shipToAddress'], 'String');
      }
      if (data.hasOwnProperty('shipToStreet1')) {
        obj['shipToStreet1'] = ApiClient.convertToType(data['shipToStreet1'], 'String');
      }
      if (data.hasOwnProperty('shipToStreet2')) {
        obj['shipToStreet2'] = ApiClient.convertToType(data['shipToStreet2'], 'String');
      }
      if (data.hasOwnProperty('shipToCity')) {
        obj['shipToCity'] = ApiClient.convertToType(data['shipToCity'], 'String');
      }
      if (data.hasOwnProperty('shipToState')) {
        obj['shipToState'] = ApiClient.convertToType(data['shipToState'], 'String');
      }
      if (data.hasOwnProperty('shipToZipCode')) {
        obj['shipToZipCode'] = ApiClient.convertToType(data['shipToZipCode'], 'String');
      }
      if (data.hasOwnProperty('shipToPhone')) {
        obj['shipToPhone'] = ApiClient.convertToType(data['shipToPhone'], 'String');
      }
      if (data.hasOwnProperty('corporateName')) {
        obj['corporateName'] = ApiClient.convertToType(data['corporateName'], 'String');
      }
      if (data.hasOwnProperty('corporateAttention')) {
        obj['corporateAttention'] = ApiClient.convertToType(data['corporateAttention'], 'String');
      }
      if (data.hasOwnProperty('corporateStreet1')) {
        obj['corporateStreet1'] = ApiClient.convertToType(data['corporateStreet1'], 'String');
      }
      if (data.hasOwnProperty('corporateStreet2')) {
        obj['corporateStreet2'] = ApiClient.convertToType(data['corporateStreet2'], 'String');
      }
      if (data.hasOwnProperty('corporateCity')) {
        obj['corporateCity'] = ApiClient.convertToType(data['corporateCity'], 'String');
      }
      if (data.hasOwnProperty('corporateState')) {
        obj['corporateState'] = ApiClient.convertToType(data['corporateState'], 'String');
      }
      if (data.hasOwnProperty('corporateZipCode')) {
        obj['corporateZipCode'] = ApiClient.convertToType(data['corporateZipCode'], 'String');
      }
      if (data.hasOwnProperty('accountCode')) {
        obj['accountCode'] = ApiClient.convertToType(data['accountCode'], 'String');
      }
      if (data.hasOwnProperty('buyer')) {
        obj['buyer'] = ApiClient.convertToType(data['buyer'], 'Integer');
      }
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'Integer');
      }
      if (data.hasOwnProperty('confTo')) {
        obj['confTo'] = ApiClient.convertToType(data['confTo'], 'String');
      }
      if (data.hasOwnProperty('fob')) {
        obj['fob'] = ApiClient.convertToType(data['fob'], 'String');
      }
      if (data.hasOwnProperty('printed')) {
        obj['printed'] = ApiClient.convertToType(data['printed'], 'String');
      }
      if (data.hasOwnProperty('projectNo')) {
        obj['projectNo'] = ApiClient.convertToType(data['projectNo'], 'Integer');
      }
      if (data.hasOwnProperty('remarks')) {
        obj['remarks'] = ApiClient.convertToType(data['remarks'], 'String');
      }
      if (data.hasOwnProperty('requestBy')) {
        obj['requestBy'] = ApiClient.convertToType(data['requestBy'], 'String');
      }
      if (data.hasOwnProperty('terms')) {
        obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
      }
      if (data.hasOwnProperty('usedBy')) {
        obj['usedBy'] = ApiClient.convertToType(data['usedBy'], 'String');
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [ItemReceipt]);
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
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} poNo
   */
  exports.prototype['poNo'] = undefined;

  /**
   * @member {Integer} vendorId
   */
  exports.prototype['vendorId'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Date} orderDate
   */
  exports.prototype['orderDate'] = undefined;

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * @member {String} billingName
   */
  exports.prototype['billingName'] = undefined;

  /**
   * @member {String} billingAttention
   */
  exports.prototype['billingAttention'] = undefined;

  /**
   * @member {String} billingStreet1
   */
  exports.prototype['billingStreet1'] = undefined;

  /**
   * @member {String} billingStreet2
   */
  exports.prototype['billingStreet2'] = undefined;

  /**
   * @member {String} billingCity
   */
  exports.prototype['billingCity'] = undefined;

  /**
   * @member {String} billingState
   */
  exports.prototype['billingState'] = undefined;

  /**
   * @member {String} billingZipCode
   */
  exports.prototype['billingZipCode'] = undefined;

  /**
   * @member {String} billingPhone
   */
  exports.prototype['billingPhone'] = undefined;

  /**
   * @member {String} shipToName
   */
  exports.prototype['shipToName'] = undefined;

  /**
   * @member {String} shipToAddress
   */
  exports.prototype['shipToAddress'] = undefined;

  /**
   * @member {String} shipToStreet1
   */
  exports.prototype['shipToStreet1'] = undefined;

  /**
   * @member {String} shipToStreet2
   */
  exports.prototype['shipToStreet2'] = undefined;

  /**
   * @member {String} shipToCity
   */
  exports.prototype['shipToCity'] = undefined;

  /**
   * @member {String} shipToState
   */
  exports.prototype['shipToState'] = undefined;

  /**
   * @member {String} shipToZipCode
   */
  exports.prototype['shipToZipCode'] = undefined;

  /**
   * @member {String} shipToPhone
   */
  exports.prototype['shipToPhone'] = undefined;

  /**
   * @member {String} corporateName
   */
  exports.prototype['corporateName'] = undefined;

  /**
   * @member {String} corporateAttention
   */
  exports.prototype['corporateAttention'] = undefined;

  /**
   * @member {String} corporateStreet1
   */
  exports.prototype['corporateStreet1'] = undefined;

  /**
   * @member {String} corporateStreet2
   */
  exports.prototype['corporateStreet2'] = undefined;

  /**
   * @member {String} corporateCity
   */
  exports.prototype['corporateCity'] = undefined;

  /**
   * @member {String} corporateState
   */
  exports.prototype['corporateState'] = undefined;

  /**
   * @member {String} corporateZipCode
   */
  exports.prototype['corporateZipCode'] = undefined;

  /**
   * @member {String} accountCode
   */
  exports.prototype['accountCode'] = undefined;

  /**
   * @member {Integer} buyer
   */
  exports.prototype['buyer'] = undefined;

  /**
   * @member {Integer} carrier
   */
  exports.prototype['carrier'] = undefined;

  /**
   * @member {String} confTo
   */
  exports.prototype['confTo'] = undefined;

  /**
   * @member {String} fob
   */
  exports.prototype['fob'] = undefined;

  /**
   * @member {String} printed
   */
  exports.prototype['printed'] = undefined;

  /**
   * @member {Integer} projectNo
   */
  exports.prototype['projectNo'] = undefined;

  /**
   * @member {String} remarks
   */
  exports.prototype['remarks'] = undefined;

  /**
   * @member {String} requestBy
   */
  exports.prototype['requestBy'] = undefined;

  /**
   * @member {String} terms
   */
  exports.prototype['terms'] = undefined;

  /**
   * @member {String} usedBy
   */
  exports.prototype['usedBy'] = undefined;

  /**
   * @member {Array.<module:model/ItemReceipt>} lineItems
   */
  exports.prototype['lineItems'] = undefined;

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
