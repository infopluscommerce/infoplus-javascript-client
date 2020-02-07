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
    define(['ApiClient', 'model/LoggedTime', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LoggedTime'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LoggedTimeApi = factory(root.infoplus.ApiClient, root.infoplus.LoggedTime, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, LoggedTime, RecordFile) {
  'use strict';

  /**
   * LoggedTime service.
   * @module api/LoggedTimeApi
   * @version beta
   */

  /**
   * Constructs a new LoggedTimeApi. 
   * @alias module:api/LoggedTimeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLoggedTimeAudit operation.
     * @callback module:api/LoggedTimeApi~addLoggedTimeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a loggedTime
     * Adds an audit to an existing loggedTime.
     * @param {Number} loggedTimeId Id of the loggedTime to add an audit to
     * @param {String} loggedTimeAudit The audit to add
     * @param {module:api/LoggedTimeApi~addLoggedTimeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoggedTimeAudit = function(loggedTimeId, loggedTimeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling addLoggedTimeAudit");
      }

      // verify the required parameter 'loggedTimeAudit' is set
      if (loggedTimeAudit === undefined || loggedTimeAudit === null) {
        throw new Error("Missing the required parameter 'loggedTimeAudit' when calling addLoggedTimeAudit");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId,
        'loggedTimeAudit': loggedTimeAudit
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
        '/beta/loggedTime/{loggedTimeId}/audit/{loggedTimeAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLoggedTimeFile operation.
     * @callback module:api/LoggedTimeApi~addLoggedTimeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a loggedTime
     * Adds a file to an existing loggedTime.
     * @param {Number} loggedTimeId Id of the loggedTime to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/LoggedTimeApi~addLoggedTimeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoggedTimeFile = function(loggedTimeId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling addLoggedTimeFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addLoggedTimeFile");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId,
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
        '/beta/loggedTime/{loggedTimeId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLoggedTimeFileByURL operation.
     * @callback module:api/LoggedTimeApi~addLoggedTimeFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a loggedTime by URL.
     * Adds a file to an existing loggedTime by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} loggedTimeId Id of the loggedTime to add an file to
     * @param {module:api/LoggedTimeApi~addLoggedTimeFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoggedTimeFileByURL = function(body, loggedTimeId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addLoggedTimeFileByURL");
      }

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling addLoggedTimeFileByURL");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId
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
        '/beta/loggedTime/{loggedTimeId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLoggedTimeTag operation.
     * @callback module:api/LoggedTimeApi~addLoggedTimeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a loggedTime.
     * Adds a tag to an existing loggedTime.
     * @param {Number} loggedTimeId Id of the loggedTime to add a tag to
     * @param {String} loggedTimeTag The tag to add
     * @param {module:api/LoggedTimeApi~addLoggedTimeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLoggedTimeTag = function(loggedTimeId, loggedTimeTag, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling addLoggedTimeTag");
      }

      // verify the required parameter 'loggedTimeTag' is set
      if (loggedTimeTag === undefined || loggedTimeTag === null) {
        throw new Error("Missing the required parameter 'loggedTimeTag' when calling addLoggedTimeTag");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId,
        'loggedTimeTag': loggedTimeTag
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
        '/beta/loggedTime/{loggedTimeId}/tag/{loggedTimeTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoggedTimeFile operation.
     * @callback module:api/LoggedTimeApi~deleteLoggedTimeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a loggedTime.
     * Deletes an existing loggedTime file using the specified data.
     * @param {Number} loggedTimeId Id of the loggedTime to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/LoggedTimeApi~deleteLoggedTimeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLoggedTimeFile = function(loggedTimeId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling deleteLoggedTimeFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteLoggedTimeFile");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId,
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
        '/beta/loggedTime/{loggedTimeId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoggedTimeTag operation.
     * @callback module:api/LoggedTimeApi~deleteLoggedTimeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a loggedTime.
     * Deletes an existing loggedTime tag using the specified data.
     * @param {Number} loggedTimeId Id of the loggedTime to remove tag from
     * @param {String} loggedTimeTag The tag to delete
     * @param {module:api/LoggedTimeApi~deleteLoggedTimeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLoggedTimeTag = function(loggedTimeId, loggedTimeTag, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling deleteLoggedTimeTag");
      }

      // verify the required parameter 'loggedTimeTag' is set
      if (loggedTimeTag === undefined || loggedTimeTag === null) {
        throw new Error("Missing the required parameter 'loggedTimeTag' when calling deleteLoggedTimeTag");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId,
        'loggedTimeTag': loggedTimeTag
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
        '/beta/loggedTime/{loggedTimeId}/tag/{loggedTimeTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLoggedTimeById operation.
     * @callback module:api/LoggedTimeApi~getDuplicateLoggedTimeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoggedTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a loggedTime by id
     * Returns a duplicated loggedTime identified by the specified id.
     * @param {Number} loggedTimeId Id of the loggedTime to be duplicated.
     * @param {module:api/LoggedTimeApi~getDuplicateLoggedTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoggedTime}
     */
    this.getDuplicateLoggedTimeById = function(loggedTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling getDuplicateLoggedTimeById");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId
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
      var returnType = LoggedTime;

      return this.apiClient.callApi(
        '/beta/loggedTime/duplicate/{loggedTimeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoggedTimeByFilter operation.
     * @callback module:api/LoggedTimeApi~getLoggedTimeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LoggedTime>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search loggedTimes by filter
     * Returns the list of loggedTimes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LoggedTimeApi~getLoggedTimeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LoggedTime>}
     */
    this.getLoggedTimeByFilter = function(opts, callback) {
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
      var returnType = [LoggedTime];

      return this.apiClient.callApi(
        '/beta/loggedTime/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoggedTimeById operation.
     * @callback module:api/LoggedTimeApi~getLoggedTimeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoggedTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a loggedTime by id
     * Returns the loggedTime identified by the specified id.
     * @param {Number} loggedTimeId Id of the loggedTime to be returned.
     * @param {module:api/LoggedTimeApi~getLoggedTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoggedTime}
     */
    this.getLoggedTimeById = function(loggedTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling getLoggedTimeById");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId
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
      var returnType = LoggedTime;

      return this.apiClient.callApi(
        '/beta/loggedTime/{loggedTimeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoggedTimeFiles operation.
     * @callback module:api/LoggedTimeApi~getLoggedTimeFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a loggedTime.
     * Get all existing loggedTime files.
     * @param {Number} loggedTimeId Id of the loggedTime to get files for
     * @param {module:api/LoggedTimeApi~getLoggedTimeFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLoggedTimeFiles = function(loggedTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling getLoggedTimeFiles");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId
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
        '/beta/loggedTime/{loggedTimeId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoggedTimeTags operation.
     * @callback module:api/LoggedTimeApi~getLoggedTimeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a loggedTime.
     * Get all existing loggedTime tags.
     * @param {Number} loggedTimeId Id of the loggedTime to get tags for
     * @param {module:api/LoggedTimeApi~getLoggedTimeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLoggedTimeTags = function(loggedTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId === undefined || loggedTimeId === null) {
        throw new Error("Missing the required parameter 'loggedTimeId' when calling getLoggedTimeTags");
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId
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
        '/beta/loggedTime/{loggedTimeId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoggedTimeCustomFields operation.
     * @callback module:api/LoggedTimeApi~updateLoggedTimeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a loggedTime custom fields
     * Updates an existing loggedTime custom fields using the specified data.
     * @param {module:model/LoggedTime} body LoggedTime to be updated.
     * @param {module:api/LoggedTimeApi~updateLoggedTimeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLoggedTimeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLoggedTimeCustomFields");
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
        '/beta/loggedTime/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
