# infoplus.ItemSubCategoryApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemSubCategory**](ItemSubCategoryApi.md#addItemSubCategory) | **POST** /v2.0/itemSubCategory | Create an itemSubCategory
[**deleteItemSubCategory**](ItemSubCategoryApi.md#deleteItemSubCategory) | **DELETE** /v2.0/itemSubCategory/{itemSubCategoryId} | Delete an itemSubCategory
[**getDuplicateItemSubCategoryById**](ItemSubCategoryApi.md#getDuplicateItemSubCategoryById) | **GET** /v2.0/itemSubCategory/duplicate/{itemSubCategoryId} | Get a duplicated an itemSubCategory by id
[**getItemSubCategoryByFilter**](ItemSubCategoryApi.md#getItemSubCategoryByFilter) | **GET** /v2.0/itemSubCategory/search | Search itemSubCategorys by filter
[**getItemSubCategoryById**](ItemSubCategoryApi.md#getItemSubCategoryById) | **GET** /v2.0/itemSubCategory/{itemSubCategoryId} | Get an itemSubCategory by id
[**updateItemSubCategory**](ItemSubCategoryApi.md#updateItemSubCategory) | **PUT** /v2.0/itemSubCategory | Update an itemSubCategory


<a name="addItemSubCategory"></a>
# **addItemSubCategory**
> ItemSubCategory addItemSubCategory(body)

Create an itemSubCategory

Inserts a new itemSubCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubCategoryApi()

var body = new infoplus.ItemSubCategory(); // {ItemSubCategory} ItemSubCategory to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addItemSubCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSubCategory**](ItemSubCategory.md)| ItemSubCategory to be inserted. | 

### Return type

[**ItemSubCategory**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemSubCategory"></a>
# **deleteItemSubCategory**
> deleteItemSubCategory(itemSubCategoryId)

Delete an itemSubCategory

Deletes the itemSubCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubCategoryApi()

var itemSubCategoryId = 56; // {Integer} Id of the itemSubCategory to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemSubCategory(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Integer**| Id of the itemSubCategory to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemSubCategoryById"></a>
# **getDuplicateItemSubCategoryById**
> ItemSubCategory getDuplicateItemSubCategoryById(itemSubCategoryId)

Get a duplicated an itemSubCategory by id

Returns a duplicated itemSubCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubCategoryApi()

var itemSubCategoryId = 56; // {Integer} Id of the itemSubCategory to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateItemSubCategoryById(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Integer**| Id of the itemSubCategory to be duplicated. | 

### Return type

[**ItemSubCategory**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSubCategoryByFilter"></a>
# **getItemSubCategoryByFilter**
> [ItemSubCategory] getItemSubCategoryByFilter(opts)

Search itemSubCategorys by filter

Returns the list of itemSubCategorys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubCategoryApi()

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
api.getItemSubCategoryByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemSubCategory]**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSubCategoryById"></a>
# **getItemSubCategoryById**
> ItemSubCategory getItemSubCategoryById(itemSubCategoryId)

Get an itemSubCategory by id

Returns the itemSubCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubCategoryApi()

var itemSubCategoryId = 56; // {Integer} Id of the itemSubCategory to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemSubCategoryById(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Integer**| Id of the itemSubCategory to be returned. | 

### Return type

[**ItemSubCategory**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemSubCategory"></a>
# **updateItemSubCategory**
> updateItemSubCategory(body)

Update an itemSubCategory

Updates an existing itemSubCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubCategoryApi()

var body = new infoplus.ItemSubCategory(); // {ItemSubCategory} ItemSubCategory to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateItemSubCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSubCategory**](ItemSubCategory.md)| ItemSubCategory to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

