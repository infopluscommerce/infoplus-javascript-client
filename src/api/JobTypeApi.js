(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/JobType', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobType'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.JobTypeApi = factory(root.infoplus.ApiClient, root.infoplus.JobType, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, JobType, ApiResponse) {
  'use strict';

  /**
   * JobType service.
   * @module api/JobTypeApi
   * @version beta
   */

  /**
   * Constructs a new JobTypeApi. 
   * @alias module:api/JobTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addJobType operation.
     * @callback module:api/JobTypeApi~addJobTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a jobType
     * Inserts a new jobType using the specified data.
     * @param {module:model/JobType} body JobType to be inserted.
     * @param {module:api/JobTypeApi~addJobTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobType}
     */
    this.addJobType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addJobType";
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
      var returnType = JobType;

      return this.apiClient.callApi(
        '/beta/jobType', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobType operation.
     * @callback module:api/JobTypeApi~deleteJobTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a jobType
     * Deletes the jobType identified by the specified id.
     * @param {Integer} jobTypeId Id of the jobType to be deleted.
     * @param {module:api/JobTypeApi~deleteJobTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobType = function(jobTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTypeId' is set
      if (jobTypeId == undefined || jobTypeId == null) {
        throw "Missing the required parameter 'jobTypeId' when calling deleteJobType";
      }


      var pathParams = {
        'jobTypeId': jobTypeId
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
        '/beta/jobType/{jobTypeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTypeByFilter operation.
     * @callback module:api/JobTypeApi~getJobTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search jobTypes by filter
     * Returns the list of jobTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/JobTypeApi~getJobTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/JobType>}
     */
    this.getJobTypeByFilter = function(opts, callback) {
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
      var returnType = [JobType];

      return this.apiClient.callApi(
        '/beta/jobType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTypeById operation.
     * @callback module:api/JobTypeApi~getJobTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a jobType by id
     * Returns the jobType identified by the specified id.
     * @param {Integer} jobTypeId Id of the jobType to be returned.
     * @param {module:api/JobTypeApi~getJobTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobType}
     */
    this.getJobTypeById = function(jobTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTypeId' is set
      if (jobTypeId == undefined || jobTypeId == null) {
        throw "Missing the required parameter 'jobTypeId' when calling getJobTypeById";
      }


      var pathParams = {
        'jobTypeId': jobTypeId
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
      var returnType = JobType;

      return this.apiClient.callApi(
        '/beta/jobType/{jobTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobType operation.
     * @callback module:api/JobTypeApi~updateJobTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a jobType
     * Updates an existing jobType using the specified data.
     * @param {module:model/JobType} body JobType to be updated.
     * @param {module:api/JobTypeApi~updateJobTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateJobType";
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
        '/beta/jobType', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobTypeCustomFields operation.
     * @callback module:api/JobTypeApi~updateJobTypeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a jobType custom fields
     * Updates an existing jobType custom fields using the specified data.
     * @param {module:model/JobType} body JobType to be updated.
     * @param {module:api/JobTypeApi~updateJobTypeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobTypeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateJobTypeCustomFields";
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
        '/beta/jobType/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
