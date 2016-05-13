(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/Asn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/Asn'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.AsnApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.Asn);
  }
}(this, function(ApiClient, ApiResponse, Asn) {
  'use strict';

  /**
   * Asn service.
   * @module api/AsnApi
   * @version 1.0
   */

  /**
   * Constructs a new AsnApi. 
   * @alias module:api/AsnApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addAsn operation.
     * @callback module:api/AsnApi~addAsnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an asn
     * Inserts a new asn using the specified data.
     * @param {module:model/Asn} body Asn to be inserted.
     * @param {module:api/AsnApi~addAsnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Asn}
     */
    this.addAsn = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addAsn";
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
      var returnType = Asn;

      return this.apiClient.callApi(
        '/v1.0/asn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAsn operation.
     * @callback module:api/AsnApi~deleteAsnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an asn
     * Deletes the asn identified by the specified id.
     * @param {Integer} asnId Id of the asn to be deleted.
     * @param {module:api/AsnApi~deleteAsnCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAsn = function(asnId, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling deleteAsn";
      }


      var pathParams = {
        'asnId': asnId
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
        '/v1.0/asn/{asnId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAsnByFilter operation.
     * @callback module:api/AsnApi~getAsnByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Asn>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search asns by filter
     * Returns the list of asns that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/AsnApi~getAsnByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Asn>}
     */
    this.getAsnByFilter = function(opts, callback) {
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
      var returnType = [Asn];

      return this.apiClient.callApi(
        '/v1.0/asn/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAsnById operation.
     * @callback module:api/AsnApi~getAsnByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an asn by id
     * Returns the asn identified by the specified id.
     * @param {Integer} asnId Id of the asn to be returned.
     * @param {module:api/AsnApi~getAsnByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Asn}
     */
    this.getAsnById = function(asnId, callback) {
      var postBody = null;

      // verify the required parameter 'asnId' is set
      if (asnId == undefined || asnId == null) {
        throw "Missing the required parameter 'asnId' when calling getAsnById";
      }


      var pathParams = {
        'asnId': asnId
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
      var returnType = Asn;

      return this.apiClient.callApi(
        '/v1.0/asn/{asnId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAsn operation.
     * @callback module:api/AsnApi~updateAsnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an asn
     * Updates an existing asn using the specified data.
     * @param {module:model/Asn} body Asn to be updated.
     * @param {module:api/AsnApi~updateAsnCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAsn = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateAsn";
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
        '/v1.0/asn', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
