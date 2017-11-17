(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Warehouse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Warehouse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WarehouseApi = factory(root.infoplus.ApiClient, root.infoplus.Warehouse);
  }
}(this, function(ApiClient, Warehouse) {
  'use strict';

  /**
   * Warehouse service.
   * @module api/WarehouseApi
   * @version v2.0
   */

  /**
   * Constructs a new WarehouseApi. 
   * @alias module:api/WarehouseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDuplicateWarehouseById operation.
     * @callback module:api/WarehouseApi~getDuplicateWarehouseByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Warehouse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a warehouse by id
     * Returns a duplicated warehouse identified by the specified id.
     * @param {Integer} warehouseId Id of the warehouse to be duplicated.
     * @param {module:api/WarehouseApi~getDuplicateWarehouseByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Warehouse}
     */
    this.getDuplicateWarehouseById = function(warehouseId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseId' is set
      if (warehouseId == undefined || warehouseId == null) {
        throw "Missing the required parameter 'warehouseId' when calling getDuplicateWarehouseById";
      }


      var pathParams = {
        'warehouseId': warehouseId
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
      var returnType = Warehouse;

      return this.apiClient.callApi(
        '/v2.0/warehouse/duplicate/{warehouseId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseByFilter operation.
     * @callback module:api/WarehouseApi~getWarehouseByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Warehouse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search warehouses by filter
     * Returns the list of warehouses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WarehouseApi~getWarehouseByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Warehouse>}
     */
    this.getWarehouseByFilter = function(opts, callback) {
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
      var returnType = [Warehouse];

      return this.apiClient.callApi(
        '/v2.0/warehouse/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseById operation.
     * @callback module:api/WarehouseApi~getWarehouseByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Warehouse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a warehouse by id
     * Returns the warehouse identified by the specified id.
     * @param {Integer} warehouseId Id of the warehouse to be returned.
     * @param {module:api/WarehouseApi~getWarehouseByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Warehouse}
     */
    this.getWarehouseById = function(warehouseId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseId' is set
      if (warehouseId == undefined || warehouseId == null) {
        throw "Missing the required parameter 'warehouseId' when calling getWarehouseById";
      }


      var pathParams = {
        'warehouseId': warehouseId
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
      var returnType = Warehouse;

      return this.apiClient.callApi(
        '/v2.0/warehouse/{warehouseId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWarehouse operation.
     * @callback module:api/WarehouseApi~updateWarehouseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a warehouse
     * Updates an existing warehouse using the specified data.
     * @param {module:model/Warehouse} body Warehouse to be updated.
     * @param {module:api/WarehouseApi~updateWarehouseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWarehouse = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateWarehouse";
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
        '/v2.0/warehouse', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWarehouseCustomFields operation.
     * @callback module:api/WarehouseApi~updateWarehouseCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a warehouse custom fields
     * Updates an existing warehouse custom fields using the specified data.
     * @param {module:model/Warehouse} body Warehouse to be updated.
     * @param {module:api/WarehouseApi~updateWarehouseCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWarehouseCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateWarehouseCustomFields";
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
        '/v2.0/warehouse/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
