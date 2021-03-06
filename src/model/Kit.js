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
    define(['ApiClient', 'model/KitComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KitComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.Kit = factory(root.infoplus.ApiClient, root.infoplus.KitComponent);
  }
}(this, function(ApiClient, KitComponent) {
  'use strict';




  /**
   * The Kit model module.
   * @module model/Kit
   * @version beta
   */

  /**
   * Constructs a new <code>Kit</code>.
   * @alias module:model/Kit
   * @class
   * @param lobId {Number} 
   * @param kitSKU {String} 
   * @param touches {Number} 
   * @param isKOD {String} 
   * @param kitComponentList {Array.<module:model/KitComponent>} 
   */
  var exports = function(lobId, kitSKU, touches, isKOD, kitComponentList) {
    var _this = this;

    _this['lobId'] = lobId;

    _this['kitSKU'] = kitSKU;













    _this['touches'] = touches;



    _this['isKOD'] = isKOD;

    _this['kitComponentList'] = kitComponentList;

  };

  /**
   * Constructs a <code>Kit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Kit} obj Optional instance to populate.
   * @return {module:model/Kit} The populated <code>Kit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('kitSKU')) {
        obj['kitSKU'] = ApiClient.convertToType(data['kitSKU'], 'String');
      }
      if (data.hasOwnProperty('packagingType')) {
        obj['packagingType'] = ApiClient.convertToType(data['packagingType'], 'String');
      }
      if (data.hasOwnProperty('other')) {
        obj['other'] = ApiClient.convertToType(data['other'], 'String');
      }
      if (data.hasOwnProperty('numberOfComponents')) {
        obj['numberOfComponents'] = ApiClient.convertToType(data['numberOfComponents'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('line1')) {
        obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
      }
      if (data.hasOwnProperty('line2')) {
        obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
      }
      if (data.hasOwnProperty('line3')) {
        obj['line3'] = ApiClient.convertToType(data['line3'], 'String');
      }
      if (data.hasOwnProperty('line4')) {
        obj['line4'] = ApiClient.convertToType(data['line4'], 'String');
      }
      if (data.hasOwnProperty('line5')) {
        obj['line5'] = ApiClient.convertToType(data['line5'], 'String');
      }
      if (data.hasOwnProperty('line6')) {
        obj['line6'] = ApiClient.convertToType(data['line6'], 'String');
      }
      if (data.hasOwnProperty('line7')) {
        obj['line7'] = ApiClient.convertToType(data['line7'], 'String');
      }
      if (data.hasOwnProperty('line8')) {
        obj['line8'] = ApiClient.convertToType(data['line8'], 'String');
      }
      if (data.hasOwnProperty('touches')) {
        obj['touches'] = ApiClient.convertToType(data['touches'], 'Number');
      }
      if (data.hasOwnProperty('minInvQty')) {
        obj['minInvQty'] = ApiClient.convertToType(data['minInvQty'], 'Number');
      }
      if (data.hasOwnProperty('midInvQty')) {
        obj['midInvQty'] = ApiClient.convertToType(data['midInvQty'], 'Number');
      }
      if (data.hasOwnProperty('maxInvQty')) {
        obj['maxInvQty'] = ApiClient.convertToType(data['maxInvQty'], 'Number');
      }
      if (data.hasOwnProperty('isKOD')) {
        obj['isKOD'] = ApiClient.convertToType(data['isKOD'], 'String');
      }
      if (data.hasOwnProperty('kodType')) {
        obj['kodType'] = ApiClient.convertToType(data['kodType'], 'String');
      }
      if (data.hasOwnProperty('kitComponentList')) {
        obj['kitComponentList'] = ApiClient.convertToType(data['kitComponentList'], [KitComponent]);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} kitSKU
   */
  exports.prototype['kitSKU'] = undefined;
  /**
   * @member {String} packagingType
   */
  exports.prototype['packagingType'] = undefined;
  /**
   * @member {String} other
   */
  exports.prototype['other'] = undefined;
  /**
   * @member {Number} numberOfComponents
   */
  exports.prototype['numberOfComponents'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {String} line1
   */
  exports.prototype['line1'] = undefined;
  /**
   * @member {String} line2
   */
  exports.prototype['line2'] = undefined;
  /**
   * @member {String} line3
   */
  exports.prototype['line3'] = undefined;
  /**
   * @member {String} line4
   */
  exports.prototype['line4'] = undefined;
  /**
   * @member {String} line5
   */
  exports.prototype['line5'] = undefined;
  /**
   * @member {String} line6
   */
  exports.prototype['line6'] = undefined;
  /**
   * @member {String} line7
   */
  exports.prototype['line7'] = undefined;
  /**
   * @member {String} line8
   */
  exports.prototype['line8'] = undefined;
  /**
   * @member {Number} touches
   */
  exports.prototype['touches'] = undefined;
  /**
   * @member {Number} minInvQty
   */
  exports.prototype['minInvQty'] = undefined;
  /**
   * @member {Number} midInvQty
   */
  exports.prototype['midInvQty'] = undefined;
  /**
   * @member {Number} maxInvQty
   */
  exports.prototype['maxInvQty'] = undefined;
  /**
   * @member {String} isKOD
   */
  exports.prototype['isKOD'] = undefined;
  /**
   * @member {String} kodType
   */
  exports.prototype['kodType'] = undefined;
  /**
   * @member {Array.<module:model/KitComponent>} kitComponentList
   */
  exports.prototype['kitComponentList'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


