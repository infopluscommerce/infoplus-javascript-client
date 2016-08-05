(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemProductCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemProductCode'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemProductCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemProductCode);
  }
}(this, function(ApiClient, ItemProductCode) {
  'use strict';

  /**
   * ItemProductCode service.
   * @module api/ItemProductCodeApi
   * @version beta
   */

  /**
   * Constructs a new ItemProductCodeApi. 
   * @alias module:api/ItemProductCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemProductCodeBySearchText operation.
     * @callback module:api/ItemProductCodeApi~getItemProductCodeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemProductCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemProductCodes
     * Returns the list of itemProductCodes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemProductCodeApi~getItemProductCodeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemProductCode>}
     */
    this.getItemProductCodeBySearchText = function(opts, callback) {
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
      var returnType = [ItemProductCode];

      return this.apiClient.callApi(
        '/beta/itemProductCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateProductCodeById operation.
     * @callback module:api/ItemProductCodeApi~getTranslateProductCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemProductCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemProductCode by id
     * Returns the itemProductCode identified by the specified id.
     * @param {String} itemProductCodeId Id of itemProductCode to be returned.
     * @param {module:api/ItemProductCodeApi~getTranslateProductCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemProductCode}
     */
    this.getTranslateProductCodeById = function(itemProductCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemProductCodeId' is set
      if (itemProductCodeId == undefined || itemProductCodeId == null) {
        throw "Missing the required parameter 'itemProductCodeId' when calling getTranslateProductCodeById";
      }


      var pathParams = {
        'itemProductCodeId': itemProductCodeId
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
      var returnType = ItemProductCode;

      return this.apiClient.callApi(
        '/beta/itemProductCode/{itemProductCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
