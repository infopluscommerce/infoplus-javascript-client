(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Order', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Order'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderApi = factory(root.infoplus.ApiClient, root.infoplus.Order, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Order, ApiResponse) {
  'use strict';

  /**
   * Order service.
   * @module api/OrderApi
   * @version beta
   */

  /**
   * Constructs a new OrderApi. 
   * @alias module:api/OrderApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrder operation.
     * @callback module:api/OrderApi~addOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an order
     * Inserts a new order using the specified data.
     * @param {module:model/Order} body Order to be inserted.
     * @param {module:api/OrderApi~addOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Order}
     */
    this.addOrder = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addOrder";
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
      var returnType = Order;

      return this.apiClient.callApi(
        '/beta/order', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderAudit operation.
     * @callback module:api/OrderApi~addOrderAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an order
     * Adds an audit to an existing order.
     * @param {Number} orderId Id of the order to add an audit to
     * @param {String} orderAudit The audit to add
     * @param {module:api/OrderApi~addOrderAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderAudit = function(orderId, orderAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId == undefined || orderId == null) {
        throw "Missing the required parameter 'orderId' when calling addOrderAudit";
      }

      // verify the required parameter 'orderAudit' is set
      if (orderAudit == undefined || orderAudit == null) {
        throw "Missing the required parameter 'orderAudit' when calling addOrderAudit";
      }


      var pathParams = {
        'orderId': orderId,
        'orderAudit': orderAudit
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
        '/beta/order/{orderId}/audit/{orderAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderTag operation.
     * @callback module:api/OrderApi~addOrderTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an order.
     * Adds a tag to an existing order.
     * @param {Number} orderId Id of the order to add a tag to
     * @param {String} orderTag The tag to add
     * @param {module:api/OrderApi~addOrderTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderTag = function(orderId, orderTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId == undefined || orderId == null) {
        throw "Missing the required parameter 'orderId' when calling addOrderTag";
      }

      // verify the required parameter 'orderTag' is set
      if (orderTag == undefined || orderTag == null) {
        throw "Missing the required parameter 'orderTag' when calling addOrderTag";
      }


      var pathParams = {
        'orderId': orderId,
        'orderTag': orderTag
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
        '/beta/order/{orderId}/tag/{orderTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrder operation.
     * @callback module:api/OrderApi~deleteOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an order
     * Deletes the order identified by the specified id.
     * @param {Number} orderId Id of the order to be deleted.
     * @param {module:api/OrderApi~deleteOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrder = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId == undefined || orderId == null) {
        throw "Missing the required parameter 'orderId' when calling deleteOrder";
      }


      var pathParams = {
        'orderId': orderId
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
        '/beta/order/{orderId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderTag operation.
     * @callback module:api/OrderApi~deleteOrderTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an order.
     * Deletes an existing order tag using the specified data.
     * @param {Number} orderId Id of the order to remove tag from
     * @param {String} orderTag The tag to delete
     * @param {module:api/OrderApi~deleteOrderTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderTag = function(orderId, orderTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId == undefined || orderId == null) {
        throw "Missing the required parameter 'orderId' when calling deleteOrderTag";
      }

      // verify the required parameter 'orderTag' is set
      if (orderTag == undefined || orderTag == null) {
        throw "Missing the required parameter 'orderTag' when calling deleteOrderTag";
      }


      var pathParams = {
        'orderId': orderId,
        'orderTag': orderTag
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
        '/beta/order/{orderId}/tag/{orderTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderById operation.
     * @callback module:api/OrderApi~getDuplicateOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an order by id
     * Returns a duplicated order identified by the specified id.
     * @param {Number} orderId Id of the order to be duplicated.
     * @param {module:api/OrderApi~getDuplicateOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Order}
     */
    this.getDuplicateOrderById = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId == undefined || orderId == null) {
        throw "Missing the required parameter 'orderId' when calling getDuplicateOrderById";
      }


      var pathParams = {
        'orderId': orderId
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
      var returnType = Order;

      return this.apiClient.callApi(
        '/beta/order/duplicate/{orderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderByFilter operation.
     * @callback module:api/OrderApi~getOrderByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orders by filter
     * Returns the list of orders that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderApi~getOrderByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Order>}
     */
    this.getOrderByFilter = function(opts, callback) {
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
      var returnType = [Order];

      return this.apiClient.callApi(
        '/beta/order/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderById operation.
     * @callback module:api/OrderApi~getOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an order by id
     * Returns the order identified by the specified id.
     * @param {Number} orderId Id of the order to be returned.
     * @param {module:api/OrderApi~getOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Order}
     */
    this.getOrderById = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId == undefined || orderId == null) {
        throw "Missing the required parameter 'orderId' when calling getOrderById";
      }


      var pathParams = {
        'orderId': orderId
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
      var returnType = Order;

      return this.apiClient.callApi(
        '/beta/order/{orderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderTags operation.
     * @callback module:api/OrderApi~getOrderTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an order.
     * Get all existing order tags.
     * @param {Number} orderId Id of the order to get tags for
     * @param {module:api/OrderApi~getOrderTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderTags = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId == undefined || orderId == null) {
        throw "Missing the required parameter 'orderId' when calling getOrderTags";
      }


      var pathParams = {
        'orderId': orderId
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
        '/beta/order/{orderId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrder operation.
     * @callback module:api/OrderApi~updateOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an order
     * Updates an existing order using the specified data.
     * @param {module:model/Order} body Order to be updated.
     * @param {module:api/OrderApi~updateOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrder = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrder";
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
        '/beta/order', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderCustomFields operation.
     * @callback module:api/OrderApi~updateOrderCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an order custom fields
     * Updates an existing order custom fields using the specified data.
     * @param {module:model/Order} body Order to be updated.
     * @param {module:api/OrderApi~updateOrderCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderCustomFields";
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
        '/beta/order/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
