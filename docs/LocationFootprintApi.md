# infoplus.LocationFootprintApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLocationFootprint**](LocationFootprintApi.md#addLocationFootprint) | **POST** /beta/locationFootprint | Create a locationFootprint
[**deleteLocationFootprint**](LocationFootprintApi.md#deleteLocationFootprint) | **DELETE** /beta/locationFootprint/{locationFootprintId} | Delete a locationFootprint
[**getLocationFootprintByFilter**](LocationFootprintApi.md#getLocationFootprintByFilter) | **GET** /beta/locationFootprint/search | Search locationFootprints by filter
[**getLocationFootprintById**](LocationFootprintApi.md#getLocationFootprintById) | **GET** /beta/locationFootprint/{locationFootprintId} | Get a locationFootprint by id
[**updateLocationFootprint**](LocationFootprintApi.md#updateLocationFootprint) | **PUT** /beta/locationFootprint | Update a locationFootprint
[**updateLocationFootprintCustomFields**](LocationFootprintApi.md#updateLocationFootprintCustomFields) | **PUT** /beta/locationFootprint/customFields | Update a locationFootprint custom fields


<a name="addLocationFootprint"></a>
# **addLocationFootprint**
> LocationFootprint addLocationFootprint(body)

Create a locationFootprint

Inserts a new locationFootprint using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationFootprintApi()

var body = new infoplus.LocationFootprint(); // {LocationFootprint} LocationFootprint to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addLocationFootprint(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationFootprint**](LocationFootprint.md)| LocationFootprint to be inserted. | 

### Return type

[**LocationFootprint**](LocationFootprint.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLocationFootprint"></a>
# **deleteLocationFootprint**
> deleteLocationFootprint(locationFootprintId)

Delete a locationFootprint

Deletes the locationFootprint identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationFootprintApi()

var locationFootprintId = 56; // {Integer} Id of the locationFootprint to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteLocationFootprint(locationFootprintId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Integer**| Id of the locationFootprint to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationFootprintByFilter"></a>
# **getLocationFootprintByFilter**
> [LocationFootprint] getLocationFootprintByFilter(opts)

Search locationFootprints by filter

Returns the list of locationFootprints that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationFootprintApi()

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
api.getLocationFootprintByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LocationFootprint]**](LocationFootprint.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationFootprintById"></a>
# **getLocationFootprintById**
> LocationFootprint getLocationFootprintById(locationFootprintId)

Get a locationFootprint by id

Returns the locationFootprint identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationFootprintApi()

var locationFootprintId = 56; // {Integer} Id of the locationFootprint to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLocationFootprintById(locationFootprintId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Integer**| Id of the locationFootprint to be returned. | 

### Return type

[**LocationFootprint**](LocationFootprint.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLocationFootprint"></a>
# **updateLocationFootprint**
> updateLocationFootprint(body)

Update a locationFootprint

Updates an existing locationFootprint using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationFootprintApi()

var body = new infoplus.LocationFootprint(); // {LocationFootprint} LocationFootprint to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateLocationFootprint(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationFootprint**](LocationFootprint.md)| LocationFootprint to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLocationFootprintCustomFields"></a>
# **updateLocationFootprintCustomFields**
> updateLocationFootprintCustomFields(body)

Update a locationFootprint custom fields

Updates an existing locationFootprint custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LocationFootprintApi()

var body = new infoplus.LocationFootprint(); // {LocationFootprint} LocationFootprint to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateLocationFootprintCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationFootprint**](LocationFootprint.md)| LocationFootprint to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

