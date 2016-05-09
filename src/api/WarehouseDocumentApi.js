(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/WarehouseDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WarehouseDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WarehouseDocumentApi = factory(root.infoplus.ApiClient, root.infoplus.WarehouseDocument);
  }
}(this, function(ApiClient, WarehouseDocument) {
  'use strict';

  /**
   * WarehouseDocument service.
   * @module api/WarehouseDocumentApi
   * @version 1.0
   */

  /**
   * Constructs a new WarehouseDocumentApi. 
   * @alias module:api/WarehouseDocumentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getWarehouseDocumentByFilter operation.
     * @callback module:api/WarehouseDocumentApi~getWarehouseDocumentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WarehouseDocument>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search warehouseDocuments by filter
     * Returns the list of warehouseDocuments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WarehouseDocumentApi~getWarehouseDocumentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/WarehouseDocument>}
     */
    this.getWarehouseDocumentByFilter = function(opts, callback) {
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
      var returnType = [WarehouseDocument];

      return this.apiClient.callApi(
        '/v1.0/warehouseDocument/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseDocumentById operation.
     * @callback module:api/WarehouseDocumentApi~getWarehouseDocumentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a warehouseDocument by id
     * Returns the warehouseDocument identified by the specified id.
     * @param {Integer} warehouseDocumentId Id of the warehouseDocument to be returned.
     * @param {module:api/WarehouseDocumentApi~getWarehouseDocumentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WarehouseDocument}
     */
    this.getWarehouseDocumentById = function(warehouseDocumentId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseDocumentId' is set
      if (warehouseDocumentId == undefined || warehouseDocumentId == null) {
        throw "Missing the required parameter 'warehouseDocumentId' when calling getWarehouseDocumentById";
      }


      var pathParams = {
        'warehouseDocumentId': warehouseDocumentId
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
      var returnType = WarehouseDocument;

      return this.apiClient.callApi(
        '/v1.0/warehouseDocument/{warehouseDocumentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
