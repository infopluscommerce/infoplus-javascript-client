# infoplus.OrderSourceReservationApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderSourceReservation**](OrderSourceReservationApi.md#addOrderSourceReservation) | **POST** /v1.0/orderSourceReservation | Create an orderSourceReservation
[**deleteOrderSourceReservation**](OrderSourceReservationApi.md#deleteOrderSourceReservation) | **DELETE** /v1.0/orderSourceReservation/{orderSourceReservationId} | Delete an orderSourceReservation
[**getOrderSourceReservationByFilter**](OrderSourceReservationApi.md#getOrderSourceReservationByFilter) | **GET** /v1.0/orderSourceReservation/search | Search orderSourceReservations by filter
[**getOrderSourceReservationById**](OrderSourceReservationApi.md#getOrderSourceReservationById) | **GET** /v1.0/orderSourceReservation/{orderSourceReservationId} | Get an orderSourceReservation by id
[**updateOrderSourceReservation**](OrderSourceReservationApi.md#updateOrderSourceReservation) | **PUT** /v1.0/orderSourceReservation | Update an orderSourceReservation


<a name="addOrderSourceReservation"></a>
# **addOrderSourceReservation**
> OrderSourceReservation addOrderSourceReservation(body)

Create an orderSourceReservation

Inserts a new orderSourceReservation using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.OrderSourceReservationApi()

var body = new infoplus.OrderSourceReservation(); // {OrderSourceReservation} OrderSourceReservation to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addOrderSourceReservation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceReservation**](OrderSourceReservation.md)| OrderSourceReservation to be inserted. | 

### Return type

[**OrderSourceReservation**](OrderSourceReservation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderSourceReservation"></a>
# **deleteOrderSourceReservation**
> deleteOrderSourceReservation(orderSourceReservationId)

Delete an orderSourceReservation

Deletes the orderSourceReservation identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.OrderSourceReservationApi()

var orderSourceReservationId = 56; // {Integer} Id of the orderSourceReservation to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteOrderSourceReservation(orderSourceReservationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Integer**| Id of the orderSourceReservation to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceReservationByFilter"></a>
# **getOrderSourceReservationByFilter**
> [OrderSourceReservation] getOrderSourceReservationByFilter(opts)

Search orderSourceReservations by filter

Returns the list of orderSourceReservations that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.OrderSourceReservationApi()

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
api.getOrderSourceReservationByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderSourceReservation]**](OrderSourceReservation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceReservationById"></a>
# **getOrderSourceReservationById**
> OrderSourceReservation getOrderSourceReservationById(orderSourceReservationId)

Get an orderSourceReservation by id

Returns the orderSourceReservation identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.OrderSourceReservationApi()

var orderSourceReservationId = 56; // {Integer} Id of the orderSourceReservation to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getOrderSourceReservationById(orderSourceReservationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Integer**| Id of the orderSourceReservation to be returned. | 

### Return type

[**OrderSourceReservation**](OrderSourceReservation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderSourceReservation"></a>
# **updateOrderSourceReservation**
> updateOrderSourceReservation(body)

Update an orderSourceReservation

Updates an existing orderSourceReservation using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.OrderSourceReservationApi()

var body = new infoplus.OrderSourceReservation(); // {OrderSourceReservation} OrderSourceReservation to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateOrderSourceReservation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceReservation**](OrderSourceReservation.md)| OrderSourceReservation to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

