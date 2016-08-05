(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Kit', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Kit'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.KitApi = factory(root.infoplus.ApiClient, root.infoplus.Kit, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Kit, ApiResponse) {
  'use strict';

  /**
   * Kit service.
   * @module api/KitApi
   * @version beta
   */

  /**
   * Constructs a new KitApi. 
   * @alias module:api/KitApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addKit operation.
     * @callback module:api/KitApi~addKitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Kit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a kit
     * Inserts a new kit using the specified data.
     * @param {module:model/Kit} body Kit to be inserted.
     * @param {module:api/KitApi~addKitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Kit}
     */
    this.addKit = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addKit";
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
      var returnType = Kit;

      return this.apiClient.callApi(
        '/beta/kit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteKit operation.
     * @callback module:api/KitApi~deleteKitCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a kit
     * Deletes the kit identified by the specified id.
     * @param {Integer} kitId Id of the kit to be deleted.
     * @param {module:api/KitApi~deleteKitCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteKit = function(kitId, callback) {
      var postBody = null;

      // verify the required parameter 'kitId' is set
      if (kitId == undefined || kitId == null) {
        throw "Missing the required parameter 'kitId' when calling deleteKit";
      }


      var pathParams = {
        'kitId': kitId
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
        '/beta/kit/{kitId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getKitByFilter operation.
     * @callback module:api/KitApi~getKitByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Kit>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search kits by filter
     * Returns the list of kits that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/KitApi~getKitByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Kit>}
     */
    this.getKitByFilter = function(opts, callback) {
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
      var returnType = [Kit];

      return this.apiClient.callApi(
        '/beta/kit/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getKitById operation.
     * @callback module:api/KitApi~getKitByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Kit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a kit by id
     * Returns the kit identified by the specified id.
     * @param {Integer} kitId Id of the kit to be returned.
     * @param {module:api/KitApi~getKitByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Kit}
     */
    this.getKitById = function(kitId, callback) {
      var postBody = null;

      // verify the required parameter 'kitId' is set
      if (kitId == undefined || kitId == null) {
        throw "Missing the required parameter 'kitId' when calling getKitById";
      }


      var pathParams = {
        'kitId': kitId
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
      var returnType = Kit;

      return this.apiClient.callApi(
        '/beta/kit/{kitId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateKit operation.
     * @callback module:api/KitApi~updateKitCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a kit
     * Updates an existing kit using the specified data.
     * @param {module:model/Kit} body Kit to be updated.
     * @param {module:api/KitApi~updateKitCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateKit = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateKit";
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
        '/beta/kit', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateKitCustomFields operation.
     * @callback module:api/KitApi~updateKitCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a kit custom fields
     * Updates an existing kit custom fields using the specified data.
     * @param {module:model/Kit} body Kit to be updated.
     * @param {module:api/KitApi~updateKitCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateKitCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateKitCustomFields";
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
        '/beta/kit/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
