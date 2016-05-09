(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrderLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderLine'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderLineApi = factory(root.infoplus.ApiClient, root.infoplus.OrderLine);
  }
}(this, function(ApiClient, OrderLine) {
  'use strict';

  /**
   * OrderLine service.
   * @module api/OrderLineApi
   * @version 1.0
   */

  /**
   * Constructs a new OrderLineApi. 
   * @alias module:api/OrderLineApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getOrderLineByFilter operation.
     * @callback module:api/OrderLineApi~getOrderLineByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderLine>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderLines by filter
     * Returns the list of orderLines that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/OrderLineApi~getOrderLineByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OrderLine>}
     */
    this.getOrderLineByFilter = function(opts, callback) {
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
      var returnType = [OrderLine];

      return this.apiClient.callApi(
        '/v1.0/orderLine/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderLineById operation.
     * @callback module:api/OrderLineApi~getOrderLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderLine by id
     * Returns the orderLine identified by the specified id.
     * @param {Integer} orderLineId Id of the orderLine to be returned.
     * @param {module:api/OrderLineApi~getOrderLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderLine}
     */
    this.getOrderLineById = function(orderLineId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineId' is set
      if (orderLineId == undefined || orderLineId == null) {
        throw "Missing the required parameter 'orderLineId' when calling getOrderLineById";
      }


      var pathParams = {
        'orderLineId': orderLineId
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
      var returnType = OrderLine;

      return this.apiClient.callApi(
        '/v1.0/orderLine/{orderLineId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
