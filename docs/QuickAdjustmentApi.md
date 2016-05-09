# infoplus.QuickAdjustmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addQuickAdjustment**](QuickAdjustmentApi.md#addQuickAdjustment) | **POST** /v1.0/quickAdjustment | Create a quickAdjustment
[**deleteQuickAdjustment**](QuickAdjustmentApi.md#deleteQuickAdjustment) | **DELETE** /v1.0/quickAdjustment/{quickAdjustmentId} | Delete a quickAdjustment
[**getQuickAdjustmentByFilter**](QuickAdjustmentApi.md#getQuickAdjustmentByFilter) | **GET** /v1.0/quickAdjustment/search | Search quickAdjustments by filter
[**getQuickAdjustmentById**](QuickAdjustmentApi.md#getQuickAdjustmentById) | **GET** /v1.0/quickAdjustment/{quickAdjustmentId} | Get a quickAdjustment by id
[**updateQuickAdjustment**](QuickAdjustmentApi.md#updateQuickAdjustment) | **PUT** /v1.0/quickAdjustment | Update a quickAdjustment


<a name="addQuickAdjustment"></a>
# **addQuickAdjustment**
> QuickAdjustment addQuickAdjustment(body)

Create a quickAdjustment

Inserts a new quickAdjustment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickAdjustmentApi()

var body = new infoplus.QuickAdjustment(); // {QuickAdjustment} QuickAdjustment to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addQuickAdjustment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickAdjustment**](QuickAdjustment.md)| QuickAdjustment to be inserted. | 

### Return type

[**QuickAdjustment**](QuickAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuickAdjustment"></a>
# **deleteQuickAdjustment**
> deleteQuickAdjustment(quickAdjustmentId)

Delete a quickAdjustment

Deletes the quickAdjustment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickAdjustmentApi()

var quickAdjustmentId = 56; // {Integer} Id of the quickAdjustment to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteQuickAdjustment(quickAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickAdjustmentId** | **Integer**| Id of the quickAdjustment to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickAdjustmentByFilter"></a>
# **getQuickAdjustmentByFilter**
> [QuickAdjustment] getQuickAdjustmentByFilter(opts)

Search quickAdjustments by filter

Returns the list of quickAdjustments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickAdjustmentApi()

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
api.getQuickAdjustmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[QuickAdjustment]**](QuickAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickAdjustmentById"></a>
# **getQuickAdjustmentById**
> QuickAdjustment getQuickAdjustmentById(quickAdjustmentId)

Get a quickAdjustment by id

Returns the quickAdjustment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickAdjustmentApi()

var quickAdjustmentId = 56; // {Integer} Id of the quickAdjustment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getQuickAdjustmentById(quickAdjustmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickAdjustmentId** | **Integer**| Id of the quickAdjustment to be returned. | 

### Return type

[**QuickAdjustment**](QuickAdjustment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateQuickAdjustment"></a>
# **updateQuickAdjustment**
> updateQuickAdjustment(body)

Update a quickAdjustment

Updates an existing quickAdjustment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.QuickAdjustmentApi()

var body = new infoplus.QuickAdjustment(); // {QuickAdjustment} QuickAdjustment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateQuickAdjustment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickAdjustment**](QuickAdjustment.md)| QuickAdjustment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

