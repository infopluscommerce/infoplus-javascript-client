# infoplus.LoggedTimeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLoggedTimeAudit**](LoggedTimeApi.md#addLoggedTimeAudit) | **PUT** /beta/loggedTime/{loggedTimeId}/audit/{loggedTimeAudit} | Add new audit for a loggedTime
[**addLoggedTimeTag**](LoggedTimeApi.md#addLoggedTimeTag) | **PUT** /beta/loggedTime/{loggedTimeId}/tag/{loggedTimeTag} | Add new tags for a loggedTime.
[**deleteLoggedTimeTag**](LoggedTimeApi.md#deleteLoggedTimeTag) | **DELETE** /beta/loggedTime/{loggedTimeId}/tag/{loggedTimeTag} | Delete a tag for a loggedTime.
[**getDuplicateLoggedTimeById**](LoggedTimeApi.md#getDuplicateLoggedTimeById) | **GET** /beta/loggedTime/duplicate/{loggedTimeId} | Get a duplicated a loggedTime by id
[**getLoggedTimeByFilter**](LoggedTimeApi.md#getLoggedTimeByFilter) | **GET** /beta/loggedTime/search | Search loggedTimes by filter
[**getLoggedTimeById**](LoggedTimeApi.md#getLoggedTimeById) | **GET** /beta/loggedTime/{loggedTimeId} | Get a loggedTime by id
[**getLoggedTimeTags**](LoggedTimeApi.md#getLoggedTimeTags) | **GET** /beta/loggedTime/{loggedTimeId}/tag | Get the tags for a loggedTime.
[**updateLoggedTimeCustomFields**](LoggedTimeApi.md#updateLoggedTimeCustomFields) | **PUT** /beta/loggedTime/customFields | Update a loggedTime custom fields


<a name="addLoggedTimeAudit"></a>
# **addLoggedTimeAudit**
> addLoggedTimeAudit(loggedTimeId, loggedTimeAudit)

Add new audit for a loggedTime

Adds an audit to an existing loggedTime.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

var loggedTimeId = 56; // {Integer} Id of the loggedTime to add an audit to

var loggedTimeAudit = "loggedTimeAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addLoggedTimeAudit(loggedTimeId, loggedTimeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedTimeId** | **Integer**| Id of the loggedTime to add an audit to | 
 **loggedTimeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLoggedTimeTag"></a>
# **addLoggedTimeTag**
> addLoggedTimeTag(loggedTimeId, loggedTimeTag)

Add new tags for a loggedTime.

Adds a tag to an existing loggedTime.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

var loggedTimeId = 56; // {Integer} Id of the loggedTime to add a tag to

var loggedTimeTag = "loggedTimeTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addLoggedTimeTag(loggedTimeId, loggedTimeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedTimeId** | **Integer**| Id of the loggedTime to add a tag to | 
 **loggedTimeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLoggedTimeTag"></a>
# **deleteLoggedTimeTag**
> deleteLoggedTimeTag(loggedTimeId, loggedTimeTag)

Delete a tag for a loggedTime.

Deletes an existing loggedTime tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

var loggedTimeId = 56; // {Integer} Id of the loggedTime to remove tag from

var loggedTimeTag = "loggedTimeTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteLoggedTimeTag(loggedTimeId, loggedTimeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedTimeId** | **Integer**| Id of the loggedTime to remove tag from | 
 **loggedTimeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateLoggedTimeById"></a>
# **getDuplicateLoggedTimeById**
> LoggedTime getDuplicateLoggedTimeById(loggedTimeId)

Get a duplicated a loggedTime by id

Returns a duplicated loggedTime identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

var loggedTimeId = 56; // {Integer} Id of the loggedTime to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateLoggedTimeById(loggedTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedTimeId** | **Integer**| Id of the loggedTime to be duplicated. | 

### Return type

[**LoggedTime**](LoggedTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoggedTimeByFilter"></a>
# **getLoggedTimeByFilter**
> [LoggedTime] getLoggedTimeByFilter(opts)

Search loggedTimes by filter

Returns the list of loggedTimes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

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
api.getLoggedTimeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LoggedTime]**](LoggedTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoggedTimeById"></a>
# **getLoggedTimeById**
> LoggedTime getLoggedTimeById(loggedTimeId)

Get a loggedTime by id

Returns the loggedTime identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

var loggedTimeId = 56; // {Integer} Id of the loggedTime to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLoggedTimeById(loggedTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedTimeId** | **Integer**| Id of the loggedTime to be returned. | 

### Return type

[**LoggedTime**](LoggedTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoggedTimeTags"></a>
# **getLoggedTimeTags**
> getLoggedTimeTags(loggedTimeId)

Get the tags for a loggedTime.

Get all existing loggedTime tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

var loggedTimeId = 56; // {Integer} Id of the loggedTime to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getLoggedTimeTags(loggedTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedTimeId** | **Integer**| Id of the loggedTime to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLoggedTimeCustomFields"></a>
# **updateLoggedTimeCustomFields**
> updateLoggedTimeCustomFields(body)

Update a loggedTime custom fields

Updates an existing loggedTime custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LoggedTimeApi()

var body = new infoplus.LoggedTime(); // {LoggedTime} LoggedTime to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateLoggedTimeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoggedTime**](LoggedTime.md)| LoggedTime to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

