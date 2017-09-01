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
    root.infoplus.OrderActivity = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderActivity model module.
   * @module model/OrderActivity
   * @version beta
   */

  /**
   * Constructs a new <code>OrderActivity</code>.
   * @alias module:model/OrderActivity
   * @class
   * @param lobId
   * @param mediaCode
   * @param legacyRestrictionType
   * @param orderDate
   * @param warehouseId
   */
  var exports = function(lobId, mediaCode, legacyRestrictionType, orderDate, warehouseId) {











    this['lobId'] = lobId;
    this['mediaCode'] = mediaCode;
    this['legacyRestrictionType'] = legacyRestrictionType;







    this['orderDate'] = orderDate;








    this['warehouseId'] = warehouseId;



















































































  };

  /**
   * Constructs a <code>OrderActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderActivity} obj Optional instance to populate.
   * @return {module:model/OrderActivity} The populated <code>OrderActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('alternateUsage')) {
        obj['alternateUsage'] = ApiClient.convertToType(data['alternateUsage'], 'String');
      }
      if (data.hasOwnProperty('groupOrderId')) {
        obj['groupOrderId'] = ApiClient.convertToType(data['groupOrderId'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reqStatusName')) {
        obj['reqStatusName'] = ApiClient.convertToType(data['reqStatusName'], 'String');
      }
      if (data.hasOwnProperty('fulfillmentProcessId')) {
        obj['fulfillmentProcessId'] = ApiClient.convertToType(data['fulfillmentProcessId'], 'Integer');
      }
      if (data.hasOwnProperty('carrierId')) {
        obj['carrierId'] = ApiClient.convertToType(data['carrierId'], 'Integer');
      }
      if (data.hasOwnProperty('carrierName')) {
        obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('mediaCode')) {
        obj['mediaCode'] = ApiClient.convertToType(data['mediaCode'], 'String');
      }
      if (data.hasOwnProperty('legacyRestrictionType')) {
        obj['legacyRestrictionType'] = ApiClient.convertToType(data['legacyRestrictionType'], 'String');
      }
      if (data.hasOwnProperty('reqTypeName')) {
        obj['reqTypeName'] = ApiClient.convertToType(data['reqTypeName'], 'String');
      }
      if (data.hasOwnProperty('serviceTypeId')) {
        obj['serviceTypeId'] = ApiClient.convertToType(data['serviceTypeId'], 'String');
      }
      if (data.hasOwnProperty('serviceTypeName')) {
        obj['serviceTypeName'] = ApiClient.convertToType(data['serviceTypeName'], 'String');
      }
      if (data.hasOwnProperty('alcoholOrderType')) {
        obj['alcoholOrderType'] = ApiClient.convertToType(data['alcoholOrderType'], 'String');
      }
      if (data.hasOwnProperty('distributionChannel')) {
        obj['distributionChannel'] = ApiClient.convertToType(data['distributionChannel'], 'String');
      }
      if (data.hasOwnProperty('distributionChannelName')) {
        obj['distributionChannelName'] = ApiClient.convertToType(data['distributionChannelName'], 'String');
      }
      if (data.hasOwnProperty('priorityCode')) {
        obj['priorityCode'] = ApiClient.convertToType(data['priorityCode'], 'Integer');
      }
      if (data.hasOwnProperty('orderDate')) {
        obj['orderDate'] = ApiClient.convertToType(data['orderDate'], 'Date');
      }
      if (data.hasOwnProperty('enteredBy')) {
        obj['enteredBy'] = ApiClient.convertToType(data['enteredBy'], 'String');
      }
      if (data.hasOwnProperty('orderReason')) {
        obj['orderReason'] = ApiClient.convertToType(data['orderReason'], 'Integer');
      }
      if (data.hasOwnProperty('customerOrderNo')) {
        obj['customerOrderNo'] = ApiClient.convertToType(data['customerOrderNo'], 'String');
      }
      if (data.hasOwnProperty('priceLevel')) {
        obj['priceLevel'] = ApiClient.convertToType(data['priceLevel'], 'String');
      }
      if (data.hasOwnProperty('orderCreateDate')) {
        obj['orderCreateDate'] = ApiClient.convertToType(data['orderCreateDate'], 'Date');
      }
      if (data.hasOwnProperty('orderModifyDate')) {
        obj['orderModifyDate'] = ApiClient.convertToType(data['orderModifyDate'], 'Date');
      }
      if (data.hasOwnProperty('shipBy')) {
        obj['shipBy'] = ApiClient.convertToType(data['shipBy'], 'Date');
      }
      if (data.hasOwnProperty('stopBackOrders')) {
        obj['stopBackOrders'] = ApiClient.convertToType(data['stopBackOrders'], 'String');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('orderSourceId')) {
        obj['orderSourceId'] = ApiClient.convertToType(data['orderSourceId'], 'Integer');
      }
      if (data.hasOwnProperty('orderSourceName')) {
        obj['orderSourceName'] = ApiClient.convertToType(data['orderSourceName'], 'String');
      }
      if (data.hasOwnProperty('integrationPartnerId')) {
        obj['integrationPartnerId'] = ApiClient.convertToType(data['integrationPartnerId'], 'Integer');
      }
      if (data.hasOwnProperty('integrationPartnerName')) {
        obj['integrationPartnerName'] = ApiClient.convertToType(data['integrationPartnerName'], 'String');
      }
      if (data.hasOwnProperty('orderLoadProgramId')) {
        obj['orderLoadProgramId'] = ApiClient.convertToType(data['orderLoadProgramId'], 'Integer');
      }
      if (data.hasOwnProperty('orderLoadProgramName')) {
        obj['orderLoadProgramName'] = ApiClient.convertToType(data['orderLoadProgramName'], 'String');
      }
      if (data.hasOwnProperty('omsOrderNo')) {
        obj['omsOrderNo'] = ApiClient.convertToType(data['omsOrderNo'], 'Integer');
      }
      if (data.hasOwnProperty('omsCustomerId')) {
        obj['omsCustomerId'] = ApiClient.convertToType(data['omsCustomerId'], 'Integer');
      }
      if (data.hasOwnProperty('shipToAttention')) {
        obj['shipToAttention'] = ApiClient.convertToType(data['shipToAttention'], 'String');
      }
      if (data.hasOwnProperty('shipToCompany')) {
        obj['shipToCompany'] = ApiClient.convertToType(data['shipToCompany'], 'String');
      }
      if (data.hasOwnProperty('shipToStreet')) {
        obj['shipToStreet'] = ApiClient.convertToType(data['shipToStreet'], 'String');
      }
      if (data.hasOwnProperty('shipToStreet2')) {
        obj['shipToStreet2'] = ApiClient.convertToType(data['shipToStreet2'], 'String');
      }
      if (data.hasOwnProperty('shipToStreet3')) {
        obj['shipToStreet3'] = ApiClient.convertToType(data['shipToStreet3'], 'String');
      }
      if (data.hasOwnProperty('shipToCity')) {
        obj['shipToCity'] = ApiClient.convertToType(data['shipToCity'], 'String');
      }
      if (data.hasOwnProperty('shipToState')) {
        obj['shipToState'] = ApiClient.convertToType(data['shipToState'], 'String');
      }
      if (data.hasOwnProperty('shipToZip')) {
        obj['shipToZip'] = ApiClient.convertToType(data['shipToZip'], 'String');
      }
      if (data.hasOwnProperty('shipToCountry')) {
        obj['shipToCountry'] = ApiClient.convertToType(data['shipToCountry'], 'String');
      }
      if (data.hasOwnProperty('shipToPhone')) {
        obj['shipToPhone'] = ApiClient.convertToType(data['shipToPhone'], 'String');
      }
      if (data.hasOwnProperty('shipToEmail')) {
        obj['shipToEmail'] = ApiClient.convertToType(data['shipToEmail'], 'String');
      }
      if (data.hasOwnProperty('billToAttention')) {
        obj['billToAttention'] = ApiClient.convertToType(data['billToAttention'], 'String');
      }
      if (data.hasOwnProperty('billToCompany')) {
        obj['billToCompany'] = ApiClient.convertToType(data['billToCompany'], 'String');
      }
      if (data.hasOwnProperty('billToStreet')) {
        obj['billToStreet'] = ApiClient.convertToType(data['billToStreet'], 'String');
      }
      if (data.hasOwnProperty('billToStreet2')) {
        obj['billToStreet2'] = ApiClient.convertToType(data['billToStreet2'], 'String');
      }
      if (data.hasOwnProperty('billToStreet3')) {
        obj['billToStreet3'] = ApiClient.convertToType(data['billToStreet3'], 'String');
      }
      if (data.hasOwnProperty('billToCity')) {
        obj['billToCity'] = ApiClient.convertToType(data['billToCity'], 'String');
      }
      if (data.hasOwnProperty('billToState')) {
        obj['billToState'] = ApiClient.convertToType(data['billToState'], 'String');
      }
      if (data.hasOwnProperty('billToZip')) {
        obj['billToZip'] = ApiClient.convertToType(data['billToZip'], 'String');
      }
      if (data.hasOwnProperty('billToCountry')) {
        obj['billToCountry'] = ApiClient.convertToType(data['billToCountry'], 'String');
      }
      if (data.hasOwnProperty('billToPhone')) {
        obj['billToPhone'] = ApiClient.convertToType(data['billToPhone'], 'String');
      }
      if (data.hasOwnProperty('billToEmail')) {
        obj['billToEmail'] = ApiClient.convertToType(data['billToEmail'], 'String');
      }
      if (data.hasOwnProperty('shipDate')) {
        obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'Date');
      }
      if (data.hasOwnProperty('freight')) {
        obj['freight'] = ApiClient.convertToType(data['freight'], 'Number');
      }
      if (data.hasOwnProperty('weightLbs')) {
        obj['weightLbs'] = ApiClient.convertToType(data['weightLbs'], 'Number');
      }
      if (data.hasOwnProperty('estimatedWeightLbs')) {
        obj['estimatedWeightLbs'] = ApiClient.convertToType(data['estimatedWeightLbs'], 'Number');
      }
      if (data.hasOwnProperty('numberOfCartons')) {
        obj['numberOfCartons'] = ApiClient.convertToType(data['numberOfCartons'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfPallets')) {
        obj['numberOfPallets'] = ApiClient.convertToType(data['numberOfPallets'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfLineItems')) {
        obj['numberOfLineItems'] = ApiClient.convertToType(data['numberOfLineItems'], 'Integer');
      }
      if (data.hasOwnProperty('completionStatus')) {
        obj['completionStatus'] = ApiClient.convertToType(data['completionStatus'], 'String');
      }
      if (data.hasOwnProperty('holdCode')) {
        obj['holdCode'] = ApiClient.convertToType(data['holdCode'], 'String');
      }
      if (data.hasOwnProperty('shipCode')) {
        obj['shipCode'] = ApiClient.convertToType(data['shipCode'], 'String');
      }
      if (data.hasOwnProperty('orderMessage')) {
        obj['orderMessage'] = ApiClient.convertToType(data['orderMessage'], 'String');
      }
      if (data.hasOwnProperty('division')) {
        obj['division'] = ApiClient.convertToType(data['division'], 'Integer');
      }
      if (data.hasOwnProperty('costCenter')) {
        obj['costCenter'] = ApiClient.convertToType(data['costCenter'], 'String');
      }
      if (data.hasOwnProperty('authorizedBy')) {
        obj['authorizedBy'] = ApiClient.convertToType(data['authorizedBy'], 'String');
      }
      if (data.hasOwnProperty('batchNo')) {
        obj['batchNo'] = ApiClient.convertToType(data['batchNo'], 'String');
      }
      if (data.hasOwnProperty('firstShipDate')) {
        obj['firstShipDate'] = ApiClient.convertToType(data['firstShipDate'], 'Date');
      }
      if (data.hasOwnProperty('lastShipDate')) {
        obj['lastShipDate'] = ApiClient.convertToType(data['lastShipDate'], 'Date');
      }
      if (data.hasOwnProperty('deliverOnDate')) {
        obj['deliverOnDate'] = ApiClient.convertToType(data['deliverOnDate'], 'Date');
      }
      if (data.hasOwnProperty('customerPONo')) {
        obj['customerPONo'] = ApiClient.convertToType(data['customerPONo'], 'String');
      }
      if (data.hasOwnProperty('shipVia')) {
        obj['shipVia'] = ApiClient.convertToType(data['shipVia'], 'String');
      }
      if (data.hasOwnProperty('needByDate')) {
        obj['needByDate'] = ApiClient.convertToType(data['needByDate'], 'Date');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('balanceDue')) {
        obj['balanceDue'] = ApiClient.convertToType(data['balanceDue'], 'Number');
      }
      if (data.hasOwnProperty('totalPaid')) {
        obj['totalPaid'] = ApiClient.convertToType(data['totalPaid'], 'Number');
      }
      if (data.hasOwnProperty('authorizationAmount')) {
        obj['authorizationAmount'] = ApiClient.convertToType(data['authorizationAmount'], 'Number');
      }
      if (data.hasOwnProperty('subtotal')) {
        obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Number');
      }
      if (data.hasOwnProperty('taxOnFreight')) {
        obj['taxOnFreight'] = ApiClient.convertToType(data['taxOnFreight'], 'Number');
      }
      if (data.hasOwnProperty('tax')) {
        obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
      }
      if (data.hasOwnProperty('distributionCharges')) {
        obj['distributionCharges'] = ApiClient.convertToType(data['distributionCharges'], 'Number');
      }
      if (data.hasOwnProperty('shippingCharge')) {
        obj['shippingCharge'] = ApiClient.convertToType(data['shippingCharge'], 'Number');
      }
      if (data.hasOwnProperty('totalDiscount')) {
        obj['totalDiscount'] = ApiClient.convertToType(data['totalDiscount'], 'Number');
      }
      if (data.hasOwnProperty('parcelAccountId')) {
        obj['parcelAccountId'] = ApiClient.convertToType(data['parcelAccountId'], 'Integer');
      }
      if (data.hasOwnProperty('packingSlipTemplateId')) {
        obj['packingSlipTemplateId'] = ApiClient.convertToType(data['packingSlipTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('giftMessage')) {
        obj['giftMessage'] = ApiClient.convertToType(data['giftMessage'], 'String');
      }
      if (data.hasOwnProperty('branchSector')) {
        obj['branchSector'] = ApiClient.convertToType(data['branchSector'], 'String');
      }
      if (data.hasOwnProperty('branchArea')) {
        obj['branchArea'] = ApiClient.convertToType(data['branchArea'], 'String');
      }
      if (data.hasOwnProperty('branchCustomerType')) {
        obj['branchCustomerType'] = ApiClient.convertToType(data['branchCustomerType'], 'String');
      }
      if (data.hasOwnProperty('branchId')) {
        obj['branchId'] = ApiClient.convertToType(data['branchId'], 'String');
      }
      if (data.hasOwnProperty('orderCode')) {
        obj['orderCode'] = ApiClient.convertToType(data['orderCode'], 'String');
      }
      if (data.hasOwnProperty('leadPackageId')) {
        obj['leadPackageId'] = ApiClient.convertToType(data['leadPackageId'], 'String');
      }
      if (data.hasOwnProperty('deliveredDate')) {
        obj['deliveredDate'] = ApiClient.convertToType(data['deliveredDate'], 'Date');
      }
      if (data.hasOwnProperty('totalQty')) {
        obj['totalQty'] = ApiClient.convertToType(data['totalQty'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfWraps')) {
        obj['numberOfWraps'] = ApiClient.convertToType(data['numberOfWraps'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfCases')) {
        obj['numberOfCases'] = ApiClient.convertToType(data['numberOfCases'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfTouches')) {
        obj['numberOfTouches'] = ApiClient.convertToType(data['numberOfTouches'], 'Integer');
      }
      if (data.hasOwnProperty('estimatedNumberOfPicks')) {
        obj['estimatedNumberOfPicks'] = ApiClient.convertToType(data['estimatedNumberOfPicks'], 'Integer');
      }
      if (data.hasOwnProperty('orderConfirmationEmailTemplateId')) {
        obj['orderConfirmationEmailTemplateId'] = ApiClient.convertToType(data['orderConfirmationEmailTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('shipmentConfirmationEmailTemplateId')) {
        obj['shipmentConfirmationEmailTemplateId'] = ApiClient.convertToType(data['shipmentConfirmationEmailTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('externalShippingSystemId')) {
        obj['externalShippingSystemId'] = ApiClient.convertToType(data['externalShippingSystemId'], 'Integer');
      }
      if (data.hasOwnProperty('shippingSystemName')) {
        obj['shippingSystemName'] = ApiClient.convertToType(data['shippingSystemName'], 'String');
      }
      if (data.hasOwnProperty('orderInvoiceTemplateId')) {
        obj['orderInvoiceTemplateId'] = ApiClient.convertToType(data['orderInvoiceTemplateId'], 'Integer');
      }
      if (data.hasOwnProperty('priceMode')) {
        obj['priceMode'] = ApiClient.convertToType(data['priceMode'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {String} alternateUsage
   */
  exports.prototype['alternateUsage'] = undefined;

  /**
   * @member {Number} groupOrderId
   */
  exports.prototype['groupOrderId'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} reqStatusName
   */
  exports.prototype['reqStatusName'] = undefined;

  /**
   * @member {Integer} fulfillmentProcessId
   */
  exports.prototype['fulfillmentProcessId'] = undefined;

  /**
   * @member {Integer} carrierId
   */
  exports.prototype['carrierId'] = undefined;

  /**
   * @member {String} carrierName
   */
  exports.prototype['carrierName'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} mediaCode
   */
  exports.prototype['mediaCode'] = undefined;

  /**
   * @member {String} legacyRestrictionType
   */
  exports.prototype['legacyRestrictionType'] = undefined;

  /**
   * @member {String} reqTypeName
   */
  exports.prototype['reqTypeName'] = undefined;

  /**
   * @member {String} serviceTypeId
   */
  exports.prototype['serviceTypeId'] = undefined;

  /**
   * @member {String} serviceTypeName
   */
  exports.prototype['serviceTypeName'] = undefined;

  /**
   * @member {String} alcoholOrderType
   */
  exports.prototype['alcoholOrderType'] = undefined;

  /**
   * @member {String} distributionChannel
   */
  exports.prototype['distributionChannel'] = undefined;

  /**
   * @member {String} distributionChannelName
   */
  exports.prototype['distributionChannelName'] = undefined;

  /**
   * @member {Integer} priorityCode
   */
  exports.prototype['priorityCode'] = undefined;

  /**
   * @member {Date} orderDate
   */
  exports.prototype['orderDate'] = undefined;

  /**
   * @member {String} enteredBy
   */
  exports.prototype['enteredBy'] = undefined;

  /**
   * @member {Integer} orderReason
   */
  exports.prototype['orderReason'] = undefined;

  /**
   * @member {String} customerOrderNo
   */
  exports.prototype['customerOrderNo'] = undefined;

  /**
   * @member {String} priceLevel
   */
  exports.prototype['priceLevel'] = undefined;

  /**
   * @member {Date} orderCreateDate
   */
  exports.prototype['orderCreateDate'] = undefined;

  /**
   * @member {Date} orderModifyDate
   */
  exports.prototype['orderModifyDate'] = undefined;

  /**
   * @member {Date} shipBy
   */
  exports.prototype['shipBy'] = undefined;

  /**
   * @member {String} stopBackOrders
   */
  exports.prototype['stopBackOrders'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} orderSourceId
   */
  exports.prototype['orderSourceId'] = undefined;

  /**
   * @member {String} orderSourceName
   */
  exports.prototype['orderSourceName'] = undefined;

  /**
   * @member {Integer} integrationPartnerId
   */
  exports.prototype['integrationPartnerId'] = undefined;

  /**
   * @member {String} integrationPartnerName
   */
  exports.prototype['integrationPartnerName'] = undefined;

  /**
   * @member {Integer} orderLoadProgramId
   */
  exports.prototype['orderLoadProgramId'] = undefined;

  /**
   * @member {String} orderLoadProgramName
   */
  exports.prototype['orderLoadProgramName'] = undefined;

  /**
   * @member {Integer} omsOrderNo
   */
  exports.prototype['omsOrderNo'] = undefined;

  /**
   * @member {Integer} omsCustomerId
   */
  exports.prototype['omsCustomerId'] = undefined;

  /**
   * @member {String} shipToAttention
   */
  exports.prototype['shipToAttention'] = undefined;

  /**
   * @member {String} shipToCompany
   */
  exports.prototype['shipToCompany'] = undefined;

  /**
   * @member {String} shipToStreet
   */
  exports.prototype['shipToStreet'] = undefined;

  /**
   * @member {String} shipToStreet2
   */
  exports.prototype['shipToStreet2'] = undefined;

  /**
   * @member {String} shipToStreet3
   */
  exports.prototype['shipToStreet3'] = undefined;

  /**
   * @member {String} shipToCity
   */
  exports.prototype['shipToCity'] = undefined;

  /**
   * @member {String} shipToState
   */
  exports.prototype['shipToState'] = undefined;

  /**
   * @member {String} shipToZip
   */
  exports.prototype['shipToZip'] = undefined;

  /**
   * @member {String} shipToCountry
   */
  exports.prototype['shipToCountry'] = undefined;

  /**
   * @member {String} shipToPhone
   */
  exports.prototype['shipToPhone'] = undefined;

  /**
   * @member {String} shipToEmail
   */
  exports.prototype['shipToEmail'] = undefined;

  /**
   * @member {String} billToAttention
   */
  exports.prototype['billToAttention'] = undefined;

  /**
   * @member {String} billToCompany
   */
  exports.prototype['billToCompany'] = undefined;

  /**
   * @member {String} billToStreet
   */
  exports.prototype['billToStreet'] = undefined;

  /**
   * @member {String} billToStreet2
   */
  exports.prototype['billToStreet2'] = undefined;

  /**
   * @member {String} billToStreet3
   */
  exports.prototype['billToStreet3'] = undefined;

  /**
   * @member {String} billToCity
   */
  exports.prototype['billToCity'] = undefined;

  /**
   * @member {String} billToState
   */
  exports.prototype['billToState'] = undefined;

  /**
   * @member {String} billToZip
   */
  exports.prototype['billToZip'] = undefined;

  /**
   * @member {String} billToCountry
   */
  exports.prototype['billToCountry'] = undefined;

  /**
   * @member {String} billToPhone
   */
  exports.prototype['billToPhone'] = undefined;

  /**
   * @member {String} billToEmail
   */
  exports.prototype['billToEmail'] = undefined;

  /**
   * @member {Date} shipDate
   */
  exports.prototype['shipDate'] = undefined;

  /**
   * @member {Number} freight
   */
  exports.prototype['freight'] = undefined;

  /**
   * @member {Number} weightLbs
   */
  exports.prototype['weightLbs'] = undefined;

  /**
   * @member {Number} estimatedWeightLbs
   */
  exports.prototype['estimatedWeightLbs'] = undefined;

  /**
   * @member {Integer} numberOfCartons
   */
  exports.prototype['numberOfCartons'] = undefined;

  /**
   * @member {Integer} numberOfPallets
   */
  exports.prototype['numberOfPallets'] = undefined;

  /**
   * @member {Integer} numberOfLineItems
   */
  exports.prototype['numberOfLineItems'] = undefined;

  /**
   * @member {String} completionStatus
   */
  exports.prototype['completionStatus'] = undefined;

  /**
   * @member {String} holdCode
   */
  exports.prototype['holdCode'] = undefined;

  /**
   * @member {String} shipCode
   */
  exports.prototype['shipCode'] = undefined;

  /**
   * @member {String} orderMessage
   */
  exports.prototype['orderMessage'] = undefined;

  /**
   * @member {Integer} division
   */
  exports.prototype['division'] = undefined;

  /**
   * @member {String} costCenter
   */
  exports.prototype['costCenter'] = undefined;

  /**
   * @member {String} authorizedBy
   */
  exports.prototype['authorizedBy'] = undefined;

  /**
   * @member {String} batchNo
   */
  exports.prototype['batchNo'] = undefined;

  /**
   * @member {Date} firstShipDate
   */
  exports.prototype['firstShipDate'] = undefined;

  /**
   * @member {Date} lastShipDate
   */
  exports.prototype['lastShipDate'] = undefined;

  /**
   * @member {Date} deliverOnDate
   */
  exports.prototype['deliverOnDate'] = undefined;

  /**
   * @member {String} customerPONo
   */
  exports.prototype['customerPONo'] = undefined;

  /**
   * @member {String} shipVia
   */
  exports.prototype['shipVia'] = undefined;

  /**
   * @member {Date} needByDate
   */
  exports.prototype['needByDate'] = undefined;

  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;

  /**
   * @member {Number} balanceDue
   */
  exports.prototype['balanceDue'] = undefined;

  /**
   * @member {Number} totalPaid
   */
  exports.prototype['totalPaid'] = undefined;

  /**
   * @member {Number} authorizationAmount
   */
  exports.prototype['authorizationAmount'] = undefined;

  /**
   * @member {Number} subtotal
   */
  exports.prototype['subtotal'] = undefined;

  /**
   * @member {Number} taxOnFreight
   */
  exports.prototype['taxOnFreight'] = undefined;

  /**
   * @member {Number} tax
   */
  exports.prototype['tax'] = undefined;

  /**
   * @member {Number} distributionCharges
   */
  exports.prototype['distributionCharges'] = undefined;

  /**
   * @member {Number} shippingCharge
   */
  exports.prototype['shippingCharge'] = undefined;

  /**
   * @member {Number} totalDiscount
   */
  exports.prototype['totalDiscount'] = undefined;

  /**
   * @member {Integer} parcelAccountId
   */
  exports.prototype['parcelAccountId'] = undefined;

  /**
   * @member {Integer} packingSlipTemplateId
   */
  exports.prototype['packingSlipTemplateId'] = undefined;

  /**
   * @member {String} giftMessage
   */
  exports.prototype['giftMessage'] = undefined;

  /**
   * @member {String} branchSector
   */
  exports.prototype['branchSector'] = undefined;

  /**
   * @member {String} branchArea
   */
  exports.prototype['branchArea'] = undefined;

  /**
   * @member {String} branchCustomerType
   */
  exports.prototype['branchCustomerType'] = undefined;

  /**
   * @member {String} branchId
   */
  exports.prototype['branchId'] = undefined;

  /**
   * @member {String} orderCode
   */
  exports.prototype['orderCode'] = undefined;

  /**
   * @member {String} leadPackageId
   */
  exports.prototype['leadPackageId'] = undefined;

  /**
   * @member {Date} deliveredDate
   */
  exports.prototype['deliveredDate'] = undefined;

  /**
   * @member {Integer} totalQty
   */
  exports.prototype['totalQty'] = undefined;

  /**
   * @member {Integer} numberOfWraps
   */
  exports.prototype['numberOfWraps'] = undefined;

  /**
   * @member {Integer} numberOfCases
   */
  exports.prototype['numberOfCases'] = undefined;

  /**
   * @member {Integer} numberOfTouches
   */
  exports.prototype['numberOfTouches'] = undefined;

  /**
   * @member {Integer} estimatedNumberOfPicks
   */
  exports.prototype['estimatedNumberOfPicks'] = undefined;

  /**
   * @member {Integer} orderConfirmationEmailTemplateId
   */
  exports.prototype['orderConfirmationEmailTemplateId'] = undefined;

  /**
   * @member {Integer} shipmentConfirmationEmailTemplateId
   */
  exports.prototype['shipmentConfirmationEmailTemplateId'] = undefined;

  /**
   * @member {Integer} externalShippingSystemId
   */
  exports.prototype['externalShippingSystemId'] = undefined;

  /**
   * @member {String} shippingSystemName
   */
  exports.prototype['shippingSystemName'] = undefined;

  /**
   * @member {Integer} orderInvoiceTemplateId
   */
  exports.prototype['orderInvoiceTemplateId'] = undefined;

  /**
   * @member {String} priceMode
   */
  exports.prototype['priceMode'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
