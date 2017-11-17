# infoplus.ExternalShippingSystemApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExternalShippingSystem**](ExternalShippingSystemApi.md#addExternalShippingSystem) | **POST** /v2.0/externalShippingSystem | Create an externalShippingSystem
[**deleteExternalShippingSystem**](ExternalShippingSystemApi.md#deleteExternalShippingSystem) | **DELETE** /v2.0/externalShippingSystem/{externalShippingSystemId} | Delete an externalShippingSystem
[**getDuplicateExternalShippingSystemById**](ExternalShippingSystemApi.md#getDuplicateExternalShippingSystemById) | **GET** /v2.0/externalShippingSystem/duplicate/{externalShippingSystemId} | Get a duplicated an externalShippingSystem by id
[**getExternalShippingSystemByFilter**](ExternalShippingSystemApi.md#getExternalShippingSystemByFilter) | **GET** /v2.0/externalShippingSystem/search | Search externalShippingSystems by filter
[**getExternalShippingSystemById**](ExternalShippingSystemApi.md#getExternalShippingSystemById) | **GET** /v2.0/externalShippingSystem/{externalShippingSystemId} | Get an externalShippingSystem by id
[**updateExternalShippingSystem**](ExternalShippingSystemApi.md#updateExternalShippingSystem) | **PUT** /v2.0/externalShippingSystem | Update an externalShippingSystem
[**updateExternalShippingSystemCustomFields**](ExternalShippingSystemApi.md#updateExternalShippingSystemCustomFields) | **PUT** /v2.0/externalShippingSystem/customFields | Update an externalShippingSystem custom fields


<a name="addExternalShippingSystem"></a>
# **addExternalShippingSystem**
> ExternalShippingSystem addExternalShippingSystem(body)

Create an externalShippingSystem

Inserts a new externalShippingSystem using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShippingSystemApi()

var body = new infoplus.ExternalShippingSystem(); // {ExternalShippingSystem} ExternalShippingSystem to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addExternalShippingSystem(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShippingSystem**](ExternalShippingSystem.md)| ExternalShippingSystem to be inserted. | 

### Return type

[**ExternalShippingSystem**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteExternalShippingSystem"></a>
# **deleteExternalShippingSystem**
> deleteExternalShippingSystem(externalShippingSystemId)

Delete an externalShippingSystem

Deletes the externalShippingSystem identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShippingSystemApi()

var externalShippingSystemId = 56; // {Integer} Id of the externalShippingSystem to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteExternalShippingSystem(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Integer**| Id of the externalShippingSystem to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateExternalShippingSystemById"></a>
# **getDuplicateExternalShippingSystemById**
> ExternalShippingSystem getDuplicateExternalShippingSystemById(externalShippingSystemId)

Get a duplicated an externalShippingSystem by id

Returns a duplicated externalShippingSystem identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShippingSystemApi()

var externalShippingSystemId = 56; // {Integer} Id of the externalShippingSystem to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateExternalShippingSystemById(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Integer**| Id of the externalShippingSystem to be duplicated. | 

### Return type

[**ExternalShippingSystem**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShippingSystemByFilter"></a>
# **getExternalShippingSystemByFilter**
> [ExternalShippingSystem] getExternalShippingSystemByFilter(opts)

Search externalShippingSystems by filter

Returns the list of externalShippingSystems that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShippingSystemApi()

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
api.getExternalShippingSystemByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ExternalShippingSystem]**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShippingSystemById"></a>
# **getExternalShippingSystemById**
> ExternalShippingSystem getExternalShippingSystemById(externalShippingSystemId)

Get an externalShippingSystem by id

Returns the externalShippingSystem identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShippingSystemApi()

var externalShippingSystemId = 56; // {Integer} Id of the externalShippingSystem to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getExternalShippingSystemById(externalShippingSystemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShippingSystemId** | **Integer**| Id of the externalShippingSystem to be returned. | 

### Return type

[**ExternalShippingSystem**](ExternalShippingSystem.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateExternalShippingSystem"></a>
# **updateExternalShippingSystem**
> updateExternalShippingSystem(body)

Update an externalShippingSystem

Updates an existing externalShippingSystem using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShippingSystemApi()

var body = new infoplus.ExternalShippingSystem(); // {ExternalShippingSystem} ExternalShippingSystem to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateExternalShippingSystem(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShippingSystem**](ExternalShippingSystem.md)| ExternalShippingSystem to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExternalShippingSystemCustomFields"></a>
# **updateExternalShippingSystemCustomFields**
> updateExternalShippingSystemCustomFields(body)

Update an externalShippingSystem custom fields

Updates an existing externalShippingSystem custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ExternalShippingSystemApi()

var body = new infoplus.ExternalShippingSystem(); // {ExternalShippingSystem} ExternalShippingSystem to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateExternalShippingSystemCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShippingSystem**](ExternalShippingSystem.md)| ExternalShippingSystem to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

