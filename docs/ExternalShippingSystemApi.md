# infoplus.ExternalShippingSystemApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExternalShippingSystem**](ExternalShippingSystemApi.md#addExternalShippingSystem) | **POST** /v3.0/externalShippingSystem | Create an externalShippingSystem
[**addExternalShippingSystemAudit**](ExternalShippingSystemApi.md#addExternalShippingSystemAudit) | **PUT** /v3.0/externalShippingSystem/{externalShippingSystemId}/audit/{externalShippingSystemAudit} | Add new audit for an externalShippingSystem
[**addExternalShippingSystemFile**](ExternalShippingSystemApi.md#addExternalShippingSystemFile) | **POST** /v3.0/externalShippingSystem/{externalShippingSystemId}/file/{fileName} | Attach a file to an externalShippingSystem
[**addExternalShippingSystemFileByURL**](ExternalShippingSystemApi.md#addExternalShippingSystemFileByURL) | **POST** /v3.0/externalShippingSystem/{externalShippingSystemId}/file | Attach a file to an externalShippingSystem by URL.
[**addExternalShippingSystemTag**](ExternalShippingSystemApi.md#addExternalShippingSystemTag) | **PUT** /v3.0/externalShippingSystem/{externalShippingSystemId}/tag/{externalShippingSystemTag} | Add new tags for an externalShippingSystem.
[**deleteExternalShippingSystem**](ExternalShippingSystemApi.md#deleteExternalShippingSystem) | **DELETE** /v3.0/externalShippingSystem/{externalShippingSystemId} | Delete an externalShippingSystem
[**deleteExternalShippingSystemFile**](ExternalShippingSystemApi.md#deleteExternalShippingSystemFile) | **DELETE** /v3.0/externalShippingSystem/{externalShippingSystemId}/file/{fileId} | Delete a file for an externalShippingSystem.
[**deleteExternalShippingSystemTag**](ExternalShippingSystemApi.md#deleteExternalShippingSystemTag) | **DELETE** /v3.0/externalShippingSystem/{externalShippingSystemId}/tag/{externalShippingSystemTag} | Delete a tag for an externalShippingSystem.
[**getDuplicateExternalShippingSystemById**](ExternalShippingSystemApi.md#getDuplicateExternalShippingSystemById) | **GET** /v3.0/externalShippingSystem/duplicate/{externalShippingSystemId} | Get a duplicated an externalShippingSystem by id
[**getExternalShippingSystemByFilter**](ExternalShippingSystemApi.md#getExternalShippingSystemByFilter) | **GET** /v3.0/externalShippingSystem/search | Search externalShippingSystems by filter
[**getExternalShippingSystemById**](ExternalShippingSystemApi.md#getExternalShippingSystemById) | **GET** /v3.0/externalShippingSystem/{externalShippingSystemId} | Get an externalShippingSystem by id
[**getExternalShippingSystemFiles**](ExternalShippingSystemApi.md#getExternalShippingSystemFiles) | **GET** /v3.0/externalShippingSystem/{externalShippingSystemId}/file | Get the files for an externalShippingSystem.
[**getExternalShippingSystemTags**](ExternalShippingSystemApi.md#getExternalShippingSystemTags) | **GET** /v3.0/externalShippingSystem/{externalShippingSystemId}/tag | Get the tags for an externalShippingSystem.
[**updateExternalShippingSystem**](ExternalShippingSystemApi.md#updateExternalShippingSystem) | **PUT** /v3.0/externalShippingSystem | Update an externalShippingSystem
[**updateExternalShippingSystemCustomFields**](ExternalShippingSystemApi.md#updateExternalShippingSystemCustomFields) | **PUT** /v3.0/externalShippingSystem/customFields | Update an externalShippingSystem custom fields


<a name="addExternalShippingSystem"></a>
# **addExternalShippingSystem**
> ExternalShippingSystem addExternalShippingSystem(body)

Create an externalShippingSystem

Inserts a new externalShippingSystem using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var body = new infoplus.ExternalShippingSystem(); // ExternalShippingSystem | ExternalShippingSystem to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addExternalShippingSystem(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShippingSystem**](ExternalShippingSystem.md)| ExternalShippingSystem to be inserted. | 

### Return type

[**ExternalShippingSystem**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addExternalShippingSystemAudit"></a>
# **addExternalShippingSystemAudit**
> addExternalShippingSystemAudit(externalShippingSystemId, externalShippingSystemAudit)

Add new audit for an externalShippingSystem

Adds an audit to an existing externalShippingSystem.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to add an audit to

var externalShippingSystemAudit = "externalShippingSystemAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShippingSystemAudit(externalShippingSystemId, externalShippingSystemAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to add an audit to | 
 **externalShippingSystemAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addExternalShippingSystemFile"></a>
# **addExternalShippingSystemFile**
> addExternalShippingSystemFile(externalShippingSystemId, fileName)

Attach a file to an externalShippingSystem

Adds a file to an existing externalShippingSystem.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShippingSystemFile(externalShippingSystemId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addExternalShippingSystemFileByURL"></a>
# **addExternalShippingSystemFileByURL**
> addExternalShippingSystemFileByURL(body, externalShippingSystemId)

Attach a file to an externalShippingSystem by URL.

Adds a file to an existing externalShippingSystem by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShippingSystemFileByURL(body, externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addExternalShippingSystemTag"></a>
# **addExternalShippingSystemTag**
> addExternalShippingSystemTag(externalShippingSystemId, externalShippingSystemTag)

Add new tags for an externalShippingSystem.

Adds a tag to an existing externalShippingSystem.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to add a tag to

var externalShippingSystemTag = "externalShippingSystemTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShippingSystemTag(externalShippingSystemId, externalShippingSystemTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to add a tag to | 
 **externalShippingSystemTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteExternalShippingSystem"></a>
# **deleteExternalShippingSystem**
> deleteExternalShippingSystem(externalShippingSystemId)

Delete an externalShippingSystem

Deletes the externalShippingSystem identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExternalShippingSystem(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteExternalShippingSystemFile"></a>
# **deleteExternalShippingSystemFile**
> deleteExternalShippingSystemFile(externalShippingSystemId, fileId)

Delete a file for an externalShippingSystem.

Deletes an existing externalShippingSystem file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExternalShippingSystemFile(externalShippingSystemId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteExternalShippingSystemTag"></a>
# **deleteExternalShippingSystemTag**
> deleteExternalShippingSystemTag(externalShippingSystemId, externalShippingSystemTag)

Delete a tag for an externalShippingSystem.

Deletes an existing externalShippingSystem tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to remove tag from

var externalShippingSystemTag = "externalShippingSystemTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExternalShippingSystemTag(externalShippingSystemId, externalShippingSystemTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to remove tag from | 
 **externalShippingSystemTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateExternalShippingSystemById"></a>
# **getDuplicateExternalShippingSystemById**
> ExternalShippingSystem getDuplicateExternalShippingSystemById(externalShippingSystemId)

Get a duplicated an externalShippingSystem by id

Returns a duplicated externalShippingSystem identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateExternalShippingSystemById(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to be duplicated. | 

### Return type

[**ExternalShippingSystem**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShippingSystemByFilter"></a>
# **getExternalShippingSystemByFilter**
> [ExternalShippingSystem] getExternalShippingSystemByFilter(opts)

Search externalShippingSystems by filter

Returns the list of externalShippingSystems that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

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
apiInstance.getExternalShippingSystemByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ExternalShippingSystem]**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShippingSystemById"></a>
# **getExternalShippingSystemById**
> ExternalShippingSystem getExternalShippingSystemById(externalShippingSystemId)

Get an externalShippingSystem by id

Returns the externalShippingSystem identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExternalShippingSystemById(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to be returned. | 

### Return type

[**ExternalShippingSystem**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShippingSystemFiles"></a>
# **getExternalShippingSystemFiles**
> getExternalShippingSystemFiles(externalShippingSystemId)

Get the files for an externalShippingSystem.

Get all existing externalShippingSystem files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getExternalShippingSystemFiles(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShippingSystemTags"></a>
# **getExternalShippingSystemTags**
> getExternalShippingSystemTags(externalShippingSystemId)

Get the tags for an externalShippingSystem.

Get all existing externalShippingSystem tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var externalShippingSystemId = 56; // Number | Id of the externalShippingSystem to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getExternalShippingSystemTags(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Number**| Id of the externalShippingSystem to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateExternalShippingSystem"></a>
# **updateExternalShippingSystem**
> updateExternalShippingSystem(body)

Update an externalShippingSystem

Updates an existing externalShippingSystem using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var body = new infoplus.ExternalShippingSystem(); // ExternalShippingSystem | ExternalShippingSystem to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateExternalShippingSystem(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShippingSystem**](ExternalShippingSystem.md)| ExternalShippingSystem to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExternalShippingSystemCustomFields"></a>
# **updateExternalShippingSystemCustomFields**
> updateExternalShippingSystemCustomFields(body)

Update an externalShippingSystem custom fields

Updates an existing externalShippingSystem custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShippingSystemApi();

var body = new infoplus.ExternalShippingSystem(); // ExternalShippingSystem | ExternalShippingSystem to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateExternalShippingSystemCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShippingSystem**](ExternalShippingSystem.md)| ExternalShippingSystem to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

