(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ReceivingWorksheet', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReceivingWorksheet'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReceivingWorksheetApi = factory(root.infoplus.ApiClient, root.infoplus.ReceivingWorksheet, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ReceivingWorksheet, ApiResponse) {
  'use strict';

  /**
   * ReceivingWorksheet service.
   * @module api/ReceivingWorksheetApi
   * @version v2.0
   */

  /**
   * Constructs a new ReceivingWorksheetApi. 
   * @alias module:api/ReceivingWorksheetApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addReceivingWorksheet operation.
     * @callback module:api/ReceivingWorksheetApi~addReceivingWorksheetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReceivingWorksheet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a receivingWorksheet
     * Inserts a new receivingWorksheet using the specified data.
     * @param {module:model/ReceivingWorksheet} body ReceivingWorksheet to be inserted.
     * @param {module:api/ReceivingWorksheetApi~addReceivingWorksheetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReceivingWorksheet}
     */
    this.addReceivingWorksheet = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addReceivingWorksheet";
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
      var returnType = ReceivingWorksheet;

      return this.apiClient.callApi(
        '/v2.0/receivingWorksheet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReceivingWorksheet operation.
     * @callback module:api/ReceivingWorksheetApi~deleteReceivingWorksheetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a receivingWorksheet
     * Deletes the receivingWorksheet identified by the specified id.
     * @param {Integer} receivingWorksheetId Id of the receivingWorksheet to be deleted.
     * @param {module:api/ReceivingWorksheetApi~deleteReceivingWorksheetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReceivingWorksheet = function(receivingWorksheetId, callback) {
      var postBody = null;

      // verify the required parameter 'receivingWorksheetId' is set
      if (receivingWorksheetId == undefined || receivingWorksheetId == null) {
        throw "Missing the required parameter 'receivingWorksheetId' when calling deleteReceivingWorksheet";
      }


      var pathParams = {
        'receivingWorksheetId': receivingWorksheetId
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
        '/v2.0/receivingWorksheet/{receivingWorksheetId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateReceivingWorksheetById operation.
     * @callback module:api/ReceivingWorksheetApi~getDuplicateReceivingWorksheetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReceivingWorksheet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a receivingWorksheet by id
     * Returns a duplicated receivingWorksheet identified by the specified id.
     * @param {Integer} receivingWorksheetId Id of the receivingWorksheet to be duplicated.
     * @param {module:api/ReceivingWorksheetApi~getDuplicateReceivingWorksheetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReceivingWorksheet}
     */
    this.getDuplicateReceivingWorksheetById = function(receivingWorksheetId, callback) {
      var postBody = null;

      // verify the required parameter 'receivingWorksheetId' is set
      if (receivingWorksheetId == undefined || receivingWorksheetId == null) {
        throw "Missing the required parameter 'receivingWorksheetId' when calling getDuplicateReceivingWorksheetById";
      }


      var pathParams = {
        'receivingWorksheetId': receivingWorksheetId
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
      var returnType = ReceivingWorksheet;

      return this.apiClient.callApi(
        '/v2.0/receivingWorksheet/duplicate/{receivingWorksheetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceivingWorksheetByFilter operation.
     * @callback module:api/ReceivingWorksheetApi~getReceivingWorksheetByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReceivingWorksheet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search receivingWorksheets by filter
     * Returns the list of receivingWorksheets that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReceivingWorksheetApi~getReceivingWorksheetByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ReceivingWorksheet>}
     */
    this.getReceivingWorksheetByFilter = function(opts, callback) {
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
      var returnType = [ReceivingWorksheet];

      return this.apiClient.callApi(
        '/v2.0/receivingWorksheet/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceivingWorksheetById operation.
     * @callback module:api/ReceivingWorksheetApi~getReceivingWorksheetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReceivingWorksheet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a receivingWorksheet by id
     * Returns the receivingWorksheet identified by the specified id.
     * @param {Integer} receivingWorksheetId Id of the receivingWorksheet to be returned.
     * @param {module:api/ReceivingWorksheetApi~getReceivingWorksheetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReceivingWorksheet}
     */
    this.getReceivingWorksheetById = function(receivingWorksheetId, callback) {
      var postBody = null;

      // verify the required parameter 'receivingWorksheetId' is set
      if (receivingWorksheetId == undefined || receivingWorksheetId == null) {
        throw "Missing the required parameter 'receivingWorksheetId' when calling getReceivingWorksheetById";
      }


      var pathParams = {
        'receivingWorksheetId': receivingWorksheetId
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
      var returnType = ReceivingWorksheet;

      return this.apiClient.callApi(
        '/v2.0/receivingWorksheet/{receivingWorksheetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReceivingWorksheet operation.
     * @callback module:api/ReceivingWorksheetApi~updateReceivingWorksheetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a receivingWorksheet
     * Updates an existing receivingWorksheet using the specified data.
     * @param {module:model/ReceivingWorksheet} body ReceivingWorksheet to be updated.
     * @param {module:api/ReceivingWorksheetApi~updateReceivingWorksheetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReceivingWorksheet = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateReceivingWorksheet";
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
        '/v2.0/receivingWorksheet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReceivingWorksheetCustomFields operation.
     * @callback module:api/ReceivingWorksheetApi~updateReceivingWorksheetCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a receivingWorksheet custom fields
     * Updates an existing receivingWorksheet custom fields using the specified data.
     * @param {module:model/ReceivingWorksheet} body ReceivingWorksheet to be updated.
     * @param {module:api/ReceivingWorksheetApi~updateReceivingWorksheetCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReceivingWorksheetCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateReceivingWorksheetCustomFields";
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
        '/v2.0/receivingWorksheet/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
