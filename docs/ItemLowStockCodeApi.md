# infoplus.ItemLowstockCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemLowstockCode**](ItemLowstockCodeApi.md#addItemLowstockCode) | **POST** /beta/itemLowstockCode | Create an itemLowstockCode
[**addItemLowstockCodeAudit**](ItemLowstockCodeApi.md#addItemLowstockCodeAudit) | **PUT** /beta/itemLowstockCode/{itemLowstockCodeId}/audit/{itemLowstockCodeAudit} | Add new audit for an itemLowstockCode
[**addItemLowstockCodeTag**](ItemLowstockCodeApi.md#addItemLowstockCodeTag) | **PUT** /beta/itemLowstockCode/{itemLowstockCodeId}/tag/{itemLowstockCodeTag} | Add new tags for an itemLowstockCode.
[**deleteItemLowstockCode**](ItemLowstockCodeApi.md#deleteItemLowstockCode) | **DELETE** /beta/itemLowstockCode/{itemLowstockCodeId} | Delete an itemLowstockCode
[**deleteItemLowstockCodeTag**](ItemLowstockCodeApi.md#deleteItemLowstockCodeTag) | **DELETE** /beta/itemLowstockCode/{itemLowstockCodeId}/tag/{itemLowstockCodeTag} | Delete a tag for an itemLowstockCode.
[**getDuplicateItemLowstockCodeById**](ItemLowstockCodeApi.md#getDuplicateItemLowstockCodeById) | **GET** /beta/itemLowstockCode/duplicate/{itemLowstockCodeId} | Get a duplicated an itemLowstockCode by id
[**getItemLowstockCodeByFilter**](ItemLowstockCodeApi.md#getItemLowstockCodeByFilter) | **GET** /beta/itemLowstockCode/search | Search itemLowstockCodes by filter
[**getItemLowstockCodeById**](ItemLowstockCodeApi.md#getItemLowstockCodeById) | **GET** /beta/itemLowstockCode/{itemLowstockCodeId} | Get an itemLowstockCode by id
[**getItemLowstockCodeTags**](ItemLowstockCodeApi.md#getItemLowstockCodeTags) | **GET** /beta/itemLowstockCode/{itemLowstockCodeId}/tag | Get the tags for an itemLowstockCode.
[**updateItemLowstockCode**](ItemLowstockCodeApi.md#updateItemLowstockCode) | **PUT** /beta/itemLowstockCode | Update an itemLowstockCode


<a name="addItemLowstockCode"></a>
# **addItemLowstockCode**
> ItemLowstockCode addItemLowstockCode(body)

Create an itemLowstockCode

Inserts a new itemLowstockCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var body = new infoplus.ItemLowstockCode(); // {ItemLowstockCode} ItemLowstockCode to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addItemLowstockCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemLowstockCode**](ItemLowstockCode.md)| ItemLowstockCode to be inserted. | 

### Return type

[**ItemLowstockCode**](ItemLowstockCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemLowstockCodeAudit"></a>
# **addItemLowstockCodeAudit**
> addItemLowstockCodeAudit(itemLowstockCodeId, itemLowstockCodeAudit)

Add new audit for an itemLowstockCode

Adds an audit to an existing itemLowstockCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var itemLowstockCodeId = 56; // {Integer} Id of the itemLowstockCode to add an audit to

var itemLowstockCodeAudit = "itemLowstockCodeAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addItemLowstockCodeAudit(itemLowstockCodeId, itemLowstockCodeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowstockCodeId** | **Integer**| Id of the itemLowstockCode to add an audit to | 
 **itemLowstockCodeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemLowstockCodeTag"></a>
# **addItemLowstockCodeTag**
> addItemLowstockCodeTag(itemLowstockCodeId, itemLowstockCodeTag)

Add new tags for an itemLowstockCode.

Adds a tag to an existing itemLowstockCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var itemLowstockCodeId = 56; // {Integer} Id of the itemLowstockCode to add a tag to

var itemLowstockCodeTag = "itemLowstockCodeTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addItemLowstockCodeTag(itemLowstockCodeId, itemLowstockCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowstockCodeId** | **Integer**| Id of the itemLowstockCode to add a tag to | 
 **itemLowstockCodeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemLowstockCode"></a>
# **deleteItemLowstockCode**
> deleteItemLowstockCode(itemLowstockCodeId)

Delete an itemLowstockCode

Deletes the itemLowstockCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var itemLowstockCodeId = 56; // {Integer} Id of the itemLowstockCode to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemLowstockCode(itemLowstockCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowstockCodeId** | **Integer**| Id of the itemLowstockCode to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemLowstockCodeTag"></a>
# **deleteItemLowstockCodeTag**
> deleteItemLowstockCodeTag(itemLowstockCodeId, itemLowstockCodeTag)

Delete a tag for an itemLowstockCode.

Deletes an existing itemLowstockCode tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var itemLowstockCodeId = 56; // {Integer} Id of the itemLowstockCode to remove tag from

var itemLowstockCodeTag = "itemLowstockCodeTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemLowstockCodeTag(itemLowstockCodeId, itemLowstockCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowstockCodeId** | **Integer**| Id of the itemLowstockCode to remove tag from | 
 **itemLowstockCodeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemLowstockCodeById"></a>
# **getDuplicateItemLowstockCodeById**
> ItemLowstockCode getDuplicateItemLowstockCodeById(itemLowstockCodeId)

Get a duplicated an itemLowstockCode by id

Returns a duplicated itemLowstockCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var itemLowstockCodeId = 56; // {Integer} Id of the itemLowstockCode to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateItemLowstockCodeById(itemLowstockCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowstockCodeId** | **Integer**| Id of the itemLowstockCode to be duplicated. | 

### Return type

[**ItemLowstockCode**](ItemLowstockCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemLowstockCodeByFilter"></a>
# **getItemLowstockCodeByFilter**
> [ItemLowstockCode] getItemLowstockCodeByFilter(opts)

Search itemLowstockCodes by filter

Returns the list of itemLowstockCodes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var opts = { 
  'filter': "filter_example", // {String} Query string, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56, // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // {String} Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemLowstockCodeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemLowstockCode]**](ItemLowstockCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemLowstockCodeById"></a>
# **getItemLowstockCodeById**
> ItemLowstockCode getItemLowstockCodeById(itemLowstockCodeId)

Get an itemLowstockCode by id

Returns the itemLowstockCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var itemLowstockCodeId = 56; // {Integer} Id of the itemLowstockCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemLowstockCodeById(itemLowstockCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowstockCodeId** | **Integer**| Id of the itemLowstockCode to be returned. | 

### Return type

[**ItemLowstockCode**](ItemLowstockCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemLowstockCodeTags"></a>
# **getItemLowstockCodeTags**
> getItemLowstockCodeTags(itemLowstockCodeId)

Get the tags for an itemLowstockCode.

Get all existing itemLowstockCode tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var itemLowstockCodeId = 56; // {Integer} Id of the itemLowstockCode to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getItemLowstockCodeTags(itemLowstockCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowstockCodeId** | **Integer**| Id of the itemLowstockCode to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemLowstockCode"></a>
# **updateItemLowstockCode**
> updateItemLowstockCode(body)

Update an itemLowstockCode

Updates an existing itemLowstockCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowstockCodeApi()

var body = new infoplus.ItemLowstockCode(); // {ItemLowstockCode} ItemLowstockCode to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateItemLowstockCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemLowstockCode**](ItemLowstockCode.md)| ItemLowstockCode to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

