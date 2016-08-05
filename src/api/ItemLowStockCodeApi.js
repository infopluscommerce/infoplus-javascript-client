(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemLowStockCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemLowStockCode'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemLowStockCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemLowStockCode);
  }
}(this, function(ApiClient, ItemLowStockCode) {
  'use strict';

  /**
   * ItemLowStockCode service.
   * @module api/ItemLowStockCodeApi
   * @version beta
   */

  /**
   * Constructs a new ItemLowStockCodeApi. 
   * @alias module:api/ItemLowStockCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemLowStockCodeBySearchText operation.
     * @callback module:api/ItemLowStockCodeApi~getItemLowStockCodeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemLowStockCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemLowStockCodes
     * Returns the list of itemLowStockCodes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemLowStockCodeApi~getItemLowStockCodeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemLowStockCode>}
     */
    this.getItemLowStockCodeBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ItemLowStockCode];

      return this.apiClient.callApi(
        '/beta/itemLowStockCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateLowStockCodeById operation.
     * @callback module:api/ItemLowStockCodeApi~getTranslateLowStockCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemLowStockCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemLowStockCode by id
     * Returns the itemLowStockCode identified by the specified id.
     * @param {String} itemLowStockCodeId Id of itemLowStockCode to be returned.
     * @param {module:api/ItemLowStockCodeApi~getTranslateLowStockCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemLowStockCode}
     */
    this.getTranslateLowStockCodeById = function(itemLowStockCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemLowStockCodeId' is set
      if (itemLowStockCodeId == undefined || itemLowStockCodeId == null) {
        throw "Missing the required parameter 'itemLowStockCodeId' when calling getTranslateLowStockCodeById";
      }


      var pathParams = {
        'itemLowStockCodeId': itemLowStockCodeId
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
      var returnType = ItemLowStockCode;

      return this.apiClient.callApi(
        '/beta/itemLowStockCode/{itemLowStockCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
