(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LocationFootprint', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LocationFootprint'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LocationFootprintApi = factory(root.infoplus.ApiClient, root.infoplus.LocationFootprint, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, LocationFootprint, ApiResponse) {
  'use strict';

  /**
   * LocationFootprint service.
   * @module api/LocationFootprintApi
   * @version v2.0
   */

  /**
   * Constructs a new LocationFootprintApi. 
   * @alias module:api/LocationFootprintApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLocationFootprint operation.
     * @callback module:api/LocationFootprintApi~addLocationFootprintCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationFootprint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a locationFootprint
     * Inserts a new locationFootprint using the specified data.
     * @param {module:model/LocationFootprint} body LocationFootprint to be inserted.
     * @param {module:api/LocationFootprintApi~addLocationFootprintCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationFootprint}
     */
    this.addLocationFootprint = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addLocationFootprint";
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
      var returnType = LocationFootprint;

      return this.apiClient.callApi(
        '/v2.0/locationFootprint', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocationFootprint operation.
     * @callback module:api/LocationFootprintApi~deleteLocationFootprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a locationFootprint
     * Deletes the locationFootprint identified by the specified id.
     * @param {Integer} locationFootprintId Id of the locationFootprint to be deleted.
     * @param {module:api/LocationFootprintApi~deleteLocationFootprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocationFootprint = function(locationFootprintId, callback) {
      var postBody = null;

      // verify the required parameter 'locationFootprintId' is set
      if (locationFootprintId == undefined || locationFootprintId == null) {
        throw "Missing the required parameter 'locationFootprintId' when calling deleteLocationFootprint";
      }


      var pathParams = {
        'locationFootprintId': locationFootprintId
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
        '/v2.0/locationFootprint/{locationFootprintId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLocationFootprintById operation.
     * @callback module:api/LocationFootprintApi~getDuplicateLocationFootprintByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationFootprint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a locationFootprint by id
     * Returns a duplicated locationFootprint identified by the specified id.
     * @param {Integer} locationFootprintId Id of the locationFootprint to be duplicated.
     * @param {module:api/LocationFootprintApi~getDuplicateLocationFootprintByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationFootprint}
     */
    this.getDuplicateLocationFootprintById = function(locationFootprintId, callback) {
      var postBody = null;

      // verify the required parameter 'locationFootprintId' is set
      if (locationFootprintId == undefined || locationFootprintId == null) {
        throw "Missing the required parameter 'locationFootprintId' when calling getDuplicateLocationFootprintById";
      }


      var pathParams = {
        'locationFootprintId': locationFootprintId
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
      var returnType = LocationFootprint;

      return this.apiClient.callApi(
        '/v2.0/locationFootprint/duplicate/{locationFootprintId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationFootprintByFilter operation.
     * @callback module:api/LocationFootprintApi~getLocationFootprintByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LocationFootprint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search locationFootprints by filter
     * Returns the list of locationFootprints that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LocationFootprintApi~getLocationFootprintByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LocationFootprint>}
     */
    this.getLocationFootprintByFilter = function(opts, callback) {
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
      var returnType = [LocationFootprint];

      return this.apiClient.callApi(
        '/v2.0/locationFootprint/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationFootprintById operation.
     * @callback module:api/LocationFootprintApi~getLocationFootprintByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationFootprint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a locationFootprint by id
     * Returns the locationFootprint identified by the specified id.
     * @param {Integer} locationFootprintId Id of the locationFootprint to be returned.
     * @param {module:api/LocationFootprintApi~getLocationFootprintByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationFootprint}
     */
    this.getLocationFootprintById = function(locationFootprintId, callback) {
      var postBody = null;

      // verify the required parameter 'locationFootprintId' is set
      if (locationFootprintId == undefined || locationFootprintId == null) {
        throw "Missing the required parameter 'locationFootprintId' when calling getLocationFootprintById";
      }


      var pathParams = {
        'locationFootprintId': locationFootprintId
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
      var returnType = LocationFootprint;

      return this.apiClient.callApi(
        '/v2.0/locationFootprint/{locationFootprintId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationFootprint operation.
     * @callback module:api/LocationFootprintApi~updateLocationFootprintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationFootprint
     * Updates an existing locationFootprint using the specified data.
     * @param {module:model/LocationFootprint} body LocationFootprint to be updated.
     * @param {module:api/LocationFootprintApi~updateLocationFootprintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationFootprint = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocationFootprint";
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
        '/v2.0/locationFootprint', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationFootprintCustomFields operation.
     * @callback module:api/LocationFootprintApi~updateLocationFootprintCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationFootprint custom fields
     * Updates an existing locationFootprint custom fields using the specified data.
     * @param {module:model/LocationFootprint} body LocationFootprint to be updated.
     * @param {module:api/LocationFootprintApi~updateLocationFootprintCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationFootprintCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocationFootprintCustomFields";
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
        '/v2.0/locationFootprint/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
