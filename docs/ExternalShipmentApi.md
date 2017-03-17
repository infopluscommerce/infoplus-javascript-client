# infoplus.ExternalShipmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExternalShipment**](ExternalShipmentApi.md#addExternalShipment) | **POST** /beta/externalShipment | Create an externalShipment
[**addExternalShipmentAudit**](ExternalShipmentApi.md#addExternalShipmentAudit) | **PUT** /beta/externalShipment/{externalShipmentId}/audit/{externalShipmentAudit} | Add new audit for an externalShipment
[**addExternalShipmentTag**](ExternalShipmentApi.md#addExternalShipmentTag) | **PUT** /beta/externalShipment/{externalShipmentId}/tag/{externalShipmentTag} | Add new tags for an externalShipment.
[**deleteExternalShipment**](ExternalShipmentApi.md#deleteExternalShipment) | **DELETE** /beta/externalShipment/{externalShipmentId} | Delete an externalShipment
[**deleteExternalShipmentTag**](ExternalShipmentApi.md#deleteExternalShipmentTag) | **DELETE** /beta/externalShipment/{externalShipmentId}/tag/{externalShipmentTag} | Delete a tag for an externalShipment.
[**getDuplicateExternalShipmentById**](ExternalShipmentApi.md#getDuplicateExternalShipmentById) | **GET** /beta/externalShipment/duplicate/{externalShipmentId} | Get a duplicated an externalShipment by id
[**getExternalShipmentByFilter**](ExternalShipmentApi.md#getExternalShipmentByFilter) | **GET** /beta/externalShipment/search | Search externalShipments by filter
[**getExternalShipmentById**](ExternalShipmentApi.md#getExternalShipmentById) | **GET** /beta/externalShipment/{externalShipmentId} | Get an externalShipment by id
[**getExternalShipmentTags**](ExternalShipmentApi.md#getExternalShipmentTags) | **GET** /beta/externalShipment/{externalShipmentId}/tag | Get the tags for an externalShipment.
[**updateExternalShipment**](ExternalShipmentApi.md#updateExternalShipment) | **PUT** /beta/externalShipment | Update an externalShipment
[**updateExternalShipmentCustomFields**](ExternalShipmentApi.md#updateExternalShipmentCustomFields) | **PUT** /beta/externalShipment/customFields | Update an externalShipment custom fields


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

<a name="addExternalShipmentAudit"></a>
# **addExternalShipmentAudit**
> addExternalShipmentAudit(externalShipmentId, externalShipmentAudit)

Add new audit for an externalShipment

Adds an audit to an existing externalShipment.

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

var externalShipmentId = 56; // {Integer} Id of the externalShipment to add an audit to

var externalShipmentAudit = "externalShipmentAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addExternalShipmentAudit(externalShipmentId, externalShipmentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Integer**| Id of the externalShipment to add an audit to | 
 **externalShipmentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addExternalShipmentTag"></a>
# **addExternalShipmentTag**
> addExternalShipmentTag(externalShipmentId, externalShipmentTag)

Add new tags for an externalShipment.

Adds a tag to an existing externalShipment.

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

var externalShipmentId = 56; // {Integer} Id of the externalShipment to add a tag to

var externalShipmentTag = "externalShipmentTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addExternalShipmentTag(externalShipmentId, externalShipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Integer**| Id of the externalShipment to add a tag to | 
 **externalShipmentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

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

<a name="deleteExternalShipmentTag"></a>
# **deleteExternalShipmentTag**
> deleteExternalShipmentTag(externalShipmentId, externalShipmentTag)

Delete a tag for an externalShipment.

Deletes an existing externalShipment tag using the specified data.

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

var externalShipmentId = 56; // {Integer} Id of the externalShipment to remove tag from

var externalShipmentTag = "externalShipmentTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteExternalShipmentTag(externalShipmentId, externalShipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Integer**| Id of the externalShipment to remove tag from | 
 **externalShipmentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateExternalShipmentById"></a>
# **getDuplicateExternalShipmentById**
> ExternalShipment getDuplicateExternalShipmentById(externalShipmentId)

Get a duplicated an externalShipment by id

Returns a duplicated externalShipment identified by the specified id.

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

var externalShipmentId = 56; // {Integer} Id of the externalShipment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateExternalShipmentById(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Integer**| Id of the externalShipment to be duplicated. | 

### Return type

[**ExternalShipment**](ExternalShipment.md)

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

<a name="getExternalShipmentTags"></a>
# **getExternalShipmentTags**
> getExternalShipmentTags(externalShipmentId)

Get the tags for an externalShipment.

Get all existing externalShipment tags.

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

var externalShipmentId = 56; // {Integer} Id of the externalShipment to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getExternalShipmentTags(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Integer**| Id of the externalShipment to get tags for | 

### Return type

null (empty response body)

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

<a name="updateExternalShipmentCustomFields"></a>
# **updateExternalShipmentCustomFields**
> updateExternalShipmentCustomFields(body)

Update an externalShipment custom fields

Updates an existing externalShipment custom fields using the specified data.

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
api.updateExternalShipmentCustomFields(body, callback);
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

