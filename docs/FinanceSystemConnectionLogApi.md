# infoplus.FinanceSystemConnectionLogApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFinanceSystemConnectionLogAudit**](FinanceSystemConnectionLogApi.md#addFinanceSystemConnectionLogAudit) | **PUT** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/audit/{financeSystemConnectionLogAudit} | Add new audit for a financeSystemConnectionLog
[**addFinanceSystemConnectionLogFile**](FinanceSystemConnectionLogApi.md#addFinanceSystemConnectionLogFile) | **POST** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/file/{fileName} | Attach a file to a financeSystemConnectionLog
[**addFinanceSystemConnectionLogFileByURL**](FinanceSystemConnectionLogApi.md#addFinanceSystemConnectionLogFileByURL) | **POST** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/file | Attach a file to a financeSystemConnectionLog by URL.
[**addFinanceSystemConnectionLogTag**](FinanceSystemConnectionLogApi.md#addFinanceSystemConnectionLogTag) | **PUT** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/tag/{financeSystemConnectionLogTag} | Add new tags for a financeSystemConnectionLog.
[**deleteFinanceSystemConnectionLogFile**](FinanceSystemConnectionLogApi.md#deleteFinanceSystemConnectionLogFile) | **DELETE** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/file/{fileId} | Delete a file for a financeSystemConnectionLog.
[**deleteFinanceSystemConnectionLogTag**](FinanceSystemConnectionLogApi.md#deleteFinanceSystemConnectionLogTag) | **DELETE** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/tag/{financeSystemConnectionLogTag} | Delete a tag for a financeSystemConnectionLog.
[**getDuplicateFinanceSystemConnectionLogById**](FinanceSystemConnectionLogApi.md#getDuplicateFinanceSystemConnectionLogById) | **GET** /beta/financeSystemConnectionLog/duplicate/{financeSystemConnectionLogId} | Get a duplicated a financeSystemConnectionLog by id
[**getFinanceSystemConnectionLogByFilter**](FinanceSystemConnectionLogApi.md#getFinanceSystemConnectionLogByFilter) | **GET** /beta/financeSystemConnectionLog/search | Search financeSystemConnectionLogs by filter
[**getFinanceSystemConnectionLogById**](FinanceSystemConnectionLogApi.md#getFinanceSystemConnectionLogById) | **GET** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId} | Get a financeSystemConnectionLog by id
[**getFinanceSystemConnectionLogFiles**](FinanceSystemConnectionLogApi.md#getFinanceSystemConnectionLogFiles) | **GET** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/file | Get the files for a financeSystemConnectionLog.
[**getFinanceSystemConnectionLogTags**](FinanceSystemConnectionLogApi.md#getFinanceSystemConnectionLogTags) | **GET** /beta/financeSystemConnectionLog/{financeSystemConnectionLogId}/tag | Get the tags for a financeSystemConnectionLog.


<a name="addFinanceSystemConnectionLogAudit"></a>
# **addFinanceSystemConnectionLogAudit**
> addFinanceSystemConnectionLogAudit(financeSystemConnectionLogId, financeSystemConnectionLogAudit)

Add new audit for a financeSystemConnectionLog

Adds an audit to an existing financeSystemConnectionLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to add an audit to

var financeSystemConnectionLogAudit = "financeSystemConnectionLogAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionLogAudit(financeSystemConnectionLogId, financeSystemConnectionLogAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to add an audit to | 
 **financeSystemConnectionLogAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFinanceSystemConnectionLogFile"></a>
# **addFinanceSystemConnectionLogFile**
> addFinanceSystemConnectionLogFile(financeSystemConnectionLogId, fileName)

Attach a file to a financeSystemConnectionLog

Adds a file to an existing financeSystemConnectionLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionLogFile(financeSystemConnectionLogId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addFinanceSystemConnectionLogFileByURL"></a>
# **addFinanceSystemConnectionLogFileByURL**
> addFinanceSystemConnectionLogFileByURL(body, financeSystemConnectionLogId)

Attach a file to a financeSystemConnectionLog by URL.

Adds a file to an existing financeSystemConnectionLog by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionLogFileByURL(body, financeSystemConnectionLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFinanceSystemConnectionLogTag"></a>
# **addFinanceSystemConnectionLogTag**
> addFinanceSystemConnectionLogTag(financeSystemConnectionLogId, financeSystemConnectionLogTag)

Add new tags for a financeSystemConnectionLog.

Adds a tag to an existing financeSystemConnectionLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to add a tag to

var financeSystemConnectionLogTag = "financeSystemConnectionLogTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionLogTag(financeSystemConnectionLogId, financeSystemConnectionLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to add a tag to | 
 **financeSystemConnectionLogTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFinanceSystemConnectionLogFile"></a>
# **deleteFinanceSystemConnectionLogFile**
> deleteFinanceSystemConnectionLogFile(financeSystemConnectionLogId, fileId)

Delete a file for a financeSystemConnectionLog.

Deletes an existing financeSystemConnectionLog file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFinanceSystemConnectionLogFile(financeSystemConnectionLogId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteFinanceSystemConnectionLogTag"></a>
# **deleteFinanceSystemConnectionLogTag**
> deleteFinanceSystemConnectionLogTag(financeSystemConnectionLogId, financeSystemConnectionLogTag)

Delete a tag for a financeSystemConnectionLog.

Deletes an existing financeSystemConnectionLog tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to remove tag from

var financeSystemConnectionLogTag = "financeSystemConnectionLogTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFinanceSystemConnectionLogTag(financeSystemConnectionLogId, financeSystemConnectionLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to remove tag from | 
 **financeSystemConnectionLogTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateFinanceSystemConnectionLogById"></a>
# **getDuplicateFinanceSystemConnectionLogById**
> FinanceSystemConnectionLog getDuplicateFinanceSystemConnectionLogById(financeSystemConnectionLogId)

Get a duplicated a financeSystemConnectionLog by id

Returns a duplicated financeSystemConnectionLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateFinanceSystemConnectionLogById(financeSystemConnectionLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to be duplicated. | 

### Return type

[**FinanceSystemConnectionLog**](FinanceSystemConnectionLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionLogByFilter"></a>
# **getFinanceSystemConnectionLogByFilter**
> [FinanceSystemConnectionLog] getFinanceSystemConnectionLogByFilter(opts)

Search financeSystemConnectionLogs by filter

Returns the list of financeSystemConnectionLogs that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

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
apiInstance.getFinanceSystemConnectionLogByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[FinanceSystemConnectionLog]**](FinanceSystemConnectionLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionLogById"></a>
# **getFinanceSystemConnectionLogById**
> FinanceSystemConnectionLog getFinanceSystemConnectionLogById(financeSystemConnectionLogId)

Get a financeSystemConnectionLog by id

Returns the financeSystemConnectionLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFinanceSystemConnectionLogById(financeSystemConnectionLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to be returned. | 

### Return type

[**FinanceSystemConnectionLog**](FinanceSystemConnectionLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionLogFiles"></a>
# **getFinanceSystemConnectionLogFiles**
> getFinanceSystemConnectionLogFiles(financeSystemConnectionLogId)

Get the files for a financeSystemConnectionLog.

Get all existing financeSystemConnectionLog files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFinanceSystemConnectionLogFiles(financeSystemConnectionLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionLogTags"></a>
# **getFinanceSystemConnectionLogTags**
> getFinanceSystemConnectionLogTags(financeSystemConnectionLogId)

Get the tags for a financeSystemConnectionLog.

Get all existing financeSystemConnectionLog tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionLogApi();

var financeSystemConnectionLogId = 56; // Number | Id of the financeSystemConnectionLog to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFinanceSystemConnectionLogTags(financeSystemConnectionLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionLogId** | **Number**| Id of the financeSystemConnectionLog to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

