(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BillOfLading', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BillOfLading'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BillOfLadingApi = factory(root.infoplus.ApiClient, root.infoplus.BillOfLading, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, BillOfLading, ApiResponse) {
  'use strict';

  /**
   * BillOfLading service.
   * @module api/BillOfLadingApi
   * @version v2.0
   */

  /**
   * Constructs a new BillOfLadingApi. 
   * @alias module:api/BillOfLadingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBillOfLading operation.
     * @callback module:api/BillOfLadingApi~addBillOfLadingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillOfLading} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a billOfLading
     * Inserts a new billOfLading using the specified data.
     * @param {module:model/BillOfLading} body BillOfLading to be inserted.
     * @param {module:api/BillOfLadingApi~addBillOfLadingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillOfLading}
     */
    this.addBillOfLading = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addBillOfLading";
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
      var returnType = BillOfLading;

      return this.apiClient.callApi(
        '/v2.0/billOfLading', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBillOfLading operation.
     * @callback module:api/BillOfLadingApi~deleteBillOfLadingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a billOfLading
     * Deletes the billOfLading identified by the specified id.
     * @param {Integer} billOfLadingId Id of the billOfLading to be deleted.
     * @param {module:api/BillOfLadingApi~deleteBillOfLadingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBillOfLading = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId == undefined || billOfLadingId == null) {
        throw "Missing the required parameter 'billOfLadingId' when calling deleteBillOfLading";
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
        '/v2.0/billOfLading/{billOfLadingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillOfLadingByFilter operation.
     * @callback module:api/BillOfLadingApi~getBillOfLadingByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillOfLading>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search billOfLadings by filter
     * Returns the list of billOfLadings that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BillOfLadingApi~getBillOfLadingByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/BillOfLading>}
     */
    this.getBillOfLadingByFilter = function(opts, callback) {
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
      var returnType = [BillOfLading];

      return this.apiClient.callApi(
        '/v2.0/billOfLading/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillOfLadingById operation.
     * @callback module:api/BillOfLadingApi~getBillOfLadingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillOfLading} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a billOfLading by id
     * Returns the billOfLading identified by the specified id.
     * @param {Integer} billOfLadingId Id of the billOfLading to be returned.
     * @param {module:api/BillOfLadingApi~getBillOfLadingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillOfLading}
     */
    this.getBillOfLadingById = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId == undefined || billOfLadingId == null) {
        throw "Missing the required parameter 'billOfLadingId' when calling getBillOfLadingById";
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
      var returnType = BillOfLading;

      return this.apiClient.callApi(
        '/v2.0/billOfLading/{billOfLadingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBillOfLadingById operation.
     * @callback module:api/BillOfLadingApi~getDuplicateBillOfLadingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillOfLading} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a billOfLading by id
     * Returns a duplicated billOfLading identified by the specified id.
     * @param {Integer} billOfLadingId Id of the billOfLading to be duplicated.
     * @param {module:api/BillOfLadingApi~getDuplicateBillOfLadingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BillOfLading}
     */
    this.getDuplicateBillOfLadingById = function(billOfLadingId, callback) {
      var postBody = null;

      // verify the required parameter 'billOfLadingId' is set
      if (billOfLadingId == undefined || billOfLadingId == null) {
        throw "Missing the required parameter 'billOfLadingId' when calling getDuplicateBillOfLadingById";
      }


      var pathParams = {
        'billOfLadingId': billOfLadingId
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
      var returnType = BillOfLading;

      return this.apiClient.callApi(
        '/v2.0/billOfLading/duplicate/{billOfLadingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillOfLading operation.
     * @callback module:api/BillOfLadingApi~updateBillOfLadingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billOfLading
     * Updates an existing billOfLading using the specified data.
     * @param {module:model/BillOfLading} body BillOfLading to be updated.
     * @param {module:api/BillOfLadingApi~updateBillOfLadingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillOfLading = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBillOfLading";
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
        '/v2.0/billOfLading', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillOfLadingCustomFields operation.
     * @callback module:api/BillOfLadingApi~updateBillOfLadingCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a billOfLading custom fields
     * Updates an existing billOfLading custom fields using the specified data.
     * @param {module:model/BillOfLading} body BillOfLading to be updated.
     * @param {module:api/BillOfLadingApi~updateBillOfLadingCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillOfLadingCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBillOfLadingCustomFields";
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
        '/v2.0/billOfLading/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
