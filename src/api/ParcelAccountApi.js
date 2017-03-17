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
   * @version beta
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
     * Callback function to receive the result of the addParcelAccountAudit operation.
     * @callback module:api/ParcelAccountApi~addParcelAccountAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a parcelAccount
     * Adds an audit to an existing parcelAccount.
     * @param {Integer} parcelAccountId Id of the parcelAccount to add an audit to
     * @param {String} parcelAccountAudit The audit to add
     * @param {module:api/ParcelAccountApi~addParcelAccountAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addParcelAccountAudit = function(parcelAccountId, parcelAccountAudit, callback) {
      var postBody = null;

      // verify the required parameter 'parcelAccountId' is set
      if (parcelAccountId == undefined || parcelAccountId == null) {
        throw "Missing the required parameter 'parcelAccountId' when calling addParcelAccountAudit";
      }

      // verify the required parameter 'parcelAccountAudit' is set
      if (parcelAccountAudit == undefined || parcelAccountAudit == null) {
        throw "Missing the required parameter 'parcelAccountAudit' when calling addParcelAccountAudit";
      }


      var pathParams = {
        'parcelAccountId': parcelAccountId,
        'parcelAccountAudit': parcelAccountAudit
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
        '/beta/parcelAccount/{parcelAccountId}/audit/{parcelAccountAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addParcelAccountTag operation.
     * @callback module:api/ParcelAccountApi~addParcelAccountTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a parcelAccount.
     * Adds a tag to an existing parcelAccount.
     * @param {Integer} parcelAccountId Id of the parcelAccount to add a tag to
     * @param {String} parcelAccountTag The tag to add
     * @param {module:api/ParcelAccountApi~addParcelAccountTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addParcelAccountTag = function(parcelAccountId, parcelAccountTag, callback) {
      var postBody = null;

      // verify the required parameter 'parcelAccountId' is set
      if (parcelAccountId == undefined || parcelAccountId == null) {
        throw "Missing the required parameter 'parcelAccountId' when calling addParcelAccountTag";
      }

      // verify the required parameter 'parcelAccountTag' is set
      if (parcelAccountTag == undefined || parcelAccountTag == null) {
        throw "Missing the required parameter 'parcelAccountTag' when calling addParcelAccountTag";
      }


      var pathParams = {
        'parcelAccountId': parcelAccountId,
        'parcelAccountTag': parcelAccountTag
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
        '/beta/parcelAccount/{parcelAccountId}/tag/{parcelAccountTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteParcelAccountTag operation.
     * @callback module:api/ParcelAccountApi~deleteParcelAccountTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a parcelAccount.
     * Deletes an existing parcelAccount tag using the specified data.
     * @param {Integer} parcelAccountId Id of the parcelAccount to remove tag from
     * @param {String} parcelAccountTag The tag to delete
     * @param {module:api/ParcelAccountApi~deleteParcelAccountTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteParcelAccountTag = function(parcelAccountId, parcelAccountTag, callback) {
      var postBody = null;

      // verify the required parameter 'parcelAccountId' is set
      if (parcelAccountId == undefined || parcelAccountId == null) {
        throw "Missing the required parameter 'parcelAccountId' when calling deleteParcelAccountTag";
      }

      // verify the required parameter 'parcelAccountTag' is set
      if (parcelAccountTag == undefined || parcelAccountTag == null) {
        throw "Missing the required parameter 'parcelAccountTag' when calling deleteParcelAccountTag";
      }


      var pathParams = {
        'parcelAccountId': parcelAccountId,
        'parcelAccountTag': parcelAccountTag
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
        '/beta/parcelAccount/{parcelAccountId}/tag/{parcelAccountTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateParcelAccountById operation.
     * @callback module:api/ParcelAccountApi~getDuplicateParcelAccountByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParcelAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a parcelAccount by id
     * Returns a duplicated parcelAccount identified by the specified id.
     * @param {Integer} parcelAccountId Id of the parcelAccount to be duplicated.
     * @param {module:api/ParcelAccountApi~getDuplicateParcelAccountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParcelAccount}
     */
    this.getDuplicateParcelAccountById = function(parcelAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelAccountId' is set
      if (parcelAccountId == undefined || parcelAccountId == null) {
        throw "Missing the required parameter 'parcelAccountId' when calling getDuplicateParcelAccountById";
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
        '/beta/parcelAccount/duplicate/{parcelAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
        '/beta/parcelAccount/search', 'GET',
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
        '/beta/parcelAccount/{parcelAccountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelAccountTags operation.
     * @callback module:api/ParcelAccountApi~getParcelAccountTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a parcelAccount.
     * Get all existing parcelAccount tags.
     * @param {Integer} parcelAccountId Id of the parcelAccount to get tags for
     * @param {module:api/ParcelAccountApi~getParcelAccountTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getParcelAccountTags = function(parcelAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'parcelAccountId' is set
      if (parcelAccountId == undefined || parcelAccountId == null) {
        throw "Missing the required parameter 'parcelAccountId' when calling getParcelAccountTags";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/parcelAccount/{parcelAccountId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateParcelAccountCustomFields operation.
     * @callback module:api/ParcelAccountApi~updateParcelAccountCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a parcelAccount custom fields
     * Updates an existing parcelAccount custom fields using the specified data.
     * @param {module:model/ParcelAccount} body ParcelAccount to be updated.
     * @param {module:api/ParcelAccountApi~updateParcelAccountCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateParcelAccountCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateParcelAccountCustomFields";
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
        '/beta/parcelAccount/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
