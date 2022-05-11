# infoplus.InventoryDetailApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventoryDetailAudit**](InventoryDetailApi.md#addInventoryDetailAudit) | **PUT** /v3.0/inventoryDetail/{inventoryDetailId}/audit/{inventoryDetailAudit} | Add new audit for an inventoryDetail
[**addInventoryDetailFile**](InventoryDetailApi.md#addInventoryDetailFile) | **POST** /v3.0/inventoryDetail/{inventoryDetailId}/file/{fileName} | Attach a file to an inventoryDetail
[**addInventoryDetailFileByURL**](InventoryDetailApi.md#addInventoryDetailFileByURL) | **POST** /v3.0/inventoryDetail/{inventoryDetailId}/file | Attach a file to an inventoryDetail by URL.
[**addInventoryDetailTag**](InventoryDetailApi.md#addInventoryDetailTag) | **PUT** /v3.0/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag} | Add new tags for an inventoryDetail.
[**deleteInventoryDetailFile**](InventoryDetailApi.md#deleteInventoryDetailFile) | **DELETE** /v3.0/inventoryDetail/{inventoryDetailId}/file/{fileId} | Delete a file for an inventoryDetail.
[**deleteInventoryDetailTag**](InventoryDetailApi.md#deleteInventoryDetailTag) | **DELETE** /v3.0/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag} | Delete a tag for an inventoryDetail.
[**getDuplicateInventoryDetailById**](InventoryDetailApi.md#getDuplicateInventoryDetailById) | **GET** /v3.0/inventoryDetail/duplicate/{inventoryDetailId} | Get a duplicated an inventoryDetail by id
[**getInventoryDetailByFilter**](InventoryDetailApi.md#getInventoryDetailByFilter) | **GET** /v3.0/inventoryDetail/search | Search inventoryDetails by filter
[**getInventoryDetailById**](InventoryDetailApi.md#getInventoryDetailById) | **GET** /v3.0/inventoryDetail/{inventoryDetailId} | Get an inventoryDetail by id
[**getInventoryDetailFiles**](InventoryDetailApi.md#getInventoryDetailFiles) | **GET** /v3.0/inventoryDetail/{inventoryDetailId}/file | Get the files for an inventoryDetail.
[**getInventoryDetailTags**](InventoryDetailApi.md#getInventoryDetailTags) | **GET** /v3.0/inventoryDetail/{inventoryDetailId}/tag | Get the tags for an inventoryDetail.
[**updateInventoryDetailCustomFields**](InventoryDetailApi.md#updateInventoryDetailCustomFields) | **PUT** /v3.0/inventoryDetail/customFields | Update an inventoryDetail custom fields


<a name="addInventoryDetailAudit"></a>
# **addInventoryDetailAudit**
> addInventoryDetailAudit(inventoryDetailId, inventoryDetailAudit)

Add new audit for an inventoryDetail

Adds an audit to an existing inventoryDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to add an audit to

var inventoryDetailAudit = "inventoryDetailAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryDetailAudit(inventoryDetailId, inventoryDetailAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to add an audit to | 
 **inventoryDetailAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryDetailFile"></a>
# **addInventoryDetailFile**
> addInventoryDetailFile(inventoryDetailId, fileName)

Attach a file to an inventoryDetail

Adds a file to an existing inventoryDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryDetailFile(inventoryDetailId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addInventoryDetailFileByURL"></a>
# **addInventoryDetailFileByURL**
> addInventoryDetailFileByURL(body, inventoryDetailId)

Attach a file to an inventoryDetail by URL.

Adds a file to an existing inventoryDetail by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryDetailFileByURL(body, inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryDetailTag"></a>
# **addInventoryDetailTag**
> addInventoryDetailTag(inventoryDetailId, inventoryDetailTag)

Add new tags for an inventoryDetail.

Adds a tag to an existing inventoryDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to add a tag to

var inventoryDetailTag = "inventoryDetailTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryDetailTag(inventoryDetailId, inventoryDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to add a tag to | 
 **inventoryDetailTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryDetailFile"></a>
# **deleteInventoryDetailFile**
> deleteInventoryDetailFile(inventoryDetailId, fileId)

Delete a file for an inventoryDetail.

Deletes an existing inventoryDetail file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryDetailFile(inventoryDetailId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInventoryDetailTag"></a>
# **deleteInventoryDetailTag**
> deleteInventoryDetailTag(inventoryDetailId, inventoryDetailTag)

Delete a tag for an inventoryDetail.

Deletes an existing inventoryDetail tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to remove tag from

var inventoryDetailTag = "inventoryDetailTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryDetailTag(inventoryDetailId, inventoryDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to remove tag from | 
 **inventoryDetailTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInventoryDetailById"></a>
# **getDuplicateInventoryDetailById**
> InventoryDetail getDuplicateInventoryDetailById(inventoryDetailId)

Get a duplicated an inventoryDetail by id

Returns a duplicated inventoryDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateInventoryDetailById(inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to be duplicated. | 

### Return type

[**InventoryDetail**](InventoryDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryDetailByFilter"></a>
# **getInventoryDetailByFilter**
> [InventoryDetail] getInventoryDetailByFilter(opts)

Search inventoryDetails by filter

Returns the list of inventoryDetails that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

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
apiInstance.getInventoryDetailByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InventoryDetail]**](InventoryDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryDetailById"></a>
# **getInventoryDetailById**
> InventoryDetail getInventoryDetailById(inventoryDetailId)

Get an inventoryDetail by id

Returns the inventoryDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryDetailById(inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to be returned. | 

### Return type

[**InventoryDetail**](InventoryDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryDetailFiles"></a>
# **getInventoryDetailFiles**
> getInventoryDetailFiles(inventoryDetailId)

Get the files for an inventoryDetail.

Get all existing inventoryDetail files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInventoryDetailFiles(inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryDetailTags"></a>
# **getInventoryDetailTags**
> getInventoryDetailTags(inventoryDetailId)

Get the tags for an inventoryDetail.

Get all existing inventoryDetail tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var inventoryDetailId = 56; // Number | Id of the inventoryDetail to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInventoryDetailTags(inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Number**| Id of the inventoryDetail to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInventoryDetailCustomFields"></a>
# **updateInventoryDetailCustomFields**
> updateInventoryDetailCustomFields(body)

Update an inventoryDetail custom fields

Updates an existing inventoryDetail custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryDetailApi();

var body = new infoplus.InventoryDetail(); // InventoryDetail | InventoryDetail to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryDetailCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryDetail**](InventoryDetail.md)| InventoryDetail to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

