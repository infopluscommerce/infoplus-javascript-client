# infoplus.EdiDocumentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEdiDocument**](EdiDocumentApi.md#addEdiDocument) | **POST** /v3.0/ediDocument | Create an ediDocument
[**addEdiDocumentAudit**](EdiDocumentApi.md#addEdiDocumentAudit) | **PUT** /v3.0/ediDocument/{ediDocumentId}/audit/{ediDocumentAudit} | Add new audit for an ediDocument
[**addEdiDocumentFile**](EdiDocumentApi.md#addEdiDocumentFile) | **POST** /v3.0/ediDocument/{ediDocumentId}/file/{fileName} | Attach a file to an ediDocument
[**addEdiDocumentFileByURL**](EdiDocumentApi.md#addEdiDocumentFileByURL) | **POST** /v3.0/ediDocument/{ediDocumentId}/file | Attach a file to an ediDocument by URL.
[**addEdiDocumentTag**](EdiDocumentApi.md#addEdiDocumentTag) | **PUT** /v3.0/ediDocument/{ediDocumentId}/tag/{ediDocumentTag} | Add new tags for an ediDocument.
[**deleteEdiDocumentFile**](EdiDocumentApi.md#deleteEdiDocumentFile) | **DELETE** /v3.0/ediDocument/{ediDocumentId}/file/{fileId} | Delete a file for an ediDocument.
[**deleteEdiDocumentTag**](EdiDocumentApi.md#deleteEdiDocumentTag) | **DELETE** /v3.0/ediDocument/{ediDocumentId}/tag/{ediDocumentTag} | Delete a tag for an ediDocument.
[**getDuplicateEdiDocumentById**](EdiDocumentApi.md#getDuplicateEdiDocumentById) | **GET** /v3.0/ediDocument/duplicate/{ediDocumentId} | Get a duplicated an ediDocument by id
[**getEdiDocumentByFilter**](EdiDocumentApi.md#getEdiDocumentByFilter) | **GET** /v3.0/ediDocument/search | Search ediDocuments by filter
[**getEdiDocumentById**](EdiDocumentApi.md#getEdiDocumentById) | **GET** /v3.0/ediDocument/{ediDocumentId} | Get an ediDocument by id
[**getEdiDocumentFiles**](EdiDocumentApi.md#getEdiDocumentFiles) | **GET** /v3.0/ediDocument/{ediDocumentId}/file | Get the files for an ediDocument.
[**getEdiDocumentTags**](EdiDocumentApi.md#getEdiDocumentTags) | **GET** /v3.0/ediDocument/{ediDocumentId}/tag | Get the tags for an ediDocument.


<a name="addEdiDocument"></a>
# **addEdiDocument**
> EdiDocument addEdiDocument(body)

Create an ediDocument

Inserts a new ediDocument using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var body = new infoplus.EdiDocument(); // EdiDocument | EdiDocument to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addEdiDocument(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EdiDocument**](EdiDocument.md)| EdiDocument to be inserted. | 

### Return type

[**EdiDocument**](EdiDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addEdiDocumentAudit"></a>
# **addEdiDocumentAudit**
> addEdiDocumentAudit(ediDocumentId, ediDocumentAudit)

Add new audit for an ediDocument

Adds an audit to an existing ediDocument.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to add an audit to

var ediDocumentAudit = "ediDocumentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEdiDocumentAudit(ediDocumentId, ediDocumentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to add an audit to | 
 **ediDocumentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addEdiDocumentFile"></a>
# **addEdiDocumentFile**
> addEdiDocumentFile(ediDocumentId, fileName)

Attach a file to an ediDocument

Adds a file to an existing ediDocument.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEdiDocumentFile(ediDocumentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addEdiDocumentFileByURL"></a>
# **addEdiDocumentFileByURL**
> addEdiDocumentFileByURL(body, ediDocumentId)

Attach a file to an ediDocument by URL.

Adds a file to an existing ediDocument by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var ediDocumentId = 56; // Number | Id of the ediDocument to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEdiDocumentFileByURL(body, ediDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **ediDocumentId** | **Number**| Id of the ediDocument to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addEdiDocumentTag"></a>
# **addEdiDocumentTag**
> addEdiDocumentTag(ediDocumentId, ediDocumentTag)

Add new tags for an ediDocument.

Adds a tag to an existing ediDocument.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to add a tag to

var ediDocumentTag = "ediDocumentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addEdiDocumentTag(ediDocumentId, ediDocumentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to add a tag to | 
 **ediDocumentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEdiDocumentFile"></a>
# **deleteEdiDocumentFile**
> deleteEdiDocumentFile(ediDocumentId, fileId)

Delete a file for an ediDocument.

Deletes an existing ediDocument file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEdiDocumentFile(ediDocumentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEdiDocumentTag"></a>
# **deleteEdiDocumentTag**
> deleteEdiDocumentTag(ediDocumentId, ediDocumentTag)

Delete a tag for an ediDocument.

Deletes an existing ediDocument tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to remove tag from

var ediDocumentTag = "ediDocumentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEdiDocumentTag(ediDocumentId, ediDocumentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to remove tag from | 
 **ediDocumentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateEdiDocumentById"></a>
# **getDuplicateEdiDocumentById**
> EdiDocument getDuplicateEdiDocumentById(ediDocumentId)

Get a duplicated an ediDocument by id

Returns a duplicated ediDocument identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateEdiDocumentById(ediDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to be duplicated. | 

### Return type

[**EdiDocument**](EdiDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdiDocumentByFilter"></a>
# **getEdiDocumentByFilter**
> [EdiDocument] getEdiDocumentByFilter(opts)

Search ediDocuments by filter

Returns the list of ediDocuments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

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
apiInstance.getEdiDocumentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[EdiDocument]**](EdiDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdiDocumentById"></a>
# **getEdiDocumentById**
> EdiDocument getEdiDocumentById(ediDocumentId)

Get an ediDocument by id

Returns the ediDocument identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEdiDocumentById(ediDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to be returned. | 

### Return type

[**EdiDocument**](EdiDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdiDocumentFiles"></a>
# **getEdiDocumentFiles**
> getEdiDocumentFiles(ediDocumentId)

Get the files for an ediDocument.

Get all existing ediDocument files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEdiDocumentFiles(ediDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdiDocumentTags"></a>
# **getEdiDocumentTags**
> getEdiDocumentTags(ediDocumentId)

Get the tags for an ediDocument.

Get all existing ediDocument tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EdiDocumentApi();

var ediDocumentId = 56; // Number | Id of the ediDocument to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEdiDocumentTags(ediDocumentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ediDocumentId** | **Number**| Id of the ediDocument to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

