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
   * @version v2.0
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
     * Callback function to receive the result of the getDuplicateInventoryDetailById operation.
     * @callback module:api/InventoryDetailApi~getDuplicateInventoryDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an inventoryDetail by id
     * Returns a duplicated inventoryDetail identified by the specified id.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to be duplicated.
     * @param {module:api/InventoryDetailApi~getDuplicateInventoryDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryDetail}
     */
    this.getDuplicateInventoryDetailById = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling getDuplicateInventoryDetailById";
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
        '/v2.0/inventoryDetail/duplicate/{inventoryDetailId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
        '/v2.0/inventoryDetail/search', 'GET',
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
        '/v2.0/inventoryDetail/{inventoryDetailId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInventoryDetailCustomFields operation.
     * @callback module:api/InventoryDetailApi~updateInventoryDetailCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an inventoryDetail custom fields
     * Updates an existing inventoryDetail custom fields using the specified data.
     * @param {module:model/InventoryDetail} body InventoryDetail to be updated.
     * @param {module:api/InventoryDetailApi~updateInventoryDetailCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInventoryDetailCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateInventoryDetailCustomFields";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.0/inventoryDetail/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
