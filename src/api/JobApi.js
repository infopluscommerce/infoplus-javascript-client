/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: v3.0
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/ExecuteJobInputAPIModel', 'model/Job', 'model/ProcessOutputAPIModel', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ExecuteJobInputAPIModel'), require('../model/Job'), require('../model/ProcessOutputAPIModel'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.JobApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ExecuteJobInputAPIModel, root.infoplus.Job, root.infoplus.ProcessOutputAPIModel, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, ExecuteJobInputAPIModel, Job, ProcessOutputAPIModel, RecordFile) {
  'use strict';

  /**
   * Job service.
   * @module api/JobApi
   * @version v3.0
   */

  /**
   * Constructs a new JobApi. 
   * @alias module:api/JobApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addJob operation.
     * @callback module:api/JobApi~addJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a job
     * Inserts a new job using the specified data.
     * @param {module:model/Job} body Job to be inserted.
     * @param {module:api/JobApi~addJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Job}
     */
    this.addJob = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addJob");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/v3.0/job', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobAudit operation.
     * @callback module:api/JobApi~addJobAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a job
     * Adds an audit to an existing job.
     * @param {Number} jobId Id of the job to add an audit to
     * @param {String} jobAudit The audit to add
     * @param {module:api/JobApi~addJobAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobAudit = function(jobId, jobAudit, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling addJobAudit");
      }

      // verify the required parameter 'jobAudit' is set
      if (jobAudit === undefined || jobAudit === null) {
        throw new Error("Missing the required parameter 'jobAudit' when calling addJobAudit");
      }


      var pathParams = {
        'jobId': jobId,
        'jobAudit': jobAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/audit/{jobAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobFile operation.
     * @callback module:api/JobApi~addJobFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a job
     * Adds a file to an existing job.
     * @param {Number} jobId Id of the job to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/JobApi~addJobFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobFile = function(jobId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling addJobFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addJobFile");
      }


      var pathParams = {
        'jobId': jobId,
        'fileName': fileName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobFileByURL operation.
     * @callback module:api/JobApi~addJobFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a job by URL.
     * Adds a file to an existing job by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} jobId Id of the job to add an file to
     * @param {module:api/JobApi~addJobFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobFileByURL = function(body, jobId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addJobFileByURL");
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling addJobFileByURL");
      }


      var pathParams = {
        'jobId': jobId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addJobTag operation.
     * @callback module:api/JobApi~addJobTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a job.
     * Adds a tag to an existing job.
     * @param {Number} jobId Id of the job to add a tag to
     * @param {String} jobTag The tag to add
     * @param {module:api/JobApi~addJobTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addJobTag = function(jobId, jobTag, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling addJobTag");
      }

      // verify the required parameter 'jobTag' is set
      if (jobTag === undefined || jobTag === null) {
        throw new Error("Missing the required parameter 'jobTag' when calling addJobTag");
      }


      var pathParams = {
        'jobId': jobId,
        'jobTag': jobTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/tag/{jobTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJob operation.
     * @callback module:api/JobApi~deleteJobCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a job
     * Deletes the job identified by the specified id.
     * @param {Number} jobId Id of the job to be deleted.
     * @param {module:api/JobApi~deleteJobCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJob = function(jobId, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deleteJob");
      }


      var pathParams = {
        'jobId': jobId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobFile operation.
     * @callback module:api/JobApi~deleteJobFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a job.
     * Deletes an existing job file using the specified data.
     * @param {Number} jobId Id of the job to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/JobApi~deleteJobFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobFile = function(jobId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deleteJobFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteJobFile");
      }


      var pathParams = {
        'jobId': jobId,
        'fileId': fileId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJobTag operation.
     * @callback module:api/JobApi~deleteJobTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a job.
     * Deletes an existing job tag using the specified data.
     * @param {Number} jobId Id of the job to remove tag from
     * @param {String} jobTag The tag to delete
     * @param {module:api/JobApi~deleteJobTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteJobTag = function(jobId, jobTag, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling deleteJobTag");
      }

      // verify the required parameter 'jobTag' is set
      if (jobTag === undefined || jobTag === null) {
        throw new Error("Missing the required parameter 'jobTag' when calling deleteJobTag");
      }


      var pathParams = {
        'jobId': jobId,
        'jobTag': jobTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/tag/{jobTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the executeJob operation.
     * @callback module:api/JobApi~executeJobCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProcessOutputAPIModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run the ExecuteJob process.
     * 
     * @param {module:model/ExecuteJobInputAPIModel} body Input data for ExecuteJob process.
     * @param {module:api/JobApi~executeJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProcessOutputAPIModel>}
     */
    this.executeJob = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executeJob");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ProcessOutputAPIModel];

      return this.apiClient.callApi(
        '/v3.0/job/executeJob', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateJobById operation.
     * @callback module:api/JobApi~getDuplicateJobByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a job by id
     * Returns a duplicated job identified by the specified id.
     * @param {Number} jobId Id of the job to be duplicated.
     * @param {module:api/JobApi~getDuplicateJobByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Job}
     */
    this.getDuplicateJobById = function(jobId, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getDuplicateJobById");
      }


      var pathParams = {
        'jobId': jobId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/v3.0/job/duplicate/{jobId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobByFilter operation.
     * @callback module:api/JobApi~getJobByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Job>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search jobs by filter
     * Returns the list of jobs that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/JobApi~getJobByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Job>}
     */
    this.getJobByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Job];

      return this.apiClient.callApi(
        '/v3.0/job/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobById operation.
     * @callback module:api/JobApi~getJobByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a job by id
     * Returns the job identified by the specified id.
     * @param {Number} jobId Id of the job to be returned.
     * @param {module:api/JobApi~getJobByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Job}
     */
    this.getJobById = function(jobId, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getJobById");
      }


      var pathParams = {
        'jobId': jobId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/v3.0/job/{jobId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobFiles operation.
     * @callback module:api/JobApi~getJobFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a job.
     * Get all existing job files.
     * @param {Number} jobId Id of the job to get files for
     * @param {module:api/JobApi~getJobFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getJobFiles = function(jobId, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getJobFiles");
      }


      var pathParams = {
        'jobId': jobId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobTags operation.
     * @callback module:api/JobApi~getJobTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a job.
     * Get all existing job tags.
     * @param {Number} jobId Id of the job to get tags for
     * @param {module:api/JobApi~getJobTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getJobTags = function(jobId, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling getJobTags");
      }


      var pathParams = {
        'jobId': jobId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/{jobId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJob operation.
     * @callback module:api/JobApi~updateJobCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a job
     * Updates an existing job using the specified data.
     * @param {module:model/Job} body Job to be updated.
     * @param {module:api/JobApi~updateJobCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJob = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateJob");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJobCustomFields operation.
     * @callback module:api/JobApi~updateJobCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a job custom fields
     * Updates an existing job custom fields using the specified data.
     * @param {module:model/Job} body Job to be updated.
     * @param {module:api/JobApi~updateJobCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateJobCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateJobCustomFields");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/job/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
