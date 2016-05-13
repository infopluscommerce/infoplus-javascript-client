(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/Carton'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/Carton'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CartonApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.Carton);
  }
}(this, function(ApiClient, ApiResponse, Carton) {
  'use strict';

  /**
   * Carton service.
   * @module api/CartonApi
   * @version 1.0
   */

  /**
   * Constructs a new CartonApi. 
   * @alias module:api/CartonApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCarton operation.
     * @callback module:api/CartonApi~addCartonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Carton} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a carton
     * Inserts a new carton using the specified data.
     * @param {module:model/Carton} body Carton to be inserted.
     * @param {module:api/CartonApi~addCartonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Carton}
     */
    this.addCarton = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCarton";
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
      var returnType = Carton;

      return this.apiClient.callApi(
        '/v1.0/carton', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCarton operation.
     * @callback module:api/CartonApi~deleteCartonCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a carton
     * Deletes the carton identified by the specified id.
     * @param {Integer} cartonId Id of the carton to be deleted.
     * @param {module:api/CartonApi~deleteCartonCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCarton = function(cartonId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling deleteCarton";
      }


      var pathParams = {
        'cartonId': cartonId
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
        '/v1.0/carton/{cartonId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonByFilter operation.
     * @callback module:api/CartonApi~getCartonByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Carton>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search cartons by filter
     * Returns the list of cartons that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CartonApi~getCartonByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Carton>}
     */
    this.getCartonByFilter = function(opts, callback) {
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
      var returnType = [Carton];

      return this.apiClient.callApi(
        '/v1.0/carton/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonById operation.
     * @callback module:api/CartonApi~getCartonByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Carton} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a carton by id
     * Returns the carton identified by the specified id.
     * @param {Integer} cartonId Id of the carton to be returned.
     * @param {module:api/CartonApi~getCartonByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Carton}
     */
    this.getCartonById = function(cartonId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonId' is set
      if (cartonId == undefined || cartonId == null) {
        throw "Missing the required parameter 'cartonId' when calling getCartonById";
      }


      var pathParams = {
        'cartonId': cartonId
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
      var returnType = Carton;

      return this.apiClient.callApi(
        '/v1.0/carton/{cartonId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCarton operation.
     * @callback module:api/CartonApi~updateCartonCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a carton
     * Updates an existing carton using the specified data.
     * @param {module:model/Carton} body Carton to be updated.
     * @param {module:api/CartonApi~updateCartonCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCarton = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCarton";
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
        '/v1.0/carton', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
