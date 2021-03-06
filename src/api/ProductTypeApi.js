/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ProductType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ProductTypeApi = factory(root.infoplus.ApiClient, root.infoplus.ProductType);
  }
}(this, function(ApiClient, ProductType) {
  'use strict';

  /**
   * ProductType service.
   * @module api/ProductTypeApi
   * @version beta
   */

  /**
   * Constructs a new ProductTypeApi. 
   * @alias module:api/ProductTypeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getProductTypeById operation.
     * @callback module:api/ProductTypeApi~getProductTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a productType by id
     * Returns the productType identified by the specified id.
     * @param {String} productTypeId Id of productType to be returned.
     * @param {module:api/ProductTypeApi~getProductTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductType}
     */
    this.getProductTypeById = function(productTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'productTypeId' is set
      if (productTypeId === undefined || productTypeId === null) {
        throw new Error("Missing the required parameter 'productTypeId' when calling getProductTypeById");
      }


      var pathParams = {
        'productTypeId': productTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ProductType;

      return this.apiClient.callApi(
        '/beta/productType/{productTypeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductTypeBySearchText operation.
     * @callback module:api/ProductTypeApi~getProductTypeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search productTypes
     * Returns the list of productTypes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ProductTypeApi~getProductTypeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProductType>}
     */
    this.getProductTypeBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ProductType];

      return this.apiClient.callApi(
        '/beta/productType/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
