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
    define(['ApiClient', 'model/ApiResponse', 'model/CustomField', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/CustomField'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CustomFieldApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.CustomField, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, CustomField, RecordFile) {
  'use strict';

  /**
   * CustomField service.
   * @module api/CustomFieldApi
   * @version beta
   */

  /**
   * Constructs a new CustomFieldApi. 
   * @alias module:api/CustomFieldApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCustomField operation.
     * @callback module:api/CustomFieldApi~addCustomFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a customField
     * Inserts a new customField using the specified data.
     * @param {module:model/CustomField} body CustomField to be inserted.
     * @param {module:api/CustomFieldApi~addCustomFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomField}
     */
    this.addCustomField = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCustomField");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CustomField;

      return this.apiClient.callApi(
        '/beta/customField', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomFieldAudit operation.
     * @callback module:api/CustomFieldApi~addCustomFieldAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a customField
     * Adds an audit to an existing customField.
     * @param {Number} customFieldId Id of the customField to add an audit to
     * @param {String} customFieldAudit The audit to add
     * @param {module:api/CustomFieldApi~addCustomFieldAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomFieldAudit = function(customFieldId, customFieldAudit, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling addCustomFieldAudit");
      }

      // verify the required parameter 'customFieldAudit' is set
      if (customFieldAudit === undefined || customFieldAudit === null) {
        throw new Error("Missing the required parameter 'customFieldAudit' when calling addCustomFieldAudit");
      }


      var pathParams = {
        'customFieldId': customFieldId,
        'customFieldAudit': customFieldAudit
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/audit/{customFieldAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomFieldFile operation.
     * @callback module:api/CustomFieldApi~addCustomFieldFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a customField
     * Adds a file to an existing customField.
     * @param {Number} customFieldId Id of the customField to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/CustomFieldApi~addCustomFieldFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomFieldFile = function(customFieldId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling addCustomFieldFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addCustomFieldFile");
      }


      var pathParams = {
        'customFieldId': customFieldId,
        'fileName': fileName
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomFieldFileByURL operation.
     * @callback module:api/CustomFieldApi~addCustomFieldFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a customField by URL.
     * Adds a file to an existing customField by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} customFieldId Id of the customField to add an file to
     * @param {module:api/CustomFieldApi~addCustomFieldFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomFieldFileByURL = function(body, customFieldId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCustomFieldFileByURL");
      }

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling addCustomFieldFileByURL");
      }


      var pathParams = {
        'customFieldId': customFieldId
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomFieldTag operation.
     * @callback module:api/CustomFieldApi~addCustomFieldTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a customField.
     * Adds a tag to an existing customField.
     * @param {Number} customFieldId Id of the customField to add a tag to
     * @param {String} customFieldTag The tag to add
     * @param {module:api/CustomFieldApi~addCustomFieldTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomFieldTag = function(customFieldId, customFieldTag, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling addCustomFieldTag");
      }

      // verify the required parameter 'customFieldTag' is set
      if (customFieldTag === undefined || customFieldTag === null) {
        throw new Error("Missing the required parameter 'customFieldTag' when calling addCustomFieldTag");
      }


      var pathParams = {
        'customFieldId': customFieldId,
        'customFieldTag': customFieldTag
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/tag/{customFieldTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomFieldFile operation.
     * @callback module:api/CustomFieldApi~deleteCustomFieldFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a customField.
     * Deletes an existing customField file using the specified data.
     * @param {Number} customFieldId Id of the customField to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/CustomFieldApi~deleteCustomFieldFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomFieldFile = function(customFieldId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling deleteCustomFieldFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteCustomFieldFile");
      }


      var pathParams = {
        'customFieldId': customFieldId,
        'fileId': fileId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomFieldTag operation.
     * @callback module:api/CustomFieldApi~deleteCustomFieldTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a customField.
     * Deletes an existing customField tag using the specified data.
     * @param {Number} customFieldId Id of the customField to remove tag from
     * @param {String} customFieldTag The tag to delete
     * @param {module:api/CustomFieldApi~deleteCustomFieldTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomFieldTag = function(customFieldId, customFieldTag, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling deleteCustomFieldTag");
      }

      // verify the required parameter 'customFieldTag' is set
      if (customFieldTag === undefined || customFieldTag === null) {
        throw new Error("Missing the required parameter 'customFieldTag' when calling deleteCustomFieldTag");
      }


      var pathParams = {
        'customFieldId': customFieldId,
        'customFieldTag': customFieldTag
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/tag/{customFieldTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomFieldByFilter operation.
     * @callback module:api/CustomFieldApi~getCustomFieldByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search customFields by filter
     * Returns the list of customFields that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CustomFieldApi~getCustomFieldByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomField>}
     */
    this.getCustomFieldByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
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
      var returnType = [CustomField];

      return this.apiClient.callApi(
        '/beta/customField/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomFieldById operation.
     * @callback module:api/CustomFieldApi~getCustomFieldByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a customField by id
     * Returns the customField identified by the specified id.
     * @param {Number} customFieldId Id of the customField to be returned.
     * @param {module:api/CustomFieldApi~getCustomFieldByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomField}
     */
    this.getCustomFieldById = function(customFieldId, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling getCustomFieldById");
      }


      var pathParams = {
        'customFieldId': customFieldId
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
      var returnType = CustomField;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomFieldFiles operation.
     * @callback module:api/CustomFieldApi~getCustomFieldFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a customField.
     * Get all existing customField files.
     * @param {Number} customFieldId Id of the customField to get files for
     * @param {module:api/CustomFieldApi~getCustomFieldFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCustomFieldFiles = function(customFieldId, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling getCustomFieldFiles");
      }


      var pathParams = {
        'customFieldId': customFieldId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomFieldTags operation.
     * @callback module:api/CustomFieldApi~getCustomFieldTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a customField.
     * Get all existing customField tags.
     * @param {Number} customFieldId Id of the customField to get tags for
     * @param {module:api/CustomFieldApi~getCustomFieldTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCustomFieldTags = function(customFieldId, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling getCustomFieldTags");
      }


      var pathParams = {
        'customFieldId': customFieldId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField/{customFieldId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCustomFieldById operation.
     * @callback module:api/CustomFieldApi~getDuplicateCustomFieldByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a customField by id
     * Returns a duplicated customField identified by the specified id.
     * @param {Number} customFieldId Id of the customField to be duplicated.
     * @param {module:api/CustomFieldApi~getDuplicateCustomFieldByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomField}
     */
    this.getDuplicateCustomFieldById = function(customFieldId, callback) {
      var postBody = null;

      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling getDuplicateCustomFieldById");
      }


      var pathParams = {
        'customFieldId': customFieldId
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
      var returnType = CustomField;

      return this.apiClient.callApi(
        '/beta/customField/duplicate/{customFieldId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomField operation.
     * @callback module:api/CustomFieldApi~updateCustomFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customField
     * Updates an existing customField using the specified data.
     * @param {module:model/CustomField} body CustomField to be updated.
     * @param {module:api/CustomFieldApi~updateCustomFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCustomField = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomField");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customField', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
