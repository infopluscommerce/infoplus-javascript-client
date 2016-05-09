(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ParcelShipment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParcelShipment'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ParcelShipmentApi = factory(root.infoplus.ApiClient, root.infoplus.ParcelShipment);
  }
}(this, function(ApiClient, ParcelShipment) {
  'use strict';

  /**
   * ParcelShipment service.
   * @module api/ParcelShipmentApi
   * @version 1.0
   */

  /**
   * Constructs a new ParcelShipmentApi. 
   * @alias module:api/ParcelShipmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getParcelShipmentByFilter operation.
     * @callback module:api/ParcelShipmentApi~getParcelShipmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ParcelShipment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search parcelShipments by filter
     * Returns the list of parcelShipments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ParcelShipmentApi~getParcelShipmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ParcelShipment>}
     */
    this.getParcelShipmentByFilter = function(opts, callback) {
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
      var returnType = [ParcelShipment];

      return this.apiClient.callApi(
        '/v1.0/parcelShipment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelShipmentById operation.
     * @callback module:api/ParcelShipmentApi~getParcelShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a parcelShipment by id
     * Returns the parcelShipment identified by the specified id.
     * @param {Integer} parcelShipmentId Id of the parcelShipment to be returned.
     * @param {module:api/ParcelShipmentApi~getParcelShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParcelShipment}
     */
    this.getParcelShipmentById = function(parcelShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelShipmentId' is set
      if (parcelShipmentId == undefined || parcelShipmentId == null) {
        throw "Missing the required parameter 'parcelShipmentId' when calling getParcelShipmentById";
      }


      var pathParams = {
        'parcelShipmentId': parcelShipmentId
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
      var returnType = ParcelShipment;

      return this.apiClient.callApi(
        '/v1.0/parcelShipment/{parcelShipmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
