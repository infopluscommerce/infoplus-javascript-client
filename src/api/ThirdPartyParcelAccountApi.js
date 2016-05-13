(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ThirdPartyParcelAccount', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ThirdPartyParcelAccount'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ThirdPartyParcelAccountApi = factory(root.infoplus.ApiClient, root.infoplus.ThirdPartyParcelAccount, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ThirdPartyParcelAccount, ApiResponse) {
  'use strict';

  /**
   * ThirdPartyParcelAccount service.
   * @module api/ThirdPartyParcelAccountApi
   * @version 1.0
   */

  /**
   * Constructs a new ThirdPartyParcelAccountApi. 
   * @alias module:api/ThirdPartyParcelAccountApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addThirdPartyParcelAccount operation.
     * @callback module:api/ThirdPartyParcelAccountApi~addThirdPartyParcelAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThirdPartyParcelAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a thirdPartyParcelAccount
     * Inserts a new thirdPartyParcelAccount using the specified data.
     * @param {module:model/ThirdPartyParcelAccount} body ThirdPartyParcelAccount to be inserted.
     * @param {module:api/ThirdPartyParcelAccountApi~addThirdPartyParcelAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ThirdPartyParcelAccount}
     */
    this.addThirdPartyParcelAccount = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addThirdPartyParcelAccount";
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
      var returnType = ThirdPartyParcelAccount;

      return this.apiClient.callApi(
        '/v1.0/thirdPartyParcelAccount', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteThirdPartyParcelAccount operation.
     * @callback module:api/ThirdPartyParcelAccountApi~deleteThirdPartyParcelAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a thirdPartyParcelAccount
     * Deletes the thirdPartyParcelAccount identified by the specified id.
     * @param {Integer} thirdPartyParcelAccountId Id of the thirdPartyParcelAccount to be deleted.
     * @param {module:api/ThirdPartyParcelAccountApi~deleteThirdPartyParcelAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteThirdPartyParcelAccount = function(thirdPartyParcelAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'thirdPartyParcelAccountId' is set
      if (thirdPartyParcelAccountId == undefined || thirdPartyParcelAccountId == null) {
        throw "Missing the required parameter 'thirdPartyParcelAccountId' when calling deleteThirdPartyParcelAccount";
      }


      var pathParams = {
        'thirdPartyParcelAccountId': thirdPartyParcelAccountId
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
        '/v1.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getThirdPartyParcelAccountByFilter operation.
     * @callback module:api/ThirdPartyParcelAccountApi~getThirdPartyParcelAccountByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ThirdPartyParcelAccount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search thirdPartyParcelAccounts by filter
     * Returns the list of thirdPartyParcelAccounts that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ThirdPartyParcelAccountApi~getThirdPartyParcelAccountByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ThirdPartyParcelAccount>}
     */
    this.getThirdPartyParcelAccountByFilter = function(opts, callback) {
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
      var returnType = [ThirdPartyParcelAccount];

      return this.apiClient.callApi(
        '/v1.0/thirdPartyParcelAccount/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getThirdPartyParcelAccountById operation.
     * @callback module:api/ThirdPartyParcelAccountApi~getThirdPartyParcelAccountByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThirdPartyParcelAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a thirdPartyParcelAccount by id
     * Returns the thirdPartyParcelAccount identified by the specified id.
     * @param {Integer} thirdPartyParcelAccountId Id of the thirdPartyParcelAccount to be returned.
     * @param {module:api/ThirdPartyParcelAccountApi~getThirdPartyParcelAccountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ThirdPartyParcelAccount}
     */
    this.getThirdPartyParcelAccountById = function(thirdPartyParcelAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'thirdPartyParcelAccountId' is set
      if (thirdPartyParcelAccountId == undefined || thirdPartyParcelAccountId == null) {
        throw "Missing the required parameter 'thirdPartyParcelAccountId' when calling getThirdPartyParcelAccountById";
      }


      var pathParams = {
        'thirdPartyParcelAccountId': thirdPartyParcelAccountId
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
      var returnType = ThirdPartyParcelAccount;

      return this.apiClient.callApi(
        '/v1.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateThirdPartyParcelAccount operation.
     * @callback module:api/ThirdPartyParcelAccountApi~updateThirdPartyParcelAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a thirdPartyParcelAccount
     * Updates an existing thirdPartyParcelAccount using the specified data.
     * @param {module:model/ThirdPartyParcelAccount} body ThirdPartyParcelAccount to be updated.
     * @param {module:api/ThirdPartyParcelAccountApi~updateThirdPartyParcelAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateThirdPartyParcelAccount = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateThirdPartyParcelAccount";
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
        '/v1.0/thirdPartyParcelAccount', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
