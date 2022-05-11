# infoplus.WarehouseDocumentTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWarehouseDocumentTypeAudit**](WarehouseDocumentTypeApi.md#addWarehouseDocumentTypeAudit) | **PUT** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/audit/{warehouseDocumentTypeAudit} | Add new audit for a warehouseDocumentType
[**addWarehouseDocumentTypeFile**](WarehouseDocumentTypeApi.md#addWarehouseDocumentTypeFile) | **POST** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/file/{fileName} | Attach a file to a warehouseDocumentType
[**addWarehouseDocumentTypeFileByURL**](WarehouseDocumentTypeApi.md#addWarehouseDocumentTypeFileByURL) | **POST** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/file | Attach a file to a warehouseDocumentType by URL.
[**addWarehouseDocumentTypeTag**](WarehouseDocumentTypeApi.md#addWarehouseDocumentTypeTag) | **PUT** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/tag/{warehouseDocumentTypeTag} | Add new tags for a warehouseDocumentType.
[**deleteWarehouseDocumentTypeFile**](WarehouseDocumentTypeApi.md#deleteWarehouseDocumentTypeFile) | **DELETE** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/file/{fileId} | Delete a file for a warehouseDocumentType.
[**deleteWarehouseDocumentTypeTag**](WarehouseDocumentTypeApi.md#deleteWarehouseDocumentTypeTag) | **DELETE** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/tag/{warehouseDocumentTypeTag} | Delete a tag for a warehouseDocumentType.
[**getDuplicateWarehouseDocumentTypeById**](WarehouseDocumentTypeApi.md#getDuplicateWarehouseDocumentTypeById) | **GET** /v3.0/warehouseDocumentType/duplicate/{warehouseDocumentTypeId} | Get a duplicated a warehouseDocumentType by id
[**getWarehouseDocumentTypeByFilter**](WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeByFilter) | **GET** /v3.0/warehouseDocumentType/search | Search warehouseDocumentTypes by filter
[**getWarehouseDocumentTypeById**](WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeById) | **GET** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId} | Get a warehouseDocumentType by id
[**getWarehouseDocumentTypeFiles**](WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeFiles) | **GET** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/file | Get the files for a warehouseDocumentType.
[**getWarehouseDocumentTypeTags**](WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeTags) | **GET** /v3.0/warehouseDocumentType/{warehouseDocumentTypeId}/tag | Get the tags for a warehouseDocumentType.


<a name="addWarehouseDocumentTypeAudit"></a>
# **addWarehouseDocumentTypeAudit**
> addWarehouseDocumentTypeAudit(warehouseDocumentTypeId, warehouseDocumentTypeAudit)

Add new audit for a warehouseDocumentType

Adds an audit to an existing warehouseDocumentType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to add an audit to

var warehouseDocumentTypeAudit = "warehouseDocumentTypeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentTypeAudit(warehouseDocumentTypeId, warehouseDocumentTypeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to add an audit to | 
 **warehouseDocumentTypeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseDocumentTypeFile"></a>
# **addWarehouseDocumentTypeFile**
> addWarehouseDocumentTypeFile(warehouseDocumentTypeId, fileName)

Attach a file to a warehouseDocumentType

Adds a file to an existing warehouseDocumentType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentTypeFile(warehouseDocumentTypeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addWarehouseDocumentTypeFileByURL"></a>
# **addWarehouseDocumentTypeFileByURL**
> addWarehouseDocumentTypeFileByURL(body, warehouseDocumentTypeId)

Attach a file to a warehouseDocumentType by URL.

Adds a file to an existing warehouseDocumentType by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentTypeFileByURL(body, warehouseDocumentTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseDocumentTypeTag"></a>
# **addWarehouseDocumentTypeTag**
> addWarehouseDocumentTypeTag(warehouseDocumentTypeId, warehouseDocumentTypeTag)

Add new tags for a warehouseDocumentType.

Adds a tag to an existing warehouseDocumentType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to add a tag to

var warehouseDocumentTypeTag = "warehouseDocumentTypeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseDocumentTypeTag(warehouseDocumentTypeId, warehouseDocumentTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to add a tag to | 
 **warehouseDocumentTypeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWarehouseDocumentTypeFile"></a>
# **deleteWarehouseDocumentTypeFile**
> deleteWarehouseDocumentTypeFile(warehouseDocumentTypeId, fileId)

Delete a file for a warehouseDocumentType.

Deletes an existing warehouseDocumentType file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseDocumentTypeFile(warehouseDocumentTypeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteWarehouseDocumentTypeTag"></a>
# **deleteWarehouseDocumentTypeTag**
> deleteWarehouseDocumentTypeTag(warehouseDocumentTypeId, warehouseDocumentTypeTag)

Delete a tag for a warehouseDocumentType.

Deletes an existing warehouseDocumentType tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to remove tag from

var warehouseDocumentTypeTag = "warehouseDocumentTypeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseDocumentTypeTag(warehouseDocumentTypeId, warehouseDocumentTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to remove tag from | 
 **warehouseDocumentTypeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateWarehouseDocumentTypeById"></a>
# **getDuplicateWarehouseDocumentTypeById**
> WarehouseDocumentType getDuplicateWarehouseDocumentTypeById(warehouseDocumentTypeId)

Get a duplicated a warehouseDocumentType by id

Returns a duplicated warehouseDocumentType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateWarehouseDocumentTypeById(warehouseDocumentTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to be duplicated. | 

### Return type

[**WarehouseDocumentType**](WarehouseDocumentType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentTypeByFilter"></a>
# **getWarehouseDocumentTypeByFilter**
> [WarehouseDocumentType] getWarehouseDocumentTypeByFilter(opts)

Search warehouseDocumentTypes by filter

Returns the list of warehouseDocumentTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

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
apiInstance.getWarehouseDocumentTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[WarehouseDocumentType]**](WarehouseDocumentType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentTypeById"></a>
# **getWarehouseDocumentTypeById**
> WarehouseDocumentType getWarehouseDocumentTypeById(warehouseDocumentTypeId)

Get a warehouseDocumentType by id

Returns the warehouseDocumentType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWarehouseDocumentTypeById(warehouseDocumentTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to be returned. | 

### Return type

[**WarehouseDocumentType**](WarehouseDocumentType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentTypeFiles"></a>
# **getWarehouseDocumentTypeFiles**
> getWarehouseDocumentTypeFiles(warehouseDocumentTypeId)

Get the files for a warehouseDocumentType.

Get all existing warehouseDocumentType files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseDocumentTypeFiles(warehouseDocumentTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentTypeTags"></a>
# **getWarehouseDocumentTypeTags**
> getWarehouseDocumentTypeTags(warehouseDocumentTypeId)

Get the tags for a warehouseDocumentType.

Get all existing warehouseDocumentType tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseDocumentTypeApi();

var warehouseDocumentTypeId = 56; // Number | Id of the warehouseDocumentType to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseDocumentTypeTags(warehouseDocumentTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Number**| Id of the warehouseDocumentType to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

