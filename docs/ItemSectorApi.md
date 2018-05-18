# infoplus.ItemSectorApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemSector**](ItemSectorApi.md#addItemSector) | **POST** /beta/itemSector | Create an itemSector
[**addItemSectorAudit**](ItemSectorApi.md#addItemSectorAudit) | **PUT** /beta/itemSector/{itemSectorId}/audit/{itemSectorAudit} | Add new audit for an itemSector
[**addItemSectorTag**](ItemSectorApi.md#addItemSectorTag) | **PUT** /beta/itemSector/{itemSectorId}/tag/{itemSectorTag} | Add new tags for an itemSector.
[**deleteItemSector**](ItemSectorApi.md#deleteItemSector) | **DELETE** /beta/itemSector/{itemSectorId} | Delete an itemSector
[**deleteItemSectorTag**](ItemSectorApi.md#deleteItemSectorTag) | **DELETE** /beta/itemSector/{itemSectorId}/tag/{itemSectorTag} | Delete a tag for an itemSector.
[**getDuplicateItemSectorById**](ItemSectorApi.md#getDuplicateItemSectorById) | **GET** /beta/itemSector/duplicate/{itemSectorId} | Get a duplicated an itemSector by id
[**getItemSectorByFilter**](ItemSectorApi.md#getItemSectorByFilter) | **GET** /beta/itemSector/search | Search itemSectors by filter
[**getItemSectorById**](ItemSectorApi.md#getItemSectorById) | **GET** /beta/itemSector/{itemSectorId} | Get an itemSector by id
[**getItemSectorTags**](ItemSectorApi.md#getItemSectorTags) | **GET** /beta/itemSector/{itemSectorId}/tag | Get the tags for an itemSector.
[**updateItemSector**](ItemSectorApi.md#updateItemSector) | **PUT** /beta/itemSector | Update an itemSector


<a name="addItemSector"></a>
# **addItemSector**
> ItemSector addItemSector(body)

Create an itemSector

Inserts a new itemSector using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var body = new infoplus.ItemSector(); // ItemSector | ItemSector to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemSector(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSector**](ItemSector.md)| ItemSector to be inserted. | 

### Return type

[**ItemSector**](ItemSector.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSectorAudit"></a>
# **addItemSectorAudit**
> addItemSectorAudit(itemSectorId, itemSectorAudit)

Add new audit for an itemSector

Adds an audit to an existing itemSector.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var itemSectorId = 56; // Number | Id of the itemSector to add an audit to

var itemSectorAudit = "itemSectorAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSectorAudit(itemSectorId, itemSectorAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSectorId** | **Number**| Id of the itemSector to add an audit to | 
 **itemSectorAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSectorTag"></a>
# **addItemSectorTag**
> addItemSectorTag(itemSectorId, itemSectorTag)

Add new tags for an itemSector.

Adds a tag to an existing itemSector.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var itemSectorId = 56; // Number | Id of the itemSector to add a tag to

var itemSectorTag = "itemSectorTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSectorTag(itemSectorId, itemSectorTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSectorId** | **Number**| Id of the itemSector to add a tag to | 
 **itemSectorTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemSector"></a>
# **deleteItemSector**
> deleteItemSector(itemSectorId)

Delete an itemSector

Deletes the itemSector identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var itemSectorId = 56; // Number | Id of the itemSector to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSector(itemSectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSectorId** | **Number**| Id of the itemSector to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSectorTag"></a>
# **deleteItemSectorTag**
> deleteItemSectorTag(itemSectorId, itemSectorTag)

Delete a tag for an itemSector.

Deletes an existing itemSector tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var itemSectorId = 56; // Number | Id of the itemSector to remove tag from

var itemSectorTag = "itemSectorTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSectorTag(itemSectorId, itemSectorTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSectorId** | **Number**| Id of the itemSector to remove tag from | 
 **itemSectorTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemSectorById"></a>
# **getDuplicateItemSectorById**
> ItemSector getDuplicateItemSectorById(itemSectorId)

Get a duplicated an itemSector by id

Returns a duplicated itemSector identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var itemSectorId = 56; // Number | Id of the itemSector to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemSectorById(itemSectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSectorId** | **Number**| Id of the itemSector to be duplicated. | 

### Return type

[**ItemSector**](ItemSector.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSectorByFilter"></a>
# **getItemSectorByFilter**
> [ItemSector] getItemSectorByFilter(opts)

Search itemSectors by filter

Returns the list of itemSectors that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

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
apiInstance.getItemSectorByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemSector]**](ItemSector.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSectorById"></a>
# **getItemSectorById**
> ItemSector getItemSectorById(itemSectorId)

Get an itemSector by id

Returns the itemSector identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var itemSectorId = 56; // Number | Id of the itemSector to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemSectorById(itemSectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSectorId** | **Number**| Id of the itemSector to be returned. | 

### Return type

[**ItemSector**](ItemSector.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSectorTags"></a>
# **getItemSectorTags**
> getItemSectorTags(itemSectorId)

Get the tags for an itemSector.

Get all existing itemSector tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var itemSectorId = 56; // Number | Id of the itemSector to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSectorTags(itemSectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSectorId** | **Number**| Id of the itemSector to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemSector"></a>
# **updateItemSector**
> updateItemSector(body)

Update an itemSector

Updates an existing itemSector using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSectorApi();

var body = new infoplus.ItemSector(); // ItemSector | ItemSector to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemSector(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSector**](ItemSector.md)| ItemSector to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

