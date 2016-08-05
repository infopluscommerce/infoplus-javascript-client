(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BusinessTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BusinessTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BusinessTransactionApi = factory(root.infoplus.ApiClient, root.infoplus.BusinessTransaction);
  }
}(this, function(ApiClient, BusinessTransaction) {
  'use strict';

  /**
   * BusinessTransaction service.
   * @module api/BusinessTransactionApi
   * @version beta
   */

  /**
   * Constructs a new BusinessTransactionApi. 
   * @alias module:api/BusinessTransactionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBusinessTransactionByFilter operation.
     * @callback module:api/BusinessTransactionApi~getBusinessTransactionByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BusinessTransaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search businessTransactions by filter
     * Returns the list of businessTransactions that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BusinessTransactionApi~getBusinessTransactionByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/BusinessTransaction>}
     */
    this.getBusinessTransactionByFilter = function(opts, callback) {
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
      var returnType = [BusinessTransaction];

      return this.apiClient.callApi(
        '/beta/businessTransaction/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessTransactionById operation.
     * @callback module:api/BusinessTransactionApi~getBusinessTransactionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BusinessTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a businessTransaction by id
     * Returns the businessTransaction identified by the specified id.
     * @param {Integer} businessTransactionId Id of the businessTransaction to be returned.
     * @param {module:api/BusinessTransactionApi~getBusinessTransactionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BusinessTransaction}
     */
    this.getBusinessTransactionById = function(businessTransactionId, callback) {
      var postBody = null;

      // verify the required parameter 'businessTransactionId' is set
      if (businessTransactionId == undefined || businessTransactionId == null) {
        throw "Missing the required parameter 'businessTransactionId' when calling getBusinessTransactionById";
      }


      var pathParams = {
        'businessTransactionId': businessTransactionId
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
      var returnType = BusinessTransaction;

      return this.apiClient.callApi(
        '/beta/businessTransaction/{businessTransactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBusinessTransactionCustomFields operation.
     * @callback module:api/BusinessTransactionApi~updateBusinessTransactionCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a businessTransaction custom fields
     * Updates an existing businessTransaction custom fields using the specified data.
     * @param {module:model/BusinessTransaction} body BusinessTransaction to be updated.
     * @param {module:api/BusinessTransactionApi~updateBusinessTransactionCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBusinessTransactionCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBusinessTransactionCustomFields";
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
        '/beta/businessTransaction/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
