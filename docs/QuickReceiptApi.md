# infoplus.QuickReceiptApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addQuickReceipt**](QuickReceiptApi.md#addQuickReceipt) | **POST** /beta/quickReceipt | Create a quickReceipt
[**addQuickReceiptAudit**](QuickReceiptApi.md#addQuickReceiptAudit) | **PUT** /beta/quickReceipt/{quickReceiptId}/audit/{quickReceiptAudit} | Add new audit for a quickReceipt
[**addQuickReceiptFile**](QuickReceiptApi.md#addQuickReceiptFile) | **POST** /beta/quickReceipt/{quickReceiptId}/file/{fileName} | Attach a file to a quickReceipt
[**addQuickReceiptFileByURL**](QuickReceiptApi.md#addQuickReceiptFileByURL) | **POST** /beta/quickReceipt/{quickReceiptId}/file | Attach a file to a quickReceipt by URL.
[**addQuickReceiptTag**](QuickReceiptApi.md#addQuickReceiptTag) | **PUT** /beta/quickReceipt/{quickReceiptId}/tag/{quickReceiptTag} | Add new tags for a quickReceipt.
[**deleteQuickReceipt**](QuickReceiptApi.md#deleteQuickReceipt) | **DELETE** /beta/quickReceipt/{quickReceiptId} | Delete a quickReceipt
[**deleteQuickReceiptFile**](QuickReceiptApi.md#deleteQuickReceiptFile) | **DELETE** /beta/quickReceipt/{quickReceiptId}/file/{fileId} | Delete a file for a quickReceipt.
[**deleteQuickReceiptTag**](QuickReceiptApi.md#deleteQuickReceiptTag) | **DELETE** /beta/quickReceipt/{quickReceiptId}/tag/{quickReceiptTag} | Delete a tag for a quickReceipt.
[**executeQuickReceipt**](QuickReceiptApi.md#executeQuickReceipt) | **POST** /beta/quickReceipt/executeQuickReceipt | Run the ExecuteQuickReceipt process.
[**getDuplicateQuickReceiptById**](QuickReceiptApi.md#getDuplicateQuickReceiptById) | **GET** /beta/quickReceipt/duplicate/{quickReceiptId} | Get a duplicated a quickReceipt by id
[**getQuickReceiptByFilter**](QuickReceiptApi.md#getQuickReceiptByFilter) | **GET** /beta/quickReceipt/search | Search quickReceipts by filter
[**getQuickReceiptById**](QuickReceiptApi.md#getQuickReceiptById) | **GET** /beta/quickReceipt/{quickReceiptId} | Get a quickReceipt by id
[**getQuickReceiptFiles**](QuickReceiptApi.md#getQuickReceiptFiles) | **GET** /beta/quickReceipt/{quickReceiptId}/file | Get the files for a quickReceipt.
[**getQuickReceiptTags**](QuickReceiptApi.md#getQuickReceiptTags) | **GET** /beta/quickReceipt/{quickReceiptId}/tag | Get the tags for a quickReceipt.
[**updateQuickReceipt**](QuickReceiptApi.md#updateQuickReceipt) | **PUT** /beta/quickReceipt | Update a quickReceipt
[**updateQuickReceiptCustomFields**](QuickReceiptApi.md#updateQuickReceiptCustomFields) | **PUT** /beta/quickReceipt/customFields | Update a quickReceipt custom fields


<a name="addQuickReceipt"></a>
# **addQuickReceipt**
> QuickReceipt addQuickReceipt(body)

Create a quickReceipt

Inserts a new quickReceipt using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var body = new infoplus.QuickReceipt(); // QuickReceipt | QuickReceipt to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addQuickReceipt(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickReceipt**](QuickReceipt.md)| QuickReceipt to be inserted. | 

### Return type

[**QuickReceipt**](QuickReceipt.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addQuickReceiptAudit"></a>
# **addQuickReceiptAudit**
> addQuickReceiptAudit(quickReceiptId, quickReceiptAudit)

Add new audit for a quickReceipt

Adds an audit to an existing quickReceipt.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to add an audit to

var quickReceiptAudit = "quickReceiptAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addQuickReceiptAudit(quickReceiptId, quickReceiptAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to add an audit to | 
 **quickReceiptAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addQuickReceiptFile"></a>
# **addQuickReceiptFile**
> addQuickReceiptFile(quickReceiptId, fileName)

Attach a file to a quickReceipt

Adds a file to an existing quickReceipt.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addQuickReceiptFile(quickReceiptId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addQuickReceiptFileByURL"></a>
# **addQuickReceiptFileByURL**
> addQuickReceiptFileByURL(body, quickReceiptId)

Attach a file to a quickReceipt by URL.

Adds a file to an existing quickReceipt by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var quickReceiptId = 56; // Number | Id of the quickReceipt to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addQuickReceiptFileByURL(body, quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **quickReceiptId** | **Number**| Id of the quickReceipt to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addQuickReceiptTag"></a>
# **addQuickReceiptTag**
> addQuickReceiptTag(quickReceiptId, quickReceiptTag)

Add new tags for a quickReceipt.

Adds a tag to an existing quickReceipt.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to add a tag to

var quickReceiptTag = "quickReceiptTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addQuickReceiptTag(quickReceiptId, quickReceiptTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to add a tag to | 
 **quickReceiptTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuickReceipt"></a>
# **deleteQuickReceipt**
> deleteQuickReceipt(quickReceiptId)

Delete a quickReceipt

Deletes the quickReceipt identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteQuickReceipt(quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteQuickReceiptFile"></a>
# **deleteQuickReceiptFile**
> deleteQuickReceiptFile(quickReceiptId, fileId)

Delete a file for a quickReceipt.

Deletes an existing quickReceipt file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteQuickReceiptFile(quickReceiptId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteQuickReceiptTag"></a>
# **deleteQuickReceiptTag**
> deleteQuickReceiptTag(quickReceiptId, quickReceiptTag)

Delete a tag for a quickReceipt.

Deletes an existing quickReceipt tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to remove tag from

var quickReceiptTag = "quickReceiptTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteQuickReceiptTag(quickReceiptId, quickReceiptTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to remove tag from | 
 **quickReceiptTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executeQuickReceipt"></a>
# **executeQuickReceipt**
> [ProcessOutputAPIModel] executeQuickReceipt(body)

Run the ExecuteQuickReceipt process.



### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var body = new infoplus.ExecuteQuickReceiptInputAPIModel(); // ExecuteQuickReceiptInputAPIModel | Input data for ExecuteQuickReceipt process.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executeQuickReceipt(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecuteQuickReceiptInputAPIModel**](ExecuteQuickReceiptInputAPIModel.md)| Input data for ExecuteQuickReceipt process. | 

### Return type

[**[ProcessOutputAPIModel]**](ProcessOutputAPIModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateQuickReceiptById"></a>
# **getDuplicateQuickReceiptById**
> QuickReceipt getDuplicateQuickReceiptById(quickReceiptId)

Get a duplicated a quickReceipt by id

Returns a duplicated quickReceipt identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateQuickReceiptById(quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to be duplicated. | 

### Return type

[**QuickReceipt**](QuickReceipt.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickReceiptByFilter"></a>
# **getQuickReceiptByFilter**
> [QuickReceipt] getQuickReceiptByFilter(opts)

Search quickReceipts by filter

Returns the list of quickReceipts that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

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
apiInstance.getQuickReceiptByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[QuickReceipt]**](QuickReceipt.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickReceiptById"></a>
# **getQuickReceiptById**
> QuickReceipt getQuickReceiptById(quickReceiptId)

Get a quickReceipt by id

Returns the quickReceipt identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuickReceiptById(quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to be returned. | 

### Return type

[**QuickReceipt**](QuickReceipt.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickReceiptFiles"></a>
# **getQuickReceiptFiles**
> getQuickReceiptFiles(quickReceiptId)

Get the files for a quickReceipt.

Get all existing quickReceipt files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getQuickReceiptFiles(quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuickReceiptTags"></a>
# **getQuickReceiptTags**
> getQuickReceiptTags(quickReceiptId)

Get the tags for a quickReceipt.

Get all existing quickReceipt tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var quickReceiptId = 56; // Number | Id of the quickReceipt to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getQuickReceiptTags(quickReceiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickReceiptId** | **Number**| Id of the quickReceipt to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateQuickReceipt"></a>
# **updateQuickReceipt**
> updateQuickReceipt(body)

Update a quickReceipt

Updates an existing quickReceipt using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var body = new infoplus.QuickReceipt(); // QuickReceipt | QuickReceipt to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateQuickReceipt(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickReceipt**](QuickReceipt.md)| QuickReceipt to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateQuickReceiptCustomFields"></a>
# **updateQuickReceiptCustomFields**
> updateQuickReceiptCustomFields(body)

Update a quickReceipt custom fields

Updates an existing quickReceipt custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.QuickReceiptApi();

var body = new infoplus.QuickReceipt(); // QuickReceipt | QuickReceipt to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateQuickReceiptCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickReceipt**](QuickReceipt.md)| QuickReceipt to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

