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
   * @version 1.0
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
        '/v1.0/receivingProcess/{receivingProcessId}', 'DELETE',
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
        '/v1.0/receivingProcess/search', 'GET',
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
        '/v1.0/receivingProcess/{receivingProcessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
