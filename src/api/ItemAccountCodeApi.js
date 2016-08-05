(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemAccountCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemAccountCode'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemAccountCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemAccountCode);
  }
}(this, function(ApiClient, ItemAccountCode) {
  'use strict';

  /**
   * ItemAccountCode service.
   * @module api/ItemAccountCodeApi
   * @version beta
   */

  /**
   * Constructs a new ItemAccountCodeApi. 
   * @alias module:api/ItemAccountCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemAccountCodeBySearchText operation.
     * @callback module:api/ItemAccountCodeApi~getItemAccountCodeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemAccountCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemAccountCodes
     * Returns the list of itemAccountCodes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemAccountCodeApi~getItemAccountCodeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemAccountCode>}
     */
    this.getItemAccountCodeBySearchText = function(opts, callback) {
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
      var returnType = [ItemAccountCode];

      return this.apiClient.callApi(
        '/beta/itemAccountCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateAccountCodeById operation.
     * @callback module:api/ItemAccountCodeApi~getTranslateAccountCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemAccountCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemAccountCode by id
     * Returns the itemAccountCode identified by the specified id.
     * @param {String} itemAccountCodeId Id of itemAccountCode to be returned.
     * @param {module:api/ItemAccountCodeApi~getTranslateAccountCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemAccountCode}
     */
    this.getTranslateAccountCodeById = function(itemAccountCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemAccountCodeId' is set
      if (itemAccountCodeId == undefined || itemAccountCodeId == null) {
        throw "Missing the required parameter 'itemAccountCodeId' when calling getTranslateAccountCodeById";
      }


      var pathParams = {
        'itemAccountCodeId': itemAccountCodeId
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
      var returnType = ItemAccountCode;

      return this.apiClient.callApi(
        '/beta/itemAccountCode/{itemAccountCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
