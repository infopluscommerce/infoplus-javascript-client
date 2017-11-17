(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OverrideReturnAddress', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OverrideReturnAddress'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OverrideReturnAddressApi = factory(root.infoplus.ApiClient, root.infoplus.OverrideReturnAddress, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, OverrideReturnAddress, ApiResponse) {
  'use strict';

  /**
   * OverrideReturnAddress service.
   * @module api/OverrideReturnAddressApi
   * @version v2.0
   */

  /**
   * Constructs a new OverrideReturnAddressApi. 
   * @alias module:api/OverrideReturnAddressApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOverrideReturnAddress operation.
     * @callback module:api/OverrideReturnAddressApi~addOverrideReturnAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OverrideReturnAddress} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an overrideReturnAddress
     * Inserts a new overrideReturnAddress using the specified data.
     * @param {module:model/OverrideReturnAddress} body OverrideReturnAddress to be inserted.
     * @param {module:api/OverrideReturnAddressApi~addOverrideReturnAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OverrideReturnAddress}
     */
    this.addOverrideReturnAddress = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addOverrideReturnAddress";
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
      var returnType = OverrideReturnAddress;

      return this.apiClient.callApi(
        '/v2.0/overrideReturnAddress', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOverrideReturnAddress operation.
     * @callback module:api/OverrideReturnAddressApi~deleteOverrideReturnAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an overrideReturnAddress
     * Deletes the overrideReturnAddress identified by the specified id.
     * @param {Integer} overrideReturnAddressId Id of the overrideReturnAddress to be deleted.
     * @param {module:api/OverrideReturnAddressApi~deleteOverrideReturnAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOverrideReturnAddress = function(overrideReturnAddressId, callback) {
      var postBody = null;

      // verify the required parameter 'overrideReturnAddressId' is set
      if (overrideReturnAddressId == undefined || overrideReturnAddressId == null) {
        throw "Missing the required parameter 'overrideReturnAddressId' when calling deleteOverrideReturnAddress";
      }


      var pathParams = {
        'overrideReturnAddressId': overrideReturnAddressId
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
        '/v2.0/overrideReturnAddress/{overrideReturnAddressId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOverrideReturnAddressById operation.
     * @callback module:api/OverrideReturnAddressApi~getDuplicateOverrideReturnAddressByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OverrideReturnAddress} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an overrideReturnAddress by id
     * Returns a duplicated overrideReturnAddress identified by the specified id.
     * @param {Integer} overrideReturnAddressId Id of the overrideReturnAddress to be duplicated.
     * @param {module:api/OverrideReturnAddressApi~getDuplicateOverrideReturnAddressByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OverrideReturnAddress}
     */
    this.getDuplicateOverrideReturnAddressById = function(overrideReturnAddressId, callback) {
      var postBody = null;

      // verify the required parameter 'overrideReturnAddressId' is set
      if (overrideReturnAddressId == undefined || overrideReturnAddressId == null) {
        throw "Missing the required parameter 'overrideReturnAddressId' when calling getDuplicateOverrideReturnAddressById";
      }


      var pathParams = {
        'overrideReturnAddressId': overrideReturnAddressId
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
      var returnType = OverrideReturnAddress;

      return this.apiClient.callApi(
        '/v2.0/overrideReturnAddress/duplicate/{overrideReturnAddressId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOverrideReturnAddressByFilter operation.
     * @callback module:api/OverrideReturnAddressApi~getOverrideReturnAddressByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OverrideReturnAddress>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search overrideReturnAddresses by filter
     * Returns the list of overrideReturnAddresses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OverrideReturnAddressApi~getOverrideReturnAddressByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OverrideReturnAddress>}
     */
    this.getOverrideReturnAddressByFilter = function(opts, callback) {
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
      var returnType = [OverrideReturnAddress];

      return this.apiClient.callApi(
        '/v2.0/overrideReturnAddress/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOverrideReturnAddressById operation.
     * @callback module:api/OverrideReturnAddressApi~getOverrideReturnAddressByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OverrideReturnAddress} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an overrideReturnAddress by id
     * Returns the overrideReturnAddress identified by the specified id.
     * @param {Integer} overrideReturnAddressId Id of the overrideReturnAddress to be returned.
     * @param {module:api/OverrideReturnAddressApi~getOverrideReturnAddressByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OverrideReturnAddress}
     */
    this.getOverrideReturnAddressById = function(overrideReturnAddressId, callback) {
      var postBody = null;

      // verify the required parameter 'overrideReturnAddressId' is set
      if (overrideReturnAddressId == undefined || overrideReturnAddressId == null) {
        throw "Missing the required parameter 'overrideReturnAddressId' when calling getOverrideReturnAddressById";
      }


      var pathParams = {
        'overrideReturnAddressId': overrideReturnAddressId
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
      var returnType = OverrideReturnAddress;

      return this.apiClient.callApi(
        '/v2.0/overrideReturnAddress/{overrideReturnAddressId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOverrideReturnAddress operation.
     * @callback module:api/OverrideReturnAddressApi~updateOverrideReturnAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an overrideReturnAddress
     * Updates an existing overrideReturnAddress using the specified data.
     * @param {module:model/OverrideReturnAddress} body OverrideReturnAddress to be updated.
     * @param {module:api/OverrideReturnAddressApi~updateOverrideReturnAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOverrideReturnAddress = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOverrideReturnAddress";
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
        '/v2.0/overrideReturnAddress', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOverrideReturnAddressCustomFields operation.
     * @callback module:api/OverrideReturnAddressApi~updateOverrideReturnAddressCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an overrideReturnAddress custom fields
     * Updates an existing overrideReturnAddress custom fields using the specified data.
     * @param {module:model/OverrideReturnAddress} body OverrideReturnAddress to be updated.
     * @param {module:api/OverrideReturnAddressApi~updateOverrideReturnAddressCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOverrideReturnAddressCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOverrideReturnAddressCustomFields";
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
        '/v2.0/overrideReturnAddress/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
