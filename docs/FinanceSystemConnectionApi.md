# infoplus.FinanceSystemConnectionApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFinanceSystemConnection**](FinanceSystemConnectionApi.md#addFinanceSystemConnection) | **POST** /v3.0/financeSystemConnection | Create a financeSystemConnection
[**addFinanceSystemConnectionAudit**](FinanceSystemConnectionApi.md#addFinanceSystemConnectionAudit) | **PUT** /v3.0/financeSystemConnection/{financeSystemConnectionId}/audit/{financeSystemConnectionAudit} | Add new audit for a financeSystemConnection
[**addFinanceSystemConnectionFile**](FinanceSystemConnectionApi.md#addFinanceSystemConnectionFile) | **POST** /v3.0/financeSystemConnection/{financeSystemConnectionId}/file/{fileName} | Attach a file to a financeSystemConnection
[**addFinanceSystemConnectionFileByURL**](FinanceSystemConnectionApi.md#addFinanceSystemConnectionFileByURL) | **POST** /v3.0/financeSystemConnection/{financeSystemConnectionId}/file | Attach a file to a financeSystemConnection by URL.
[**addFinanceSystemConnectionTag**](FinanceSystemConnectionApi.md#addFinanceSystemConnectionTag) | **PUT** /v3.0/financeSystemConnection/{financeSystemConnectionId}/tag/{financeSystemConnectionTag} | Add new tags for a financeSystemConnection.
[**deleteFinanceSystemConnection**](FinanceSystemConnectionApi.md#deleteFinanceSystemConnection) | **DELETE** /v3.0/financeSystemConnection/{financeSystemConnectionId} | Delete a financeSystemConnection
[**deleteFinanceSystemConnectionFile**](FinanceSystemConnectionApi.md#deleteFinanceSystemConnectionFile) | **DELETE** /v3.0/financeSystemConnection/{financeSystemConnectionId}/file/{fileId} | Delete a file for a financeSystemConnection.
[**deleteFinanceSystemConnectionTag**](FinanceSystemConnectionApi.md#deleteFinanceSystemConnectionTag) | **DELETE** /v3.0/financeSystemConnection/{financeSystemConnectionId}/tag/{financeSystemConnectionTag} | Delete a tag for a financeSystemConnection.
[**getDuplicateFinanceSystemConnectionById**](FinanceSystemConnectionApi.md#getDuplicateFinanceSystemConnectionById) | **GET** /v3.0/financeSystemConnection/duplicate/{financeSystemConnectionId} | Get a duplicated a financeSystemConnection by id
[**getFinanceSystemConnectionByFilter**](FinanceSystemConnectionApi.md#getFinanceSystemConnectionByFilter) | **GET** /v3.0/financeSystemConnection/search | Search financeSystemConnections by filter
[**getFinanceSystemConnectionById**](FinanceSystemConnectionApi.md#getFinanceSystemConnectionById) | **GET** /v3.0/financeSystemConnection/{financeSystemConnectionId} | Get a financeSystemConnection by id
[**getFinanceSystemConnectionFiles**](FinanceSystemConnectionApi.md#getFinanceSystemConnectionFiles) | **GET** /v3.0/financeSystemConnection/{financeSystemConnectionId}/file | Get the files for a financeSystemConnection.
[**getFinanceSystemConnectionTags**](FinanceSystemConnectionApi.md#getFinanceSystemConnectionTags) | **GET** /v3.0/financeSystemConnection/{financeSystemConnectionId}/tag | Get the tags for a financeSystemConnection.
[**updateFinanceSystemConnection**](FinanceSystemConnectionApi.md#updateFinanceSystemConnection) | **PUT** /v3.0/financeSystemConnection | Update a financeSystemConnection
[**updateFinanceSystemConnectionCustomFields**](FinanceSystemConnectionApi.md#updateFinanceSystemConnectionCustomFields) | **PUT** /v3.0/financeSystemConnection/customFields | Update a financeSystemConnection custom fields


<a name="addFinanceSystemConnection"></a>
# **addFinanceSystemConnection**
> FinanceSystemConnection addFinanceSystemConnection(body)

Create a financeSystemConnection

Inserts a new financeSystemConnection using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var body = new infoplus.FinanceSystemConnection(); // FinanceSystemConnection | FinanceSystemConnection to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addFinanceSystemConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FinanceSystemConnection**](FinanceSystemConnection.md)| FinanceSystemConnection to be inserted. | 

### Return type

[**FinanceSystemConnection**](FinanceSystemConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFinanceSystemConnectionAudit"></a>
# **addFinanceSystemConnectionAudit**
> addFinanceSystemConnectionAudit(financeSystemConnectionId, financeSystemConnectionAudit)

Add new audit for a financeSystemConnection

Adds an audit to an existing financeSystemConnection.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to add an audit to

var financeSystemConnectionAudit = "financeSystemConnectionAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionAudit(financeSystemConnectionId, financeSystemConnectionAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to add an audit to | 
 **financeSystemConnectionAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFinanceSystemConnectionFile"></a>
# **addFinanceSystemConnectionFile**
> addFinanceSystemConnectionFile(financeSystemConnectionId, fileName)

Attach a file to a financeSystemConnection

Adds a file to an existing financeSystemConnection.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionFile(financeSystemConnectionId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addFinanceSystemConnectionFileByURL"></a>
# **addFinanceSystemConnectionFileByURL**
> addFinanceSystemConnectionFileByURL(body, financeSystemConnectionId)

Attach a file to a financeSystemConnection by URL.

Adds a file to an existing financeSystemConnection by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionFileByURL(body, financeSystemConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFinanceSystemConnectionTag"></a>
# **addFinanceSystemConnectionTag**
> addFinanceSystemConnectionTag(financeSystemConnectionId, financeSystemConnectionTag)

Add new tags for a financeSystemConnection.

Adds a tag to an existing financeSystemConnection.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to add a tag to

var financeSystemConnectionTag = "financeSystemConnectionTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addFinanceSystemConnectionTag(financeSystemConnectionId, financeSystemConnectionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to add a tag to | 
 **financeSystemConnectionTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFinanceSystemConnection"></a>
# **deleteFinanceSystemConnection**
> deleteFinanceSystemConnection(financeSystemConnectionId)

Delete a financeSystemConnection

Deletes the financeSystemConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFinanceSystemConnection(financeSystemConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteFinanceSystemConnectionFile"></a>
# **deleteFinanceSystemConnectionFile**
> deleteFinanceSystemConnectionFile(financeSystemConnectionId, fileId)

Delete a file for a financeSystemConnection.

Deletes an existing financeSystemConnection file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFinanceSystemConnectionFile(financeSystemConnectionId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteFinanceSystemConnectionTag"></a>
# **deleteFinanceSystemConnectionTag**
> deleteFinanceSystemConnectionTag(financeSystemConnectionId, financeSystemConnectionTag)

Delete a tag for a financeSystemConnection.

Deletes an existing financeSystemConnection tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to remove tag from

var financeSystemConnectionTag = "financeSystemConnectionTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFinanceSystemConnectionTag(financeSystemConnectionId, financeSystemConnectionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to remove tag from | 
 **financeSystemConnectionTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateFinanceSystemConnectionById"></a>
# **getDuplicateFinanceSystemConnectionById**
> FinanceSystemConnection getDuplicateFinanceSystemConnectionById(financeSystemConnectionId)

Get a duplicated a financeSystemConnection by id

Returns a duplicated financeSystemConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateFinanceSystemConnectionById(financeSystemConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to be duplicated. | 

### Return type

[**FinanceSystemConnection**](FinanceSystemConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionByFilter"></a>
# **getFinanceSystemConnectionByFilter**
> [FinanceSystemConnection] getFinanceSystemConnectionByFilter(opts)

Search financeSystemConnections by filter

Returns the list of financeSystemConnections that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

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
apiInstance.getFinanceSystemConnectionByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[FinanceSystemConnection]**](FinanceSystemConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionById"></a>
# **getFinanceSystemConnectionById**
> FinanceSystemConnection getFinanceSystemConnectionById(financeSystemConnectionId)

Get a financeSystemConnection by id

Returns the financeSystemConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFinanceSystemConnectionById(financeSystemConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to be returned. | 

### Return type

[**FinanceSystemConnection**](FinanceSystemConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionFiles"></a>
# **getFinanceSystemConnectionFiles**
> getFinanceSystemConnectionFiles(financeSystemConnectionId)

Get the files for a financeSystemConnection.

Get all existing financeSystemConnection files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFinanceSystemConnectionFiles(financeSystemConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFinanceSystemConnectionTags"></a>
# **getFinanceSystemConnectionTags**
> getFinanceSystemConnectionTags(financeSystemConnectionId)

Get the tags for a financeSystemConnection.

Get all existing financeSystemConnection tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var financeSystemConnectionId = 56; // Number | Id of the financeSystemConnection to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFinanceSystemConnectionTags(financeSystemConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financeSystemConnectionId** | **Number**| Id of the financeSystemConnection to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateFinanceSystemConnection"></a>
# **updateFinanceSystemConnection**
> updateFinanceSystemConnection(body)

Update a financeSystemConnection

Updates an existing financeSystemConnection using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var body = new infoplus.FinanceSystemConnection(); // FinanceSystemConnection | FinanceSystemConnection to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFinanceSystemConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FinanceSystemConnection**](FinanceSystemConnection.md)| FinanceSystemConnection to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFinanceSystemConnectionCustomFields"></a>
# **updateFinanceSystemConnectionCustomFields**
> updateFinanceSystemConnectionCustomFields(body)

Update a financeSystemConnection custom fields

Updates an existing financeSystemConnection custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FinanceSystemConnectionApi();

var body = new infoplus.FinanceSystemConnection(); // FinanceSystemConnection | FinanceSystemConnection to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFinanceSystemConnectionCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FinanceSystemConnection**](FinanceSystemConnection.md)| FinanceSystemConnection to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

