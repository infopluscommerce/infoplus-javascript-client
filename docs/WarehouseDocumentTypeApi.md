# infoplus.WarehouseDocumentTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWarehouseDocumentTypeByFilter**](WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeByFilter) | **GET** /beta/warehouseDocumentType/search | Search warehouseDocumentTypes by filter
[**getWarehouseDocumentTypeById**](WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeById) | **GET** /beta/warehouseDocumentType/{warehouseDocumentTypeId} | Get a warehouseDocumentType by id


<a name="getWarehouseDocumentTypeByFilter"></a>
# **getWarehouseDocumentTypeByFilter**
> [WarehouseDocumentType] getWarehouseDocumentTypeByFilter(opts)

Search warehouseDocumentTypes by filter

Returns the list of warehouseDocumentTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.WarehouseDocumentTypeApi()

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
api.getWarehouseDocumentTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[WarehouseDocumentType]**](WarehouseDocumentType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentTypeById"></a>
# **getWarehouseDocumentTypeById**
> WarehouseDocumentType getWarehouseDocumentTypeById(warehouseDocumentTypeId)

Get a warehouseDocumentType by id

Returns the warehouseDocumentType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.WarehouseDocumentTypeApi()

var warehouseDocumentTypeId = 56; // {Integer} Id of the warehouseDocumentType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getWarehouseDocumentTypeById(warehouseDocumentTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentTypeId** | **Integer**| Id of the warehouseDocumentType to be returned. | 

### Return type

[**WarehouseDocumentType**](WarehouseDocumentType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

