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
    define(['ApiClient', 'model/ApiResponse', 'model/OrderSourceReservation', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/OrderSourceReservation'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderSourceReservationApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.OrderSourceReservation, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, OrderSourceReservation, RecordFile) {
  'use strict';

  /**
   * OrderSourceReservation service.
   * @module api/OrderSourceReservationApi
   * @version v3.0
   */

  /**
   * Constructs a new OrderSourceReservationApi. 
   * @alias module:api/OrderSourceReservationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrderSourceReservation operation.
     * @callback module:api/OrderSourceReservationApi~addOrderSourceReservationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceReservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an orderSourceReservation
     * Inserts a new orderSourceReservation using the specified data.
     * @param {module:model/OrderSourceReservation} body OrderSourceReservation to be inserted.
     * @param {module:api/OrderSourceReservationApi~addOrderSourceReservationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceReservation}
     */
    this.addOrderSourceReservation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addOrderSourceReservation");
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
      var returnType = OrderSourceReservation;

      return this.apiClient.callApi(
        '/v3.0/orderSourceReservation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceReservationAudit operation.
     * @callback module:api/OrderSourceReservationApi~addOrderSourceReservationAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an orderSourceReservation
     * Adds an audit to an existing orderSourceReservation.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to add an audit to
     * @param {String} orderSourceReservationAudit The audit to add
     * @param {module:api/OrderSourceReservationApi~addOrderSourceReservationAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceReservationAudit = function(orderSourceReservationId, orderSourceReservationAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling addOrderSourceReservationAudit");
      }

      // verify the required parameter 'orderSourceReservationAudit' is set
      if (orderSourceReservationAudit === undefined || orderSourceReservationAudit === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationAudit' when calling addOrderSourceReservationAudit");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId,
        'orderSourceReservationAudit': orderSourceReservationAudit
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/audit/{orderSourceReservationAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceReservationFile operation.
     * @callback module:api/OrderSourceReservationApi~addOrderSourceReservationFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an orderSourceReservation
     * Adds a file to an existing orderSourceReservation.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/OrderSourceReservationApi~addOrderSourceReservationFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceReservationFile = function(orderSourceReservationId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling addOrderSourceReservationFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addOrderSourceReservationFile");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId,
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceReservationFileByURL operation.
     * @callback module:api/OrderSourceReservationApi~addOrderSourceReservationFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an orderSourceReservation by URL.
     * Adds a file to an existing orderSourceReservation by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to add an file to
     * @param {module:api/OrderSourceReservationApi~addOrderSourceReservationFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceReservationFileByURL = function(body, orderSourceReservationId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addOrderSourceReservationFileByURL");
      }

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling addOrderSourceReservationFileByURL");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceReservationTag operation.
     * @callback module:api/OrderSourceReservationApi~addOrderSourceReservationTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an orderSourceReservation.
     * Adds a tag to an existing orderSourceReservation.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to add a tag to
     * @param {String} orderSourceReservationTag The tag to add
     * @param {module:api/OrderSourceReservationApi~addOrderSourceReservationTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceReservationTag = function(orderSourceReservationId, orderSourceReservationTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling addOrderSourceReservationTag");
      }

      // verify the required parameter 'orderSourceReservationTag' is set
      if (orderSourceReservationTag === undefined || orderSourceReservationTag === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationTag' when calling addOrderSourceReservationTag");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId,
        'orderSourceReservationTag': orderSourceReservationTag
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/tag/{orderSourceReservationTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceReservation operation.
     * @callback module:api/OrderSourceReservationApi~deleteOrderSourceReservationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an orderSourceReservation
     * Deletes the orderSourceReservation identified by the specified id.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to be deleted.
     * @param {module:api/OrderSourceReservationApi~deleteOrderSourceReservationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceReservation = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling deleteOrderSourceReservation");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceReservationFile operation.
     * @callback module:api/OrderSourceReservationApi~deleteOrderSourceReservationFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an orderSourceReservation.
     * Deletes an existing orderSourceReservation file using the specified data.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/OrderSourceReservationApi~deleteOrderSourceReservationFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceReservationFile = function(orderSourceReservationId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling deleteOrderSourceReservationFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteOrderSourceReservationFile");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId,
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceReservationTag operation.
     * @callback module:api/OrderSourceReservationApi~deleteOrderSourceReservationTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an orderSourceReservation.
     * Deletes an existing orderSourceReservation tag using the specified data.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to remove tag from
     * @param {String} orderSourceReservationTag The tag to delete
     * @param {module:api/OrderSourceReservationApi~deleteOrderSourceReservationTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceReservationTag = function(orderSourceReservationId, orderSourceReservationTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling deleteOrderSourceReservationTag");
      }

      // verify the required parameter 'orderSourceReservationTag' is set
      if (orderSourceReservationTag === undefined || orderSourceReservationTag === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationTag' when calling deleteOrderSourceReservationTag");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId,
        'orderSourceReservationTag': orderSourceReservationTag
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/tag/{orderSourceReservationTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderSourceReservationById operation.
     * @callback module:api/OrderSourceReservationApi~getDuplicateOrderSourceReservationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceReservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an orderSourceReservation by id
     * Returns a duplicated orderSourceReservation identified by the specified id.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to be duplicated.
     * @param {module:api/OrderSourceReservationApi~getDuplicateOrderSourceReservationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceReservation}
     */
    this.getDuplicateOrderSourceReservationById = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling getDuplicateOrderSourceReservationById");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
      var returnType = OrderSourceReservation;

      return this.apiClient.callApi(
        '/v3.0/orderSourceReservation/duplicate/{orderSourceReservationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceReservationByFilter operation.
     * @callback module:api/OrderSourceReservationApi~getOrderSourceReservationByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderSourceReservation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderSourceReservations by filter
     * Returns the list of orderSourceReservations that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderSourceReservationApi~getOrderSourceReservationByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderSourceReservation>}
     */
    this.getOrderSourceReservationByFilter = function(opts, callback) {
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
      var returnType = [OrderSourceReservation];

      return this.apiClient.callApi(
        '/v3.0/orderSourceReservation/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceReservationById operation.
     * @callback module:api/OrderSourceReservationApi~getOrderSourceReservationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceReservation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderSourceReservation by id
     * Returns the orderSourceReservation identified by the specified id.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to be returned.
     * @param {module:api/OrderSourceReservationApi~getOrderSourceReservationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceReservation}
     */
    this.getOrderSourceReservationById = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling getOrderSourceReservationById");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
      var returnType = OrderSourceReservation;

      return this.apiClient.callApi(
        '/v3.0/orderSourceReservation/{orderSourceReservationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceReservationFiles operation.
     * @callback module:api/OrderSourceReservationApi~getOrderSourceReservationFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an orderSourceReservation.
     * Get all existing orderSourceReservation files.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to get files for
     * @param {module:api/OrderSourceReservationApi~getOrderSourceReservationFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderSourceReservationFiles = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling getOrderSourceReservationFiles");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceReservationTags operation.
     * @callback module:api/OrderSourceReservationApi~getOrderSourceReservationTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an orderSourceReservation.
     * Get all existing orderSourceReservation tags.
     * @param {Number} orderSourceReservationId Id of the orderSourceReservation to get tags for
     * @param {module:api/OrderSourceReservationApi~getOrderSourceReservationTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderSourceReservationTags = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId === undefined || orderSourceReservationId === null) {
        throw new Error("Missing the required parameter 'orderSourceReservationId' when calling getOrderSourceReservationTags");
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
        '/v3.0/orderSourceReservation/{orderSourceReservationId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderSourceReservation operation.
     * @callback module:api/OrderSourceReservationApi~updateOrderSourceReservationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderSourceReservation
     * Updates an existing orderSourceReservation using the specified data.
     * @param {module:model/OrderSourceReservation} body OrderSourceReservation to be updated.
     * @param {module:api/OrderSourceReservationApi~updateOrderSourceReservationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderSourceReservation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrderSourceReservation");
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
        '/v3.0/orderSourceReservation', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderSourceReservationCustomFields operation.
     * @callback module:api/OrderSourceReservationApi~updateOrderSourceReservationCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderSourceReservation custom fields
     * Updates an existing orderSourceReservation custom fields using the specified data.
     * @param {module:model/OrderSourceReservation} body OrderSourceReservation to be updated.
     * @param {module:api/OrderSourceReservationApi~updateOrderSourceReservationCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderSourceReservationCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrderSourceReservationCustomFields");
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
        '/v3.0/orderSourceReservation/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
