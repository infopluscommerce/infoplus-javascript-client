# infoplus.ItemProductCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemProductCode**](ItemProductCodeApi.md#addItemProductCode) | **POST** /v2.0/itemProductCode | Create an itemProductCode
[**deleteItemProductCode**](ItemProductCodeApi.md#deleteItemProductCode) | **DELETE** /v2.0/itemProductCode/{itemProductCodeId} | Delete an itemProductCode
[**getDuplicateItemProductCodeById**](ItemProductCodeApi.md#getDuplicateItemProductCodeById) | **GET** /v2.0/itemProductCode/duplicate/{itemProductCodeId} | Get a duplicated an itemProductCode by id
[**getItemProductCodeByFilter**](ItemProductCodeApi.md#getItemProductCodeByFilter) | **GET** /v2.0/itemProductCode/search | Search itemProductCodes by filter
[**getItemProductCodeById**](ItemProductCodeApi.md#getItemProductCodeById) | **GET** /v2.0/itemProductCode/{itemProductCodeId} | Get an itemProductCode by id
[**updateItemProductCode**](ItemProductCodeApi.md#updateItemProductCode) | **PUT** /v2.0/itemProductCode | Update an itemProductCode


<a name="addItemProductCode"></a>
# **addItemProductCode**
> ItemProductCode addItemProductCode(body)

Create an itemProductCode

Inserts a new itemProductCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemProductCodeApi()

var body = new infoplus.ItemProductCode(); // {ItemProductCode} ItemProductCode to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addItemProductCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemProductCode**](ItemProductCode.md)| ItemProductCode to be inserted. | 

### Return type

[**ItemProductCode**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemProductCode"></a>
# **deleteItemProductCode**
> deleteItemProductCode(itemProductCodeId)

Delete an itemProductCode

Deletes the itemProductCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemProductCodeApi()

var itemProductCodeId = 56; // {Integer} Id of the itemProductCode to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemProductCode(itemProductCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Integer**| Id of the itemProductCode to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemProductCodeById"></a>
# **getDuplicateItemProductCodeById**
> ItemProductCode getDuplicateItemProductCodeById(itemProductCodeId)

Get a duplicated an itemProductCode by id

Returns a duplicated itemProductCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemProductCodeApi()

var itemProductCodeId = 56; // {Integer} Id of the itemProductCode to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateItemProductCodeById(itemProductCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Integer**| Id of the itemProductCode to be duplicated. | 

### Return type

[**ItemProductCode**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemProductCodeByFilter"></a>
# **getItemProductCodeByFilter**
> [ItemProductCode] getItemProductCodeByFilter(opts)

Search itemProductCodes by filter

Returns the list of itemProductCodes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemProductCodeApi()

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
api.getItemProductCodeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemProductCode]**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemProductCodeById"></a>
# **getItemProductCodeById**
> ItemProductCode getItemProductCodeById(itemProductCodeId)

Get an itemProductCode by id

Returns the itemProductCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemProductCodeApi()

var itemProductCodeId = 56; // {Integer} Id of the itemProductCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemProductCodeById(itemProductCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Integer**| Id of the itemProductCode to be returned. | 

### Return type

[**ItemProductCode**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemProductCode"></a>
# **updateItemProductCode**
> updateItemProductCode(body)

Update an itemProductCode

Updates an existing itemProductCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemProductCodeApi()

var body = new infoplus.ItemProductCode(); // {ItemProductCode} ItemProductCode to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateItemProductCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemProductCode**](ItemProductCode.md)| ItemProductCode to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

