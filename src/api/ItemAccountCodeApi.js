(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/ItemAccountCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ItemAccountCode'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemAccountCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ItemAccountCode);
  }
}(this, function(ApiClient, ApiResponse, ItemAccountCode) {
  'use strict';

  /**
   * ItemAccountCode service.
   * @module api/ItemAccountCodeApi
   * @version v2.0
   */

  /**
   * Constructs a new ItemAccountCodeApi. 
   * @alias module:api/ItemAccountCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemAccountCode operation.
     * @callback module:api/ItemAccountCodeApi~addItemAccountCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemAccountCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemAccountCode
     * Inserts a new itemAccountCode using the specified data.
     * @param {module:model/ItemAccountCode} body ItemAccountCode to be inserted.
     * @param {module:api/ItemAccountCodeApi~addItemAccountCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemAccountCode}
     */
    this.addItemAccountCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemAccountCode";
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
      var returnType = ItemAccountCode;

      return this.apiClient.callApi(
        '/v2.0/itemAccountCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemAccountCode operation.
     * @callback module:api/ItemAccountCodeApi~deleteItemAccountCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemAccountCode
     * Deletes the itemAccountCode identified by the specified id.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to be deleted.
     * @param {module:api/ItemAccountCodeApi~deleteItemAccountCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemAccountCode = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling deleteItemAccountCode";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
        '/v2.0/itemAccountCode/{itemAccountCodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemAccountCodeById operation.
     * @callback module:api/ItemAccountCodeApi~getDuplicateItemAccountCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemAccountCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemAccountCode by id
     * Returns a duplicated itemAccountCode identified by the specified id.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to be duplicated.
     * @param {module:api/ItemAccountCodeApi~getDuplicateItemAccountCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemAccountCode}
     */
    this.getDuplicateItemAccountCodeById = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling getDuplicateItemAccountCodeById";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
      var returnType = ItemAccountCode;

      return this.apiClient.callApi(
        '/v2.0/itemAccountCode/duplicate/{itemAccountCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemAccountCodeByFilter operation.
     * @callback module:api/ItemAccountCodeApi~getItemAccountCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemAccountCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemAccountCodes by filter
     * Returns the list of itemAccountCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemAccountCodeApi~getItemAccountCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemAccountCode>}
     */
    this.getItemAccountCodeByFilter = function(opts, callback) {
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
      var returnType = [ItemAccountCode];

      return this.apiClient.callApi(
        '/v2.0/itemAccountCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemAccountCodeById operation.
     * @callback module:api/ItemAccountCodeApi~getItemAccountCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemAccountCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemAccountCode by id
     * Returns the itemAccountCode identified by the specified id.
     * @param {Integer} itemAccountCodeId Id of the itemAccountCode to be returned.
     * @param {module:api/ItemAccountCodeApi~getItemAccountCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemAccountCode}
     */
    this.getItemAccountCodeById = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling getItemAccountCodeById";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
      var returnType = ItemAccountCode;

      return this.apiClient.callApi(
        '/v2.0/itemAccountCode/{itemAccountCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemAccountCode operation.
     * @callback module:api/ItemAccountCodeApi~updateItemAccountCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemAccountCode
     * Updates an existing itemAccountCode using the specified data.
     * @param {module:model/ItemAccountCode} body ItemAccountCode to be updated.
     * @param {module:api/ItemAccountCodeApi~updateItemAccountCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemAccountCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemAccountCode";
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
        '/v2.0/itemAccountCode', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
