(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemMajorGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemMajorGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemMajorGroupApi = factory(root.infoplus.ApiClient, root.infoplus.ItemMajorGroup);
  }
}(this, function(ApiClient, ItemMajorGroup) {
  'use strict';

  /**
   * ItemMajorGroup service.
   * @module api/ItemMajorGroupApi
   * @version 1.0
   */

  /**
   * Constructs a new ItemMajorGroupApi. 
   * @alias module:api/ItemMajorGroupApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemMajorGroupBySearchText operation.
     * @callback module:api/ItemMajorGroupApi~getItemMajorGroupBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemMajorGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemMajorGroups
     * Returns the list of itemMajorGroups that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemMajorGroupApi~getItemMajorGroupBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemMajorGroup>}
     */
    this.getItemMajorGroupBySearchText = function(opts, callback) {
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
      var returnType = [ItemMajorGroup];

      return this.apiClient.callApi(
        '/v1.0/itemMajorGroup/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateMajorGroupById operation.
     * @callback module:api/ItemMajorGroupApi~getTranslateMajorGroupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemMajorGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemMajorGroup by id
     * Returns the itemMajorGroup identified by the specified id.
     * @param {String} itemMajorGroupId Id of itemMajorGroup to be returned.
     * @param {module:api/ItemMajorGroupApi~getTranslateMajorGroupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemMajorGroup}
     */
    this.getTranslateMajorGroupById = function(itemMajorGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'itemMajorGroupId' is set
      if (itemMajorGroupId == undefined || itemMajorGroupId == null) {
        throw "Missing the required parameter 'itemMajorGroupId' when calling getTranslateMajorGroupById";
      }


      var pathParams = {
        'itemMajorGroupId': itemMajorGroupId
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
      var returnType = ItemMajorGroup;

      return this.apiClient.callApi(
        '/v1.0/itemMajorGroup/{itemMajorGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
