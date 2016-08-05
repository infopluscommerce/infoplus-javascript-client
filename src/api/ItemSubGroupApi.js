(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemSubGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemSubGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemSubGroupApi = factory(root.infoplus.ApiClient, root.infoplus.ItemSubGroup);
  }
}(this, function(ApiClient, ItemSubGroup) {
  'use strict';

  /**
   * ItemSubGroup service.
   * @module api/ItemSubGroupApi
   * @version beta
   */

  /**
   * Constructs a new ItemSubGroupApi. 
   * @alias module:api/ItemSubGroupApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getItemSubGroupBySearchText operation.
     * @callback module:api/ItemSubGroupApi~getItemSubGroupBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemSubGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemSubGroups
     * Returns the list of itemSubGroups that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/ItemSubGroupApi~getItemSubGroupBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemSubGroup>}
     */
    this.getItemSubGroupBySearchText = function(opts, callback) {
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
      var returnType = [ItemSubGroup];

      return this.apiClient.callApi(
        '/beta/itemSubGroup/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTranslateSubGroupById operation.
     * @callback module:api/ItemSubGroupApi~getTranslateSubGroupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemSubGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemSubGroup by id
     * Returns the itemSubGroup identified by the specified id.
     * @param {String} itemSubGroupId Id of itemSubGroup to be returned.
     * @param {module:api/ItemSubGroupApi~getTranslateSubGroupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemSubGroup}
     */
    this.getTranslateSubGroupById = function(itemSubGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'itemSubGroupId' is set
      if (itemSubGroupId == undefined || itemSubGroupId == null) {
        throw "Missing the required parameter 'itemSubGroupId' when calling getTranslateSubGroupById";
      }


      var pathParams = {
        'itemSubGroupId': itemSubGroupId
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
      var returnType = ItemSubGroup;

      return this.apiClient.callApi(
        '/beta/itemSubGroup/{itemSubGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
