# infoplus.ExternalShipmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExternalShipment**](ExternalShipmentApi.md#addExternalShipment) | **POST** /v1.0/externalShipment | Create an externalShipment
[**deleteExternalShipment**](ExternalShipmentApi.md#deleteExternalShipment) | **DELETE** /v1.0/externalShipment/{externalShipmentId} | Delete an externalShipment
[**getExternalShipmentByFilter**](ExternalShipmentApi.md#getExternalShipmentByFilter) | **GET** /v1.0/externalShipment/search | Search externalShipments by filter
[**getExternalShipmentById**](ExternalShipmentApi.md#getExternalShipmentById) | **GET** /v1.0/externalShipment/{externalShipmentId} | Get an externalShipment by id
[**updateExternalShipment**](ExternalShipmentApi.md#updateExternalShipment) | **PUT** /v1.0/externalShipment | Update an externalShipment


<a name="addExternalShipment"></a>
# **addExternalShipment**
> ExternalShipment addExternalShipment(body)

Create an externalShipment

Inserts a new externalShipment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShipmentApi()

var body = new infoplus.ExternalShipment(); // {ExternalShipment} ExternalShipment to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addExternalShipment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShipment**](ExternalShipment.md)| ExternalShipment to be inserted. | 

### Return type

[**ExternalShipment**](ExternalShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteExternalShipment"></a>
# **deleteExternalShipment**
> deleteExternalShipment(externalShipmentId)

Delete an externalShipment

Deletes the externalShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShipmentApi()

var externalShipmentId = 56; // {Integer} Id of the externalShipment to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteExternalShipment(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Integer**| Id of the externalShipment to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShipmentByFilter"></a>
# **getExternalShipmentByFilter**
> [ExternalShipment] getExternalShipmentByFilter(opts)

Search externalShipments by filter

Returns the list of externalShipments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShipmentApi()

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
api.getExternalShipmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ExternalShipment]**](ExternalShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShipmentById"></a>
# **getExternalShipmentById**
> ExternalShipment getExternalShipmentById(externalShipmentId)

Get an externalShipment by id

Returns the externalShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShipmentApi()

var externalShipmentId = 56; // {Integer} Id of the externalShipment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getExternalShipmentById(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Integer**| Id of the externalShipment to be returned. | 

### Return type

[**ExternalShipment**](ExternalShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateExternalShipment"></a>
# **updateExternalShipment**
> updateExternalShipment(body)

Update an externalShipment

Updates an existing externalShipment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShipmentApi()

var body = new infoplus.ExternalShipment(); // {ExternalShipment} ExternalShipment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateExternalShipment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShipment**](ExternalShipment.md)| ExternalShipment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

