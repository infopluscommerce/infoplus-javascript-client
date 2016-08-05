# infoplus.WarehouseDocumentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWarehouseDocumentByFilter**](WarehouseDocumentApi.md#getWarehouseDocumentByFilter) | **GET** /beta/warehouseDocument/search | Search warehouseDocuments by filter
[**getWarehouseDocumentById**](WarehouseDocumentApi.md#getWarehouseDocumentById) | **GET** /beta/warehouseDocument/{warehouseDocumentId} | Get a warehouseDocument by id
[**updateWarehouseDocumentCustomFields**](WarehouseDocumentApi.md#updateWarehouseDocumentCustomFields) | **PUT** /beta/warehouseDocument/customFields | Update a warehouseDocument custom fields


<a name="getWarehouseDocumentByFilter"></a>
# **getWarehouseDocumentByFilter**
> [WarehouseDocument] getWarehouseDocumentByFilter(opts)

Search warehouseDocuments by filter

Returns the list of warehouseDocuments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.WarehouseDocumentApi()

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
api.getWarehouseDocumentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[WarehouseDocument]**](WarehouseDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseDocumentById"></a>
# **getWarehouseDocumentById**
> WarehouseDocument getWarehouseDocumentById(warehouseDocumentId)

Get a warehouseDocument by id

Returns the warehouseDocument identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.WarehouseDocumentApi()

var warehouseDocumentId = 56; // {Integer} Id of the warehouseDocument to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getWarehouseDocumentById(warehouseDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseDocumentId** | **Integer**| Id of the warehouseDocument to be returned. | 

### Return type

[**WarehouseDocument**](WarehouseDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWarehouseDocumentCustomFields"></a>
# **updateWarehouseDocumentCustomFields**
> updateWarehouseDocumentCustomFields(body)

Update a warehouseDocument custom fields

Updates an existing warehouseDocument custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.WarehouseDocumentApi()

var body = new infoplus.WarehouseDocument(); // {WarehouseDocument} WarehouseDocument to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateWarehouseDocumentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WarehouseDocument**](WarehouseDocument.md)| WarehouseDocument to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

