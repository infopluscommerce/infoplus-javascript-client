# infoplus.CartonContentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartonContent**](CartonContentApi.md#addCartonContent) | **POST** /v3.0/cartonContent | Create a cartonContent
[**addCartonContentAudit**](CartonContentApi.md#addCartonContentAudit) | **PUT** /v3.0/cartonContent/{cartonContentId}/audit/{cartonContentAudit} | Add new audit for a cartonContent
[**addCartonContentFile**](CartonContentApi.md#addCartonContentFile) | **POST** /v3.0/cartonContent/{cartonContentId}/file/{fileName} | Attach a file to a cartonContent
[**addCartonContentFileByURL**](CartonContentApi.md#addCartonContentFileByURL) | **POST** /v3.0/cartonContent/{cartonContentId}/file | Attach a file to a cartonContent by URL.
[**addCartonContentTag**](CartonContentApi.md#addCartonContentTag) | **PUT** /v3.0/cartonContent/{cartonContentId}/tag/{cartonContentTag} | Add new tags for a cartonContent.
[**deleteCartonContent**](CartonContentApi.md#deleteCartonContent) | **DELETE** /v3.0/cartonContent/{cartonContentId} | Delete a cartonContent
[**deleteCartonContentFile**](CartonContentApi.md#deleteCartonContentFile) | **DELETE** /v3.0/cartonContent/{cartonContentId}/file/{fileId} | Delete a file for a cartonContent.
[**deleteCartonContentTag**](CartonContentApi.md#deleteCartonContentTag) | **DELETE** /v3.0/cartonContent/{cartonContentId}/tag/{cartonContentTag} | Delete a tag for a cartonContent.
[**getCartonContentByFilter**](CartonContentApi.md#getCartonContentByFilter) | **GET** /v3.0/cartonContent/search | Search cartonContents by filter
[**getCartonContentById**](CartonContentApi.md#getCartonContentById) | **GET** /v3.0/cartonContent/{cartonContentId} | Get a cartonContent by id
[**getCartonContentFiles**](CartonContentApi.md#getCartonContentFiles) | **GET** /v3.0/cartonContent/{cartonContentId}/file | Get the files for a cartonContent.
[**getCartonContentTags**](CartonContentApi.md#getCartonContentTags) | **GET** /v3.0/cartonContent/{cartonContentId}/tag | Get the tags for a cartonContent.
[**getDuplicateCartonContentById**](CartonContentApi.md#getDuplicateCartonContentById) | **GET** /v3.0/cartonContent/duplicate/{cartonContentId} | Get a duplicated a cartonContent by id
[**updateCartonContent**](CartonContentApi.md#updateCartonContent) | **PUT** /v3.0/cartonContent | Update a cartonContent
[**updateCartonContentCustomFields**](CartonContentApi.md#updateCartonContentCustomFields) | **PUT** /v3.0/cartonContent/customFields | Update a cartonContent custom fields


<a name="addCartonContent"></a>
# **addCartonContent**
> CartonContent addCartonContent(body)

Create a cartonContent

Inserts a new cartonContent using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var body = new infoplus.CartonContent(); // CartonContent | CartonContent to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCartonContent(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonContent**](CartonContent.md)| CartonContent to be inserted. | 

### Return type

[**CartonContent**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonContentAudit"></a>
# **addCartonContentAudit**
> addCartonContentAudit(cartonContentId, cartonContentAudit)

Add new audit for a cartonContent

Adds an audit to an existing cartonContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to add an audit to

var cartonContentAudit = "cartonContentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonContentAudit(cartonContentId, cartonContentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to add an audit to | 
 **cartonContentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonContentFile"></a>
# **addCartonContentFile**
> addCartonContentFile(cartonContentId, fileName)

Attach a file to a cartonContent

Adds a file to an existing cartonContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonContentFile(cartonContentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCartonContentFileByURL"></a>
# **addCartonContentFileByURL**
> addCartonContentFileByURL(body, cartonContentId)

Attach a file to a cartonContent by URL.

Adds a file to an existing cartonContent by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var cartonContentId = 56; // Number | Id of the cartonContent to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonContentFileByURL(body, cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **cartonContentId** | **Number**| Id of the cartonContent to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonContentTag"></a>
# **addCartonContentTag**
> addCartonContentTag(cartonContentId, cartonContentTag)

Add new tags for a cartonContent.

Adds a tag to an existing cartonContent.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to add a tag to

var cartonContentTag = "cartonContentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonContentTag(cartonContentId, cartonContentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to add a tag to | 
 **cartonContentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartonContent"></a>
# **deleteCartonContent**
> deleteCartonContent(cartonContentId)

Delete a cartonContent

Deletes the cartonContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonContent(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonContentFile"></a>
# **deleteCartonContentFile**
> deleteCartonContentFile(cartonContentId, fileId)

Delete a file for a cartonContent.

Deletes an existing cartonContent file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonContentFile(cartonContentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonContentTag"></a>
# **deleteCartonContentTag**
> deleteCartonContentTag(cartonContentId, cartonContentTag)

Delete a tag for a cartonContent.

Deletes an existing cartonContent tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to remove tag from

var cartonContentTag = "cartonContentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonContentTag(cartonContentId, cartonContentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to remove tag from | 
 **cartonContentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonContentByFilter"></a>
# **getCartonContentByFilter**
> [CartonContent] getCartonContentByFilter(opts)

Search cartonContents by filter

Returns the list of cartonContents that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

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
apiInstance.getCartonContentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CartonContent]**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonContentById"></a>
# **getCartonContentById**
> CartonContent getCartonContentById(cartonContentId)

Get a cartonContent by id

Returns the cartonContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCartonContentById(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to be returned. | 

### Return type

[**CartonContent**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonContentFiles"></a>
# **getCartonContentFiles**
> getCartonContentFiles(cartonContentId)

Get the files for a cartonContent.

Get all existing cartonContent files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartonContentFiles(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonContentTags"></a>
# **getCartonContentTags**
> getCartonContentTags(cartonContentId)

Get the tags for a cartonContent.

Get all existing cartonContent tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartonContentTags(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCartonContentById"></a>
# **getDuplicateCartonContentById**
> CartonContent getDuplicateCartonContentById(cartonContentId)

Get a duplicated a cartonContent by id

Returns a duplicated cartonContent identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var cartonContentId = 56; // Number | Id of the cartonContent to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCartonContentById(cartonContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonContentId** | **Number**| Id of the cartonContent to be duplicated. | 

### Return type

[**CartonContent**](CartonContent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCartonContent"></a>
# **updateCartonContent**
> updateCartonContent(body)

Update a cartonContent

Updates an existing cartonContent using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var body = new infoplus.CartonContent(); // CartonContent | CartonContent to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCartonContent(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonContent**](CartonContent.md)| CartonContent to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCartonContentCustomFields"></a>
# **updateCartonContentCustomFields**
> updateCartonContentCustomFields(body)

Update a cartonContent custom fields

Updates an existing cartonContent custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonContentApi();

var body = new infoplus.CartonContent(); // CartonContent | CartonContent to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCartonContentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartonContent**](CartonContent.md)| CartonContent to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

