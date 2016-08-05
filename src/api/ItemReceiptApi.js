(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemReceipt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemReceipt'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemReceiptApi = factory(root.infoplus.ApiClient, root.infoplus.ItemReceipt);
  }
}(this, function(ApiClient, ItemReceipt) {
  'use strict';

  /**
   * ItemReceipt service.
   * @module api/ItemReceiptApi
   * @version beta
   */

  /**
   * Constructs a new ItemReceiptApi. 
   * @alias module:api/ItemReceiptApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemReceiptByFilter operation.
     * @callback module:api/ItemReceiptApi~getItemReceiptByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemReceipt>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemReceipts by filter
     * Returns the list of itemReceipts that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemReceiptApi~getItemReceiptByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemReceipt>}
     */
    this.getItemReceiptByFilter = function(opts, callback) {
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
      var returnType = [ItemReceipt];

      return this.apiClient.callApi(
        '/beta/itemReceipt/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemReceiptById operation.
     * @callback module:api/ItemReceiptApi~getItemReceiptByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemReceipt by id
     * Returns the itemReceipt identified by the specified id.
     * @param {Integer} itemReceiptId Id of the itemReceipt to be returned.
     * @param {module:api/ItemReceiptApi~getItemReceiptByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemReceipt}
     */
    this.getItemReceiptById = function(itemReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'itemReceiptId' is set
      if (itemReceiptId == undefined || itemReceiptId == null) {
        throw "Missing the required parameter 'itemReceiptId' when calling getItemReceiptById";
      }


      var pathParams = {
        'itemReceiptId': itemReceiptId
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
      var returnType = ItemReceipt;

      return this.apiClient.callApi(
        '/beta/itemReceipt/{itemReceiptId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemReceiptCustomFields operation.
     * @callback module:api/ItemReceiptApi~updateItemReceiptCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemReceipt custom fields
     * Updates an existing itemReceipt custom fields using the specified data.
     * @param {module:model/ItemReceipt} body ItemReceipt to be updated.
     * @param {module:api/ItemReceiptApi~updateItemReceiptCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemReceiptCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemReceiptCustomFields";
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
        '/beta/itemReceipt/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
