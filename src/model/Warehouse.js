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
    root.infoplus.Warehouse = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Warehouse model module.
   * @module model/Warehouse
   * @version 1.0
   */

  /**
   * Constructs a new <code>Warehouse</code>.
   * @alias module:model/Warehouse
   * @class
   * @param client
   * @param name
   * @param company
   * @param street1
   * @param city
   * @param state
   * @param zip
   */
  var exports = function(client, name, company, street1, city, state, zip) {


    this['client'] = client;
    this['name'] = name;

    this['company'] = company;
    this['street1'] = street1;


    this['city'] = city;
    this['state'] = state;
    this['zip'] = zip;






  };

  /**
   * Constructs a <code>Warehouse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Warehouse} obj Optional instance to populate.
   * @return {module:model/Warehouse} The populated <code>Warehouse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('street1')) {
        obj['street1'] = ApiClient.convertToType(data['street1'], 'String');
      }
      if (data.hasOwnProperty('street2')) {
        obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
      }
      if (data.hasOwnProperty('street3')) {
        obj['street3'] = ApiClient.convertToType(data['street3'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('locationBarcodePrefix')) {
        obj['locationBarcodePrefix'] = ApiClient.convertToType(data['locationBarcodePrefix'], 'String');
      }
      if (data.hasOwnProperty('lpnPrefix')) {
        obj['lpnPrefix'] = ApiClient.convertToType(data['lpnPrefix'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} client
   */
  exports.prototype['client'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;

  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;

  /**
   * @member {String} street1
   */
  exports.prototype['street1'] = undefined;

  /**
   * @member {String} street2
   */
  exports.prototype['street2'] = undefined;

  /**
   * @member {String} street3
   */
  exports.prototype['street3'] = undefined;

  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;

  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;

  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * @member {String} locationBarcodePrefix
   */
  exports.prototype['locationBarcodePrefix'] = undefined;

  /**
   * @member {String} lpnPrefix
   */
  exports.prototype['lpnPrefix'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;




  return exports;
}));
