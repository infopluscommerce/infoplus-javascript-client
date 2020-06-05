# infoplus.CartonActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartonActivity**](CartonActivityApi.md#addCartonActivity) | **POST** /beta/cartonActivity | Create a cartonActivity
[**addCartonActivityAudit**](CartonActivityApi.md#addCartonActivityAudit) | **PUT** /beta/cartonActivity/{cartonActivityId}/audit/{cartonActivityAudit} | Add new audit for a cartonActivity
[**addCartonActivityFile**](CartonActivityApi.md#addCartonActivityFile) | **POST** /beta/cartonActivity/{cartonActivityId}/file/{fileName} | Attach a file to a cartonActivity
[**addCartonActivityFileByURL**](CartonActivityApi.md#addCartonActivityFileByURL) | **POST** /beta/cartonActivity/{cartonActivityId}/file | Attach a file to a cartonActivity by URL.
[**addCartonActivityTag**](CartonActivityApi.md#addCartonActivityTag) | **PUT** /beta/cartonActivity/{cartonActivityId}/tag/{cartonActivityTag} | Add new tags for a cartonActivity.
[**deleteCartonActivity**](CartonActivityApi.md#deleteCartonActivity) | **DELETE** /beta/cartonActivity/{cartonActivityId} | Delete a cartonActivity
[**deleteCartonActivityFile**](CartonActivityApi.md#deleteCartonActivityFile) | **DELETE** /beta/cartonActivity/{cartonActivityId}/file/{fileId} | Delete a file for a cartonActivity.
[**deleteCartonActivityTag**](CartonActivityApi.md#deleteCartonActivityTag) | **DELETE** /beta/cartonActivity/{cartonActivityId}/tag/{cartonActivityTag} | Delete a tag for a cartonActivity.
[**getCartonActivityByFilter**](CartonActivityApi.md#getCartonActivityByFilter) | **GET** /beta/cartonActivity/search | Search cartonActivitys by filter
[**getCartonActivityById**](CartonActivityApi.md#getCartonActivityById) | **GET** /beta/cartonActivity/{cartonActivityId} | Get a cartonActivity by id
[**getCartonActivityFiles**](CartonActivityApi.md#getCartonActivityFiles) | **GET** /beta/cartonActivity/{cartonActivityId}/file | Get the files for a cartonActivity.
[**getCartonActivityTags**](CartonActivityApi.md#getCartonActivityTags) | **GET** /beta/cartonActivity/{cartonActivityId}/tag | Get the tags for a cartonActivity.
[**getDuplicateCartonActivityById**](CartonActivityApi.md#getDuplicateCartonActivityById) | **GET** /beta/cartonActivity/duplicate/{cartonActivityId} | Get a duplicated a cartonActivity by id
[**updateCartonActivity**](CartonActivityApi.md#updateCartonActivity) | **PUT** /beta/cartonActivity | Update a cartonActivity


<a name="addCartonActivity"></a>
# **addCartonActivity**
> CartonActivity addCartonActivity(body)

Create a cartonActivity

Inserts a new cartonActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var body = new infoplus.CartonActivity(); // CartonActivity | CartonActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCartonActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonActivity**](CartonActivity.md)| CartonActivity to be inserted. | 

### Return type

[**CartonActivity**](CartonActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonActivityAudit"></a>
# **addCartonActivityAudit**
> addCartonActivityAudit(cartonActivityId, cartonActivityAudit)

Add new audit for a cartonActivity

Adds an audit to an existing cartonActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to add an audit to

var cartonActivityAudit = "cartonActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonActivityAudit(cartonActivityId, cartonActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to add an audit to | 
 **cartonActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonActivityFile"></a>
# **addCartonActivityFile**
> addCartonActivityFile(cartonActivityId, fileName)

Attach a file to a cartonActivity

Adds a file to an existing cartonActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonActivityFile(cartonActivityId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCartonActivityFileByURL"></a>
# **addCartonActivityFileByURL**
> addCartonActivityFileByURL(body, cartonActivityId)

Attach a file to a cartonActivity by URL.

Adds a file to an existing cartonActivity by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var cartonActivityId = 56; // Number | Id of the cartonActivity to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonActivityFileByURL(body, cartonActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **cartonActivityId** | **Number**| Id of the cartonActivity to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonActivityTag"></a>
# **addCartonActivityTag**
> addCartonActivityTag(cartonActivityId, cartonActivityTag)

Add new tags for a cartonActivity.

Adds a tag to an existing cartonActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to add a tag to

var cartonActivityTag = "cartonActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonActivityTag(cartonActivityId, cartonActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to add a tag to | 
 **cartonActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartonActivity"></a>
# **deleteCartonActivity**
> deleteCartonActivity(cartonActivityId)

Delete a cartonActivity

Deletes the cartonActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonActivity(cartonActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonActivityFile"></a>
# **deleteCartonActivityFile**
> deleteCartonActivityFile(cartonActivityId, fileId)

Delete a file for a cartonActivity.

Deletes an existing cartonActivity file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonActivityFile(cartonActivityId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonActivityTag"></a>
# **deleteCartonActivityTag**
> deleteCartonActivityTag(cartonActivityId, cartonActivityTag)

Delete a tag for a cartonActivity.

Deletes an existing cartonActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to remove tag from

var cartonActivityTag = "cartonActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonActivityTag(cartonActivityId, cartonActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to remove tag from | 
 **cartonActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonActivityByFilter"></a>
# **getCartonActivityByFilter**
> [CartonActivity] getCartonActivityByFilter(opts)

Search cartonActivitys by filter

Returns the list of cartonActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

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
apiInstance.getCartonActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CartonActivity]**](CartonActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonActivityById"></a>
# **getCartonActivityById**
> CartonActivity getCartonActivityById(cartonActivityId)

Get a cartonActivity by id

Returns the cartonActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCartonActivityById(cartonActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to be returned. | 

### Return type

[**CartonActivity**](CartonActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonActivityFiles"></a>
# **getCartonActivityFiles**
> getCartonActivityFiles(cartonActivityId)

Get the files for a cartonActivity.

Get all existing cartonActivity files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartonActivityFiles(cartonActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonActivityTags"></a>
# **getCartonActivityTags**
> getCartonActivityTags(cartonActivityId)

Get the tags for a cartonActivity.

Get all existing cartonActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartonActivityTags(cartonActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCartonActivityById"></a>
# **getDuplicateCartonActivityById**
> CartonActivity getDuplicateCartonActivityById(cartonActivityId)

Get a duplicated a cartonActivity by id

Returns a duplicated cartonActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var cartonActivityId = 56; // Number | Id of the cartonActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCartonActivityById(cartonActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonActivityId** | **Number**| Id of the cartonActivity to be duplicated. | 

### Return type

[**CartonActivity**](CartonActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCartonActivity"></a>
# **updateCartonActivity**
> updateCartonActivity(body)

Update a cartonActivity

Updates an existing cartonActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonActivityApi();

var body = new infoplus.CartonActivity(); // CartonActivity | CartonActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCartonActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonActivity**](CartonActivity.md)| CartonActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

