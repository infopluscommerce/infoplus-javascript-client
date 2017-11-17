# infoplus.ItemLowstockCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemLowstockCode**](ItemLowstockCodeApi.md#addItemLowstockCode) | **POST** /v2.0/itemLowstockCode | Create an itemLowstockCode
[**deleteItemLowstockCode**](ItemLowstockCodeApi.md#deleteItemLowstockCode) | **DELETE** /v2.0/itemLowstockCode/{itemLowstockCodeId} | Delete an itemLowstockCode
[**getDuplicateItemLowstockCodeById**](ItemLowstockCodeApi.md#getDuplicateItemLowstockCodeById) | **GET** /v2.0/itemLowstockCode/duplicate/{itemLowstockCodeId} | Get a duplicated an itemLowstockCode by id
[**getItemLowstockCodeByFilter**](ItemLowstockCodeApi.md#getItemLowstockCodeByFilter) | **GET** /v2.0/itemLowstockCode/search | Search itemLowstockCodes by filter
[**getItemLowstockCodeById**](ItemLowstockCodeApi.md#getItemLowstockCodeById) | **GET** /v2.0/itemLowstockCode/{itemLowstockCodeId} | Get an itemLowstockCode by id
[**updateItemLowstockCode**](ItemLowstockCodeApi.md#updateItemLowstockCode) | **PUT** /v2.0/itemLowstockCode | Update an itemLowstockCode


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

