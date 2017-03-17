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
   * @version beta
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
     * Callback function to receive the result of the addOrderLineAudit operation.
     * @callback module:api/OrderLineApi~addOrderLineAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an orderLine
     * Adds an audit to an existing orderLine.
     * @param {Integer} orderLineId Id of the orderLine to add an audit to
     * @param {String} orderLineAudit The audit to add
     * @param {module:api/OrderLineApi~addOrderLineAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderLineAudit = function(orderLineId, orderLineAudit, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineId' is set
      if (orderLineId == undefined || orderLineId == null) {
        throw "Missing the required parameter 'orderLineId' when calling addOrderLineAudit";
      }

      // verify the required parameter 'orderLineAudit' is set
      if (orderLineAudit == undefined || orderLineAudit == null) {
        throw "Missing the required parameter 'orderLineAudit' when calling addOrderLineAudit";
      }


      var pathParams = {
        'orderLineId': orderLineId,
        'orderLineAudit': orderLineAudit
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
        '/beta/orderLine/{orderLineId}/audit/{orderLineAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrderLineTag operation.
     * @callback module:api/OrderLineApi~addOrderLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an orderLine.
     * Adds a tag to an existing orderLine.
     * @param {Integer} orderLineId Id of the orderLine to add a tag to
     * @param {String} orderLineTag The tag to add
     * @param {module:api/OrderLineApi~addOrderLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addOrderLineTag = function(orderLineId, orderLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineId' is set
      if (orderLineId == undefined || orderLineId == null) {
        throw "Missing the required parameter 'orderLineId' when calling addOrderLineTag";
      }

      // verify the required parameter 'orderLineTag' is set
      if (orderLineTag == undefined || orderLineTag == null) {
        throw "Missing the required parameter 'orderLineTag' when calling addOrderLineTag";
      }


      var pathParams = {
        'orderLineId': orderLineId,
        'orderLineTag': orderLineTag
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
        '/beta/orderLine/{orderLineId}/tag/{orderLineTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderLineTag operation.
     * @callback module:api/OrderLineApi~deleteOrderLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an orderLine.
     * Deletes an existing orderLine tag using the specified data.
     * @param {Integer} orderLineId Id of the orderLine to remove tag from
     * @param {String} orderLineTag The tag to delete
     * @param {module:api/OrderLineApi~deleteOrderLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderLineTag = function(orderLineId, orderLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineId' is set
      if (orderLineId == undefined || orderLineId == null) {
        throw "Missing the required parameter 'orderLineId' when calling deleteOrderLineTag";
      }

      // verify the required parameter 'orderLineTag' is set
      if (orderLineTag == undefined || orderLineTag == null) {
        throw "Missing the required parameter 'orderLineTag' when calling deleteOrderLineTag";
      }


      var pathParams = {
        'orderLineId': orderLineId,
        'orderLineTag': orderLineTag
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
        '/beta/orderLine/{orderLineId}/tag/{orderLineTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateOrderLineById operation.
     * @callback module:api/OrderLineApi~getDuplicateOrderLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an orderLine by id
     * Returns a duplicated orderLine identified by the specified id.
     * @param {Integer} orderLineId Id of the orderLine to be duplicated.
     * @param {module:api/OrderLineApi~getDuplicateOrderLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderLine}
     */
    this.getDuplicateOrderLineById = function(orderLineId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineId' is set
      if (orderLineId == undefined || orderLineId == null) {
        throw "Missing the required parameter 'orderLineId' when calling getDuplicateOrderLineById";
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
        '/beta/orderLine/duplicate/{orderLineId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
        '/beta/orderLine/search', 'GET',
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
        '/beta/orderLine/{orderLineId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderLineTags operation.
     * @callback module:api/OrderLineApi~getOrderLineTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an orderLine.
     * Get all existing orderLine tags.
     * @param {Integer} orderLineId Id of the orderLine to get tags for
     * @param {module:api/OrderLineApi~getOrderLineTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getOrderLineTags = function(orderLineId, callback) {
      var postBody = null;

      // verify the required parameter 'orderLineId' is set
      if (orderLineId == undefined || orderLineId == null) {
        throw "Missing the required parameter 'orderLineId' when calling getOrderLineTags";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/orderLine/{orderLineId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrderLineCustomFields operation.
     * @callback module:api/OrderLineApi~updateOrderLineCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an orderLine custom fields
     * Updates an existing orderLine custom fields using the specified data.
     * @param {module:model/OrderLine} body OrderLine to be updated.
     * @param {module:api/OrderLineApi~updateOrderLineCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrderLineCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateOrderLineCustomFields";
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
        '/beta/orderLine/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
