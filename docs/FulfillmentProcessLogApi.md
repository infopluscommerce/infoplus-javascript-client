# infoplus.FulfillmentProcessLogApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFulfillmentProcessLogAudit**](FulfillmentProcessLogApi.md#addFulfillmentProcessLogAudit) | **PUT** /beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/audit/{fulfillmentProcessLogAudit} | Add new audit for a fulfillmentProcessLog
[**addFulfillmentProcessLogTag**](FulfillmentProcessLogApi.md#addFulfillmentProcessLogTag) | **PUT** /beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/tag/{fulfillmentProcessLogTag} | Add new tags for a fulfillmentProcessLog.
[**deleteFulfillmentProcessLogTag**](FulfillmentProcessLogApi.md#deleteFulfillmentProcessLogTag) | **DELETE** /beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/tag/{fulfillmentProcessLogTag} | Delete a tag for a fulfillmentProcessLog.
[**getDuplicateFulfillmentProcessLogById**](FulfillmentProcessLogApi.md#getDuplicateFulfillmentProcessLogById) | **GET** /beta/fulfillmentProcessLog/duplicate/{fulfillmentProcessLogId} | Get a duplicated a fulfillmentProcessLog by id
[**getFulfillmentProcessLogByFilter**](FulfillmentProcessLogApi.md#getFulfillmentProcessLogByFilter) | **GET** /beta/fulfillmentProcessLog/search | Search fulfillmentProcessLogs by filter
[**getFulfillmentProcessLogById**](FulfillmentProcessLogApi.md#getFulfillmentProcessLogById) | **GET** /beta/fulfillmentProcessLog/{fulfillmentProcessLogId} | Get a fulfillmentProcessLog by id
[**getFulfillmentProcessLogTags**](FulfillmentProcessLogApi.md#getFulfillmentProcessLogTags) | **GET** /beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/tag | Get the tags for a fulfillmentProcessLog.


<a name="addFulfillmentProcessLogAudit"></a>
# **addFulfillmentProcessLogAudit**
> addFulfillmentProcessLogAudit(fulfillmentProcessLogId, fulfillmentProcessLogAudit)

Add new audit for a fulfillmentProcessLog

Adds an audit to an existing fulfillmentProcessLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessLogApi();

var fulfillmentProcessLogId = 56; // Number | Id of the fulfillmentProcessLog to add an audit to

var fulfillmentProcessLogAudit = "fulfillmentProcessLogAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentProcessLogAudit(fulfillmentProcessLogId, fulfillmentProcessLogAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessLogId** | **Number**| Id of the fulfillmentProcessLog to add an audit to | 
 **fulfillmentProcessLogAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFulfillmentProcessLogTag"></a>
# **addFulfillmentProcessLogTag**
> addFulfillmentProcessLogTag(fulfillmentProcessLogId, fulfillmentProcessLogTag)

Add new tags for a fulfillmentProcessLog.

Adds a tag to an existing fulfillmentProcessLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessLogApi();

var fulfillmentProcessLogId = 56; // Number | Id of the fulfillmentProcessLog to add a tag to

var fulfillmentProcessLogTag = "fulfillmentProcessLogTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentProcessLogTag(fulfillmentProcessLogId, fulfillmentProcessLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessLogId** | **Number**| Id of the fulfillmentProcessLog to add a tag to | 
 **fulfillmentProcessLogTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFulfillmentProcessLogTag"></a>
# **deleteFulfillmentProcessLogTag**
> deleteFulfillmentProcessLogTag(fulfillmentProcessLogId, fulfillmentProcessLogTag)

Delete a tag for a fulfillmentProcessLog.

Deletes an existing fulfillmentProcessLog tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessLogApi();

var fulfillmentProcessLogId = 56; // Number | Id of the fulfillmentProcessLog to remove tag from

var fulfillmentProcessLogTag = "fulfillmentProcessLogTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFulfillmentProcessLogTag(fulfillmentProcessLogId, fulfillmentProcessLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessLogId** | **Number**| Id of the fulfillmentProcessLog to remove tag from | 
 **fulfillmentProcessLogTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateFulfillmentProcessLogById"></a>
# **getDuplicateFulfillmentProcessLogById**
> FulfillmentProcessLog getDuplicateFulfillmentProcessLogById(fulfillmentProcessLogId)

Get a duplicated a fulfillmentProcessLog by id

Returns a duplicated fulfillmentProcessLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessLogApi();

var fulfillmentProcessLogId = 56; // Number | Id of the fulfillmentProcessLog to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateFulfillmentProcessLogById(fulfillmentProcessLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessLogId** | **Number**| Id of the fulfillmentProcessLog to be duplicated. | 

### Return type

[**FulfillmentProcessLog**](FulfillmentProcessLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessLogByFilter"></a>
# **getFulfillmentProcessLogByFilter**
> [FulfillmentProcessLog] getFulfillmentProcessLogByFilter(opts)

Search fulfillmentProcessLogs by filter

Returns the list of fulfillmentProcessLogs that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessLogApi();

var opts = { 
  'filter': "filter_example", // String | Query string, used to filter results.
  'page': 56, // Number | Result page number.  Defaults to 1.
  'limit': 56, // Number | Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // String | Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFulfillmentProcessLogByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[FulfillmentProcessLog]**](FulfillmentProcessLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessLogById"></a>
# **getFulfillmentProcessLogById**
> FulfillmentProcessLog getFulfillmentProcessLogById(fulfillmentProcessLogId)

Get a fulfillmentProcessLog by id

Returns the fulfillmentProcessLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessLogApi();

var fulfillmentProcessLogId = 56; // Number | Id of the fulfillmentProcessLog to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFulfillmentProcessLogById(fulfillmentProcessLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessLogId** | **Number**| Id of the fulfillmentProcessLog to be returned. | 

### Return type

[**FulfillmentProcessLog**](FulfillmentProcessLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessLogTags"></a>
# **getFulfillmentProcessLogTags**
> getFulfillmentProcessLogTags(fulfillmentProcessLogId)

Get the tags for a fulfillmentProcessLog.

Get all existing fulfillmentProcessLog tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessLogApi();

var fulfillmentProcessLogId = 56; // Number | Id of the fulfillmentProcessLog to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFulfillmentProcessLogTags(fulfillmentProcessLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessLogId** | **Number**| Id of the fulfillmentProcessLog to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

