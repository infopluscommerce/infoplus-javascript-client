# infoplus.LoadContentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLoadContentAudit**](LoadContentApi.md#addLoadContentAudit) | **PUT** /beta/loadContent/{loadContentId}/audit/{loadContentAudit} | Add new audit for a loadContent
[**addLoadContentFile**](LoadContentApi.md#addLoadContentFile) | **POST** /beta/loadContent/{loadContentId}/file/{fileName} | Attach a file to a loadContent
[**addLoadContentFileByURL**](LoadContentApi.md#addLoadContentFileByURL) | **POST** /beta/loadContent/{loadContentId}/file | Attach a file to a loadContent by URL.
[**addLoadContentTag**](LoadContentApi.md#addLoadContentTag) | **PUT** /beta/loadContent/{loadContentId}/tag/{loadContentTag} | Add new tags for a loadContent.
[**deleteLoadContentFile**](LoadContentApi.md#deleteLoadContentFile) | **DELETE** /beta/loadContent/{loadContentId}/file/{fileId} | Delete a file for a loadContent.
[**deleteLoadContentTag**](LoadContentApi.md#deleteLoadContentTag) | **DELETE** /beta/loadContent/{loadContentId}/tag/{loadContentTag} | Delete a tag for a loadContent.
[**getDuplicateLoadContentById**](LoadContentApi.md#getDuplicateLoadContentById) | **GET** /beta/loadContent/duplicate/{loadContentId} | Get a duplicated a loadContent by id
[**getLoadContentByFilter**](LoadContentApi.md#getLoadContentByFilter) | **GET** /beta/loadContent/search | Search loadContents by filter
[**getLoadContentById**](LoadContentApi.md#getLoadContentById) | **GET** /beta/loadContent/{loadContentId} | Get a loadContent by id
[**getLoadContentFiles**](LoadContentApi.md#getLoadContentFiles) | **GET** /beta/loadContent/{loadContentId}/file | Get the files for a loadContent.
[**getLoadContentTags**](LoadContentApi.md#getLoadContentTags) | **GET** /beta/loadContent/{loadContentId}/tag | Get the tags for a loadContent.
[**updateLoadContentCustomFields**](LoadContentApi.md#updateLoadContentCustomFields) | **PUT** /beta/loadContent/customFields | Update a loadContent custom fields


<a name="addLoadContentAudit"></a>
# **addLoadContentAudit**
> addLoadContentAudit(loadContentId, loadContentAudit)

Add new audit for a loadContent

Adds an audit to an existing loadContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to add an audit to

var loadContentAudit = "loadContentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLoadContentAudit(loadContentId, loadContentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to add an audit to | 
 **loadContentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLoadContentFile"></a>
# **addLoadContentFile**
> addLoadContentFile(loadContentId, fileName)

Attach a file to a loadContent

Adds a file to an existing loadContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLoadContentFile(loadContentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addLoadContentFileByURL"></a>
# **addLoadContentFileByURL**
> addLoadContentFileByURL(body, loadContentId)

Attach a file to a loadContent by URL.

Adds a file to an existing loadContent by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var loadContentId = 56; // Number | Id of the loadContent to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLoadContentFileByURL(body, loadContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **loadContentId** | **Number**| Id of the loadContent to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLoadContentTag"></a>
# **addLoadContentTag**
> addLoadContentTag(loadContentId, loadContentTag)

Add new tags for a loadContent.

Adds a tag to an existing loadContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to add a tag to

var loadContentTag = "loadContentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLoadContentTag(loadContentId, loadContentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to add a tag to | 
 **loadContentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLoadContentFile"></a>
# **deleteLoadContentFile**
> deleteLoadContentFile(loadContentId, fileId)

Delete a file for a loadContent.

Deletes an existing loadContent file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLoadContentFile(loadContentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteLoadContentTag"></a>
# **deleteLoadContentTag**
> deleteLoadContentTag(loadContentId, loadContentTag)

Delete a tag for a loadContent.

Deletes an existing loadContent tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to remove tag from

var loadContentTag = "loadContentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLoadContentTag(loadContentId, loadContentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to remove tag from | 
 **loadContentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateLoadContentById"></a>
# **getDuplicateLoadContentById**
> LoadContent getDuplicateLoadContentById(loadContentId)

Get a duplicated a loadContent by id

Returns a duplicated loadContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateLoadContentById(loadContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to be duplicated. | 

### Return type

[**LoadContent**](LoadContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoadContentByFilter"></a>
# **getLoadContentByFilter**
> [LoadContent] getLoadContentByFilter(opts)

Search loadContents by filter

Returns the list of loadContents that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

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
apiInstance.getLoadContentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LoadContent]**](LoadContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoadContentById"></a>
# **getLoadContentById**
> LoadContent getLoadContentById(loadContentId)

Get a loadContent by id

Returns the loadContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoadContentById(loadContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to be returned. | 

### Return type

[**LoadContent**](LoadContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoadContentFiles"></a>
# **getLoadContentFiles**
> getLoadContentFiles(loadContentId)

Get the files for a loadContent.

Get all existing loadContent files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLoadContentFiles(loadContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoadContentTags"></a>
# **getLoadContentTags**
> getLoadContentTags(loadContentId)

Get the tags for a loadContent.

Get all existing loadContent tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var loadContentId = 56; // Number | Id of the loadContent to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLoadContentTags(loadContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadContentId** | **Number**| Id of the loadContent to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLoadContentCustomFields"></a>
# **updateLoadContentCustomFields**
> updateLoadContentCustomFields(body)

Update a loadContent custom fields

Updates an existing loadContent custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoadContentApi();

var body = new infoplus.LoadContent(); // LoadContent | LoadContent to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLoadContentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoadContent**](LoadContent.md)| LoadContent to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

