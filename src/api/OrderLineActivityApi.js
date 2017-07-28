(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/OrderLineActivity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/OrderLineActivity'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderLineActivityApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.OrderLineActivity);
  }
}(this, function(ApiClient, ApiResponse, OrderLineActivity) {
  'use strict';

  /**
   * OrderLineActivity service.
   * @module api/OrderLineActivityApi
   * @version beta
   */

  /**
   * Constructs a new OrderLineActivityApi. 
   * @alias module:api/OrderLineActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrderLineActivity operation.
     * @callback module:api/OrderLineActivityApi~addOrderLineActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLineActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an orderLineActivity
     * Inserts a new orderLineActivity using the specified data.
     * @param {module:model/OrderLineActivity} body OrderLineActivity to be inserted.
     * @param {module:api/OrderLineActivityApi~addOrderLineActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderLineActivity}
     */
    this.addOrderLineActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addOrderLineActivity";
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
      var returnType = OrderLineActivity;

      return this.apiClient.callApi(
        '/beta/orderLineActivity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderLineActivityAudit operation.
     * @callback module:api/OrderLineActivityApi~addOrderLineActivityAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an orderLineActivity
     * Adds an audit to an existing orderLineActivity.
     * @param {Integer} orderLineActivityId Id of the orderLineActivity to add an audit to
     * @param {String} orderLineActivityAudit The audit to add
     * @param {module:api/OrderLineActivityApi~addOrderLineActivityAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderLineActivityAudit = function(orderLineActivityId, orderLineActivityAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineActivityId' is set
      if (orderLineActivityId == undefined || orderLineActivityId == null) {
        throw "Missing the required parameter 'orderLineActivityId' when calling addOrderLineActivityAudit";
      }

      // verify the required parameter 'orderLineActivityAudit' is set
      if (orderLineActivityAudit == undefined || orderLineActivityAudit == null) {
        throw "Missing the required parameter 'orderLineActivityAudit' when calling addOrderLineActivityAudit";
      }


      var pathParams = {
        'orderLineActivityId': orderLineActivityId,
        'orderLineActivityAudit': orderLineActivityAudit
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
        '/beta/orderLineActivity/{orderLineActivityId}/audit/{orderLineActivityAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderLineActivityTag operation.
     * @callback module:api/OrderLineActivityApi~addOrderLineActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an orderLineActivity.
     * Adds a tag to an existing orderLineActivity.
     * @param {Integer} orderLineActivityId Id of the orderLineActivity to add a tag to
     * @param {String} orderLineActivityTag The tag to add
     * @param {module:api/OrderLineActivityApi~addOrderLineActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderLineActivityTag = function(orderLineActivityId, orderLineActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineActivityId' is set
      if (orderLineActivityId == undefined || orderLineActivityId == null) {
        throw "Missing the required parameter 'orderLineActivityId' when calling addOrderLineActivityTag";
      }

      // verify the required parameter 'orderLineActivityTag' is set
      if (orderLineActivityTag == undefined || orderLineActivityTag == null) {
        throw "Missing the required parameter 'orderLineActivityTag' when calling addOrderLineActivityTag";
      }


      var pathParams = {
        'orderLineActivityId': orderLineActivityId,
        'orderLineActivityTag': orderLineActivityTag
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
        '/beta/orderLineActivity/{orderLineActivityId}/tag/{orderLineActivityTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderLineActivity operation.
     * @callback module:api/OrderLineActivityApi~deleteOrderLineActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an orderLineActivity
     * Deletes the orderLineActivity identified by the specified id.
     * @param {Integer} orderLineActivityId Id of the orderLineActivity to be deleted.
     * @param {module:api/OrderLineActivityApi~deleteOrderLineActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderLineActivity = function(orderLineActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineActivityId' is set
      if (orderLineActivityId == undefined || orderLineActivityId == null) {
        throw "Missing the required parameter 'orderLineActivityId' when calling deleteOrderLineActivity";
      }


      var pathParams = {
        'orderLineActivityId': orderLineActivityId
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
        '/beta/orderLineActivity/{orderLineActivityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderLineActivityTag operation.
     * @callback module:api/OrderLineActivityApi~deleteOrderLineActivityTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an orderLineActivity.
     * Deletes an existing orderLineActivity tag using the specified data.
     * @param {Integer} orderLineActivityId Id of the orderLineActivity to remove tag from
     * @param {String} orderLineActivityTag The tag to delete
     * @param {module:api/OrderLineActivityApi~deleteOrderLineActivityTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderLineActivityTag = function(orderLineActivityId, orderLineActivityTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineActivityId' is set
      if (orderLineActivityId == undefined || orderLineActivityId == null) {
        throw "Missing the required parameter 'orderLineActivityId' when calling deleteOrderLineActivityTag";
      }

      // verify the required parameter 'orderLineActivityTag' is set
      if (orderLineActivityTag == undefined || orderLineActivityTag == null) {
        throw "Missing the required parameter 'orderLineActivityTag' when calling deleteOrderLineActivityTag";
      }


      var pathParams = {
        'orderLineActivityId': orderLineActivityId,
        'orderLineActivityTag': orderLineActivityTag
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
        '/beta/orderLineActivity/{orderLineActivityId}/tag/{orderLineActivityTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderLineActivityById operation.
     * @callback module:api/OrderLineActivityApi~getDuplicateOrderLineActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLineActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an orderLineActivity by id
     * Returns a duplicated orderLineActivity identified by the specified id.
     * @param {Integer} orderLineActivityId Id of the orderLineActivity to be duplicated.
     * @param {module:api/OrderLineActivityApi~getDuplicateOrderLineActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderLineActivity}
     */
    this.getDuplicateOrderLineActivityById = function(orderLineActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineActivityId' is set
      if (orderLineActivityId == undefined || orderLineActivityId == null) {
        throw "Missing the required parameter 'orderLineActivityId' when calling getDuplicateOrderLineActivityById";
      }


      var pathParams = {
        'orderLineActivityId': orderLineActivityId
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
      var returnType = OrderLineActivity;

      return this.apiClient.callApi(
        '/beta/orderLineActivity/duplicate/{orderLineActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderLineActivityByFilter operation.
     * @callback module:api/OrderLineActivityApi~getOrderLineActivityByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderLineActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderLineActivitys by filter
     * Returns the list of orderLineActivitys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderLineActivityApi~getOrderLineActivityByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OrderLineActivity>}
     */
    this.getOrderLineActivityByFilter = function(opts, callback) {
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
      var returnType = [OrderLineActivity];

      return this.apiClient.callApi(
        '/beta/orderLineActivity/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderLineActivityById operation.
     * @callback module:api/OrderLineActivityApi~getOrderLineActivityByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLineActivity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderLineActivity by id
     * Returns the orderLineActivity identified by the specified id.
     * @param {Integer} orderLineActivityId Id of the orderLineActivity to be returned.
     * @param {module:api/OrderLineActivityApi~getOrderLineActivityByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderLineActivity}
     */
    this.getOrderLineActivityById = function(orderLineActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineActivityId' is set
      if (orderLineActivityId == undefined || orderLineActivityId == null) {
        throw "Missing the required parameter 'orderLineActivityId' when calling getOrderLineActivityById";
      }


      var pathParams = {
        'orderLineActivityId': orderLineActivityId
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
      var returnType = OrderLineActivity;

      return this.apiClient.callApi(
        '/beta/orderLineActivity/{orderLineActivityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderLineActivityTags operation.
     * @callback module:api/OrderLineActivityApi~getOrderLineActivityTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an orderLineActivity.
     * Get all existing orderLineActivity tags.
     * @param {Integer} orderLineActivityId Id of the orderLineActivity to get tags for
     * @param {module:api/OrderLineActivityApi~getOrderLineActivityTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderLineActivityTags = function(orderLineActivityId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineActivityId' is set
      if (orderLineActivityId == undefined || orderLineActivityId == null) {
        throw "Missing the required parameter 'orderLineActivityId' when calling getOrderLineActivityTags";
      }


      var pathParams = {
        'orderLineActivityId': orderLineActivityId
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
        '/beta/orderLineActivity/{orderLineActivityId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderLineActivity operation.
     * @callback module:api/OrderLineActivityApi~updateOrderLineActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderLineActivity
     * Updates an existing orderLineActivity using the specified data.
     * @param {module:model/OrderLineActivity} body OrderLineActivity to be updated.
     * @param {module:api/OrderLineActivityApi~updateOrderLineActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderLineActivity = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderLineActivity";
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
        '/beta/orderLineActivity', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
