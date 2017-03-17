# infoplus.PickFaceAssignmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPickFaceAssignment**](PickFaceAssignmentApi.md#addPickFaceAssignment) | **POST** /beta/pickFaceAssignment | Create a pickFaceAssignment
[**addPickFaceAssignmentAudit**](PickFaceAssignmentApi.md#addPickFaceAssignmentAudit) | **PUT** /beta/pickFaceAssignment/{pickFaceAssignmentId}/audit/{pickFaceAssignmentAudit} | Add new audit for a pickFaceAssignment
[**addPickFaceAssignmentTag**](PickFaceAssignmentApi.md#addPickFaceAssignmentTag) | **PUT** /beta/pickFaceAssignment/{pickFaceAssignmentId}/tag/{pickFaceAssignmentTag} | Add new tags for a pickFaceAssignment.
[**deletePickFaceAssignment**](PickFaceAssignmentApi.md#deletePickFaceAssignment) | **DELETE** /beta/pickFaceAssignment/{pickFaceAssignmentId} | Delete a pickFaceAssignment
[**deletePickFaceAssignmentTag**](PickFaceAssignmentApi.md#deletePickFaceAssignmentTag) | **DELETE** /beta/pickFaceAssignment/{pickFaceAssignmentId}/tag/{pickFaceAssignmentTag} | Delete a tag for a pickFaceAssignment.
[**getDuplicatePickFaceAssignmentById**](PickFaceAssignmentApi.md#getDuplicatePickFaceAssignmentById) | **GET** /beta/pickFaceAssignment/duplicate/{pickFaceAssignmentId} | Get a duplicated a pickFaceAssignment by id
[**getPickFaceAssignmentByFilter**](PickFaceAssignmentApi.md#getPickFaceAssignmentByFilter) | **GET** /beta/pickFaceAssignment/search | Search pickFaceAssignments by filter
[**getPickFaceAssignmentById**](PickFaceAssignmentApi.md#getPickFaceAssignmentById) | **GET** /beta/pickFaceAssignment/{pickFaceAssignmentId} | Get a pickFaceAssignment by id
[**getPickFaceAssignmentTags**](PickFaceAssignmentApi.md#getPickFaceAssignmentTags) | **GET** /beta/pickFaceAssignment/{pickFaceAssignmentId}/tag | Get the tags for a pickFaceAssignment.
[**updatePickFaceAssignment**](PickFaceAssignmentApi.md#updatePickFaceAssignment) | **PUT** /beta/pickFaceAssignment | Update a pickFaceAssignment
[**updatePickFaceAssignmentCustomFields**](PickFaceAssignmentApi.md#updatePickFaceAssignmentCustomFields) | **PUT** /beta/pickFaceAssignment/customFields | Update a pickFaceAssignment custom fields


<a name="addPickFaceAssignment"></a>
# **addPickFaceAssignment**
> PickFaceAssignment addPickFaceAssignment(body)

Create a pickFaceAssignment

Inserts a new pickFaceAssignment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var body = new infoplus.PickFaceAssignment(); // {PickFaceAssignment} PickFaceAssignment to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addPickFaceAssignment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PickFaceAssignment**](PickFaceAssignment.md)| PickFaceAssignment to be inserted. | 

### Return type

[**PickFaceAssignment**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPickFaceAssignmentAudit"></a>
# **addPickFaceAssignmentAudit**
> addPickFaceAssignmentAudit(pickFaceAssignmentId, pickFaceAssignmentAudit)

Add new audit for a pickFaceAssignment

Adds an audit to an existing pickFaceAssignment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var pickFaceAssignmentId = 56; // {Integer} Id of the pickFaceAssignment to add an audit to

var pickFaceAssignmentAudit = "pickFaceAssignmentAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addPickFaceAssignmentAudit(pickFaceAssignmentId, pickFaceAssignmentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Integer**| Id of the pickFaceAssignment to add an audit to | 
 **pickFaceAssignmentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPickFaceAssignmentTag"></a>
# **addPickFaceAssignmentTag**
> addPickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag)

Add new tags for a pickFaceAssignment.

Adds a tag to an existing pickFaceAssignment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var pickFaceAssignmentId = 56; // {Integer} Id of the pickFaceAssignment to add a tag to

var pickFaceAssignmentTag = "pickFaceAssignmentTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addPickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Integer**| Id of the pickFaceAssignment to add a tag to | 
 **pickFaceAssignmentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePickFaceAssignment"></a>
# **deletePickFaceAssignment**
> deletePickFaceAssignment(pickFaceAssignmentId)

Delete a pickFaceAssignment

Deletes the pickFaceAssignment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var pickFaceAssignmentId = 56; // {Integer} Id of the pickFaceAssignment to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deletePickFaceAssignment(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Integer**| Id of the pickFaceAssignment to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePickFaceAssignmentTag"></a>
# **deletePickFaceAssignmentTag**
> deletePickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag)

Delete a tag for a pickFaceAssignment.

Deletes an existing pickFaceAssignment tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var pickFaceAssignmentId = 56; // {Integer} Id of the pickFaceAssignment to remove tag from

var pickFaceAssignmentTag = "pickFaceAssignmentTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deletePickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Integer**| Id of the pickFaceAssignment to remove tag from | 
 **pickFaceAssignmentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicatePickFaceAssignmentById"></a>
# **getDuplicatePickFaceAssignmentById**
> PickFaceAssignment getDuplicatePickFaceAssignmentById(pickFaceAssignmentId)

Get a duplicated a pickFaceAssignment by id

Returns a duplicated pickFaceAssignment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var pickFaceAssignmentId = 56; // {Integer} Id of the pickFaceAssignment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicatePickFaceAssignmentById(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Integer**| Id of the pickFaceAssignment to be duplicated. | 

### Return type

[**PickFaceAssignment**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPickFaceAssignmentByFilter"></a>
# **getPickFaceAssignmentByFilter**
> [PickFaceAssignment] getPickFaceAssignmentByFilter(opts)

Search pickFaceAssignments by filter

Returns the list of pickFaceAssignments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

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
api.getPickFaceAssignmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[PickFaceAssignment]**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPickFaceAssignmentById"></a>
# **getPickFaceAssignmentById**
> PickFaceAssignment getPickFaceAssignmentById(pickFaceAssignmentId)

Get a pickFaceAssignment by id

Returns the pickFaceAssignment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var pickFaceAssignmentId = 56; // {Integer} Id of the pickFaceAssignment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPickFaceAssignmentById(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Integer**| Id of the pickFaceAssignment to be returned. | 

### Return type

[**PickFaceAssignment**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPickFaceAssignmentTags"></a>
# **getPickFaceAssignmentTags**
> getPickFaceAssignmentTags(pickFaceAssignmentId)

Get the tags for a pickFaceAssignment.

Get all existing pickFaceAssignment tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var pickFaceAssignmentId = 56; // {Integer} Id of the pickFaceAssignment to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getPickFaceAssignmentTags(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Integer**| Id of the pickFaceAssignment to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePickFaceAssignment"></a>
# **updatePickFaceAssignment**
> updatePickFaceAssignment(body)

Update a pickFaceAssignment

Updates an existing pickFaceAssignment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var body = new infoplus.PickFaceAssignment(); // {PickFaceAssignment} PickFaceAssignment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updatePickFaceAssignment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PickFaceAssignment**](PickFaceAssignment.md)| PickFaceAssignment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePickFaceAssignmentCustomFields"></a>
# **updatePickFaceAssignmentCustomFields**
> updatePickFaceAssignmentCustomFields(body)

Update a pickFaceAssignment custom fields

Updates an existing pickFaceAssignment custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PickFaceAssignmentApi()

var body = new infoplus.PickFaceAssignment(); // {PickFaceAssignment} PickFaceAssignment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updatePickFaceAssignmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PickFaceAssignment**](PickFaceAssignment.md)| PickFaceAssignment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

