(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemCategory', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemCategory'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemCategoryApi = factory(root.infoplus.ApiClient, root.infoplus.ItemCategory, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemCategory, ApiResponse) {
  'use strict';

  /**
   * ItemCategory service.
   * @module api/ItemCategoryApi
   * @version v2.0
   */

  /**
   * Constructs a new ItemCategoryApi. 
   * @alias module:api/ItemCategoryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemCategory operation.
     * @callback module:api/ItemCategoryApi~addItemCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemCategory
     * Inserts a new itemCategory using the specified data.
     * @param {module:model/ItemCategory} body ItemCategory to be inserted.
     * @param {module:api/ItemCategoryApi~addItemCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemCategory}
     */
    this.addItemCategory = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemCategory";
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
      var returnType = ItemCategory;

      return this.apiClient.callApi(
        '/v2.0/itemCategory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemCategory operation.
     * @callback module:api/ItemCategoryApi~deleteItemCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemCategory
     * Deletes the itemCategory identified by the specified id.
     * @param {Integer} itemCategoryId Id of the itemCategory to be deleted.
     * @param {module:api/ItemCategoryApi~deleteItemCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemCategory = function(itemCategoryId, callback) {
      var postBody = null;

      // verify the required parameter 'itemCategoryId' is set
      if (itemCategoryId == undefined || itemCategoryId == null) {
        throw "Missing the required parameter 'itemCategoryId' when calling deleteItemCategory";
      }


      var pathParams = {
        'itemCategoryId': itemCategoryId
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
        '/v2.0/itemCategory/{itemCategoryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemCategoryById operation.
     * @callback module:api/ItemCategoryApi~getDuplicateItemCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemCategory by id
     * Returns a duplicated itemCategory identified by the specified id.
     * @param {Integer} itemCategoryId Id of the itemCategory to be duplicated.
     * @param {module:api/ItemCategoryApi~getDuplicateItemCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemCategory}
     */
    this.getDuplicateItemCategoryById = function(itemCategoryId, callback) {
      var postBody = null;

      // verify the required parameter 'itemCategoryId' is set
      if (itemCategoryId == undefined || itemCategoryId == null) {
        throw "Missing the required parameter 'itemCategoryId' when calling getDuplicateItemCategoryById";
      }


      var pathParams = {
        'itemCategoryId': itemCategoryId
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
      var returnType = ItemCategory;

      return this.apiClient.callApi(
        '/v2.0/itemCategory/duplicate/{itemCategoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemCategoryByFilter operation.
     * @callback module:api/ItemCategoryApi~getItemCategoryByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemCategorys by filter
     * Returns the list of itemCategorys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemCategoryApi~getItemCategoryByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemCategory>}
     */
    this.getItemCategoryByFilter = function(opts, callback) {
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
      var returnType = [ItemCategory];

      return this.apiClient.callApi(
        '/v2.0/itemCategory/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemCategoryById operation.
     * @callback module:api/ItemCategoryApi~getItemCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemCategory by id
     * Returns the itemCategory identified by the specified id.
     * @param {Integer} itemCategoryId Id of the itemCategory to be returned.
     * @param {module:api/ItemCategoryApi~getItemCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemCategory}
     */
    this.getItemCategoryById = function(itemCategoryId, callback) {
      var postBody = null;

      // verify the required parameter 'itemCategoryId' is set
      if (itemCategoryId == undefined || itemCategoryId == null) {
        throw "Missing the required parameter 'itemCategoryId' when calling getItemCategoryById";
      }


      var pathParams = {
        'itemCategoryId': itemCategoryId
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
      var returnType = ItemCategory;

      return this.apiClient.callApi(
        '/v2.0/itemCategory/{itemCategoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemCategory operation.
     * @callback module:api/ItemCategoryApi~updateItemCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemCategory
     * Updates an existing itemCategory using the specified data.
     * @param {module:model/ItemCategory} body ItemCategory to be updated.
     * @param {module:api/ItemCategoryApi~updateItemCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemCategory = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemCategory";
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
        '/v2.0/itemCategory', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
