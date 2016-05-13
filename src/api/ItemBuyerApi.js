(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemBuyer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemBuyer'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemBuyerApi = factory(root.infoplus.ApiClient, root.infoplus.ItemBuyer);
  }
}(this, function(ApiClient, ItemBuyer) {
  'use strict';

  /**
   * ItemBuyer service.
   * @module api/ItemBuyerApi
   * @version 1.0
   */

  /**
   * Constructs a new ItemBuyerApi. 
   * @alias module:api/ItemBuyerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemBuyerBySearchText operation.
     * @callback module:api/ItemBuyerApi~getItemBuyerBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemBuyer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemBuyers
     * Returns the list of itemBuyers that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemBuyerApi~getItemBuyerBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemBuyer>}
     */
    this.getItemBuyerBySearchText = function(opts, callback) {
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
      var returnType = [ItemBuyer];

      return this.apiClient.callApi(
        '/v1.0/itemBuyer/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateBuyerById operation.
     * @callback module:api/ItemBuyerApi~getTranslateBuyerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemBuyer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemBuyer by id
     * Returns the itemBuyer identified by the specified id.
     * @param {String} itemBuyerId Id of itemBuyer to be returned.
     * @param {module:api/ItemBuyerApi~getTranslateBuyerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemBuyer}
     */
    this.getTranslateBuyerById = function(itemBuyerId, callback) {
      var postBody = null;

      // verify the required parameter 'itemBuyerId' is set
      if (itemBuyerId == undefined || itemBuyerId == null) {
        throw "Missing the required parameter 'itemBuyerId' when calling getTranslateBuyerById";
      }


      var pathParams = {
        'itemBuyerId': itemBuyerId
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
      var returnType = ItemBuyer;

      return this.apiClient.callApi(
        '/v1.0/itemBuyer/{itemBuyerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
