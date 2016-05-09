(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ReplenishmentProcess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReplenishmentProcess'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReplenishmentProcessApi = factory(root.infoplus.ApiClient, root.infoplus.ReplenishmentProcess);
  }
}(this, function(ApiClient, ReplenishmentProcess) {
  'use strict';

  /**
   * ReplenishmentProcess service.
   * @module api/ReplenishmentProcessApi
   * @version 1.0
   */

  /**
   * Constructs a new ReplenishmentProcessApi. 
   * @alias module:api/ReplenishmentProcessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getReplenishmentProcessByFilter operation.
     * @callback module:api/ReplenishmentProcessApi~getReplenishmentProcessByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReplenishmentProcess>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search replenishmentProcesses by filter
     * Returns the list of replenishmentProcesses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReplenishmentProcessApi~getReplenishmentProcessByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ReplenishmentProcess>}
     */
    this.getReplenishmentProcessByFilter = function(opts, callback) {
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
      var returnType = [ReplenishmentProcess];

      return this.apiClient.callApi(
        '/v1.0/replenishmentProcess/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentProcessById operation.
     * @callback module:api/ReplenishmentProcessApi~getReplenishmentProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReplenishmentProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a replenishmentProcess by id
     * Returns the replenishmentProcess identified by the specified id.
     * @param {Integer} replenishmentProcessId Id of the replenishmentProcess to be returned.
     * @param {module:api/ReplenishmentProcessApi~getReplenishmentProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReplenishmentProcess}
     */
    this.getReplenishmentProcessById = function(replenishmentProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentProcessId' is set
      if (replenishmentProcessId == undefined || replenishmentProcessId == null) {
        throw "Missing the required parameter 'replenishmentProcessId' when calling getReplenishmentProcessById";
      }


      var pathParams = {
        'replenishmentProcessId': replenishmentProcessId
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
      var returnType = ReplenishmentProcess;

      return this.apiClient.callApi(
        '/v1.0/replenishmentProcess/{replenishmentProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
