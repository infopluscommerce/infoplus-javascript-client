# infoplus.QuickReceiptApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addQuickReceipt**](QuickReceiptApi.md#addQuickReceipt) | **POST** /beta/quickReceipt | Create a quickReceipt
[**deleteQuickReceipt**](QuickReceiptApi.md#deleteQuickReceipt) | **DELETE** /beta/quickReceipt/{quickReceiptId} | Delete a quickReceipt
[**getQuickReceiptByFilter**](QuickReceiptApi.md#getQuickReceiptByFilter) | **GET** /beta/quickReceipt/search | Search quickReceipts by filter
[**getQuickReceiptById**](QuickReceiptApi.md#getQuickReceiptById) | **GET** /beta/quickReceipt/{quickReceiptId} | Get a quickReceipt by id
[**updateQuickReceipt**](QuickReceiptApi.md#updateQuickReceipt) | **PUT** /beta/quickReceipt | Update a quickReceipt
[**updateQuickReceiptCustomFields**](QuickReceiptApi.md#updateQuickReceiptCustomFields) | **PUT** /beta/quickReceipt/customFields | Update a quickReceipt custom fields


<a name="addQuickReceipt"></a>
# **addQuickReceipt**
> QuickReceipt addQuickReceipt(body)

Create a quickReceipt

Inserts a new quickReceipt using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickReceiptApi()

var body = new infoplus.QuickReceipt(); // {QuickReceipt} QuickReceipt to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addQuickReceipt(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickReceipt**](QuickReceipt.md)| QuickReceipt to be inserted. | 

### Return type

[**QuickReceipt**](QuickReceipt.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuickReceipt"></a>
# **deleteQuickReceipt**
> deleteQuickReceipt(quickReceiptId)

Delete a quickReceipt

Deletes the quickReceipt identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickReceiptApi()

var quickReceiptId = 56; // {Integer} Id of the quickReceipt to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteQuickReceipt(quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Integer**| Id of the quickReceipt to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickReceiptByFilter"></a>
# **getQuickReceiptByFilter**
> [QuickReceipt] getQuickReceiptByFilter(opts)

Search quickReceipts by filter

Returns the list of quickReceipts that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickReceiptApi()

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
api.getQuickReceiptByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[QuickReceipt]**](QuickReceipt.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickReceiptById"></a>
# **getQuickReceiptById**
> QuickReceipt getQuickReceiptById(quickReceiptId)

Get a quickReceipt by id

Returns the quickReceipt identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickReceiptApi()

var quickReceiptId = 56; // {Integer} Id of the quickReceipt to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getQuickReceiptById(quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Integer**| Id of the quickReceipt to be returned. | 

### Return type

[**QuickReceipt**](QuickReceipt.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateQuickReceipt"></a>
# **updateQuickReceipt**
> updateQuickReceipt(body)

Update a quickReceipt

Updates an existing quickReceipt using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickReceiptApi()

var body = new infoplus.QuickReceipt(); // {QuickReceipt} QuickReceipt to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateQuickReceipt(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickReceipt**](QuickReceipt.md)| QuickReceipt to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateQuickReceiptCustomFields"></a>
# **updateQuickReceiptCustomFields**
> updateQuickReceiptCustomFields(body)

Update a quickReceipt custom fields

Updates an existing quickReceipt custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickReceiptApi()

var body = new infoplus.QuickReceipt(); // {QuickReceipt} QuickReceipt to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateQuickReceiptCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickReceipt**](QuickReceipt.md)| QuickReceipt to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

