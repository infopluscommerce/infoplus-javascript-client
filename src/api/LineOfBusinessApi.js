(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LineOfBusiness'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LineOfBusiness'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LineOfBusinessApi = factory(root.infoplus.ApiClient, root.infoplus.LineOfBusiness);
  }
}(this, function(ApiClient, LineOfBusiness) {
  'use strict';

  /**
   * LineOfBusiness service.
   * @module api/LineOfBusinessApi
   * @version v2.0
   */

  /**
   * Constructs a new LineOfBusinessApi. 
   * @alias module:api/LineOfBusinessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getLineOfBusinessById operation.
     * @callback module:api/LineOfBusinessApi~getLineOfBusinessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LineOfBusiness} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a lineOfBusiness by id
     * Returns the lineOfBusiness identified by the specified id.
     * @param {String} lineOfBusinessId Id of lineOfBusiness to be returned.
     * @param {module:api/LineOfBusinessApi~getLineOfBusinessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LineOfBusiness}
     */
    this.getLineOfBusinessById = function(lineOfBusinessId, callback) {
      var postBody = null;

      // verify the required parameter 'lineOfBusinessId' is set
      if (lineOfBusinessId == undefined || lineOfBusinessId == null) {
        throw "Missing the required parameter 'lineOfBusinessId' when calling getLineOfBusinessById";
      }


      var pathParams = {
        'lineOfBusinessId': lineOfBusinessId
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
      var returnType = LineOfBusiness;

      return this.apiClient.callApi(
        '/v2.0/lineOfBusiness/{lineOfBusinessId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLineOfBusinessBySearchText operation.
     * @callback module:api/LineOfBusinessApi~getLineOfBusinessBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LineOfBusiness>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search lineOfBusinesses
     * Returns the list of lineOfBusinesses that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/LineOfBusinessApi~getLineOfBusinessBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LineOfBusiness>}
     */
    this.getLineOfBusinessBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [LineOfBusiness];

      return this.apiClient.callApi(
        '/v2.0/lineOfBusiness/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
