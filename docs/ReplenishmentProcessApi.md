# infoplus.ReplenishmentProcessApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReplenishmentProcessAudit**](ReplenishmentProcessApi.md#addReplenishmentProcessAudit) | **PUT** /v3.0/replenishmentProcess/{replenishmentProcessId}/audit/{replenishmentProcessAudit} | Add new audit for a replenishmentProcess
[**addReplenishmentProcessFile**](ReplenishmentProcessApi.md#addReplenishmentProcessFile) | **POST** /v3.0/replenishmentProcess/{replenishmentProcessId}/file/{fileName} | Attach a file to a replenishmentProcess
[**addReplenishmentProcessFileByURL**](ReplenishmentProcessApi.md#addReplenishmentProcessFileByURL) | **POST** /v3.0/replenishmentProcess/{replenishmentProcessId}/file | Attach a file to a replenishmentProcess by URL.
[**addReplenishmentProcessTag**](ReplenishmentProcessApi.md#addReplenishmentProcessTag) | **PUT** /v3.0/replenishmentProcess/{replenishmentProcessId}/tag/{replenishmentProcessTag} | Add new tags for a replenishmentProcess.
[**deleteReplenishmentProcessFile**](ReplenishmentProcessApi.md#deleteReplenishmentProcessFile) | **DELETE** /v3.0/replenishmentProcess/{replenishmentProcessId}/file/{fileId} | Delete a file for a replenishmentProcess.
[**deleteReplenishmentProcessTag**](ReplenishmentProcessApi.md#deleteReplenishmentProcessTag) | **DELETE** /v3.0/replenishmentProcess/{replenishmentProcessId}/tag/{replenishmentProcessTag} | Delete a tag for a replenishmentProcess.
[**getDuplicateReplenishmentProcessById**](ReplenishmentProcessApi.md#getDuplicateReplenishmentProcessById) | **GET** /v3.0/replenishmentProcess/duplicate/{replenishmentProcessId} | Get a duplicated a replenishmentProcess by id
[**getReplenishmentProcessByFilter**](ReplenishmentProcessApi.md#getReplenishmentProcessByFilter) | **GET** /v3.0/replenishmentProcess/search | Search replenishmentProcesses by filter
[**getReplenishmentProcessById**](ReplenishmentProcessApi.md#getReplenishmentProcessById) | **GET** /v3.0/replenishmentProcess/{replenishmentProcessId} | Get a replenishmentProcess by id
[**getReplenishmentProcessFiles**](ReplenishmentProcessApi.md#getReplenishmentProcessFiles) | **GET** /v3.0/replenishmentProcess/{replenishmentProcessId}/file | Get the files for a replenishmentProcess.
[**getReplenishmentProcessTags**](ReplenishmentProcessApi.md#getReplenishmentProcessTags) | **GET** /v3.0/replenishmentProcess/{replenishmentProcessId}/tag | Get the tags for a replenishmentProcess.
[**updateReplenishmentProcessCustomFields**](ReplenishmentProcessApi.md#updateReplenishmentProcessCustomFields) | **PUT** /v3.0/replenishmentProcess/customFields | Update a replenishmentProcess custom fields


<a name="addReplenishmentProcessAudit"></a>
# **addReplenishmentProcessAudit**
> addReplenishmentProcessAudit(replenishmentProcessId, replenishmentProcessAudit)

Add new audit for a replenishmentProcess

Adds an audit to an existing replenishmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to add an audit to

var replenishmentProcessAudit = "replenishmentProcessAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReplenishmentProcessAudit(replenishmentProcessId, replenishmentProcessAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to add an audit to | 
 **replenishmentProcessAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReplenishmentProcessFile"></a>
# **addReplenishmentProcessFile**
> addReplenishmentProcessFile(replenishmentProcessId, fileName)

Attach a file to a replenishmentProcess

Adds a file to an existing replenishmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReplenishmentProcessFile(replenishmentProcessId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addReplenishmentProcessFileByURL"></a>
# **addReplenishmentProcessFileByURL**
> addReplenishmentProcessFileByURL(body, replenishmentProcessId)

Attach a file to a replenishmentProcess by URL.

Adds a file to an existing replenishmentProcess by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReplenishmentProcessFileByURL(body, replenishmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReplenishmentProcessTag"></a>
# **addReplenishmentProcessTag**
> addReplenishmentProcessTag(replenishmentProcessId, replenishmentProcessTag)

Add new tags for a replenishmentProcess.

Adds a tag to an existing replenishmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to add a tag to

var replenishmentProcessTag = "replenishmentProcessTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReplenishmentProcessTag(replenishmentProcessId, replenishmentProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to add a tag to | 
 **replenishmentProcessTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReplenishmentProcessFile"></a>
# **deleteReplenishmentProcessFile**
> deleteReplenishmentProcessFile(replenishmentProcessId, fileId)

Delete a file for a replenishmentProcess.

Deletes an existing replenishmentProcess file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReplenishmentProcessFile(replenishmentProcessId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteReplenishmentProcessTag"></a>
# **deleteReplenishmentProcessTag**
> deleteReplenishmentProcessTag(replenishmentProcessId, replenishmentProcessTag)

Delete a tag for a replenishmentProcess.

Deletes an existing replenishmentProcess tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to remove tag from

var replenishmentProcessTag = "replenishmentProcessTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReplenishmentProcessTag(replenishmentProcessId, replenishmentProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to remove tag from | 
 **replenishmentProcessTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateReplenishmentProcessById"></a>
# **getDuplicateReplenishmentProcessById**
> ReplenishmentProcess getDuplicateReplenishmentProcessById(replenishmentProcessId)

Get a duplicated a replenishmentProcess by id

Returns a duplicated replenishmentProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateReplenishmentProcessById(replenishmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to be duplicated. | 

### Return type

[**ReplenishmentProcess**](ReplenishmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentProcessByFilter"></a>
# **getReplenishmentProcessByFilter**
> [ReplenishmentProcess] getReplenishmentProcessByFilter(opts)

Search replenishmentProcesses by filter

Returns the list of replenishmentProcesses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

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
apiInstance.getReplenishmentProcessByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReplenishmentProcess]**](ReplenishmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentProcessById"></a>
# **getReplenishmentProcessById**
> ReplenishmentProcess getReplenishmentProcessById(replenishmentProcessId)

Get a replenishmentProcess by id

Returns the replenishmentProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReplenishmentProcessById(replenishmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to be returned. | 

### Return type

[**ReplenishmentProcess**](ReplenishmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentProcessFiles"></a>
# **getReplenishmentProcessFiles**
> getReplenishmentProcessFiles(replenishmentProcessId)

Get the files for a replenishmentProcess.

Get all existing replenishmentProcess files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReplenishmentProcessFiles(replenishmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentProcessTags"></a>
# **getReplenishmentProcessTags**
> getReplenishmentProcessTags(replenishmentProcessId)

Get the tags for a replenishmentProcess.

Get all existing replenishmentProcess tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var replenishmentProcessId = 56; // Number | Id of the replenishmentProcess to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReplenishmentProcessTags(replenishmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentProcessId** | **Number**| Id of the replenishmentProcess to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReplenishmentProcessCustomFields"></a>
# **updateReplenishmentProcessCustomFields**
> updateReplenishmentProcessCustomFields(body)

Update a replenishmentProcess custom fields

Updates an existing replenishmentProcess custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentProcessApi();

var body = new infoplus.ReplenishmentProcess(); // ReplenishmentProcess | ReplenishmentProcess to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReplenishmentProcessCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReplenishmentProcess**](ReplenishmentProcess.md)| ReplenishmentProcess to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

