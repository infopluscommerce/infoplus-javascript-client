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
    define(['ApiClient', 'model/InventoryDetail', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventoryDetail'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventoryDetailApi = factory(root.infoplus.ApiClient, root.infoplus.InventoryDetail, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, InventoryDetail, RecordFile) {
  'use strict';

  /**
   * InventoryDetail service.
   * @module api/InventoryDetailApi
   * @version v3.0
   */

  /**
   * Constructs a new InventoryDetailApi. 
   * @alias module:api/InventoryDetailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInventoryDetailAudit operation.
     * @callback module:api/InventoryDetailApi~addInventoryDetailAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an inventoryDetail
     * Adds an audit to an existing inventoryDetail.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to add an audit to
     * @param {String} inventoryDetailAudit The audit to add
     * @param {module:api/InventoryDetailApi~addInventoryDetailAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryDetailAudit = function(inventoryDetailId, inventoryDetailAudit, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling addInventoryDetailAudit");
      }

      // verify the required parameter 'inventoryDetailAudit' is set
      if (inventoryDetailAudit === undefined || inventoryDetailAudit === null) {
        throw new Error("Missing the required parameter 'inventoryDetailAudit' when calling addInventoryDetailAudit");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
        'inventoryDetailAudit': inventoryDetailAudit
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/audit/{inventoryDetailAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryDetailFile operation.
     * @callback module:api/InventoryDetailApi~addInventoryDetailFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an inventoryDetail
     * Adds a file to an existing inventoryDetail.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/InventoryDetailApi~addInventoryDetailFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryDetailFile = function(inventoryDetailId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling addInventoryDetailFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addInventoryDetailFile");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryDetailFileByURL operation.
     * @callback module:api/InventoryDetailApi~addInventoryDetailFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an inventoryDetail by URL.
     * Adds a file to an existing inventoryDetail by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to add an file to
     * @param {module:api/InventoryDetailApi~addInventoryDetailFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryDetailFileByURL = function(body, inventoryDetailId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addInventoryDetailFileByURL");
      }

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling addInventoryDetailFileByURL");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryDetailTag operation.
     * @callback module:api/InventoryDetailApi~addInventoryDetailTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an inventoryDetail.
     * Adds a tag to an existing inventoryDetail.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to add a tag to
     * @param {String} inventoryDetailTag The tag to add
     * @param {module:api/InventoryDetailApi~addInventoryDetailTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryDetailTag = function(inventoryDetailId, inventoryDetailTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling addInventoryDetailTag");
      }

      // verify the required parameter 'inventoryDetailTag' is set
      if (inventoryDetailTag === undefined || inventoryDetailTag === null) {
        throw new Error("Missing the required parameter 'inventoryDetailTag' when calling addInventoryDetailTag");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
        'inventoryDetailTag': inventoryDetailTag
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventoryDetailFile operation.
     * @callback module:api/InventoryDetailApi~deleteInventoryDetailFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an inventoryDetail.
     * Deletes an existing inventoryDetail file using the specified data.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/InventoryDetailApi~deleteInventoryDetailFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventoryDetailFile = function(inventoryDetailId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling deleteInventoryDetailFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteInventoryDetailFile");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventoryDetailTag operation.
     * @callback module:api/InventoryDetailApi~deleteInventoryDetailTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an inventoryDetail.
     * Deletes an existing inventoryDetail tag using the specified data.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to remove tag from
     * @param {String} inventoryDetailTag The tag to delete
     * @param {module:api/InventoryDetailApi~deleteInventoryDetailTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventoryDetailTag = function(inventoryDetailId, inventoryDetailTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling deleteInventoryDetailTag");
      }

      // verify the required parameter 'inventoryDetailTag' is set
      if (inventoryDetailTag === undefined || inventoryDetailTag === null) {
        throw new Error("Missing the required parameter 'inventoryDetailTag' when calling deleteInventoryDetailTag");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
        'inventoryDetailTag': inventoryDetailTag
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInventoryDetailById operation.
     * @callback module:api/InventoryDetailApi~getDuplicateInventoryDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an inventoryDetail by id
     * Returns a duplicated inventoryDetail identified by the specified id.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to be duplicated.
     * @param {module:api/InventoryDetailApi~getDuplicateInventoryDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InventoryDetail}
     */
    this.getDuplicateInventoryDetailById = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling getDuplicateInventoryDetailById");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
      var returnType = InventoryDetail;

      return this.apiClient.callApi(
        '/v3.0/inventoryDetail/duplicate/{inventoryDetailId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailByFilter operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryDetail>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search inventoryDetails by filter
     * Returns the list of inventoryDetails that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InventoryDetailApi~getInventoryDetailByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InventoryDetail>}
     */
    this.getInventoryDetailByFilter = function(opts, callback) {
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
      var returnType = [InventoryDetail];

      return this.apiClient.callApi(
        '/v3.0/inventoryDetail/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailById operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an inventoryDetail by id
     * Returns the inventoryDetail identified by the specified id.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to be returned.
     * @param {module:api/InventoryDetailApi~getInventoryDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InventoryDetail}
     */
    this.getInventoryDetailById = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling getInventoryDetailById");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
      var returnType = InventoryDetail;

      return this.apiClient.callApi(
        '/v3.0/inventoryDetail/{inventoryDetailId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailFiles operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an inventoryDetail.
     * Get all existing inventoryDetail files.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to get files for
     * @param {module:api/InventoryDetailApi~getInventoryDetailFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInventoryDetailFiles = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling getInventoryDetailFiles");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailTags operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an inventoryDetail.
     * Get all existing inventoryDetail tags.
     * @param {Number} inventoryDetailId Id of the inventoryDetail to get tags for
     * @param {module:api/InventoryDetailApi~getInventoryDetailTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInventoryDetailTags = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId === undefined || inventoryDetailId === null) {
        throw new Error("Missing the required parameter 'inventoryDetailId' when calling getInventoryDetailTags");
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
        '/v3.0/inventoryDetail/{inventoryDetailId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInventoryDetailCustomFields operation.
     * @callback module:api/InventoryDetailApi~updateInventoryDetailCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an inventoryDetail custom fields
     * Updates an existing inventoryDetail custom fields using the specified data.
     * @param {module:model/InventoryDetail} body InventoryDetail to be updated.
     * @param {module:api/InventoryDetailApi~updateInventoryDetailCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInventoryDetailCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateInventoryDetailCustomFields");
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
        '/v3.0/inventoryDetail/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
