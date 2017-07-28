(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InvoiceWorksheetLine', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InvoiceWorksheetLine'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InvoiceWorksheetLineApi = factory(root.infoplus.ApiClient, root.infoplus.InvoiceWorksheetLine, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, InvoiceWorksheetLine, ApiResponse) {
  'use strict';

  /**
   * InvoiceWorksheetLine service.
   * @module api/InvoiceWorksheetLineApi
   * @version beta
   */

  /**
   * Constructs a new InvoiceWorksheetLineApi. 
   * @alias module:api/InvoiceWorksheetLineApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInvoiceWorksheetLine operation.
     * @callback module:api/InvoiceWorksheetLineApi~addInvoiceWorksheetLineCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheetLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an invoiceWorksheetLine
     * Inserts a new invoiceWorksheetLine using the specified data.
     * @param {module:model/InvoiceWorksheetLine} body InvoiceWorksheetLine to be inserted.
     * @param {module:api/InvoiceWorksheetLineApi~addInvoiceWorksheetLineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InvoiceWorksheetLine}
     */
    this.addInvoiceWorksheetLine = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addInvoiceWorksheetLine";
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
      var returnType = InvoiceWorksheetLine;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheetLine', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInvoiceWorksheetLineAudit operation.
     * @callback module:api/InvoiceWorksheetLineApi~addInvoiceWorksheetLineAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an invoiceWorksheetLine
     * Adds an audit to an existing invoiceWorksheetLine.
     * @param {Integer} invoiceWorksheetLineId Id of the invoiceWorksheetLine to add an audit to
     * @param {String} invoiceWorksheetLineAudit The audit to add
     * @param {module:api/InvoiceWorksheetLineApi~addInvoiceWorksheetLineAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInvoiceWorksheetLineAudit = function(invoiceWorksheetLineId, invoiceWorksheetLineAudit, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineId' is set
      if (invoiceWorksheetLineId == undefined || invoiceWorksheetLineId == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineId' when calling addInvoiceWorksheetLineAudit";
      }

      // verify the required parameter 'invoiceWorksheetLineAudit' is set
      if (invoiceWorksheetLineAudit == undefined || invoiceWorksheetLineAudit == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineAudit' when calling addInvoiceWorksheetLineAudit";
      }


      var pathParams = {
        'invoiceWorksheetLineId': invoiceWorksheetLineId,
        'invoiceWorksheetLineAudit': invoiceWorksheetLineAudit
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
        '/beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/audit/{invoiceWorksheetLineAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInvoiceWorksheetLineTag operation.
     * @callback module:api/InvoiceWorksheetLineApi~addInvoiceWorksheetLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an invoiceWorksheetLine.
     * Adds a tag to an existing invoiceWorksheetLine.
     * @param {Integer} invoiceWorksheetLineId Id of the invoiceWorksheetLine to add a tag to
     * @param {String} invoiceWorksheetLineTag The tag to add
     * @param {module:api/InvoiceWorksheetLineApi~addInvoiceWorksheetLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInvoiceWorksheetLineTag = function(invoiceWorksheetLineId, invoiceWorksheetLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineId' is set
      if (invoiceWorksheetLineId == undefined || invoiceWorksheetLineId == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineId' when calling addInvoiceWorksheetLineTag";
      }

      // verify the required parameter 'invoiceWorksheetLineTag' is set
      if (invoiceWorksheetLineTag == undefined || invoiceWorksheetLineTag == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineTag' when calling addInvoiceWorksheetLineTag";
      }


      var pathParams = {
        'invoiceWorksheetLineId': invoiceWorksheetLineId,
        'invoiceWorksheetLineTag': invoiceWorksheetLineTag
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
        '/beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/tag/{invoiceWorksheetLineTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInvoiceWorksheetLine operation.
     * @callback module:api/InvoiceWorksheetLineApi~deleteInvoiceWorksheetLineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an invoiceWorksheetLine
     * Deletes the invoiceWorksheetLine identified by the specified id.
     * @param {Integer} invoiceWorksheetLineId Id of the invoiceWorksheetLine to be deleted.
     * @param {module:api/InvoiceWorksheetLineApi~deleteInvoiceWorksheetLineCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInvoiceWorksheetLine = function(invoiceWorksheetLineId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineId' is set
      if (invoiceWorksheetLineId == undefined || invoiceWorksheetLineId == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineId' when calling deleteInvoiceWorksheetLine";
      }


      var pathParams = {
        'invoiceWorksheetLineId': invoiceWorksheetLineId
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
        '/beta/invoiceWorksheetLine/{invoiceWorksheetLineId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInvoiceWorksheetLineTag operation.
     * @callback module:api/InvoiceWorksheetLineApi~deleteInvoiceWorksheetLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an invoiceWorksheetLine.
     * Deletes an existing invoiceWorksheetLine tag using the specified data.
     * @param {Integer} invoiceWorksheetLineId Id of the invoiceWorksheetLine to remove tag from
     * @param {String} invoiceWorksheetLineTag The tag to delete
     * @param {module:api/InvoiceWorksheetLineApi~deleteInvoiceWorksheetLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInvoiceWorksheetLineTag = function(invoiceWorksheetLineId, invoiceWorksheetLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineId' is set
      if (invoiceWorksheetLineId == undefined || invoiceWorksheetLineId == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineId' when calling deleteInvoiceWorksheetLineTag";
      }

      // verify the required parameter 'invoiceWorksheetLineTag' is set
      if (invoiceWorksheetLineTag == undefined || invoiceWorksheetLineTag == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineTag' when calling deleteInvoiceWorksheetLineTag";
      }


      var pathParams = {
        'invoiceWorksheetLineId': invoiceWorksheetLineId,
        'invoiceWorksheetLineTag': invoiceWorksheetLineTag
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
        '/beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/tag/{invoiceWorksheetLineTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInvoiceWorksheetLineById operation.
     * @callback module:api/InvoiceWorksheetLineApi~getDuplicateInvoiceWorksheetLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheetLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an invoiceWorksheetLine by id
     * Returns a duplicated invoiceWorksheetLine identified by the specified id.
     * @param {Integer} invoiceWorksheetLineId Id of the invoiceWorksheetLine to be duplicated.
     * @param {module:api/InvoiceWorksheetLineApi~getDuplicateInvoiceWorksheetLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InvoiceWorksheetLine}
     */
    this.getDuplicateInvoiceWorksheetLineById = function(invoiceWorksheetLineId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineId' is set
      if (invoiceWorksheetLineId == undefined || invoiceWorksheetLineId == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineId' when calling getDuplicateInvoiceWorksheetLineById";
      }


      var pathParams = {
        'invoiceWorksheetLineId': invoiceWorksheetLineId
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
      var returnType = InvoiceWorksheetLine;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheetLine/duplicate/{invoiceWorksheetLineId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetLineByFilter operation.
     * @callback module:api/InvoiceWorksheetLineApi~getInvoiceWorksheetLineByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InvoiceWorksheetLine>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search invoiceWorksheetLines by filter
     * Returns the list of invoiceWorksheetLines that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InvoiceWorksheetLineApi~getInvoiceWorksheetLineByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InvoiceWorksheetLine>}
     */
    this.getInvoiceWorksheetLineByFilter = function(opts, callback) {
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
      var returnType = [InvoiceWorksheetLine];

      return this.apiClient.callApi(
        '/beta/invoiceWorksheetLine/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetLineById operation.
     * @callback module:api/InvoiceWorksheetLineApi~getInvoiceWorksheetLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheetLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an invoiceWorksheetLine by id
     * Returns the invoiceWorksheetLine identified by the specified id.
     * @param {Integer} invoiceWorksheetLineId Id of the invoiceWorksheetLine to be returned.
     * @param {module:api/InvoiceWorksheetLineApi~getInvoiceWorksheetLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InvoiceWorksheetLine}
     */
    this.getInvoiceWorksheetLineById = function(invoiceWorksheetLineId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineId' is set
      if (invoiceWorksheetLineId == undefined || invoiceWorksheetLineId == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineId' when calling getInvoiceWorksheetLineById";
      }


      var pathParams = {
        'invoiceWorksheetLineId': invoiceWorksheetLineId
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
      var returnType = InvoiceWorksheetLine;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheetLine/{invoiceWorksheetLineId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetLineTags operation.
     * @callback module:api/InvoiceWorksheetLineApi~getInvoiceWorksheetLineTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an invoiceWorksheetLine.
     * Get all existing invoiceWorksheetLine tags.
     * @param {Integer} invoiceWorksheetLineId Id of the invoiceWorksheetLine to get tags for
     * @param {module:api/InvoiceWorksheetLineApi~getInvoiceWorksheetLineTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInvoiceWorksheetLineTags = function(invoiceWorksheetLineId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineId' is set
      if (invoiceWorksheetLineId == undefined || invoiceWorksheetLineId == null) {
        throw "Missing the required parameter 'invoiceWorksheetLineId' when calling getInvoiceWorksheetLineTags";
      }


      var pathParams = {
        'invoiceWorksheetLineId': invoiceWorksheetLineId
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
        '/beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInvoiceWorksheetLine operation.
     * @callback module:api/InvoiceWorksheetLineApi~updateInvoiceWorksheetLineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an invoiceWorksheetLine
     * Updates an existing invoiceWorksheetLine using the specified data.
     * @param {module:model/InvoiceWorksheetLine} body InvoiceWorksheetLine to be updated.
     * @param {module:api/InvoiceWorksheetLineApi~updateInvoiceWorksheetLineCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInvoiceWorksheetLine = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateInvoiceWorksheetLine";
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
        '/beta/invoiceWorksheetLine', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
