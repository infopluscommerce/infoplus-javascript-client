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
    define(['ApiClient', 'model/OrderSourceStockStatus', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderSourceStockStatus'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderSourceStockStatusApi = factory(root.infoplus.ApiClient, root.infoplus.OrderSourceStockStatus, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, OrderSourceStockStatus, RecordFile) {
  'use strict';

  /**
   * OrderSourceStockStatus service.
   * @module api/OrderSourceStockStatusApi
   * @version v3.0
   */

  /**
   * Constructs a new OrderSourceStockStatusApi. 
   * @alias module:api/OrderSourceStockStatusApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrderSourceStockStatusAudit operation.
     * @callback module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an orderSourceStockStatus
     * Adds an audit to an existing orderSourceStockStatus.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to add an audit to
     * @param {String} orderSourceStockStatusAudit The audit to add
     * @param {module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceStockStatusAudit = function(orderSourceStockStatusId, orderSourceStockStatusAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling addOrderSourceStockStatusAudit");
      }

      // verify the required parameter 'orderSourceStockStatusAudit' is set
      if (orderSourceStockStatusAudit === undefined || orderSourceStockStatusAudit === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusAudit' when calling addOrderSourceStockStatusAudit");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId,
        'orderSourceStockStatusAudit': orderSourceStockStatusAudit
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/audit/{orderSourceStockStatusAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceStockStatusFile operation.
     * @callback module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an orderSourceStockStatus
     * Adds a file to an existing orderSourceStockStatus.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceStockStatusFile = function(orderSourceStockStatusId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling addOrderSourceStockStatusFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addOrderSourceStockStatusFile");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId,
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceStockStatusFileByURL operation.
     * @callback module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an orderSourceStockStatus by URL.
     * Adds a file to an existing orderSourceStockStatus by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to add an file to
     * @param {module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceStockStatusFileByURL = function(body, orderSourceStockStatusId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addOrderSourceStockStatusFileByURL");
      }

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling addOrderSourceStockStatusFileByURL");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceStockStatusTag operation.
     * @callback module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an orderSourceStockStatus.
     * Adds a tag to an existing orderSourceStockStatus.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to add a tag to
     * @param {String} orderSourceStockStatusTag The tag to add
     * @param {module:api/OrderSourceStockStatusApi~addOrderSourceStockStatusTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceStockStatusTag = function(orderSourceStockStatusId, orderSourceStockStatusTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling addOrderSourceStockStatusTag");
      }

      // verify the required parameter 'orderSourceStockStatusTag' is set
      if (orderSourceStockStatusTag === undefined || orderSourceStockStatusTag === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusTag' when calling addOrderSourceStockStatusTag");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId,
        'orderSourceStockStatusTag': orderSourceStockStatusTag
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/tag/{orderSourceStockStatusTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceStockStatusFile operation.
     * @callback module:api/OrderSourceStockStatusApi~deleteOrderSourceStockStatusFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an orderSourceStockStatus.
     * Deletes an existing orderSourceStockStatus file using the specified data.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/OrderSourceStockStatusApi~deleteOrderSourceStockStatusFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceStockStatusFile = function(orderSourceStockStatusId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling deleteOrderSourceStockStatusFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteOrderSourceStockStatusFile");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId,
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceStockStatusTag operation.
     * @callback module:api/OrderSourceStockStatusApi~deleteOrderSourceStockStatusTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an orderSourceStockStatus.
     * Deletes an existing orderSourceStockStatus tag using the specified data.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to remove tag from
     * @param {String} orderSourceStockStatusTag The tag to delete
     * @param {module:api/OrderSourceStockStatusApi~deleteOrderSourceStockStatusTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceStockStatusTag = function(orderSourceStockStatusId, orderSourceStockStatusTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling deleteOrderSourceStockStatusTag");
      }

      // verify the required parameter 'orderSourceStockStatusTag' is set
      if (orderSourceStockStatusTag === undefined || orderSourceStockStatusTag === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusTag' when calling deleteOrderSourceStockStatusTag");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId,
        'orderSourceStockStatusTag': orderSourceStockStatusTag
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/tag/{orderSourceStockStatusTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderSourceStockStatusById operation.
     * @callback module:api/OrderSourceStockStatusApi~getDuplicateOrderSourceStockStatusByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceStockStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an orderSourceStockStatus by id
     * Returns a duplicated orderSourceStockStatus identified by the specified id.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to be duplicated.
     * @param {module:api/OrderSourceStockStatusApi~getDuplicateOrderSourceStockStatusByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceStockStatus}
     */
    this.getDuplicateOrderSourceStockStatusById = function(orderSourceStockStatusId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling getDuplicateOrderSourceStockStatusById");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId
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
      var returnType = OrderSourceStockStatus;

      return this.apiClient.callApi(
        '/v3.0/orderSourceStockStatus/duplicate/{orderSourceStockStatusId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceStockStatusByFilter operation.
     * @callback module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderSourceStockStatus>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderSourceStockStatuses by filter
     * Returns the list of orderSourceStockStatuses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderSourceStockStatus>}
     */
    this.getOrderSourceStockStatusByFilter = function(opts, callback) {
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
      var returnType = [OrderSourceStockStatus];

      return this.apiClient.callApi(
        '/v3.0/orderSourceStockStatus/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceStockStatusById operation.
     * @callback module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceStockStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderSourceStockStatus by id
     * Returns the orderSourceStockStatus identified by the specified id.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to be returned.
     * @param {module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceStockStatus}
     */
    this.getOrderSourceStockStatusById = function(orderSourceStockStatusId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling getOrderSourceStockStatusById");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId
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
      var returnType = OrderSourceStockStatus;

      return this.apiClient.callApi(
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceStockStatusFiles operation.
     * @callback module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an orderSourceStockStatus.
     * Get all existing orderSourceStockStatus files.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to get files for
     * @param {module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderSourceStockStatusFiles = function(orderSourceStockStatusId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling getOrderSourceStockStatusFiles");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceStockStatusTags operation.
     * @callback module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an orderSourceStockStatus.
     * Get all existing orderSourceStockStatus tags.
     * @param {Number} orderSourceStockStatusId Id of the orderSourceStockStatus to get tags for
     * @param {module:api/OrderSourceStockStatusApi~getOrderSourceStockStatusTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderSourceStockStatusTags = function(orderSourceStockStatusId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceStockStatusId' is set
      if (orderSourceStockStatusId === undefined || orderSourceStockStatusId === null) {
        throw new Error("Missing the required parameter 'orderSourceStockStatusId' when calling getOrderSourceStockStatusTags");
      }


      var pathParams = {
        'orderSourceStockStatusId': orderSourceStockStatusId
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
        '/v3.0/orderSourceStockStatus/{orderSourceStockStatusId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
