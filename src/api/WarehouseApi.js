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
   * @version beta
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
     * Callback function to receive the result of the addWarehouseAudit operation.
     * @callback module:api/WarehouseApi~addWarehouseAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a warehouse
     * Adds an audit to an existing warehouse.
     * @param {Integer} warehouseId Id of the warehouse to add an audit to
     * @param {String} warehouseAudit The audit to add
     * @param {module:api/WarehouseApi~addWarehouseAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseAudit = function(warehouseId, warehouseAudit, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseId' is set
      if (warehouseId == undefined || warehouseId == null) {
        throw "Missing the required parameter 'warehouseId' when calling addWarehouseAudit";
      }

      // verify the required parameter 'warehouseAudit' is set
      if (warehouseAudit == undefined || warehouseAudit == null) {
        throw "Missing the required parameter 'warehouseAudit' when calling addWarehouseAudit";
      }


      var pathParams = {
        'warehouseId': warehouseId,
        'warehouseAudit': warehouseAudit
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
        '/beta/warehouse/{warehouseId}/audit/{warehouseAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWarehouseTag operation.
     * @callback module:api/WarehouseApi~addWarehouseTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a warehouse.
     * Adds a tag to an existing warehouse.
     * @param {Integer} warehouseId Id of the warehouse to add a tag to
     * @param {String} warehouseTag The tag to add
     * @param {module:api/WarehouseApi~addWarehouseTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseTag = function(warehouseId, warehouseTag, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseId' is set
      if (warehouseId == undefined || warehouseId == null) {
        throw "Missing the required parameter 'warehouseId' when calling addWarehouseTag";
      }

      // verify the required parameter 'warehouseTag' is set
      if (warehouseTag == undefined || warehouseTag == null) {
        throw "Missing the required parameter 'warehouseTag' when calling addWarehouseTag";
      }


      var pathParams = {
        'warehouseId': warehouseId,
        'warehouseTag': warehouseTag
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
        '/beta/warehouse/{warehouseId}/tag/{warehouseTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWarehouseTag operation.
     * @callback module:api/WarehouseApi~deleteWarehouseTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a warehouse.
     * Deletes an existing warehouse tag using the specified data.
     * @param {Integer} warehouseId Id of the warehouse to remove tag from
     * @param {String} warehouseTag The tag to delete
     * @param {module:api/WarehouseApi~deleteWarehouseTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWarehouseTag = function(warehouseId, warehouseTag, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseId' is set
      if (warehouseId == undefined || warehouseId == null) {
        throw "Missing the required parameter 'warehouseId' when calling deleteWarehouseTag";
      }

      // verify the required parameter 'warehouseTag' is set
      if (warehouseTag == undefined || warehouseTag == null) {
        throw "Missing the required parameter 'warehouseTag' when calling deleteWarehouseTag";
      }


      var pathParams = {
        'warehouseId': warehouseId,
        'warehouseTag': warehouseTag
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouse/{warehouseId}/tag/{warehouseTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
        '/beta/warehouse/duplicate/{warehouseId}', 'GET',
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
        '/beta/warehouse/search', 'GET',
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
        '/beta/warehouse/{warehouseId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseTags operation.
     * @callback module:api/WarehouseApi~getWarehouseTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a warehouse.
     * Get all existing warehouse tags.
     * @param {Integer} warehouseId Id of the warehouse to get tags for
     * @param {module:api/WarehouseApi~getWarehouseTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWarehouseTags = function(warehouseId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseId' is set
      if (warehouseId == undefined || warehouseId == null) {
        throw "Missing the required parameter 'warehouseId' when calling getWarehouseTags";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouse/{warehouseId}/tag', 'GET',
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
        '/beta/warehouse', 'PUT',
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
        '/beta/warehouse/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
