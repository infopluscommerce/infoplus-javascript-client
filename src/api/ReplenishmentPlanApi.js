(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ReplenishmentPlan', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReplenishmentPlan'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReplenishmentPlanApi = factory(root.infoplus.ApiClient, root.infoplus.ReplenishmentPlan, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ReplenishmentPlan, ApiResponse) {
  'use strict';

  /**
   * ReplenishmentPlan service.
   * @module api/ReplenishmentPlanApi
   * @version beta
   */

  /**
   * Constructs a new ReplenishmentPlanApi. 
   * @alias module:api/ReplenishmentPlanApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addReplenishmentPlan operation.
     * @callback module:api/ReplenishmentPlanApi~addReplenishmentPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplenishmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a replenishmentPlan
     * Inserts a new replenishmentPlan using the specified data.
     * @param {module:model/ReplenishmentPlan} body ReplenishmentPlan to be inserted.
     * @param {module:api/ReplenishmentPlanApi~addReplenishmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReplenishmentPlan}
     */
    this.addReplenishmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addReplenishmentPlan";
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
      var returnType = ReplenishmentPlan;

      return this.apiClient.callApi(
        '/beta/replenishmentPlan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReplenishmentPlan operation.
     * @callback module:api/ReplenishmentPlanApi~deleteReplenishmentPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a replenishmentPlan
     * Deletes the replenishmentPlan identified by the specified id.
     * @param {Integer} replenishmentPlanId Id of the replenishmentPlan to be deleted.
     * @param {module:api/ReplenishmentPlanApi~deleteReplenishmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReplenishmentPlan = function(replenishmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentPlanId' is set
      if (replenishmentPlanId == undefined || replenishmentPlanId == null) {
        throw "Missing the required parameter 'replenishmentPlanId' when calling deleteReplenishmentPlan";
      }


      var pathParams = {
        'replenishmentPlanId': replenishmentPlanId
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
        '/beta/replenishmentPlan/{replenishmentPlanId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentPlanByFilter operation.
     * @callback module:api/ReplenishmentPlanApi~getReplenishmentPlanByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReplenishmentPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search replenishmentPlans by filter
     * Returns the list of replenishmentPlans that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReplenishmentPlanApi~getReplenishmentPlanByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ReplenishmentPlan>}
     */
    this.getReplenishmentPlanByFilter = function(opts, callback) {
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
      var returnType = [ReplenishmentPlan];

      return this.apiClient.callApi(
        '/beta/replenishmentPlan/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentPlanById operation.
     * @callback module:api/ReplenishmentPlanApi~getReplenishmentPlanByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplenishmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a replenishmentPlan by id
     * Returns the replenishmentPlan identified by the specified id.
     * @param {Integer} replenishmentPlanId Id of the replenishmentPlan to be returned.
     * @param {module:api/ReplenishmentPlanApi~getReplenishmentPlanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReplenishmentPlan}
     */
    this.getReplenishmentPlanById = function(replenishmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentPlanId' is set
      if (replenishmentPlanId == undefined || replenishmentPlanId == null) {
        throw "Missing the required parameter 'replenishmentPlanId' when calling getReplenishmentPlanById";
      }


      var pathParams = {
        'replenishmentPlanId': replenishmentPlanId
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
      var returnType = ReplenishmentPlan;

      return this.apiClient.callApi(
        '/beta/replenishmentPlan/{replenishmentPlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReplenishmentPlan operation.
     * @callback module:api/ReplenishmentPlanApi~updateReplenishmentPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a replenishmentPlan
     * Updates an existing replenishmentPlan using the specified data.
     * @param {module:model/ReplenishmentPlan} body ReplenishmentPlan to be updated.
     * @param {module:api/ReplenishmentPlanApi~updateReplenishmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReplenishmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateReplenishmentPlan";
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
        '/beta/replenishmentPlan', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReplenishmentPlanCustomFields operation.
     * @callback module:api/ReplenishmentPlanApi~updateReplenishmentPlanCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a replenishmentPlan custom fields
     * Updates an existing replenishmentPlan custom fields using the specified data.
     * @param {module:model/ReplenishmentPlan} body ReplenishmentPlan to be updated.
     * @param {module:api/ReplenishmentPlanApi~updateReplenishmentPlanCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReplenishmentPlanCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateReplenishmentPlanCustomFields";
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
        '/beta/replenishmentPlan/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
