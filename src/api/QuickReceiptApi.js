(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/QuickReceipt', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/QuickReceipt'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.QuickReceiptApi = factory(root.infoplus.ApiClient, root.infoplus.QuickReceipt, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, QuickReceipt, ApiResponse) {
  'use strict';

  /**
   * QuickReceipt service.
   * @module api/QuickReceiptApi
   * @version beta
   */

  /**
   * Constructs a new QuickReceiptApi. 
   * @alias module:api/QuickReceiptApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addQuickReceipt operation.
     * @callback module:api/QuickReceiptApi~addQuickReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuickReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a quickReceipt
     * Inserts a new quickReceipt using the specified data.
     * @param {module:model/QuickReceipt} body QuickReceipt to be inserted.
     * @param {module:api/QuickReceiptApi~addQuickReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QuickReceipt}
     */
    this.addQuickReceipt = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addQuickReceipt";
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
      var returnType = QuickReceipt;

      return this.apiClient.callApi(
        '/beta/quickReceipt', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addQuickReceiptAudit operation.
     * @callback module:api/QuickReceiptApi~addQuickReceiptAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a quickReceipt
     * Adds an audit to an existing quickReceipt.
     * @param {Integer} quickReceiptId Id of the quickReceipt to add an audit to
     * @param {String} quickReceiptAudit The audit to add
     * @param {module:api/QuickReceiptApi~addQuickReceiptAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addQuickReceiptAudit = function(quickReceiptId, quickReceiptAudit, callback) {
      var postBody = null;

      // verify the required parameter 'quickReceiptId' is set
      if (quickReceiptId == undefined || quickReceiptId == null) {
        throw "Missing the required parameter 'quickReceiptId' when calling addQuickReceiptAudit";
      }

      // verify the required parameter 'quickReceiptAudit' is set
      if (quickReceiptAudit == undefined || quickReceiptAudit == null) {
        throw "Missing the required parameter 'quickReceiptAudit' when calling addQuickReceiptAudit";
      }


      var pathParams = {
        'quickReceiptId': quickReceiptId,
        'quickReceiptAudit': quickReceiptAudit
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
        '/beta/quickReceipt/{quickReceiptId}/audit/{quickReceiptAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addQuickReceiptTag operation.
     * @callback module:api/QuickReceiptApi~addQuickReceiptTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a quickReceipt.
     * Adds a tag to an existing quickReceipt.
     * @param {Integer} quickReceiptId Id of the quickReceipt to add a tag to
     * @param {String} quickReceiptTag The tag to add
     * @param {module:api/QuickReceiptApi~addQuickReceiptTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addQuickReceiptTag = function(quickReceiptId, quickReceiptTag, callback) {
      var postBody = null;

      // verify the required parameter 'quickReceiptId' is set
      if (quickReceiptId == undefined || quickReceiptId == null) {
        throw "Missing the required parameter 'quickReceiptId' when calling addQuickReceiptTag";
      }

      // verify the required parameter 'quickReceiptTag' is set
      if (quickReceiptTag == undefined || quickReceiptTag == null) {
        throw "Missing the required parameter 'quickReceiptTag' when calling addQuickReceiptTag";
      }


      var pathParams = {
        'quickReceiptId': quickReceiptId,
        'quickReceiptTag': quickReceiptTag
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
        '/beta/quickReceipt/{quickReceiptId}/tag/{quickReceiptTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteQuickReceipt operation.
     * @callback module:api/QuickReceiptApi~deleteQuickReceiptCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a quickReceipt
     * Deletes the quickReceipt identified by the specified id.
     * @param {Integer} quickReceiptId Id of the quickReceipt to be deleted.
     * @param {module:api/QuickReceiptApi~deleteQuickReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteQuickReceipt = function(quickReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'quickReceiptId' is set
      if (quickReceiptId == undefined || quickReceiptId == null) {
        throw "Missing the required parameter 'quickReceiptId' when calling deleteQuickReceipt";
      }


      var pathParams = {
        'quickReceiptId': quickReceiptId
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
        '/beta/quickReceipt/{quickReceiptId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteQuickReceiptTag operation.
     * @callback module:api/QuickReceiptApi~deleteQuickReceiptTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a quickReceipt.
     * Deletes an existing quickReceipt tag using the specified data.
     * @param {Integer} quickReceiptId Id of the quickReceipt to remove tag from
     * @param {String} quickReceiptTag The tag to delete
     * @param {module:api/QuickReceiptApi~deleteQuickReceiptTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteQuickReceiptTag = function(quickReceiptId, quickReceiptTag, callback) {
      var postBody = null;

      // verify the required parameter 'quickReceiptId' is set
      if (quickReceiptId == undefined || quickReceiptId == null) {
        throw "Missing the required parameter 'quickReceiptId' when calling deleteQuickReceiptTag";
      }

      // verify the required parameter 'quickReceiptTag' is set
      if (quickReceiptTag == undefined || quickReceiptTag == null) {
        throw "Missing the required parameter 'quickReceiptTag' when calling deleteQuickReceiptTag";
      }


      var pathParams = {
        'quickReceiptId': quickReceiptId,
        'quickReceiptTag': quickReceiptTag
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
        '/beta/quickReceipt/{quickReceiptId}/tag/{quickReceiptTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateQuickReceiptById operation.
     * @callback module:api/QuickReceiptApi~getDuplicateQuickReceiptByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuickReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a quickReceipt by id
     * Returns a duplicated quickReceipt identified by the specified id.
     * @param {Integer} quickReceiptId Id of the quickReceipt to be duplicated.
     * @param {module:api/QuickReceiptApi~getDuplicateQuickReceiptByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QuickReceipt}
     */
    this.getDuplicateQuickReceiptById = function(quickReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'quickReceiptId' is set
      if (quickReceiptId == undefined || quickReceiptId == null) {
        throw "Missing the required parameter 'quickReceiptId' when calling getDuplicateQuickReceiptById";
      }


      var pathParams = {
        'quickReceiptId': quickReceiptId
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
      var returnType = QuickReceipt;

      return this.apiClient.callApi(
        '/beta/quickReceipt/duplicate/{quickReceiptId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuickReceiptByFilter operation.
     * @callback module:api/QuickReceiptApi~getQuickReceiptByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuickReceipt>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search quickReceipts by filter
     * Returns the list of quickReceipts that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/QuickReceiptApi~getQuickReceiptByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/QuickReceipt>}
     */
    this.getQuickReceiptByFilter = function(opts, callback) {
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
      var returnType = [QuickReceipt];

      return this.apiClient.callApi(
        '/beta/quickReceipt/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuickReceiptById operation.
     * @callback module:api/QuickReceiptApi~getQuickReceiptByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuickReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a quickReceipt by id
     * Returns the quickReceipt identified by the specified id.
     * @param {Integer} quickReceiptId Id of the quickReceipt to be returned.
     * @param {module:api/QuickReceiptApi~getQuickReceiptByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QuickReceipt}
     */
    this.getQuickReceiptById = function(quickReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'quickReceiptId' is set
      if (quickReceiptId == undefined || quickReceiptId == null) {
        throw "Missing the required parameter 'quickReceiptId' when calling getQuickReceiptById";
      }


      var pathParams = {
        'quickReceiptId': quickReceiptId
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
      var returnType = QuickReceipt;

      return this.apiClient.callApi(
        '/beta/quickReceipt/{quickReceiptId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuickReceiptTags operation.
     * @callback module:api/QuickReceiptApi~getQuickReceiptTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a quickReceipt.
     * Get all existing quickReceipt tags.
     * @param {Integer} quickReceiptId Id of the quickReceipt to get tags for
     * @param {module:api/QuickReceiptApi~getQuickReceiptTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getQuickReceiptTags = function(quickReceiptId, callback) {
      var postBody = null;

      // verify the required parameter 'quickReceiptId' is set
      if (quickReceiptId == undefined || quickReceiptId == null) {
        throw "Missing the required parameter 'quickReceiptId' when calling getQuickReceiptTags";
      }


      var pathParams = {
        'quickReceiptId': quickReceiptId
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
        '/beta/quickReceipt/{quickReceiptId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateQuickReceipt operation.
     * @callback module:api/QuickReceiptApi~updateQuickReceiptCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a quickReceipt
     * Updates an existing quickReceipt using the specified data.
     * @param {module:model/QuickReceipt} body QuickReceipt to be updated.
     * @param {module:api/QuickReceiptApi~updateQuickReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateQuickReceipt = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateQuickReceipt";
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
        '/beta/quickReceipt', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateQuickReceiptCustomFields operation.
     * @callback module:api/QuickReceiptApi~updateQuickReceiptCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a quickReceipt custom fields
     * Updates an existing quickReceipt custom fields using the specified data.
     * @param {module:model/QuickReceipt} body QuickReceipt to be updated.
     * @param {module:api/QuickReceiptApi~updateQuickReceiptCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateQuickReceiptCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateQuickReceiptCustomFields";
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
        '/beta/quickReceipt/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
