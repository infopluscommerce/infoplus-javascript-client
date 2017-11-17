# infoplus.ItemSummaryCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemSummaryCode**](ItemSummaryCodeApi.md#addItemSummaryCode) | **POST** /v2.0/itemSummaryCode | Create an itemSummaryCode
[**deleteItemSummaryCode**](ItemSummaryCodeApi.md#deleteItemSummaryCode) | **DELETE** /v2.0/itemSummaryCode/{itemSummaryCodeId} | Delete an itemSummaryCode
[**getDuplicateItemSummaryCodeById**](ItemSummaryCodeApi.md#getDuplicateItemSummaryCodeById) | **GET** /v2.0/itemSummaryCode/duplicate/{itemSummaryCodeId} | Get a duplicated an itemSummaryCode by id
[**getItemSummaryCodeByFilter**](ItemSummaryCodeApi.md#getItemSummaryCodeByFilter) | **GET** /v2.0/itemSummaryCode/search | Search itemSummaryCodes by filter
[**getItemSummaryCodeById**](ItemSummaryCodeApi.md#getItemSummaryCodeById) | **GET** /v2.0/itemSummaryCode/{itemSummaryCodeId} | Get an itemSummaryCode by id
[**updateItemSummaryCode**](ItemSummaryCodeApi.md#updateItemSummaryCode) | **PUT** /v2.0/itemSummaryCode | Update an itemSummaryCode


<a name="addItemSummaryCode"></a>
# **addItemSummaryCode**
> ItemSummaryCode addItemSummaryCode(body)

Create an itemSummaryCode

Inserts a new itemSummaryCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSummaryCodeApi()

var body = new infoplus.ItemSummaryCode(); // {ItemSummaryCode} ItemSummaryCode to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addItemSummaryCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSummaryCode**](ItemSummaryCode.md)| ItemSummaryCode to be inserted. | 

### Return type

[**ItemSummaryCode**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemSummaryCode"></a>
# **deleteItemSummaryCode**
> deleteItemSummaryCode(itemSummaryCodeId)

Delete an itemSummaryCode

Deletes the itemSummaryCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSummaryCodeApi()

var itemSummaryCodeId = 56; // {Integer} Id of the itemSummaryCode to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemSummaryCode(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Integer**| Id of the itemSummaryCode to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemSummaryCodeById"></a>
# **getDuplicateItemSummaryCodeById**
> ItemSummaryCode getDuplicateItemSummaryCodeById(itemSummaryCodeId)

Get a duplicated an itemSummaryCode by id

Returns a duplicated itemSummaryCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSummaryCodeApi()

var itemSummaryCodeId = 56; // {Integer} Id of the itemSummaryCode to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateItemSummaryCodeById(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Integer**| Id of the itemSummaryCode to be duplicated. | 

### Return type

[**ItemSummaryCode**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSummaryCodeByFilter"></a>
# **getItemSummaryCodeByFilter**
> [ItemSummaryCode] getItemSummaryCodeByFilter(opts)

Search itemSummaryCodes by filter

Returns the list of itemSummaryCodes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSummaryCodeApi()

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
api.getItemSummaryCodeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemSummaryCode]**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSummaryCodeById"></a>
# **getItemSummaryCodeById**
> ItemSummaryCode getItemSummaryCodeById(itemSummaryCodeId)

Get an itemSummaryCode by id

Returns the itemSummaryCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSummaryCodeApi()

var itemSummaryCodeId = 56; // {Integer} Id of the itemSummaryCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemSummaryCodeById(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Integer**| Id of the itemSummaryCode to be returned. | 

### Return type

[**ItemSummaryCode**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemSummaryCode"></a>
# **updateItemSummaryCode**
> updateItemSummaryCode(body)

Update an itemSummaryCode

Updates an existing itemSummaryCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSummaryCodeApi()

var body = new infoplus.ItemSummaryCode(); // {ItemSummaryCode} ItemSummaryCode to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateItemSummaryCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSummaryCode**](ItemSummaryCode.md)| ItemSummaryCode to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

