(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InventoryDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventoryDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InventoryDetailApi = factory(root.infoplus.ApiClient, root.infoplus.InventoryDetail);
  }
}(this, function(ApiClient, InventoryDetail) {
  'use strict';

  /**
   * InventoryDetail service.
   * @module api/InventoryDetailApi
   * @version beta
   */

  /**
   * Constructs a new InventoryDetailApi. 
   * @alias module:api/InventoryDetailApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInventoryDetailAudit operation.
     * @callback module:api/InventoryDetailApi~addInventoryDetailAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an inventoryDetail
     * Adds an audit to an existing inventoryDetail.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to add an audit to
     * @param {String} inventoryDetailAudit The audit to add
     * @param {module:api/InventoryDetailApi~addInventoryDetailAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryDetailAudit = function(inventoryDetailId, inventoryDetailAudit, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling addInventoryDetailAudit";
      }

      // verify the required parameter 'inventoryDetailAudit' is set
      if (inventoryDetailAudit == undefined || inventoryDetailAudit == null) {
        throw "Missing the required parameter 'inventoryDetailAudit' when calling addInventoryDetailAudit";
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
        'inventoryDetailAudit': inventoryDetailAudit
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
        '/beta/inventoryDetail/{inventoryDetailId}/audit/{inventoryDetailAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInventoryDetailTag operation.
     * @callback module:api/InventoryDetailApi~addInventoryDetailTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an inventoryDetail.
     * Adds a tag to an existing inventoryDetail.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to add a tag to
     * @param {String} inventoryDetailTag The tag to add
     * @param {module:api/InventoryDetailApi~addInventoryDetailTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInventoryDetailTag = function(inventoryDetailId, inventoryDetailTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling addInventoryDetailTag";
      }

      // verify the required parameter 'inventoryDetailTag' is set
      if (inventoryDetailTag == undefined || inventoryDetailTag == null) {
        throw "Missing the required parameter 'inventoryDetailTag' when calling addInventoryDetailTag";
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
        'inventoryDetailTag': inventoryDetailTag
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
        '/beta/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInventoryDetailTag operation.
     * @callback module:api/InventoryDetailApi~deleteInventoryDetailTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an inventoryDetail.
     * Deletes an existing inventoryDetail tag using the specified data.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to remove tag from
     * @param {String} inventoryDetailTag The tag to delete
     * @param {module:api/InventoryDetailApi~deleteInventoryDetailTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInventoryDetailTag = function(inventoryDetailId, inventoryDetailTag, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling deleteInventoryDetailTag";
      }

      // verify the required parameter 'inventoryDetailTag' is set
      if (inventoryDetailTag == undefined || inventoryDetailTag == null) {
        throw "Missing the required parameter 'inventoryDetailTag' when calling deleteInventoryDetailTag";
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId,
        'inventoryDetailTag': inventoryDetailTag
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
        '/beta/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInventoryDetailById operation.
     * @callback module:api/InventoryDetailApi~getDuplicateInventoryDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an inventoryDetail by id
     * Returns a duplicated inventoryDetail identified by the specified id.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to be duplicated.
     * @param {module:api/InventoryDetailApi~getDuplicateInventoryDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryDetail}
     */
    this.getDuplicateInventoryDetailById = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling getDuplicateInventoryDetailById";
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
      var returnType = InventoryDetail;

      return this.apiClient.callApi(
        '/beta/inventoryDetail/duplicate/{inventoryDetailId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailByFilter operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventoryDetail>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search inventoryDetails by filter
     * Returns the list of inventoryDetails that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InventoryDetailApi~getInventoryDetailByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InventoryDetail>}
     */
    this.getInventoryDetailByFilter = function(opts, callback) {
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
      var returnType = [InventoryDetail];

      return this.apiClient.callApi(
        '/beta/inventoryDetail/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailById operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventoryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an inventoryDetail by id
     * Returns the inventoryDetail identified by the specified id.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to be returned.
     * @param {module:api/InventoryDetailApi~getInventoryDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InventoryDetail}
     */
    this.getInventoryDetailById = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling getInventoryDetailById";
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
      var returnType = InventoryDetail;

      return this.apiClient.callApi(
        '/beta/inventoryDetail/{inventoryDetailId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInventoryDetailTags operation.
     * @callback module:api/InventoryDetailApi~getInventoryDetailTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an inventoryDetail.
     * Get all existing inventoryDetail tags.
     * @param {Integer} inventoryDetailId Id of the inventoryDetail to get tags for
     * @param {module:api/InventoryDetailApi~getInventoryDetailTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInventoryDetailTags = function(inventoryDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'inventoryDetailId' is set
      if (inventoryDetailId == undefined || inventoryDetailId == null) {
        throw "Missing the required parameter 'inventoryDetailId' when calling getInventoryDetailTags";
      }


      var pathParams = {
        'inventoryDetailId': inventoryDetailId
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
        '/beta/inventoryDetail/{inventoryDetailId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInventoryDetailCustomFields operation.
     * @callback module:api/InventoryDetailApi~updateInventoryDetailCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an inventoryDetail custom fields
     * Updates an existing inventoryDetail custom fields using the specified data.
     * @param {module:model/InventoryDetail} body InventoryDetail to be updated.
     * @param {module:api/InventoryDetailApi~updateInventoryDetailCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateInventoryDetailCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateInventoryDetailCustomFields";
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
        '/beta/inventoryDetail/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
