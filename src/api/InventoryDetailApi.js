(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InventoryDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventoryDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventoryDetailApi = factory(root.infoplus.ApiClient, root.infoplus.InventoryDetail);
  }
}(this, function(ApiClient, InventoryDetail) {
  'use strict';

  /**
   * InventoryDetail service.
   * @module api/InventoryDetailApi
   * @version 1.0
   */

  /**
   * Constructs a new InventoryDetailApi. 
   * @alias module:api/InventoryDetailApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getInventoryDetailByFilter operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryDetail>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search inventoryDetails by filter
     * Returns the list of inventoryDetails that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InventoryDetailApi~getInventoryDetailByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InventoryDetail>}
     */
    this.getInventoryDetailByFilter = function(opts, callback) {
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
      var returnType = [InventoryDetail];

      return this.apiClient.callApi(
        '/v1.0/inventoryDetail/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailById operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an inventoryDetail by id
     * Returns the inventoryDetail identified by the specified id.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to be returned.
     * @param {module:api/InventoryDetailApi~getInventoryDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryDetail}
     */
    this.getInventoryDetailById = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling getInventoryDetailById";
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
      var returnType = InventoryDetail;

      return this.apiClient.callApi(
        '/v1.0/inventoryDetail/{inventoryDetailId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
