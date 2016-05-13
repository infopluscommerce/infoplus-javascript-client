(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/CartonType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/CartonType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CartonTypeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.CartonType);
  }
}(this, function(ApiClient, ApiResponse, CartonType) {
  'use strict';

  /**
   * CartonType service.
   * @module api/CartonTypeApi
   * @version 1.0
   */

  /**
   * Constructs a new CartonTypeApi. 
   * @alias module:api/CartonTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCartonType operation.
     * @callback module:api/CartonTypeApi~addCartonTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cartonType
     * Inserts a new cartonType using the specified data.
     * @param {module:model/CartonType} body CartonType to be inserted.
     * @param {module:api/CartonTypeApi~addCartonTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonType}
     */
    this.addCartonType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCartonType";
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
      var returnType = CartonType;

      return this.apiClient.callApi(
        '/v1.0/cartonType', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonType operation.
     * @callback module:api/CartonTypeApi~deleteCartonTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a cartonType
     * Deletes the cartonType identified by the specified id.
     * @param {Integer} cartonTypeId Id of the cartonType to be deleted.
     * @param {module:api/CartonTypeApi~deleteCartonTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonType = function(cartonTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling deleteCartonType";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId
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
        '/v1.0/cartonType/{cartonTypeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonTypeByFilter operation.
     * @callback module:api/CartonTypeApi~getCartonTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CartonType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search cartonTypes by filter
     * Returns the list of cartonTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CartonTypeApi~getCartonTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CartonType>}
     */
    this.getCartonTypeByFilter = function(opts, callback) {
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
      var returnType = [CartonType];

      return this.apiClient.callApi(
        '/v1.0/cartonType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonTypeById operation.
     * @callback module:api/CartonTypeApi~getCartonTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a cartonType by id
     * Returns the cartonType identified by the specified id.
     * @param {Integer} cartonTypeId Id of the cartonType to be returned.
     * @param {module:api/CartonTypeApi~getCartonTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonType}
     */
    this.getCartonTypeById = function(cartonTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonTypeId' is set
      if (cartonTypeId == undefined || cartonTypeId == null) {
        throw "Missing the required parameter 'cartonTypeId' when calling getCartonTypeById";
      }


      var pathParams = {
        'cartonTypeId': cartonTypeId
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
      var returnType = CartonType;

      return this.apiClient.callApi(
        '/v1.0/cartonType/{cartonTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonType operation.
     * @callback module:api/CartonTypeApi~updateCartonTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonType
     * Updates an existing cartonType using the specified data.
     * @param {module:model/CartonType} body CartonType to be updated.
     * @param {module:api/CartonTypeApi~updateCartonTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonType";
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
        '/v1.0/cartonType', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
