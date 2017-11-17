(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Customer', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Customer'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CustomerApi = factory(root.infoplus.ApiClient, root.infoplus.Customer, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Customer, ApiResponse) {
  'use strict';

  /**
   * Customer service.
   * @module api/CustomerApi
   * @version v2.0
   */

  /**
   * Constructs a new CustomerApi. 
   * @alias module:api/CustomerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCustomer operation.
     * @callback module:api/CustomerApi~addCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a customer
     * Inserts a new customer using the specified data.
     * @param {module:model/Customer} body Customer to be inserted.
     * @param {module:api/CustomerApi~addCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Customer}
     */
    this.addCustomer = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCustomer";
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
      var returnType = Customer;

      return this.apiClient.callApi(
        '/v2.0/customer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomer operation.
     * @callback module:api/CustomerApi~deleteCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customer
     * Deletes the customer identified by the specified id.
     * @param {Integer} customerId Id of the customer to be deleted.
     * @param {module:api/CustomerApi~deleteCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomer = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling deleteCustomer";
      }


      var pathParams = {
        'customerId': customerId
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
        '/v2.0/customer/{customerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getByCustomerNo operation.
     * @callback module:api/CustomerApi~getByCustomerNoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a customer by Customer No
     * Returns the customer identified by the specified parameters.
     * @param {Integer} lobId lobId of the customer to be returned.
     * @param {String} customerNo customerNo of the customer to be returned.
     * @param {module:api/CustomerApi~getByCustomerNoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Customer}
     */
    this.getByCustomerNo = function(lobId, customerNo, callback) {
      var postBody = null;

      // verify the required parameter 'lobId' is set
      if (lobId == undefined || lobId == null) {
        throw "Missing the required parameter 'lobId' when calling getByCustomerNo";
      }

      // verify the required parameter 'customerNo' is set
      if (customerNo == undefined || customerNo == null) {
        throw "Missing the required parameter 'customerNo' when calling getByCustomerNo";
      }


      var pathParams = {
      };
      var queryParams = {
        'lobId': lobId,
        'customerNo': customerNo
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Customer;

      return this.apiClient.callApi(
        '/v2.0/customer/getByCustomerNo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerByFilter operation.
     * @callback module:api/CustomerApi~getCustomerByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Customer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search customers by filter
     * Returns the list of customers that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CustomerApi~getCustomerByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Customer>}
     */
    this.getCustomerByFilter = function(opts, callback) {
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
      var returnType = [Customer];

      return this.apiClient.callApi(
        '/v2.0/customer/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerById operation.
     * @callback module:api/CustomerApi~getCustomerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a customer by id
     * Returns the customer identified by the specified id.
     * @param {Integer} customerId Id of the customer to be returned.
     * @param {module:api/CustomerApi~getCustomerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Customer}
     */
    this.getCustomerById = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling getCustomerById";
      }


      var pathParams = {
        'customerId': customerId
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
      var returnType = Customer;

      return this.apiClient.callApi(
        '/v2.0/customer/{customerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCustomerById operation.
     * @callback module:api/CustomerApi~getDuplicateCustomerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a customer by id
     * Returns a duplicated customer identified by the specified id.
     * @param {Integer} customerId Id of the customer to be duplicated.
     * @param {module:api/CustomerApi~getDuplicateCustomerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Customer}
     */
    this.getDuplicateCustomerById = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling getDuplicateCustomerById";
      }


      var pathParams = {
        'customerId': customerId
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
      var returnType = Customer;

      return this.apiClient.callApi(
        '/v2.0/customer/duplicate/{customerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomer operation.
     * @callback module:api/CustomerApi~updateCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customer
     * Updates an existing customer using the specified data.
     * @param {module:model/Customer} body Customer to be updated.
     * @param {module:api/CustomerApi~updateCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCustomer = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCustomer";
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
        '/v2.0/customer', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomerCustomFields operation.
     * @callback module:api/CustomerApi~updateCustomerCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customer custom fields
     * Updates an existing customer custom fields using the specified data.
     * @param {module:model/Customer} body Customer to be updated.
     * @param {module:api/CustomerApi~updateCustomerCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCustomerCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCustomerCustomFields";
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
        '/v2.0/customer/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
