/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: v3.0
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/Item', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/Item'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.Item, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, Item, RecordFile) {
  'use strict';

  /**
   * Item service.
   * @module api/ItemApi
   * @version v3.0
   */

  /**
   * Constructs a new ItemApi. 
   * @alias module:api/ItemApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItem operation.
     * @callback module:api/ItemApi~addItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an item
     * Inserts a new item using the specified data.
     * @param {module:model/Item} body Item to be inserted.
     * @param {module:api/ItemApi~addItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.addItem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addItem");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/v3.0/item', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemAudit operation.
     * @callback module:api/ItemApi~addItemAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an item
     * Adds an audit to an existing item.
     * @param {Number} itemId Id of the item to add an audit to
     * @param {String} itemAudit The audit to add
     * @param {module:api/ItemApi~addItemAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemAudit = function(itemId, itemAudit, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling addItemAudit");
      }

      // verify the required parameter 'itemAudit' is set
      if (itemAudit === undefined || itemAudit === null) {
        throw new Error("Missing the required parameter 'itemAudit' when calling addItemAudit");
      }


      var pathParams = {
        'itemId': itemId,
        'itemAudit': itemAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/audit/{itemAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemFile operation.
     * @callback module:api/ItemApi~addItemFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an item
     * Adds a file to an existing item.
     * @param {Number} itemId Id of the item to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ItemApi~addItemFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemFile = function(itemId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling addItemFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addItemFile");
      }


      var pathParams = {
        'itemId': itemId,
        'fileName': fileName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemFileByURL operation.
     * @callback module:api/ItemApi~addItemFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an item by URL.
     * Adds a file to an existing item by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} itemId Id of the item to add an file to
     * @param {module:api/ItemApi~addItemFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemFileByURL = function(body, itemId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addItemFileByURL");
      }

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling addItemFileByURL");
      }


      var pathParams = {
        'itemId': itemId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemTag operation.
     * @callback module:api/ItemApi~addItemTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an item.
     * Adds a tag to an existing item.
     * @param {Number} itemId Id of the item to add a tag to
     * @param {String} itemTag The tag to add
     * @param {module:api/ItemApi~addItemTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItemTag = function(itemId, itemTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling addItemTag");
      }

      // verify the required parameter 'itemTag' is set
      if (itemTag === undefined || itemTag === null) {
        throw new Error("Missing the required parameter 'itemTag' when calling addItemTag");
      }


      var pathParams = {
        'itemId': itemId,
        'itemTag': itemTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/tag/{itemTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItem operation.
     * @callback module:api/ItemApi~deleteItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an item
     * Deletes the item identified by the specified id.
     * @param {Number} itemId Id of the item to be deleted.
     * @param {module:api/ItemApi~deleteItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItem = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling deleteItem");
      }


      var pathParams = {
        'itemId': itemId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemFile operation.
     * @callback module:api/ItemApi~deleteItemFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an item.
     * Deletes an existing item file using the specified data.
     * @param {Number} itemId Id of the item to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/ItemApi~deleteItemFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemFile = function(itemId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling deleteItemFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteItemFile");
      }


      var pathParams = {
        'itemId': itemId,
        'fileId': fileId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemTag operation.
     * @callback module:api/ItemApi~deleteItemTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an item.
     * Deletes an existing item tag using the specified data.
     * @param {Number} itemId Id of the item to remove tag from
     * @param {String} itemTag The tag to delete
     * @param {module:api/ItemApi~deleteItemTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemTag = function(itemId, itemTag, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling deleteItemTag");
      }

      // verify the required parameter 'itemTag' is set
      if (itemTag === undefined || itemTag === null) {
        throw new Error("Missing the required parameter 'itemTag' when calling deleteItemTag");
      }


      var pathParams = {
        'itemId': itemId,
        'itemTag': itemTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/tag/{itemTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBySKU operation.
     * @callback module:api/ItemApi~getBySKUCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an item by SKU
     * Returns the item identified by the specified parameters.
     * @param {Number} lobId lobId of the item to be returned.
     * @param {String} sku sku of the item to be returned.
     * @param {module:api/ItemApi~getBySKUCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.getBySKU = function(lobId, sku, callback) {
      var postBody = null;

      // verify the required parameter 'lobId' is set
      if (lobId === undefined || lobId === null) {
        throw new Error("Missing the required parameter 'lobId' when calling getBySKU");
      }

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling getBySKU");
      }


      var pathParams = {
      };
      var queryParams = {
        'lobId': lobId,
        'sku': sku,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/v3.0/item/getBySKU', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemById operation.
     * @callback module:api/ItemApi~getDuplicateItemByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an item by id
     * Returns a duplicated item identified by the specified id.
     * @param {Number} itemId Id of the item to be duplicated.
     * @param {module:api/ItemApi~getDuplicateItemByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.getDuplicateItemById = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling getDuplicateItemById");
      }


      var pathParams = {
        'itemId': itemId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/v3.0/item/duplicate/{itemId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemByFilter operation.
     * @callback module:api/ItemApi~getItemByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search items by filter
     * Returns the list of items that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemApi~getItemByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Item>}
     */
    this.getItemByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Item];

      return this.apiClient.callApi(
        '/v3.0/item/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemById operation.
     * @callback module:api/ItemApi~getItemByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an item by id
     * Returns the item identified by the specified id.
     * @param {Number} itemId Id of the item to be returned.
     * @param {module:api/ItemApi~getItemByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.getItemById = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling getItemById");
      }


      var pathParams = {
        'itemId': itemId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/v3.0/item/{itemId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemFiles operation.
     * @callback module:api/ItemApi~getItemFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an item.
     * Get all existing item files.
     * @param {Number} itemId Id of the item to get files for
     * @param {module:api/ItemApi~getItemFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemFiles = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling getItemFiles");
      }


      var pathParams = {
        'itemId': itemId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemTags operation.
     * @callback module:api/ItemApi~getItemTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an item.
     * Get all existing item tags.
     * @param {Number} itemId Id of the item to get tags for
     * @param {module:api/ItemApi~getItemTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getItemTags = function(itemId, callback) {
      var postBody = null;

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling getItemTags");
      }


      var pathParams = {
        'itemId': itemId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/{itemId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItem operation.
     * @callback module:api/ItemApi~updateItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an item
     * Updates an existing item using the specified data.
     * @param {module:model/Item} body Item to be updated.
     * @param {module:api/ItemApi~updateItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateItem");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemCustomFields operation.
     * @callback module:api/ItemApi~updateItemCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an item custom fields
     * Updates an existing item custom fields using the specified data.
     * @param {module:model/Item} body Item to be updated.
     * @param {module:api/ItemApi~updateItemCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateItemCustomFields");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/v3.0/item/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
