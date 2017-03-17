(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/QuickAdjustment', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/QuickAdjustment'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.QuickAdjustmentApi = factory(root.infoplus.ApiClient, root.infoplus.QuickAdjustment, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, QuickAdjustment, ApiResponse) {
  'use strict';

  /**
   * QuickAdjustment service.
   * @module api/QuickAdjustmentApi
   * @version beta
   */

  /**
   * Constructs a new QuickAdjustmentApi. 
   * @alias module:api/QuickAdjustmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addQuickAdjustment operation.
     * @callback module:api/QuickAdjustmentApi~addQuickAdjustmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuickAdjustment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a quickAdjustment
     * Inserts a new quickAdjustment using the specified data.
     * @param {module:model/QuickAdjustment} body QuickAdjustment to be inserted.
     * @param {module:api/QuickAdjustmentApi~addQuickAdjustmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QuickAdjustment}
     */
    this.addQuickAdjustment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addQuickAdjustment";
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
      var returnType = QuickAdjustment;

      return this.apiClient.callApi(
        '/beta/quickAdjustment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addQuickAdjustmentAudit operation.
     * @callback module:api/QuickAdjustmentApi~addQuickAdjustmentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a quickAdjustment
     * Adds an audit to an existing quickAdjustment.
     * @param {Integer} quickAdjustmentId Id of the quickAdjustment to add an audit to
     * @param {String} quickAdjustmentAudit The audit to add
     * @param {module:api/QuickAdjustmentApi~addQuickAdjustmentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addQuickAdjustmentAudit = function(quickAdjustmentId, quickAdjustmentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'quickAdjustmentId' is set
      if (quickAdjustmentId == undefined || quickAdjustmentId == null) {
        throw "Missing the required parameter 'quickAdjustmentId' when calling addQuickAdjustmentAudit";
      }

      // verify the required parameter 'quickAdjustmentAudit' is set
      if (quickAdjustmentAudit == undefined || quickAdjustmentAudit == null) {
        throw "Missing the required parameter 'quickAdjustmentAudit' when calling addQuickAdjustmentAudit";
      }


      var pathParams = {
        'quickAdjustmentId': quickAdjustmentId,
        'quickAdjustmentAudit': quickAdjustmentAudit
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
        '/beta/quickAdjustment/{quickAdjustmentId}/audit/{quickAdjustmentAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addQuickAdjustmentTag operation.
     * @callback module:api/QuickAdjustmentApi~addQuickAdjustmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a quickAdjustment.
     * Adds a tag to an existing quickAdjustment.
     * @param {Integer} quickAdjustmentId Id of the quickAdjustment to add a tag to
     * @param {String} quickAdjustmentTag The tag to add
     * @param {module:api/QuickAdjustmentApi~addQuickAdjustmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addQuickAdjustmentTag = function(quickAdjustmentId, quickAdjustmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'quickAdjustmentId' is set
      if (quickAdjustmentId == undefined || quickAdjustmentId == null) {
        throw "Missing the required parameter 'quickAdjustmentId' when calling addQuickAdjustmentTag";
      }

      // verify the required parameter 'quickAdjustmentTag' is set
      if (quickAdjustmentTag == undefined || quickAdjustmentTag == null) {
        throw "Missing the required parameter 'quickAdjustmentTag' when calling addQuickAdjustmentTag";
      }


      var pathParams = {
        'quickAdjustmentId': quickAdjustmentId,
        'quickAdjustmentTag': quickAdjustmentTag
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
        '/beta/quickAdjustment/{quickAdjustmentId}/tag/{quickAdjustmentTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteQuickAdjustment operation.
     * @callback module:api/QuickAdjustmentApi~deleteQuickAdjustmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a quickAdjustment
     * Deletes the quickAdjustment identified by the specified id.
     * @param {Integer} quickAdjustmentId Id of the quickAdjustment to be deleted.
     * @param {module:api/QuickAdjustmentApi~deleteQuickAdjustmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteQuickAdjustment = function(quickAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'quickAdjustmentId' is set
      if (quickAdjustmentId == undefined || quickAdjustmentId == null) {
        throw "Missing the required parameter 'quickAdjustmentId' when calling deleteQuickAdjustment";
      }


      var pathParams = {
        'quickAdjustmentId': quickAdjustmentId
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
        '/beta/quickAdjustment/{quickAdjustmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteQuickAdjustmentTag operation.
     * @callback module:api/QuickAdjustmentApi~deleteQuickAdjustmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a quickAdjustment.
     * Deletes an existing quickAdjustment tag using the specified data.
     * @param {Integer} quickAdjustmentId Id of the quickAdjustment to remove tag from
     * @param {String} quickAdjustmentTag The tag to delete
     * @param {module:api/QuickAdjustmentApi~deleteQuickAdjustmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteQuickAdjustmentTag = function(quickAdjustmentId, quickAdjustmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'quickAdjustmentId' is set
      if (quickAdjustmentId == undefined || quickAdjustmentId == null) {
        throw "Missing the required parameter 'quickAdjustmentId' when calling deleteQuickAdjustmentTag";
      }

      // verify the required parameter 'quickAdjustmentTag' is set
      if (quickAdjustmentTag == undefined || quickAdjustmentTag == null) {
        throw "Missing the required parameter 'quickAdjustmentTag' when calling deleteQuickAdjustmentTag";
      }


      var pathParams = {
        'quickAdjustmentId': quickAdjustmentId,
        'quickAdjustmentTag': quickAdjustmentTag
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
        '/beta/quickAdjustment/{quickAdjustmentId}/tag/{quickAdjustmentTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateQuickAdjustmentById operation.
     * @callback module:api/QuickAdjustmentApi~getDuplicateQuickAdjustmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuickAdjustment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a quickAdjustment by id
     * Returns a duplicated quickAdjustment identified by the specified id.
     * @param {Integer} quickAdjustmentId Id of the quickAdjustment to be duplicated.
     * @param {module:api/QuickAdjustmentApi~getDuplicateQuickAdjustmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QuickAdjustment}
     */
    this.getDuplicateQuickAdjustmentById = function(quickAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'quickAdjustmentId' is set
      if (quickAdjustmentId == undefined || quickAdjustmentId == null) {
        throw "Missing the required parameter 'quickAdjustmentId' when calling getDuplicateQuickAdjustmentById";
      }


      var pathParams = {
        'quickAdjustmentId': quickAdjustmentId
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
      var returnType = QuickAdjustment;

      return this.apiClient.callApi(
        '/beta/quickAdjustment/duplicate/{quickAdjustmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuickAdjustmentByFilter operation.
     * @callback module:api/QuickAdjustmentApi~getQuickAdjustmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuickAdjustment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search quickAdjustments by filter
     * Returns the list of quickAdjustments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/QuickAdjustmentApi~getQuickAdjustmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/QuickAdjustment>}
     */
    this.getQuickAdjustmentByFilter = function(opts, callback) {
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
      var returnType = [QuickAdjustment];

      return this.apiClient.callApi(
        '/beta/quickAdjustment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuickAdjustmentById operation.
     * @callback module:api/QuickAdjustmentApi~getQuickAdjustmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuickAdjustment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a quickAdjustment by id
     * Returns the quickAdjustment identified by the specified id.
     * @param {Integer} quickAdjustmentId Id of the quickAdjustment to be returned.
     * @param {module:api/QuickAdjustmentApi~getQuickAdjustmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/QuickAdjustment}
     */
    this.getQuickAdjustmentById = function(quickAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'quickAdjustmentId' is set
      if (quickAdjustmentId == undefined || quickAdjustmentId == null) {
        throw "Missing the required parameter 'quickAdjustmentId' when calling getQuickAdjustmentById";
      }


      var pathParams = {
        'quickAdjustmentId': quickAdjustmentId
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
      var returnType = QuickAdjustment;

      return this.apiClient.callApi(
        '/beta/quickAdjustment/{quickAdjustmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuickAdjustmentTags operation.
     * @callback module:api/QuickAdjustmentApi~getQuickAdjustmentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a quickAdjustment.
     * Get all existing quickAdjustment tags.
     * @param {Integer} quickAdjustmentId Id of the quickAdjustment to get tags for
     * @param {module:api/QuickAdjustmentApi~getQuickAdjustmentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getQuickAdjustmentTags = function(quickAdjustmentId, callback) {
      var postBody = null;

      // verify the required parameter 'quickAdjustmentId' is set
      if (quickAdjustmentId == undefined || quickAdjustmentId == null) {
        throw "Missing the required parameter 'quickAdjustmentId' when calling getQuickAdjustmentTags";
      }


      var pathParams = {
        'quickAdjustmentId': quickAdjustmentId
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
        '/beta/quickAdjustment/{quickAdjustmentId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateQuickAdjustment operation.
     * @callback module:api/QuickAdjustmentApi~updateQuickAdjustmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a quickAdjustment
     * Updates an existing quickAdjustment using the specified data.
     * @param {module:model/QuickAdjustment} body QuickAdjustment to be updated.
     * @param {module:api/QuickAdjustmentApi~updateQuickAdjustmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateQuickAdjustment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateQuickAdjustment";
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
        '/beta/quickAdjustment', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateQuickAdjustmentCustomFields operation.
     * @callback module:api/QuickAdjustmentApi~updateQuickAdjustmentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a quickAdjustment custom fields
     * Updates an existing quickAdjustment custom fields using the specified data.
     * @param {module:model/QuickAdjustment} body QuickAdjustment to be updated.
     * @param {module:api/QuickAdjustmentApi~updateQuickAdjustmentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateQuickAdjustmentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateQuickAdjustmentCustomFields";
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
        '/beta/quickAdjustment/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
