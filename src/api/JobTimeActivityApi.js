(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/JobTimeActivity', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobTimeActivity'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.JobTimeActivityApi = factory(root.infoplus.ApiClient, root.infoplus.JobTimeActivity, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, JobTimeActivity, ApiResponse) {
  'use strict';

  /**
   * JobTimeActivity service.
   * @module api/JobTimeActivityApi
   * @version beta
   */

  /**
   * Constructs a new JobTimeActivityApi. 
   * @alias module:api/JobTimeActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addJobTimeActivity operation.
     * @callback module:api/JobTimeActivityApi~addJobTimeActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTimeActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a jobTimeActivity
     * Inserts a new jobTimeActivity using the specified data.
     * @param {module:model/JobTimeActivity} body JobTimeActivity to be inserted.
     * @param {module:api/JobTimeActivityApi~addJobTimeActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobTimeActivity}
     */
    this.addJobTimeActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addJobTimeActivity";
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
      var returnType = JobTimeActivity;

      return this.apiClient.callApi(
        '/beta/jobTimeActivity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobTimeActivityAudit operation.
     * @callback module:api/JobTimeActivityApi~addJobTimeActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a jobTimeActivity
     * Adds an audit to an existing jobTimeActivity.
     * @param {Integer} jobTimeActivityId Id of the jobTimeActivity to add an audit to
     * @param {String} jobTimeActivityAudit The audit to add
     * @param {module:api/JobTimeActivityApi~addJobTimeActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobTimeActivityAudit = function(jobTimeActivityId, jobTimeActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeActivityId' is set
      if (jobTimeActivityId == undefined || jobTimeActivityId == null) {
        throw "Missing the required parameter 'jobTimeActivityId' when calling addJobTimeActivityAudit";
      }

      // verify the required parameter 'jobTimeActivityAudit' is set
      if (jobTimeActivityAudit == undefined || jobTimeActivityAudit == null) {
        throw "Missing the required parameter 'jobTimeActivityAudit' when calling addJobTimeActivityAudit";
      }


      var pathParams = {
        'jobTimeActivityId': jobTimeActivityId,
        'jobTimeActivityAudit': jobTimeActivityAudit
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
        '/beta/jobTimeActivity/{jobTimeActivityId}/audit/{jobTimeActivityAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobTimeActivityTag operation.
     * @callback module:api/JobTimeActivityApi~addJobTimeActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a jobTimeActivity.
     * Adds a tag to an existing jobTimeActivity.
     * @param {Integer} jobTimeActivityId Id of the jobTimeActivity to add a tag to
     * @param {String} jobTimeActivityTag The tag to add
     * @param {module:api/JobTimeActivityApi~addJobTimeActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobTimeActivityTag = function(jobTimeActivityId, jobTimeActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeActivityId' is set
      if (jobTimeActivityId == undefined || jobTimeActivityId == null) {
        throw "Missing the required parameter 'jobTimeActivityId' when calling addJobTimeActivityTag";
      }

      // verify the required parameter 'jobTimeActivityTag' is set
      if (jobTimeActivityTag == undefined || jobTimeActivityTag == null) {
        throw "Missing the required parameter 'jobTimeActivityTag' when calling addJobTimeActivityTag";
      }


      var pathParams = {
        'jobTimeActivityId': jobTimeActivityId,
        'jobTimeActivityTag': jobTimeActivityTag
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
        '/beta/jobTimeActivity/{jobTimeActivityId}/tag/{jobTimeActivityTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobTimeActivity operation.
     * @callback module:api/JobTimeActivityApi~deleteJobTimeActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a jobTimeActivity
     * Deletes the jobTimeActivity identified by the specified id.
     * @param {Integer} jobTimeActivityId Id of the jobTimeActivity to be deleted.
     * @param {module:api/JobTimeActivityApi~deleteJobTimeActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobTimeActivity = function(jobTimeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeActivityId' is set
      if (jobTimeActivityId == undefined || jobTimeActivityId == null) {
        throw "Missing the required parameter 'jobTimeActivityId' when calling deleteJobTimeActivity";
      }


      var pathParams = {
        'jobTimeActivityId': jobTimeActivityId
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
        '/beta/jobTimeActivity/{jobTimeActivityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobTimeActivityTag operation.
     * @callback module:api/JobTimeActivityApi~deleteJobTimeActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a jobTimeActivity.
     * Deletes an existing jobTimeActivity tag using the specified data.
     * @param {Integer} jobTimeActivityId Id of the jobTimeActivity to remove tag from
     * @param {String} jobTimeActivityTag The tag to delete
     * @param {module:api/JobTimeActivityApi~deleteJobTimeActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobTimeActivityTag = function(jobTimeActivityId, jobTimeActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeActivityId' is set
      if (jobTimeActivityId == undefined || jobTimeActivityId == null) {
        throw "Missing the required parameter 'jobTimeActivityId' when calling deleteJobTimeActivityTag";
      }

      // verify the required parameter 'jobTimeActivityTag' is set
      if (jobTimeActivityTag == undefined || jobTimeActivityTag == null) {
        throw "Missing the required parameter 'jobTimeActivityTag' when calling deleteJobTimeActivityTag";
      }


      var pathParams = {
        'jobTimeActivityId': jobTimeActivityId,
        'jobTimeActivityTag': jobTimeActivityTag
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
        '/beta/jobTimeActivity/{jobTimeActivityId}/tag/{jobTimeActivityTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateJobTimeActivityById operation.
     * @callback module:api/JobTimeActivityApi~getDuplicateJobTimeActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTimeActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a jobTimeActivity by id
     * Returns a duplicated jobTimeActivity identified by the specified id.
     * @param {Integer} jobTimeActivityId Id of the jobTimeActivity to be duplicated.
     * @param {module:api/JobTimeActivityApi~getDuplicateJobTimeActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobTimeActivity}
     */
    this.getDuplicateJobTimeActivityById = function(jobTimeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeActivityId' is set
      if (jobTimeActivityId == undefined || jobTimeActivityId == null) {
        throw "Missing the required parameter 'jobTimeActivityId' when calling getDuplicateJobTimeActivityById";
      }


      var pathParams = {
        'jobTimeActivityId': jobTimeActivityId
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
      var returnType = JobTimeActivity;

      return this.apiClient.callApi(
        '/beta/jobTimeActivity/duplicate/{jobTimeActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeActivityByFilter operation.
     * @callback module:api/JobTimeActivityApi~getJobTimeActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JobTimeActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search jobTimeActivitys by filter
     * Returns the list of jobTimeActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/JobTimeActivityApi~getJobTimeActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/JobTimeActivity>}
     */
    this.getJobTimeActivityByFilter = function(opts, callback) {
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
      var returnType = [JobTimeActivity];

      return this.apiClient.callApi(
        '/beta/jobTimeActivity/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeActivityById operation.
     * @callback module:api/JobTimeActivityApi~getJobTimeActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobTimeActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a jobTimeActivity by id
     * Returns the jobTimeActivity identified by the specified id.
     * @param {Integer} jobTimeActivityId Id of the jobTimeActivity to be returned.
     * @param {module:api/JobTimeActivityApi~getJobTimeActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobTimeActivity}
     */
    this.getJobTimeActivityById = function(jobTimeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeActivityId' is set
      if (jobTimeActivityId == undefined || jobTimeActivityId == null) {
        throw "Missing the required parameter 'jobTimeActivityId' when calling getJobTimeActivityById";
      }


      var pathParams = {
        'jobTimeActivityId': jobTimeActivityId
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
      var returnType = JobTimeActivity;

      return this.apiClient.callApi(
        '/beta/jobTimeActivity/{jobTimeActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTimeActivityTags operation.
     * @callback module:api/JobTimeActivityApi~getJobTimeActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a jobTimeActivity.
     * Get all existing jobTimeActivity tags.
     * @param {Integer} jobTimeActivityId Id of the jobTimeActivity to get tags for
     * @param {module:api/JobTimeActivityApi~getJobTimeActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getJobTimeActivityTags = function(jobTimeActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'jobTimeActivityId' is set
      if (jobTimeActivityId == undefined || jobTimeActivityId == null) {
        throw "Missing the required parameter 'jobTimeActivityId' when calling getJobTimeActivityTags";
      }


      var pathParams = {
        'jobTimeActivityId': jobTimeActivityId
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
        '/beta/jobTimeActivity/{jobTimeActivityId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobTimeActivity operation.
     * @callback module:api/JobTimeActivityApi~updateJobTimeActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a jobTimeActivity
     * Updates an existing jobTimeActivity using the specified data.
     * @param {module:model/JobTimeActivity} body JobTimeActivity to be updated.
     * @param {module:api/JobTimeActivityApi~updateJobTimeActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobTimeActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateJobTimeActivity";
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
        '/beta/jobTimeActivity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
