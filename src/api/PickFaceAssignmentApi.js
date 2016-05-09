(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PickFaceAssignment', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PickFaceAssignment'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.PickFaceAssignmentApi = factory(root.infoplus.ApiClient, root.infoplus.PickFaceAssignment, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, PickFaceAssignment, ApiResponse) {
  'use strict';

  /**
   * PickFaceAssignment service.
   * @module api/PickFaceAssignmentApi
   * @version 1.0
   */

  /**
   * Constructs a new PickFaceAssignmentApi. 
   * @alias module:api/PickFaceAssignmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addPickFaceAssignment operation.
     * @callback module:api/PickFaceAssignmentApi~addPickFaceAssignmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PickFaceAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a pickFaceAssignment
     * Inserts a new pickFaceAssignment using the specified data.
     * @param {module:model/PickFaceAssignment} body PickFaceAssignment to be inserted.
     * @param {module:api/PickFaceAssignmentApi~addPickFaceAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PickFaceAssignment}
     */
    this.addPickFaceAssignment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addPickFaceAssignment";
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
      var returnType = PickFaceAssignment;

      return this.apiClient.callApi(
        '/v1.0/pickFaceAssignment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePickFaceAssignment operation.
     * @callback module:api/PickFaceAssignmentApi~deletePickFaceAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a pickFaceAssignment
     * Deletes the pickFaceAssignment identified by the specified id.
     * @param {Integer} pickFaceAssignmentId Id of the pickFaceAssignment to be deleted.
     * @param {module:api/PickFaceAssignmentApi~deletePickFaceAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePickFaceAssignment = function(pickFaceAssignmentId, callback) {
      var postBody = null;

      // verify the required parameter 'pickFaceAssignmentId' is set
      if (pickFaceAssignmentId == undefined || pickFaceAssignmentId == null) {
        throw "Missing the required parameter 'pickFaceAssignmentId' when calling deletePickFaceAssignment";
      }


      var pathParams = {
        'pickFaceAssignmentId': pickFaceAssignmentId
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
        '/v1.0/pickFaceAssignment/{pickFaceAssignmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPickFaceAssignmentByFilter operation.
     * @callback module:api/PickFaceAssignmentApi~getPickFaceAssignmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PickFaceAssignment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search pickFaceAssignments by filter
     * Returns the list of pickFaceAssignments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/PickFaceAssignmentApi~getPickFaceAssignmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/PickFaceAssignment>}
     */
    this.getPickFaceAssignmentByFilter = function(opts, callback) {
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
      var returnType = [PickFaceAssignment];

      return this.apiClient.callApi(
        '/v1.0/pickFaceAssignment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPickFaceAssignmentById operation.
     * @callback module:api/PickFaceAssignmentApi~getPickFaceAssignmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PickFaceAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a pickFaceAssignment by id
     * Returns the pickFaceAssignment identified by the specified id.
     * @param {Integer} pickFaceAssignmentId Id of the pickFaceAssignment to be returned.
     * @param {module:api/PickFaceAssignmentApi~getPickFaceAssignmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PickFaceAssignment}
     */
    this.getPickFaceAssignmentById = function(pickFaceAssignmentId, callback) {
      var postBody = null;

      // verify the required parameter 'pickFaceAssignmentId' is set
      if (pickFaceAssignmentId == undefined || pickFaceAssignmentId == null) {
        throw "Missing the required parameter 'pickFaceAssignmentId' when calling getPickFaceAssignmentById";
      }


      var pathParams = {
        'pickFaceAssignmentId': pickFaceAssignmentId
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
      var returnType = PickFaceAssignment;

      return this.apiClient.callApi(
        '/v1.0/pickFaceAssignment/{pickFaceAssignmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePickFaceAssignment operation.
     * @callback module:api/PickFaceAssignmentApi~updatePickFaceAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a pickFaceAssignment
     * Updates an existing pickFaceAssignment using the specified data.
     * @param {module:model/PickFaceAssignment} body PickFaceAssignment to be updated.
     * @param {module:api/PickFaceAssignmentApi~updatePickFaceAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePickFaceAssignment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updatePickFaceAssignment";
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
        '/v1.0/pickFaceAssignment', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
