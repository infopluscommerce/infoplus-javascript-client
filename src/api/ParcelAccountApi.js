(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ParcelAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParcelAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ParcelAccountApi = factory(root.infoplus.ApiClient, root.infoplus.ParcelAccount);
  }
}(this, function(ApiClient, ParcelAccount) {
  'use strict';

  /**
   * ParcelAccount service.
   * @module api/ParcelAccountApi
   * @version 1.0
   */

  /**
   * Constructs a new ParcelAccountApi. 
   * @alias module:api/ParcelAccountApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getParcelAccountByFilter operation.
     * @callback module:api/ParcelAccountApi~getParcelAccountByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ParcelAccount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search parcelAccounts by filter
     * Returns the list of parcelAccounts that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ParcelAccountApi~getParcelAccountByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ParcelAccount>}
     */
    this.getParcelAccountByFilter = function(opts, callback) {
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
      var returnType = [ParcelAccount];

      return this.apiClient.callApi(
        '/v1.0/parcelAccount/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelAccountById operation.
     * @callback module:api/ParcelAccountApi~getParcelAccountByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a parcelAccount by id
     * Returns the parcelAccount identified by the specified id.
     * @param {Integer} parcelAccountId Id of the parcelAccount to be returned.
     * @param {module:api/ParcelAccountApi~getParcelAccountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParcelAccount}
     */
    this.getParcelAccountById = function(parcelAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelAccountId' is set
      if (parcelAccountId == undefined || parcelAccountId == null) {
        throw "Missing the required parameter 'parcelAccountId' when calling getParcelAccountById";
      }


      var pathParams = {
        'parcelAccountId': parcelAccountId
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
      var returnType = ParcelAccount;

      return this.apiClient.callApi(
        '/v1.0/parcelAccount/{parcelAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
