# infoplus.ScheduledPlanLogApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addScheduledPlanLogAudit**](ScheduledPlanLogApi.md#addScheduledPlanLogAudit) | **PUT** /beta/scheduledPlanLog/{scheduledPlanLogId}/audit/{scheduledPlanLogAudit} | Add new audit for a scheduledPlanLog
[**addScheduledPlanLogFile**](ScheduledPlanLogApi.md#addScheduledPlanLogFile) | **POST** /beta/scheduledPlanLog/{scheduledPlanLogId}/file/{fileName} | Attach a file to a scheduledPlanLog
[**addScheduledPlanLogFileByURL**](ScheduledPlanLogApi.md#addScheduledPlanLogFileByURL) | **POST** /beta/scheduledPlanLog/{scheduledPlanLogId}/file | Attach a file to a scheduledPlanLog by URL.
[**addScheduledPlanLogTag**](ScheduledPlanLogApi.md#addScheduledPlanLogTag) | **PUT** /beta/scheduledPlanLog/{scheduledPlanLogId}/tag/{scheduledPlanLogTag} | Add new tags for a scheduledPlanLog.
[**deleteScheduledPlanLogFile**](ScheduledPlanLogApi.md#deleteScheduledPlanLogFile) | **DELETE** /beta/scheduledPlanLog/{scheduledPlanLogId}/file/{fileId} | Delete a file for a scheduledPlanLog.
[**deleteScheduledPlanLogTag**](ScheduledPlanLogApi.md#deleteScheduledPlanLogTag) | **DELETE** /beta/scheduledPlanLog/{scheduledPlanLogId}/tag/{scheduledPlanLogTag} | Delete a tag for a scheduledPlanLog.
[**getDuplicateScheduledPlanLogById**](ScheduledPlanLogApi.md#getDuplicateScheduledPlanLogById) | **GET** /beta/scheduledPlanLog/duplicate/{scheduledPlanLogId} | Get a duplicated a scheduledPlanLog by id
[**getScheduledPlanLogByFilter**](ScheduledPlanLogApi.md#getScheduledPlanLogByFilter) | **GET** /beta/scheduledPlanLog/search | Search scheduledPlanLogs by filter
[**getScheduledPlanLogById**](ScheduledPlanLogApi.md#getScheduledPlanLogById) | **GET** /beta/scheduledPlanLog/{scheduledPlanLogId} | Get a scheduledPlanLog by id
[**getScheduledPlanLogFiles**](ScheduledPlanLogApi.md#getScheduledPlanLogFiles) | **GET** /beta/scheduledPlanLog/{scheduledPlanLogId}/file | Get the files for a scheduledPlanLog.
[**getScheduledPlanLogTags**](ScheduledPlanLogApi.md#getScheduledPlanLogTags) | **GET** /beta/scheduledPlanLog/{scheduledPlanLogId}/tag | Get the tags for a scheduledPlanLog.


<a name="addScheduledPlanLogAudit"></a>
# **addScheduledPlanLogAudit**
> addScheduledPlanLogAudit(scheduledPlanLogId, scheduledPlanLogAudit)

Add new audit for a scheduledPlanLog

Adds an audit to an existing scheduledPlanLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to add an audit to

var scheduledPlanLogAudit = "scheduledPlanLogAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addScheduledPlanLogAudit(scheduledPlanLogId, scheduledPlanLogAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to add an audit to | 
 **scheduledPlanLogAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addScheduledPlanLogFile"></a>
# **addScheduledPlanLogFile**
> addScheduledPlanLogFile(scheduledPlanLogId, fileName)

Attach a file to a scheduledPlanLog

Adds a file to an existing scheduledPlanLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addScheduledPlanLogFile(scheduledPlanLogId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addScheduledPlanLogFileByURL"></a>
# **addScheduledPlanLogFileByURL**
> addScheduledPlanLogFileByURL(body, scheduledPlanLogId)

Attach a file to a scheduledPlanLog by URL.

Adds a file to an existing scheduledPlanLog by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addScheduledPlanLogFileByURL(body, scheduledPlanLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addScheduledPlanLogTag"></a>
# **addScheduledPlanLogTag**
> addScheduledPlanLogTag(scheduledPlanLogId, scheduledPlanLogTag)

Add new tags for a scheduledPlanLog.

Adds a tag to an existing scheduledPlanLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to add a tag to

var scheduledPlanLogTag = "scheduledPlanLogTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addScheduledPlanLogTag(scheduledPlanLogId, scheduledPlanLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to add a tag to | 
 **scheduledPlanLogTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteScheduledPlanLogFile"></a>
# **deleteScheduledPlanLogFile**
> deleteScheduledPlanLogFile(scheduledPlanLogId, fileId)

Delete a file for a scheduledPlanLog.

Deletes an existing scheduledPlanLog file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteScheduledPlanLogFile(scheduledPlanLogId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteScheduledPlanLogTag"></a>
# **deleteScheduledPlanLogTag**
> deleteScheduledPlanLogTag(scheduledPlanLogId, scheduledPlanLogTag)

Delete a tag for a scheduledPlanLog.

Deletes an existing scheduledPlanLog tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to remove tag from

var scheduledPlanLogTag = "scheduledPlanLogTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteScheduledPlanLogTag(scheduledPlanLogId, scheduledPlanLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to remove tag from | 
 **scheduledPlanLogTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateScheduledPlanLogById"></a>
# **getDuplicateScheduledPlanLogById**
> ScheduledPlanLog getDuplicateScheduledPlanLogById(scheduledPlanLogId)

Get a duplicated a scheduledPlanLog by id

Returns a duplicated scheduledPlanLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateScheduledPlanLogById(scheduledPlanLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to be duplicated. | 

### Return type

[**ScheduledPlanLog**](ScheduledPlanLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScheduledPlanLogByFilter"></a>
# **getScheduledPlanLogByFilter**
> [ScheduledPlanLog] getScheduledPlanLogByFilter(opts)

Search scheduledPlanLogs by filter

Returns the list of scheduledPlanLogs that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

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
apiInstance.getScheduledPlanLogByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ScheduledPlanLog]**](ScheduledPlanLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScheduledPlanLogById"></a>
# **getScheduledPlanLogById**
> ScheduledPlanLog getScheduledPlanLogById(scheduledPlanLogId)

Get a scheduledPlanLog by id

Returns the scheduledPlanLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScheduledPlanLogById(scheduledPlanLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to be returned. | 

### Return type

[**ScheduledPlanLog**](ScheduledPlanLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScheduledPlanLogFiles"></a>
# **getScheduledPlanLogFiles**
> getScheduledPlanLogFiles(scheduledPlanLogId)

Get the files for a scheduledPlanLog.

Get all existing scheduledPlanLog files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getScheduledPlanLogFiles(scheduledPlanLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScheduledPlanLogTags"></a>
# **getScheduledPlanLogTags**
> getScheduledPlanLogTags(scheduledPlanLogId)

Get the tags for a scheduledPlanLog.

Get all existing scheduledPlanLog tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ScheduledPlanLogApi();

var scheduledPlanLogId = 56; // Number | Id of the scheduledPlanLog to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getScheduledPlanLogTags(scheduledPlanLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Number**| Id of the scheduledPlanLog to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

