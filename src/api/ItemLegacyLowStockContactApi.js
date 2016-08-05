(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemLegacyLowStockContact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemLegacyLowStockContact'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemLegacyLowStockContactApi = factory(root.infoplus.ApiClient, root.infoplus.ItemLegacyLowStockContact);
  }
}(this, function(ApiClient, ItemLegacyLowStockContact) {
  'use strict';

  /**
   * ItemLegacyLowStockContact service.
   * @module api/ItemLegacyLowStockContactApi
   * @version beta
   */

  /**
   * Constructs a new ItemLegacyLowStockContactApi. 
   * @alias module:api/ItemLegacyLowStockContactApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemLegacyLowStockContactBySearchText operation.
     * @callback module:api/ItemLegacyLowStockContactApi~getItemLegacyLowStockContactBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemLegacyLowStockContact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemLegacyLowStockContacts
     * Returns the list of itemLegacyLowStockContacts that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemLegacyLowStockContactApi~getItemLegacyLowStockContactBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemLegacyLowStockContact>}
     */
    this.getItemLegacyLowStockContactBySearchText = function(opts, callback) {
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
      var returnType = [ItemLegacyLowStockContact];

      return this.apiClient.callApi(
        '/beta/itemLegacyLowStockContact/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateLowStockContactById operation.
     * @callback module:api/ItemLegacyLowStockContactApi~getTranslateLowStockContactByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemLegacyLowStockContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemLegacyLowStockContact by id
     * Returns the itemLegacyLowStockContact identified by the specified id.
     * @param {String} itemLegacyLowStockContactId Id of itemLegacyLowStockContact to be returned.
     * @param {module:api/ItemLegacyLowStockContactApi~getTranslateLowStockContactByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemLegacyLowStockContact}
     */
    this.getTranslateLowStockContactById = function(itemLegacyLowStockContactId, callback) {
      var postBody = null;

      // verify the required parameter 'itemLegacyLowStockContactId' is set
      if (itemLegacyLowStockContactId == undefined || itemLegacyLowStockContactId == null) {
        throw "Missing the required parameter 'itemLegacyLowStockContactId' when calling getTranslateLowStockContactById";
      }


      var pathParams = {
        'itemLegacyLowStockContactId': itemLegacyLowStockContactId
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
      var returnType = ItemLegacyLowStockContact;

      return this.apiClient.callApi(
        '/beta/itemLegacyLowStockContact/{itemLegacyLowStockContactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
