# infoplus.EmailTemplateApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmailTemplate**](EmailTemplateApi.md#addEmailTemplate) | **POST** /v2.0/emailTemplate | Create an emailTemplate
[**deleteEmailTemplate**](EmailTemplateApi.md#deleteEmailTemplate) | **DELETE** /v2.0/emailTemplate/{emailTemplateId} | Delete an emailTemplate
[**getDuplicateEmailTemplateById**](EmailTemplateApi.md#getDuplicateEmailTemplateById) | **GET** /v2.0/emailTemplate/duplicate/{emailTemplateId} | Get a duplicated an emailTemplate by id
[**getEmailTemplateByFilter**](EmailTemplateApi.md#getEmailTemplateByFilter) | **GET** /v2.0/emailTemplate/search | Search emailTemplates by filter
[**getEmailTemplateById**](EmailTemplateApi.md#getEmailTemplateById) | **GET** /v2.0/emailTemplate/{emailTemplateId} | Get an emailTemplate by id
[**updateEmailTemplate**](EmailTemplateApi.md#updateEmailTemplate) | **PUT** /v2.0/emailTemplate | Update an emailTemplate
[**updateEmailTemplateCustomFields**](EmailTemplateApi.md#updateEmailTemplateCustomFields) | **PUT** /v2.0/emailTemplate/customFields | Update an emailTemplate custom fields


<a name="addEmailTemplate"></a>
# **addEmailTemplate**
> EmailTemplate addEmailTemplate(body)

Create an emailTemplate

Inserts a new emailTemplate using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.EmailTemplateApi()

var body = new infoplus.EmailTemplate(); // {EmailTemplate} EmailTemplate to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addEmailTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailTemplate**](EmailTemplate.md)| EmailTemplate to be inserted. | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEmailTemplate"></a>
# **deleteEmailTemplate**
> deleteEmailTemplate(emailTemplateId)

Delete an emailTemplate

Deletes the emailTemplate identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.EmailTemplateApi()

var emailTemplateId = 56; // {Integer} Id of the emailTemplate to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteEmailTemplate(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Integer**| Id of the emailTemplate to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateEmailTemplateById"></a>
# **getDuplicateEmailTemplateById**
> EmailTemplate getDuplicateEmailTemplateById(emailTemplateId)

Get a duplicated an emailTemplate by id

Returns a duplicated emailTemplate identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.EmailTemplateApi()

var emailTemplateId = 56; // {Integer} Id of the emailTemplate to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateEmailTemplateById(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Integer**| Id of the emailTemplate to be duplicated. | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmailTemplateByFilter"></a>
# **getEmailTemplateByFilter**
> [EmailTemplate] getEmailTemplateByFilter(opts)

Search emailTemplates by filter

Returns the list of emailTemplates that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.EmailTemplateApi()

var opts = { 
  'filter': "filter_example", // {String} Query string, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56, // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // {String} Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getEmailTemplateByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[EmailTemplate]**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmailTemplateById"></a>
# **getEmailTemplateById**
> EmailTemplate getEmailTemplateById(emailTemplateId)

Get an emailTemplate by id

Returns the emailTemplate identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.EmailTemplateApi()

var emailTemplateId = 56; // {Integer} Id of the emailTemplate to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getEmailTemplateById(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Integer**| Id of the emailTemplate to be returned. | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateEmailTemplate"></a>
# **updateEmailTemplate**
> updateEmailTemplate(body)

Update an emailTemplate

Updates an existing emailTemplate using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.EmailTemplateApi()

var body = new infoplus.EmailTemplate(); // {EmailTemplate} EmailTemplate to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateEmailTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailTemplate**](EmailTemplate.md)| EmailTemplate to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmailTemplateCustomFields"></a>
# **updateEmailTemplateCustomFields**
> updateEmailTemplateCustomFields(body)

Update an emailTemplate custom fields

Updates an existing emailTemplate custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.EmailTemplateApi()

var body = new infoplus.EmailTemplate(); // {EmailTemplate} EmailTemplate to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateEmailTemplateCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailTemplate**](EmailTemplate.md)| EmailTemplate to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

