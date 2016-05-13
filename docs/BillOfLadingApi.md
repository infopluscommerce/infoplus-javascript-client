# infoplus.BillOfLadingApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillOfLading**](BillOfLadingApi.md#addBillOfLading) | **POST** /v1.0/billOfLading | Create a billOfLading
[**deleteBillOfLading**](BillOfLadingApi.md#deleteBillOfLading) | **DELETE** /v1.0/billOfLading/{billOfLadingId} | Delete a billOfLading
[**getBillOfLadingByFilter**](BillOfLadingApi.md#getBillOfLadingByFilter) | **GET** /v1.0/billOfLading/search | Search billOfLadings by filter
[**getBillOfLadingById**](BillOfLadingApi.md#getBillOfLadingById) | **GET** /v1.0/billOfLading/{billOfLadingId} | Get a billOfLading by id
[**updateBillOfLading**](BillOfLadingApi.md#updateBillOfLading) | **PUT** /v1.0/billOfLading | Update a billOfLading


<a name="addBillOfLading"></a>
# **addBillOfLading**
> BillOfLading addBillOfLading(body)

Create a billOfLading

Inserts a new billOfLading using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillOfLadingApi()

var body = new infoplus.BillOfLading(); // {BillOfLading} BillOfLading to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addBillOfLading(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfLading**](BillOfLading.md)| BillOfLading to be inserted. | 

### Return type

[**BillOfLading**](BillOfLading.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillOfLading"></a>
# **deleteBillOfLading**
> deleteBillOfLading(billOfLadingId)

Delete a billOfLading

Deletes the billOfLading identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillOfLadingApi()

var billOfLadingId = 56; // {Integer} Id of the billOfLading to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteBillOfLading(billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Integer**| Id of the billOfLading to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfLadingByFilter"></a>
# **getBillOfLadingByFilter**
> [BillOfLading] getBillOfLadingByFilter(opts)

Search billOfLadings by filter

Returns the list of billOfLadings that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillOfLadingApi()

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
api.getBillOfLadingByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[BillOfLading]**](BillOfLading.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfLadingById"></a>
# **getBillOfLadingById**
> BillOfLading getBillOfLadingById(billOfLadingId)

Get a billOfLading by id

Returns the billOfLading identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillOfLadingApi()

var billOfLadingId = 56; // {Integer} Id of the billOfLading to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getBillOfLadingById(billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Integer**| Id of the billOfLading to be returned. | 

### Return type

[**BillOfLading**](BillOfLading.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBillOfLading"></a>
# **updateBillOfLading**
> updateBillOfLading(body)

Update a billOfLading

Updates an existing billOfLading using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillOfLadingApi()

var body = new infoplus.BillOfLading(); // {BillOfLading} BillOfLading to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateBillOfLading(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfLading**](BillOfLading.md)| BillOfLading to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

