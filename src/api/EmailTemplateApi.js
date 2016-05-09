(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/EmailTemplate', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EmailTemplate'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.EmailTemplateApi = factory(root.infoplus.ApiClient, root.infoplus.EmailTemplate, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, EmailTemplate, ApiResponse) {
  'use strict';

  /**
   * EmailTemplate service.
   * @module api/EmailTemplateApi
   * @version 1.0
   */

  /**
   * Constructs a new EmailTemplateApi. 
   * @alias module:api/EmailTemplateApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addEmailTemplate operation.
     * @callback module:api/EmailTemplateApi~addEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an emailTemplate
     * Inserts a new emailTemplate using the specified data.
     * @param {module:model/EmailTemplate} body EmailTemplate to be inserted.
     * @param {module:api/EmailTemplateApi~addEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EmailTemplate}
     */
    this.addEmailTemplate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addEmailTemplate";
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
      var returnType = EmailTemplate;

      return this.apiClient.callApi(
        '/v1.0/emailTemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEmailTemplate operation.
     * @callback module:api/EmailTemplateApi~deleteEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an emailTemplate
     * Deletes the emailTemplate identified by the specified id.
     * @param {Integer} emailTemplateId Id of the emailTemplate to be deleted.
     * @param {module:api/EmailTemplateApi~deleteEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEmailTemplate = function(emailTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId == undefined || emailTemplateId == null) {
        throw "Missing the required parameter 'emailTemplateId' when calling deleteEmailTemplate";
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId
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
        '/v1.0/emailTemplate/{emailTemplateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailTemplateByFilter operation.
     * @callback module:api/EmailTemplateApi~getEmailTemplateByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EmailTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search emailTemplates by filter
     * Returns the list of emailTemplates that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/EmailTemplateApi~getEmailTemplateByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/EmailTemplate>}
     */
    this.getEmailTemplateByFilter = function(opts, callback) {
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
      var returnType = [EmailTemplate];

      return this.apiClient.callApi(
        '/v1.0/emailTemplate/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailTemplateById operation.
     * @callback module:api/EmailTemplateApi~getEmailTemplateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an emailTemplate by id
     * Returns the emailTemplate identified by the specified id.
     * @param {Integer} emailTemplateId Id of the emailTemplate to be returned.
     * @param {module:api/EmailTemplateApi~getEmailTemplateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EmailTemplate}
     */
    this.getEmailTemplateById = function(emailTemplateId, callback) {
      var postBody = null;

      // verify the required parameter 'emailTemplateId' is set
      if (emailTemplateId == undefined || emailTemplateId == null) {
        throw "Missing the required parameter 'emailTemplateId' when calling getEmailTemplateById";
      }


      var pathParams = {
        'emailTemplateId': emailTemplateId
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
      var returnType = EmailTemplate;

      return this.apiClient.callApi(
        '/v1.0/emailTemplate/{emailTemplateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmailTemplate operation.
     * @callback module:api/EmailTemplateApi~updateEmailTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an emailTemplate
     * Updates an existing emailTemplate using the specified data.
     * @param {module:model/EmailTemplate} body EmailTemplate to be updated.
     * @param {module:api/EmailTemplateApi~updateEmailTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateEmailTemplate = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateEmailTemplate";
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
        '/v1.0/emailTemplate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
