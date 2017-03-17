(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/VendorComplianceSurvey'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/VendorComplianceSurvey'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.VendorComplianceSurveyApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.VendorComplianceSurvey);
  }
}(this, function(ApiClient, ApiResponse, VendorComplianceSurvey) {
  'use strict';

  /**
   * VendorComplianceSurvey service.
   * @module api/VendorComplianceSurveyApi
   * @version beta
   */

  /**
   * Constructs a new VendorComplianceSurveyApi. 
   * @alias module:api/VendorComplianceSurveyApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addVendorComplianceSurvey operation.
     * @callback module:api/VendorComplianceSurveyApi~addVendorComplianceSurveyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorComplianceSurvey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a vendorComplianceSurvey
     * Inserts a new vendorComplianceSurvey using the specified data.
     * @param {module:model/VendorComplianceSurvey} body VendorComplianceSurvey to be inserted.
     * @param {module:api/VendorComplianceSurveyApi~addVendorComplianceSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VendorComplianceSurvey}
     */
    this.addVendorComplianceSurvey = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addVendorComplianceSurvey";
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
      var returnType = VendorComplianceSurvey;

      return this.apiClient.callApi(
        '/beta/vendorComplianceSurvey', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addVendorComplianceSurveyAudit operation.
     * @callback module:api/VendorComplianceSurveyApi~addVendorComplianceSurveyAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a vendorComplianceSurvey
     * Adds an audit to an existing vendorComplianceSurvey.
     * @param {Integer} vendorComplianceSurveyId Id of the vendorComplianceSurvey to add an audit to
     * @param {String} vendorComplianceSurveyAudit The audit to add
     * @param {module:api/VendorComplianceSurveyApi~addVendorComplianceSurveyAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addVendorComplianceSurveyAudit = function(vendorComplianceSurveyId, vendorComplianceSurveyAudit, callback) {
      var postBody = null;

      // verify the required parameter 'vendorComplianceSurveyId' is set
      if (vendorComplianceSurveyId == undefined || vendorComplianceSurveyId == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyId' when calling addVendorComplianceSurveyAudit";
      }

      // verify the required parameter 'vendorComplianceSurveyAudit' is set
      if (vendorComplianceSurveyAudit == undefined || vendorComplianceSurveyAudit == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyAudit' when calling addVendorComplianceSurveyAudit";
      }


      var pathParams = {
        'vendorComplianceSurveyId': vendorComplianceSurveyId,
        'vendorComplianceSurveyAudit': vendorComplianceSurveyAudit
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
        '/beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/audit/{vendorComplianceSurveyAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addVendorComplianceSurveyTag operation.
     * @callback module:api/VendorComplianceSurveyApi~addVendorComplianceSurveyTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a vendorComplianceSurvey.
     * Adds a tag to an existing vendorComplianceSurvey.
     * @param {Integer} vendorComplianceSurveyId Id of the vendorComplianceSurvey to add a tag to
     * @param {String} vendorComplianceSurveyTag The tag to add
     * @param {module:api/VendorComplianceSurveyApi~addVendorComplianceSurveyTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addVendorComplianceSurveyTag = function(vendorComplianceSurveyId, vendorComplianceSurveyTag, callback) {
      var postBody = null;

      // verify the required parameter 'vendorComplianceSurveyId' is set
      if (vendorComplianceSurveyId == undefined || vendorComplianceSurveyId == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyId' when calling addVendorComplianceSurveyTag";
      }

      // verify the required parameter 'vendorComplianceSurveyTag' is set
      if (vendorComplianceSurveyTag == undefined || vendorComplianceSurveyTag == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyTag' when calling addVendorComplianceSurveyTag";
      }


      var pathParams = {
        'vendorComplianceSurveyId': vendorComplianceSurveyId,
        'vendorComplianceSurveyTag': vendorComplianceSurveyTag
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
        '/beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/tag/{vendorComplianceSurveyTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVendorComplianceSurvey operation.
     * @callback module:api/VendorComplianceSurveyApi~deleteVendorComplianceSurveyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a vendorComplianceSurvey
     * Deletes the vendorComplianceSurvey identified by the specified id.
     * @param {Integer} vendorComplianceSurveyId Id of the vendorComplianceSurvey to be deleted.
     * @param {module:api/VendorComplianceSurveyApi~deleteVendorComplianceSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVendorComplianceSurvey = function(vendorComplianceSurveyId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorComplianceSurveyId' is set
      if (vendorComplianceSurveyId == undefined || vendorComplianceSurveyId == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyId' when calling deleteVendorComplianceSurvey";
      }


      var pathParams = {
        'vendorComplianceSurveyId': vendorComplianceSurveyId
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
        '/beta/vendorComplianceSurvey/{vendorComplianceSurveyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVendorComplianceSurveyTag operation.
     * @callback module:api/VendorComplianceSurveyApi~deleteVendorComplianceSurveyTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a vendorComplianceSurvey.
     * Deletes an existing vendorComplianceSurvey tag using the specified data.
     * @param {Integer} vendorComplianceSurveyId Id of the vendorComplianceSurvey to remove tag from
     * @param {String} vendorComplianceSurveyTag The tag to delete
     * @param {module:api/VendorComplianceSurveyApi~deleteVendorComplianceSurveyTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVendorComplianceSurveyTag = function(vendorComplianceSurveyId, vendorComplianceSurveyTag, callback) {
      var postBody = null;

      // verify the required parameter 'vendorComplianceSurveyId' is set
      if (vendorComplianceSurveyId == undefined || vendorComplianceSurveyId == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyId' when calling deleteVendorComplianceSurveyTag";
      }

      // verify the required parameter 'vendorComplianceSurveyTag' is set
      if (vendorComplianceSurveyTag == undefined || vendorComplianceSurveyTag == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyTag' when calling deleteVendorComplianceSurveyTag";
      }


      var pathParams = {
        'vendorComplianceSurveyId': vendorComplianceSurveyId,
        'vendorComplianceSurveyTag': vendorComplianceSurveyTag
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
        '/beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/tag/{vendorComplianceSurveyTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateVendorComplianceSurveyById operation.
     * @callback module:api/VendorComplianceSurveyApi~getDuplicateVendorComplianceSurveyByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorComplianceSurvey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a vendorComplianceSurvey by id
     * Returns a duplicated vendorComplianceSurvey identified by the specified id.
     * @param {Integer} vendorComplianceSurveyId Id of the vendorComplianceSurvey to be duplicated.
     * @param {module:api/VendorComplianceSurveyApi~getDuplicateVendorComplianceSurveyByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VendorComplianceSurvey}
     */
    this.getDuplicateVendorComplianceSurveyById = function(vendorComplianceSurveyId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorComplianceSurveyId' is set
      if (vendorComplianceSurveyId == undefined || vendorComplianceSurveyId == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyId' when calling getDuplicateVendorComplianceSurveyById";
      }


      var pathParams = {
        'vendorComplianceSurveyId': vendorComplianceSurveyId
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
      var returnType = VendorComplianceSurvey;

      return this.apiClient.callApi(
        '/beta/vendorComplianceSurvey/duplicate/{vendorComplianceSurveyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorComplianceSurveyByFilter operation.
     * @callback module:api/VendorComplianceSurveyApi~getVendorComplianceSurveyByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VendorComplianceSurvey>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search vendorComplianceSurveys by filter
     * Returns the list of vendorComplianceSurveys that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/VendorComplianceSurveyApi~getVendorComplianceSurveyByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/VendorComplianceSurvey>}
     */
    this.getVendorComplianceSurveyByFilter = function(opts, callback) {
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
      var returnType = [VendorComplianceSurvey];

      return this.apiClient.callApi(
        '/beta/vendorComplianceSurvey/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorComplianceSurveyById operation.
     * @callback module:api/VendorComplianceSurveyApi~getVendorComplianceSurveyByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VendorComplianceSurvey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a vendorComplianceSurvey by id
     * Returns the vendorComplianceSurvey identified by the specified id.
     * @param {Integer} vendorComplianceSurveyId Id of the vendorComplianceSurvey to be returned.
     * @param {module:api/VendorComplianceSurveyApi~getVendorComplianceSurveyByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VendorComplianceSurvey}
     */
    this.getVendorComplianceSurveyById = function(vendorComplianceSurveyId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorComplianceSurveyId' is set
      if (vendorComplianceSurveyId == undefined || vendorComplianceSurveyId == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyId' when calling getVendorComplianceSurveyById";
      }


      var pathParams = {
        'vendorComplianceSurveyId': vendorComplianceSurveyId
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
      var returnType = VendorComplianceSurvey;

      return this.apiClient.callApi(
        '/beta/vendorComplianceSurvey/{vendorComplianceSurveyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorComplianceSurveyTags operation.
     * @callback module:api/VendorComplianceSurveyApi~getVendorComplianceSurveyTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a vendorComplianceSurvey.
     * Get all existing vendorComplianceSurvey tags.
     * @param {Integer} vendorComplianceSurveyId Id of the vendorComplianceSurvey to get tags for
     * @param {module:api/VendorComplianceSurveyApi~getVendorComplianceSurveyTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getVendorComplianceSurveyTags = function(vendorComplianceSurveyId, callback) {
      var postBody = null;

      // verify the required parameter 'vendorComplianceSurveyId' is set
      if (vendorComplianceSurveyId == undefined || vendorComplianceSurveyId == null) {
        throw "Missing the required parameter 'vendorComplianceSurveyId' when calling getVendorComplianceSurveyTags";
      }


      var pathParams = {
        'vendorComplianceSurveyId': vendorComplianceSurveyId
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
        '/beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVendorComplianceSurvey operation.
     * @callback module:api/VendorComplianceSurveyApi~updateVendorComplianceSurveyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a vendorComplianceSurvey
     * Updates an existing vendorComplianceSurvey using the specified data.
     * @param {module:model/VendorComplianceSurvey} body VendorComplianceSurvey to be updated.
     * @param {module:api/VendorComplianceSurveyApi~updateVendorComplianceSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateVendorComplianceSurvey = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateVendorComplianceSurvey";
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
        '/beta/vendorComplianceSurvey', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVendorComplianceSurveyCustomFields operation.
     * @callback module:api/VendorComplianceSurveyApi~updateVendorComplianceSurveyCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a vendorComplianceSurvey custom fields
     * Updates an existing vendorComplianceSurvey custom fields using the specified data.
     * @param {module:model/VendorComplianceSurvey} body VendorComplianceSurvey to be updated.
     * @param {module:api/VendorComplianceSurveyApi~updateVendorComplianceSurveyCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateVendorComplianceSurveyCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateVendorComplianceSurveyCustomFields";
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
        '/beta/vendorComplianceSurvey/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
