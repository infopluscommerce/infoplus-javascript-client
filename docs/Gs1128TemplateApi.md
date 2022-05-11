# infoplus.Gs1128TemplateApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGs1128Template**](Gs1128TemplateApi.md#addGs1128Template) | **POST** /v3.0/gs1128Template | Create a gs1128Template
[**addGs1128TemplateAudit**](Gs1128TemplateApi.md#addGs1128TemplateAudit) | **PUT** /v3.0/gs1128Template/{gs1128TemplateId}/audit/{gs1128TemplateAudit} | Add new audit for a gs1128Template
[**addGs1128TemplateFile**](Gs1128TemplateApi.md#addGs1128TemplateFile) | **POST** /v3.0/gs1128Template/{gs1128TemplateId}/file/{fileName} | Attach a file to a gs1128Template
[**addGs1128TemplateFileByURL**](Gs1128TemplateApi.md#addGs1128TemplateFileByURL) | **POST** /v3.0/gs1128Template/{gs1128TemplateId}/file | Attach a file to a gs1128Template by URL.
[**addGs1128TemplateTag**](Gs1128TemplateApi.md#addGs1128TemplateTag) | **PUT** /v3.0/gs1128Template/{gs1128TemplateId}/tag/{gs1128TemplateTag} | Add new tags for a gs1128Template.
[**deleteGs1128Template**](Gs1128TemplateApi.md#deleteGs1128Template) | **DELETE** /v3.0/gs1128Template/{gs1128TemplateId} | Delete a gs1128Template
[**deleteGs1128TemplateFile**](Gs1128TemplateApi.md#deleteGs1128TemplateFile) | **DELETE** /v3.0/gs1128Template/{gs1128TemplateId}/file/{fileId} | Delete a file for a gs1128Template.
[**deleteGs1128TemplateTag**](Gs1128TemplateApi.md#deleteGs1128TemplateTag) | **DELETE** /v3.0/gs1128Template/{gs1128TemplateId}/tag/{gs1128TemplateTag} | Delete a tag for a gs1128Template.
[**getDuplicateGs1128TemplateById**](Gs1128TemplateApi.md#getDuplicateGs1128TemplateById) | **GET** /v3.0/gs1128Template/duplicate/{gs1128TemplateId} | Get a duplicated a gs1128Template by id
[**getGs1128TemplateByFilter**](Gs1128TemplateApi.md#getGs1128TemplateByFilter) | **GET** /v3.0/gs1128Template/search | Search gs1128Templates by filter
[**getGs1128TemplateById**](Gs1128TemplateApi.md#getGs1128TemplateById) | **GET** /v3.0/gs1128Template/{gs1128TemplateId} | Get a gs1128Template by id
[**getGs1128TemplateFiles**](Gs1128TemplateApi.md#getGs1128TemplateFiles) | **GET** /v3.0/gs1128Template/{gs1128TemplateId}/file | Get the files for a gs1128Template.
[**getGs1128TemplateTags**](Gs1128TemplateApi.md#getGs1128TemplateTags) | **GET** /v3.0/gs1128Template/{gs1128TemplateId}/tag | Get the tags for a gs1128Template.
[**updateGs1128Template**](Gs1128TemplateApi.md#updateGs1128Template) | **PUT** /v3.0/gs1128Template | Update a gs1128Template


<a name="addGs1128Template"></a>
# **addGs1128Template**
> Gs1128Template addGs1128Template(body)

Create a gs1128Template

Inserts a new gs1128Template using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var body = new infoplus.Gs1128Template(); // Gs1128Template | Gs1128Template to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addGs1128Template(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Gs1128Template**](Gs1128Template.md)| Gs1128Template to be inserted. | 

### Return type

[**Gs1128Template**](Gs1128Template.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGs1128TemplateAudit"></a>
# **addGs1128TemplateAudit**
> addGs1128TemplateAudit(gs1128TemplateId, gs1128TemplateAudit)

Add new audit for a gs1128Template

Adds an audit to an existing gs1128Template.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to add an audit to

var gs1128TemplateAudit = "gs1128TemplateAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128TemplateAudit(gs1128TemplateId, gs1128TemplateAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to add an audit to | 
 **gs1128TemplateAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGs1128TemplateFile"></a>
# **addGs1128TemplateFile**
> addGs1128TemplateFile(gs1128TemplateId, fileName)

Attach a file to a gs1128Template

Adds a file to an existing gs1128Template.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128TemplateFile(gs1128TemplateId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addGs1128TemplateFileByURL"></a>
# **addGs1128TemplateFileByURL**
> addGs1128TemplateFileByURL(body, gs1128TemplateId)

Attach a file to a gs1128Template by URL.

Adds a file to an existing gs1128Template by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128TemplateFileByURL(body, gs1128TemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGs1128TemplateTag"></a>
# **addGs1128TemplateTag**
> addGs1128TemplateTag(gs1128TemplateId, gs1128TemplateTag)

Add new tags for a gs1128Template.

Adds a tag to an existing gs1128Template.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to add a tag to

var gs1128TemplateTag = "gs1128TemplateTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128TemplateTag(gs1128TemplateId, gs1128TemplateTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to add a tag to | 
 **gs1128TemplateTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGs1128Template"></a>
# **deleteGs1128Template**
> deleteGs1128Template(gs1128TemplateId)

Delete a gs1128Template

Deletes the gs1128Template identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGs1128Template(gs1128TemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGs1128TemplateFile"></a>
# **deleteGs1128TemplateFile**
> deleteGs1128TemplateFile(gs1128TemplateId, fileId)

Delete a file for a gs1128Template.

Deletes an existing gs1128Template file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGs1128TemplateFile(gs1128TemplateId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGs1128TemplateTag"></a>
# **deleteGs1128TemplateTag**
> deleteGs1128TemplateTag(gs1128TemplateId, gs1128TemplateTag)

Delete a tag for a gs1128Template.

Deletes an existing gs1128Template tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to remove tag from

var gs1128TemplateTag = "gs1128TemplateTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGs1128TemplateTag(gs1128TemplateId, gs1128TemplateTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to remove tag from | 
 **gs1128TemplateTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateGs1128TemplateById"></a>
# **getDuplicateGs1128TemplateById**
> Gs1128Template getDuplicateGs1128TemplateById(gs1128TemplateId)

Get a duplicated a gs1128Template by id

Returns a duplicated gs1128Template identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateGs1128TemplateById(gs1128TemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to be duplicated. | 

### Return type

[**Gs1128Template**](Gs1128Template.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128TemplateByFilter"></a>
# **getGs1128TemplateByFilter**
> [Gs1128Template] getGs1128TemplateByFilter(opts)

Search gs1128Templates by filter

Returns the list of gs1128Templates that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

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
apiInstance.getGs1128TemplateByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Gs1128Template]**](Gs1128Template.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128TemplateById"></a>
# **getGs1128TemplateById**
> Gs1128Template getGs1128TemplateById(gs1128TemplateId)

Get a gs1128Template by id

Returns the gs1128Template identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGs1128TemplateById(gs1128TemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to be returned. | 

### Return type

[**Gs1128Template**](Gs1128Template.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128TemplateFiles"></a>
# **getGs1128TemplateFiles**
> getGs1128TemplateFiles(gs1128TemplateId)

Get the files for a gs1128Template.

Get all existing gs1128Template files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getGs1128TemplateFiles(gs1128TemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128TemplateTags"></a>
# **getGs1128TemplateTags**
> getGs1128TemplateTags(gs1128TemplateId)

Get the tags for a gs1128Template.

Get all existing gs1128Template tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var gs1128TemplateId = 56; // Number | Id of the gs1128Template to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getGs1128TemplateTags(gs1128TemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128TemplateId** | **Number**| Id of the gs1128Template to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateGs1128Template"></a>
# **updateGs1128Template**
> updateGs1128Template(body)

Update a gs1128Template

Updates an existing gs1128Template using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128TemplateApi();

var body = new infoplus.Gs1128Template(); // Gs1128Template | Gs1128Template to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateGs1128Template(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Gs1128Template**](Gs1128Template.md)| Gs1128Template to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

