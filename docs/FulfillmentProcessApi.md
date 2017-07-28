# infoplus.FulfillmentProcessApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFulfillmentProcessAudit**](FulfillmentProcessApi.md#addFulfillmentProcessAudit) | **PUT** /beta/fulfillmentProcess/{fulfillmentProcessId}/audit/{fulfillmentProcessAudit} | Add new audit for a fulfillmentProcess
[**addFulfillmentProcessTag**](FulfillmentProcessApi.md#addFulfillmentProcessTag) | **PUT** /beta/fulfillmentProcess/{fulfillmentProcessId}/tag/{fulfillmentProcessTag} | Add new tags for a fulfillmentProcess.
[**deleteFulfillmentProcessTag**](FulfillmentProcessApi.md#deleteFulfillmentProcessTag) | **DELETE** /beta/fulfillmentProcess/{fulfillmentProcessId}/tag/{fulfillmentProcessTag} | Delete a tag for a fulfillmentProcess.
[**getDuplicateFulfillmentProcessById**](FulfillmentProcessApi.md#getDuplicateFulfillmentProcessById) | **GET** /beta/fulfillmentProcess/duplicate/{fulfillmentProcessId} | Get a duplicated a fulfillmentProcess by id
[**getFulfillmentProcessByFilter**](FulfillmentProcessApi.md#getFulfillmentProcessByFilter) | **GET** /beta/fulfillmentProcess/search | Search fulfillmentProcesses by filter
[**getFulfillmentProcessById**](FulfillmentProcessApi.md#getFulfillmentProcessById) | **GET** /beta/fulfillmentProcess/{fulfillmentProcessId} | Get a fulfillmentProcess by id
[**getFulfillmentProcessTags**](FulfillmentProcessApi.md#getFulfillmentProcessTags) | **GET** /beta/fulfillmentProcess/{fulfillmentProcessId}/tag | Get the tags for a fulfillmentProcess.
[**updateFulfillmentProcessCustomFields**](FulfillmentProcessApi.md#updateFulfillmentProcessCustomFields) | **PUT** /beta/fulfillmentProcess/customFields | Update a fulfillmentProcess custom fields


<a name="addFulfillmentProcessAudit"></a>
# **addFulfillmentProcessAudit**
> addFulfillmentProcessAudit(fulfillmentProcessId, fulfillmentProcessAudit)

Add new audit for a fulfillmentProcess

Adds an audit to an existing fulfillmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

var fulfillmentProcessId = 56; // {Integer} Id of the fulfillmentProcess to add an audit to

var fulfillmentProcessAudit = "fulfillmentProcessAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addFulfillmentProcessAudit(fulfillmentProcessId, fulfillmentProcessAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Integer**| Id of the fulfillmentProcess to add an audit to | 
 **fulfillmentProcessAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFulfillmentProcessTag"></a>
# **addFulfillmentProcessTag**
> addFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag)

Add new tags for a fulfillmentProcess.

Adds a tag to an existing fulfillmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

var fulfillmentProcessId = 56; // {Integer} Id of the fulfillmentProcess to add a tag to

var fulfillmentProcessTag = "fulfillmentProcessTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Integer**| Id of the fulfillmentProcess to add a tag to | 
 **fulfillmentProcessTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFulfillmentProcessTag"></a>
# **deleteFulfillmentProcessTag**
> deleteFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag)

Delete a tag for a fulfillmentProcess.

Deletes an existing fulfillmentProcess tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

var fulfillmentProcessId = 56; // {Integer} Id of the fulfillmentProcess to remove tag from

var fulfillmentProcessTag = "fulfillmentProcessTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Integer**| Id of the fulfillmentProcess to remove tag from | 
 **fulfillmentProcessTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateFulfillmentProcessById"></a>
# **getDuplicateFulfillmentProcessById**
> FulfillmentProcess getDuplicateFulfillmentProcessById(fulfillmentProcessId)

Get a duplicated a fulfillmentProcess by id

Returns a duplicated fulfillmentProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

var fulfillmentProcessId = 56; // {Integer} Id of the fulfillmentProcess to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateFulfillmentProcessById(fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Integer**| Id of the fulfillmentProcess to be duplicated. | 

### Return type

[**FulfillmentProcess**](FulfillmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessByFilter"></a>
# **getFulfillmentProcessByFilter**
> [FulfillmentProcess] getFulfillmentProcessByFilter(opts)

Search fulfillmentProcesses by filter

Returns the list of fulfillmentProcesses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

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
api.getFulfillmentProcessByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[FulfillmentProcess]**](FulfillmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessById"></a>
# **getFulfillmentProcessById**
> FulfillmentProcess getFulfillmentProcessById(fulfillmentProcessId)

Get a fulfillmentProcess by id

Returns the fulfillmentProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

var fulfillmentProcessId = 56; // {Integer} Id of the fulfillmentProcess to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getFulfillmentProcessById(fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Integer**| Id of the fulfillmentProcess to be returned. | 

### Return type

[**FulfillmentProcess**](FulfillmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessTags"></a>
# **getFulfillmentProcessTags**
> getFulfillmentProcessTags(fulfillmentProcessId)

Get the tags for a fulfillmentProcess.

Get all existing fulfillmentProcess tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

var fulfillmentProcessId = 56; // {Integer} Id of the fulfillmentProcess to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getFulfillmentProcessTags(fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Integer**| Id of the fulfillmentProcess to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateFulfillmentProcessCustomFields"></a>
# **updateFulfillmentProcessCustomFields**
> updateFulfillmentProcessCustomFields(body)

Update a fulfillmentProcess custom fields

Updates an existing fulfillmentProcess custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentProcessApi()

var body = new infoplus.FulfillmentProcess(); // {FulfillmentProcess} FulfillmentProcess to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateFulfillmentProcessCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FulfillmentProcess**](FulfillmentProcess.md)| FulfillmentProcess to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

