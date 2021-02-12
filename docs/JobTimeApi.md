# infoplus.JobTimeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addJobTime**](JobTimeApi.md#addJobTime) | **POST** /beta/jobTime | Create a jobTime
[**addJobTimeAudit**](JobTimeApi.md#addJobTimeAudit) | **PUT** /beta/jobTime/{jobTimeId}/audit/{jobTimeAudit} | Add new audit for a jobTime
[**addJobTimeFile**](JobTimeApi.md#addJobTimeFile) | **POST** /beta/jobTime/{jobTimeId}/file/{fileName} | Attach a file to a jobTime
[**addJobTimeFileByURL**](JobTimeApi.md#addJobTimeFileByURL) | **POST** /beta/jobTime/{jobTimeId}/file | Attach a file to a jobTime by URL.
[**addJobTimeTag**](JobTimeApi.md#addJobTimeTag) | **PUT** /beta/jobTime/{jobTimeId}/tag/{jobTimeTag} | Add new tags for a jobTime.
[**deleteJobTime**](JobTimeApi.md#deleteJobTime) | **DELETE** /beta/jobTime/{jobTimeId} | Delete a jobTime
[**deleteJobTimeFile**](JobTimeApi.md#deleteJobTimeFile) | **DELETE** /beta/jobTime/{jobTimeId}/file/{fileId} | Delete a file for a jobTime.
[**deleteJobTimeTag**](JobTimeApi.md#deleteJobTimeTag) | **DELETE** /beta/jobTime/{jobTimeId}/tag/{jobTimeTag} | Delete a tag for a jobTime.
[**getDuplicateJobTimeById**](JobTimeApi.md#getDuplicateJobTimeById) | **GET** /beta/jobTime/duplicate/{jobTimeId} | Get a duplicated a jobTime by id
[**getJobTimeByFilter**](JobTimeApi.md#getJobTimeByFilter) | **GET** /beta/jobTime/search | Search jobTimes by filter
[**getJobTimeById**](JobTimeApi.md#getJobTimeById) | **GET** /beta/jobTime/{jobTimeId} | Get a jobTime by id
[**getJobTimeFiles**](JobTimeApi.md#getJobTimeFiles) | **GET** /beta/jobTime/{jobTimeId}/file | Get the files for a jobTime.
[**getJobTimeTags**](JobTimeApi.md#getJobTimeTags) | **GET** /beta/jobTime/{jobTimeId}/tag | Get the tags for a jobTime.
[**updateJobTime**](JobTimeApi.md#updateJobTime) | **PUT** /beta/jobTime | Update a jobTime
[**updateJobTimeCustomFields**](JobTimeApi.md#updateJobTimeCustomFields) | **PUT** /beta/jobTime/customFields | Update a jobTime custom fields


<a name="addJobTime"></a>
# **addJobTime**
> JobTime addJobTime(body)

Create a jobTime

Inserts a new jobTime using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var body = new infoplus.JobTime(); // JobTime | JobTime to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addJobTime(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobTime**](JobTime.md)| JobTime to be inserted. | 

### Return type

[**JobTime**](JobTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTimeAudit"></a>
# **addJobTimeAudit**
> addJobTimeAudit(jobTimeId, jobTimeAudit)

Add new audit for a jobTime

Adds an audit to an existing jobTime.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to add an audit to

var jobTimeAudit = "jobTimeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTimeAudit(jobTimeId, jobTimeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to add an audit to | 
 **jobTimeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTimeFile"></a>
# **addJobTimeFile**
> addJobTimeFile(jobTimeId, fileName)

Attach a file to a jobTime

Adds a file to an existing jobTime.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTimeFile(jobTimeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addJobTimeFileByURL"></a>
# **addJobTimeFileByURL**
> addJobTimeFileByURL(body, jobTimeId)

Attach a file to a jobTime by URL.

Adds a file to an existing jobTime by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var jobTimeId = 56; // Number | Id of the jobTime to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTimeFileByURL(body, jobTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **jobTimeId** | **Number**| Id of the jobTime to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTimeTag"></a>
# **addJobTimeTag**
> addJobTimeTag(jobTimeId, jobTimeTag)

Add new tags for a jobTime.

Adds a tag to an existing jobTime.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to add a tag to

var jobTimeTag = "jobTimeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTimeTag(jobTimeId, jobTimeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to add a tag to | 
 **jobTimeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJobTime"></a>
# **deleteJobTime**
> deleteJobTime(jobTimeId)

Delete a jobTime

Deletes the jobTime identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobTime(jobTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJobTimeFile"></a>
# **deleteJobTimeFile**
> deleteJobTimeFile(jobTimeId, fileId)

Delete a file for a jobTime.

Deletes an existing jobTime file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobTimeFile(jobTimeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJobTimeTag"></a>
# **deleteJobTimeTag**
> deleteJobTimeTag(jobTimeId, jobTimeTag)

Delete a tag for a jobTime.

Deletes an existing jobTime tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to remove tag from

var jobTimeTag = "jobTimeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobTimeTag(jobTimeId, jobTimeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to remove tag from | 
 **jobTimeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateJobTimeById"></a>
# **getDuplicateJobTimeById**
> JobTime getDuplicateJobTimeById(jobTimeId)

Get a duplicated a jobTime by id

Returns a duplicated jobTime identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateJobTimeById(jobTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to be duplicated. | 

### Return type

[**JobTime**](JobTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTimeByFilter"></a>
# **getJobTimeByFilter**
> [JobTime] getJobTimeByFilter(opts)

Search jobTimes by filter

Returns the list of jobTimes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

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
apiInstance.getJobTimeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[JobTime]**](JobTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTimeById"></a>
# **getJobTimeById**
> JobTime getJobTimeById(jobTimeId)

Get a jobTime by id

Returns the jobTime identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobTimeById(jobTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to be returned. | 

### Return type

[**JobTime**](JobTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTimeFiles"></a>
# **getJobTimeFiles**
> getJobTimeFiles(jobTimeId)

Get the files for a jobTime.

Get all existing jobTime files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJobTimeFiles(jobTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTimeTags"></a>
# **getJobTimeTags**
> getJobTimeTags(jobTimeId)

Get the tags for a jobTime.

Get all existing jobTime tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var jobTimeId = 56; // Number | Id of the jobTime to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJobTimeTags(jobTimeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTimeId** | **Number**| Id of the jobTime to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateJobTime"></a>
# **updateJobTime**
> updateJobTime(body)

Update a jobTime

Updates an existing jobTime using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var body = new infoplus.JobTime(); // JobTime | JobTime to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJobTime(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobTime**](JobTime.md)| JobTime to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateJobTimeCustomFields"></a>
# **updateJobTimeCustomFields**
> updateJobTimeCustomFields(body)

Update a jobTime custom fields

Updates an existing jobTime custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTimeApi();

var body = new infoplus.JobTime(); // JobTime | JobTime to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJobTimeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobTime**](JobTime.md)| JobTime to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

