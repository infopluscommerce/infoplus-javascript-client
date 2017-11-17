(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/JobTime', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobTime'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.JobTimeApi = factory(root.infoplus.ApiClient, root.infoplus.JobTime, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, JobTime, ApiResponse) {
  'use strict';

  /**
   * JobTime service.
   * @module api/JobTimeApi
   * @version v2.0
   */

  /**
   * Constructs a new JobTimeApi. 
   * @alias module:api/JobTimeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addJobTime operation.
     * @callback module:api/JobTimeApi~addJobTimeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a jobTime
     * Inserts a new jobTime using the specified data.
     * @param {module:model/JobTime} body JobTime to be inserted.
     * @param {module:api/JobTimeApi~addJobTimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobTime}
     */
    this.addJobTime = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addJobTime";
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
      var returnType = JobTime;

      return this.apiClient.callApi(
        '/v2.0/jobTime', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobTime operation.
     * @callback module:api/JobTimeApi~deleteJobTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a jobTime
     * Deletes the jobTime identified by the specified id.
     * @param {Integer} jobTimeId Id of the jobTime to be deleted.
     * @param {module:api/JobTimeApi~deleteJobTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobTime = function(jobTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId == undefined || jobTimeId == null) {
        throw "Missing the required parameter 'jobTimeId' when calling deleteJobTime";
      }


      var pathParams = {
        'jobTimeId': jobTimeId
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
        '/v2.0/jobTime/{jobTimeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateJobTimeById operation.
     * @callback module:api/JobTimeApi~getDuplicateJobTimeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a jobTime by id
     * Returns a duplicated jobTime identified by the specified id.
     * @param {Integer} jobTimeId Id of the jobTime to be duplicated.
     * @param {module:api/JobTimeApi~getDuplicateJobTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobTime}
     */
    this.getDuplicateJobTimeById = function(jobTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId == undefined || jobTimeId == null) {
        throw "Missing the required parameter 'jobTimeId' when calling getDuplicateJobTimeById";
      }


      var pathParams = {
        'jobTimeId': jobTimeId
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
      var returnType = JobTime;

      return this.apiClient.callApi(
        '/v2.0/jobTime/duplicate/{jobTimeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeByFilter operation.
     * @callback module:api/JobTimeApi~getJobTimeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobTime>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search jobTimes by filter
     * Returns the list of jobTimes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/JobTimeApi~getJobTimeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/JobTime>}
     */
    this.getJobTimeByFilter = function(opts, callback) {
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
      var returnType = [JobTime];

      return this.apiClient.callApi(
        '/v2.0/jobTime/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeById operation.
     * @callback module:api/JobTimeApi~getJobTimeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a jobTime by id
     * Returns the jobTime identified by the specified id.
     * @param {Integer} jobTimeId Id of the jobTime to be returned.
     * @param {module:api/JobTimeApi~getJobTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobTime}
     */
    this.getJobTimeById = function(jobTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeId' is set
      if (jobTimeId == undefined || jobTimeId == null) {
        throw "Missing the required parameter 'jobTimeId' when calling getJobTimeById";
      }


      var pathParams = {
        'jobTimeId': jobTimeId
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
      var returnType = JobTime;

      return this.apiClient.callApi(
        '/v2.0/jobTime/{jobTimeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobTime operation.
     * @callback module:api/JobTimeApi~updateJobTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a jobTime
     * Updates an existing jobTime using the specified data.
     * @param {module:model/JobTime} body JobTime to be updated.
     * @param {module:api/JobTimeApi~updateJobTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobTime = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateJobTime";
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
        '/v2.0/jobTime', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobTimeCustomFields operation.
     * @callback module:api/JobTimeApi~updateJobTimeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a jobTime custom fields
     * Updates an existing jobTime custom fields using the specified data.
     * @param {module:model/JobTime} body JobTime to be updated.
     * @param {module:api/JobTimeApi~updateJobTimeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobTimeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateJobTimeCustomFields";
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
        '/v2.0/jobTime/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
