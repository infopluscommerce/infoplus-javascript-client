(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LocationAddressScheme', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LocationAddressScheme'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LocationAddressSchemeApi = factory(root.infoplus.ApiClient, root.infoplus.LocationAddressScheme, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, LocationAddressScheme, ApiResponse) {
  'use strict';

  /**
   * LocationAddressScheme service.
   * @module api/LocationAddressSchemeApi
   * @version beta
   */

  /**
   * Constructs a new LocationAddressSchemeApi. 
   * @alias module:api/LocationAddressSchemeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLocationAddressScheme operation.
     * @callback module:api/LocationAddressSchemeApi~addLocationAddressSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationAddressScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a locationAddressScheme
     * Inserts a new locationAddressScheme using the specified data.
     * @param {module:model/LocationAddressScheme} body LocationAddressScheme to be inserted.
     * @param {module:api/LocationAddressSchemeApi~addLocationAddressSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationAddressScheme}
     */
    this.addLocationAddressScheme = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addLocationAddressScheme";
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
      var returnType = LocationAddressScheme;

      return this.apiClient.callApi(
        '/beta/locationAddressScheme', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLocationAddressSchemeAudit operation.
     * @callback module:api/LocationAddressSchemeApi~addLocationAddressSchemeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a locationAddressScheme
     * Adds an audit to an existing locationAddressScheme.
     * @param {Integer} locationAddressSchemeId Id of the locationAddressScheme to add an audit to
     * @param {String} locationAddressSchemeAudit The audit to add
     * @param {module:api/LocationAddressSchemeApi~addLocationAddressSchemeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLocationAddressSchemeAudit = function(locationAddressSchemeId, locationAddressSchemeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'locationAddressSchemeId' is set
      if (locationAddressSchemeId == undefined || locationAddressSchemeId == null) {
        throw "Missing the required parameter 'locationAddressSchemeId' when calling addLocationAddressSchemeAudit";
      }

      // verify the required parameter 'locationAddressSchemeAudit' is set
      if (locationAddressSchemeAudit == undefined || locationAddressSchemeAudit == null) {
        throw "Missing the required parameter 'locationAddressSchemeAudit' when calling addLocationAddressSchemeAudit";
      }


      var pathParams = {
        'locationAddressSchemeId': locationAddressSchemeId,
        'locationAddressSchemeAudit': locationAddressSchemeAudit
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
        '/beta/locationAddressScheme/{locationAddressSchemeId}/audit/{locationAddressSchemeAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addLocationAddressSchemeTag operation.
     * @callback module:api/LocationAddressSchemeApi~addLocationAddressSchemeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a locationAddressScheme.
     * Adds a tag to an existing locationAddressScheme.
     * @param {Integer} locationAddressSchemeId Id of the locationAddressScheme to add a tag to
     * @param {String} locationAddressSchemeTag The tag to add
     * @param {module:api/LocationAddressSchemeApi~addLocationAddressSchemeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addLocationAddressSchemeTag = function(locationAddressSchemeId, locationAddressSchemeTag, callback) {
      var postBody = null;

      // verify the required parameter 'locationAddressSchemeId' is set
      if (locationAddressSchemeId == undefined || locationAddressSchemeId == null) {
        throw "Missing the required parameter 'locationAddressSchemeId' when calling addLocationAddressSchemeTag";
      }

      // verify the required parameter 'locationAddressSchemeTag' is set
      if (locationAddressSchemeTag == undefined || locationAddressSchemeTag == null) {
        throw "Missing the required parameter 'locationAddressSchemeTag' when calling addLocationAddressSchemeTag";
      }


      var pathParams = {
        'locationAddressSchemeId': locationAddressSchemeId,
        'locationAddressSchemeTag': locationAddressSchemeTag
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
        '/beta/locationAddressScheme/{locationAddressSchemeId}/tag/{locationAddressSchemeTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocationAddressScheme operation.
     * @callback module:api/LocationAddressSchemeApi~deleteLocationAddressSchemeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a locationAddressScheme
     * Deletes the locationAddressScheme identified by the specified id.
     * @param {Integer} locationAddressSchemeId Id of the locationAddressScheme to be deleted.
     * @param {module:api/LocationAddressSchemeApi~deleteLocationAddressSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocationAddressScheme = function(locationAddressSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationAddressSchemeId' is set
      if (locationAddressSchemeId == undefined || locationAddressSchemeId == null) {
        throw "Missing the required parameter 'locationAddressSchemeId' when calling deleteLocationAddressScheme";
      }


      var pathParams = {
        'locationAddressSchemeId': locationAddressSchemeId
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
        '/beta/locationAddressScheme/{locationAddressSchemeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLocationAddressSchemeTag operation.
     * @callback module:api/LocationAddressSchemeApi~deleteLocationAddressSchemeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a locationAddressScheme.
     * Deletes an existing locationAddressScheme tag using the specified data.
     * @param {Integer} locationAddressSchemeId Id of the locationAddressScheme to remove tag from
     * @param {String} locationAddressSchemeTag The tag to delete
     * @param {module:api/LocationAddressSchemeApi~deleteLocationAddressSchemeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLocationAddressSchemeTag = function(locationAddressSchemeId, locationAddressSchemeTag, callback) {
      var postBody = null;

      // verify the required parameter 'locationAddressSchemeId' is set
      if (locationAddressSchemeId == undefined || locationAddressSchemeId == null) {
        throw "Missing the required parameter 'locationAddressSchemeId' when calling deleteLocationAddressSchemeTag";
      }

      // verify the required parameter 'locationAddressSchemeTag' is set
      if (locationAddressSchemeTag == undefined || locationAddressSchemeTag == null) {
        throw "Missing the required parameter 'locationAddressSchemeTag' when calling deleteLocationAddressSchemeTag";
      }


      var pathParams = {
        'locationAddressSchemeId': locationAddressSchemeId,
        'locationAddressSchemeTag': locationAddressSchemeTag
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
        '/beta/locationAddressScheme/{locationAddressSchemeId}/tag/{locationAddressSchemeTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLocationAddressSchemeById operation.
     * @callback module:api/LocationAddressSchemeApi~getDuplicateLocationAddressSchemeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationAddressScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a locationAddressScheme by id
     * Returns a duplicated locationAddressScheme identified by the specified id.
     * @param {Integer} locationAddressSchemeId Id of the locationAddressScheme to be duplicated.
     * @param {module:api/LocationAddressSchemeApi~getDuplicateLocationAddressSchemeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationAddressScheme}
     */
    this.getDuplicateLocationAddressSchemeById = function(locationAddressSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationAddressSchemeId' is set
      if (locationAddressSchemeId == undefined || locationAddressSchemeId == null) {
        throw "Missing the required parameter 'locationAddressSchemeId' when calling getDuplicateLocationAddressSchemeById";
      }


      var pathParams = {
        'locationAddressSchemeId': locationAddressSchemeId
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
      var returnType = LocationAddressScheme;

      return this.apiClient.callApi(
        '/beta/locationAddressScheme/duplicate/{locationAddressSchemeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationAddressSchemeByFilter operation.
     * @callback module:api/LocationAddressSchemeApi~getLocationAddressSchemeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LocationAddressScheme>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search locationAddressSchemes by filter
     * Returns the list of locationAddressSchemes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LocationAddressSchemeApi~getLocationAddressSchemeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LocationAddressScheme>}
     */
    this.getLocationAddressSchemeByFilter = function(opts, callback) {
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
      var returnType = [LocationAddressScheme];

      return this.apiClient.callApi(
        '/beta/locationAddressScheme/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationAddressSchemeById operation.
     * @callback module:api/LocationAddressSchemeApi~getLocationAddressSchemeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationAddressScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a locationAddressScheme by id
     * Returns the locationAddressScheme identified by the specified id.
     * @param {Integer} locationAddressSchemeId Id of the locationAddressScheme to be returned.
     * @param {module:api/LocationAddressSchemeApi~getLocationAddressSchemeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LocationAddressScheme}
     */
    this.getLocationAddressSchemeById = function(locationAddressSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationAddressSchemeId' is set
      if (locationAddressSchemeId == undefined || locationAddressSchemeId == null) {
        throw "Missing the required parameter 'locationAddressSchemeId' when calling getLocationAddressSchemeById";
      }


      var pathParams = {
        'locationAddressSchemeId': locationAddressSchemeId
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
      var returnType = LocationAddressScheme;

      return this.apiClient.callApi(
        '/beta/locationAddressScheme/{locationAddressSchemeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocationAddressSchemeTags operation.
     * @callback module:api/LocationAddressSchemeApi~getLocationAddressSchemeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a locationAddressScheme.
     * Get all existing locationAddressScheme tags.
     * @param {Integer} locationAddressSchemeId Id of the locationAddressScheme to get tags for
     * @param {module:api/LocationAddressSchemeApi~getLocationAddressSchemeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLocationAddressSchemeTags = function(locationAddressSchemeId, callback) {
      var postBody = null;

      // verify the required parameter 'locationAddressSchemeId' is set
      if (locationAddressSchemeId == undefined || locationAddressSchemeId == null) {
        throw "Missing the required parameter 'locationAddressSchemeId' when calling getLocationAddressSchemeTags";
      }


      var pathParams = {
        'locationAddressSchemeId': locationAddressSchemeId
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
        '/beta/locationAddressScheme/{locationAddressSchemeId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationAddressScheme operation.
     * @callback module:api/LocationAddressSchemeApi~updateLocationAddressSchemeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationAddressScheme
     * Updates an existing locationAddressScheme using the specified data.
     * @param {module:model/LocationAddressScheme} body LocationAddressScheme to be updated.
     * @param {module:api/LocationAddressSchemeApi~updateLocationAddressSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationAddressScheme = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocationAddressScheme";
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
        '/beta/locationAddressScheme', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLocationAddressSchemeCustomFields operation.
     * @callback module:api/LocationAddressSchemeApi~updateLocationAddressSchemeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a locationAddressScheme custom fields
     * Updates an existing locationAddressScheme custom fields using the specified data.
     * @param {module:model/LocationAddressScheme} body LocationAddressScheme to be updated.
     * @param {module:api/LocationAddressSchemeApi~updateLocationAddressSchemeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLocationAddressSchemeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLocationAddressSchemeCustomFields";
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
        '/beta/locationAddressScheme/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
