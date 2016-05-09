# infoplus.LocationAddressSchemeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLocationAddressScheme**](LocationAddressSchemeApi.md#addLocationAddressScheme) | **POST** /v1.0/locationAddressScheme | Create a locationAddressScheme
[**deleteLocationAddressScheme**](LocationAddressSchemeApi.md#deleteLocationAddressScheme) | **DELETE** /v1.0/locationAddressScheme/{locationAddressSchemeId} | Delete a locationAddressScheme
[**getLocationAddressSchemeByFilter**](LocationAddressSchemeApi.md#getLocationAddressSchemeByFilter) | **GET** /v1.0/locationAddressScheme/search | Search locationAddressSchemes by filter
[**getLocationAddressSchemeById**](LocationAddressSchemeApi.md#getLocationAddressSchemeById) | **GET** /v1.0/locationAddressScheme/{locationAddressSchemeId} | Get a locationAddressScheme by id
[**updateLocationAddressScheme**](LocationAddressSchemeApi.md#updateLocationAddressScheme) | **PUT** /v1.0/locationAddressScheme | Update a locationAddressScheme


<a name="addLocationAddressScheme"></a>
# **addLocationAddressScheme**
> LocationAddressScheme addLocationAddressScheme(body)

Create a locationAddressScheme

Inserts a new locationAddressScheme using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationAddressSchemeApi()

var body = new infoplus.LocationAddressScheme(); // {LocationAddressScheme} LocationAddressScheme to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addLocationAddressScheme(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationAddressScheme**](LocationAddressScheme.md)| LocationAddressScheme to be inserted. | 

### Return type

[**LocationAddressScheme**](LocationAddressScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLocationAddressScheme"></a>
# **deleteLocationAddressScheme**
> deleteLocationAddressScheme(locationAddressSchemeId)

Delete a locationAddressScheme

Deletes the locationAddressScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationAddressSchemeApi()

var locationAddressSchemeId = 56; // {Integer} Id of the locationAddressScheme to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteLocationAddressScheme(locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Integer**| Id of the locationAddressScheme to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationAddressSchemeByFilter"></a>
# **getLocationAddressSchemeByFilter**
> [LocationAddressScheme] getLocationAddressSchemeByFilter(opts)

Search locationAddressSchemes by filter

Returns the list of locationAddressSchemes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationAddressSchemeApi()

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
api.getLocationAddressSchemeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LocationAddressScheme]**](LocationAddressScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationAddressSchemeById"></a>
# **getLocationAddressSchemeById**
> LocationAddressScheme getLocationAddressSchemeById(locationAddressSchemeId)

Get a locationAddressScheme by id

Returns the locationAddressScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationAddressSchemeApi()

var locationAddressSchemeId = 56; // {Integer} Id of the locationAddressScheme to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLocationAddressSchemeById(locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Integer**| Id of the locationAddressScheme to be returned. | 

### Return type

[**LocationAddressScheme**](LocationAddressScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLocationAddressScheme"></a>
# **updateLocationAddressScheme**
> updateLocationAddressScheme(body)

Update a locationAddressScheme

Updates an existing locationAddressScheme using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationAddressSchemeApi()

var body = new infoplus.LocationAddressScheme(); // {LocationAddressScheme} LocationAddressScheme to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateLocationAddressScheme(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationAddressScheme**](LocationAddressScheme.md)| LocationAddressScheme to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

