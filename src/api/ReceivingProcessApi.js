(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ReceivingProcess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReceivingProcess'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReceivingProcessApi = factory(root.infoplus.ApiClient, root.infoplus.ReceivingProcess);
  }
}(this, function(ApiClient, ReceivingProcess) {
  'use strict';

  /**
   * ReceivingProcess service.
   * @module api/ReceivingProcessApi
   * @version beta
   */

  /**
   * Constructs a new ReceivingProcessApi. 
   * @alias module:api/ReceivingProcessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addReceivingProcessAudit operation.
     * @callback module:api/ReceivingProcessApi~addReceivingProcessAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a receivingProcess
     * Adds an audit to an existing receivingProcess.
     * @param {Integer} receivingProcessId Id of the receivingProcess to add an audit to
     * @param {String} receivingProcessAudit The audit to add
     * @param {module:api/ReceivingProcessApi~addReceivingProcessAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReceivingProcessAudit = function(receivingProcessId, receivingProcessAudit, callback) {
      var postBody = null;

      // verify the required parameter 'receivingProcessId' is set
      if (receivingProcessId == undefined || receivingProcessId == null) {
        throw "Missing the required parameter 'receivingProcessId' when calling addReceivingProcessAudit";
      }

      // verify the required parameter 'receivingProcessAudit' is set
      if (receivingProcessAudit == undefined || receivingProcessAudit == null) {
        throw "Missing the required parameter 'receivingProcessAudit' when calling addReceivingProcessAudit";
      }


      var pathParams = {
        'receivingProcessId': receivingProcessId,
        'receivingProcessAudit': receivingProcessAudit
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
        '/beta/receivingProcess/{receivingProcessId}/audit/{receivingProcessAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addReceivingProcessTag operation.
     * @callback module:api/ReceivingProcessApi~addReceivingProcessTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a receivingProcess.
     * Adds a tag to an existing receivingProcess.
     * @param {Integer} receivingProcessId Id of the receivingProcess to add a tag to
     * @param {String} receivingProcessTag The tag to add
     * @param {module:api/ReceivingProcessApi~addReceivingProcessTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReceivingProcessTag = function(receivingProcessId, receivingProcessTag, callback) {
      var postBody = null;

      // verify the required parameter 'receivingProcessId' is set
      if (receivingProcessId == undefined || receivingProcessId == null) {
        throw "Missing the required parameter 'receivingProcessId' when calling addReceivingProcessTag";
      }

      // verify the required parameter 'receivingProcessTag' is set
      if (receivingProcessTag == undefined || receivingProcessTag == null) {
        throw "Missing the required parameter 'receivingProcessTag' when calling addReceivingProcessTag";
      }


      var pathParams = {
        'receivingProcessId': receivingProcessId,
        'receivingProcessTag': receivingProcessTag
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
        '/beta/receivingProcess/{receivingProcessId}/tag/{receivingProcessTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReceivingProcess operation.
     * @callback module:api/ReceivingProcessApi~deleteReceivingProcessCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a receivingProcess
     * Deletes the receivingProcess identified by the specified id.
     * @param {Integer} receivingProcessId Id of the receivingProcess to be deleted.
     * @param {module:api/ReceivingProcessApi~deleteReceivingProcessCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReceivingProcess = function(receivingProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'receivingProcessId' is set
      if (receivingProcessId == undefined || receivingProcessId == null) {
        throw "Missing the required parameter 'receivingProcessId' when calling deleteReceivingProcess";
      }


      var pathParams = {
        'receivingProcessId': receivingProcessId
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
        '/beta/receivingProcess/{receivingProcessId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReceivingProcessTag operation.
     * @callback module:api/ReceivingProcessApi~deleteReceivingProcessTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a receivingProcess.
     * Deletes an existing receivingProcess tag using the specified data.
     * @param {Integer} receivingProcessId Id of the receivingProcess to remove tag from
     * @param {String} receivingProcessTag The tag to delete
     * @param {module:api/ReceivingProcessApi~deleteReceivingProcessTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReceivingProcessTag = function(receivingProcessId, receivingProcessTag, callback) {
      var postBody = null;

      // verify the required parameter 'receivingProcessId' is set
      if (receivingProcessId == undefined || receivingProcessId == null) {
        throw "Missing the required parameter 'receivingProcessId' when calling deleteReceivingProcessTag";
      }

      // verify the required parameter 'receivingProcessTag' is set
      if (receivingProcessTag == undefined || receivingProcessTag == null) {
        throw "Missing the required parameter 'receivingProcessTag' when calling deleteReceivingProcessTag";
      }


      var pathParams = {
        'receivingProcessId': receivingProcessId,
        'receivingProcessTag': receivingProcessTag
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
        '/beta/receivingProcess/{receivingProcessId}/tag/{receivingProcessTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateReceivingProcessById operation.
     * @callback module:api/ReceivingProcessApi~getDuplicateReceivingProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReceivingProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a receivingProcess by id
     * Returns a duplicated receivingProcess identified by the specified id.
     * @param {Integer} receivingProcessId Id of the receivingProcess to be duplicated.
     * @param {module:api/ReceivingProcessApi~getDuplicateReceivingProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReceivingProcess}
     */
    this.getDuplicateReceivingProcessById = function(receivingProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'receivingProcessId' is set
      if (receivingProcessId == undefined || receivingProcessId == null) {
        throw "Missing the required parameter 'receivingProcessId' when calling getDuplicateReceivingProcessById";
      }


      var pathParams = {
        'receivingProcessId': receivingProcessId
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
      var returnType = ReceivingProcess;

      return this.apiClient.callApi(
        '/beta/receivingProcess/duplicate/{receivingProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceivingProcessByFilter operation.
     * @callback module:api/ReceivingProcessApi~getReceivingProcessByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReceivingProcess>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search receivingProcesses by filter
     * Returns the list of receivingProcesses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReceivingProcessApi~getReceivingProcessByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ReceivingProcess>}
     */
    this.getReceivingProcessByFilter = function(opts, callback) {
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
      var returnType = [ReceivingProcess];

      return this.apiClient.callApi(
        '/beta/receivingProcess/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceivingProcessById operation.
     * @callback module:api/ReceivingProcessApi~getReceivingProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReceivingProcess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a receivingProcess by id
     * Returns the receivingProcess identified by the specified id.
     * @param {Integer} receivingProcessId Id of the receivingProcess to be returned.
     * @param {module:api/ReceivingProcessApi~getReceivingProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ReceivingProcess}
     */
    this.getReceivingProcessById = function(receivingProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'receivingProcessId' is set
      if (receivingProcessId == undefined || receivingProcessId == null) {
        throw "Missing the required parameter 'receivingProcessId' when calling getReceivingProcessById";
      }


      var pathParams = {
        'receivingProcessId': receivingProcessId
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
      var returnType = ReceivingProcess;

      return this.apiClient.callApi(
        '/beta/receivingProcess/{receivingProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceivingProcessTags operation.
     * @callback module:api/ReceivingProcessApi~getReceivingProcessTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a receivingProcess.
     * Get all existing receivingProcess tags.
     * @param {Integer} receivingProcessId Id of the receivingProcess to get tags for
     * @param {module:api/ReceivingProcessApi~getReceivingProcessTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getReceivingProcessTags = function(receivingProcessId, callback) {
      var postBody = null;

      // verify the required parameter 'receivingProcessId' is set
      if (receivingProcessId == undefined || receivingProcessId == null) {
        throw "Missing the required parameter 'receivingProcessId' when calling getReceivingProcessTags";
      }


      var pathParams = {
        'receivingProcessId': receivingProcessId
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
        '/beta/receivingProcess/{receivingProcessId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReceivingProcessCustomFields operation.
     * @callback module:api/ReceivingProcessApi~updateReceivingProcessCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a receivingProcess custom fields
     * Updates an existing receivingProcess custom fields using the specified data.
     * @param {module:model/ReceivingProcess} body ReceivingProcess to be updated.
     * @param {module:api/ReceivingProcessApi~updateReceivingProcessCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReceivingProcessCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateReceivingProcessCustomFields";
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
        '/beta/receivingProcess/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
