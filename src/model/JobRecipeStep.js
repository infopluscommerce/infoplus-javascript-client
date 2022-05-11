/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: v3.0
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
    root.infoplus.JobRecipeStep = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobRecipeStep model module.
   * @module model/JobRecipeStep
   * @version v3.0
   */

  /**
   * Constructs a new <code>JobRecipeStep</code>.
   * @alias module:model/JobRecipeStep
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;


  };

  /**
   * Constructs a <code>JobRecipeStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobRecipeStep} obj Optional instance to populate.
   * @return {module:model/JobRecipeStep} The populated <code>JobRecipeStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sequenceNo')) {
        obj['sequenceNo'] = ApiClient.convertToType(data['sequenceNo'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('assemblyInstructions')) {
        obj['assemblyInstructions'] = ApiClient.convertToType(data['assemblyInstructions'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Number} sequenceNo
   */
  exports.prototype['sequenceNo'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} assemblyInstructions
   */
  exports.prototype['assemblyInstructions'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


