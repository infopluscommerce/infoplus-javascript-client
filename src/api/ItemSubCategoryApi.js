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
   * @version beta
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
        '/beta/itemSubCategory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSubCategoryAudit operation.
     * @callback module:api/ItemSubCategoryApi~addItemSubCategoryAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an itemSubCategory
     * Adds an audit to an existing itemSubCategory.
     * @param {Integer} itemSubCategoryId Id of the itemSubCategory to add an audit to
     * @param {String} itemSubCategoryAudit The audit to add
     * @param {module:api/ItemSubCategoryApi~addItemSubCategoryAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSubCategoryAudit = function(itemSubCategoryId, itemSubCategoryAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubCategoryId' is set
      if (itemSubCategoryId == undefined || itemSubCategoryId == null) {
        throw "Missing the required parameter 'itemSubCategoryId' when calling addItemSubCategoryAudit";
      }

      // verify the required parameter 'itemSubCategoryAudit' is set
      if (itemSubCategoryAudit == undefined || itemSubCategoryAudit == null) {
        throw "Missing the required parameter 'itemSubCategoryAudit' when calling addItemSubCategoryAudit";
      }


      var pathParams = {
        'itemSubCategoryId': itemSubCategoryId,
        'itemSubCategoryAudit': itemSubCategoryAudit
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
        '/beta/itemSubCategory/{itemSubCategoryId}/audit/{itemSubCategoryAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemSubCategoryTag operation.
     * @callback module:api/ItemSubCategoryApi~addItemSubCategoryTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an itemSubCategory.
     * Adds a tag to an existing itemSubCategory.
     * @param {Integer} itemSubCategoryId Id of the itemSubCategory to add a tag to
     * @param {String} itemSubCategoryTag The tag to add
     * @param {module:api/ItemSubCategoryApi~addItemSubCategoryTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemSubCategoryTag = function(itemSubCategoryId, itemSubCategoryTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubCategoryId' is set
      if (itemSubCategoryId == undefined || itemSubCategoryId == null) {
        throw "Missing the required parameter 'itemSubCategoryId' when calling addItemSubCategoryTag";
      }

      // verify the required parameter 'itemSubCategoryTag' is set
      if (itemSubCategoryTag == undefined || itemSubCategoryTag == null) {
        throw "Missing the required parameter 'itemSubCategoryTag' when calling addItemSubCategoryTag";
      }


      var pathParams = {
        'itemSubCategoryId': itemSubCategoryId,
        'itemSubCategoryTag': itemSubCategoryTag
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
        '/beta/itemSubCategory/{itemSubCategoryId}/tag/{itemSubCategoryTag}', 'PUT',
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
        '/beta/itemSubCategory/{itemSubCategoryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemSubCategoryTag operation.
     * @callback module:api/ItemSubCategoryApi~deleteItemSubCategoryTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an itemSubCategory.
     * Deletes an existing itemSubCategory tag using the specified data.
     * @param {Integer} itemSubCategoryId Id of the itemSubCategory to remove tag from
     * @param {String} itemSubCategoryTag The tag to delete
     * @param {module:api/ItemSubCategoryApi~deleteItemSubCategoryTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemSubCategoryTag = function(itemSubCategoryId, itemSubCategoryTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubCategoryId' is set
      if (itemSubCategoryId == undefined || itemSubCategoryId == null) {
        throw "Missing the required parameter 'itemSubCategoryId' when calling deleteItemSubCategoryTag";
      }

      // verify the required parameter 'itemSubCategoryTag' is set
      if (itemSubCategoryTag == undefined || itemSubCategoryTag == null) {
        throw "Missing the required parameter 'itemSubCategoryTag' when calling deleteItemSubCategoryTag";
      }


      var pathParams = {
        'itemSubCategoryId': itemSubCategoryId,
        'itemSubCategoryTag': itemSubCategoryTag
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
        '/beta/itemSubCategory/{itemSubCategoryId}/tag/{itemSubCategoryTag}', 'DELETE',
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
        '/beta/itemSubCategory/duplicate/{itemSubCategoryId}', 'GET',
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
        '/beta/itemSubCategory/search', 'GET',
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
        '/beta/itemSubCategory/{itemSubCategoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemSubCategoryTags operation.
     * @callback module:api/ItemSubCategoryApi~getItemSubCategoryTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an itemSubCategory.
     * Get all existing itemSubCategory tags.
     * @param {Integer} itemSubCategoryId Id of the itemSubCategory to get tags for
     * @param {module:api/ItemSubCategoryApi~getItemSubCategoryTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemSubCategoryTags = function(itemSubCategoryId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubCategoryId' is set
      if (itemSubCategoryId == undefined || itemSubCategoryId == null) {
        throw "Missing the required parameter 'itemSubCategoryId' when calling getItemSubCategoryTags";
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
        '/beta/itemSubCategory/{itemSubCategoryId}/tag', 'GET',
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
        '/beta/itemSubCategory', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
