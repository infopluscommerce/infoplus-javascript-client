# infoplus.PerpetualInventoryLogApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPerpetualInventoryLogAudit**](PerpetualInventoryLogApi.md#addPerpetualInventoryLogAudit) | **PUT** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/audit/{perpetualInventoryLogAudit} | Add new audit for a perpetualInventoryLog
[**addPerpetualInventoryLogFile**](PerpetualInventoryLogApi.md#addPerpetualInventoryLogFile) | **POST** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/file/{fileName} | Attach a file to a perpetualInventoryLog
[**addPerpetualInventoryLogFileByURL**](PerpetualInventoryLogApi.md#addPerpetualInventoryLogFileByURL) | **POST** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/file | Attach a file to a perpetualInventoryLog by URL.
[**addPerpetualInventoryLogTag**](PerpetualInventoryLogApi.md#addPerpetualInventoryLogTag) | **PUT** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/tag/{perpetualInventoryLogTag} | Add new tags for a perpetualInventoryLog.
[**deletePerpetualInventoryLogFile**](PerpetualInventoryLogApi.md#deletePerpetualInventoryLogFile) | **DELETE** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/file/{fileId} | Delete a file for a perpetualInventoryLog.
[**deletePerpetualInventoryLogTag**](PerpetualInventoryLogApi.md#deletePerpetualInventoryLogTag) | **DELETE** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/tag/{perpetualInventoryLogTag} | Delete a tag for a perpetualInventoryLog.
[**getDuplicatePerpetualInventoryLogById**](PerpetualInventoryLogApi.md#getDuplicatePerpetualInventoryLogById) | **GET** /v3.0/perpetualInventoryLog/duplicate/{perpetualInventoryLogId} | Get a duplicated a perpetualInventoryLog by id
[**getPerpetualInventoryLogByFilter**](PerpetualInventoryLogApi.md#getPerpetualInventoryLogByFilter) | **GET** /v3.0/perpetualInventoryLog/search | Search perpetualInventoryLogs by filter
[**getPerpetualInventoryLogById**](PerpetualInventoryLogApi.md#getPerpetualInventoryLogById) | **GET** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId} | Get a perpetualInventoryLog by id
[**getPerpetualInventoryLogFiles**](PerpetualInventoryLogApi.md#getPerpetualInventoryLogFiles) | **GET** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/file | Get the files for a perpetualInventoryLog.
[**getPerpetualInventoryLogTags**](PerpetualInventoryLogApi.md#getPerpetualInventoryLogTags) | **GET** /v3.0/perpetualInventoryLog/{perpetualInventoryLogId}/tag | Get the tags for a perpetualInventoryLog.


<a name="addPerpetualInventoryLogAudit"></a>
# **addPerpetualInventoryLogAudit**
> addPerpetualInventoryLogAudit(perpetualInventoryLogId, perpetualInventoryLogAudit)

Add new audit for a perpetualInventoryLog

Adds an audit to an existing perpetualInventoryLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to add an audit to

var perpetualInventoryLogAudit = "perpetualInventoryLogAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPerpetualInventoryLogAudit(perpetualInventoryLogId, perpetualInventoryLogAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to add an audit to | 
 **perpetualInventoryLogAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPerpetualInventoryLogFile"></a>
# **addPerpetualInventoryLogFile**
> addPerpetualInventoryLogFile(perpetualInventoryLogId, fileName)

Attach a file to a perpetualInventoryLog

Adds a file to an existing perpetualInventoryLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPerpetualInventoryLogFile(perpetualInventoryLogId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addPerpetualInventoryLogFileByURL"></a>
# **addPerpetualInventoryLogFileByURL**
> addPerpetualInventoryLogFileByURL(body, perpetualInventoryLogId)

Attach a file to a perpetualInventoryLog by URL.

Adds a file to an existing perpetualInventoryLog by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPerpetualInventoryLogFileByURL(body, perpetualInventoryLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPerpetualInventoryLogTag"></a>
# **addPerpetualInventoryLogTag**
> addPerpetualInventoryLogTag(perpetualInventoryLogId, perpetualInventoryLogTag)

Add new tags for a perpetualInventoryLog.

Adds a tag to an existing perpetualInventoryLog.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to add a tag to

var perpetualInventoryLogTag = "perpetualInventoryLogTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPerpetualInventoryLogTag(perpetualInventoryLogId, perpetualInventoryLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to add a tag to | 
 **perpetualInventoryLogTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePerpetualInventoryLogFile"></a>
# **deletePerpetualInventoryLogFile**
> deletePerpetualInventoryLogFile(perpetualInventoryLogId, fileId)

Delete a file for a perpetualInventoryLog.

Deletes an existing perpetualInventoryLog file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePerpetualInventoryLogFile(perpetualInventoryLogId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePerpetualInventoryLogTag"></a>
# **deletePerpetualInventoryLogTag**
> deletePerpetualInventoryLogTag(perpetualInventoryLogId, perpetualInventoryLogTag)

Delete a tag for a perpetualInventoryLog.

Deletes an existing perpetualInventoryLog tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to remove tag from

var perpetualInventoryLogTag = "perpetualInventoryLogTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePerpetualInventoryLogTag(perpetualInventoryLogId, perpetualInventoryLogTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to remove tag from | 
 **perpetualInventoryLogTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicatePerpetualInventoryLogById"></a>
# **getDuplicatePerpetualInventoryLogById**
> PerpetualInventoryLog getDuplicatePerpetualInventoryLogById(perpetualInventoryLogId)

Get a duplicated a perpetualInventoryLog by id

Returns a duplicated perpetualInventoryLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicatePerpetualInventoryLogById(perpetualInventoryLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to be duplicated. | 

### Return type

[**PerpetualInventoryLog**](PerpetualInventoryLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPerpetualInventoryLogByFilter"></a>
# **getPerpetualInventoryLogByFilter**
> [PerpetualInventoryLog] getPerpetualInventoryLogByFilter(opts)

Search perpetualInventoryLogs by filter

Returns the list of perpetualInventoryLogs that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

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
apiInstance.getPerpetualInventoryLogByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[PerpetualInventoryLog]**](PerpetualInventoryLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPerpetualInventoryLogById"></a>
# **getPerpetualInventoryLogById**
> PerpetualInventoryLog getPerpetualInventoryLogById(perpetualInventoryLogId)

Get a perpetualInventoryLog by id

Returns the perpetualInventoryLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPerpetualInventoryLogById(perpetualInventoryLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to be returned. | 

### Return type

[**PerpetualInventoryLog**](PerpetualInventoryLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPerpetualInventoryLogFiles"></a>
# **getPerpetualInventoryLogFiles**
> getPerpetualInventoryLogFiles(perpetualInventoryLogId)

Get the files for a perpetualInventoryLog.

Get all existing perpetualInventoryLog files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPerpetualInventoryLogFiles(perpetualInventoryLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPerpetualInventoryLogTags"></a>
# **getPerpetualInventoryLogTags**
> getPerpetualInventoryLogTags(perpetualInventoryLogId)

Get the tags for a perpetualInventoryLog.

Get all existing perpetualInventoryLog tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PerpetualInventoryLogApi();

var perpetualInventoryLogId = 56; // Number | Id of the perpetualInventoryLog to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPerpetualInventoryLogTags(perpetualInventoryLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perpetualInventoryLogId** | **Number**| Id of the perpetualInventoryLog to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

