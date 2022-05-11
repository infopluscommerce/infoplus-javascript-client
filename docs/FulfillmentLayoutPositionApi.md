# infoplus.FulfillmentLayoutPositionApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFulfillmentLayoutPositionAudit**](FulfillmentLayoutPositionApi.md#addFulfillmentLayoutPositionAudit) | **PUT** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/audit/{fulfillmentLayoutPositionAudit} | Add new audit for a fulfillmentLayoutPosition
[**addFulfillmentLayoutPositionFile**](FulfillmentLayoutPositionApi.md#addFulfillmentLayoutPositionFile) | **POST** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/file/{fileName} | Attach a file to a fulfillmentLayoutPosition
[**addFulfillmentLayoutPositionFileByURL**](FulfillmentLayoutPositionApi.md#addFulfillmentLayoutPositionFileByURL) | **POST** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/file | Attach a file to a fulfillmentLayoutPosition by URL.
[**addFulfillmentLayoutPositionTag**](FulfillmentLayoutPositionApi.md#addFulfillmentLayoutPositionTag) | **PUT** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/tag/{fulfillmentLayoutPositionTag} | Add new tags for a fulfillmentLayoutPosition.
[**deleteFulfillmentLayoutPositionFile**](FulfillmentLayoutPositionApi.md#deleteFulfillmentLayoutPositionFile) | **DELETE** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/file/{fileId} | Delete a file for a fulfillmentLayoutPosition.
[**deleteFulfillmentLayoutPositionTag**](FulfillmentLayoutPositionApi.md#deleteFulfillmentLayoutPositionTag) | **DELETE** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/tag/{fulfillmentLayoutPositionTag} | Delete a tag for a fulfillmentLayoutPosition.
[**getDuplicateFulfillmentLayoutPositionById**](FulfillmentLayoutPositionApi.md#getDuplicateFulfillmentLayoutPositionById) | **GET** /v3.0/fulfillmentLayoutPosition/duplicate/{fulfillmentLayoutPositionId} | Get a duplicated a fulfillmentLayoutPosition by id
[**getFulfillmentLayoutPositionByFilter**](FulfillmentLayoutPositionApi.md#getFulfillmentLayoutPositionByFilter) | **GET** /v3.0/fulfillmentLayoutPosition/search | Search fulfillmentLayoutPositions by filter
[**getFulfillmentLayoutPositionById**](FulfillmentLayoutPositionApi.md#getFulfillmentLayoutPositionById) | **GET** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId} | Get a fulfillmentLayoutPosition by id
[**getFulfillmentLayoutPositionFiles**](FulfillmentLayoutPositionApi.md#getFulfillmentLayoutPositionFiles) | **GET** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/file | Get the files for a fulfillmentLayoutPosition.
[**getFulfillmentLayoutPositionTags**](FulfillmentLayoutPositionApi.md#getFulfillmentLayoutPositionTags) | **GET** /v3.0/fulfillmentLayoutPosition/{fulfillmentLayoutPositionId}/tag | Get the tags for a fulfillmentLayoutPosition.


<a name="addFulfillmentLayoutPositionAudit"></a>
# **addFulfillmentLayoutPositionAudit**
> addFulfillmentLayoutPositionAudit(fulfillmentLayoutPositionId, fulfillmentLayoutPositionAudit)

Add new audit for a fulfillmentLayoutPosition

Adds an audit to an existing fulfillmentLayoutPosition.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to add an audit to

var fulfillmentLayoutPositionAudit = "fulfillmentLayoutPositionAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentLayoutPositionAudit(fulfillmentLayoutPositionId, fulfillmentLayoutPositionAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to add an audit to | 
 **fulfillmentLayoutPositionAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFulfillmentLayoutPositionFile"></a>
# **addFulfillmentLayoutPositionFile**
> addFulfillmentLayoutPositionFile(fulfillmentLayoutPositionId, fileName)

Attach a file to a fulfillmentLayoutPosition

Adds a file to an existing fulfillmentLayoutPosition.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentLayoutPositionFile(fulfillmentLayoutPositionId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addFulfillmentLayoutPositionFileByURL"></a>
# **addFulfillmentLayoutPositionFileByURL**
> addFulfillmentLayoutPositionFileByURL(body, fulfillmentLayoutPositionId)

Attach a file to a fulfillmentLayoutPosition by URL.

Adds a file to an existing fulfillmentLayoutPosition by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentLayoutPositionFileByURL(body, fulfillmentLayoutPositionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFulfillmentLayoutPositionTag"></a>
# **addFulfillmentLayoutPositionTag**
> addFulfillmentLayoutPositionTag(fulfillmentLayoutPositionId, fulfillmentLayoutPositionTag)

Add new tags for a fulfillmentLayoutPosition.

Adds a tag to an existing fulfillmentLayoutPosition.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to add a tag to

var fulfillmentLayoutPositionTag = "fulfillmentLayoutPositionTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFulfillmentLayoutPositionTag(fulfillmentLayoutPositionId, fulfillmentLayoutPositionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to add a tag to | 
 **fulfillmentLayoutPositionTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFulfillmentLayoutPositionFile"></a>
# **deleteFulfillmentLayoutPositionFile**
> deleteFulfillmentLayoutPositionFile(fulfillmentLayoutPositionId, fileId)

Delete a file for a fulfillmentLayoutPosition.

Deletes an existing fulfillmentLayoutPosition file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFulfillmentLayoutPositionFile(fulfillmentLayoutPositionId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteFulfillmentLayoutPositionTag"></a>
# **deleteFulfillmentLayoutPositionTag**
> deleteFulfillmentLayoutPositionTag(fulfillmentLayoutPositionId, fulfillmentLayoutPositionTag)

Delete a tag for a fulfillmentLayoutPosition.

Deletes an existing fulfillmentLayoutPosition tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to remove tag from

var fulfillmentLayoutPositionTag = "fulfillmentLayoutPositionTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFulfillmentLayoutPositionTag(fulfillmentLayoutPositionId, fulfillmentLayoutPositionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to remove tag from | 
 **fulfillmentLayoutPositionTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateFulfillmentLayoutPositionById"></a>
# **getDuplicateFulfillmentLayoutPositionById**
> FulfillmentLayoutPosition getDuplicateFulfillmentLayoutPositionById(fulfillmentLayoutPositionId)

Get a duplicated a fulfillmentLayoutPosition by id

Returns a duplicated fulfillmentLayoutPosition identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateFulfillmentLayoutPositionById(fulfillmentLayoutPositionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to be duplicated. | 

### Return type

[**FulfillmentLayoutPosition**](FulfillmentLayoutPosition.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentLayoutPositionByFilter"></a>
# **getFulfillmentLayoutPositionByFilter**
> [FulfillmentLayoutPosition] getFulfillmentLayoutPositionByFilter(opts)

Search fulfillmentLayoutPositions by filter

Returns the list of fulfillmentLayoutPositions that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

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
apiInstance.getFulfillmentLayoutPositionByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[FulfillmentLayoutPosition]**](FulfillmentLayoutPosition.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentLayoutPositionById"></a>
# **getFulfillmentLayoutPositionById**
> FulfillmentLayoutPosition getFulfillmentLayoutPositionById(fulfillmentLayoutPositionId)

Get a fulfillmentLayoutPosition by id

Returns the fulfillmentLayoutPosition identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFulfillmentLayoutPositionById(fulfillmentLayoutPositionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to be returned. | 

### Return type

[**FulfillmentLayoutPosition**](FulfillmentLayoutPosition.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentLayoutPositionFiles"></a>
# **getFulfillmentLayoutPositionFiles**
> getFulfillmentLayoutPositionFiles(fulfillmentLayoutPositionId)

Get the files for a fulfillmentLayoutPosition.

Get all existing fulfillmentLayoutPosition files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFulfillmentLayoutPositionFiles(fulfillmentLayoutPositionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentLayoutPositionTags"></a>
# **getFulfillmentLayoutPositionTags**
> getFulfillmentLayoutPositionTags(fulfillmentLayoutPositionId)

Get the tags for a fulfillmentLayoutPosition.

Get all existing fulfillmentLayoutPosition tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentLayoutPositionApi();

var fulfillmentLayoutPositionId = 56; // Number | Id of the fulfillmentLayoutPosition to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFulfillmentLayoutPositionTags(fulfillmentLayoutPositionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentLayoutPositionId** | **Number**| Id of the fulfillmentLayoutPosition to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

