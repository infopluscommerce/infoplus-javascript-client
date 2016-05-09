(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Replenishment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Replenishment'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReplenishmentApi = factory(root.infoplus.ApiClient, root.infoplus.Replenishment);
  }
}(this, function(ApiClient, Replenishment) {
  'use strict';

  /**
   * Replenishment service.
   * @module api/ReplenishmentApi
   * @version 1.0
   */

  /**
   * Constructs a new ReplenishmentApi. 
   * @alias module:api/ReplenishmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getReplenishmentByFilter operation.
     * @callback module:api/ReplenishmentApi~getReplenishmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Replenishment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search replenishments by filter
     * Returns the list of replenishments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReplenishmentApi~getReplenishmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Replenishment>}
     */
    this.getReplenishmentByFilter = function(opts, callback) {
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
      var returnType = [Replenishment];

      return this.apiClient.callApi(
        '/v1.0/replenishment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReplenishmentById operation.
     * @callback module:api/ReplenishmentApi~getReplenishmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Replenishment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a replenishment by id
     * Returns the replenishment identified by the specified id.
     * @param {Integer} replenishmentId Id of the replenishment to be returned.
     * @param {module:api/ReplenishmentApi~getReplenishmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Replenishment}
     */
    this.getReplenishmentById = function(replenishmentId, callback) {
      var postBody = null;

      // verify the required parameter 'replenishmentId' is set
      if (replenishmentId == undefined || replenishmentId == null) {
        throw "Missing the required parameter 'replenishmentId' when calling getReplenishmentById";
      }


      var pathParams = {
        'replenishmentId': replenishmentId
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
      var returnType = Replenishment;

      return this.apiClient.callApi(
        '/v1.0/replenishment/{replenishmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
