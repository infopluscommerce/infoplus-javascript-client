(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Substitution', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Substitution'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.SubstitutionApi = factory(root.infoplus.ApiClient, root.infoplus.Substitution, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, Substitution, ApiResponse) {
  'use strict';

  /**
   * Substitution service.
   * @module api/SubstitutionApi
   * @version beta
   */

  /**
   * Constructs a new SubstitutionApi. 
   * @alias module:api/SubstitutionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addSubstitution operation.
     * @callback module:api/SubstitutionApi~addSubstitutionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Substitution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a substitution
     * Inserts a new substitution using the specified data.
     * @param {module:model/Substitution} body Substitution to be inserted.
     * @param {module:api/SubstitutionApi~addSubstitutionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Substitution}
     */
    this.addSubstitution = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addSubstitution";
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
      var returnType = Substitution;

      return this.apiClient.callApi(
        '/beta/substitution', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSubstitutionAudit operation.
     * @callback module:api/SubstitutionApi~addSubstitutionAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a substitution
     * Adds an audit to an existing substitution.
     * @param {Integer} substitutionId Id of the substitution to add an audit to
     * @param {String} substitutionAudit The audit to add
     * @param {module:api/SubstitutionApi~addSubstitutionAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addSubstitutionAudit = function(substitutionId, substitutionAudit, callback) {
      var postBody = null;

      // verify the required parameter 'substitutionId' is set
      if (substitutionId == undefined || substitutionId == null) {
        throw "Missing the required parameter 'substitutionId' when calling addSubstitutionAudit";
      }

      // verify the required parameter 'substitutionAudit' is set
      if (substitutionAudit == undefined || substitutionAudit == null) {
        throw "Missing the required parameter 'substitutionAudit' when calling addSubstitutionAudit";
      }


      var pathParams = {
        'substitutionId': substitutionId,
        'substitutionAudit': substitutionAudit
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
        '/beta/substitution/{substitutionId}/audit/{substitutionAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSubstitutionTag operation.
     * @callback module:api/SubstitutionApi~addSubstitutionTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a substitution.
     * Adds a tag to an existing substitution.
     * @param {Integer} substitutionId Id of the substitution to add a tag to
     * @param {String} substitutionTag The tag to add
     * @param {module:api/SubstitutionApi~addSubstitutionTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addSubstitutionTag = function(substitutionId, substitutionTag, callback) {
      var postBody = null;

      // verify the required parameter 'substitutionId' is set
      if (substitutionId == undefined || substitutionId == null) {
        throw "Missing the required parameter 'substitutionId' when calling addSubstitutionTag";
      }

      // verify the required parameter 'substitutionTag' is set
      if (substitutionTag == undefined || substitutionTag == null) {
        throw "Missing the required parameter 'substitutionTag' when calling addSubstitutionTag";
      }


      var pathParams = {
        'substitutionId': substitutionId,
        'substitutionTag': substitutionTag
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
        '/beta/substitution/{substitutionId}/tag/{substitutionTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubstitution operation.
     * @callback module:api/SubstitutionApi~deleteSubstitutionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a substitution
     * Deletes the substitution identified by the specified id.
     * @param {Integer} substitutionId Id of the substitution to be deleted.
     * @param {module:api/SubstitutionApi~deleteSubstitutionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubstitution = function(substitutionId, callback) {
      var postBody = null;

      // verify the required parameter 'substitutionId' is set
      if (substitutionId == undefined || substitutionId == null) {
        throw "Missing the required parameter 'substitutionId' when calling deleteSubstitution";
      }


      var pathParams = {
        'substitutionId': substitutionId
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
        '/beta/substitution/{substitutionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubstitutionTag operation.
     * @callback module:api/SubstitutionApi~deleteSubstitutionTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a substitution.
     * Deletes an existing substitution tag using the specified data.
     * @param {Integer} substitutionId Id of the substitution to remove tag from
     * @param {String} substitutionTag The tag to delete
     * @param {module:api/SubstitutionApi~deleteSubstitutionTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubstitutionTag = function(substitutionId, substitutionTag, callback) {
      var postBody = null;

      // verify the required parameter 'substitutionId' is set
      if (substitutionId == undefined || substitutionId == null) {
        throw "Missing the required parameter 'substitutionId' when calling deleteSubstitutionTag";
      }

      // verify the required parameter 'substitutionTag' is set
      if (substitutionTag == undefined || substitutionTag == null) {
        throw "Missing the required parameter 'substitutionTag' when calling deleteSubstitutionTag";
      }


      var pathParams = {
        'substitutionId': substitutionId,
        'substitutionTag': substitutionTag
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
        '/beta/substitution/{substitutionId}/tag/{substitutionTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateSubstitutionById operation.
     * @callback module:api/SubstitutionApi~getDuplicateSubstitutionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Substitution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a substitution by id
     * Returns a duplicated substitution identified by the specified id.
     * @param {Integer} substitutionId Id of the substitution to be duplicated.
     * @param {module:api/SubstitutionApi~getDuplicateSubstitutionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Substitution}
     */
    this.getDuplicateSubstitutionById = function(substitutionId, callback) {
      var postBody = null;

      // verify the required parameter 'substitutionId' is set
      if (substitutionId == undefined || substitutionId == null) {
        throw "Missing the required parameter 'substitutionId' when calling getDuplicateSubstitutionById";
      }


      var pathParams = {
        'substitutionId': substitutionId
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
      var returnType = Substitution;

      return this.apiClient.callApi(
        '/beta/substitution/duplicate/{substitutionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubstitutionByFilter operation.
     * @callback module:api/SubstitutionApi~getSubstitutionByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Substitution>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search substitutions by filter
     * Returns the list of substitutions that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/SubstitutionApi~getSubstitutionByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Substitution>}
     */
    this.getSubstitutionByFilter = function(opts, callback) {
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
      var returnType = [Substitution];

      return this.apiClient.callApi(
        '/beta/substitution/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubstitutionById operation.
     * @callback module:api/SubstitutionApi~getSubstitutionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Substitution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a substitution by id
     * Returns the substitution identified by the specified id.
     * @param {Integer} substitutionId Id of the substitution to be returned.
     * @param {module:api/SubstitutionApi~getSubstitutionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Substitution}
     */
    this.getSubstitutionById = function(substitutionId, callback) {
      var postBody = null;

      // verify the required parameter 'substitutionId' is set
      if (substitutionId == undefined || substitutionId == null) {
        throw "Missing the required parameter 'substitutionId' when calling getSubstitutionById";
      }


      var pathParams = {
        'substitutionId': substitutionId
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
      var returnType = Substitution;

      return this.apiClient.callApi(
        '/beta/substitution/{substitutionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubstitutionTags operation.
     * @callback module:api/SubstitutionApi~getSubstitutionTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a substitution.
     * Get all existing substitution tags.
     * @param {Integer} substitutionId Id of the substitution to get tags for
     * @param {module:api/SubstitutionApi~getSubstitutionTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getSubstitutionTags = function(substitutionId, callback) {
      var postBody = null;

      // verify the required parameter 'substitutionId' is set
      if (substitutionId == undefined || substitutionId == null) {
        throw "Missing the required parameter 'substitutionId' when calling getSubstitutionTags";
      }


      var pathParams = {
        'substitutionId': substitutionId
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
        '/beta/substitution/{substitutionId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubstitution operation.
     * @callback module:api/SubstitutionApi~updateSubstitutionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a substitution
     * Updates an existing substitution using the specified data.
     * @param {module:model/Substitution} body Substitution to be updated.
     * @param {module:api/SubstitutionApi~updateSubstitutionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSubstitution = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateSubstitution";
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
        '/beta/substitution', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubstitutionCustomFields operation.
     * @callback module:api/SubstitutionApi~updateSubstitutionCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a substitution custom fields
     * Updates an existing substitution custom fields using the specified data.
     * @param {module:model/Substitution} body Substitution to be updated.
     * @param {module:api/SubstitutionApi~updateSubstitutionCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSubstitutionCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateSubstitutionCustomFields";
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
        '/beta/substitution/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
