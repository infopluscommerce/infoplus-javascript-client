(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ScheduledPlanLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ScheduledPlanLog'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ScheduledPlanLogApi = factory(root.infoplus.ApiClient, root.infoplus.ScheduledPlanLog);
  }
}(this, function(ApiClient, ScheduledPlanLog) {
  'use strict';

  /**
   * ScheduledPlanLog service.
   * @module api/ScheduledPlanLogApi
   * @version beta
   */

  /**
   * Constructs a new ScheduledPlanLogApi. 
   * @alias module:api/ScheduledPlanLogApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getScheduledPlanLogByFilter operation.
     * @callback module:api/ScheduledPlanLogApi~getScheduledPlanLogByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledPlanLog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search scheduledPlanLogs by filter
     * Returns the list of scheduledPlanLogs that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ScheduledPlanLogApi~getScheduledPlanLogByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ScheduledPlanLog>}
     */
    this.getScheduledPlanLogByFilter = function(opts, callback) {
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
      var returnType = [ScheduledPlanLog];

      return this.apiClient.callApi(
        '/beta/scheduledPlanLog/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getScheduledPlanLogById operation.
     * @callback module:api/ScheduledPlanLogApi~getScheduledPlanLogByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledPlanLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a scheduledPlanLog by id
     * Returns the scheduledPlanLog identified by the specified id.
     * @param {Integer} scheduledPlanLogId Id of the scheduledPlanLog to be returned.
     * @param {module:api/ScheduledPlanLogApi~getScheduledPlanLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ScheduledPlanLog}
     */
    this.getScheduledPlanLogById = function(scheduledPlanLogId, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId == undefined || scheduledPlanLogId == null) {
        throw "Missing the required parameter 'scheduledPlanLogId' when calling getScheduledPlanLogById";
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId
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
      var returnType = ScheduledPlanLog;

      return this.apiClient.callApi(
        '/beta/scheduledPlanLog/{scheduledPlanLogId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
