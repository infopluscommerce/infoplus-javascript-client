(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ProductionLot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductionLot'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ProductionLotApi = factory(root.infoplus.ApiClient, root.infoplus.ProductionLot);
  }
}(this, function(ApiClient, ProductionLot) {
  'use strict';

  /**
   * ProductionLot service.
   * @module api/ProductionLotApi
   * @version beta
   */

  /**
   * Constructs a new ProductionLotApi. 
   * @alias module:api/ProductionLotApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getProductionLotByFilter operation.
     * @callback module:api/ProductionLotApi~getProductionLotByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductionLot>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search productionLots by filter
     * Returns the list of productionLots that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ProductionLotApi~getProductionLotByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ProductionLot>}
     */
    this.getProductionLotByFilter = function(opts, callback) {
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
      var returnType = [ProductionLot];

      return this.apiClient.callApi(
        '/beta/productionLot/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductionLotById operation.
     * @callback module:api/ProductionLotApi~getProductionLotByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductionLot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a productionLot by id
     * Returns the productionLot identified by the specified id.
     * @param {Integer} productionLotId Id of the productionLot to be returned.
     * @param {module:api/ProductionLotApi~getProductionLotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProductionLot}
     */
    this.getProductionLotById = function(productionLotId, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId == undefined || productionLotId == null) {
        throw "Missing the required parameter 'productionLotId' when calling getProductionLotById";
      }


      var pathParams = {
        'productionLotId': productionLotId
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
      var returnType = ProductionLot;

      return this.apiClient.callApi(
        '/beta/productionLot/{productionLotId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProductionLotCustomFields operation.
     * @callback module:api/ProductionLotApi~updateProductionLotCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a productionLot custom fields
     * Updates an existing productionLot custom fields using the specified data.
     * @param {module:model/ProductionLot} body ProductionLot to be updated.
     * @param {module:api/ProductionLotApi~updateProductionLotCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProductionLotCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateProductionLotCustomFields";
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
        '/beta/productionLot/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
