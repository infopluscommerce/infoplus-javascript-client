(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/BillingCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/BillingCode'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillingCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.BillingCode);
  }
}(this, function(ApiClient, ApiResponse, BillingCode) {
  'use strict';

  /**
   * BillingCode service.
   * @module api/BillingCodeApi
   * @version 1.0
   */

  /**
   * Constructs a new BillingCodeApi. 
   * @alias module:api/BillingCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBillingCode operation.
     * @callback module:api/BillingCodeApi~addBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a billingCode
     * Inserts a new billingCode using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be inserted.
     * @param {module:api/BillingCodeApi~addBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCode}
     */
    this.addBillingCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addBillingCode";
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/v1.0/billingCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillingCode operation.
     * @callback module:api/BillingCodeApi~deleteBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a billingCode
     * Deletes the billingCode identified by the specified id.
     * @param {Integer} billingCodeId Id of the billingCode to be deleted.
     * @param {module:api/BillingCodeApi~deleteBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillingCode = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling deleteBillingCode";
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
        '/v1.0/billingCode/{billingCodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeByFilter operation.
     * @callback module:api/BillingCodeApi~getBillingCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillingCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search billingCodes by filter
     * Returns the list of billingCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BillingCodeApi~getBillingCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/BillingCode>}
     */
    this.getBillingCodeByFilter = function(opts, callback) {
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
      var returnType = [BillingCode];

      return this.apiClient.callApi(
        '/v1.0/billingCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillingCodeById operation.
     * @callback module:api/BillingCodeApi~getBillingCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a billingCode by id
     * Returns the billingCode identified by the specified id.
     * @param {Integer} billingCodeId Id of the billingCode to be returned.
     * @param {module:api/BillingCodeApi~getBillingCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillingCode}
     */
    this.getBillingCodeById = function(billingCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'billingCodeId' is set
      if (billingCodeId == undefined || billingCodeId == null) {
        throw "Missing the required parameter 'billingCodeId' when calling getBillingCodeById";
      }


      var pathParams = {
        'billingCodeId': billingCodeId
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
      var returnType = BillingCode;

      return this.apiClient.callApi(
        '/v1.0/billingCode/{billingCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingCode operation.
     * @callback module:api/BillingCodeApi~updateBillingCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billingCode
     * Updates an existing billingCode using the specified data.
     * @param {module:model/BillingCode} body BillingCode to be updated.
     * @param {module:api/BillingCodeApi~updateBillingCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBillingCode";
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
        '/v1.0/billingCode', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
