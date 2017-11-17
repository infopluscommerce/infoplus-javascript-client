(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LoggedTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LoggedTime'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LoggedTimeApi = factory(root.infoplus.ApiClient, root.infoplus.LoggedTime);
  }
}(this, function(ApiClient, LoggedTime) {
  'use strict';

  /**
   * LoggedTime service.
   * @module api/LoggedTimeApi
   * @version v2.0
   */

  /**
   * Constructs a new LoggedTimeApi. 
   * @alias module:api/LoggedTimeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
     * @param {Integer} loggedTimeId Id of the loggedTime to be duplicated.
     * @param {module:api/LoggedTimeApi~getDuplicateLoggedTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LoggedTime}
     */
    this.getDuplicateLoggedTimeById = function(loggedTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId == undefined || loggedTimeId == null) {
        throw "Missing the required parameter 'loggedTimeId' when calling getDuplicateLoggedTimeById";
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId
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
      var returnType = LoggedTime;

      return this.apiClient.callApi(
        '/v2.0/loggedTime/duplicate/{loggedTimeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LoggedTimeApi~getLoggedTimeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LoggedTime>}
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
        'sort': opts['sort']
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
        '/v2.0/loggedTime/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {Integer} loggedTimeId Id of the loggedTime to be returned.
     * @param {module:api/LoggedTimeApi~getLoggedTimeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LoggedTime}
     */
    this.getLoggedTimeById = function(loggedTimeId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeId' is set
      if (loggedTimeId == undefined || loggedTimeId == null) {
        throw "Missing the required parameter 'loggedTimeId' when calling getLoggedTimeById";
      }


      var pathParams = {
        'loggedTimeId': loggedTimeId
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
      var returnType = LoggedTime;

      return this.apiClient.callApi(
        '/v2.0/loggedTime/{loggedTimeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLoggedTimeCustomFields";
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
        '/v2.0/loggedTime/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
