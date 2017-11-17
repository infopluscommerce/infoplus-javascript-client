(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemSubCategory', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemSubCategory'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemSubCategoryApi = factory(root.infoplus.ApiClient, root.infoplus.ItemSubCategory, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemSubCategory, ApiResponse) {
  'use strict';

  /**
   * ItemSubCategory service.
   * @module api/ItemSubCategoryApi
   * @version v2.0
   */

  /**
   * Constructs a new ItemSubCategoryApi. 
   * @alias module:api/ItemSubCategoryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemSubCategory operation.
     * @callback module:api/ItemSubCategoryApi~addItemSubCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSubCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemSubCategory
     * Inserts a new itemSubCategory using the specified data.
     * @param {module:model/ItemSubCategory} body ItemSubCategory to be inserted.
     * @param {module:api/ItemSubCategoryApi~addItemSubCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSubCategory}
     */
    this.addItemSubCategory = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemSubCategory";
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
      var returnType = ItemSubCategory;

      return this.apiClient.callApi(
        '/v2.0/itemSubCategory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSubCategory operation.
     * @callback module:api/ItemSubCategoryApi~deleteItemSubCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemSubCategory
     * Deletes the itemSubCategory identified by the specified id.
     * @param {Integer} itemSubCategoryId Id of the itemSubCategory to be deleted.
     * @param {module:api/ItemSubCategoryApi~deleteItemSubCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSubCategory = function(itemSubCategoryId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubCategoryId' is set
      if (itemSubCategoryId == undefined || itemSubCategoryId == null) {
        throw "Missing the required parameter 'itemSubCategoryId' when calling deleteItemSubCategory";
      }


      var pathParams = {
        'itemSubCategoryId': itemSubCategoryId
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
        '/v2.0/itemSubCategory/{itemSubCategoryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemSubCategoryById operation.
     * @callback module:api/ItemSubCategoryApi~getDuplicateItemSubCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSubCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemSubCategory by id
     * Returns a duplicated itemSubCategory identified by the specified id.
     * @param {Integer} itemSubCategoryId Id of the itemSubCategory to be duplicated.
     * @param {module:api/ItemSubCategoryApi~getDuplicateItemSubCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSubCategory}
     */
    this.getDuplicateItemSubCategoryById = function(itemSubCategoryId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubCategoryId' is set
      if (itemSubCategoryId == undefined || itemSubCategoryId == null) {
        throw "Missing the required parameter 'itemSubCategoryId' when calling getDuplicateItemSubCategoryById";
      }


      var pathParams = {
        'itemSubCategoryId': itemSubCategoryId
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
      var returnType = ItemSubCategory;

      return this.apiClient.callApi(
        '/v2.0/itemSubCategory/duplicate/{itemSubCategoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSubCategoryByFilter operation.
     * @callback module:api/ItemSubCategoryApi~getItemSubCategoryByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemSubCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemSubCategorys by filter
     * Returns the list of itemSubCategorys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemSubCategoryApi~getItemSubCategoryByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemSubCategory>}
     */
    this.getItemSubCategoryByFilter = function(opts, callback) {
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
      var returnType = [ItemSubCategory];

      return this.apiClient.callApi(
        '/v2.0/itemSubCategory/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSubCategoryById operation.
     * @callback module:api/ItemSubCategoryApi~getItemSubCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSubCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemSubCategory by id
     * Returns the itemSubCategory identified by the specified id.
     * @param {Integer} itemSubCategoryId Id of the itemSubCategory to be returned.
     * @param {module:api/ItemSubCategoryApi~getItemSubCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSubCategory}
     */
    this.getItemSubCategoryById = function(itemSubCategoryId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubCategoryId' is set
      if (itemSubCategoryId == undefined || itemSubCategoryId == null) {
        throw "Missing the required parameter 'itemSubCategoryId' when calling getItemSubCategoryById";
      }


      var pathParams = {
        'itemSubCategoryId': itemSubCategoryId
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
      var returnType = ItemSubCategory;

      return this.apiClient.callApi(
        '/v2.0/itemSubCategory/{itemSubCategoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemSubCategory operation.
     * @callback module:api/ItemSubCategoryApi~updateItemSubCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemSubCategory
     * Updates an existing itemSubCategory using the specified data.
     * @param {module:model/ItemSubCategory} body ItemSubCategory to be updated.
     * @param {module:api/ItemSubCategoryApi~updateItemSubCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemSubCategory = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemSubCategory";
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
        '/v2.0/itemSubCategory', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
