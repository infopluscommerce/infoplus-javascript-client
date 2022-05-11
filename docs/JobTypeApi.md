# infoplus.JobTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addJobType**](JobTypeApi.md#addJobType) | **POST** /v3.0/jobType | Create a jobType
[**addJobTypeAudit**](JobTypeApi.md#addJobTypeAudit) | **PUT** /v3.0/jobType/{jobTypeId}/audit/{jobTypeAudit} | Add new audit for a jobType
[**addJobTypeFile**](JobTypeApi.md#addJobTypeFile) | **POST** /v3.0/jobType/{jobTypeId}/file/{fileName} | Attach a file to a jobType
[**addJobTypeFileByURL**](JobTypeApi.md#addJobTypeFileByURL) | **POST** /v3.0/jobType/{jobTypeId}/file | Attach a file to a jobType by URL.
[**addJobTypeTag**](JobTypeApi.md#addJobTypeTag) | **PUT** /v3.0/jobType/{jobTypeId}/tag/{jobTypeTag} | Add new tags for a jobType.
[**deleteJobType**](JobTypeApi.md#deleteJobType) | **DELETE** /v3.0/jobType/{jobTypeId} | Delete a jobType
[**deleteJobTypeFile**](JobTypeApi.md#deleteJobTypeFile) | **DELETE** /v3.0/jobType/{jobTypeId}/file/{fileId} | Delete a file for a jobType.
[**deleteJobTypeTag**](JobTypeApi.md#deleteJobTypeTag) | **DELETE** /v3.0/jobType/{jobTypeId}/tag/{jobTypeTag} | Delete a tag for a jobType.
[**getDuplicateJobTypeById**](JobTypeApi.md#getDuplicateJobTypeById) | **GET** /v3.0/jobType/duplicate/{jobTypeId} | Get a duplicated a jobType by id
[**getJobTypeByFilter**](JobTypeApi.md#getJobTypeByFilter) | **GET** /v3.0/jobType/search | Search jobTypes by filter
[**getJobTypeById**](JobTypeApi.md#getJobTypeById) | **GET** /v3.0/jobType/{jobTypeId} | Get a jobType by id
[**getJobTypeFiles**](JobTypeApi.md#getJobTypeFiles) | **GET** /v3.0/jobType/{jobTypeId}/file | Get the files for a jobType.
[**getJobTypeTags**](JobTypeApi.md#getJobTypeTags) | **GET** /v3.0/jobType/{jobTypeId}/tag | Get the tags for a jobType.
[**updateJobType**](JobTypeApi.md#updateJobType) | **PUT** /v3.0/jobType | Update a jobType
[**updateJobTypeCustomFields**](JobTypeApi.md#updateJobTypeCustomFields) | **PUT** /v3.0/jobType/customFields | Update a jobType custom fields


<a name="addJobType"></a>
# **addJobType**
> JobType addJobType(body)

Create a jobType

Inserts a new jobType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var body = new infoplus.JobType(); // JobType | JobType to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addJobType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobType**](JobType.md)| JobType to be inserted. | 

### Return type

[**JobType**](JobType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTypeAudit"></a>
# **addJobTypeAudit**
> addJobTypeAudit(jobTypeId, jobTypeAudit)

Add new audit for a jobType

Adds an audit to an existing jobType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to add an audit to

var jobTypeAudit = "jobTypeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTypeAudit(jobTypeId, jobTypeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to add an audit to | 
 **jobTypeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTypeFile"></a>
# **addJobTypeFile**
> addJobTypeFile(jobTypeId, fileName)

Attach a file to a jobType

Adds a file to an existing jobType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTypeFile(jobTypeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addJobTypeFileByURL"></a>
# **addJobTypeFileByURL**
> addJobTypeFileByURL(body, jobTypeId)

Attach a file to a jobType by URL.

Adds a file to an existing jobType by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var jobTypeId = 56; // Number | Id of the jobType to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTypeFileByURL(body, jobTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **jobTypeId** | **Number**| Id of the jobType to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobTypeTag"></a>
# **addJobTypeTag**
> addJobTypeTag(jobTypeId, jobTypeTag)

Add new tags for a jobType.

Adds a tag to an existing jobType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to add a tag to

var jobTypeTag = "jobTypeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobTypeTag(jobTypeId, jobTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to add a tag to | 
 **jobTypeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJobType"></a>
# **deleteJobType**
> deleteJobType(jobTypeId)

Delete a jobType

Deletes the jobType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobType(jobTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJobTypeFile"></a>
# **deleteJobTypeFile**
> deleteJobTypeFile(jobTypeId, fileId)

Delete a file for a jobType.

Deletes an existing jobType file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobTypeFile(jobTypeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJobTypeTag"></a>
# **deleteJobTypeTag**
> deleteJobTypeTag(jobTypeId, jobTypeTag)

Delete a tag for a jobType.

Deletes an existing jobType tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to remove tag from

var jobTypeTag = "jobTypeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobTypeTag(jobTypeId, jobTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to remove tag from | 
 **jobTypeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateJobTypeById"></a>
# **getDuplicateJobTypeById**
> JobType getDuplicateJobTypeById(jobTypeId)

Get a duplicated a jobType by id

Returns a duplicated jobType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateJobTypeById(jobTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to be duplicated. | 

### Return type

[**JobType**](JobType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTypeByFilter"></a>
# **getJobTypeByFilter**
> [JobType] getJobTypeByFilter(opts)

Search jobTypes by filter

Returns the list of jobTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

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
apiInstance.getJobTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[JobType]**](JobType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTypeById"></a>
# **getJobTypeById**
> JobType getJobTypeById(jobTypeId)

Get a jobType by id

Returns the jobType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobTypeById(jobTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to be returned. | 

### Return type

[**JobType**](JobType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTypeFiles"></a>
# **getJobTypeFiles**
> getJobTypeFiles(jobTypeId)

Get the files for a jobType.

Get all existing jobType files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJobTypeFiles(jobTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobTypeTags"></a>
# **getJobTypeTags**
> getJobTypeTags(jobTypeId)

Get the tags for a jobType.

Get all existing jobType tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var jobTypeId = 56; // Number | Id of the jobType to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJobTypeTags(jobTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobTypeId** | **Number**| Id of the jobType to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateJobType"></a>
# **updateJobType**
> updateJobType(body)

Update a jobType

Updates an existing jobType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var body = new infoplus.JobType(); // JobType | JobType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJobType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobType**](JobType.md)| JobType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateJobTypeCustomFields"></a>
# **updateJobTypeCustomFields**
> updateJobTypeCustomFields(body)

Update a jobType custom fields

Updates an existing jobType custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobTypeApi();

var body = new infoplus.JobType(); // JobType | JobType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJobTypeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobType**](JobType.md)| JobType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

