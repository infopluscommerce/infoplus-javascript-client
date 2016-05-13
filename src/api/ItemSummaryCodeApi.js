(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemSummaryCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemSummaryCode'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemSummaryCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemSummaryCode);
  }
}(this, function(ApiClient, ItemSummaryCode) {
  'use strict';

  /**
   * ItemSummaryCode service.
   * @module api/ItemSummaryCodeApi
   * @version 1.0
   */

  /**
   * Constructs a new ItemSummaryCodeApi. 
   * @alias module:api/ItemSummaryCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemSummaryCodeBySearchText operation.
     * @callback module:api/ItemSummaryCodeApi~getItemSummaryCodeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemSummaryCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemSummaryCodes
     * Returns the list of itemSummaryCodes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemSummaryCodeApi~getItemSummaryCodeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemSummaryCode>}
     */
    this.getItemSummaryCodeBySearchText = function(opts, callback) {
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
      var returnType = [ItemSummaryCode];

      return this.apiClient.callApi(
        '/v1.0/itemSummaryCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateSummaryCodeById operation.
     * @callback module:api/ItemSummaryCodeApi~getTranslateSummaryCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSummaryCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemSummaryCode by id
     * Returns the itemSummaryCode identified by the specified id.
     * @param {String} itemSummaryCodeId Id of itemSummaryCode to be returned.
     * @param {module:api/ItemSummaryCodeApi~getTranslateSummaryCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSummaryCode}
     */
    this.getTranslateSummaryCodeById = function(itemSummaryCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSummaryCodeId' is set
      if (itemSummaryCodeId == undefined || itemSummaryCodeId == null) {
        throw "Missing the required parameter 'itemSummaryCodeId' when calling getTranslateSummaryCodeById";
      }


      var pathParams = {
        'itemSummaryCodeId': itemSummaryCodeId
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
      var returnType = ItemSummaryCode;

      return this.apiClient.callApi(
        '/v1.0/itemSummaryCode/{itemSummaryCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
