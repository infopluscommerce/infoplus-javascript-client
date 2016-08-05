(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Work'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Work'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WorkApi = factory(root.infoplus.ApiClient, root.infoplus.Work);
  }
}(this, function(ApiClient, Work) {
  'use strict';

  /**
   * Work service.
   * @module api/WorkApi
   * @version beta
   */

  /**
   * Constructs a new WorkApi. 
   * @alias module:api/WorkApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getWorkByFilter operation.
     * @callback module:api/WorkApi~getWorkByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Work>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search works by filter
     * Returns the list of works that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WorkApi~getWorkByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Work>}
     */
    this.getWorkByFilter = function(opts, callback) {
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
      var returnType = [Work];

      return this.apiClient.callApi(
        '/beta/work/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkById operation.
     * @callback module:api/WorkApi~getWorkByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Work} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a work by id
     * Returns the work identified by the specified id.
     * @param {Integer} workId Id of the work to be returned.
     * @param {module:api/WorkApi~getWorkByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Work}
     */
    this.getWorkById = function(workId, callback) {
      var postBody = null;

      // verify the required parameter 'workId' is set
      if (workId == undefined || workId == null) {
        throw "Missing the required parameter 'workId' when calling getWorkById";
      }


      var pathParams = {
        'workId': workId
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
      var returnType = Work;

      return this.apiClient.callApi(
        '/beta/work/{workId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkCustomFields operation.
     * @callback module:api/WorkApi~updateWorkCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a work custom fields
     * Updates an existing work custom fields using the specified data.
     * @param {module:model/Work} body Work to be updated.
     * @param {module:api/WorkApi~updateWorkCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWorkCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateWorkCustomFields";
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
        '/beta/work/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
