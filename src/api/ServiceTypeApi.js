(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ServiceType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ServiceType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ServiceTypeApi = factory(root.infoplus.ApiClient, root.infoplus.ServiceType);
  }
}(this, function(ApiClient, ServiceType) {
  'use strict';

  /**
   * ServiceType service.
   * @module api/ServiceTypeApi
   * @version v2.0
   */

  /**
   * Constructs a new ServiceTypeApi. 
   * @alias module:api/ServiceTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getServiceTypeById operation.
     * @callback module:api/ServiceTypeApi~getServiceTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a serviceType by id
     * Returns the serviceType identified by the specified id.
     * @param {String} serviceTypeId Id of serviceType to be returned.
     * @param {module:api/ServiceTypeApi~getServiceTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ServiceType}
     */
    this.getServiceTypeById = function(serviceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'serviceTypeId' is set
      if (serviceTypeId == undefined || serviceTypeId == null) {
        throw "Missing the required parameter 'serviceTypeId' when calling getServiceTypeById";
      }


      var pathParams = {
        'serviceTypeId': serviceTypeId
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
      var returnType = ServiceType;

      return this.apiClient.callApi(
        '/v2.0/serviceType/{serviceTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceTypeBySearchText operation.
     * @callback module:api/ServiceTypeApi~getServiceTypeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ServiceType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search serviceTypes
     * Returns the list of serviceTypes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ServiceTypeApi~getServiceTypeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ServiceType>}
     */
    this.getServiceTypeBySearchText = function(opts, callback) {
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
      var returnType = [ServiceType];

      return this.apiClient.callApi(
        '/v2.0/serviceType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
