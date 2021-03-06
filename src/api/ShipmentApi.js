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
    define(['ApiClient', 'model/RecordFile', 'model/Shipment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RecordFile'), require('../model/Shipment'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ShipmentApi = factory(root.infoplus.ApiClient, root.infoplus.RecordFile, root.infoplus.Shipment);
  }
}(this, function(ApiClient, RecordFile, Shipment) {
  'use strict';

  /**
   * Shipment service.
   * @module api/ShipmentApi
   * @version beta
   */

  /**
   * Constructs a new ShipmentApi. 
   * @alias module:api/ShipmentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addShipmentAudit operation.
     * @callback module:api/ShipmentApi~addShipmentAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a shipment
     * Adds an audit to an existing shipment.
     * @param {Number} shipmentId Id of the shipment to add an audit to
     * @param {String} shipmentAudit The audit to add
     * @param {module:api/ShipmentApi~addShipmentAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addShipmentAudit = function(shipmentId, shipmentAudit, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling addShipmentAudit");
      }

      // verify the required parameter 'shipmentAudit' is set
      if (shipmentAudit === undefined || shipmentAudit === null) {
        throw new Error("Missing the required parameter 'shipmentAudit' when calling addShipmentAudit");
      }


      var pathParams = {
        'shipmentId': shipmentId,
        'shipmentAudit': shipmentAudit
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
        '/beta/shipment/{shipmentId}/audit/{shipmentAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addShipmentFile operation.
     * @callback module:api/ShipmentApi~addShipmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a shipment
     * Adds a file to an existing shipment.
     * @param {Number} shipmentId Id of the shipment to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/ShipmentApi~addShipmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addShipmentFile = function(shipmentId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling addShipmentFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addShipmentFile");
      }


      var pathParams = {
        'shipmentId': shipmentId,
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
        '/beta/shipment/{shipmentId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addShipmentFileByURL operation.
     * @callback module:api/ShipmentApi~addShipmentFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a shipment by URL.
     * Adds a file to an existing shipment by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} shipmentId Id of the shipment to add an file to
     * @param {module:api/ShipmentApi~addShipmentFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addShipmentFileByURL = function(body, shipmentId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addShipmentFileByURL");
      }

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling addShipmentFileByURL");
      }


      var pathParams = {
        'shipmentId': shipmentId
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
        '/beta/shipment/{shipmentId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addShipmentTag operation.
     * @callback module:api/ShipmentApi~addShipmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a shipment.
     * Adds a tag to an existing shipment.
     * @param {Number} shipmentId Id of the shipment to add a tag to
     * @param {String} shipmentTag The tag to add
     * @param {module:api/ShipmentApi~addShipmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addShipmentTag = function(shipmentId, shipmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling addShipmentTag");
      }

      // verify the required parameter 'shipmentTag' is set
      if (shipmentTag === undefined || shipmentTag === null) {
        throw new Error("Missing the required parameter 'shipmentTag' when calling addShipmentTag");
      }


      var pathParams = {
        'shipmentId': shipmentId,
        'shipmentTag': shipmentTag
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
        '/beta/shipment/{shipmentId}/tag/{shipmentTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteShipmentFile operation.
     * @callback module:api/ShipmentApi~deleteShipmentFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a shipment.
     * Deletes an existing shipment file using the specified data.
     * @param {Number} shipmentId Id of the shipment to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/ShipmentApi~deleteShipmentFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteShipmentFile = function(shipmentId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling deleteShipmentFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteShipmentFile");
      }


      var pathParams = {
        'shipmentId': shipmentId,
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
        '/beta/shipment/{shipmentId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteShipmentTag operation.
     * @callback module:api/ShipmentApi~deleteShipmentTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a shipment.
     * Deletes an existing shipment tag using the specified data.
     * @param {Number} shipmentId Id of the shipment to remove tag from
     * @param {String} shipmentTag The tag to delete
     * @param {module:api/ShipmentApi~deleteShipmentTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteShipmentTag = function(shipmentId, shipmentTag, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling deleteShipmentTag");
      }

      // verify the required parameter 'shipmentTag' is set
      if (shipmentTag === undefined || shipmentTag === null) {
        throw new Error("Missing the required parameter 'shipmentTag' when calling deleteShipmentTag");
      }


      var pathParams = {
        'shipmentId': shipmentId,
        'shipmentTag': shipmentTag
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
        '/beta/shipment/{shipmentId}/tag/{shipmentTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateShipmentById operation.
     * @callback module:api/ShipmentApi~getDuplicateShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a shipment by id
     * Returns a duplicated shipment identified by the specified id.
     * @param {Number} shipmentId Id of the shipment to be duplicated.
     * @param {module:api/ShipmentApi~getDuplicateShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    this.getDuplicateShipmentById = function(shipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling getDuplicateShipmentById");
      }


      var pathParams = {
        'shipmentId': shipmentId
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
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/beta/shipment/duplicate/{shipmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShipmentByFilter operation.
     * @callback module:api/ShipmentApi~getShipmentByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Shipment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search shipments by filter
     * Returns the list of shipments that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ShipmentApi~getShipmentByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Shipment>}
     */
    this.getShipmentByFilter = function(opts, callback) {
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
      var returnType = [Shipment];

      return this.apiClient.callApi(
        '/beta/shipment/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShipmentById operation.
     * @callback module:api/ShipmentApi~getShipmentByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a shipment by id
     * Returns the shipment identified by the specified id.
     * @param {Number} shipmentId Id of the shipment to be returned.
     * @param {module:api/ShipmentApi~getShipmentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    this.getShipmentById = function(shipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling getShipmentById");
      }


      var pathParams = {
        'shipmentId': shipmentId
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
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/beta/shipment/{shipmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShipmentFiles operation.
     * @callback module:api/ShipmentApi~getShipmentFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a shipment.
     * Get all existing shipment files.
     * @param {Number} shipmentId Id of the shipment to get files for
     * @param {module:api/ShipmentApi~getShipmentFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getShipmentFiles = function(shipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling getShipmentFiles");
      }


      var pathParams = {
        'shipmentId': shipmentId
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
        '/beta/shipment/{shipmentId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShipmentTags operation.
     * @callback module:api/ShipmentApi~getShipmentTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a shipment.
     * Get all existing shipment tags.
     * @param {Number} shipmentId Id of the shipment to get tags for
     * @param {module:api/ShipmentApi~getShipmentTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getShipmentTags = function(shipmentId, callback) {
      var postBody = null;

      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling getShipmentTags");
      }


      var pathParams = {
        'shipmentId': shipmentId
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
        '/beta/shipment/{shipmentId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateShipmentCustomFields operation.
     * @callback module:api/ShipmentApi~updateShipmentCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a shipment custom fields
     * Updates an existing shipment custom fields using the specified data.
     * @param {module:model/Shipment} body Shipment to be updated.
     * @param {module:api/ShipmentApi~updateShipmentCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateShipmentCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateShipmentCustomFields");
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
        '/beta/shipment/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
