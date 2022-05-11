# infoplus.InventorySnapshotApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventorySnapshotAudit**](InventorySnapshotApi.md#addInventorySnapshotAudit) | **PUT** /v3.0/inventorySnapshot/{inventorySnapshotId}/audit/{inventorySnapshotAudit} | Add new audit for an inventorySnapshot
[**addInventorySnapshotFile**](InventorySnapshotApi.md#addInventorySnapshotFile) | **POST** /v3.0/inventorySnapshot/{inventorySnapshotId}/file/{fileName} | Attach a file to an inventorySnapshot
[**addInventorySnapshotFileByURL**](InventorySnapshotApi.md#addInventorySnapshotFileByURL) | **POST** /v3.0/inventorySnapshot/{inventorySnapshotId}/file | Attach a file to an inventorySnapshot by URL.
[**addInventorySnapshotTag**](InventorySnapshotApi.md#addInventorySnapshotTag) | **PUT** /v3.0/inventorySnapshot/{inventorySnapshotId}/tag/{inventorySnapshotTag} | Add new tags for an inventorySnapshot.
[**deleteInventorySnapshotFile**](InventorySnapshotApi.md#deleteInventorySnapshotFile) | **DELETE** /v3.0/inventorySnapshot/{inventorySnapshotId}/file/{fileId} | Delete a file for an inventorySnapshot.
[**deleteInventorySnapshotTag**](InventorySnapshotApi.md#deleteInventorySnapshotTag) | **DELETE** /v3.0/inventorySnapshot/{inventorySnapshotId}/tag/{inventorySnapshotTag} | Delete a tag for an inventorySnapshot.
[**getDuplicateInventorySnapshotById**](InventorySnapshotApi.md#getDuplicateInventorySnapshotById) | **GET** /v3.0/inventorySnapshot/duplicate/{inventorySnapshotId} | Get a duplicated an inventorySnapshot by id
[**getInventorySnapshotByFilter**](InventorySnapshotApi.md#getInventorySnapshotByFilter) | **GET** /v3.0/inventorySnapshot/search | Search inventorySnapshots by filter
[**getInventorySnapshotById**](InventorySnapshotApi.md#getInventorySnapshotById) | **GET** /v3.0/inventorySnapshot/{inventorySnapshotId} | Get an inventorySnapshot by id
[**getInventorySnapshotFiles**](InventorySnapshotApi.md#getInventorySnapshotFiles) | **GET** /v3.0/inventorySnapshot/{inventorySnapshotId}/file | Get the files for an inventorySnapshot.
[**getInventorySnapshotTags**](InventorySnapshotApi.md#getInventorySnapshotTags) | **GET** /v3.0/inventorySnapshot/{inventorySnapshotId}/tag | Get the tags for an inventorySnapshot.


<a name="addInventorySnapshotAudit"></a>
# **addInventorySnapshotAudit**
> addInventorySnapshotAudit(inventorySnapshotId, inventorySnapshotAudit)

Add new audit for an inventorySnapshot

Adds an audit to an existing inventorySnapshot.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to add an audit to

var inventorySnapshotAudit = "inventorySnapshotAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventorySnapshotAudit(inventorySnapshotId, inventorySnapshotAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to add an audit to | 
 **inventorySnapshotAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventorySnapshotFile"></a>
# **addInventorySnapshotFile**
> addInventorySnapshotFile(inventorySnapshotId, fileName)

Attach a file to an inventorySnapshot

Adds a file to an existing inventorySnapshot.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventorySnapshotFile(inventorySnapshotId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addInventorySnapshotFileByURL"></a>
# **addInventorySnapshotFileByURL**
> addInventorySnapshotFileByURL(body, inventorySnapshotId)

Attach a file to an inventorySnapshot by URL.

Adds a file to an existing inventorySnapshot by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventorySnapshotFileByURL(body, inventorySnapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventorySnapshotTag"></a>
# **addInventorySnapshotTag**
> addInventorySnapshotTag(inventorySnapshotId, inventorySnapshotTag)

Add new tags for an inventorySnapshot.

Adds a tag to an existing inventorySnapshot.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to add a tag to

var inventorySnapshotTag = "inventorySnapshotTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventorySnapshotTag(inventorySnapshotId, inventorySnapshotTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to add a tag to | 
 **inventorySnapshotTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventorySnapshotFile"></a>
# **deleteInventorySnapshotFile**
> deleteInventorySnapshotFile(inventorySnapshotId, fileId)

Delete a file for an inventorySnapshot.

Deletes an existing inventorySnapshot file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventorySnapshotFile(inventorySnapshotId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInventorySnapshotTag"></a>
# **deleteInventorySnapshotTag**
> deleteInventorySnapshotTag(inventorySnapshotId, inventorySnapshotTag)

Delete a tag for an inventorySnapshot.

Deletes an existing inventorySnapshot tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to remove tag from

var inventorySnapshotTag = "inventorySnapshotTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventorySnapshotTag(inventorySnapshotId, inventorySnapshotTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to remove tag from | 
 **inventorySnapshotTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInventorySnapshotById"></a>
# **getDuplicateInventorySnapshotById**
> InventorySnapshot getDuplicateInventorySnapshotById(inventorySnapshotId)

Get a duplicated an inventorySnapshot by id

Returns a duplicated inventorySnapshot identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateInventorySnapshotById(inventorySnapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to be duplicated. | 

### Return type

[**InventorySnapshot**](InventorySnapshot.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventorySnapshotByFilter"></a>
# **getInventorySnapshotByFilter**
> [InventorySnapshot] getInventorySnapshotByFilter(opts)

Search inventorySnapshots by filter

Returns the list of inventorySnapshots that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

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
apiInstance.getInventorySnapshotByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InventorySnapshot]**](InventorySnapshot.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventorySnapshotById"></a>
# **getInventorySnapshotById**
> InventorySnapshot getInventorySnapshotById(inventorySnapshotId)

Get an inventorySnapshot by id

Returns the inventorySnapshot identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventorySnapshotById(inventorySnapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to be returned. | 

### Return type

[**InventorySnapshot**](InventorySnapshot.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventorySnapshotFiles"></a>
# **getInventorySnapshotFiles**
> getInventorySnapshotFiles(inventorySnapshotId)

Get the files for an inventorySnapshot.

Get all existing inventorySnapshot files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInventorySnapshotFiles(inventorySnapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventorySnapshotTags"></a>
# **getInventorySnapshotTags**
> getInventorySnapshotTags(inventorySnapshotId)

Get the tags for an inventorySnapshot.

Get all existing inventorySnapshot tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventorySnapshotApi();

var inventorySnapshotId = 56; // Number | Id of the inventorySnapshot to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInventorySnapshotTags(inventorySnapshotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventorySnapshotId** | **Number**| Id of the inventorySnapshot to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

