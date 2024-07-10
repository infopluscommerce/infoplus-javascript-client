# infoplus.InventoryAdjustmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventoryAdjustmentAudit**](InventoryAdjustmentApi.md#addInventoryAdjustmentAudit) | **PUT** /beta/inventoryAdjustment/{inventoryAdjustmentId}/audit/{inventoryAdjustmentAudit} | Add new audit for an inventoryAdjustment
[**addInventoryAdjustmentFile**](InventoryAdjustmentApi.md#addInventoryAdjustmentFile) | **POST** /beta/inventoryAdjustment/{inventoryAdjustmentId}/file/{fileName} | Attach a file to an inventoryAdjustment
[**addInventoryAdjustmentFileByURL**](InventoryAdjustmentApi.md#addInventoryAdjustmentFileByURL) | **POST** /beta/inventoryAdjustment/{inventoryAdjustmentId}/file | Attach a file to an inventoryAdjustment by URL.
[**addInventoryAdjustmentTag**](InventoryAdjustmentApi.md#addInventoryAdjustmentTag) | **PUT** /beta/inventoryAdjustment/{inventoryAdjustmentId}/tag/{inventoryAdjustmentTag} | Add new tags for an inventoryAdjustment.
[**deleteInventoryAdjustmentFile**](InventoryAdjustmentApi.md#deleteInventoryAdjustmentFile) | **DELETE** /beta/inventoryAdjustment/{inventoryAdjustmentId}/file/{fileId} | Delete a file for an inventoryAdjustment.
[**deleteInventoryAdjustmentTag**](InventoryAdjustmentApi.md#deleteInventoryAdjustmentTag) | **DELETE** /beta/inventoryAdjustment/{inventoryAdjustmentId}/tag/{inventoryAdjustmentTag} | Delete a tag for an inventoryAdjustment.
[**getDuplicateInventoryAdjustmentById**](InventoryAdjustmentApi.md#getDuplicateInventoryAdjustmentById) | **GET** /beta/inventoryAdjustment/duplicate/{inventoryAdjustmentId} | Get a duplicated an inventoryAdjustment by id
[**getInventoryAdjustmentByFilter**](InventoryAdjustmentApi.md#getInventoryAdjustmentByFilter) | **GET** /beta/inventoryAdjustment/search | Search inventoryAdjustments by filter
[**getInventoryAdjustmentById**](InventoryAdjustmentApi.md#getInventoryAdjustmentById) | **GET** /beta/inventoryAdjustment/{inventoryAdjustmentId} | Get an inventoryAdjustment by id
[**getInventoryAdjustmentFiles**](InventoryAdjustmentApi.md#getInventoryAdjustmentFiles) | **GET** /beta/inventoryAdjustment/{inventoryAdjustmentId}/file | Get the files for an inventoryAdjustment.
[**getInventoryAdjustmentTags**](InventoryAdjustmentApi.md#getInventoryAdjustmentTags) | **GET** /beta/inventoryAdjustment/{inventoryAdjustmentId}/tag | Get the tags for an inventoryAdjustment.
[**updateInventoryAdjustmentCustomFields**](InventoryAdjustmentApi.md#updateInventoryAdjustmentCustomFields) | **PUT** /beta/inventoryAdjustment/customFields | Update an inventoryAdjustment custom fields


<a name="addInventoryAdjustmentAudit"></a>
# **addInventoryAdjustmentAudit**
> addInventoryAdjustmentAudit(inventoryAdjustmentId, inventoryAdjustmentAudit)

Add new audit for an inventoryAdjustment

Adds an audit to an existing inventoryAdjustment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to add an audit to

var inventoryAdjustmentAudit = "inventoryAdjustmentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryAdjustmentAudit(inventoryAdjustmentId, inventoryAdjustmentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to add an audit to | 
 **inventoryAdjustmentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryAdjustmentFile"></a>
# **addInventoryAdjustmentFile**
> addInventoryAdjustmentFile(inventoryAdjustmentId, fileName)

Attach a file to an inventoryAdjustment

Adds a file to an existing inventoryAdjustment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryAdjustmentFile(inventoryAdjustmentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addInventoryAdjustmentFileByURL"></a>
# **addInventoryAdjustmentFileByURL**
> addInventoryAdjustmentFileByURL(body, inventoryAdjustmentId)

Attach a file to an inventoryAdjustment by URL.

Adds a file to an existing inventoryAdjustment by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryAdjustmentFileByURL(body, inventoryAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryAdjustmentTag"></a>
# **addInventoryAdjustmentTag**
> addInventoryAdjustmentTag(inventoryAdjustmentId, inventoryAdjustmentTag)

Add new tags for an inventoryAdjustment.

Adds a tag to an existing inventoryAdjustment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to add a tag to

var inventoryAdjustmentTag = "inventoryAdjustmentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryAdjustmentTag(inventoryAdjustmentId, inventoryAdjustmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to add a tag to | 
 **inventoryAdjustmentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryAdjustmentFile"></a>
# **deleteInventoryAdjustmentFile**
> deleteInventoryAdjustmentFile(inventoryAdjustmentId, fileId)

Delete a file for an inventoryAdjustment.

Deletes an existing inventoryAdjustment file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryAdjustmentFile(inventoryAdjustmentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInventoryAdjustmentTag"></a>
# **deleteInventoryAdjustmentTag**
> deleteInventoryAdjustmentTag(inventoryAdjustmentId, inventoryAdjustmentTag)

Delete a tag for an inventoryAdjustment.

Deletes an existing inventoryAdjustment tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to remove tag from

var inventoryAdjustmentTag = "inventoryAdjustmentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryAdjustmentTag(inventoryAdjustmentId, inventoryAdjustmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to remove tag from | 
 **inventoryAdjustmentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInventoryAdjustmentById"></a>
# **getDuplicateInventoryAdjustmentById**
> InventoryAdjustment getDuplicateInventoryAdjustmentById(inventoryAdjustmentId)

Get a duplicated an inventoryAdjustment by id

Returns a duplicated inventoryAdjustment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateInventoryAdjustmentById(inventoryAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to be duplicated. | 

### Return type

[**InventoryAdjustment**](InventoryAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryAdjustmentByFilter"></a>
# **getInventoryAdjustmentByFilter**
> [InventoryAdjustment] getInventoryAdjustmentByFilter(opts)

Search inventoryAdjustments by filter

Returns the list of inventoryAdjustments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

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
apiInstance.getInventoryAdjustmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InventoryAdjustment]**](InventoryAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryAdjustmentById"></a>
# **getInventoryAdjustmentById**
> InventoryAdjustment getInventoryAdjustmentById(inventoryAdjustmentId)

Get an inventoryAdjustment by id

Returns the inventoryAdjustment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryAdjustmentById(inventoryAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to be returned. | 

### Return type

[**InventoryAdjustment**](InventoryAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryAdjustmentFiles"></a>
# **getInventoryAdjustmentFiles**
> getInventoryAdjustmentFiles(inventoryAdjustmentId)

Get the files for an inventoryAdjustment.

Get all existing inventoryAdjustment files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInventoryAdjustmentFiles(inventoryAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryAdjustmentTags"></a>
# **getInventoryAdjustmentTags**
> getInventoryAdjustmentTags(inventoryAdjustmentId)

Get the tags for an inventoryAdjustment.

Get all existing inventoryAdjustment tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var inventoryAdjustmentId = 56; // Number | Id of the inventoryAdjustment to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInventoryAdjustmentTags(inventoryAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Number**| Id of the inventoryAdjustment to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInventoryAdjustmentCustomFields"></a>
# **updateInventoryAdjustmentCustomFields**
> updateInventoryAdjustmentCustomFields(body)

Update an inventoryAdjustment custom fields

Updates an existing inventoryAdjustment custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryAdjustmentApi();

var body = new infoplus.InventoryAdjustment(); // InventoryAdjustment | InventoryAdjustment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryAdjustmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryAdjustment**](InventoryAdjustment.md)| InventoryAdjustment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

