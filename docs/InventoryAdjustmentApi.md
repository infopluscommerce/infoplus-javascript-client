# infoplus.InventoryAdjustmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDuplicateInventoryAdjustmentById**](InventoryAdjustmentApi.md#getDuplicateInventoryAdjustmentById) | **GET** /v2.0/inventoryAdjustment/duplicate/{inventoryAdjustmentId} | Get a duplicated an inventoryAdjustment by id
[**getInventoryAdjustmentByFilter**](InventoryAdjustmentApi.md#getInventoryAdjustmentByFilter) | **GET** /v2.0/inventoryAdjustment/search | Search inventoryAdjustments by filter
[**getInventoryAdjustmentById**](InventoryAdjustmentApi.md#getInventoryAdjustmentById) | **GET** /v2.0/inventoryAdjustment/{inventoryAdjustmentId} | Get an inventoryAdjustment by id
[**updateInventoryAdjustmentCustomFields**](InventoryAdjustmentApi.md#updateInventoryAdjustmentCustomFields) | **PUT** /v2.0/inventoryAdjustment/customFields | Update an inventoryAdjustment custom fields


<a name="getDuplicateInventoryAdjustmentById"></a>
# **getDuplicateInventoryAdjustmentById**
> InventoryAdjustment getDuplicateInventoryAdjustmentById(inventoryAdjustmentId)

Get a duplicated an inventoryAdjustment by id

Returns a duplicated inventoryAdjustment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryAdjustmentApi()

var inventoryAdjustmentId = 56; // {Integer} Id of the inventoryAdjustment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateInventoryAdjustmentById(inventoryAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Integer**| Id of the inventoryAdjustment to be duplicated. | 

### Return type

[**InventoryAdjustment**](InventoryAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryAdjustmentApi()

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
api.getInventoryAdjustmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InventoryAdjustment]**](InventoryAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryAdjustmentApi()

var inventoryAdjustmentId = 56; // {Integer} Id of the inventoryAdjustment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInventoryAdjustmentById(inventoryAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryAdjustmentId** | **Integer**| Id of the inventoryAdjustment to be returned. | 

### Return type

[**InventoryAdjustment**](InventoryAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryAdjustmentApi()

var body = new infoplus.InventoryAdjustment(); // {InventoryAdjustment} InventoryAdjustment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateInventoryAdjustmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryAdjustment**](InventoryAdjustment.md)| InventoryAdjustment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

