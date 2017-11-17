(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Building', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Building'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.BuildingApi = factory(root.infoplus.ApiClient, root.infoplus.Building, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Building, ApiResponse) {
  'use strict';

  /**
   * Building service.
   * @module api/BuildingApi
   * @version v2.0
   */

  /**
   * Constructs a new BuildingApi. 
   * @alias module:api/BuildingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBuilding operation.
     * @callback module:api/BuildingApi~addBuildingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Building} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a building
     * Inserts a new building using the specified data.
     * @param {module:model/Building} body Building to be inserted.
     * @param {module:api/BuildingApi~addBuildingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Building}
     */
    this.addBuilding = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addBuilding";
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
      var returnType = Building;

      return this.apiClient.callApi(
        '/v2.0/building', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBuilding operation.
     * @callback module:api/BuildingApi~deleteBuildingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a building
     * Deletes the building identified by the specified id.
     * @param {Integer} buildingId Id of the building to be deleted.
     * @param {module:api/BuildingApi~deleteBuildingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBuilding = function(buildingId, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling deleteBuilding";
      }


      var pathParams = {
        'buildingId': buildingId
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
        '/v2.0/building/{buildingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBuildingByFilter operation.
     * @callback module:api/BuildingApi~getBuildingByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Building>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search buildings by filter
     * Returns the list of buildings that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/BuildingApi~getBuildingByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Building>}
     */
    this.getBuildingByFilter = function(opts, callback) {
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
      var returnType = [Building];

      return this.apiClient.callApi(
        '/v2.0/building/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBuildingById operation.
     * @callback module:api/BuildingApi~getBuildingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Building} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a building by id
     * Returns the building identified by the specified id.
     * @param {Integer} buildingId Id of the building to be returned.
     * @param {module:api/BuildingApi~getBuildingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Building}
     */
    this.getBuildingById = function(buildingId, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling getBuildingById";
      }


      var pathParams = {
        'buildingId': buildingId
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
      var returnType = Building;

      return this.apiClient.callApi(
        '/v2.0/building/{buildingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateBuildingById operation.
     * @callback module:api/BuildingApi~getDuplicateBuildingByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Building} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a building by id
     * Returns a duplicated building identified by the specified id.
     * @param {Integer} buildingId Id of the building to be duplicated.
     * @param {module:api/BuildingApi~getDuplicateBuildingByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Building}
     */
    this.getDuplicateBuildingById = function(buildingId, callback) {
      var postBody = null;

      // verify the required parameter 'buildingId' is set
      if (buildingId == undefined || buildingId == null) {
        throw "Missing the required parameter 'buildingId' when calling getDuplicateBuildingById";
      }


      var pathParams = {
        'buildingId': buildingId
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
      var returnType = Building;

      return this.apiClient.callApi(
        '/v2.0/building/duplicate/{buildingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBuilding operation.
     * @callback module:api/BuildingApi~updateBuildingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a building
     * Updates an existing building using the specified data.
     * @param {module:model/Building} body Building to be updated.
     * @param {module:api/BuildingApi~updateBuildingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBuilding = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBuilding";
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
        '/v2.0/building', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBuildingCustomFields operation.
     * @callback module:api/BuildingApi~updateBuildingCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a building custom fields
     * Updates an existing building custom fields using the specified data.
     * @param {module:model/Building} body Building to be updated.
     * @param {module:api/BuildingApi~updateBuildingCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBuildingCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateBuildingCustomFields";
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
        '/v2.0/building/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
