# infoplus.ItemCategoryApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemCategory**](ItemCategoryApi.md#addItemCategory) | **POST** /v2.0/itemCategory | Create an itemCategory
[**deleteItemCategory**](ItemCategoryApi.md#deleteItemCategory) | **DELETE** /v2.0/itemCategory/{itemCategoryId} | Delete an itemCategory
[**getDuplicateItemCategoryById**](ItemCategoryApi.md#getDuplicateItemCategoryById) | **GET** /v2.0/itemCategory/duplicate/{itemCategoryId} | Get a duplicated an itemCategory by id
[**getItemCategoryByFilter**](ItemCategoryApi.md#getItemCategoryByFilter) | **GET** /v2.0/itemCategory/search | Search itemCategorys by filter
[**getItemCategoryById**](ItemCategoryApi.md#getItemCategoryById) | **GET** /v2.0/itemCategory/{itemCategoryId} | Get an itemCategory by id
[**updateItemCategory**](ItemCategoryApi.md#updateItemCategory) | **PUT** /v2.0/itemCategory | Update an itemCategory


<a name="addItemCategory"></a>
# **addItemCategory**
> ItemCategory addItemCategory(body)

Create an itemCategory

Inserts a new itemCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemCategoryApi()

var body = new infoplus.ItemCategory(); // {ItemCategory} ItemCategory to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addItemCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemCategory**](ItemCategory.md)| ItemCategory to be inserted. | 

### Return type

[**ItemCategory**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemCategory"></a>
# **deleteItemCategory**
> deleteItemCategory(itemCategoryId)

Delete an itemCategory

Deletes the itemCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemCategoryApi()

var itemCategoryId = 56; // {Integer} Id of the itemCategory to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemCategory(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Integer**| Id of the itemCategory to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemCategoryById"></a>
# **getDuplicateItemCategoryById**
> ItemCategory getDuplicateItemCategoryById(itemCategoryId)

Get a duplicated an itemCategory by id

Returns a duplicated itemCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemCategoryApi()

var itemCategoryId = 56; // {Integer} Id of the itemCategory to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateItemCategoryById(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Integer**| Id of the itemCategory to be duplicated. | 

### Return type

[**ItemCategory**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemCategoryByFilter"></a>
# **getItemCategoryByFilter**
> [ItemCategory] getItemCategoryByFilter(opts)

Search itemCategorys by filter

Returns the list of itemCategorys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemCategoryApi()

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
api.getItemCategoryByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemCategory]**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemCategoryById"></a>
# **getItemCategoryById**
> ItemCategory getItemCategoryById(itemCategoryId)

Get an itemCategory by id

Returns the itemCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemCategoryApi()

var itemCategoryId = 56; // {Integer} Id of the itemCategory to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemCategoryById(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Integer**| Id of the itemCategory to be returned. | 

### Return type

[**ItemCategory**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemCategory"></a>
# **updateItemCategory**
> updateItemCategory(body)

Update an itemCategory

Updates an existing itemCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemCategoryApi()

var body = new infoplus.ItemCategory(); // {ItemCategory} ItemCategory to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateItemCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemCategory**](ItemCategory.md)| ItemCategory to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

