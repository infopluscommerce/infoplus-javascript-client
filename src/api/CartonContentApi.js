(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CartonContent', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CartonContent'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CartonContentApi = factory(root.infoplus.ApiClient, root.infoplus.CartonContent, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, CartonContent, ApiResponse) {
  'use strict';

  /**
   * CartonContent service.
   * @module api/CartonContentApi
   * @version v2.0
   */

  /**
   * Constructs a new CartonContentApi. 
   * @alias module:api/CartonContentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCartonContent operation.
     * @callback module:api/CartonContentApi~addCartonContentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cartonContent
     * Inserts a new cartonContent using the specified data.
     * @param {module:model/CartonContent} body CartonContent to be inserted.
     * @param {module:api/CartonContentApi~addCartonContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonContent}
     */
    this.addCartonContent = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCartonContent";
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
      var returnType = CartonContent;

      return this.apiClient.callApi(
        '/v2.0/cartonContent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCartonContent operation.
     * @callback module:api/CartonContentApi~deleteCartonContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a cartonContent
     * Deletes the cartonContent identified by the specified id.
     * @param {Integer} cartonContentId Id of the cartonContent to be deleted.
     * @param {module:api/CartonContentApi~deleteCartonContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCartonContent = function(cartonContentId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling deleteCartonContent";
      }


      var pathParams = {
        'cartonContentId': cartonContentId
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
        '/v2.0/cartonContent/{cartonContentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonContentByFilter operation.
     * @callback module:api/CartonContentApi~getCartonContentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CartonContent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search cartonContents by filter
     * Returns the list of cartonContents that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CartonContentApi~getCartonContentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CartonContent>}
     */
    this.getCartonContentByFilter = function(opts, callback) {
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
      var returnType = [CartonContent];

      return this.apiClient.callApi(
        '/v2.0/cartonContent/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCartonContentById operation.
     * @callback module:api/CartonContentApi~getCartonContentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a cartonContent by id
     * Returns the cartonContent identified by the specified id.
     * @param {Integer} cartonContentId Id of the cartonContent to be returned.
     * @param {module:api/CartonContentApi~getCartonContentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonContent}
     */
    this.getCartonContentById = function(cartonContentId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling getCartonContentById";
      }


      var pathParams = {
        'cartonContentId': cartonContentId
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
      var returnType = CartonContent;

      return this.apiClient.callApi(
        '/v2.0/cartonContent/{cartonContentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCartonContentById operation.
     * @callback module:api/CartonContentApi~getDuplicateCartonContentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartonContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a cartonContent by id
     * Returns a duplicated cartonContent identified by the specified id.
     * @param {Integer} cartonContentId Id of the cartonContent to be duplicated.
     * @param {module:api/CartonContentApi~getDuplicateCartonContentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartonContent}
     */
    this.getDuplicateCartonContentById = function(cartonContentId, callback) {
      var postBody = null;

      // verify the required parameter 'cartonContentId' is set
      if (cartonContentId == undefined || cartonContentId == null) {
        throw "Missing the required parameter 'cartonContentId' when calling getDuplicateCartonContentById";
      }


      var pathParams = {
        'cartonContentId': cartonContentId
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
      var returnType = CartonContent;

      return this.apiClient.callApi(
        '/v2.0/cartonContent/duplicate/{cartonContentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonContent operation.
     * @callback module:api/CartonContentApi~updateCartonContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonContent
     * Updates an existing cartonContent using the specified data.
     * @param {module:model/CartonContent} body CartonContent to be updated.
     * @param {module:api/CartonContentApi~updateCartonContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonContent = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonContent";
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
        '/v2.0/cartonContent', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCartonContentCustomFields operation.
     * @callback module:api/CartonContentApi~updateCartonContentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a cartonContent custom fields
     * Updates an existing cartonContent custom fields using the specified data.
     * @param {module:model/CartonContent} body CartonContent to be updated.
     * @param {module:api/CartonContentApi~updateCartonContentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCartonContentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCartonContentCustomFields";
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
        '/v2.0/cartonContent/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
