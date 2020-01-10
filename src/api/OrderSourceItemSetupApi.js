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
    define(['ApiClient', 'model/ApiResponse', 'model/OrderSourceItemSetup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/OrderSourceItemSetup'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderSourceItemSetupApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.OrderSourceItemSetup);
  }
}(this, function(ApiClient, ApiResponse, OrderSourceItemSetup) {
  'use strict';

  /**
   * OrderSourceItemSetup service.
   * @module api/OrderSourceItemSetupApi
   * @version beta
   */

  /**
   * Constructs a new OrderSourceItemSetupApi. 
   * @alias module:api/OrderSourceItemSetupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrderSourceItemSetup operation.
     * @callback module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceItemSetup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an orderSourceItemSetup
     * Inserts a new orderSourceItemSetup using the specified data.
     * @param {module:model/OrderSourceItemSetup} body OrderSourceItemSetup to be inserted.
     * @param {module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceItemSetup}
     */
    this.addOrderSourceItemSetup = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addOrderSourceItemSetup");
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
      var returnType = OrderSourceItemSetup;

      return this.apiClient.callApi(
        '/beta/orderSourceItemSetup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceItemSetupAudit operation.
     * @callback module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an orderSourceItemSetup
     * Adds an audit to an existing orderSourceItemSetup.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to add an audit to
     * @param {String} orderSourceItemSetupAudit The audit to add
     * @param {module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceItemSetupAudit = function(orderSourceItemSetupId, orderSourceItemSetupAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling addOrderSourceItemSetupAudit");
      }

      // verify the required parameter 'orderSourceItemSetupAudit' is set
      if (orderSourceItemSetupAudit === undefined || orderSourceItemSetupAudit === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupAudit' when calling addOrderSourceItemSetupAudit");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId,
        'orderSourceItemSetupAudit': orderSourceItemSetupAudit
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
        '/beta/orderSourceItemSetup/{orderSourceItemSetupId}/audit/{orderSourceItemSetupAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceItemSetupFile operation.
     * @callback module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an orderSourceItemSetup
     * Adds a file to an existing orderSourceItemSetup.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceItemSetupFile = function(orderSourceItemSetupId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling addOrderSourceItemSetupFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addOrderSourceItemSetupFile");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId,
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
        '/beta/orderSourceItemSetup/{orderSourceItemSetupId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderSourceItemSetupTag operation.
     * @callback module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an orderSourceItemSetup.
     * Adds a tag to an existing orderSourceItemSetup.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to add a tag to
     * @param {String} orderSourceItemSetupTag The tag to add
     * @param {module:api/OrderSourceItemSetupApi~addOrderSourceItemSetupTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderSourceItemSetupTag = function(orderSourceItemSetupId, orderSourceItemSetupTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling addOrderSourceItemSetupTag");
      }

      // verify the required parameter 'orderSourceItemSetupTag' is set
      if (orderSourceItemSetupTag === undefined || orderSourceItemSetupTag === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupTag' when calling addOrderSourceItemSetupTag");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId,
        'orderSourceItemSetupTag': orderSourceItemSetupTag
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
        '/beta/orderSourceItemSetup/{orderSourceItemSetupId}/tag/{orderSourceItemSetupTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceItemSetup operation.
     * @callback module:api/OrderSourceItemSetupApi~deleteOrderSourceItemSetupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an orderSourceItemSetup
     * Deletes the orderSourceItemSetup identified by the specified id.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to be deleted.
     * @param {module:api/OrderSourceItemSetupApi~deleteOrderSourceItemSetupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceItemSetup = function(orderSourceItemSetupId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling deleteOrderSourceItemSetup");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId
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
        '/beta/orderSourceItemSetup/{orderSourceItemSetupId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderSourceItemSetupTag operation.
     * @callback module:api/OrderSourceItemSetupApi~deleteOrderSourceItemSetupTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an orderSourceItemSetup.
     * Deletes an existing orderSourceItemSetup tag using the specified data.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to remove tag from
     * @param {String} orderSourceItemSetupTag The tag to delete
     * @param {module:api/OrderSourceItemSetupApi~deleteOrderSourceItemSetupTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceItemSetupTag = function(orderSourceItemSetupId, orderSourceItemSetupTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling deleteOrderSourceItemSetupTag");
      }

      // verify the required parameter 'orderSourceItemSetupTag' is set
      if (orderSourceItemSetupTag === undefined || orderSourceItemSetupTag === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupTag' when calling deleteOrderSourceItemSetupTag");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId,
        'orderSourceItemSetupTag': orderSourceItemSetupTag
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
        '/beta/orderSourceItemSetup/{orderSourceItemSetupId}/tag/{orderSourceItemSetupTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderSourceItemSetupById operation.
     * @callback module:api/OrderSourceItemSetupApi~getDuplicateOrderSourceItemSetupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceItemSetup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an orderSourceItemSetup by id
     * Returns a duplicated orderSourceItemSetup identified by the specified id.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to be duplicated.
     * @param {module:api/OrderSourceItemSetupApi~getDuplicateOrderSourceItemSetupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceItemSetup}
     */
    this.getDuplicateOrderSourceItemSetupById = function(orderSourceItemSetupId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling getDuplicateOrderSourceItemSetupById");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId
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
      var returnType = OrderSourceItemSetup;

      return this.apiClient.callApi(
        '/beta/orderSourceItemSetup/duplicate/{orderSourceItemSetupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceItemSetupByFilter operation.
     * @callback module:api/OrderSourceItemSetupApi~getOrderSourceItemSetupByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderSourceItemSetup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderSourceItemSetups by filter
     * Returns the list of orderSourceItemSetups that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderSourceItemSetupApi~getOrderSourceItemSetupByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrderSourceItemSetup>}
     */
    this.getOrderSourceItemSetupByFilter = function(opts, callback) {
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
      var returnType = [OrderSourceItemSetup];

      return this.apiClient.callApi(
        '/beta/orderSourceItemSetup/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceItemSetupById operation.
     * @callback module:api/OrderSourceItemSetupApi~getOrderSourceItemSetupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSourceItemSetup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderSourceItemSetup by id
     * Returns the orderSourceItemSetup identified by the specified id.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to be returned.
     * @param {module:api/OrderSourceItemSetupApi~getOrderSourceItemSetupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSourceItemSetup}
     */
    this.getOrderSourceItemSetupById = function(orderSourceItemSetupId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling getOrderSourceItemSetupById");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId
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
      var returnType = OrderSourceItemSetup;

      return this.apiClient.callApi(
        '/beta/orderSourceItemSetup/{orderSourceItemSetupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderSourceItemSetupTags operation.
     * @callback module:api/OrderSourceItemSetupApi~getOrderSourceItemSetupTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an orderSourceItemSetup.
     * Get all existing orderSourceItemSetup tags.
     * @param {Number} orderSourceItemSetupId Id of the orderSourceItemSetup to get tags for
     * @param {module:api/OrderSourceItemSetupApi~getOrderSourceItemSetupTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderSourceItemSetupTags = function(orderSourceItemSetupId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceItemSetupId' is set
      if (orderSourceItemSetupId === undefined || orderSourceItemSetupId === null) {
        throw new Error("Missing the required parameter 'orderSourceItemSetupId' when calling getOrderSourceItemSetupTags");
      }


      var pathParams = {
        'orderSourceItemSetupId': orderSourceItemSetupId
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
        '/beta/orderSourceItemSetup/{orderSourceItemSetupId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderSourceItemSetup operation.
     * @callback module:api/OrderSourceItemSetupApi~updateOrderSourceItemSetupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderSourceItemSetup
     * Updates an existing orderSourceItemSetup using the specified data.
     * @param {module:model/OrderSourceItemSetup} body OrderSourceItemSetup to be updated.
     * @param {module:api/OrderSourceItemSetupApi~updateOrderSourceItemSetupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderSourceItemSetup = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrderSourceItemSetup");
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
        '/beta/orderSourceItemSetup', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderSourceItemSetupCustomFields operation.
     * @callback module:api/OrderSourceItemSetupApi~updateOrderSourceItemSetupCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderSourceItemSetup custom fields
     * Updates an existing orderSourceItemSetup custom fields using the specified data.
     * @param {module:model/OrderSourceItemSetup} body OrderSourceItemSetup to be updated.
     * @param {module:api/OrderSourceItemSetupApi~updateOrderSourceItemSetupCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderSourceItemSetupCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrderSourceItemSetupCustomFields");
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
        '/beta/orderSourceItemSetup/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
