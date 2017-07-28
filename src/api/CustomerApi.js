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
   * @version beta
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
        '/beta/customer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomerAudit operation.
     * @callback module:api/CustomerApi~addCustomerAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a customer
     * Adds an audit to an existing customer.
     * @param {Integer} customerId Id of the customer to add an audit to
     * @param {String} customerAudit The audit to add
     * @param {module:api/CustomerApi~addCustomerAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomerAudit = function(customerId, customerAudit, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling addCustomerAudit";
      }

      // verify the required parameter 'customerAudit' is set
      if (customerAudit == undefined || customerAudit == null) {
        throw "Missing the required parameter 'customerAudit' when calling addCustomerAudit";
      }


      var pathParams = {
        'customerId': customerId,
        'customerAudit': customerAudit
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
        '/beta/customer/{customerId}/audit/{customerAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomerTag operation.
     * @callback module:api/CustomerApi~addCustomerTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a customer.
     * Adds a tag to an existing customer.
     * @param {Integer} customerId Id of the customer to add a tag to
     * @param {String} customerTag The tag to add
     * @param {module:api/CustomerApi~addCustomerTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomerTag = function(customerId, customerTag, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling addCustomerTag";
      }

      // verify the required parameter 'customerTag' is set
      if (customerTag == undefined || customerTag == null) {
        throw "Missing the required parameter 'customerTag' when calling addCustomerTag";
      }


      var pathParams = {
        'customerId': customerId,
        'customerTag': customerTag
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
        '/beta/customer/{customerId}/tag/{customerTag}', 'PUT',
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
        '/beta/customer/{customerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomerTag operation.
     * @callback module:api/CustomerApi~deleteCustomerTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a customer.
     * Deletes an existing customer tag using the specified data.
     * @param {Integer} customerId Id of the customer to remove tag from
     * @param {String} customerTag The tag to delete
     * @param {module:api/CustomerApi~deleteCustomerTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerTag = function(customerId, customerTag, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling deleteCustomerTag";
      }

      // verify the required parameter 'customerTag' is set
      if (customerTag == undefined || customerTag == null) {
        throw "Missing the required parameter 'customerTag' when calling deleteCustomerTag";
      }


      var pathParams = {
        'customerId': customerId,
        'customerTag': customerTag
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
        '/beta/customer/{customerId}/tag/{customerTag}', 'DELETE',
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
        '/beta/customer/getByCustomerNo', 'GET',
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
        '/beta/customer/search', 'GET',
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
        '/beta/customer/{customerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerTags operation.
     * @callback module:api/CustomerApi~getCustomerTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a customer.
     * Get all existing customer tags.
     * @param {Integer} customerId Id of the customer to get tags for
     * @param {module:api/CustomerApi~getCustomerTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCustomerTags = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling getCustomerTags";
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
        '/beta/customer/{customerId}/tag', 'GET',
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
        '/beta/customer/duplicate/{customerId}', 'GET',
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
        '/beta/customer', 'PUT',
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
        '/beta/customer/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
