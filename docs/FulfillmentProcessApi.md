# infoplus.FulfillmentProcessApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFulfillmentProcessAudit**](FulfillmentProcessApi.md#addFulfillmentProcessAudit) | **PUT** /beta/fulfillmentProcess/{fulfillmentProcessId}/audit/{fulfillmentProcessAudit} | Add new audit for a fulfillmentProcess
[**addFulfillmentProcessFile**](FulfillmentProcessApi.md#addFulfillmentProcessFile) | **POST** /beta/fulfillmentProcess/{fulfillmentProcessId}/file/{fileName} | Attach a file to a fulfillmentProcess
[**addFulfillmentProcessFileByURL**](FulfillmentProcessApi.md#addFulfillmentProcessFileByURL) | **POST** /beta/fulfillmentProcess/{fulfillmentProcessId}/file | Attach a file to a fulfillmentProcess by URL.
[**addFulfillmentProcessTag**](FulfillmentProcessApi.md#addFulfillmentProcessTag) | **PUT** /beta/fulfillmentProcess/{fulfillmentProcessId}/tag/{fulfillmentProcessTag} | Add new tags for a fulfillmentProcess.
[**deleteFulfillmentProcessFile**](FulfillmentProcessApi.md#deleteFulfillmentProcessFile) | **DELETE** /beta/fulfillmentProcess/{fulfillmentProcessId}/file/{fileId} | Delete a file for a fulfillmentProcess.
[**deleteFulfillmentProcessTag**](FulfillmentProcessApi.md#deleteFulfillmentProcessTag) | **DELETE** /beta/fulfillmentProcess/{fulfillmentProcessId}/tag/{fulfillmentProcessTag} | Delete a tag for a fulfillmentProcess.
[**getDuplicateFulfillmentProcessById**](FulfillmentProcessApi.md#getDuplicateFulfillmentProcessById) | **GET** /beta/fulfillmentProcess/duplicate/{fulfillmentProcessId} | Get a duplicated a fulfillmentProcess by id
[**getFulfillmentProcessByFilter**](FulfillmentProcessApi.md#getFulfillmentProcessByFilter) | **GET** /beta/fulfillmentProcess/search | Search fulfillmentProcesses by filter
[**getFulfillmentProcessById**](FulfillmentProcessApi.md#getFulfillmentProcessById) | **GET** /beta/fulfillmentProcess/{fulfillmentProcessId} | Get a fulfillmentProcess by id
[**getFulfillmentProcessFiles**](FulfillmentProcessApi.md#getFulfillmentProcessFiles) | **GET** /beta/fulfillmentProcess/{fulfillmentProcessId}/file | Get the files for a fulfillmentProcess.
[**getFulfillmentProcessTags**](FulfillmentProcessApi.md#getFulfillmentProcessTags) | **GET** /beta/fulfillmentProcess/{fulfillmentProcessId}/tag | Get the tags for a fulfillmentProcess.
[**updateFulfillmentProcessCustomFields**](FulfillmentProcessApi.md#updateFulfillmentProcessCustomFields) | **PUT** /beta/fulfillmentProcess/customFields | Update a fulfillmentProcess custom fields


<a name="addFulfillmentProcessAudit"></a>
# **addFulfillmentProcessAudit**
> addFulfillmentProcessAudit(fulfillmentProcessId, fulfillmentProcessAudit)

Add new audit for a fulfillmentProcess

Adds an audit to an existing fulfillmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to add an audit to

var fulfillmentProcessAudit = "fulfillmentProcessAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentProcessAudit(fulfillmentProcessId, fulfillmentProcessAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to add an audit to | 
 **fulfillmentProcessAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFulfillmentProcessFile"></a>
# **addFulfillmentProcessFile**
> addFulfillmentProcessFile(fulfillmentProcessId, fileName)

Attach a file to a fulfillmentProcess

Adds a file to an existing fulfillmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentProcessFile(fulfillmentProcessId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addFulfillmentProcessFileByURL"></a>
# **addFulfillmentProcessFileByURL**
> addFulfillmentProcessFileByURL(body, fulfillmentProcessId)

Attach a file to a fulfillmentProcess by URL.

Adds a file to an existing fulfillmentProcess by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentProcessFileByURL(body, fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFulfillmentProcessTag"></a>
# **addFulfillmentProcessTag**
> addFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag)

Add new tags for a fulfillmentProcess.

Adds a tag to an existing fulfillmentProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to add a tag to

var fulfillmentProcessTag = "fulfillmentProcessTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to add a tag to | 
 **fulfillmentProcessTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFulfillmentProcessFile"></a>
# **deleteFulfillmentProcessFile**
> deleteFulfillmentProcessFile(fulfillmentProcessId, fileId)

Delete a file for a fulfillmentProcess.

Deletes an existing fulfillmentProcess file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFulfillmentProcessFile(fulfillmentProcessId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteFulfillmentProcessTag"></a>
# **deleteFulfillmentProcessTag**
> deleteFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag)

Delete a tag for a fulfillmentProcess.

Deletes an existing fulfillmentProcess tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to remove tag from

var fulfillmentProcessTag = "fulfillmentProcessTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFulfillmentProcessTag(fulfillmentProcessId, fulfillmentProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to remove tag from | 
 **fulfillmentProcessTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateFulfillmentProcessById"></a>
# **getDuplicateFulfillmentProcessById**
> FulfillmentProcess getDuplicateFulfillmentProcessById(fulfillmentProcessId)

Get a duplicated a fulfillmentProcess by id

Returns a duplicated fulfillmentProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateFulfillmentProcessById(fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to be duplicated. | 

### Return type

[**FulfillmentProcess**](FulfillmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessByFilter"></a>
# **getFulfillmentProcessByFilter**
> [FulfillmentProcess] getFulfillmentProcessByFilter(opts)

Search fulfillmentProcesses by filter

Returns the list of fulfillmentProcesses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

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
apiInstance.getFulfillmentProcessByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[FulfillmentProcess]**](FulfillmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessById"></a>
# **getFulfillmentProcessById**
> FulfillmentProcess getFulfillmentProcessById(fulfillmentProcessId)

Get a fulfillmentProcess by id

Returns the fulfillmentProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFulfillmentProcessById(fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to be returned. | 

### Return type

[**FulfillmentProcess**](FulfillmentProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessFiles"></a>
# **getFulfillmentProcessFiles**
> getFulfillmentProcessFiles(fulfillmentProcessId)

Get the files for a fulfillmentProcess.

Get all existing fulfillmentProcess files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFulfillmentProcessFiles(fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessTags"></a>
# **getFulfillmentProcessTags**
> getFulfillmentProcessTags(fulfillmentProcessId)

Get the tags for a fulfillmentProcess.

Get all existing fulfillmentProcess tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var fulfillmentProcessId = 56; // Number | Id of the fulfillmentProcess to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFulfillmentProcessTags(fulfillmentProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessId** | **Number**| Id of the fulfillmentProcess to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateFulfillmentProcessCustomFields"></a>
# **updateFulfillmentProcessCustomFields**
> updateFulfillmentProcessCustomFields(body)

Update a fulfillmentProcess custom fields

Updates an existing fulfillmentProcess custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessApi();

var body = new infoplus.FulfillmentProcess(); // FulfillmentProcess | FulfillmentProcess to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFulfillmentProcessCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FulfillmentProcess**](FulfillmentProcess.md)| FulfillmentProcess to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

