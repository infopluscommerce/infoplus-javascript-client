/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
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
    define(['ApiClient', 'model/ScheduledPlanLog'], factory);
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
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addScheduledPlanLogAudit operation.
     * @callback module:api/ScheduledPlanLogApi~addScheduledPlanLogAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a scheduledPlanLog
     * Adds an audit to an existing scheduledPlanLog.
     * @param {Number} scheduledPlanLogId Id of the scheduledPlanLog to add an audit to
     * @param {String} scheduledPlanLogAudit The audit to add
     * @param {module:api/ScheduledPlanLogApi~addScheduledPlanLogAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addScheduledPlanLogAudit = function(scheduledPlanLogId, scheduledPlanLogAudit, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId === undefined || scheduledPlanLogId === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogId' when calling addScheduledPlanLogAudit");
      }

      // verify the required parameter 'scheduledPlanLogAudit' is set
      if (scheduledPlanLogAudit === undefined || scheduledPlanLogAudit === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogAudit' when calling addScheduledPlanLogAudit");
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId,
        'scheduledPlanLogAudit': scheduledPlanLogAudit
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
        '/beta/scheduledPlanLog/{scheduledPlanLogId}/audit/{scheduledPlanLogAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addScheduledPlanLogFile operation.
     * @callback module:api/ScheduledPlanLogApi~addScheduledPlanLogFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a scheduledPlanLog
     * Adds a file to an existing scheduledPlanLog.
     * @param {Number} scheduledPlanLogId Id of the scheduledPlanLog to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ScheduledPlanLogApi~addScheduledPlanLogFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addScheduledPlanLogFile = function(scheduledPlanLogId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId === undefined || scheduledPlanLogId === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogId' when calling addScheduledPlanLogFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addScheduledPlanLogFile");
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId,
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
        '/beta/scheduledPlanLog/{scheduledPlanLogId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addScheduledPlanLogTag operation.
     * @callback module:api/ScheduledPlanLogApi~addScheduledPlanLogTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a scheduledPlanLog.
     * Adds a tag to an existing scheduledPlanLog.
     * @param {Number} scheduledPlanLogId Id of the scheduledPlanLog to add a tag to
     * @param {String} scheduledPlanLogTag The tag to add
     * @param {module:api/ScheduledPlanLogApi~addScheduledPlanLogTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addScheduledPlanLogTag = function(scheduledPlanLogId, scheduledPlanLogTag, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId === undefined || scheduledPlanLogId === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogId' when calling addScheduledPlanLogTag");
      }

      // verify the required parameter 'scheduledPlanLogTag' is set
      if (scheduledPlanLogTag === undefined || scheduledPlanLogTag === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogTag' when calling addScheduledPlanLogTag");
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId,
        'scheduledPlanLogTag': scheduledPlanLogTag
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
        '/beta/scheduledPlanLog/{scheduledPlanLogId}/tag/{scheduledPlanLogTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteScheduledPlanLogTag operation.
     * @callback module:api/ScheduledPlanLogApi~deleteScheduledPlanLogTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a scheduledPlanLog.
     * Deletes an existing scheduledPlanLog tag using the specified data.
     * @param {Number} scheduledPlanLogId Id of the scheduledPlanLog to remove tag from
     * @param {String} scheduledPlanLogTag The tag to delete
     * @param {module:api/ScheduledPlanLogApi~deleteScheduledPlanLogTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteScheduledPlanLogTag = function(scheduledPlanLogId, scheduledPlanLogTag, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId === undefined || scheduledPlanLogId === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogId' when calling deleteScheduledPlanLogTag");
      }

      // verify the required parameter 'scheduledPlanLogTag' is set
      if (scheduledPlanLogTag === undefined || scheduledPlanLogTag === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogTag' when calling deleteScheduledPlanLogTag");
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId,
        'scheduledPlanLogTag': scheduledPlanLogTag
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
        '/beta/scheduledPlanLog/{scheduledPlanLogId}/tag/{scheduledPlanLogTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateScheduledPlanLogById operation.
     * @callback module:api/ScheduledPlanLogApi~getDuplicateScheduledPlanLogByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledPlanLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a scheduledPlanLog by id
     * Returns a duplicated scheduledPlanLog identified by the specified id.
     * @param {Number} scheduledPlanLogId Id of the scheduledPlanLog to be duplicated.
     * @param {module:api/ScheduledPlanLogApi~getDuplicateScheduledPlanLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduledPlanLog}
     */
    this.getDuplicateScheduledPlanLogById = function(scheduledPlanLogId, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId === undefined || scheduledPlanLogId === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogId' when calling getDuplicateScheduledPlanLogById");
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId
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
      var returnType = ScheduledPlanLog;

      return this.apiClient.callApi(
        '/beta/scheduledPlanLog/duplicate/{scheduledPlanLogId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ScheduledPlanLogApi~getScheduledPlanLogByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScheduledPlanLog>}
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
      var returnType = [ScheduledPlanLog];

      return this.apiClient.callApi(
        '/beta/scheduledPlanLog/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {Number} scheduledPlanLogId Id of the scheduledPlanLog to be returned.
     * @param {module:api/ScheduledPlanLogApi~getScheduledPlanLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduledPlanLog}
     */
    this.getScheduledPlanLogById = function(scheduledPlanLogId, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId === undefined || scheduledPlanLogId === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogId' when calling getScheduledPlanLogById");
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId
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
      var returnType = ScheduledPlanLog;

      return this.apiClient.callApi(
        '/beta/scheduledPlanLog/{scheduledPlanLogId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getScheduledPlanLogTags operation.
     * @callback module:api/ScheduledPlanLogApi~getScheduledPlanLogTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a scheduledPlanLog.
     * Get all existing scheduledPlanLog tags.
     * @param {Number} scheduledPlanLogId Id of the scheduledPlanLog to get tags for
     * @param {module:api/ScheduledPlanLogApi~getScheduledPlanLogTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getScheduledPlanLogTags = function(scheduledPlanLogId, callback) {
      var postBody = null;

      // verify the required parameter 'scheduledPlanLogId' is set
      if (scheduledPlanLogId === undefined || scheduledPlanLogId === null) {
        throw new Error("Missing the required parameter 'scheduledPlanLogId' when calling getScheduledPlanLogTags");
      }


      var pathParams = {
        'scheduledPlanLogId': scheduledPlanLogId
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
        '/beta/scheduledPlanLog/{scheduledPlanLogId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
