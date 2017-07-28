(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrderInvoiceTemplateLineItemDescriptionEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderInvoiceTemplateLineItemDescriptionEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.OrderInvoiceTemplateLineItemDescriptionEnumApi = factory(root.infoplus.ApiClient, root.infoplus.OrderInvoiceTemplateLineItemDescriptionEnum);
  }
}(this, function(ApiClient, OrderInvoiceTemplateLineItemDescriptionEnum) {
  'use strict';

  /**
   * OrderInvoiceTemplateLineItemDescriptionEnum service.
   * @module api/OrderInvoiceTemplateLineItemDescriptionEnumApi
   * @version beta
   */

  /**
   * Constructs a new OrderInvoiceTemplateLineItemDescriptionEnumApi. 
   * @alias module:api/OrderInvoiceTemplateLineItemDescriptionEnumApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getOrderInvoiceTemplateLineItemDescriptionEnumById operation.
     * @callback module:api/OrderInvoiceTemplateLineItemDescriptionEnumApi~getOrderInvoiceTemplateLineItemDescriptionEnumByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderInvoiceTemplateLineItemDescriptionEnum} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an orderInvoiceTemplateLineItemDescriptionEnum by id
     * Returns the orderInvoiceTemplateLineItemDescriptionEnum identified by the specified id.
     * @param {String} orderInvoiceTemplateLineItemDescriptionEnumId Id of orderInvoiceTemplateLineItemDescriptionEnum to be returned.
     * @param {module:api/OrderInvoiceTemplateLineItemDescriptionEnumApi~getOrderInvoiceTemplateLineItemDescriptionEnumByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrderInvoiceTemplateLineItemDescriptionEnum}
     */
    this.getOrderInvoiceTemplateLineItemDescriptionEnumById = function(orderInvoiceTemplateLineItemDescriptionEnumId, callback) {
      var postBody = null;

      // verify the required parameter 'orderInvoiceTemplateLineItemDescriptionEnumId' is set
      if (orderInvoiceTemplateLineItemDescriptionEnumId == undefined || orderInvoiceTemplateLineItemDescriptionEnumId == null) {
        throw "Missing the required parameter 'orderInvoiceTemplateLineItemDescriptionEnumId' when calling getOrderInvoiceTemplateLineItemDescriptionEnumById";
      }


      var pathParams = {
        'orderInvoiceTemplateLineItemDescriptionEnumId': orderInvoiceTemplateLineItemDescriptionEnumId
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
      var returnType = OrderInvoiceTemplateLineItemDescriptionEnum;

      return this.apiClient.callApi(
        '/beta/orderInvoiceTemplateLineItemDescriptionEnum/{orderInvoiceTemplateLineItemDescriptionEnumId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText operation.
     * @callback module:api/OrderInvoiceTemplateLineItemDescriptionEnumApi~getOrderInvoiceTemplateLineItemDescriptionEnumBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderInvoiceTemplateLineItemDescriptionEnum>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search orderInvoiceTemplateLineItemDescriptionEnums
     * Returns the list of orderInvoiceTemplateLineItemDescriptionEnums that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/OrderInvoiceTemplateLineItemDescriptionEnumApi~getOrderInvoiceTemplateLineItemDescriptionEnumBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/OrderInvoiceTemplateLineItemDescriptionEnum>}
     */
    this.getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [OrderInvoiceTemplateLineItemDescriptionEnum];

      return this.apiClient.callApi(
        '/beta/orderInvoiceTemplateLineItemDescriptionEnum/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
