# infoplus.PickFaceAssignmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPickFaceAssignment**](PickFaceAssignmentApi.md#addPickFaceAssignment) | **POST** /v3.0/pickFaceAssignment | Create a pickFaceAssignment
[**addPickFaceAssignmentAudit**](PickFaceAssignmentApi.md#addPickFaceAssignmentAudit) | **PUT** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/audit/{pickFaceAssignmentAudit} | Add new audit for a pickFaceAssignment
[**addPickFaceAssignmentFile**](PickFaceAssignmentApi.md#addPickFaceAssignmentFile) | **POST** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/file/{fileName} | Attach a file to a pickFaceAssignment
[**addPickFaceAssignmentFileByURL**](PickFaceAssignmentApi.md#addPickFaceAssignmentFileByURL) | **POST** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/file | Attach a file to a pickFaceAssignment by URL.
[**addPickFaceAssignmentTag**](PickFaceAssignmentApi.md#addPickFaceAssignmentTag) | **PUT** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/tag/{pickFaceAssignmentTag} | Add new tags for a pickFaceAssignment.
[**deletePickFaceAssignment**](PickFaceAssignmentApi.md#deletePickFaceAssignment) | **DELETE** /v3.0/pickFaceAssignment/{pickFaceAssignmentId} | Delete a pickFaceAssignment
[**deletePickFaceAssignmentFile**](PickFaceAssignmentApi.md#deletePickFaceAssignmentFile) | **DELETE** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/file/{fileId} | Delete a file for a pickFaceAssignment.
[**deletePickFaceAssignmentTag**](PickFaceAssignmentApi.md#deletePickFaceAssignmentTag) | **DELETE** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/tag/{pickFaceAssignmentTag} | Delete a tag for a pickFaceAssignment.
[**getDuplicatePickFaceAssignmentById**](PickFaceAssignmentApi.md#getDuplicatePickFaceAssignmentById) | **GET** /v3.0/pickFaceAssignment/duplicate/{pickFaceAssignmentId} | Get a duplicated a pickFaceAssignment by id
[**getPickFaceAssignmentByFilter**](PickFaceAssignmentApi.md#getPickFaceAssignmentByFilter) | **GET** /v3.0/pickFaceAssignment/search | Search pickFaceAssignments by filter
[**getPickFaceAssignmentById**](PickFaceAssignmentApi.md#getPickFaceAssignmentById) | **GET** /v3.0/pickFaceAssignment/{pickFaceAssignmentId} | Get a pickFaceAssignment by id
[**getPickFaceAssignmentFiles**](PickFaceAssignmentApi.md#getPickFaceAssignmentFiles) | **GET** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/file | Get the files for a pickFaceAssignment.
[**getPickFaceAssignmentTags**](PickFaceAssignmentApi.md#getPickFaceAssignmentTags) | **GET** /v3.0/pickFaceAssignment/{pickFaceAssignmentId}/tag | Get the tags for a pickFaceAssignment.
[**updatePickFaceAssignment**](PickFaceAssignmentApi.md#updatePickFaceAssignment) | **PUT** /v3.0/pickFaceAssignment | Update a pickFaceAssignment
[**updatePickFaceAssignmentCustomFields**](PickFaceAssignmentApi.md#updatePickFaceAssignmentCustomFields) | **PUT** /v3.0/pickFaceAssignment/customFields | Update a pickFaceAssignment custom fields


<a name="addPickFaceAssignment"></a>
# **addPickFaceAssignment**
> PickFaceAssignment addPickFaceAssignment(body)

Create a pickFaceAssignment

Inserts a new pickFaceAssignment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var body = new infoplus.PickFaceAssignment(); // PickFaceAssignment | PickFaceAssignment to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPickFaceAssignment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PickFaceAssignment**](PickFaceAssignment.md)| PickFaceAssignment to be inserted. | 

### Return type

[**PickFaceAssignment**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPickFaceAssignmentAudit"></a>
# **addPickFaceAssignmentAudit**
> addPickFaceAssignmentAudit(pickFaceAssignmentId, pickFaceAssignmentAudit)

Add new audit for a pickFaceAssignment

Adds an audit to an existing pickFaceAssignment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to add an audit to

var pickFaceAssignmentAudit = "pickFaceAssignmentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPickFaceAssignmentAudit(pickFaceAssignmentId, pickFaceAssignmentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to add an audit to | 
 **pickFaceAssignmentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPickFaceAssignmentFile"></a>
# **addPickFaceAssignmentFile**
> addPickFaceAssignmentFile(pickFaceAssignmentId, fileName)

Attach a file to a pickFaceAssignment

Adds a file to an existing pickFaceAssignment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPickFaceAssignmentFile(pickFaceAssignmentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addPickFaceAssignmentFileByURL"></a>
# **addPickFaceAssignmentFileByURL**
> addPickFaceAssignmentFileByURL(body, pickFaceAssignmentId)

Attach a file to a pickFaceAssignment by URL.

Adds a file to an existing pickFaceAssignment by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPickFaceAssignmentFileByURL(body, pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPickFaceAssignmentTag"></a>
# **addPickFaceAssignmentTag**
> addPickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag)

Add new tags for a pickFaceAssignment.

Adds a tag to an existing pickFaceAssignment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to add a tag to

var pickFaceAssignmentTag = "pickFaceAssignmentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to add a tag to | 
 **pickFaceAssignmentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePickFaceAssignment"></a>
# **deletePickFaceAssignment**
> deletePickFaceAssignment(pickFaceAssignmentId)

Delete a pickFaceAssignment

Deletes the pickFaceAssignment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePickFaceAssignment(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePickFaceAssignmentFile"></a>
# **deletePickFaceAssignmentFile**
> deletePickFaceAssignmentFile(pickFaceAssignmentId, fileId)

Delete a file for a pickFaceAssignment.

Deletes an existing pickFaceAssignment file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePickFaceAssignmentFile(pickFaceAssignmentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePickFaceAssignmentTag"></a>
# **deletePickFaceAssignmentTag**
> deletePickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag)

Delete a tag for a pickFaceAssignment.

Deletes an existing pickFaceAssignment tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to remove tag from

var pickFaceAssignmentTag = "pickFaceAssignmentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePickFaceAssignmentTag(pickFaceAssignmentId, pickFaceAssignmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to remove tag from | 
 **pickFaceAssignmentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicatePickFaceAssignmentById"></a>
# **getDuplicatePickFaceAssignmentById**
> PickFaceAssignment getDuplicatePickFaceAssignmentById(pickFaceAssignmentId)

Get a duplicated a pickFaceAssignment by id

Returns a duplicated pickFaceAssignment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicatePickFaceAssignmentById(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to be duplicated. | 

### Return type

[**PickFaceAssignment**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPickFaceAssignmentByFilter"></a>
# **getPickFaceAssignmentByFilter**
> [PickFaceAssignment] getPickFaceAssignmentByFilter(opts)

Search pickFaceAssignments by filter

Returns the list of pickFaceAssignments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

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
apiInstance.getPickFaceAssignmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[PickFaceAssignment]**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPickFaceAssignmentById"></a>
# **getPickFaceAssignmentById**
> PickFaceAssignment getPickFaceAssignmentById(pickFaceAssignmentId)

Get a pickFaceAssignment by id

Returns the pickFaceAssignment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPickFaceAssignmentById(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to be returned. | 

### Return type

[**PickFaceAssignment**](PickFaceAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPickFaceAssignmentFiles"></a>
# **getPickFaceAssignmentFiles**
> getPickFaceAssignmentFiles(pickFaceAssignmentId)

Get the files for a pickFaceAssignment.

Get all existing pickFaceAssignment files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPickFaceAssignmentFiles(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPickFaceAssignmentTags"></a>
# **getPickFaceAssignmentTags**
> getPickFaceAssignmentTags(pickFaceAssignmentId)

Get the tags for a pickFaceAssignment.

Get all existing pickFaceAssignment tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var pickFaceAssignmentId = 56; // Number | Id of the pickFaceAssignment to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPickFaceAssignmentTags(pickFaceAssignmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickFaceAssignmentId** | **Number**| Id of the pickFaceAssignment to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePickFaceAssignment"></a>
# **updatePickFaceAssignment**
> updatePickFaceAssignment(body)

Update a pickFaceAssignment

Updates an existing pickFaceAssignment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var body = new infoplus.PickFaceAssignment(); // PickFaceAssignment | PickFaceAssignment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePickFaceAssignment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PickFaceAssignment**](PickFaceAssignment.md)| PickFaceAssignment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePickFaceAssignmentCustomFields"></a>
# **updatePickFaceAssignmentCustomFields**
> updatePickFaceAssignmentCustomFields(body)

Update a pickFaceAssignment custom fields

Updates an existing pickFaceAssignment custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PickFaceAssignmentApi();

var body = new infoplus.PickFaceAssignment(); // PickFaceAssignment | PickFaceAssignment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePickFaceAssignmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PickFaceAssignment**](PickFaceAssignment.md)| PickFaceAssignment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

