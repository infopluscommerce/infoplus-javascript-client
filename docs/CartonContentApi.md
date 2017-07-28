# infoplus.CartonContentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartonContent**](CartonContentApi.md#addCartonContent) | **POST** /beta/cartonContent | Create a cartonContent
[**addCartonContentAudit**](CartonContentApi.md#addCartonContentAudit) | **PUT** /beta/cartonContent/{cartonContentId}/audit/{cartonContentAudit} | Add new audit for a cartonContent
[**addCartonContentTag**](CartonContentApi.md#addCartonContentTag) | **PUT** /beta/cartonContent/{cartonContentId}/tag/{cartonContentTag} | Add new tags for a cartonContent.
[**deleteCartonContent**](CartonContentApi.md#deleteCartonContent) | **DELETE** /beta/cartonContent/{cartonContentId} | Delete a cartonContent
[**deleteCartonContentTag**](CartonContentApi.md#deleteCartonContentTag) | **DELETE** /beta/cartonContent/{cartonContentId}/tag/{cartonContentTag} | Delete a tag for a cartonContent.
[**getCartonContentByFilter**](CartonContentApi.md#getCartonContentByFilter) | **GET** /beta/cartonContent/search | Search cartonContents by filter
[**getCartonContentById**](CartonContentApi.md#getCartonContentById) | **GET** /beta/cartonContent/{cartonContentId} | Get a cartonContent by id
[**getCartonContentTags**](CartonContentApi.md#getCartonContentTags) | **GET** /beta/cartonContent/{cartonContentId}/tag | Get the tags for a cartonContent.
[**getDuplicateCartonContentById**](CartonContentApi.md#getDuplicateCartonContentById) | **GET** /beta/cartonContent/duplicate/{cartonContentId} | Get a duplicated a cartonContent by id
[**updateCartonContent**](CartonContentApi.md#updateCartonContent) | **PUT** /beta/cartonContent | Update a cartonContent
[**updateCartonContentCustomFields**](CartonContentApi.md#updateCartonContentCustomFields) | **PUT** /beta/cartonContent/customFields | Update a cartonContent custom fields


<a name="addCartonContent"></a>
# **addCartonContent**
> CartonContent addCartonContent(body)

Create a cartonContent

Inserts a new cartonContent using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var body = new infoplus.CartonContent(); // {CartonContent} CartonContent to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addCartonContent(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonContent**](CartonContent.md)| CartonContent to be inserted. | 

### Return type

[**CartonContent**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonContentAudit"></a>
# **addCartonContentAudit**
> addCartonContentAudit(cartonContentId, cartonContentAudit)

Add new audit for a cartonContent

Adds an audit to an existing cartonContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var cartonContentId = 56; // {Integer} Id of the cartonContent to add an audit to

var cartonContentAudit = "cartonContentAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addCartonContentAudit(cartonContentId, cartonContentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Integer**| Id of the cartonContent to add an audit to | 
 **cartonContentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonContentTag"></a>
# **addCartonContentTag**
> addCartonContentTag(cartonContentId, cartonContentTag)

Add new tags for a cartonContent.

Adds a tag to an existing cartonContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var cartonContentId = 56; // {Integer} Id of the cartonContent to add a tag to

var cartonContentTag = "cartonContentTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addCartonContentTag(cartonContentId, cartonContentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Integer**| Id of the cartonContent to add a tag to | 
 **cartonContentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartonContent"></a>
# **deleteCartonContent**
> deleteCartonContent(cartonContentId)

Delete a cartonContent

Deletes the cartonContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var cartonContentId = 56; // {Integer} Id of the cartonContent to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteCartonContent(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Integer**| Id of the cartonContent to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonContentTag"></a>
# **deleteCartonContentTag**
> deleteCartonContentTag(cartonContentId, cartonContentTag)

Delete a tag for a cartonContent.

Deletes an existing cartonContent tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var cartonContentId = 56; // {Integer} Id of the cartonContent to remove tag from

var cartonContentTag = "cartonContentTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteCartonContentTag(cartonContentId, cartonContentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Integer**| Id of the cartonContent to remove tag from | 
 **cartonContentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonContentByFilter"></a>
# **getCartonContentByFilter**
> [CartonContent] getCartonContentByFilter(opts)

Search cartonContents by filter

Returns the list of cartonContents that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

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
api.getCartonContentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CartonContent]**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonContentById"></a>
# **getCartonContentById**
> CartonContent getCartonContentById(cartonContentId)

Get a cartonContent by id

Returns the cartonContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var cartonContentId = 56; // {Integer} Id of the cartonContent to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCartonContentById(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Integer**| Id of the cartonContent to be returned. | 

### Return type

[**CartonContent**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonContentTags"></a>
# **getCartonContentTags**
> getCartonContentTags(cartonContentId)

Get the tags for a cartonContent.

Get all existing cartonContent tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var cartonContentId = 56; // {Integer} Id of the cartonContent to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getCartonContentTags(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Integer**| Id of the cartonContent to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCartonContentById"></a>
# **getDuplicateCartonContentById**
> CartonContent getDuplicateCartonContentById(cartonContentId)

Get a duplicated a cartonContent by id

Returns a duplicated cartonContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var cartonContentId = 56; // {Integer} Id of the cartonContent to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateCartonContentById(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Integer**| Id of the cartonContent to be duplicated. | 

### Return type

[**CartonContent**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCartonContent"></a>
# **updateCartonContent**
> updateCartonContent(body)

Update a cartonContent

Updates an existing cartonContent using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var body = new infoplus.CartonContent(); // {CartonContent} CartonContent to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateCartonContent(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonContent**](CartonContent.md)| CartonContent to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCartonContentCustomFields"></a>
# **updateCartonContentCustomFields**
> updateCartonContentCustomFields(body)

Update a cartonContent custom fields

Updates an existing cartonContent custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.CartonContentApi()

var body = new infoplus.CartonContent(); // {CartonContent} CartonContent to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateCartonContentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonContent**](CartonContent.md)| CartonContent to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

