# infoplus.EmailTemplateApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmailTemplate**](EmailTemplateApi.md#addEmailTemplate) | **POST** /v3.0/emailTemplate | Create an emailTemplate
[**addEmailTemplateAudit**](EmailTemplateApi.md#addEmailTemplateAudit) | **PUT** /v3.0/emailTemplate/{emailTemplateId}/audit/{emailTemplateAudit} | Add new audit for an emailTemplate
[**addEmailTemplateFile**](EmailTemplateApi.md#addEmailTemplateFile) | **POST** /v3.0/emailTemplate/{emailTemplateId}/file/{fileName} | Attach a file to an emailTemplate
[**addEmailTemplateFileByURL**](EmailTemplateApi.md#addEmailTemplateFileByURL) | **POST** /v3.0/emailTemplate/{emailTemplateId}/file | Attach a file to an emailTemplate by URL.
[**addEmailTemplateTag**](EmailTemplateApi.md#addEmailTemplateTag) | **PUT** /v3.0/emailTemplate/{emailTemplateId}/tag/{emailTemplateTag} | Add new tags for an emailTemplate.
[**deleteEmailTemplate**](EmailTemplateApi.md#deleteEmailTemplate) | **DELETE** /v3.0/emailTemplate/{emailTemplateId} | Delete an emailTemplate
[**deleteEmailTemplateFile**](EmailTemplateApi.md#deleteEmailTemplateFile) | **DELETE** /v3.0/emailTemplate/{emailTemplateId}/file/{fileId} | Delete a file for an emailTemplate.
[**deleteEmailTemplateTag**](EmailTemplateApi.md#deleteEmailTemplateTag) | **DELETE** /v3.0/emailTemplate/{emailTemplateId}/tag/{emailTemplateTag} | Delete a tag for an emailTemplate.
[**getDuplicateEmailTemplateById**](EmailTemplateApi.md#getDuplicateEmailTemplateById) | **GET** /v3.0/emailTemplate/duplicate/{emailTemplateId} | Get a duplicated an emailTemplate by id
[**getEmailTemplateByFilter**](EmailTemplateApi.md#getEmailTemplateByFilter) | **GET** /v3.0/emailTemplate/search | Search emailTemplates by filter
[**getEmailTemplateById**](EmailTemplateApi.md#getEmailTemplateById) | **GET** /v3.0/emailTemplate/{emailTemplateId} | Get an emailTemplate by id
[**getEmailTemplateFiles**](EmailTemplateApi.md#getEmailTemplateFiles) | **GET** /v3.0/emailTemplate/{emailTemplateId}/file | Get the files for an emailTemplate.
[**getEmailTemplateTags**](EmailTemplateApi.md#getEmailTemplateTags) | **GET** /v3.0/emailTemplate/{emailTemplateId}/tag | Get the tags for an emailTemplate.
[**updateEmailTemplate**](EmailTemplateApi.md#updateEmailTemplate) | **PUT** /v3.0/emailTemplate | Update an emailTemplate
[**updateEmailTemplateCustomFields**](EmailTemplateApi.md#updateEmailTemplateCustomFields) | **PUT** /v3.0/emailTemplate/customFields | Update an emailTemplate custom fields


<a name="addEmailTemplate"></a>
# **addEmailTemplate**
> EmailTemplate addEmailTemplate(body)

Create an emailTemplate

Inserts a new emailTemplate using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var body = new infoplus.EmailTemplate(); // EmailTemplate | EmailTemplate to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addEmailTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailTemplate**](EmailTemplate.md)| EmailTemplate to be inserted. | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addEmailTemplateAudit"></a>
# **addEmailTemplateAudit**
> addEmailTemplateAudit(emailTemplateId, emailTemplateAudit)

Add new audit for an emailTemplate

Adds an audit to an existing emailTemplate.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to add an audit to

var emailTemplateAudit = "emailTemplateAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEmailTemplateAudit(emailTemplateId, emailTemplateAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to add an audit to | 
 **emailTemplateAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addEmailTemplateFile"></a>
# **addEmailTemplateFile**
> addEmailTemplateFile(emailTemplateId, fileName)

Attach a file to an emailTemplate

Adds a file to an existing emailTemplate.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEmailTemplateFile(emailTemplateId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addEmailTemplateFileByURL"></a>
# **addEmailTemplateFileByURL**
> addEmailTemplateFileByURL(body, emailTemplateId)

Attach a file to an emailTemplate by URL.

Adds a file to an existing emailTemplate by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var emailTemplateId = 56; // Number | Id of the emailTemplate to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEmailTemplateFileByURL(body, emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **emailTemplateId** | **Number**| Id of the emailTemplate to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addEmailTemplateTag"></a>
# **addEmailTemplateTag**
> addEmailTemplateTag(emailTemplateId, emailTemplateTag)

Add new tags for an emailTemplate.

Adds a tag to an existing emailTemplate.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to add a tag to

var emailTemplateTag = "emailTemplateTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEmailTemplateTag(emailTemplateId, emailTemplateTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to add a tag to | 
 **emailTemplateTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEmailTemplate(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEmailTemplateFile"></a>
# **deleteEmailTemplateFile**
> deleteEmailTemplateFile(emailTemplateId, fileId)

Delete a file for an emailTemplate.

Deletes an existing emailTemplate file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEmailTemplateFile(emailTemplateId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEmailTemplateTag"></a>
# **deleteEmailTemplateTag**
> deleteEmailTemplateTag(emailTemplateId, emailTemplateTag)

Delete a tag for an emailTemplate.

Deletes an existing emailTemplate tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to remove tag from

var emailTemplateTag = "emailTemplateTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEmailTemplateTag(emailTemplateId, emailTemplateTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to remove tag from | 
 **emailTemplateTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateEmailTemplateById(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to be duplicated. | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var opts = { 
  'filter': "filter_example", // String | Query string, used to filter results.
  'page': 56, // Number | Result page number.  Defaults to 1.
  'limit': 56, // Number | Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // String | Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailTemplateByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[EmailTemplate]**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailTemplateById(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to be returned. | 

### Return type

[**EmailTemplate**](EmailTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmailTemplateFiles"></a>
# **getEmailTemplateFiles**
> getEmailTemplateFiles(emailTemplateId)

Get the files for an emailTemplate.

Get all existing emailTemplate files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEmailTemplateFiles(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmailTemplateTags"></a>
# **getEmailTemplateTags**
> getEmailTemplateTags(emailTemplateId)

Get the tags for an emailTemplate.

Get all existing emailTemplate tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var emailTemplateId = 56; // Number | Id of the emailTemplate to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEmailTemplateTags(emailTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailTemplateId** | **Number**| Id of the emailTemplate to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var body = new infoplus.EmailTemplate(); // EmailTemplate | EmailTemplate to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateEmailTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailTemplate**](EmailTemplate.md)| EmailTemplate to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EmailTemplateApi();

var body = new infoplus.EmailTemplate(); // EmailTemplate | EmailTemplate to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateEmailTemplateCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailTemplate**](EmailTemplate.md)| EmailTemplate to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

