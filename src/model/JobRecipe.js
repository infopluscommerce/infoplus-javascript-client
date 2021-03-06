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
    define(['ApiClient', 'model/JobRecipeInput', 'model/JobRecipeOutput', 'model/JobRecipeStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobRecipeInput'), require('./JobRecipeOutput'), require('./JobRecipeStep'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.JobRecipe = factory(root.infoplus.ApiClient, root.infoplus.JobRecipeInput, root.infoplus.JobRecipeOutput, root.infoplus.JobRecipeStep);
  }
}(this, function(ApiClient, JobRecipeInput, JobRecipeOutput, JobRecipeStep) {
  'use strict';




  /**
   * The JobRecipe model module.
   * @module model/JobRecipe
   * @version beta
   */

  /**
   * Constructs a new <code>JobRecipe</code>.
   * @alias module:model/JobRecipe
   * @class
   * @param lobId {Number} 
   * @param name {String} 
   * @param fulfillmentPlanId {Number} 
   * @param layout {String} 
   * @param trackAssemblies {Boolean} 
   * @param trackSteps {Boolean} 
   */
  var exports = function(lobId, name, fulfillmentPlanId, layout, trackAssemblies, trackSteps) {
    var _this = this;





    _this['lobId'] = lobId;
    _this['name'] = name;




    _this['fulfillmentPlanId'] = fulfillmentPlanId;
    _this['layout'] = layout;
    _this['trackAssemblies'] = trackAssemblies;
    _this['trackSteps'] = trackSteps;

  };

  /**
   * Constructs a <code>JobRecipe</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobRecipe} obj Optional instance to populate.
   * @return {module:model/JobRecipe} The populated <code>JobRecipe</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('assemblyInstructions')) {
        obj['assemblyInstructions'] = ApiClient.convertToType(data['assemblyInstructions'], 'String');
      }
      if (data.hasOwnProperty('inputs')) {
        obj['inputs'] = ApiClient.convertToType(data['inputs'], [JobRecipeInput]);
      }
      if (data.hasOwnProperty('outputs')) {
        obj['outputs'] = ApiClient.convertToType(data['outputs'], [JobRecipeOutput]);
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [JobRecipeStep]);
      }
      if (data.hasOwnProperty('fulfillmentPlanId')) {
        obj['fulfillmentPlanId'] = ApiClient.convertToType(data['fulfillmentPlanId'], 'Number');
      }
      if (data.hasOwnProperty('layout')) {
        obj['layout'] = ApiClient.convertToType(data['layout'], 'String');
      }
      if (data.hasOwnProperty('trackAssemblies')) {
        obj['trackAssemblies'] = ApiClient.convertToType(data['trackAssemblies'], 'Boolean');
      }
      if (data.hasOwnProperty('trackSteps')) {
        obj['trackSteps'] = ApiClient.convertToType(data['trackSteps'], 'Boolean');
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
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} assemblyInstructions
   */
  exports.prototype['assemblyInstructions'] = undefined;
  /**
   * @member {Array.<module:model/JobRecipeInput>} inputs
   */
  exports.prototype['inputs'] = undefined;
  /**
   * @member {Array.<module:model/JobRecipeOutput>} outputs
   */
  exports.prototype['outputs'] = undefined;
  /**
   * @member {Array.<module:model/JobRecipeStep>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * @member {Number} fulfillmentPlanId
   */
  exports.prototype['fulfillmentPlanId'] = undefined;
  /**
   * @member {String} layout
   */
  exports.prototype['layout'] = undefined;
  /**
   * @member {Boolean} trackAssemblies
   * @default false
   */
  exports.prototype['trackAssemblies'] = false;
  /**
   * @member {Boolean} trackSteps
   * @default false
   */
  exports.prototype['trackSteps'] = false;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


