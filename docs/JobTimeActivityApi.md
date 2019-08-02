# infoplus.JobTimeActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addJobTimeActivity**](JobTimeActivityApi.md#addJobTimeActivity) | **POST** /beta/jobTimeActivity | Create a jobTimeActivity
[**addJobTimeActivityAudit**](JobTimeActivityApi.md#addJobTimeActivityAudit) | **PUT** /beta/jobTimeActivity/{jobTimeActivityId}/audit/{jobTimeActivityAudit} | Add new audit for a jobTimeActivity
[**addJobTimeActivityFile**](JobTimeActivityApi.md#addJobTimeActivityFile) | **POST** /beta/jobTimeActivity/{jobTimeActivityId}/file/{fileName} | Attach a file to a jobTimeActivity
[**addJobTimeActivityTag**](JobTimeActivityApi.md#addJobTimeActivityTag) | **PUT** /beta/jobTimeActivity/{jobTimeActivityId}/tag/{jobTimeActivityTag} | Add new tags for a jobTimeActivity.
[**deleteJobTimeActivity**](JobTimeActivityApi.md#deleteJobTimeActivity) | **DELETE** /beta/jobTimeActivity/{jobTimeActivityId} | Delete a jobTimeActivity
[**deleteJobTimeActivityTag**](JobTimeActivityApi.md#deleteJobTimeActivityTag) | **DELETE** /beta/jobTimeActivity/{jobTimeActivityId}/tag/{jobTimeActivityTag} | Delete a tag for a jobTimeActivity.
[**getDuplicateJobTimeActivityById**](JobTimeActivityApi.md#getDuplicateJobTimeActivityById) | **GET** /beta/jobTimeActivity/duplicate/{jobTimeActivityId} | Get a duplicated a jobTimeActivity by id
[**getJobTimeActivityByFilter**](JobTimeActivityApi.md#getJobTimeActivityByFilter) | **GET** /beta/jobTimeActivity/search | Search jobTimeActivitys by filter
[**getJobTimeActivityById**](JobTimeActivityApi.md#getJobTimeActivityById) | **GET** /beta/jobTimeActivity/{jobTimeActivityId} | Get a jobTimeActivity by id
[**getJobTimeActivityTags**](JobTimeActivityApi.md#getJobTimeActivityTags) | **GET** /beta/jobTimeActivity/{jobTimeActivityId}/tag | Get the tags for a jobTimeActivity.
[**updateJobTimeActivity**](JobTimeActivityApi.md#updateJobTimeActivity) | **PUT** /beta/jobTimeActivity | Update a jobTimeActivity


<a name="addJobTimeActivity"></a>
# **addJobTimeActivity**
> JobTimeActivity addJobTimeActivity(body)

Create a jobTimeActivity

Inserts a new jobTimeActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var body = new infoplus.JobTimeActivity(); // JobTimeActivity | JobTimeActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addJobTimeActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobTimeActivity**](JobTimeActivity.md)| JobTimeActivity to be inserted. | 

### Return type

[**JobTimeActivity**](JobTimeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTimeActivityAudit"></a>
# **addJobTimeActivityAudit**
> addJobTimeActivityAudit(jobTimeActivityId, jobTimeActivityAudit)

Add new audit for a jobTimeActivity

Adds an audit to an existing jobTimeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to add an audit to

var jobTimeActivityAudit = "jobTimeActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTimeActivityAudit(jobTimeActivityId, jobTimeActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to add an audit to | 
 **jobTimeActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTimeActivityFile"></a>
# **addJobTimeActivityFile**
> addJobTimeActivityFile(jobTimeActivityId, fileName)

Attach a file to a jobTimeActivity

Adds a file to an existing jobTimeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTimeActivityFile(jobTimeActivityId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addJobTimeActivityTag"></a>
# **addJobTimeActivityTag**
> addJobTimeActivityTag(jobTimeActivityId, jobTimeActivityTag)

Add new tags for a jobTimeActivity.

Adds a tag to an existing jobTimeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to add a tag to

var jobTimeActivityTag = "jobTimeActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTimeActivityTag(jobTimeActivityId, jobTimeActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to add a tag to | 
 **jobTimeActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJobTimeActivity"></a>
# **deleteJobTimeActivity**
> deleteJobTimeActivity(jobTimeActivityId)

Delete a jobTimeActivity

Deletes the jobTimeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobTimeActivity(jobTimeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJobTimeActivityTag"></a>
# **deleteJobTimeActivityTag**
> deleteJobTimeActivityTag(jobTimeActivityId, jobTimeActivityTag)

Delete a tag for a jobTimeActivity.

Deletes an existing jobTimeActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to remove tag from

var jobTimeActivityTag = "jobTimeActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobTimeActivityTag(jobTimeActivityId, jobTimeActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to remove tag from | 
 **jobTimeActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateJobTimeActivityById"></a>
# **getDuplicateJobTimeActivityById**
> JobTimeActivity getDuplicateJobTimeActivityById(jobTimeActivityId)

Get a duplicated a jobTimeActivity by id

Returns a duplicated jobTimeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateJobTimeActivityById(jobTimeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to be duplicated. | 

### Return type

[**JobTimeActivity**](JobTimeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTimeActivityByFilter"></a>
# **getJobTimeActivityByFilter**
> [JobTimeActivity] getJobTimeActivityByFilter(opts)

Search jobTimeActivitys by filter

Returns the list of jobTimeActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

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
apiInstance.getJobTimeActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[JobTimeActivity]**](JobTimeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTimeActivityById"></a>
# **getJobTimeActivityById**
> JobTimeActivity getJobTimeActivityById(jobTimeActivityId)

Get a jobTimeActivity by id

Returns the jobTimeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobTimeActivityById(jobTimeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to be returned. | 

### Return type

[**JobTimeActivity**](JobTimeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTimeActivityTags"></a>
# **getJobTimeActivityTags**
> getJobTimeActivityTags(jobTimeActivityId)

Get the tags for a jobTimeActivity.

Get all existing jobTimeActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var jobTimeActivityId = 56; // Number | Id of the jobTimeActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJobTimeActivityTags(jobTimeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeActivityId** | **Number**| Id of the jobTimeActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateJobTimeActivity"></a>
# **updateJobTimeActivity**
> updateJobTimeActivity(body)

Update a jobTimeActivity

Updates an existing jobTimeActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeActivityApi();

var body = new infoplus.JobTimeActivity(); // JobTimeActivity | JobTimeActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJobTimeActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobTimeActivity**](JobTimeActivity.md)| JobTimeActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

