# infoplus.StandardBusinessDaysApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStandardBusinessDays**](StandardBusinessDaysApi.md#addStandardBusinessDays) | **POST** /beta/standardBusinessDays | Create a standardBusinessDays
[**addStandardBusinessDaysAudit**](StandardBusinessDaysApi.md#addStandardBusinessDaysAudit) | **PUT** /beta/standardBusinessDays/{standardBusinessDaysId}/audit/{standardBusinessDaysAudit} | Add new audit for a standardBusinessDays
[**addStandardBusinessDaysFile**](StandardBusinessDaysApi.md#addStandardBusinessDaysFile) | **POST** /beta/standardBusinessDays/{standardBusinessDaysId}/file/{fileName} | Attach a file to a standardBusinessDays
[**addStandardBusinessDaysTag**](StandardBusinessDaysApi.md#addStandardBusinessDaysTag) | **PUT** /beta/standardBusinessDays/{standardBusinessDaysId}/tag/{standardBusinessDaysTag} | Add new tags for a standardBusinessDays.
[**deleteStandardBusinessDays**](StandardBusinessDaysApi.md#deleteStandardBusinessDays) | **DELETE** /beta/standardBusinessDays/{standardBusinessDaysId} | Delete a standardBusinessDays
[**deleteStandardBusinessDaysTag**](StandardBusinessDaysApi.md#deleteStandardBusinessDaysTag) | **DELETE** /beta/standardBusinessDays/{standardBusinessDaysId}/tag/{standardBusinessDaysTag} | Delete a tag for a standardBusinessDays.
[**getDuplicateStandardBusinessDaysById**](StandardBusinessDaysApi.md#getDuplicateStandardBusinessDaysById) | **GET** /beta/standardBusinessDays/duplicate/{standardBusinessDaysId} | Get a duplicated a standardBusinessDays by id
[**getStandardBusinessDaysByFilter**](StandardBusinessDaysApi.md#getStandardBusinessDaysByFilter) | **GET** /beta/standardBusinessDays/search | Search standardBusinessDayses by filter
[**getStandardBusinessDaysById**](StandardBusinessDaysApi.md#getStandardBusinessDaysById) | **GET** /beta/standardBusinessDays/{standardBusinessDaysId} | Get a standardBusinessDays by id
[**getStandardBusinessDaysTags**](StandardBusinessDaysApi.md#getStandardBusinessDaysTags) | **GET** /beta/standardBusinessDays/{standardBusinessDaysId}/tag | Get the tags for a standardBusinessDays.
[**updateStandardBusinessDays**](StandardBusinessDaysApi.md#updateStandardBusinessDays) | **PUT** /beta/standardBusinessDays | Update a standardBusinessDays


<a name="addStandardBusinessDays"></a>
# **addStandardBusinessDays**
> StandardBusinessDays addStandardBusinessDays(body)

Create a standardBusinessDays

Inserts a new standardBusinessDays using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var body = new infoplus.StandardBusinessDays(); // StandardBusinessDays | StandardBusinessDays to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addStandardBusinessDays(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StandardBusinessDays**](StandardBusinessDays.md)| StandardBusinessDays to be inserted. | 

### Return type

[**StandardBusinessDays**](StandardBusinessDays.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addStandardBusinessDaysAudit"></a>
# **addStandardBusinessDaysAudit**
> addStandardBusinessDaysAudit(standardBusinessDaysId, standardBusinessDaysAudit)

Add new audit for a standardBusinessDays

Adds an audit to an existing standardBusinessDays.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to add an audit to

var standardBusinessDaysAudit = "standardBusinessDaysAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addStandardBusinessDaysAudit(standardBusinessDaysId, standardBusinessDaysAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to add an audit to | 
 **standardBusinessDaysAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addStandardBusinessDaysFile"></a>
# **addStandardBusinessDaysFile**
> addStandardBusinessDaysFile(standardBusinessDaysId, fileName)

Attach a file to a standardBusinessDays

Adds a file to an existing standardBusinessDays.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addStandardBusinessDaysFile(standardBusinessDaysId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addStandardBusinessDaysTag"></a>
# **addStandardBusinessDaysTag**
> addStandardBusinessDaysTag(standardBusinessDaysId, standardBusinessDaysTag)

Add new tags for a standardBusinessDays.

Adds a tag to an existing standardBusinessDays.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to add a tag to

var standardBusinessDaysTag = "standardBusinessDaysTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addStandardBusinessDaysTag(standardBusinessDaysId, standardBusinessDaysTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to add a tag to | 
 **standardBusinessDaysTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteStandardBusinessDays"></a>
# **deleteStandardBusinessDays**
> deleteStandardBusinessDays(standardBusinessDaysId)

Delete a standardBusinessDays

Deletes the standardBusinessDays identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteStandardBusinessDays(standardBusinessDaysId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteStandardBusinessDaysTag"></a>
# **deleteStandardBusinessDaysTag**
> deleteStandardBusinessDaysTag(standardBusinessDaysId, standardBusinessDaysTag)

Delete a tag for a standardBusinessDays.

Deletes an existing standardBusinessDays tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to remove tag from

var standardBusinessDaysTag = "standardBusinessDaysTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteStandardBusinessDaysTag(standardBusinessDaysId, standardBusinessDaysTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to remove tag from | 
 **standardBusinessDaysTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateStandardBusinessDaysById"></a>
# **getDuplicateStandardBusinessDaysById**
> StandardBusinessDays getDuplicateStandardBusinessDaysById(standardBusinessDaysId)

Get a duplicated a standardBusinessDays by id

Returns a duplicated standardBusinessDays identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateStandardBusinessDaysById(standardBusinessDaysId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to be duplicated. | 

### Return type

[**StandardBusinessDays**](StandardBusinessDays.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStandardBusinessDaysByFilter"></a>
# **getStandardBusinessDaysByFilter**
> [StandardBusinessDays] getStandardBusinessDaysByFilter(opts)

Search standardBusinessDayses by filter

Returns the list of standardBusinessDayses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

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
apiInstance.getStandardBusinessDaysByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[StandardBusinessDays]**](StandardBusinessDays.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStandardBusinessDaysById"></a>
# **getStandardBusinessDaysById**
> StandardBusinessDays getStandardBusinessDaysById(standardBusinessDaysId)

Get a standardBusinessDays by id

Returns the standardBusinessDays identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStandardBusinessDaysById(standardBusinessDaysId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to be returned. | 

### Return type

[**StandardBusinessDays**](StandardBusinessDays.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStandardBusinessDaysTags"></a>
# **getStandardBusinessDaysTags**
> getStandardBusinessDaysTags(standardBusinessDaysId)

Get the tags for a standardBusinessDays.

Get all existing standardBusinessDays tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var standardBusinessDaysId = 56; // Number | Id of the standardBusinessDays to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getStandardBusinessDaysTags(standardBusinessDaysId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standardBusinessDaysId** | **Number**| Id of the standardBusinessDays to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateStandardBusinessDays"></a>
# **updateStandardBusinessDays**
> updateStandardBusinessDays(body)

Update a standardBusinessDays

Updates an existing standardBusinessDays using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.StandardBusinessDaysApi();

var body = new infoplus.StandardBusinessDays(); // StandardBusinessDays | StandardBusinessDays to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateStandardBusinessDays(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StandardBusinessDays**](StandardBusinessDays.md)| StandardBusinessDays to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

