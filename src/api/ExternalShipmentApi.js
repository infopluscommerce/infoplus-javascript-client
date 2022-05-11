/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: v3.0
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
    define(['ApiClient', 'model/ApiResponse', 'model/ExternalShipment', 'model/RecordFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ExternalShipment'), require('../model/RecordFile'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ExternalShipmentApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ExternalShipment, root.infoplus.RecordFile);
  }
}(this, function(ApiClient, ApiResponse, ExternalShipment, RecordFile) {
  'use strict';

  /**
   * ExternalShipment service.
   * @module api/ExternalShipmentApi
   * @version v3.0
   */

  /**
   * Constructs a new ExternalShipmentApi. 
   * @alias module:api/ExternalShipmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addExternalShipment operation.
     * @callback module:api/ExternalShipmentApi~addExternalShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an externalShipment
     * Inserts a new externalShipment using the specified data.
     * @param {module:model/ExternalShipment} body ExternalShipment to be inserted.
     * @param {module:api/ExternalShipmentApi~addExternalShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExternalShipment}
     */
    this.addExternalShipment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addExternalShipment");
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
      var returnType = ExternalShipment;

      return this.apiClient.callApi(
        '/v3.0/externalShipment', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addExternalShipmentAudit operation.
     * @callback module:api/ExternalShipmentApi~addExternalShipmentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an externalShipment
     * Adds an audit to an existing externalShipment.
     * @param {Number} externalShipmentId Id of the externalShipment to add an audit to
     * @param {String} externalShipmentAudit The audit to add
     * @param {module:api/ExternalShipmentApi~addExternalShipmentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addExternalShipmentAudit = function(externalShipmentId, externalShipmentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling addExternalShipmentAudit");
      }

      // verify the required parameter 'externalShipmentAudit' is set
      if (externalShipmentAudit === undefined || externalShipmentAudit === null) {
        throw new Error("Missing the required parameter 'externalShipmentAudit' when calling addExternalShipmentAudit");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId,
        'externalShipmentAudit': externalShipmentAudit
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
        '/v3.0/externalShipment/{externalShipmentId}/audit/{externalShipmentAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addExternalShipmentFile operation.
     * @callback module:api/ExternalShipmentApi~addExternalShipmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an externalShipment
     * Adds a file to an existing externalShipment.
     * @param {Number} externalShipmentId Id of the externalShipment to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ExternalShipmentApi~addExternalShipmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addExternalShipmentFile = function(externalShipmentId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling addExternalShipmentFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addExternalShipmentFile");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId,
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
        '/v3.0/externalShipment/{externalShipmentId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addExternalShipmentFileByURL operation.
     * @callback module:api/ExternalShipmentApi~addExternalShipmentFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an externalShipment by URL.
     * Adds a file to an existing externalShipment by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} externalShipmentId Id of the externalShipment to add an file to
     * @param {module:api/ExternalShipmentApi~addExternalShipmentFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addExternalShipmentFileByURL = function(body, externalShipmentId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addExternalShipmentFileByURL");
      }

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling addExternalShipmentFileByURL");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
        '/v3.0/externalShipment/{externalShipmentId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addExternalShipmentTag operation.
     * @callback module:api/ExternalShipmentApi~addExternalShipmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an externalShipment.
     * Adds a tag to an existing externalShipment.
     * @param {Number} externalShipmentId Id of the externalShipment to add a tag to
     * @param {String} externalShipmentTag The tag to add
     * @param {module:api/ExternalShipmentApi~addExternalShipmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addExternalShipmentTag = function(externalShipmentId, externalShipmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling addExternalShipmentTag");
      }

      // verify the required parameter 'externalShipmentTag' is set
      if (externalShipmentTag === undefined || externalShipmentTag === null) {
        throw new Error("Missing the required parameter 'externalShipmentTag' when calling addExternalShipmentTag");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId,
        'externalShipmentTag': externalShipmentTag
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
        '/v3.0/externalShipment/{externalShipmentId}/tag/{externalShipmentTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExternalShipment operation.
     * @callback module:api/ExternalShipmentApi~deleteExternalShipmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an externalShipment
     * Deletes the externalShipment identified by the specified id.
     * @param {Number} externalShipmentId Id of the externalShipment to be deleted.
     * @param {module:api/ExternalShipmentApi~deleteExternalShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteExternalShipment = function(externalShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling deleteExternalShipment");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
        '/v3.0/externalShipment/{externalShipmentId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExternalShipmentFile operation.
     * @callback module:api/ExternalShipmentApi~deleteExternalShipmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for an externalShipment.
     * Deletes an existing externalShipment file using the specified data.
     * @param {Number} externalShipmentId Id of the externalShipment to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/ExternalShipmentApi~deleteExternalShipmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteExternalShipmentFile = function(externalShipmentId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling deleteExternalShipmentFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteExternalShipmentFile");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId,
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
        '/v3.0/externalShipment/{externalShipmentId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExternalShipmentTag operation.
     * @callback module:api/ExternalShipmentApi~deleteExternalShipmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an externalShipment.
     * Deletes an existing externalShipment tag using the specified data.
     * @param {Number} externalShipmentId Id of the externalShipment to remove tag from
     * @param {String} externalShipmentTag The tag to delete
     * @param {module:api/ExternalShipmentApi~deleteExternalShipmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteExternalShipmentTag = function(externalShipmentId, externalShipmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling deleteExternalShipmentTag");
      }

      // verify the required parameter 'externalShipmentTag' is set
      if (externalShipmentTag === undefined || externalShipmentTag === null) {
        throw new Error("Missing the required parameter 'externalShipmentTag' when calling deleteExternalShipmentTag");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId,
        'externalShipmentTag': externalShipmentTag
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
        '/v3.0/externalShipment/{externalShipmentId}/tag/{externalShipmentTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateExternalShipmentById operation.
     * @callback module:api/ExternalShipmentApi~getDuplicateExternalShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an externalShipment by id
     * Returns a duplicated externalShipment identified by the specified id.
     * @param {Number} externalShipmentId Id of the externalShipment to be duplicated.
     * @param {module:api/ExternalShipmentApi~getDuplicateExternalShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExternalShipment}
     */
    this.getDuplicateExternalShipmentById = function(externalShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling getDuplicateExternalShipmentById");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
      var returnType = ExternalShipment;

      return this.apiClient.callApi(
        '/v3.0/externalShipment/duplicate/{externalShipmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShipmentByFilter operation.
     * @callback module:api/ExternalShipmentApi~getExternalShipmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ExternalShipment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search externalShipments by filter
     * Returns the list of externalShipments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ExternalShipmentApi~getExternalShipmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ExternalShipment>}
     */
    this.getExternalShipmentByFilter = function(opts, callback) {
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
      var returnType = [ExternalShipment];

      return this.apiClient.callApi(
        '/v3.0/externalShipment/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShipmentById operation.
     * @callback module:api/ExternalShipmentApi~getExternalShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an externalShipment by id
     * Returns the externalShipment identified by the specified id.
     * @param {Number} externalShipmentId Id of the externalShipment to be returned.
     * @param {module:api/ExternalShipmentApi~getExternalShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExternalShipment}
     */
    this.getExternalShipmentById = function(externalShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling getExternalShipmentById");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
      var returnType = ExternalShipment;

      return this.apiClient.callApi(
        '/v3.0/externalShipment/{externalShipmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShipmentFiles operation.
     * @callback module:api/ExternalShipmentApi~getExternalShipmentFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for an externalShipment.
     * Get all existing externalShipment files.
     * @param {Number} externalShipmentId Id of the externalShipment to get files for
     * @param {module:api/ExternalShipmentApi~getExternalShipmentFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getExternalShipmentFiles = function(externalShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling getExternalShipmentFiles");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
        '/v3.0/externalShipment/{externalShipmentId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShipmentTags operation.
     * @callback module:api/ExternalShipmentApi~getExternalShipmentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an externalShipment.
     * Get all existing externalShipment tags.
     * @param {Number} externalShipmentId Id of the externalShipment to get tags for
     * @param {module:api/ExternalShipmentApi~getExternalShipmentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getExternalShipmentTags = function(externalShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'externalShipmentId' is set
      if (externalShipmentId === undefined || externalShipmentId === null) {
        throw new Error("Missing the required parameter 'externalShipmentId' when calling getExternalShipmentTags");
      }


      var pathParams = {
        'externalShipmentId': externalShipmentId
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
        '/v3.0/externalShipment/{externalShipmentId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExternalShipment operation.
     * @callback module:api/ExternalShipmentApi~updateExternalShipmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an externalShipment
     * Updates an existing externalShipment using the specified data.
     * @param {module:model/ExternalShipment} body ExternalShipment to be updated.
     * @param {module:api/ExternalShipmentApi~updateExternalShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateExternalShipment = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateExternalShipment");
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
        '/v3.0/externalShipment', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExternalShipmentCustomFields operation.
     * @callback module:api/ExternalShipmentApi~updateExternalShipmentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an externalShipment custom fields
     * Updates an existing externalShipment custom fields using the specified data.
     * @param {module:model/ExternalShipment} body ExternalShipment to be updated.
     * @param {module:api/ExternalShipmentApi~updateExternalShipmentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateExternalShipmentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateExternalShipmentCustomFields");
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
        '/v3.0/externalShipment/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
