(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Supplement', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Supplement'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.SupplementApi = factory(root.infoplus.ApiClient, root.infoplus.Supplement, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Supplement, ApiResponse) {
  'use strict';

  /**
   * Supplement service.
   * @module api/SupplementApi
   * @version v2.0
   */

  /**
   * Constructs a new SupplementApi. 
   * @alias module:api/SupplementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addSupplement operation.
     * @callback module:api/SupplementApi~addSupplementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a supplement
     * Inserts a new supplement using the specified data.
     * @param {module:model/Supplement} body Supplement to be inserted.
     * @param {module:api/SupplementApi~addSupplementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Supplement}
     */
    this.addSupplement = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addSupplement";
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
      var returnType = Supplement;

      return this.apiClient.callApi(
        '/v2.0/supplement', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSupplement operation.
     * @callback module:api/SupplementApi~deleteSupplementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a supplement
     * Deletes the supplement identified by the specified id.
     * @param {Integer} supplementId Id of the supplement to be deleted.
     * @param {module:api/SupplementApi~deleteSupplementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSupplement = function(supplementId, callback) {
      var postBody = null;

      // verify the required parameter 'supplementId' is set
      if (supplementId == undefined || supplementId == null) {
        throw "Missing the required parameter 'supplementId' when calling deleteSupplement";
      }


      var pathParams = {
        'supplementId': supplementId
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
        '/v2.0/supplement/{supplementId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateSupplementById operation.
     * @callback module:api/SupplementApi~getDuplicateSupplementByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a supplement by id
     * Returns a duplicated supplement identified by the specified id.
     * @param {Integer} supplementId Id of the supplement to be duplicated.
     * @param {module:api/SupplementApi~getDuplicateSupplementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Supplement}
     */
    this.getDuplicateSupplementById = function(supplementId, callback) {
      var postBody = null;

      // verify the required parameter 'supplementId' is set
      if (supplementId == undefined || supplementId == null) {
        throw "Missing the required parameter 'supplementId' when calling getDuplicateSupplementById";
      }


      var pathParams = {
        'supplementId': supplementId
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
      var returnType = Supplement;

      return this.apiClient.callApi(
        '/v2.0/supplement/duplicate/{supplementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSupplementByFilter operation.
     * @callback module:api/SupplementApi~getSupplementByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Supplement>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search supplements by filter
     * Returns the list of supplements that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/SupplementApi~getSupplementByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Supplement>}
     */
    this.getSupplementByFilter = function(opts, callback) {
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
      var returnType = [Supplement];

      return this.apiClient.callApi(
        '/v2.0/supplement/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSupplementById operation.
     * @callback module:api/SupplementApi~getSupplementByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a supplement by id
     * Returns the supplement identified by the specified id.
     * @param {Integer} supplementId Id of the supplement to be returned.
     * @param {module:api/SupplementApi~getSupplementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Supplement}
     */
    this.getSupplementById = function(supplementId, callback) {
      var postBody = null;

      // verify the required parameter 'supplementId' is set
      if (supplementId == undefined || supplementId == null) {
        throw "Missing the required parameter 'supplementId' when calling getSupplementById";
      }


      var pathParams = {
        'supplementId': supplementId
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
      var returnType = Supplement;

      return this.apiClient.callApi(
        '/v2.0/supplement/{supplementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSupplement operation.
     * @callback module:api/SupplementApi~updateSupplementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a supplement
     * Updates an existing supplement using the specified data.
     * @param {module:model/Supplement} body Supplement to be updated.
     * @param {module:api/SupplementApi~updateSupplementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSupplement = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateSupplement";
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
        '/v2.0/supplement', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSupplementCustomFields operation.
     * @callback module:api/SupplementApi~updateSupplementCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a supplement custom fields
     * Updates an existing supplement custom fields using the specified data.
     * @param {module:model/Supplement} body Supplement to be updated.
     * @param {module:api/SupplementApi~updateSupplementCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSupplementCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateSupplementCustomFields";
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
        '/v2.0/supplement/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
