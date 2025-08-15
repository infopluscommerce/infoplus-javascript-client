# infoplus.DropshipApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDropshipAudit**](DropshipApi.md#addDropshipAudit) | **PUT** /beta/dropship/{dropshipId}/audit/{dropshipAudit} | Add new audit for a dropship
[**addDropshipFile**](DropshipApi.md#addDropshipFile) | **POST** /beta/dropship/{dropshipId}/file/{fileName} | Attach a file to a dropship
[**addDropshipFileByURL**](DropshipApi.md#addDropshipFileByURL) | **POST** /beta/dropship/{dropshipId}/file | Attach a file to a dropship by URL.
[**addDropshipTag**](DropshipApi.md#addDropshipTag) | **PUT** /beta/dropship/{dropshipId}/tag/{dropshipTag} | Add new tags for a dropship.
[**deleteDropshipFile**](DropshipApi.md#deleteDropshipFile) | **DELETE** /beta/dropship/{dropshipId}/file/{fileId} | Delete a file for a dropship.
[**deleteDropshipTag**](DropshipApi.md#deleteDropshipTag) | **DELETE** /beta/dropship/{dropshipId}/tag/{dropshipTag} | Delete a tag for a dropship.
[**getDropshipByFilter**](DropshipApi.md#getDropshipByFilter) | **GET** /beta/dropship/search | Search dropships by filter
[**getDropshipById**](DropshipApi.md#getDropshipById) | **GET** /beta/dropship/{dropshipId} | Get a dropship by id
[**getDropshipFiles**](DropshipApi.md#getDropshipFiles) | **GET** /beta/dropship/{dropshipId}/file | Get the files for a dropship.
[**getDropshipTags**](DropshipApi.md#getDropshipTags) | **GET** /beta/dropship/{dropshipId}/tag | Get the tags for a dropship.
[**getDuplicateDropshipById**](DropshipApi.md#getDuplicateDropshipById) | **GET** /beta/dropship/duplicate/{dropshipId} | Get a duplicated a dropship by id
[**updateDropship**](DropshipApi.md#updateDropship) | **PUT** /beta/dropship | Update a dropship


<a name="addDropshipAudit"></a>
# **addDropshipAudit**
> addDropshipAudit(dropshipId, dropshipAudit)

Add new audit for a dropship

Adds an audit to an existing dropship.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to add an audit to

var dropshipAudit = "dropshipAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDropshipAudit(dropshipId, dropshipAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to add an audit to | 
 **dropshipAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDropshipFile"></a>
# **addDropshipFile**
> addDropshipFile(dropshipId, fileName)

Attach a file to a dropship

Adds a file to an existing dropship.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDropshipFile(dropshipId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addDropshipFileByURL"></a>
# **addDropshipFileByURL**
> addDropshipFileByURL(body, dropshipId)

Attach a file to a dropship by URL.

Adds a file to an existing dropship by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var dropshipId = 56; // Number | Id of the dropship to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDropshipFileByURL(body, dropshipId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **dropshipId** | **Number**| Id of the dropship to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDropshipTag"></a>
# **addDropshipTag**
> addDropshipTag(dropshipId, dropshipTag)

Add new tags for a dropship.

Adds a tag to an existing dropship.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to add a tag to

var dropshipTag = "dropshipTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDropshipTag(dropshipId, dropshipTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to add a tag to | 
 **dropshipTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDropshipFile"></a>
# **deleteDropshipFile**
> deleteDropshipFile(dropshipId, fileId)

Delete a file for a dropship.

Deletes an existing dropship file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDropshipFile(dropshipId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDropshipTag"></a>
# **deleteDropshipTag**
> deleteDropshipTag(dropshipId, dropshipTag)

Delete a tag for a dropship.

Deletes an existing dropship tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to remove tag from

var dropshipTag = "dropshipTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDropshipTag(dropshipId, dropshipTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to remove tag from | 
 **dropshipTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDropshipByFilter"></a>
# **getDropshipByFilter**
> [Dropship] getDropshipByFilter(opts)

Search dropships by filter

Returns the list of dropships that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

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
apiInstance.getDropshipByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Dropship]**](Dropship.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDropshipById"></a>
# **getDropshipById**
> Dropship getDropshipById(dropshipId)

Get a dropship by id

Returns the dropship identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDropshipById(dropshipId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to be returned. | 

### Return type

[**Dropship**](Dropship.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDropshipFiles"></a>
# **getDropshipFiles**
> getDropshipFiles(dropshipId)

Get the files for a dropship.

Get all existing dropship files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDropshipFiles(dropshipId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDropshipTags"></a>
# **getDropshipTags**
> getDropshipTags(dropshipId)

Get the tags for a dropship.

Get all existing dropship tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDropshipTags(dropshipId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateDropshipById"></a>
# **getDuplicateDropshipById**
> Dropship getDuplicateDropshipById(dropshipId)

Get a duplicated a dropship by id

Returns a duplicated dropship identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var dropshipId = 56; // Number | Id of the dropship to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateDropshipById(dropshipId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropshipId** | **Number**| Id of the dropship to be duplicated. | 

### Return type

[**Dropship**](Dropship.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDropship"></a>
# **updateDropship**
> updateDropship(body)

Update a dropship

Updates an existing dropship using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DropshipApi();

var body = new infoplus.Dropship(); // Dropship | Dropship to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateDropship(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Dropship**](Dropship.md)| Dropship to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

