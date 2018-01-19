# infoplus.WorkActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWorkActivity**](WorkActivityApi.md#addWorkActivity) | **POST** /beta/workActivity | Create a workActivity
[**addWorkActivityAudit**](WorkActivityApi.md#addWorkActivityAudit) | **PUT** /beta/workActivity/{workActivityId}/audit/{workActivityAudit} | Add new audit for a workActivity
[**addWorkActivityTag**](WorkActivityApi.md#addWorkActivityTag) | **PUT** /beta/workActivity/{workActivityId}/tag/{workActivityTag} | Add new tags for a workActivity.
[**deleteWorkActivity**](WorkActivityApi.md#deleteWorkActivity) | **DELETE** /beta/workActivity/{workActivityId} | Delete a workActivity
[**deleteWorkActivityTag**](WorkActivityApi.md#deleteWorkActivityTag) | **DELETE** /beta/workActivity/{workActivityId}/tag/{workActivityTag} | Delete a tag for a workActivity.
[**getDuplicateWorkActivityById**](WorkActivityApi.md#getDuplicateWorkActivityById) | **GET** /beta/workActivity/duplicate/{workActivityId} | Get a duplicated a workActivity by id
[**getWorkActivityByFilter**](WorkActivityApi.md#getWorkActivityByFilter) | **GET** /beta/workActivity/search | Search workActivitys by filter
[**getWorkActivityById**](WorkActivityApi.md#getWorkActivityById) | **GET** /beta/workActivity/{workActivityId} | Get a workActivity by id
[**getWorkActivityTags**](WorkActivityApi.md#getWorkActivityTags) | **GET** /beta/workActivity/{workActivityId}/tag | Get the tags for a workActivity.
[**updateWorkActivity**](WorkActivityApi.md#updateWorkActivity) | **PUT** /beta/workActivity | Update a workActivity


<a name="addWorkActivity"></a>
# **addWorkActivity**
> WorkActivity addWorkActivity(body)

Create a workActivity

Inserts a new workActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var body = new infoplus.WorkActivity(); // WorkActivity | WorkActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addWorkActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkActivity**](WorkActivity.md)| WorkActivity to be inserted. | 

### Return type

[**WorkActivity**](WorkActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWorkActivityAudit"></a>
# **addWorkActivityAudit**
> addWorkActivityAudit(workActivityId, workActivityAudit)

Add new audit for a workActivity

Adds an audit to an existing workActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var workActivityId = 56; // Number | Id of the workActivity to add an audit to

var workActivityAudit = "workActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWorkActivityAudit(workActivityId, workActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workActivityId** | **Number**| Id of the workActivity to add an audit to | 
 **workActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWorkActivityTag"></a>
# **addWorkActivityTag**
> addWorkActivityTag(workActivityId, workActivityTag)

Add new tags for a workActivity.

Adds a tag to an existing workActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var workActivityId = 56; // Number | Id of the workActivity to add a tag to

var workActivityTag = "workActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWorkActivityTag(workActivityId, workActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workActivityId** | **Number**| Id of the workActivity to add a tag to | 
 **workActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWorkActivity"></a>
# **deleteWorkActivity**
> deleteWorkActivity(workActivityId)

Delete a workActivity

Deletes the workActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var workActivityId = 56; // Number | Id of the workActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWorkActivity(workActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workActivityId** | **Number**| Id of the workActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteWorkActivityTag"></a>
# **deleteWorkActivityTag**
> deleteWorkActivityTag(workActivityId, workActivityTag)

Delete a tag for a workActivity.

Deletes an existing workActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var workActivityId = 56; // Number | Id of the workActivity to remove tag from

var workActivityTag = "workActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWorkActivityTag(workActivityId, workActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workActivityId** | **Number**| Id of the workActivity to remove tag from | 
 **workActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateWorkActivityById"></a>
# **getDuplicateWorkActivityById**
> WorkActivity getDuplicateWorkActivityById(workActivityId)

Get a duplicated a workActivity by id

Returns a duplicated workActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var workActivityId = 56; // Number | Id of the workActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateWorkActivityById(workActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workActivityId** | **Number**| Id of the workActivity to be duplicated. | 

### Return type

[**WorkActivity**](WorkActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWorkActivityByFilter"></a>
# **getWorkActivityByFilter**
> [WorkActivity] getWorkActivityByFilter(opts)

Search workActivitys by filter

Returns the list of workActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

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
apiInstance.getWorkActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[WorkActivity]**](WorkActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWorkActivityById"></a>
# **getWorkActivityById**
> WorkActivity getWorkActivityById(workActivityId)

Get a workActivity by id

Returns the workActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var workActivityId = 56; // Number | Id of the workActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWorkActivityById(workActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workActivityId** | **Number**| Id of the workActivity to be returned. | 

### Return type

[**WorkActivity**](WorkActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWorkActivityTags"></a>
# **getWorkActivityTags**
> getWorkActivityTags(workActivityId)

Get the tags for a workActivity.

Get all existing workActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var workActivityId = 56; // Number | Id of the workActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWorkActivityTags(workActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workActivityId** | **Number**| Id of the workActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWorkActivity"></a>
# **updateWorkActivity**
> updateWorkActivity(body)

Update a workActivity

Updates an existing workActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WorkActivityApi();

var body = new infoplus.WorkActivity(); // WorkActivity | WorkActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWorkActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkActivity**](WorkActivity.md)| WorkActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

