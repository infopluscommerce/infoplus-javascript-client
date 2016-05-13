(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/ExternalShipment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ExternalShipment'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ExternalShipmentApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ExternalShipment);
  }
}(this, function(ApiClient, ApiResponse, ExternalShipment) {
  'use strict';

  /**
   * ExternalShipment service.
   * @module api/ExternalShipmentApi
   * @version 1.0
   */

  /**
   * Constructs a new ExternalShipmentApi. 
   * @alias module:api/ExternalShipmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addExternalShipment operation.
     * @callback module:api/ExternalShipmentApi~addExternalShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an externalShipment
     * Inserts a new externalShipment using the specified data.
     * @param {module:model/ExternalShipment} body ExternalShipment to be inserted.
     * @param {module:api/ExternalShipmentApi~addExternalShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ExternalShipment}
     */
    this.addExternalShipment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addExternalShipment";
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
      var returnType = ExternalShipment;

      return this.apiClient.callApi(
        '/v1.0/externalShipment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExternalShipment operation.
     * @callback module:api/ExternalShipmentApi~deleteExternalShipmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an externalShipment
     * Deletes the externalShipment identified by the specified id.
     * @param {Integer} externalShipmentId Id of the externalShipment to be deleted.
     * @param {module:api/ExternalShipmentApi~deleteExternalShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteExternalShipment = function(externalShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId == undefined || externalShipmentId == null) {
        throw "Missing the required parameter 'externalShipmentId' when calling deleteExternalShipment";
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
        '/v1.0/externalShipment/{externalShipmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShipmentByFilter operation.
     * @callback module:api/ExternalShipmentApi~getExternalShipmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ExternalShipment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search externalShipments by filter
     * Returns the list of externalShipments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ExternalShipmentApi~getExternalShipmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ExternalShipment>}
     */
    this.getExternalShipmentByFilter = function(opts, callback) {
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
      var returnType = [ExternalShipment];

      return this.apiClient.callApi(
        '/v1.0/externalShipment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShipmentById operation.
     * @callback module:api/ExternalShipmentApi~getExternalShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an externalShipment by id
     * Returns the externalShipment identified by the specified id.
     * @param {Integer} externalShipmentId Id of the externalShipment to be returned.
     * @param {module:api/ExternalShipmentApi~getExternalShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ExternalShipment}
     */
    this.getExternalShipmentById = function(externalShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId == undefined || externalShipmentId == null) {
        throw "Missing the required parameter 'externalShipmentId' when calling getExternalShipmentById";
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
      var returnType = ExternalShipment;

      return this.apiClient.callApi(
        '/v1.0/externalShipment/{externalShipmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExternalShipment operation.
     * @callback module:api/ExternalShipmentApi~updateExternalShipmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an externalShipment
     * Updates an existing externalShipment using the specified data.
     * @param {module:model/ExternalShipment} body ExternalShipment to be updated.
     * @param {module:api/ExternalShipmentApi~updateExternalShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateExternalShipment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateExternalShipment";
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
        '/v1.0/externalShipment', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
