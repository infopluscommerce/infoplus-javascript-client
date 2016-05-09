(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/IntegrationPartner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IntegrationPartner'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.IntegrationPartnerApi = factory(root.infoplus.ApiClient, root.infoplus.IntegrationPartner);
  }
}(this, function(ApiClient, IntegrationPartner) {
  'use strict';

  /**
   * IntegrationPartner service.
   * @module api/IntegrationPartnerApi
   * @version 1.0
   */

  /**
   * Constructs a new IntegrationPartnerApi. 
   * @alias module:api/IntegrationPartnerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getIntegrationPartnerById operation.
     * @callback module:api/IntegrationPartnerApi~getIntegrationPartnerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegrationPartner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an integrationPartner by id
     * Returns the integrationPartner identified by the specified id.
     * @param {String} integrationPartnerId Id of integrationPartner to be returned.
     * @param {module:api/IntegrationPartnerApi~getIntegrationPartnerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IntegrationPartner}
     */
    this.getIntegrationPartnerById = function(integrationPartnerId, callback) {
      var postBody = null;

      // verify the required parameter 'integrationPartnerId' is set
      if (integrationPartnerId == undefined || integrationPartnerId == null) {
        throw "Missing the required parameter 'integrationPartnerId' when calling getIntegrationPartnerById";
      }


      var pathParams = {
        'integrationPartnerId': integrationPartnerId
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
      var returnType = IntegrationPartner;

      return this.apiClient.callApi(
        '/v1.0/integrationPartner/{integrationPartnerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIntegrationPartnerBySearchText operation.
     * @callback module:api/IntegrationPartnerApi~getIntegrationPartnerBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IntegrationPartner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search integrationPartners
     * Returns the list of integrationPartners that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/IntegrationPartnerApi~getIntegrationPartnerBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/IntegrationPartner>}
     */
    this.getIntegrationPartnerBySearchText = function(opts, callback) {
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
      var returnType = [IntegrationPartner];

      return this.apiClient.callApi(
        '/v1.0/integrationPartner/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
