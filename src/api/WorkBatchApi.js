(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/WorkBatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WorkBatch'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WorkBatchApi = factory(root.infoplus.ApiClient, root.infoplus.WorkBatch);
  }
}(this, function(ApiClient, WorkBatch) {
  'use strict';

  /**
   * WorkBatch service.
   * @module api/WorkBatchApi
   * @version 1.0
   */

  /**
   * Constructs a new WorkBatchApi. 
   * @alias module:api/WorkBatchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getWorkBatchByFilter operation.
     * @callback module:api/WorkBatchApi~getWorkBatchByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WorkBatch>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search workBatchs by filter
     * Returns the list of workBatchs that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WorkBatchApi~getWorkBatchByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/WorkBatch>}
     */
    this.getWorkBatchByFilter = function(opts, callback) {
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
      var returnType = [WorkBatch];

      return this.apiClient.callApi(
        '/v1.0/workBatch/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkBatchById operation.
     * @callback module:api/WorkBatchApi~getWorkBatchByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkBatch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workBatch by id
     * Returns the workBatch identified by the specified id.
     * @param {Integer} workBatchId Id of the workBatch to be returned.
     * @param {module:api/WorkBatchApi~getWorkBatchByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WorkBatch}
     */
    this.getWorkBatchById = function(workBatchId, callback) {
      var postBody = null;

      // verify the required parameter 'workBatchId' is set
      if (workBatchId == undefined || workBatchId == null) {
        throw "Missing the required parameter 'workBatchId' when calling getWorkBatchById";
      }


      var pathParams = {
        'workBatchId': workBatchId
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
      var returnType = WorkBatch;

      return this.apiClient.callApi(
        '/v1.0/workBatch/{workBatchId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
