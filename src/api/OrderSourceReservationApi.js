(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrderSourceReservation', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderSourceReservation'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderSourceReservationApi = factory(root.infoplus.ApiClient, root.infoplus.OrderSourceReservation, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, OrderSourceReservation, ApiResponse) {
  'use strict';

  /**
   * OrderSourceReservation service.
   * @module api/OrderSourceReservationApi
   * @version v2.0
   */

  /**
   * Constructs a new OrderSourceReservationApi. 
   * @alias module:api/OrderSourceReservationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
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
     * data is of type: {module:model/OrderSourceReservation}
     */
    this.addOrderSourceReservation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addOrderSourceReservation";
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
      var returnType = OrderSourceReservation;

      return this.apiClient.callApi(
        '/v2.0/orderSourceReservation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {Integer} orderSourceReservationId Id of the orderSourceReservation to be deleted.
     * @param {module:api/OrderSourceReservationApi~deleteOrderSourceReservationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderSourceReservation = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId == undefined || orderSourceReservationId == null) {
        throw "Missing the required parameter 'orderSourceReservationId' when calling deleteOrderSourceReservation";
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
        '/v2.0/orderSourceReservation/{orderSourceReservationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {Integer} orderSourceReservationId Id of the orderSourceReservation to be duplicated.
     * @param {module:api/OrderSourceReservationApi~getDuplicateOrderSourceReservationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderSourceReservation}
     */
    this.getDuplicateOrderSourceReservationById = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId == undefined || orderSourceReservationId == null) {
        throw "Missing the required parameter 'orderSourceReservationId' when calling getDuplicateOrderSourceReservationById";
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
      var returnType = OrderSourceReservation;

      return this.apiClient.callApi(
        '/v2.0/orderSourceReservation/duplicate/{orderSourceReservationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderSourceReservationApi~getOrderSourceReservationByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OrderSourceReservation>}
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
        'sort': opts['sort']
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
        '/v2.0/orderSourceReservation/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {Integer} orderSourceReservationId Id of the orderSourceReservation to be returned.
     * @param {module:api/OrderSourceReservationApi~getOrderSourceReservationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderSourceReservation}
     */
    this.getOrderSourceReservationById = function(orderSourceReservationId, callback) {
      var postBody = null;

      // verify the required parameter 'orderSourceReservationId' is set
      if (orderSourceReservationId == undefined || orderSourceReservationId == null) {
        throw "Missing the required parameter 'orderSourceReservationId' when calling getOrderSourceReservationById";
      }


      var pathParams = {
        'orderSourceReservationId': orderSourceReservationId
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
      var returnType = OrderSourceReservation;

      return this.apiClient.callApi(
        '/v2.0/orderSourceReservation/{orderSourceReservationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderSourceReservation";
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
        '/v2.0/orderSourceReservation', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
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
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderSourceReservationCustomFields";
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
        '/v2.0/orderSourceReservation/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
