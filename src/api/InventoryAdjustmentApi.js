(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InventoryAdjustment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventoryAdjustment'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventoryAdjustmentApi = factory(root.infoplus.ApiClient, root.infoplus.InventoryAdjustment);
  }
}(this, function(ApiClient, InventoryAdjustment) {
  'use strict';

  /**
   * InventoryAdjustment service.
   * @module api/InventoryAdjustmentApi
   * @version 1.0
   */

  /**
   * Constructs a new InventoryAdjustmentApi. 
   * @alias module:api/InventoryAdjustmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getInventoryAdjustmentByFilter operation.
     * @callback module:api/InventoryAdjustmentApi~getInventoryAdjustmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryAdjustment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search inventoryAdjustments by filter
     * Returns the list of inventoryAdjustments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InventoryAdjustmentApi~getInventoryAdjustmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InventoryAdjustment>}
     */
    this.getInventoryAdjustmentByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [InventoryAdjustment];

      return this.apiClient.callApi(
        '/v1.0/inventoryAdjustment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryAdjustmentById operation.
     * @callback module:api/InventoryAdjustmentApi~getInventoryAdjustmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryAdjustment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an inventoryAdjustment by id
     * Returns the inventoryAdjustment identified by the specified id.
     * @param {Integer} inventoryAdjustmentId Id of the inventoryAdjustment to be returned.
     * @param {module:api/InventoryAdjustmentApi~getInventoryAdjustmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryAdjustment}
     */
    this.getInventoryAdjustmentById = function(inventoryAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId == undefined || inventoryAdjustmentId == null) {
        throw "Missing the required parameter 'inventoryAdjustmentId' when calling getInventoryAdjustmentById";
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InventoryAdjustment;

      return this.apiClient.callApi(
        '/v1.0/inventoryAdjustment/{inventoryAdjustmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
