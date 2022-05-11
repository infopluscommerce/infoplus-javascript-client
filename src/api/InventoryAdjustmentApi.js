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
    define(['ApiClient', 'model/InventoryAdjustment', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventoryAdjustment'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventoryAdjustmentApi = factory(root.infoplus.ApiClient, root.infoplus.InventoryAdjustment, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, InventoryAdjustment, RecordFile) {
  'use strict';

  /**
   * InventoryAdjustment service.
   * @module api/InventoryAdjustmentApi
   * @version v3.0
   */

  /**
   * Constructs a new InventoryAdjustmentApi. 
   * @alias module:api/InventoryAdjustmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInventoryAdjustmentAudit operation.
     * @callback module:api/InventoryAdjustmentApi~addInventoryAdjustmentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an inventoryAdjustment
     * Adds an audit to an existing inventoryAdjustment.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to add an audit to
     * @param {String} inventoryAdjustmentAudit The audit to add
     * @param {module:api/InventoryAdjustmentApi~addInventoryAdjustmentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryAdjustmentAudit = function(inventoryAdjustmentId, inventoryAdjustmentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling addInventoryAdjustmentAudit");
      }

      // verify the required parameter 'inventoryAdjustmentAudit' is set
      if (inventoryAdjustmentAudit === undefined || inventoryAdjustmentAudit === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentAudit' when calling addInventoryAdjustmentAudit");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId,
        'inventoryAdjustmentAudit': inventoryAdjustmentAudit
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/audit/{inventoryAdjustmentAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryAdjustmentFile operation.
     * @callback module:api/InventoryAdjustmentApi~addInventoryAdjustmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an inventoryAdjustment
     * Adds a file to an existing inventoryAdjustment.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/InventoryAdjustmentApi~addInventoryAdjustmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryAdjustmentFile = function(inventoryAdjustmentId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling addInventoryAdjustmentFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addInventoryAdjustmentFile");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId,
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryAdjustmentFileByURL operation.
     * @callback module:api/InventoryAdjustmentApi~addInventoryAdjustmentFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an inventoryAdjustment by URL.
     * Adds a file to an existing inventoryAdjustment by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to add an file to
     * @param {module:api/InventoryAdjustmentApi~addInventoryAdjustmentFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryAdjustmentFileByURL = function(body, inventoryAdjustmentId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addInventoryAdjustmentFileByURL");
      }

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling addInventoryAdjustmentFileByURL");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryAdjustmentTag operation.
     * @callback module:api/InventoryAdjustmentApi~addInventoryAdjustmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an inventoryAdjustment.
     * Adds a tag to an existing inventoryAdjustment.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to add a tag to
     * @param {String} inventoryAdjustmentTag The tag to add
     * @param {module:api/InventoryAdjustmentApi~addInventoryAdjustmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryAdjustmentTag = function(inventoryAdjustmentId, inventoryAdjustmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling addInventoryAdjustmentTag");
      }

      // verify the required parameter 'inventoryAdjustmentTag' is set
      if (inventoryAdjustmentTag === undefined || inventoryAdjustmentTag === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentTag' when calling addInventoryAdjustmentTag");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId,
        'inventoryAdjustmentTag': inventoryAdjustmentTag
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/tag/{inventoryAdjustmentTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventoryAdjustmentFile operation.
     * @callback module:api/InventoryAdjustmentApi~deleteInventoryAdjustmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an inventoryAdjustment.
     * Deletes an existing inventoryAdjustment file using the specified data.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/InventoryAdjustmentApi~deleteInventoryAdjustmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventoryAdjustmentFile = function(inventoryAdjustmentId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling deleteInventoryAdjustmentFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteInventoryAdjustmentFile");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId,
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventoryAdjustmentTag operation.
     * @callback module:api/InventoryAdjustmentApi~deleteInventoryAdjustmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an inventoryAdjustment.
     * Deletes an existing inventoryAdjustment tag using the specified data.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to remove tag from
     * @param {String} inventoryAdjustmentTag The tag to delete
     * @param {module:api/InventoryAdjustmentApi~deleteInventoryAdjustmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventoryAdjustmentTag = function(inventoryAdjustmentId, inventoryAdjustmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling deleteInventoryAdjustmentTag");
      }

      // verify the required parameter 'inventoryAdjustmentTag' is set
      if (inventoryAdjustmentTag === undefined || inventoryAdjustmentTag === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentTag' when calling deleteInventoryAdjustmentTag");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId,
        'inventoryAdjustmentTag': inventoryAdjustmentTag
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/tag/{inventoryAdjustmentTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInventoryAdjustmentById operation.
     * @callback module:api/InventoryAdjustmentApi~getDuplicateInventoryAdjustmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryAdjustment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an inventoryAdjustment by id
     * Returns a duplicated inventoryAdjustment identified by the specified id.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to be duplicated.
     * @param {module:api/InventoryAdjustmentApi~getDuplicateInventoryAdjustmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InventoryAdjustment}
     */
    this.getDuplicateInventoryAdjustmentById = function(inventoryAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling getDuplicateInventoryAdjustmentById");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId
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
      var returnType = InventoryAdjustment;

      return this.apiClient.callApi(
        '/v3.0/inventoryAdjustment/duplicate/{inventoryAdjustmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryAdjustmentByFilter operation.
     * @callback module:api/InventoryAdjustmentApi~getInventoryAdjustmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryAdjustment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search inventoryAdjustments by filter
     * Returns the list of inventoryAdjustments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InventoryAdjustmentApi~getInventoryAdjustmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InventoryAdjustment>}
     */
    this.getInventoryAdjustmentByFilter = function(opts, callback) {
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
      var returnType = [InventoryAdjustment];

      return this.apiClient.callApi(
        '/v3.0/inventoryAdjustment/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryAdjustmentById operation.
     * @callback module:api/InventoryAdjustmentApi~getInventoryAdjustmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryAdjustment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an inventoryAdjustment by id
     * Returns the inventoryAdjustment identified by the specified id.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to be returned.
     * @param {module:api/InventoryAdjustmentApi~getInventoryAdjustmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InventoryAdjustment}
     */
    this.getInventoryAdjustmentById = function(inventoryAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling getInventoryAdjustmentById");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId
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
      var returnType = InventoryAdjustment;

      return this.apiClient.callApi(
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryAdjustmentFiles operation.
     * @callback module:api/InventoryAdjustmentApi~getInventoryAdjustmentFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an inventoryAdjustment.
     * Get all existing inventoryAdjustment files.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to get files for
     * @param {module:api/InventoryAdjustmentApi~getInventoryAdjustmentFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInventoryAdjustmentFiles = function(inventoryAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling getInventoryAdjustmentFiles");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryAdjustmentTags operation.
     * @callback module:api/InventoryAdjustmentApi~getInventoryAdjustmentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an inventoryAdjustment.
     * Get all existing inventoryAdjustment tags.
     * @param {Number} inventoryAdjustmentId Id of the inventoryAdjustment to get tags for
     * @param {module:api/InventoryAdjustmentApi~getInventoryAdjustmentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInventoryAdjustmentTags = function(inventoryAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryAdjustmentId' is set
      if (inventoryAdjustmentId === undefined || inventoryAdjustmentId === null) {
        throw new Error("Missing the required parameter 'inventoryAdjustmentId' when calling getInventoryAdjustmentTags");
      }


      var pathParams = {
        'inventoryAdjustmentId': inventoryAdjustmentId
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
        '/v3.0/inventoryAdjustment/{inventoryAdjustmentId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInventoryAdjustmentCustomFields operation.
     * @callback module:api/InventoryAdjustmentApi~updateInventoryAdjustmentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an inventoryAdjustment custom fields
     * Updates an existing inventoryAdjustment custom fields using the specified data.
     * @param {module:model/InventoryAdjustment} body InventoryAdjustment to be updated.
     * @param {module:api/InventoryAdjustmentApi~updateInventoryAdjustmentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInventoryAdjustmentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateInventoryAdjustmentCustomFields");
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
        '/v3.0/inventoryAdjustment/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
