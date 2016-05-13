(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LoggedTimeType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LoggedTimeType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LoggedTimeTypeApi = factory(root.infoplus.ApiClient, root.infoplus.LoggedTimeType);
  }
}(this, function(ApiClient, LoggedTimeType) {
  'use strict';

  /**
   * LoggedTimeType service.
   * @module api/LoggedTimeTypeApi
   * @version 1.0
   */

  /**
   * Constructs a new LoggedTimeTypeApi. 
   * @alias module:api/LoggedTimeTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getLoggedTimeTypeById operation.
     * @callback module:api/LoggedTimeTypeApi~getLoggedTimeTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoggedTimeType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a loggedTimeType by id
     * Returns the loggedTimeType identified by the specified id.
     * @param {String} loggedTimeTypeId Id of loggedTimeType to be returned.
     * @param {module:api/LoggedTimeTypeApi~getLoggedTimeTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LoggedTimeType}
     */
    this.getLoggedTimeTypeById = function(loggedTimeTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'loggedTimeTypeId' is set
      if (loggedTimeTypeId == undefined || loggedTimeTypeId == null) {
        throw "Missing the required parameter 'loggedTimeTypeId' when calling getLoggedTimeTypeById";
      }


      var pathParams = {
        'loggedTimeTypeId': loggedTimeTypeId
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
      var returnType = LoggedTimeType;

      return this.apiClient.callApi(
        '/v1.0/loggedTimeType/{loggedTimeTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoggedTimeTypeBySearchText operation.
     * @callback module:api/LoggedTimeTypeApi~getLoggedTimeTypeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LoggedTimeType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search loggedTimeTypes
     * Returns the list of loggedTimeTypes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/LoggedTimeTypeApi~getLoggedTimeTypeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LoggedTimeType>}
     */
    this.getLoggedTimeTypeBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [LoggedTimeType];

      return this.apiClient.callApi(
        '/v1.0/loggedTimeType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
