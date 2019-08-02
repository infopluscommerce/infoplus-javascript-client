/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.EdiDocument = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EdiDocument model module.
   * @module model/EdiDocument
   * @version beta
   */

  /**
   * Constructs a new <code>EdiDocument</code>.
   * @alias module:model/EdiDocument
   * @class
   * @param ediConnectionId {Number} 
   * @param transactionType {String} 
   * @param direction {String} 
   * @param documentTypeId {Number} 
   * @param status {String} 
   * @param body {String} 
   * @param jsonBody {String} 
   */
  var exports = function(ediConnectionId, transactionType, direction, documentTypeId, status, body, jsonBody) {
    var _this = this;


    _this['ediConnectionId'] = ediConnectionId;

    _this['transactionType'] = transactionType;
    _this['direction'] = direction;
    _this['documentTypeId'] = documentTypeId;
    _this['status'] = status;



    _this['body'] = body;
    _this['jsonBody'] = jsonBody;



  };

  /**
   * Constructs a <code>EdiDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EdiDocument} obj Optional instance to populate.
   * @return {module:model/EdiDocument} The populated <code>EdiDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('ediConnectionId')) {
        obj['ediConnectionId'] = ApiClient.convertToType(data['ediConnectionId'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('transactionType')) {
        obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('documentTypeId')) {
        obj['documentTypeId'] = ApiClient.convertToType(data['documentTypeId'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('interchangeIndex')) {
        obj['interchangeIndex'] = ApiClient.convertToType(data['interchangeIndex'], 'Number');
      }
      if (data.hasOwnProperty('groupIndex')) {
        obj['groupIndex'] = ApiClient.convertToType(data['groupIndex'], 'Number');
      }
      if (data.hasOwnProperty('transactionIndex')) {
        obj['transactionIndex'] = ApiClient.convertToType(data['transactionIndex'], 'Number');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('jsonBody')) {
        obj['jsonBody'] = ApiClient.convertToType(data['jsonBody'], 'String');
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
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} ediConnectionId
   */
  exports.prototype['ediConnectionId'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {String} transactionType
   */
  exports.prototype['transactionType'] = undefined;
  /**
   * @member {String} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {Number} documentTypeId
   */
  exports.prototype['documentTypeId'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} interchangeIndex
   */
  exports.prototype['interchangeIndex'] = undefined;
  /**
   * @member {Number} groupIndex
   */
  exports.prototype['groupIndex'] = undefined;
  /**
   * @member {Number} transactionIndex
   */
  exports.prototype['transactionIndex'] = undefined;
  /**
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {String} jsonBody
   */
  exports.prototype['jsonBody'] = undefined;
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

