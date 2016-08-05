(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.UserApi = factory(root.infoplus.ApiClient, root.infoplus.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version beta
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUserById operation.
     * @callback module:api/UserApi~getUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an user by id
     * Returns the user identified by the specified id.
     * @param {String} userId Id of user to be returned.
     * @param {module:api/UserApi~getUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.getUserById = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUserById";
      }


      var pathParams = {
        'userId': userId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/beta/user/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserBySearchText operation.
     * @callback module:api/UserApi~getUserBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users
     * Returns the list of users that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/UserApi~getUserBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/User>}
     */
    this.getUserBySearchText = function(opts, callback) {
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
      var returnType = [User];

      return this.apiClient.callApi(
        '/beta/user/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
