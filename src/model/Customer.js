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
    root.infoplus.Customer = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Customer model module.
   * @module model/Customer
   * @version 1.0
   */

  /**
   * Constructs a new <code>Customer</code>.
   * @alias module:model/Customer
   * @class
   * @param lobId
   * @param customerNo
   * @param name
   * @param street
   * @param city
   * @param zipCode
   * @param country
   * @param packageCarrierId
   * @param truckCarrierId
   * @param weightBreak
   * @param residential
   */
  var exports = function(lobId, customerNo, name, street, city, zipCode, country, packageCarrierId, truckCarrierId, weightBreak, residential) {


    this['lobId'] = lobId;
    this['customerNo'] = customerNo;
    this['name'] = name;

    this['street'] = street;


    this['city'] = city;

    this['zipCode'] = zipCode;
    this['country'] = country;




    this['packageCarrierId'] = packageCarrierId;
    this['truckCarrierId'] = truckCarrierId;
    this['weightBreak'] = weightBreak;


















    this['residential'] = residential;










  };

  /**
   * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Customer} obj Optional instance to populate.
   * @return {module:model/Customer} The populated <code>Customer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('customerNo')) {
        obj['customerNo'] = ApiClient.convertToType(data['customerNo'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('attention')) {
        obj['attention'] = ApiClient.convertToType(data['attention'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('street2')) {
        obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
      }
      if (data.hasOwnProperty('street3Province')) {
        obj['street3Province'] = ApiClient.convertToType(data['street3Province'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('bossBranch')) {
        obj['bossBranch'] = ApiClient.convertToType(data['bossBranch'], 'String');
      }
      if (data.hasOwnProperty('packageCarrierId')) {
        obj['packageCarrierId'] = ApiClient.convertToType(data['packageCarrierId'], 'Integer');
      }
      if (data.hasOwnProperty('truckCarrierId')) {
        obj['truckCarrierId'] = ApiClient.convertToType(data['truckCarrierId'], 'Integer');
      }
      if (data.hasOwnProperty('weightBreak')) {
        obj['weightBreak'] = ApiClient.convertToType(data['weightBreak'], 'Integer');
      }
      if (data.hasOwnProperty('sector')) {
        obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
      }
      if (data.hasOwnProperty('division')) {
        obj['division'] = ApiClient.convertToType(data['division'], 'Integer');
      }
      if (data.hasOwnProperty('costCenter')) {
        obj['costCenter'] = ApiClient.convertToType(data['costCenter'], 'String');
      }
      if (data.hasOwnProperty('county')) {
        obj['county'] = ApiClient.convertToType(data['county'], 'String');
      }
      if (data.hasOwnProperty('area')) {
        obj['area'] = ApiClient.convertToType(data['area'], 'String');
      }
      if (data.hasOwnProperty('customerType')) {
        obj['customerType'] = ApiClient.convertToType(data['customerType'], 'String');
      }
      if (data.hasOwnProperty('massLevel')) {
        obj['massLevel'] = ApiClient.convertToType(data['massLevel'], 'String');
      }
      if (data.hasOwnProperty('massFactor')) {
        obj['massFactor'] = ApiClient.convertToType(data['massFactor'], 'Number');
      }
      if (data.hasOwnProperty('priceLevel')) {
        obj['priceLevel'] = ApiClient.convertToType(data['priceLevel'], 'String');
      }
      if (data.hasOwnProperty('openDate')) {
        obj['openDate'] = ApiClient.convertToType(data['openDate'], 'Date');
      }
      if (data.hasOwnProperty('closeDate')) {
        obj['closeDate'] = ApiClient.convertToType(data['closeDate'], 'Date');
      }
      if (data.hasOwnProperty('restrictionPercent')) {
        obj['restrictionPercent'] = ApiClient.convertToType(data['restrictionPercent'], 'Integer');
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('cycleDate')) {
        obj['cycleDate'] = ApiClient.convertToType(data['cycleDate'], 'Date');
      }
      if (data.hasOwnProperty('manager')) {
        obj['manager'] = ApiClient.convertToType(data['manager'], 'String');
      }
      if (data.hasOwnProperty('alternateInventory')) {
        obj['alternateInventory'] = ApiClient.convertToType(data['alternateInventory'], 'Integer');
      }
      if (data.hasOwnProperty('pin')) {
        obj['pin'] = ApiClient.convertToType(data['pin'], 'String');
      }
      if (data.hasOwnProperty('faxGone')) {
        obj['faxGone'] = ApiClient.convertToType(data['faxGone'], 'String');
      }
      if (data.hasOwnProperty('residential')) {
        obj['residential'] = ApiClient.convertToType(data['residential'], 'String');
      }
      if (data.hasOwnProperty('csrBranch')) {
        obj['csrBranch'] = ApiClient.convertToType(data['csrBranch'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText1')) {
        obj['extrinsicText1'] = ApiClient.convertToType(data['extrinsicText1'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText2')) {
        obj['extrinsicText2'] = ApiClient.convertToType(data['extrinsicText2'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText3')) {
        obj['extrinsicText3'] = ApiClient.convertToType(data['extrinsicText3'], 'String');
      }
      if (data.hasOwnProperty('extrinsicNumber1')) {
        obj['extrinsicNumber1'] = ApiClient.convertToType(data['extrinsicNumber1'], 'Integer');
      }
      if (data.hasOwnProperty('extrinsicNumber2')) {
        obj['extrinsicNumber2'] = ApiClient.convertToType(data['extrinsicNumber2'], 'Integer');
      }
      if (data.hasOwnProperty('extrinsicDecimal1')) {
        obj['extrinsicDecimal1'] = ApiClient.convertToType(data['extrinsicDecimal1'], 'Number');
      }
      if (data.hasOwnProperty('extrinsicDecimal2')) {
        obj['extrinsicDecimal2'] = ApiClient.convertToType(data['extrinsicDecimal2'], 'Number');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('omsCustomerId')) {
        obj['omsCustomerId'] = ApiClient.convertToType(data['omsCustomerId'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} customerNo
   */
  exports.prototype['customerNo'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} attention
   */
  exports.prototype['attention'] = undefined;

  /**
   * @member {String} street
   */
  exports.prototype['street'] = undefined;

  /**
   * @member {String} street2
   */
  exports.prototype['street2'] = undefined;

  /**
   * @member {String} street3Province
   */
  exports.prototype['street3Province'] = undefined;

  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;

  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;

  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {String} bossBranch
   */
  exports.prototype['bossBranch'] = undefined;

  /**
   * @member {Integer} packageCarrierId
   */
  exports.prototype['packageCarrierId'] = undefined;

  /**
   * @member {Integer} truckCarrierId
   */
  exports.prototype['truckCarrierId'] = undefined;

  /**
   * @member {Integer} weightBreak
   */
  exports.prototype['weightBreak'] = undefined;

  /**
   * @member {String} sector
   */
  exports.prototype['sector'] = undefined;

  /**
   * @member {Integer} division
   */
  exports.prototype['division'] = undefined;

  /**
   * @member {String} costCenter
   */
  exports.prototype['costCenter'] = undefined;

  /**
   * @member {String} county
   */
  exports.prototype['county'] = undefined;

  /**
   * @member {String} area
   */
  exports.prototype['area'] = undefined;

  /**
   * @member {String} customerType
   */
  exports.prototype['customerType'] = undefined;

  /**
   * @member {String} massLevel
   */
  exports.prototype['massLevel'] = undefined;

  /**
   * @member {Number} massFactor
   */
  exports.prototype['massFactor'] = undefined;

  /**
   * @member {String} priceLevel
   */
  exports.prototype['priceLevel'] = undefined;

  /**
   * @member {Date} openDate
   */
  exports.prototype['openDate'] = undefined;

  /**
   * @member {Date} closeDate
   */
  exports.prototype['closeDate'] = undefined;

  /**
   * @member {Integer} restrictionPercent
   */
  exports.prototype['restrictionPercent'] = undefined;

  /**
   * @member {String} externalId
   */
  exports.prototype['externalId'] = undefined;

  /**
   * @member {Date} cycleDate
   */
  exports.prototype['cycleDate'] = undefined;

  /**
   * @member {String} manager
   */
  exports.prototype['manager'] = undefined;

  /**
   * @member {Integer} alternateInventory
   */
  exports.prototype['alternateInventory'] = undefined;

  /**
   * @member {String} pin
   */
  exports.prototype['pin'] = undefined;

  /**
   * @member {String} faxGone
   */
  exports.prototype['faxGone'] = undefined;

  /**
   * @member {String} residential
   */
  exports.prototype['residential'] = undefined;

  /**
   * @member {String} csrBranch
   */
  exports.prototype['csrBranch'] = undefined;

  /**
   * @member {String} extrinsicText1
   */
  exports.prototype['extrinsicText1'] = undefined;

  /**
   * @member {String} extrinsicText2
   */
  exports.prototype['extrinsicText2'] = undefined;

  /**
   * @member {String} extrinsicText3
   */
  exports.prototype['extrinsicText3'] = undefined;

  /**
   * @member {Integer} extrinsicNumber1
   */
  exports.prototype['extrinsicNumber1'] = undefined;

  /**
   * @member {Integer} extrinsicNumber2
   */
  exports.prototype['extrinsicNumber2'] = undefined;

  /**
   * @member {Number} extrinsicDecimal1
   */
  exports.prototype['extrinsicDecimal1'] = undefined;

  /**
   * @member {Number} extrinsicDecimal2
   */
  exports.prototype['extrinsicDecimal2'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} omsCustomerId
   */
  exports.prototype['omsCustomerId'] = undefined;




  return exports;
}));
