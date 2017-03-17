# infoplus.CartonTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartonType**](CartonTypeApi.md#addCartonType) | **POST** /beta/cartonType | Create a cartonType
[**addCartonTypeAudit**](CartonTypeApi.md#addCartonTypeAudit) | **PUT** /beta/cartonType/{cartonTypeId}/audit/{cartonTypeAudit} | Add new audit for a cartonType
[**addCartonTypeTag**](CartonTypeApi.md#addCartonTypeTag) | **PUT** /beta/cartonType/{cartonTypeId}/tag/{cartonTypeTag} | Add new tags for a cartonType.
[**deleteCartonType**](CartonTypeApi.md#deleteCartonType) | **DELETE** /beta/cartonType/{cartonTypeId} | Delete a cartonType
[**deleteCartonTypeTag**](CartonTypeApi.md#deleteCartonTypeTag) | **DELETE** /beta/cartonType/{cartonTypeId}/tag/{cartonTypeTag} | Delete a tag for a cartonType.
[**getCartonTypeByFilter**](CartonTypeApi.md#getCartonTypeByFilter) | **GET** /beta/cartonType/search | Search cartonTypes by filter
[**getCartonTypeById**](CartonTypeApi.md#getCartonTypeById) | **GET** /beta/cartonType/{cartonTypeId} | Get a cartonType by id
[**getCartonTypeTags**](CartonTypeApi.md#getCartonTypeTags) | **GET** /beta/cartonType/{cartonTypeId}/tag | Get the tags for a cartonType.
[**getDuplicateCartonTypeById**](CartonTypeApi.md#getDuplicateCartonTypeById) | **GET** /beta/cartonType/duplicate/{cartonTypeId} | Get a duplicated a cartonType by id
[**updateCartonType**](CartonTypeApi.md#updateCartonType) | **PUT** /beta/cartonType | Update a cartonType
[**updateCartonTypeCustomFields**](CartonTypeApi.md#updateCartonTypeCustomFields) | **PUT** /beta/cartonType/customFields | Update a cartonType custom fields


<a name="addCartonType"></a>
# **addCartonType**
> CartonType addCartonType(body)

Create a cartonType

Inserts a new cartonType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var body = new infoplus.CartonType(); // {CartonType} CartonType to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addCartonType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonType**](CartonType.md)| CartonType to be inserted. | 

### Return type

[**CartonType**](CartonType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonTypeAudit"></a>
# **addCartonTypeAudit**
> addCartonTypeAudit(cartonTypeId, cartonTypeAudit)

Add new audit for a cartonType

Adds an audit to an existing cartonType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var cartonTypeId = 56; // {Integer} Id of the cartonType to add an audit to

var cartonTypeAudit = "cartonTypeAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addCartonTypeAudit(cartonTypeId, cartonTypeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonTypeId** | **Integer**| Id of the cartonType to add an audit to | 
 **cartonTypeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonTypeTag"></a>
# **addCartonTypeTag**
> addCartonTypeTag(cartonTypeId, cartonTypeTag)

Add new tags for a cartonType.

Adds a tag to an existing cartonType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var cartonTypeId = 56; // {Integer} Id of the cartonType to add a tag to

var cartonTypeTag = "cartonTypeTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addCartonTypeTag(cartonTypeId, cartonTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonTypeId** | **Integer**| Id of the cartonType to add a tag to | 
 **cartonTypeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartonType"></a>
# **deleteCartonType**
> deleteCartonType(cartonTypeId)

Delete a cartonType

Deletes the cartonType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var cartonTypeId = 56; // {Integer} Id of the cartonType to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteCartonType(cartonTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonTypeId** | **Integer**| Id of the cartonType to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonTypeTag"></a>
# **deleteCartonTypeTag**
> deleteCartonTypeTag(cartonTypeId, cartonTypeTag)

Delete a tag for a cartonType.

Deletes an existing cartonType tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var cartonTypeId = 56; // {Integer} Id of the cartonType to remove tag from

var cartonTypeTag = "cartonTypeTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteCartonTypeTag(cartonTypeId, cartonTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonTypeId** | **Integer**| Id of the cartonType to remove tag from | 
 **cartonTypeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonTypeByFilter"></a>
# **getCartonTypeByFilter**
> [CartonType] getCartonTypeByFilter(opts)

Search cartonTypes by filter

Returns the list of cartonTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

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
api.getCartonTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CartonType]**](CartonType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonTypeById"></a>
# **getCartonTypeById**
> CartonType getCartonTypeById(cartonTypeId)

Get a cartonType by id

Returns the cartonType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var cartonTypeId = 56; // {Integer} Id of the cartonType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCartonTypeById(cartonTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonTypeId** | **Integer**| Id of the cartonType to be returned. | 

### Return type

[**CartonType**](CartonType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonTypeTags"></a>
# **getCartonTypeTags**
> getCartonTypeTags(cartonTypeId)

Get the tags for a cartonType.

Get all existing cartonType tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var cartonTypeId = 56; // {Integer} Id of the cartonType to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getCartonTypeTags(cartonTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonTypeId** | **Integer**| Id of the cartonType to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCartonTypeById"></a>
# **getDuplicateCartonTypeById**
> CartonType getDuplicateCartonTypeById(cartonTypeId)

Get a duplicated a cartonType by id

Returns a duplicated cartonType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var cartonTypeId = 56; // {Integer} Id of the cartonType to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateCartonTypeById(cartonTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonTypeId** | **Integer**| Id of the cartonType to be duplicated. | 

### Return type

[**CartonType**](CartonType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCartonType"></a>
# **updateCartonType**
> updateCartonType(body)

Update a cartonType

Updates an existing cartonType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var body = new infoplus.CartonType(); // {CartonType} CartonType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateCartonType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonType**](CartonType.md)| CartonType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCartonTypeCustomFields"></a>
# **updateCartonTypeCustomFields**
> updateCartonTypeCustomFields(body)

Update a cartonType custom fields

Updates an existing cartonType custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonTypeApi()

var body = new infoplus.CartonType(); // {CartonType} CartonType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateCartonTypeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonType**](CartonType.md)| CartonType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

