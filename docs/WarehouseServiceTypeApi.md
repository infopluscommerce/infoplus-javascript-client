# infoplus.WarehouseServiceTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWarehouseServiceType**](WarehouseServiceTypeApi.md#addWarehouseServiceType) | **POST** /v3.0/warehouseServiceType | Create a warehouseServiceType
[**addWarehouseServiceTypeAudit**](WarehouseServiceTypeApi.md#addWarehouseServiceTypeAudit) | **PUT** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/audit/{warehouseServiceTypeAudit} | Add new audit for a warehouseServiceType
[**addWarehouseServiceTypeFile**](WarehouseServiceTypeApi.md#addWarehouseServiceTypeFile) | **POST** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/file/{fileName} | Attach a file to a warehouseServiceType
[**addWarehouseServiceTypeFileByURL**](WarehouseServiceTypeApi.md#addWarehouseServiceTypeFileByURL) | **POST** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/file | Attach a file to a warehouseServiceType by URL.
[**addWarehouseServiceTypeTag**](WarehouseServiceTypeApi.md#addWarehouseServiceTypeTag) | **PUT** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/tag/{warehouseServiceTypeTag} | Add new tags for a warehouseServiceType.
[**deleteWarehouseServiceType**](WarehouseServiceTypeApi.md#deleteWarehouseServiceType) | **DELETE** /v3.0/warehouseServiceType/{warehouseServiceTypeId} | Delete a warehouseServiceType
[**deleteWarehouseServiceTypeFile**](WarehouseServiceTypeApi.md#deleteWarehouseServiceTypeFile) | **DELETE** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/file/{fileId} | Delete a file for a warehouseServiceType.
[**deleteWarehouseServiceTypeTag**](WarehouseServiceTypeApi.md#deleteWarehouseServiceTypeTag) | **DELETE** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/tag/{warehouseServiceTypeTag} | Delete a tag for a warehouseServiceType.
[**getDuplicateWarehouseServiceTypeById**](WarehouseServiceTypeApi.md#getDuplicateWarehouseServiceTypeById) | **GET** /v3.0/warehouseServiceType/duplicate/{warehouseServiceTypeId} | Get a duplicated a warehouseServiceType by id
[**getWarehouseServiceTypeByFilter**](WarehouseServiceTypeApi.md#getWarehouseServiceTypeByFilter) | **GET** /v3.0/warehouseServiceType/search | Search warehouseServiceTypes by filter
[**getWarehouseServiceTypeById**](WarehouseServiceTypeApi.md#getWarehouseServiceTypeById) | **GET** /v3.0/warehouseServiceType/{warehouseServiceTypeId} | Get a warehouseServiceType by id
[**getWarehouseServiceTypeFiles**](WarehouseServiceTypeApi.md#getWarehouseServiceTypeFiles) | **GET** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/file | Get the files for a warehouseServiceType.
[**getWarehouseServiceTypeTags**](WarehouseServiceTypeApi.md#getWarehouseServiceTypeTags) | **GET** /v3.0/warehouseServiceType/{warehouseServiceTypeId}/tag | Get the tags for a warehouseServiceType.
[**updateWarehouseServiceType**](WarehouseServiceTypeApi.md#updateWarehouseServiceType) | **PUT** /v3.0/warehouseServiceType | Update a warehouseServiceType
[**updateWarehouseServiceTypeCustomFields**](WarehouseServiceTypeApi.md#updateWarehouseServiceTypeCustomFields) | **PUT** /v3.0/warehouseServiceType/customFields | Update a warehouseServiceType custom fields


<a name="addWarehouseServiceType"></a>
# **addWarehouseServiceType**
> WarehouseServiceType addWarehouseServiceType(body)

Create a warehouseServiceType

Inserts a new warehouseServiceType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var body = new infoplus.WarehouseServiceType(); // WarehouseServiceType | WarehouseServiceType to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addWarehouseServiceType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WarehouseServiceType**](WarehouseServiceType.md)| WarehouseServiceType to be inserted. | 

### Return type

[**WarehouseServiceType**](WarehouseServiceType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseServiceTypeAudit"></a>
# **addWarehouseServiceTypeAudit**
> addWarehouseServiceTypeAudit(warehouseServiceTypeId, warehouseServiceTypeAudit)

Add new audit for a warehouseServiceType

Adds an audit to an existing warehouseServiceType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to add an audit to

var warehouseServiceTypeAudit = "warehouseServiceTypeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseServiceTypeAudit(warehouseServiceTypeId, warehouseServiceTypeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to add an audit to | 
 **warehouseServiceTypeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseServiceTypeFile"></a>
# **addWarehouseServiceTypeFile**
> addWarehouseServiceTypeFile(warehouseServiceTypeId, fileName)

Attach a file to a warehouseServiceType

Adds a file to an existing warehouseServiceType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseServiceTypeFile(warehouseServiceTypeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addWarehouseServiceTypeFileByURL"></a>
# **addWarehouseServiceTypeFileByURL**
> addWarehouseServiceTypeFileByURL(body, warehouseServiceTypeId)

Attach a file to a warehouseServiceType by URL.

Adds a file to an existing warehouseServiceType by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseServiceTypeFileByURL(body, warehouseServiceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseServiceTypeTag"></a>
# **addWarehouseServiceTypeTag**
> addWarehouseServiceTypeTag(warehouseServiceTypeId, warehouseServiceTypeTag)

Add new tags for a warehouseServiceType.

Adds a tag to an existing warehouseServiceType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to add a tag to

var warehouseServiceTypeTag = "warehouseServiceTypeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseServiceTypeTag(warehouseServiceTypeId, warehouseServiceTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to add a tag to | 
 **warehouseServiceTypeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWarehouseServiceType"></a>
# **deleteWarehouseServiceType**
> deleteWarehouseServiceType(warehouseServiceTypeId)

Delete a warehouseServiceType

Deletes the warehouseServiceType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseServiceType(warehouseServiceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteWarehouseServiceTypeFile"></a>
# **deleteWarehouseServiceTypeFile**
> deleteWarehouseServiceTypeFile(warehouseServiceTypeId, fileId)

Delete a file for a warehouseServiceType.

Deletes an existing warehouseServiceType file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseServiceTypeFile(warehouseServiceTypeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteWarehouseServiceTypeTag"></a>
# **deleteWarehouseServiceTypeTag**
> deleteWarehouseServiceTypeTag(warehouseServiceTypeId, warehouseServiceTypeTag)

Delete a tag for a warehouseServiceType.

Deletes an existing warehouseServiceType tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to remove tag from

var warehouseServiceTypeTag = "warehouseServiceTypeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseServiceTypeTag(warehouseServiceTypeId, warehouseServiceTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to remove tag from | 
 **warehouseServiceTypeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateWarehouseServiceTypeById"></a>
# **getDuplicateWarehouseServiceTypeById**
> WarehouseServiceType getDuplicateWarehouseServiceTypeById(warehouseServiceTypeId)

Get a duplicated a warehouseServiceType by id

Returns a duplicated warehouseServiceType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateWarehouseServiceTypeById(warehouseServiceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to be duplicated. | 

### Return type

[**WarehouseServiceType**](WarehouseServiceType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseServiceTypeByFilter"></a>
# **getWarehouseServiceTypeByFilter**
> [WarehouseServiceType] getWarehouseServiceTypeByFilter(opts)

Search warehouseServiceTypes by filter

Returns the list of warehouseServiceTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

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
apiInstance.getWarehouseServiceTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[WarehouseServiceType]**](WarehouseServiceType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseServiceTypeById"></a>
# **getWarehouseServiceTypeById**
> WarehouseServiceType getWarehouseServiceTypeById(warehouseServiceTypeId)

Get a warehouseServiceType by id

Returns the warehouseServiceType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWarehouseServiceTypeById(warehouseServiceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to be returned. | 

### Return type

[**WarehouseServiceType**](WarehouseServiceType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseServiceTypeFiles"></a>
# **getWarehouseServiceTypeFiles**
> getWarehouseServiceTypeFiles(warehouseServiceTypeId)

Get the files for a warehouseServiceType.

Get all existing warehouseServiceType files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseServiceTypeFiles(warehouseServiceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseServiceTypeTags"></a>
# **getWarehouseServiceTypeTags**
> getWarehouseServiceTypeTags(warehouseServiceTypeId)

Get the tags for a warehouseServiceType.

Get all existing warehouseServiceType tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var warehouseServiceTypeId = 56; // Number | Id of the warehouseServiceType to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseServiceTypeTags(warehouseServiceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseServiceTypeId** | **Number**| Id of the warehouseServiceType to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWarehouseServiceType"></a>
# **updateWarehouseServiceType**
> updateWarehouseServiceType(body)

Update a warehouseServiceType

Updates an existing warehouseServiceType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var body = new infoplus.WarehouseServiceType(); // WarehouseServiceType | WarehouseServiceType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWarehouseServiceType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WarehouseServiceType**](WarehouseServiceType.md)| WarehouseServiceType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWarehouseServiceTypeCustomFields"></a>
# **updateWarehouseServiceTypeCustomFields**
> updateWarehouseServiceTypeCustomFields(body)

Update a warehouseServiceType custom fields

Updates an existing warehouseServiceType custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseServiceTypeApi();

var body = new infoplus.WarehouseServiceType(); // WarehouseServiceType | WarehouseServiceType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWarehouseServiceTypeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WarehouseServiceType**](WarehouseServiceType.md)| WarehouseServiceType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

