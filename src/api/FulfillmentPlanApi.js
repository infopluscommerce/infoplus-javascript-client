(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FulfillmentPlan', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FulfillmentPlan'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.FulfillmentPlanApi = factory(root.infoplus.ApiClient, root.infoplus.FulfillmentPlan, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, FulfillmentPlan, ApiResponse) {
  'use strict';

  /**
   * FulfillmentPlan service.
   * @module api/FulfillmentPlanApi
   * @version v2.0
   */

  /**
   * Constructs a new FulfillmentPlanApi. 
   * @alias module:api/FulfillmentPlanApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFulfillmentPlan operation.
     * @callback module:api/FulfillmentPlanApi~addFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a fulfillmentPlan
     * Inserts a new fulfillmentPlan using the specified data.
     * @param {module:model/FulfillmentPlan} body FulfillmentPlan to be inserted.
     * @param {module:api/FulfillmentPlanApi~addFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FulfillmentPlan}
     */
    this.addFulfillmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addFulfillmentPlan";
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
      var returnType = FulfillmentPlan;

      return this.apiClient.callApi(
        '/v2.0/fulfillmentPlan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFulfillmentPlan operation.
     * @callback module:api/FulfillmentPlanApi~deleteFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a fulfillmentPlan
     * Deletes the fulfillmentPlan identified by the specified id.
     * @param {Integer} fulfillmentPlanId Id of the fulfillmentPlan to be deleted.
     * @param {module:api/FulfillmentPlanApi~deleteFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFulfillmentPlan = function(fulfillmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId == undefined || fulfillmentPlanId == null) {
        throw "Missing the required parameter 'fulfillmentPlanId' when calling deleteFulfillmentPlan";
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId
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
        '/v2.0/fulfillmentPlan/{fulfillmentPlanId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateFulfillmentPlanById operation.
     * @callback module:api/FulfillmentPlanApi~getDuplicateFulfillmentPlanByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a fulfillmentPlan by id
     * Returns a duplicated fulfillmentPlan identified by the specified id.
     * @param {Integer} fulfillmentPlanId Id of the fulfillmentPlan to be duplicated.
     * @param {module:api/FulfillmentPlanApi~getDuplicateFulfillmentPlanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FulfillmentPlan}
     */
    this.getDuplicateFulfillmentPlanById = function(fulfillmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId == undefined || fulfillmentPlanId == null) {
        throw "Missing the required parameter 'fulfillmentPlanId' when calling getDuplicateFulfillmentPlanById";
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId
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
      var returnType = FulfillmentPlan;

      return this.apiClient.callApi(
        '/v2.0/fulfillmentPlan/duplicate/{fulfillmentPlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentPlanByFilter operation.
     * @callback module:api/FulfillmentPlanApi~getFulfillmentPlanByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FulfillmentPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search fulfillmentPlans by filter
     * Returns the list of fulfillmentPlans that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/FulfillmentPlanApi~getFulfillmentPlanByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FulfillmentPlan>}
     */
    this.getFulfillmentPlanByFilter = function(opts, callback) {
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
      var returnType = [FulfillmentPlan];

      return this.apiClient.callApi(
        '/v2.0/fulfillmentPlan/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentPlanById operation.
     * @callback module:api/FulfillmentPlanApi~getFulfillmentPlanByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a fulfillmentPlan by id
     * Returns the fulfillmentPlan identified by the specified id.
     * @param {Integer} fulfillmentPlanId Id of the fulfillmentPlan to be returned.
     * @param {module:api/FulfillmentPlanApi~getFulfillmentPlanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FulfillmentPlan}
     */
    this.getFulfillmentPlanById = function(fulfillmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId == undefined || fulfillmentPlanId == null) {
        throw "Missing the required parameter 'fulfillmentPlanId' when calling getFulfillmentPlanById";
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId
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
      var returnType = FulfillmentPlan;

      return this.apiClient.callApi(
        '/v2.0/fulfillmentPlan/{fulfillmentPlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentPlan operation.
     * @callback module:api/FulfillmentPlanApi~updateFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a fulfillmentPlan
     * Updates an existing fulfillmentPlan using the specified data.
     * @param {module:model/FulfillmentPlan} body FulfillmentPlan to be updated.
     * @param {module:api/FulfillmentPlanApi~updateFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateFulfillmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateFulfillmentPlan";
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
        '/v2.0/fulfillmentPlan', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentPlanCustomFields operation.
     * @callback module:api/FulfillmentPlanApi~updateFulfillmentPlanCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a fulfillmentPlan custom fields
     * Updates an existing fulfillmentPlan custom fields using the specified data.
     * @param {module:model/FulfillmentPlan} body FulfillmentPlan to be updated.
     * @param {module:api/FulfillmentPlanApi~updateFulfillmentPlanCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateFulfillmentPlanCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateFulfillmentPlanCustomFields";
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
        '/v2.0/fulfillmentPlan/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
