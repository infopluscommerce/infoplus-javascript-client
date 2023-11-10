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
    define(['ApiClient', 'model/RecordFile', 'model/ReturnShipment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RecordFile'), require('../model/ReturnShipment'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ReturnShipmentApi = factory(root.infoplus.ApiClient, root.infoplus.RecordFile, root.infoplus.ReturnShipment);
  }
}(this, function(ApiClient, RecordFile, ReturnShipment) {
  'use strict';

  /**
   * ReturnShipment service.
   * @module api/ReturnShipmentApi
   * @version beta
   */

  /**
   * Constructs a new ReturnShipmentApi. 
   * @alias module:api/ReturnShipmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addReturnShipmentAudit operation.
     * @callback module:api/ReturnShipmentApi~addReturnShipmentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a returnShipment
     * Adds an audit to an existing returnShipment.
     * @param {Number} returnShipmentId Id of the returnShipment to add an audit to
     * @param {String} returnShipmentAudit The audit to add
     * @param {module:api/ReturnShipmentApi~addReturnShipmentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReturnShipmentAudit = function(returnShipmentId, returnShipmentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling addReturnShipmentAudit");
      }

      // verify the required parameter 'returnShipmentAudit' is set
      if (returnShipmentAudit === undefined || returnShipmentAudit === null) {
        throw new Error("Missing the required parameter 'returnShipmentAudit' when calling addReturnShipmentAudit");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId,
        'returnShipmentAudit': returnShipmentAudit
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
        '/beta/returnShipment/{returnShipmentId}/audit/{returnShipmentAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addReturnShipmentFile operation.
     * @callback module:api/ReturnShipmentApi~addReturnShipmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a returnShipment
     * Adds a file to an existing returnShipment.
     * @param {Number} returnShipmentId Id of the returnShipment to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ReturnShipmentApi~addReturnShipmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReturnShipmentFile = function(returnShipmentId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling addReturnShipmentFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addReturnShipmentFile");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId,
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
        '/beta/returnShipment/{returnShipmentId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addReturnShipmentFileByURL operation.
     * @callback module:api/ReturnShipmentApi~addReturnShipmentFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a returnShipment by URL.
     * Adds a file to an existing returnShipment by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} returnShipmentId Id of the returnShipment to add an file to
     * @param {module:api/ReturnShipmentApi~addReturnShipmentFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReturnShipmentFileByURL = function(body, returnShipmentId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addReturnShipmentFileByURL");
      }

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling addReturnShipmentFileByURL");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId
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
        '/beta/returnShipment/{returnShipmentId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addReturnShipmentTag operation.
     * @callback module:api/ReturnShipmentApi~addReturnShipmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a returnShipment.
     * Adds a tag to an existing returnShipment.
     * @param {Number} returnShipmentId Id of the returnShipment to add a tag to
     * @param {String} returnShipmentTag The tag to add
     * @param {module:api/ReturnShipmentApi~addReturnShipmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addReturnShipmentTag = function(returnShipmentId, returnShipmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling addReturnShipmentTag");
      }

      // verify the required parameter 'returnShipmentTag' is set
      if (returnShipmentTag === undefined || returnShipmentTag === null) {
        throw new Error("Missing the required parameter 'returnShipmentTag' when calling addReturnShipmentTag");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId,
        'returnShipmentTag': returnShipmentTag
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
        '/beta/returnShipment/{returnShipmentId}/tag/{returnShipmentTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReturnShipmentFile operation.
     * @callback module:api/ReturnShipmentApi~deleteReturnShipmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a returnShipment.
     * Deletes an existing returnShipment file using the specified data.
     * @param {Number} returnShipmentId Id of the returnShipment to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/ReturnShipmentApi~deleteReturnShipmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReturnShipmentFile = function(returnShipmentId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling deleteReturnShipmentFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteReturnShipmentFile");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId,
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
        '/beta/returnShipment/{returnShipmentId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReturnShipmentTag operation.
     * @callback module:api/ReturnShipmentApi~deleteReturnShipmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a returnShipment.
     * Deletes an existing returnShipment tag using the specified data.
     * @param {Number} returnShipmentId Id of the returnShipment to remove tag from
     * @param {String} returnShipmentTag The tag to delete
     * @param {module:api/ReturnShipmentApi~deleteReturnShipmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReturnShipmentTag = function(returnShipmentId, returnShipmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling deleteReturnShipmentTag");
      }

      // verify the required parameter 'returnShipmentTag' is set
      if (returnShipmentTag === undefined || returnShipmentTag === null) {
        throw new Error("Missing the required parameter 'returnShipmentTag' when calling deleteReturnShipmentTag");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId,
        'returnShipmentTag': returnShipmentTag
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
        '/beta/returnShipment/{returnShipmentId}/tag/{returnShipmentTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateReturnShipmentById operation.
     * @callback module:api/ReturnShipmentApi~getDuplicateReturnShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReturnShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a returnShipment by id
     * Returns a duplicated returnShipment identified by the specified id.
     * @param {Number} returnShipmentId Id of the returnShipment to be duplicated.
     * @param {module:api/ReturnShipmentApi~getDuplicateReturnShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReturnShipment}
     */
    this.getDuplicateReturnShipmentById = function(returnShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling getDuplicateReturnShipmentById");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId
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
      var returnType = ReturnShipment;

      return this.apiClient.callApi(
        '/beta/returnShipment/duplicate/{returnShipmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReturnShipmentByFilter operation.
     * @callback module:api/ReturnShipmentApi~getReturnShipmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReturnShipment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search returnShipments by filter
     * Returns the list of returnShipments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ReturnShipmentApi~getReturnShipmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ReturnShipment>}
     */
    this.getReturnShipmentByFilter = function(opts, callback) {
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
      var returnType = [ReturnShipment];

      return this.apiClient.callApi(
        '/beta/returnShipment/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReturnShipmentById operation.
     * @callback module:api/ReturnShipmentApi~getReturnShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReturnShipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a returnShipment by id
     * Returns the returnShipment identified by the specified id.
     * @param {Number} returnShipmentId Id of the returnShipment to be returned.
     * @param {module:api/ReturnShipmentApi~getReturnShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReturnShipment}
     */
    this.getReturnShipmentById = function(returnShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling getReturnShipmentById");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId
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
      var returnType = ReturnShipment;

      return this.apiClient.callApi(
        '/beta/returnShipment/{returnShipmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReturnShipmentFiles operation.
     * @callback module:api/ReturnShipmentApi~getReturnShipmentFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a returnShipment.
     * Get all existing returnShipment files.
     * @param {Number} returnShipmentId Id of the returnShipment to get files for
     * @param {module:api/ReturnShipmentApi~getReturnShipmentFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getReturnShipmentFiles = function(returnShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling getReturnShipmentFiles");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId
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
        '/beta/returnShipment/{returnShipmentId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReturnShipmentTags operation.
     * @callback module:api/ReturnShipmentApi~getReturnShipmentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a returnShipment.
     * Get all existing returnShipment tags.
     * @param {Number} returnShipmentId Id of the returnShipment to get tags for
     * @param {module:api/ReturnShipmentApi~getReturnShipmentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getReturnShipmentTags = function(returnShipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'returnShipmentId' is set
      if (returnShipmentId === undefined || returnShipmentId === null) {
        throw new Error("Missing the required parameter 'returnShipmentId' when calling getReturnShipmentTags");
      }


      var pathParams = {
        'returnShipmentId': returnShipmentId
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
        '/beta/returnShipment/{returnShipmentId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReturnShipmentCustomFields operation.
     * @callback module:api/ReturnShipmentApi~updateReturnShipmentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a returnShipment custom fields
     * Updates an existing returnShipment custom fields using the specified data.
     * @param {module:model/ReturnShipment} body ReturnShipment to be updated.
     * @param {module:api/ReturnShipmentApi~updateReturnShipmentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateReturnShipmentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateReturnShipmentCustomFields");
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
        '/beta/returnShipment/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));