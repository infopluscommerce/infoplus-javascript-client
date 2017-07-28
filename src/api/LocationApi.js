(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/Location'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/Location'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LocationApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.Location);
  }
}(this, function(ApiClient, ApiResponse, Location) {
  'use strict';

  /**
   * Location service.
   * @module api/LocationApi
   * @version beta
   */

  /**
   * Constructs a new LocationApi. 
   * @alias module:api/LocationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLocation operation.
     * @callback module:api/LocationApi~addLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Location} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a location
     * Inserts a new location using the specified data.
     * @param {module:model/Location} body Location to be inserted.
     * @param {module:api/LocationApi~addLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Location}
     */
    this.addLocation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addLocation";
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
      var returnType = Location;

      return this.apiClient.callApi(
        '/beta/location', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLocationAudit operation.
     * @callback module:api/LocationApi~addLocationAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a location
     * Adds an audit to an existing location.
     * @param {Integer} locationId Id of the location to add an audit to
     * @param {String} locationAudit The audit to add
     * @param {module:api/LocationApi~addLocationAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLocationAudit = function(locationId, locationAudit, callback) {
      var postBody = null;

      // verify the required parameter 'locationId' is set
      if (locationId == undefined || locationId == null) {
        throw "Missing the required parameter 'locationId' when calling addLocationAudit";
      }

      // verify the required parameter 'locationAudit' is set
      if (locationAudit == undefined || locationAudit == null) {
        throw "Missing the required parameter 'locationAudit' when calling addLocationAudit";
      }


      var pathParams = {
        'locationId': locationId,
        'locationAudit': locationAudit
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
        '/beta/location/{locationId}/audit/{locationAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLocationTag operation.
     * @callback module:api/LocationApi~addLocationTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a location.
     * Adds a tag to an existing location.
     * @param {Integer} locationId Id of the location to add a tag to
     * @param {String} locationTag The tag to add
     * @param {module:api/LocationApi~addLocationTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLocationTag = function(locationId, locationTag, callback) {
      var postBody = null;

      // verify the required parameter 'locationId' is set
      if (locationId == undefined || locationId == null) {
        throw "Missing the required parameter 'locationId' when calling addLocationTag";
      }

      // verify the required parameter 'locationTag' is set
      if (locationTag == undefined || locationTag == null) {
        throw "Missing the required parameter 'locationTag' when calling addLocationTag";
      }


      var pathParams = {
        'locationId': locationId,
        'locationTag': locationTag
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
        '/beta/location/{locationId}/tag/{locationTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocation operation.
     * @callback module:api/LocationApi~deleteLocationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a location
     * Deletes the location identified by the specified id.
     * @param {Integer} locationId Id of the location to be deleted.
     * @param {module:api/LocationApi~deleteLocationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocation = function(locationId, callback) {
      var postBody = null;

      // verify the required parameter 'locationId' is set
      if (locationId == undefined || locationId == null) {
        throw "Missing the required parameter 'locationId' when calling deleteLocation";
      }


      var pathParams = {
        'locationId': locationId
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
        '/beta/location/{locationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocationTag operation.
     * @callback module:api/LocationApi~deleteLocationTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a location.
     * Deletes an existing location tag using the specified data.
     * @param {Integer} locationId Id of the location to remove tag from
     * @param {String} locationTag The tag to delete
     * @param {module:api/LocationApi~deleteLocationTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocationTag = function(locationId, locationTag, callback) {
      var postBody = null;

      // verify the required parameter 'locationId' is set
      if (locationId == undefined || locationId == null) {
        throw "Missing the required parameter 'locationId' when calling deleteLocationTag";
      }

      // verify the required parameter 'locationTag' is set
      if (locationTag == undefined || locationTag == null) {
        throw "Missing the required parameter 'locationTag' when calling deleteLocationTag";
      }


      var pathParams = {
        'locationId': locationId,
        'locationTag': locationTag
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
        '/beta/location/{locationId}/tag/{locationTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLocationById operation.
     * @callback module:api/LocationApi~getDuplicateLocationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Location} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a location by id
     * Returns a duplicated location identified by the specified id.
     * @param {Integer} locationId Id of the location to be duplicated.
     * @param {module:api/LocationApi~getDuplicateLocationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Location}
     */
    this.getDuplicateLocationById = function(locationId, callback) {
      var postBody = null;

      // verify the required parameter 'locationId' is set
      if (locationId == undefined || locationId == null) {
        throw "Missing the required parameter 'locationId' when calling getDuplicateLocationById";
      }


      var pathParams = {
        'locationId': locationId
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
      var returnType = Location;

      return this.apiClient.callApi(
        '/beta/location/duplicate/{locationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationByFilter operation.
     * @callback module:api/LocationApi~getLocationByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Location>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search locations by filter
     * Returns the list of locations that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LocationApi~getLocationByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Location>}
     */
    this.getLocationByFilter = function(opts, callback) {
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
      var returnType = [Location];

      return this.apiClient.callApi(
        '/beta/location/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationById operation.
     * @callback module:api/LocationApi~getLocationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Location} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a location by id
     * Returns the location identified by the specified id.
     * @param {Integer} locationId Id of the location to be returned.
     * @param {module:api/LocationApi~getLocationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Location}
     */
    this.getLocationById = function(locationId, callback) {
      var postBody = null;

      // verify the required parameter 'locationId' is set
      if (locationId == undefined || locationId == null) {
        throw "Missing the required parameter 'locationId' when calling getLocationById";
      }


      var pathParams = {
        'locationId': locationId
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
      var returnType = Location;

      return this.apiClient.callApi(
        '/beta/location/{locationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationTags operation.
     * @callback module:api/LocationApi~getLocationTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a location.
     * Get all existing location tags.
     * @param {Integer} locationId Id of the location to get tags for
     * @param {module:api/LocationApi~getLocationTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLocationTags = function(locationId, callback) {
      var postBody = null;

      // verify the required parameter 'locationId' is set
      if (locationId == undefined || locationId == null) {
        throw "Missing the required parameter 'locationId' when calling getLocationTags";
      }


      var pathParams = {
        'locationId': locationId
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
        '/beta/location/{locationId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocation operation.
     * @callback module:api/LocationApi~updateLocationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a location
     * Updates an existing location using the specified data.
     * @param {module:model/Location} body Location to be updated.
     * @param {module:api/LocationApi~updateLocationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocation";
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
        '/beta/location', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationCustomFields operation.
     * @callback module:api/LocationApi~updateLocationCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a location custom fields
     * Updates an existing location custom fields using the specified data.
     * @param {module:model/Location} body Location to be updated.
     * @param {module:api/LocationApi~updateLocationCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocationCustomFields";
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
        '/beta/location/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
