(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FulfillmentProcess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FulfillmentProcess'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.FulfillmentProcessApi = factory(root.infoplus.ApiClient, root.infoplus.FulfillmentProcess);
  }
}(this, function(ApiClient, FulfillmentProcess) {
  'use strict';

  /**
   * FulfillmentProcess service.
   * @module api/FulfillmentProcessApi
   * @version v2.0
   */

  /**
   * Constructs a new FulfillmentProcessApi. 
   * @alias module:api/FulfillmentProcessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDuplicateFulfillmentProcessById operation.
     * @callback module:api/FulfillmentProcessApi~getDuplicateFulfillmentProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a fulfillmentProcess by id
     * Returns a duplicated fulfillmentProcess identified by the specified id.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to be duplicated.
     * @param {module:api/FulfillmentProcessApi~getDuplicateFulfillmentProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FulfillmentProcess}
     */
    this.getDuplicateFulfillmentProcessById = function(fulfillmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling getDuplicateFulfillmentProcessById";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId
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
      var returnType = FulfillmentProcess;

      return this.apiClient.callApi(
        '/v2.0/fulfillmentProcess/duplicate/{fulfillmentProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessByFilter operation.
     * @callback module:api/FulfillmentProcessApi~getFulfillmentProcessByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FulfillmentProcess>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search fulfillmentProcesses by filter
     * Returns the list of fulfillmentProcesses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/FulfillmentProcessApi~getFulfillmentProcessByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FulfillmentProcess>}
     */
    this.getFulfillmentProcessByFilter = function(opts, callback) {
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
      var returnType = [FulfillmentProcess];

      return this.apiClient.callApi(
        '/v2.0/fulfillmentProcess/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessById operation.
     * @callback module:api/FulfillmentProcessApi~getFulfillmentProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a fulfillmentProcess by id
     * Returns the fulfillmentProcess identified by the specified id.
     * @param {Integer} fulfillmentProcessId Id of the fulfillmentProcess to be returned.
     * @param {module:api/FulfillmentProcessApi~getFulfillmentProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FulfillmentProcess}
     */
    this.getFulfillmentProcessById = function(fulfillmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessId' is set
      if (fulfillmentProcessId == undefined || fulfillmentProcessId == null) {
        throw "Missing the required parameter 'fulfillmentProcessId' when calling getFulfillmentProcessById";
      }


      var pathParams = {
        'fulfillmentProcessId': fulfillmentProcessId
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
      var returnType = FulfillmentProcess;

      return this.apiClient.callApi(
        '/v2.0/fulfillmentProcess/{fulfillmentProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentProcessCustomFields operation.
     * @callback module:api/FulfillmentProcessApi~updateFulfillmentProcessCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a fulfillmentProcess custom fields
     * Updates an existing fulfillmentProcess custom fields using the specified data.
     * @param {module:model/FulfillmentProcess} body FulfillmentProcess to be updated.
     * @param {module:api/FulfillmentProcessApi~updateFulfillmentProcessCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateFulfillmentProcessCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateFulfillmentProcessCustomFields";
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
        '/v2.0/fulfillmentProcess/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
