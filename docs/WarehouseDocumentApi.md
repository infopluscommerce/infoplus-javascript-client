# infoplus.WarehouseDocumentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWarehouseDocumentAudit**](WarehouseDocumentApi.md#addWarehouseDocumentAudit) | **PUT** /v3.0/warehouseDocument/{warehouseDocumentId}/audit/{warehouseDocumentAudit} | Add new audit for a warehouseDocument
[**addWarehouseDocumentFile**](WarehouseDocumentApi.md#addWarehouseDocumentFile) | **POST** /v3.0/warehouseDocument/{warehouseDocumentId}/file/{fileName} | Attach a file to a warehouseDocument
[**addWarehouseDocumentFileByURL**](WarehouseDocumentApi.md#addWarehouseDocumentFileByURL) | **POST** /v3.0/warehouseDocument/{warehouseDocumentId}/file | Attach a file to a warehouseDocument by URL.
[**addWarehouseDocumentTag**](WarehouseDocumentApi.md#addWarehouseDocumentTag) | **PUT** /v3.0/warehouseDocument/{warehouseDocumentId}/tag/{warehouseDocumentTag} | Add new tags for a warehouseDocument.
[**deleteWarehouseDocumentFile**](WarehouseDocumentApi.md#deleteWarehouseDocumentFile) | **DELETE** /v3.0/warehouseDocument/{warehouseDocumentId}/file/{fileId} | Delete a file for a warehouseDocument.
[**deleteWarehouseDocumentTag**](WarehouseDocumentApi.md#deleteWarehouseDocumentTag) | **DELETE** /v3.0/warehouseDocument/{warehouseDocumentId}/tag/{warehouseDocumentTag} | Delete a tag for a warehouseDocument.
[**getDuplicateWarehouseDocumentById**](WarehouseDocumentApi.md#getDuplicateWarehouseDocumentById) | **GET** /v3.0/warehouseDocument/duplicate/{warehouseDocumentId} | Get a duplicated a warehouseDocument by id
[**getWarehouseDocumentByFilter**](WarehouseDocumentApi.md#getWarehouseDocumentByFilter) | **GET** /v3.0/warehouseDocument/search | Search warehouseDocuments by filter
[**getWarehouseDocumentById**](WarehouseDocumentApi.md#getWarehouseDocumentById) | **GET** /v3.0/warehouseDocument/{warehouseDocumentId} | Get a warehouseDocument by id
[**getWarehouseDocumentFiles**](WarehouseDocumentApi.md#getWarehouseDocumentFiles) | **GET** /v3.0/warehouseDocument/{warehouseDocumentId}/file | Get the files for a warehouseDocument.
[**getWarehouseDocumentTags**](WarehouseDocumentApi.md#getWarehouseDocumentTags) | **GET** /v3.0/warehouseDocument/{warehouseDocumentId}/tag | Get the tags for a warehouseDocument.
[**updateWarehouseDocumentCustomFields**](WarehouseDocumentApi.md#updateWarehouseDocumentCustomFields) | **PUT** /v3.0/warehouseDocument/customFields | Update a warehouseDocument custom fields


<a name="addWarehouseDocumentAudit"></a>
# **addWarehouseDocumentAudit**
> addWarehouseDocumentAudit(warehouseDocumentId, warehouseDocumentAudit)

Add new audit for a warehouseDocument

Adds an audit to an existing warehouseDocument.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to add an audit to

var warehouseDocumentAudit = "warehouseDocumentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentAudit(warehouseDocumentId, warehouseDocumentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to add an audit to | 
 **warehouseDocumentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseDocumentFile"></a>
# **addWarehouseDocumentFile**
> addWarehouseDocumentFile(warehouseDocumentId, fileName)

Attach a file to a warehouseDocument

Adds a file to an existing warehouseDocument.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentFile(warehouseDocumentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addWarehouseDocumentFileByURL"></a>
# **addWarehouseDocumentFileByURL**
> addWarehouseDocumentFileByURL(body, warehouseDocumentId)

Attach a file to a warehouseDocument by URL.

Adds a file to an existing warehouseDocument by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentFileByURL(body, warehouseDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseDocumentTag"></a>
# **addWarehouseDocumentTag**
> addWarehouseDocumentTag(warehouseDocumentId, warehouseDocumentTag)

Add new tags for a warehouseDocument.

Adds a tag to an existing warehouseDocument.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to add a tag to

var warehouseDocumentTag = "warehouseDocumentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentTag(warehouseDocumentId, warehouseDocumentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to add a tag to | 
 **warehouseDocumentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWarehouseDocumentFile"></a>
# **deleteWarehouseDocumentFile**
> deleteWarehouseDocumentFile(warehouseDocumentId, fileId)

Delete a file for a warehouseDocument.

Deletes an existing warehouseDocument file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseDocumentFile(warehouseDocumentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteWarehouseDocumentTag"></a>
# **deleteWarehouseDocumentTag**
> deleteWarehouseDocumentTag(warehouseDocumentId, warehouseDocumentTag)

Delete a tag for a warehouseDocument.

Deletes an existing warehouseDocument tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to remove tag from

var warehouseDocumentTag = "warehouseDocumentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseDocumentTag(warehouseDocumentId, warehouseDocumentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to remove tag from | 
 **warehouseDocumentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateWarehouseDocumentById"></a>
# **getDuplicateWarehouseDocumentById**
> WarehouseDocument getDuplicateWarehouseDocumentById(warehouseDocumentId)

Get a duplicated a warehouseDocument by id

Returns a duplicated warehouseDocument identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateWarehouseDocumentById(warehouseDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to be duplicated. | 

### Return type

[**WarehouseDocument**](WarehouseDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentByFilter"></a>
# **getWarehouseDocumentByFilter**
> [WarehouseDocument] getWarehouseDocumentByFilter(opts)

Search warehouseDocuments by filter

Returns the list of warehouseDocuments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

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
apiInstance.getWarehouseDocumentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[WarehouseDocument]**](WarehouseDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentById"></a>
# **getWarehouseDocumentById**
> WarehouseDocument getWarehouseDocumentById(warehouseDocumentId)

Get a warehouseDocument by id

Returns the warehouseDocument identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWarehouseDocumentById(warehouseDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to be returned. | 

### Return type

[**WarehouseDocument**](WarehouseDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentFiles"></a>
# **getWarehouseDocumentFiles**
> getWarehouseDocumentFiles(warehouseDocumentId)

Get the files for a warehouseDocument.

Get all existing warehouseDocument files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseDocumentFiles(warehouseDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentTags"></a>
# **getWarehouseDocumentTags**
> getWarehouseDocumentTags(warehouseDocumentId)

Get the tags for a warehouseDocument.

Get all existing warehouseDocument tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var warehouseDocumentId = 56; // Number | Id of the warehouseDocument to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseDocumentTags(warehouseDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Number**| Id of the warehouseDocument to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWarehouseDocumentCustomFields"></a>
# **updateWarehouseDocumentCustomFields**
> updateWarehouseDocumentCustomFields(body)

Update a warehouseDocument custom fields

Updates an existing warehouseDocument custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentApi();

var body = new infoplus.WarehouseDocument(); // WarehouseDocument | WarehouseDocument to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWarehouseDocumentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WarehouseDocument**](WarehouseDocument.md)| WarehouseDocument to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

