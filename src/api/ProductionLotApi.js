/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
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
    define(['ApiClient', 'model/ApiResponse', 'model/ProductionLot', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ProductionLot'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ProductionLotApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ProductionLot, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, ProductionLot, RecordFile) {
  'use strict';

  /**
   * ProductionLot service.
   * @module api/ProductionLotApi
   * @version beta
   */

  /**
   * Constructs a new ProductionLotApi. 
   * @alias module:api/ProductionLotApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addProductionLot operation.
     * @callback module:api/ProductionLotApi~addProductionLotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductionLot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a productionLot
     * Inserts a new productionLot using the specified data.
     * @param {module:model/ProductionLot} body ProductionLot to be inserted.
     * @param {module:api/ProductionLotApi~addProductionLotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductionLot}
     */
    this.addProductionLot = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addProductionLot");
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
      var returnType = ProductionLot;

      return this.apiClient.callApi(
        '/beta/productionLot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProductionLotAudit operation.
     * @callback module:api/ProductionLotApi~addProductionLotAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a productionLot
     * Adds an audit to an existing productionLot.
     * @param {Number} productionLotId Id of the productionLot to add an audit to
     * @param {String} productionLotAudit The audit to add
     * @param {module:api/ProductionLotApi~addProductionLotAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addProductionLotAudit = function(productionLotId, productionLotAudit, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling addProductionLotAudit");
      }

      // verify the required parameter 'productionLotAudit' is set
      if (productionLotAudit === undefined || productionLotAudit === null) {
        throw new Error("Missing the required parameter 'productionLotAudit' when calling addProductionLotAudit");
      }


      var pathParams = {
        'productionLotId': productionLotId,
        'productionLotAudit': productionLotAudit
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
        '/beta/productionLot/{productionLotId}/audit/{productionLotAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProductionLotFile operation.
     * @callback module:api/ProductionLotApi~addProductionLotFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a productionLot
     * Adds a file to an existing productionLot.
     * @param {Number} productionLotId Id of the productionLot to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ProductionLotApi~addProductionLotFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addProductionLotFile = function(productionLotId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling addProductionLotFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addProductionLotFile");
      }


      var pathParams = {
        'productionLotId': productionLotId,
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
        '/beta/productionLot/{productionLotId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProductionLotFileByURL operation.
     * @callback module:api/ProductionLotApi~addProductionLotFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a productionLot by URL.
     * Adds a file to an existing productionLot by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} productionLotId Id of the productionLot to add an file to
     * @param {module:api/ProductionLotApi~addProductionLotFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addProductionLotFileByURL = function(body, productionLotId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addProductionLotFileByURL");
      }

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling addProductionLotFileByURL");
      }


      var pathParams = {
        'productionLotId': productionLotId
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
        '/beta/productionLot/{productionLotId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addProductionLotTag operation.
     * @callback module:api/ProductionLotApi~addProductionLotTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a productionLot.
     * Adds a tag to an existing productionLot.
     * @param {Number} productionLotId Id of the productionLot to add a tag to
     * @param {String} productionLotTag The tag to add
     * @param {module:api/ProductionLotApi~addProductionLotTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addProductionLotTag = function(productionLotId, productionLotTag, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling addProductionLotTag");
      }

      // verify the required parameter 'productionLotTag' is set
      if (productionLotTag === undefined || productionLotTag === null) {
        throw new Error("Missing the required parameter 'productionLotTag' when calling addProductionLotTag");
      }


      var pathParams = {
        'productionLotId': productionLotId,
        'productionLotTag': productionLotTag
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
        '/beta/productionLot/{productionLotId}/tag/{productionLotTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProductionLot operation.
     * @callback module:api/ProductionLotApi~deleteProductionLotCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a productionLot
     * Deletes the productionLot identified by the specified id.
     * @param {Number} productionLotId Id of the productionLot to be deleted.
     * @param {module:api/ProductionLotApi~deleteProductionLotCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProductionLot = function(productionLotId, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling deleteProductionLot");
      }


      var pathParams = {
        'productionLotId': productionLotId
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
        '/beta/productionLot/{productionLotId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProductionLotFile operation.
     * @callback module:api/ProductionLotApi~deleteProductionLotFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a productionLot.
     * Deletes an existing productionLot file using the specified data.
     * @param {Number} productionLotId Id of the productionLot to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/ProductionLotApi~deleteProductionLotFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProductionLotFile = function(productionLotId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling deleteProductionLotFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteProductionLotFile");
      }


      var pathParams = {
        'productionLotId': productionLotId,
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
        '/beta/productionLot/{productionLotId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProductionLotTag operation.
     * @callback module:api/ProductionLotApi~deleteProductionLotTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a productionLot.
     * Deletes an existing productionLot tag using the specified data.
     * @param {Number} productionLotId Id of the productionLot to remove tag from
     * @param {String} productionLotTag The tag to delete
     * @param {module:api/ProductionLotApi~deleteProductionLotTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProductionLotTag = function(productionLotId, productionLotTag, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling deleteProductionLotTag");
      }

      // verify the required parameter 'productionLotTag' is set
      if (productionLotTag === undefined || productionLotTag === null) {
        throw new Error("Missing the required parameter 'productionLotTag' when calling deleteProductionLotTag");
      }


      var pathParams = {
        'productionLotId': productionLotId,
        'productionLotTag': productionLotTag
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
        '/beta/productionLot/{productionLotId}/tag/{productionLotTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateProductionLotById operation.
     * @callback module:api/ProductionLotApi~getDuplicateProductionLotByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductionLot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a productionLot by id
     * Returns a duplicated productionLot identified by the specified id.
     * @param {Number} productionLotId Id of the productionLot to be duplicated.
     * @param {module:api/ProductionLotApi~getDuplicateProductionLotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductionLot}
     */
    this.getDuplicateProductionLotById = function(productionLotId, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling getDuplicateProductionLotById");
      }


      var pathParams = {
        'productionLotId': productionLotId
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
      var returnType = ProductionLot;

      return this.apiClient.callApi(
        '/beta/productionLot/duplicate/{productionLotId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductionLotByFilter operation.
     * @callback module:api/ProductionLotApi~getProductionLotByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductionLot>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search productionLots by filter
     * Returns the list of productionLots that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ProductionLotApi~getProductionLotByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProductionLot>}
     */
    this.getProductionLotByFilter = function(opts, callback) {
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
      var returnType = [ProductionLot];

      return this.apiClient.callApi(
        '/beta/productionLot/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductionLotById operation.
     * @callback module:api/ProductionLotApi~getProductionLotByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductionLot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a productionLot by id
     * Returns the productionLot identified by the specified id.
     * @param {Number} productionLotId Id of the productionLot to be returned.
     * @param {module:api/ProductionLotApi~getProductionLotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductionLot}
     */
    this.getProductionLotById = function(productionLotId, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling getProductionLotById");
      }


      var pathParams = {
        'productionLotId': productionLotId
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
      var returnType = ProductionLot;

      return this.apiClient.callApi(
        '/beta/productionLot/{productionLotId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductionLotFiles operation.
     * @callback module:api/ProductionLotApi~getProductionLotFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a productionLot.
     * Get all existing productionLot files.
     * @param {Number} productionLotId Id of the productionLot to get files for
     * @param {module:api/ProductionLotApi~getProductionLotFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getProductionLotFiles = function(productionLotId, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling getProductionLotFiles");
      }


      var pathParams = {
        'productionLotId': productionLotId
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
        '/beta/productionLot/{productionLotId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductionLotTags operation.
     * @callback module:api/ProductionLotApi~getProductionLotTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a productionLot.
     * Get all existing productionLot tags.
     * @param {Number} productionLotId Id of the productionLot to get tags for
     * @param {module:api/ProductionLotApi~getProductionLotTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getProductionLotTags = function(productionLotId, callback) {
      var postBody = null;

      // verify the required parameter 'productionLotId' is set
      if (productionLotId === undefined || productionLotId === null) {
        throw new Error("Missing the required parameter 'productionLotId' when calling getProductionLotTags");
      }


      var pathParams = {
        'productionLotId': productionLotId
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
        '/beta/productionLot/{productionLotId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProductionLot operation.
     * @callback module:api/ProductionLotApi~updateProductionLotCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a productionLot
     * Updates an existing productionLot using the specified data.
     * @param {module:model/ProductionLot} body ProductionLot to be updated.
     * @param {module:api/ProductionLotApi~updateProductionLotCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProductionLot = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProductionLot");
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
        '/beta/productionLot', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProductionLotCustomFields operation.
     * @callback module:api/ProductionLotApi~updateProductionLotCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a productionLot custom fields
     * Updates an existing productionLot custom fields using the specified data.
     * @param {module:model/ProductionLot} body ProductionLot to be updated.
     * @param {module:api/ProductionLotApi~updateProductionLotCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProductionLotCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProductionLotCustomFields");
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
        '/beta/productionLot/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
