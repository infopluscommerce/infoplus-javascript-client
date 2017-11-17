(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CustomerInvoiceTemplate', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerInvoiceTemplate'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CustomerInvoiceTemplateApi = factory(root.infoplus.ApiClient, root.infoplus.CustomerInvoiceTemplate, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, CustomerInvoiceTemplate, ApiResponse) {
  'use strict';

  /**
   * CustomerInvoiceTemplate service.
   * @module api/CustomerInvoiceTemplateApi
   * @version beta
   */

  /**
   * Constructs a new CustomerInvoiceTemplateApi. 
   * @alias module:api/CustomerInvoiceTemplateApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCustomerInvoiceTemplate operation.
     * @callback module:api/CustomerInvoiceTemplateApi~addCustomerInvoiceTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerInvoiceTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a customerInvoiceTemplate
     * Inserts a new customerInvoiceTemplate using the specified data.
     * @param {module:model/CustomerInvoiceTemplate} body CustomerInvoiceTemplate to be inserted.
     * @param {module:api/CustomerInvoiceTemplateApi~addCustomerInvoiceTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CustomerInvoiceTemplate}
     */
    this.addCustomerInvoiceTemplate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addCustomerInvoiceTemplate";
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
      var returnType = CustomerInvoiceTemplate;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomerInvoiceTemplateAudit operation.
     * @callback module:api/CustomerInvoiceTemplateApi~addCustomerInvoiceTemplateAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a customerInvoiceTemplate
     * Adds an audit to an existing customerInvoiceTemplate.
     * @param {Integer} customerInvoiceTemplateId Id of the customerInvoiceTemplate to add an audit to
     * @param {String} customerInvoiceTemplateAudit The audit to add
     * @param {module:api/CustomerInvoiceTemplateApi~addCustomerInvoiceTemplateAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomerInvoiceTemplateAudit = function(customerInvoiceTemplateId, customerInvoiceTemplateAudit, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateId' is set
      if (customerInvoiceTemplateId == undefined || customerInvoiceTemplateId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateId' when calling addCustomerInvoiceTemplateAudit";
      }

      // verify the required parameter 'customerInvoiceTemplateAudit' is set
      if (customerInvoiceTemplateAudit == undefined || customerInvoiceTemplateAudit == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateAudit' when calling addCustomerInvoiceTemplateAudit";
      }


      var pathParams = {
        'customerInvoiceTemplateId': customerInvoiceTemplateId,
        'customerInvoiceTemplateAudit': customerInvoiceTemplateAudit
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
        '/beta/customerInvoiceTemplate/{customerInvoiceTemplateId}/audit/{customerInvoiceTemplateAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomerInvoiceTemplateTag operation.
     * @callback module:api/CustomerInvoiceTemplateApi~addCustomerInvoiceTemplateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a customerInvoiceTemplate.
     * Adds a tag to an existing customerInvoiceTemplate.
     * @param {Integer} customerInvoiceTemplateId Id of the customerInvoiceTemplate to add a tag to
     * @param {String} customerInvoiceTemplateTag The tag to add
     * @param {module:api/CustomerInvoiceTemplateApi~addCustomerInvoiceTemplateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomerInvoiceTemplateTag = function(customerInvoiceTemplateId, customerInvoiceTemplateTag, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateId' is set
      if (customerInvoiceTemplateId == undefined || customerInvoiceTemplateId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateId' when calling addCustomerInvoiceTemplateTag";
      }

      // verify the required parameter 'customerInvoiceTemplateTag' is set
      if (customerInvoiceTemplateTag == undefined || customerInvoiceTemplateTag == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateTag' when calling addCustomerInvoiceTemplateTag";
      }


      var pathParams = {
        'customerInvoiceTemplateId': customerInvoiceTemplateId,
        'customerInvoiceTemplateTag': customerInvoiceTemplateTag
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
        '/beta/customerInvoiceTemplate/{customerInvoiceTemplateId}/tag/{customerInvoiceTemplateTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomerInvoiceTemplate operation.
     * @callback module:api/CustomerInvoiceTemplateApi~deleteCustomerInvoiceTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customerInvoiceTemplate
     * Deletes the customerInvoiceTemplate identified by the specified id.
     * @param {Integer} customerInvoiceTemplateId Id of the customerInvoiceTemplate to be deleted.
     * @param {module:api/CustomerInvoiceTemplateApi~deleteCustomerInvoiceTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerInvoiceTemplate = function(customerInvoiceTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateId' is set
      if (customerInvoiceTemplateId == undefined || customerInvoiceTemplateId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateId' when calling deleteCustomerInvoiceTemplate";
      }


      var pathParams = {
        'customerInvoiceTemplateId': customerInvoiceTemplateId
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
        '/beta/customerInvoiceTemplate/{customerInvoiceTemplateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomerInvoiceTemplateTag operation.
     * @callback module:api/CustomerInvoiceTemplateApi~deleteCustomerInvoiceTemplateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a customerInvoiceTemplate.
     * Deletes an existing customerInvoiceTemplate tag using the specified data.
     * @param {Integer} customerInvoiceTemplateId Id of the customerInvoiceTemplate to remove tag from
     * @param {String} customerInvoiceTemplateTag The tag to delete
     * @param {module:api/CustomerInvoiceTemplateApi~deleteCustomerInvoiceTemplateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerInvoiceTemplateTag = function(customerInvoiceTemplateId, customerInvoiceTemplateTag, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateId' is set
      if (customerInvoiceTemplateId == undefined || customerInvoiceTemplateId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateId' when calling deleteCustomerInvoiceTemplateTag";
      }

      // verify the required parameter 'customerInvoiceTemplateTag' is set
      if (customerInvoiceTemplateTag == undefined || customerInvoiceTemplateTag == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateTag' when calling deleteCustomerInvoiceTemplateTag";
      }


      var pathParams = {
        'customerInvoiceTemplateId': customerInvoiceTemplateId,
        'customerInvoiceTemplateTag': customerInvoiceTemplateTag
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
        '/beta/customerInvoiceTemplate/{customerInvoiceTemplateId}/tag/{customerInvoiceTemplateTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerInvoiceTemplateByFilter operation.
     * @callback module:api/CustomerInvoiceTemplateApi~getCustomerInvoiceTemplateByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerInvoiceTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search customerInvoiceTemplates by filter
     * Returns the list of customerInvoiceTemplates that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CustomerInvoiceTemplateApi~getCustomerInvoiceTemplateByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CustomerInvoiceTemplate>}
     */
    this.getCustomerInvoiceTemplateByFilter = function(opts, callback) {
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
      var returnType = [CustomerInvoiceTemplate];

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplate/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerInvoiceTemplateById operation.
     * @callback module:api/CustomerInvoiceTemplateApi~getCustomerInvoiceTemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerInvoiceTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a customerInvoiceTemplate by id
     * Returns the customerInvoiceTemplate identified by the specified id.
     * @param {Integer} customerInvoiceTemplateId Id of the customerInvoiceTemplate to be returned.
     * @param {module:api/CustomerInvoiceTemplateApi~getCustomerInvoiceTemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CustomerInvoiceTemplate}
     */
    this.getCustomerInvoiceTemplateById = function(customerInvoiceTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateId' is set
      if (customerInvoiceTemplateId == undefined || customerInvoiceTemplateId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateId' when calling getCustomerInvoiceTemplateById";
      }


      var pathParams = {
        'customerInvoiceTemplateId': customerInvoiceTemplateId
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
      var returnType = CustomerInvoiceTemplate;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplate/{customerInvoiceTemplateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerInvoiceTemplateTags operation.
     * @callback module:api/CustomerInvoiceTemplateApi~getCustomerInvoiceTemplateTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a customerInvoiceTemplate.
     * Get all existing customerInvoiceTemplate tags.
     * @param {Integer} customerInvoiceTemplateId Id of the customerInvoiceTemplate to get tags for
     * @param {module:api/CustomerInvoiceTemplateApi~getCustomerInvoiceTemplateTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCustomerInvoiceTemplateTags = function(customerInvoiceTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateId' is set
      if (customerInvoiceTemplateId == undefined || customerInvoiceTemplateId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateId' when calling getCustomerInvoiceTemplateTags";
      }


      var pathParams = {
        'customerInvoiceTemplateId': customerInvoiceTemplateId
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
        '/beta/customerInvoiceTemplate/{customerInvoiceTemplateId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCustomerInvoiceTemplateById operation.
     * @callback module:api/CustomerInvoiceTemplateApi~getDuplicateCustomerInvoiceTemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerInvoiceTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a customerInvoiceTemplate by id
     * Returns a duplicated customerInvoiceTemplate identified by the specified id.
     * @param {Integer} customerInvoiceTemplateId Id of the customerInvoiceTemplate to be duplicated.
     * @param {module:api/CustomerInvoiceTemplateApi~getDuplicateCustomerInvoiceTemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CustomerInvoiceTemplate}
     */
    this.getDuplicateCustomerInvoiceTemplateById = function(customerInvoiceTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateId' is set
      if (customerInvoiceTemplateId == undefined || customerInvoiceTemplateId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateId' when calling getDuplicateCustomerInvoiceTemplateById";
      }


      var pathParams = {
        'customerInvoiceTemplateId': customerInvoiceTemplateId
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
      var returnType = CustomerInvoiceTemplate;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplate/duplicate/{customerInvoiceTemplateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomerInvoiceTemplate operation.
     * @callback module:api/CustomerInvoiceTemplateApi~updateCustomerInvoiceTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customerInvoiceTemplate
     * Updates an existing customerInvoiceTemplate using the specified data.
     * @param {module:model/CustomerInvoiceTemplate} body CustomerInvoiceTemplate to be updated.
     * @param {module:api/CustomerInvoiceTemplateApi~updateCustomerInvoiceTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCustomerInvoiceTemplate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCustomerInvoiceTemplate";
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
        '/beta/customerInvoiceTemplate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
