# infoplus.InventoryStorageActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventoryStorageActivity**](InventoryStorageActivityApi.md#addInventoryStorageActivity) | **POST** /beta/inventoryStorageActivity | Create an inventoryStorageActivity
[**addInventoryStorageActivityAudit**](InventoryStorageActivityApi.md#addInventoryStorageActivityAudit) | **PUT** /beta/inventoryStorageActivity/{inventoryStorageActivityId}/audit/{inventoryStorageActivityAudit} | Add new audit for an inventoryStorageActivity
[**addInventoryStorageActivityFile**](InventoryStorageActivityApi.md#addInventoryStorageActivityFile) | **POST** /beta/inventoryStorageActivity/{inventoryStorageActivityId}/file/{fileName} | Attach a file to an inventoryStorageActivity
[**addInventoryStorageActivityTag**](InventoryStorageActivityApi.md#addInventoryStorageActivityTag) | **PUT** /beta/inventoryStorageActivity/{inventoryStorageActivityId}/tag/{inventoryStorageActivityTag} | Add new tags for an inventoryStorageActivity.
[**deleteInventoryStorageActivity**](InventoryStorageActivityApi.md#deleteInventoryStorageActivity) | **DELETE** /beta/inventoryStorageActivity/{inventoryStorageActivityId} | Delete an inventoryStorageActivity
[**deleteInventoryStorageActivityTag**](InventoryStorageActivityApi.md#deleteInventoryStorageActivityTag) | **DELETE** /beta/inventoryStorageActivity/{inventoryStorageActivityId}/tag/{inventoryStorageActivityTag} | Delete a tag for an inventoryStorageActivity.
[**getDuplicateInventoryStorageActivityById**](InventoryStorageActivityApi.md#getDuplicateInventoryStorageActivityById) | **GET** /beta/inventoryStorageActivity/duplicate/{inventoryStorageActivityId} | Get a duplicated an inventoryStorageActivity by id
[**getInventoryStorageActivityByFilter**](InventoryStorageActivityApi.md#getInventoryStorageActivityByFilter) | **GET** /beta/inventoryStorageActivity/search | Search inventoryStorageActivitys by filter
[**getInventoryStorageActivityById**](InventoryStorageActivityApi.md#getInventoryStorageActivityById) | **GET** /beta/inventoryStorageActivity/{inventoryStorageActivityId} | Get an inventoryStorageActivity by id
[**getInventoryStorageActivityTags**](InventoryStorageActivityApi.md#getInventoryStorageActivityTags) | **GET** /beta/inventoryStorageActivity/{inventoryStorageActivityId}/tag | Get the tags for an inventoryStorageActivity.
[**updateInventoryStorageActivity**](InventoryStorageActivityApi.md#updateInventoryStorageActivity) | **PUT** /beta/inventoryStorageActivity | Update an inventoryStorageActivity


<a name="addInventoryStorageActivity"></a>
# **addInventoryStorageActivity**
> InventoryStorageActivity addInventoryStorageActivity(body)

Create an inventoryStorageActivity

Inserts a new inventoryStorageActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var body = new infoplus.InventoryStorageActivity(); // InventoryStorageActivity | InventoryStorageActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventoryStorageActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryStorageActivity**](InventoryStorageActivity.md)| InventoryStorageActivity to be inserted. | 

### Return type

[**InventoryStorageActivity**](InventoryStorageActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryStorageActivityAudit"></a>
# **addInventoryStorageActivityAudit**
> addInventoryStorageActivityAudit(inventoryStorageActivityId, inventoryStorageActivityAudit)

Add new audit for an inventoryStorageActivity

Adds an audit to an existing inventoryStorageActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to add an audit to

var inventoryStorageActivityAudit = "inventoryStorageActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryStorageActivityAudit(inventoryStorageActivityId, inventoryStorageActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to add an audit to | 
 **inventoryStorageActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryStorageActivityFile"></a>
# **addInventoryStorageActivityFile**
> addInventoryStorageActivityFile(inventoryStorageActivityId, fileName)

Attach a file to an inventoryStorageActivity

Adds a file to an existing inventoryStorageActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryStorageActivityFile(inventoryStorageActivityId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addInventoryStorageActivityTag"></a>
# **addInventoryStorageActivityTag**
> addInventoryStorageActivityTag(inventoryStorageActivityId, inventoryStorageActivityTag)

Add new tags for an inventoryStorageActivity.

Adds a tag to an existing inventoryStorageActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to add a tag to

var inventoryStorageActivityTag = "inventoryStorageActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInventoryStorageActivityTag(inventoryStorageActivityId, inventoryStorageActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to add a tag to | 
 **inventoryStorageActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryStorageActivity"></a>
# **deleteInventoryStorageActivity**
> deleteInventoryStorageActivity(inventoryStorageActivityId)

Delete an inventoryStorageActivity

Deletes the inventoryStorageActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryStorageActivity(inventoryStorageActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInventoryStorageActivityTag"></a>
# **deleteInventoryStorageActivityTag**
> deleteInventoryStorageActivityTag(inventoryStorageActivityId, inventoryStorageActivityTag)

Delete a tag for an inventoryStorageActivity.

Deletes an existing inventoryStorageActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to remove tag from

var inventoryStorageActivityTag = "inventoryStorageActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryStorageActivityTag(inventoryStorageActivityId, inventoryStorageActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to remove tag from | 
 **inventoryStorageActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInventoryStorageActivityById"></a>
# **getDuplicateInventoryStorageActivityById**
> InventoryStorageActivity getDuplicateInventoryStorageActivityById(inventoryStorageActivityId)

Get a duplicated an inventoryStorageActivity by id

Returns a duplicated inventoryStorageActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateInventoryStorageActivityById(inventoryStorageActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to be duplicated. | 

### Return type

[**InventoryStorageActivity**](InventoryStorageActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryStorageActivityByFilter"></a>
# **getInventoryStorageActivityByFilter**
> [InventoryStorageActivity] getInventoryStorageActivityByFilter(opts)

Search inventoryStorageActivitys by filter

Returns the list of inventoryStorageActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

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
apiInstance.getInventoryStorageActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InventoryStorageActivity]**](InventoryStorageActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryStorageActivityById"></a>
# **getInventoryStorageActivityById**
> InventoryStorageActivity getInventoryStorageActivityById(inventoryStorageActivityId)

Get an inventoryStorageActivity by id

Returns the inventoryStorageActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryStorageActivityById(inventoryStorageActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to be returned. | 

### Return type

[**InventoryStorageActivity**](InventoryStorageActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryStorageActivityTags"></a>
# **getInventoryStorageActivityTags**
> getInventoryStorageActivityTags(inventoryStorageActivityId)

Get the tags for an inventoryStorageActivity.

Get all existing inventoryStorageActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var inventoryStorageActivityId = 56; // Number | Id of the inventoryStorageActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInventoryStorageActivityTags(inventoryStorageActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryStorageActivityId** | **Number**| Id of the inventoryStorageActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInventoryStorageActivity"></a>
# **updateInventoryStorageActivity**
> updateInventoryStorageActivity(body)

Update an inventoryStorageActivity

Updates an existing inventoryStorageActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InventoryStorageActivityApi();

var body = new infoplus.InventoryStorageActivity(); // InventoryStorageActivity | InventoryStorageActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryStorageActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryStorageActivity**](InventoryStorageActivity.md)| InventoryStorageActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

