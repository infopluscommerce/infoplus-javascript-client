(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LocationBillingType', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LocationBillingType'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LocationBillingTypeApi = factory(root.infoplus.ApiClient, root.infoplus.LocationBillingType, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, LocationBillingType, ApiResponse) {
  'use strict';

  /**
   * LocationBillingType service.
   * @module api/LocationBillingTypeApi
   * @version v2.0
   */

  /**
   * Constructs a new LocationBillingTypeApi. 
   * @alias module:api/LocationBillingTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLocationBillingType operation.
     * @callback module:api/LocationBillingTypeApi~addLocationBillingTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationBillingType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a locationBillingType
     * Inserts a new locationBillingType using the specified data.
     * @param {module:model/LocationBillingType} body LocationBillingType to be inserted.
     * @param {module:api/LocationBillingTypeApi~addLocationBillingTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationBillingType}
     */
    this.addLocationBillingType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addLocationBillingType";
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
      var returnType = LocationBillingType;

      return this.apiClient.callApi(
        '/v2.0/locationBillingType', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocationBillingType operation.
     * @callback module:api/LocationBillingTypeApi~deleteLocationBillingTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a locationBillingType
     * Deletes the locationBillingType identified by the specified id.
     * @param {Integer} locationBillingTypeId Id of the locationBillingType to be deleted.
     * @param {module:api/LocationBillingTypeApi~deleteLocationBillingTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocationBillingType = function(locationBillingTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId == undefined || locationBillingTypeId == null) {
        throw "Missing the required parameter 'locationBillingTypeId' when calling deleteLocationBillingType";
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId
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
        '/v2.0/locationBillingType/{locationBillingTypeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLocationBillingTypeById operation.
     * @callback module:api/LocationBillingTypeApi~getDuplicateLocationBillingTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationBillingType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a locationBillingType by id
     * Returns a duplicated locationBillingType identified by the specified id.
     * @param {Integer} locationBillingTypeId Id of the locationBillingType to be duplicated.
     * @param {module:api/LocationBillingTypeApi~getDuplicateLocationBillingTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationBillingType}
     */
    this.getDuplicateLocationBillingTypeById = function(locationBillingTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId == undefined || locationBillingTypeId == null) {
        throw "Missing the required parameter 'locationBillingTypeId' when calling getDuplicateLocationBillingTypeById";
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId
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
      var returnType = LocationBillingType;

      return this.apiClient.callApi(
        '/v2.0/locationBillingType/duplicate/{locationBillingTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationBillingTypeByFilter operation.
     * @callback module:api/LocationBillingTypeApi~getLocationBillingTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LocationBillingType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search locationBillingTypes by filter
     * Returns the list of locationBillingTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LocationBillingTypeApi~getLocationBillingTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LocationBillingType>}
     */
    this.getLocationBillingTypeByFilter = function(opts, callback) {
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
      var returnType = [LocationBillingType];

      return this.apiClient.callApi(
        '/v2.0/locationBillingType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationBillingTypeById operation.
     * @callback module:api/LocationBillingTypeApi~getLocationBillingTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationBillingType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a locationBillingType by id
     * Returns the locationBillingType identified by the specified id.
     * @param {Integer} locationBillingTypeId Id of the locationBillingType to be returned.
     * @param {module:api/LocationBillingTypeApi~getLocationBillingTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationBillingType}
     */
    this.getLocationBillingTypeById = function(locationBillingTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationBillingTypeId' is set
      if (locationBillingTypeId == undefined || locationBillingTypeId == null) {
        throw "Missing the required parameter 'locationBillingTypeId' when calling getLocationBillingTypeById";
      }


      var pathParams = {
        'locationBillingTypeId': locationBillingTypeId
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
      var returnType = LocationBillingType;

      return this.apiClient.callApi(
        '/v2.0/locationBillingType/{locationBillingTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationBillingType operation.
     * @callback module:api/LocationBillingTypeApi~updateLocationBillingTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationBillingType
     * Updates an existing locationBillingType using the specified data.
     * @param {module:model/LocationBillingType} body LocationBillingType to be updated.
     * @param {module:api/LocationBillingTypeApi~updateLocationBillingTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationBillingType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocationBillingType";
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
        '/v2.0/locationBillingType', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationBillingTypeCustomFields operation.
     * @callback module:api/LocationBillingTypeApi~updateLocationBillingTypeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationBillingType custom fields
     * Updates an existing locationBillingType custom fields using the specified data.
     * @param {module:model/LocationBillingType} body LocationBillingType to be updated.
     * @param {module:api/LocationBillingTypeApi~updateLocationBillingTypeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationBillingTypeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocationBillingTypeCustomFields";
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
        '/v2.0/locationBillingType/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
