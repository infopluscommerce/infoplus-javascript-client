(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemSummaryCode', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemSummaryCode'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemSummaryCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemSummaryCode, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemSummaryCode, ApiResponse) {
  'use strict';

  /**
   * ItemSummaryCode service.
   * @module api/ItemSummaryCodeApi
   * @version v2.0
   */

  /**
   * Constructs a new ItemSummaryCodeApi. 
   * @alias module:api/ItemSummaryCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemSummaryCode operation.
     * @callback module:api/ItemSummaryCodeApi~addItemSummaryCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSummaryCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemSummaryCode
     * Inserts a new itemSummaryCode using the specified data.
     * @param {module:model/ItemSummaryCode} body ItemSummaryCode to be inserted.
     * @param {module:api/ItemSummaryCodeApi~addItemSummaryCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSummaryCode}
     */
    this.addItemSummaryCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemSummaryCode";
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
      var returnType = ItemSummaryCode;

      return this.apiClient.callApi(
        '/v2.0/itemSummaryCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSummaryCode operation.
     * @callback module:api/ItemSummaryCodeApi~deleteItemSummaryCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemSummaryCode
     * Deletes the itemSummaryCode identified by the specified id.
     * @param {Integer} itemSummaryCodeId Id of the itemSummaryCode to be deleted.
     * @param {module:api/ItemSummaryCodeApi~deleteItemSummaryCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSummaryCode = function(itemSummaryCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSummaryCodeId' is set
      if (itemSummaryCodeId == undefined || itemSummaryCodeId == null) {
        throw "Missing the required parameter 'itemSummaryCodeId' when calling deleteItemSummaryCode";
      }


      var pathParams = {
        'itemSummaryCodeId': itemSummaryCodeId
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
        '/v2.0/itemSummaryCode/{itemSummaryCodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemSummaryCodeById operation.
     * @callback module:api/ItemSummaryCodeApi~getDuplicateItemSummaryCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSummaryCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemSummaryCode by id
     * Returns a duplicated itemSummaryCode identified by the specified id.
     * @param {Integer} itemSummaryCodeId Id of the itemSummaryCode to be duplicated.
     * @param {module:api/ItemSummaryCodeApi~getDuplicateItemSummaryCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSummaryCode}
     */
    this.getDuplicateItemSummaryCodeById = function(itemSummaryCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSummaryCodeId' is set
      if (itemSummaryCodeId == undefined || itemSummaryCodeId == null) {
        throw "Missing the required parameter 'itemSummaryCodeId' when calling getDuplicateItemSummaryCodeById";
      }


      var pathParams = {
        'itemSummaryCodeId': itemSummaryCodeId
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
      var returnType = ItemSummaryCode;

      return this.apiClient.callApi(
        '/v2.0/itemSummaryCode/duplicate/{itemSummaryCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSummaryCodeByFilter operation.
     * @callback module:api/ItemSummaryCodeApi~getItemSummaryCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemSummaryCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemSummaryCodes by filter
     * Returns the list of itemSummaryCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemSummaryCodeApi~getItemSummaryCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemSummaryCode>}
     */
    this.getItemSummaryCodeByFilter = function(opts, callback) {
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
      var returnType = [ItemSummaryCode];

      return this.apiClient.callApi(
        '/v2.0/itemSummaryCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSummaryCodeById operation.
     * @callback module:api/ItemSummaryCodeApi~getItemSummaryCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSummaryCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemSummaryCode by id
     * Returns the itemSummaryCode identified by the specified id.
     * @param {Integer} itemSummaryCodeId Id of the itemSummaryCode to be returned.
     * @param {module:api/ItemSummaryCodeApi~getItemSummaryCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSummaryCode}
     */
    this.getItemSummaryCodeById = function(itemSummaryCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSummaryCodeId' is set
      if (itemSummaryCodeId == undefined || itemSummaryCodeId == null) {
        throw "Missing the required parameter 'itemSummaryCodeId' when calling getItemSummaryCodeById";
      }


      var pathParams = {
        'itemSummaryCodeId': itemSummaryCodeId
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
      var returnType = ItemSummaryCode;

      return this.apiClient.callApi(
        '/v2.0/itemSummaryCode/{itemSummaryCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemSummaryCode operation.
     * @callback module:api/ItemSummaryCodeApi~updateItemSummaryCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemSummaryCode
     * Updates an existing itemSummaryCode using the specified data.
     * @param {module:model/ItemSummaryCode} body ItemSummaryCode to be updated.
     * @param {module:api/ItemSummaryCodeApi~updateItemSummaryCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemSummaryCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemSummaryCode";
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
        '/v2.0/itemSummaryCode', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
