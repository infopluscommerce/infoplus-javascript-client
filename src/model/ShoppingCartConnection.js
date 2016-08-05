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
    root.infoplus.ShoppingCartConnection = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ShoppingCartConnection model module.
   * @module model/ShoppingCartConnection
   * @version beta
   */

  /**
   * Constructs a new <code>ShoppingCartConnection</code>.
   * @alias module:model/ShoppingCartConnection
   * @class
   * @param lobId
   * @param orderSourceId
   * @param integrationPartnerId
   * @param connectionType
   * @param infoplusSKUFieldToMap
   * @param shoppingCartSKUFieldToMap
   * @param name
   * @param shoppingCartStoreURL
   * @param syncOrders
   * @param syncInventory
   * @param syncTrackingData
   */
  var exports = function(lobId, orderSourceId, integrationPartnerId, connectionType, infoplusSKUFieldToMap, shoppingCartSKUFieldToMap, name, shoppingCartStoreURL, syncOrders, syncInventory, syncTrackingData) {






    this['lobId'] = lobId;
    this['orderSourceId'] = orderSourceId;
    this['integrationPartnerId'] = integrationPartnerId;
    this['connectionType'] = connectionType;

    this['infoplusSKUFieldToMap'] = infoplusSKUFieldToMap;
    this['shoppingCartSKUFieldToMap'] = shoppingCartSKUFieldToMap;
    this['name'] = name;
    this['shoppingCartStoreURL'] = shoppingCartStoreURL;


    this['syncOrders'] = syncOrders;
    this['syncInventory'] = syncInventory;
    this['syncTrackingData'] = syncTrackingData;


  };

  /**
   * Constructs a <code>ShoppingCartConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShoppingCartConnection} obj Optional instance to populate.
   * @return {module:model/ShoppingCartConnection} The populated <code>ShoppingCartConnection</code> instance.
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
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Integer');
      }
      if (data.hasOwnProperty('nonce')) {
        obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('orderSourceId')) {
        obj['orderSourceId'] = ApiClient.convertToType(data['orderSourceId'], 'Integer');
      }
      if (data.hasOwnProperty('integrationPartnerId')) {
        obj['integrationPartnerId'] = ApiClient.convertToType(data['integrationPartnerId'], 'Integer');
      }
      if (data.hasOwnProperty('connectionType')) {
        obj['connectionType'] = ApiClient.convertToType(data['connectionType'], 'String');
      }
      if (data.hasOwnProperty('itemFilterId')) {
        obj['itemFilterId'] = ApiClient.convertToType(data['itemFilterId'], 'Integer');
      }
      if (data.hasOwnProperty('infoplusSKUFieldToMap')) {
        obj['infoplusSKUFieldToMap'] = ApiClient.convertToType(data['infoplusSKUFieldToMap'], 'String');
      }
      if (data.hasOwnProperty('shoppingCartSKUFieldToMap')) {
        obj['shoppingCartSKUFieldToMap'] = ApiClient.convertToType(data['shoppingCartSKUFieldToMap'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('shoppingCartStoreURL')) {
        obj['shoppingCartStoreURL'] = ApiClient.convertToType(data['shoppingCartStoreURL'], 'String');
      }
      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('syncOrders')) {
        obj['syncOrders'] = ApiClient.convertToType(data['syncOrders'], 'Boolean');
      }
      if (data.hasOwnProperty('syncInventory')) {
        obj['syncInventory'] = ApiClient.convertToType(data['syncInventory'], 'Boolean');
      }
      if (data.hasOwnProperty('syncTrackingData')) {
        obj['syncTrackingData'] = ApiClient.convertToType(data['syncTrackingData'], 'Boolean');
      }
      if (data.hasOwnProperty('syncInventoryLevelsLastRunTime')) {
        obj['syncInventoryLevelsLastRunTime'] = ApiClient.convertToType(data['syncInventoryLevelsLastRunTime'], 'Date');
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
   * @member {Integer} clientId
   */
  exports.prototype['clientId'] = undefined;

  /**
   * @member {String} nonce
   */
  exports.prototype['nonce'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Integer} orderSourceId
   */
  exports.prototype['orderSourceId'] = undefined;

  /**
   * @member {Integer} integrationPartnerId
   */
  exports.prototype['integrationPartnerId'] = undefined;

  /**
   * @member {String} connectionType
   */
  exports.prototype['connectionType'] = undefined;

  /**
   * @member {Integer} itemFilterId
   */
  exports.prototype['itemFilterId'] = undefined;

  /**
   * @member {String} infoplusSKUFieldToMap
   */
  exports.prototype['infoplusSKUFieldToMap'] = undefined;

  /**
   * @member {String} shoppingCartSKUFieldToMap
   */
  exports.prototype['shoppingCartSKUFieldToMap'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} shoppingCartStoreURL
   */
  exports.prototype['shoppingCartStoreURL'] = undefined;

  /**
   * @member {String} accessCode
   */
  exports.prototype['accessCode'] = undefined;

  /**
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;

  /**
   * @member {Boolean} syncOrders
   * @default false
   */
  exports.prototype['syncOrders'] = false;

  /**
   * @member {Boolean} syncInventory
   * @default false
   */
  exports.prototype['syncInventory'] = false;

  /**
   * @member {Boolean} syncTrackingData
   * @default false
   */
  exports.prototype['syncTrackingData'] = false;

  /**
   * @member {Date} syncInventoryLevelsLastRunTime
   */
  exports.prototype['syncInventoryLevelsLastRunTime'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
