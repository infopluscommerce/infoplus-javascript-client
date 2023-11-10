# infoplus.WarehouseInventoryApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWarehouseInventoryAudit**](WarehouseInventoryApi.md#addWarehouseInventoryAudit) | **PUT** /beta/warehouseInventory/{warehouseInventoryId}/audit/{warehouseInventoryAudit} | Add new audit for a warehouseInventory
[**addWarehouseInventoryFile**](WarehouseInventoryApi.md#addWarehouseInventoryFile) | **POST** /beta/warehouseInventory/{warehouseInventoryId}/file/{fileName} | Attach a file to a warehouseInventory
[**addWarehouseInventoryFileByURL**](WarehouseInventoryApi.md#addWarehouseInventoryFileByURL) | **POST** /beta/warehouseInventory/{warehouseInventoryId}/file | Attach a file to a warehouseInventory by URL.
[**addWarehouseInventoryTag**](WarehouseInventoryApi.md#addWarehouseInventoryTag) | **PUT** /beta/warehouseInventory/{warehouseInventoryId}/tag/{warehouseInventoryTag} | Add new tags for a warehouseInventory.
[**deleteWarehouseInventoryFile**](WarehouseInventoryApi.md#deleteWarehouseInventoryFile) | **DELETE** /beta/warehouseInventory/{warehouseInventoryId}/file/{fileId} | Delete a file for a warehouseInventory.
[**deleteWarehouseInventoryTag**](WarehouseInventoryApi.md#deleteWarehouseInventoryTag) | **DELETE** /beta/warehouseInventory/{warehouseInventoryId}/tag/{warehouseInventoryTag} | Delete a tag for a warehouseInventory.
[**getDuplicateWarehouseInventoryById**](WarehouseInventoryApi.md#getDuplicateWarehouseInventoryById) | **GET** /beta/warehouseInventory/duplicate/{warehouseInventoryId} | Get a duplicated a warehouseInventory by id
[**getWarehouseInventoryByFilter**](WarehouseInventoryApi.md#getWarehouseInventoryByFilter) | **GET** /beta/warehouseInventory/search | Search warehouseInventorys by filter
[**getWarehouseInventoryById**](WarehouseInventoryApi.md#getWarehouseInventoryById) | **GET** /beta/warehouseInventory/{warehouseInventoryId} | Get a warehouseInventory by id
[**getWarehouseInventoryFiles**](WarehouseInventoryApi.md#getWarehouseInventoryFiles) | **GET** /beta/warehouseInventory/{warehouseInventoryId}/file | Get the files for a warehouseInventory.
[**getWarehouseInventoryTags**](WarehouseInventoryApi.md#getWarehouseInventoryTags) | **GET** /beta/warehouseInventory/{warehouseInventoryId}/tag | Get the tags for a warehouseInventory.


<a name="addWarehouseInventoryAudit"></a>
# **addWarehouseInventoryAudit**
> addWarehouseInventoryAudit(warehouseInventoryId, warehouseInventoryAudit)

Add new audit for a warehouseInventory

Adds an audit to an existing warehouseInventory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to add an audit to

var warehouseInventoryAudit = "warehouseInventoryAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseInventoryAudit(warehouseInventoryId, warehouseInventoryAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to add an audit to | 
 **warehouseInventoryAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseInventoryFile"></a>
# **addWarehouseInventoryFile**
> addWarehouseInventoryFile(warehouseInventoryId, fileName)

Attach a file to a warehouseInventory

Adds a file to an existing warehouseInventory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseInventoryFile(warehouseInventoryId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addWarehouseInventoryFileByURL"></a>
# **addWarehouseInventoryFileByURL**
> addWarehouseInventoryFileByURL(body, warehouseInventoryId)

Attach a file to a warehouseInventory by URL.

Adds a file to an existing warehouseInventory by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseInventoryFileByURL(body, warehouseInventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseInventoryTag"></a>
# **addWarehouseInventoryTag**
> addWarehouseInventoryTag(warehouseInventoryId, warehouseInventoryTag)

Add new tags for a warehouseInventory.

Adds a tag to an existing warehouseInventory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to add a tag to

var warehouseInventoryTag = "warehouseInventoryTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseInventoryTag(warehouseInventoryId, warehouseInventoryTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to add a tag to | 
 **warehouseInventoryTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWarehouseInventoryFile"></a>
# **deleteWarehouseInventoryFile**
> deleteWarehouseInventoryFile(warehouseInventoryId, fileId)

Delete a file for a warehouseInventory.

Deletes an existing warehouseInventory file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseInventoryFile(warehouseInventoryId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteWarehouseInventoryTag"></a>
# **deleteWarehouseInventoryTag**
> deleteWarehouseInventoryTag(warehouseInventoryId, warehouseInventoryTag)

Delete a tag for a warehouseInventory.

Deletes an existing warehouseInventory tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to remove tag from

var warehouseInventoryTag = "warehouseInventoryTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseInventoryTag(warehouseInventoryId, warehouseInventoryTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to remove tag from | 
 **warehouseInventoryTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateWarehouseInventoryById"></a>
# **getDuplicateWarehouseInventoryById**
> WarehouseInventory getDuplicateWarehouseInventoryById(warehouseInventoryId)

Get a duplicated a warehouseInventory by id

Returns a duplicated warehouseInventory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateWarehouseInventoryById(warehouseInventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to be duplicated. | 

### Return type

[**WarehouseInventory**](WarehouseInventory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseInventoryByFilter"></a>
# **getWarehouseInventoryByFilter**
> [WarehouseInventory] getWarehouseInventoryByFilter(opts)

Search warehouseInventorys by filter

Returns the list of warehouseInventorys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

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
apiInstance.getWarehouseInventoryByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[WarehouseInventory]**](WarehouseInventory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseInventoryById"></a>
# **getWarehouseInventoryById**
> WarehouseInventory getWarehouseInventoryById(warehouseInventoryId)

Get a warehouseInventory by id

Returns the warehouseInventory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWarehouseInventoryById(warehouseInventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to be returned. | 

### Return type

[**WarehouseInventory**](WarehouseInventory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseInventoryFiles"></a>
# **getWarehouseInventoryFiles**
> getWarehouseInventoryFiles(warehouseInventoryId)

Get the files for a warehouseInventory.

Get all existing warehouseInventory files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseInventoryFiles(warehouseInventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseInventoryTags"></a>
# **getWarehouseInventoryTags**
> getWarehouseInventoryTags(warehouseInventoryId)

Get the tags for a warehouseInventory.

Get all existing warehouseInventory tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseInventoryApi();

var warehouseInventoryId = 56; // Number | Id of the warehouseInventory to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseInventoryTags(warehouseInventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseInventoryId** | **Number**| Id of the warehouseInventory to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

