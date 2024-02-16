# infoplus.ExternalShipmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExternalShipment**](ExternalShipmentApi.md#addExternalShipment) | **POST** /beta/externalShipment | Create an externalShipment
[**addExternalShipmentAudit**](ExternalShipmentApi.md#addExternalShipmentAudit) | **PUT** /beta/externalShipment/{externalShipmentId}/audit/{externalShipmentAudit} | Add new audit for an externalShipment
[**addExternalShipmentFile**](ExternalShipmentApi.md#addExternalShipmentFile) | **POST** /beta/externalShipment/{externalShipmentId}/file/{fileName} | Attach a file to an externalShipment
[**addExternalShipmentFileByURL**](ExternalShipmentApi.md#addExternalShipmentFileByURL) | **POST** /beta/externalShipment/{externalShipmentId}/file | Attach a file to an externalShipment by URL.
[**addExternalShipmentTag**](ExternalShipmentApi.md#addExternalShipmentTag) | **PUT** /beta/externalShipment/{externalShipmentId}/tag/{externalShipmentTag} | Add new tags for an externalShipment.
[**deleteExternalShipment**](ExternalShipmentApi.md#deleteExternalShipment) | **DELETE** /beta/externalShipment/{externalShipmentId} | Delete an externalShipment
[**deleteExternalShipmentFile**](ExternalShipmentApi.md#deleteExternalShipmentFile) | **DELETE** /beta/externalShipment/{externalShipmentId}/file/{fileId} | Delete a file for an externalShipment.
[**deleteExternalShipmentTag**](ExternalShipmentApi.md#deleteExternalShipmentTag) | **DELETE** /beta/externalShipment/{externalShipmentId}/tag/{externalShipmentTag} | Delete a tag for an externalShipment.
[**executeExternalShipment**](ExternalShipmentApi.md#executeExternalShipment) | **POST** /beta/externalShipment/executeExternalShipment | Run the ExecuteExternalShipment process.
[**getDuplicateExternalShipmentById**](ExternalShipmentApi.md#getDuplicateExternalShipmentById) | **GET** /beta/externalShipment/duplicate/{externalShipmentId} | Get a duplicated an externalShipment by id
[**getExternalShipmentByFilter**](ExternalShipmentApi.md#getExternalShipmentByFilter) | **GET** /beta/externalShipment/search | Search externalShipments by filter
[**getExternalShipmentById**](ExternalShipmentApi.md#getExternalShipmentById) | **GET** /beta/externalShipment/{externalShipmentId} | Get an externalShipment by id
[**getExternalShipmentFiles**](ExternalShipmentApi.md#getExternalShipmentFiles) | **GET** /beta/externalShipment/{externalShipmentId}/file | Get the files for an externalShipment.
[**getExternalShipmentTags**](ExternalShipmentApi.md#getExternalShipmentTags) | **GET** /beta/externalShipment/{externalShipmentId}/tag | Get the tags for an externalShipment.
[**updateExternalShipment**](ExternalShipmentApi.md#updateExternalShipment) | **PUT** /beta/externalShipment | Update an externalShipment
[**updateExternalShipmentCustomFields**](ExternalShipmentApi.md#updateExternalShipmentCustomFields) | **PUT** /beta/externalShipment/customFields | Update an externalShipment custom fields


<a name="addExternalShipment"></a>
# **addExternalShipment**
> ExternalShipment addExternalShipment(body)

Create an externalShipment

Inserts a new externalShipment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var body = new infoplus.ExternalShipment(); // ExternalShipment | ExternalShipment to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addExternalShipment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShipment**](ExternalShipment.md)| ExternalShipment to be inserted. | 

### Return type

[**ExternalShipment**](ExternalShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addExternalShipmentAudit"></a>
# **addExternalShipmentAudit**
> addExternalShipmentAudit(externalShipmentId, externalShipmentAudit)

Add new audit for an externalShipment

Adds an audit to an existing externalShipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to add an audit to

var externalShipmentAudit = "externalShipmentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShipmentAudit(externalShipmentId, externalShipmentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to add an audit to | 
 **externalShipmentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addExternalShipmentFile"></a>
# **addExternalShipmentFile**
> addExternalShipmentFile(externalShipmentId, fileName)

Attach a file to an externalShipment

Adds a file to an existing externalShipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShipmentFile(externalShipmentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addExternalShipmentFileByURL"></a>
# **addExternalShipmentFileByURL**
> addExternalShipmentFileByURL(body, externalShipmentId)

Attach a file to an externalShipment by URL.

Adds a file to an existing externalShipment by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var externalShipmentId = 56; // Number | Id of the externalShipment to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShipmentFileByURL(body, externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **externalShipmentId** | **Number**| Id of the externalShipment to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addExternalShipmentTag"></a>
# **addExternalShipmentTag**
> addExternalShipmentTag(externalShipmentId, externalShipmentTag)

Add new tags for an externalShipment.

Adds a tag to an existing externalShipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to add a tag to

var externalShipmentTag = "externalShipmentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addExternalShipmentTag(externalShipmentId, externalShipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to add a tag to | 
 **externalShipmentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteExternalShipment"></a>
# **deleteExternalShipment**
> deleteExternalShipment(externalShipmentId)

Delete an externalShipment

Deletes the externalShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExternalShipment(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteExternalShipmentFile"></a>
# **deleteExternalShipmentFile**
> deleteExternalShipmentFile(externalShipmentId, fileId)

Delete a file for an externalShipment.

Deletes an existing externalShipment file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExternalShipmentFile(externalShipmentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteExternalShipmentTag"></a>
# **deleteExternalShipmentTag**
> deleteExternalShipmentTag(externalShipmentId, externalShipmentTag)

Delete a tag for an externalShipment.

Deletes an existing externalShipment tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to remove tag from

var externalShipmentTag = "externalShipmentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExternalShipmentTag(externalShipmentId, externalShipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to remove tag from | 
 **externalShipmentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executeExternalShipment"></a>
# **executeExternalShipment**
> [ProcessOutputAPIModel] executeExternalShipment(body)

Run the ExecuteExternalShipment process.



### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var body = new infoplus.ExecuteExternalShipmentInputAPIModel(); // ExecuteExternalShipmentInputAPIModel | Input data for ExecuteExternalShipment process.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executeExternalShipment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecuteExternalShipmentInputAPIModel**](ExecuteExternalShipmentInputAPIModel.md)| Input data for ExecuteExternalShipment process. | 

### Return type

[**[ProcessOutputAPIModel]**](ProcessOutputAPIModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateExternalShipmentById"></a>
# **getDuplicateExternalShipmentById**
> ExternalShipment getDuplicateExternalShipmentById(externalShipmentId)

Get a duplicated an externalShipment by id

Returns a duplicated externalShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateExternalShipmentById(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to be duplicated. | 

### Return type

[**ExternalShipment**](ExternalShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShipmentByFilter"></a>
# **getExternalShipmentByFilter**
> [ExternalShipment] getExternalShipmentByFilter(opts)

Search externalShipments by filter

Returns the list of externalShipments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

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
apiInstance.getExternalShipmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ExternalShipment]**](ExternalShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShipmentById"></a>
# **getExternalShipmentById**
> ExternalShipment getExternalShipmentById(externalShipmentId)

Get an externalShipment by id

Returns the externalShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExternalShipmentById(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to be returned. | 

### Return type

[**ExternalShipment**](ExternalShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShipmentFiles"></a>
# **getExternalShipmentFiles**
> getExternalShipmentFiles(externalShipmentId)

Get the files for an externalShipment.

Get all existing externalShipment files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getExternalShipmentFiles(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalShipmentTags"></a>
# **getExternalShipmentTags**
> getExternalShipmentTags(externalShipmentId)

Get the tags for an externalShipment.

Get all existing externalShipment tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var externalShipmentId = 56; // Number | Id of the externalShipment to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getExternalShipmentTags(externalShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalShipmentId** | **Number**| Id of the externalShipment to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateExternalShipment"></a>
# **updateExternalShipment**
> updateExternalShipment(body)

Update an externalShipment

Updates an existing externalShipment using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var body = new infoplus.ExternalShipment(); // ExternalShipment | ExternalShipment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateExternalShipment(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShipment**](ExternalShipment.md)| ExternalShipment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExternalShipmentCustomFields"></a>
# **updateExternalShipmentCustomFields**
> updateExternalShipmentCustomFields(body)

Update an externalShipment custom fields

Updates an existing externalShipment custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ExternalShipmentApi();

var body = new infoplus.ExternalShipment(); // ExternalShipment | ExternalShipment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateExternalShipmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExternalShipment**](ExternalShipment.md)| ExternalShipment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

