# infoplus.ItemSummaryCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemSummaryCode**](ItemSummaryCodeApi.md#addItemSummaryCode) | **POST** /v3.0/itemSummaryCode | Create an itemSummaryCode
[**addItemSummaryCodeAudit**](ItemSummaryCodeApi.md#addItemSummaryCodeAudit) | **PUT** /v3.0/itemSummaryCode/{itemSummaryCodeId}/audit/{itemSummaryCodeAudit} | Add new audit for an itemSummaryCode
[**addItemSummaryCodeFile**](ItemSummaryCodeApi.md#addItemSummaryCodeFile) | **POST** /v3.0/itemSummaryCode/{itemSummaryCodeId}/file/{fileName} | Attach a file to an itemSummaryCode
[**addItemSummaryCodeFileByURL**](ItemSummaryCodeApi.md#addItemSummaryCodeFileByURL) | **POST** /v3.0/itemSummaryCode/{itemSummaryCodeId}/file | Attach a file to an itemSummaryCode by URL.
[**addItemSummaryCodeTag**](ItemSummaryCodeApi.md#addItemSummaryCodeTag) | **PUT** /v3.0/itemSummaryCode/{itemSummaryCodeId}/tag/{itemSummaryCodeTag} | Add new tags for an itemSummaryCode.
[**deleteItemSummaryCode**](ItemSummaryCodeApi.md#deleteItemSummaryCode) | **DELETE** /v3.0/itemSummaryCode/{itemSummaryCodeId} | Delete an itemSummaryCode
[**deleteItemSummaryCodeFile**](ItemSummaryCodeApi.md#deleteItemSummaryCodeFile) | **DELETE** /v3.0/itemSummaryCode/{itemSummaryCodeId}/file/{fileId} | Delete a file for an itemSummaryCode.
[**deleteItemSummaryCodeTag**](ItemSummaryCodeApi.md#deleteItemSummaryCodeTag) | **DELETE** /v3.0/itemSummaryCode/{itemSummaryCodeId}/tag/{itemSummaryCodeTag} | Delete a tag for an itemSummaryCode.
[**getDuplicateItemSummaryCodeById**](ItemSummaryCodeApi.md#getDuplicateItemSummaryCodeById) | **GET** /v3.0/itemSummaryCode/duplicate/{itemSummaryCodeId} | Get a duplicated an itemSummaryCode by id
[**getItemSummaryCodeByFilter**](ItemSummaryCodeApi.md#getItemSummaryCodeByFilter) | **GET** /v3.0/itemSummaryCode/search | Search itemSummaryCodes by filter
[**getItemSummaryCodeById**](ItemSummaryCodeApi.md#getItemSummaryCodeById) | **GET** /v3.0/itemSummaryCode/{itemSummaryCodeId} | Get an itemSummaryCode by id
[**getItemSummaryCodeFiles**](ItemSummaryCodeApi.md#getItemSummaryCodeFiles) | **GET** /v3.0/itemSummaryCode/{itemSummaryCodeId}/file | Get the files for an itemSummaryCode.
[**getItemSummaryCodeTags**](ItemSummaryCodeApi.md#getItemSummaryCodeTags) | **GET** /v3.0/itemSummaryCode/{itemSummaryCodeId}/tag | Get the tags for an itemSummaryCode.
[**updateItemSummaryCode**](ItemSummaryCodeApi.md#updateItemSummaryCode) | **PUT** /v3.0/itemSummaryCode | Update an itemSummaryCode


<a name="addItemSummaryCode"></a>
# **addItemSummaryCode**
> ItemSummaryCode addItemSummaryCode(body)

Create an itemSummaryCode

Inserts a new itemSummaryCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var body = new infoplus.ItemSummaryCode(); // ItemSummaryCode | ItemSummaryCode to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemSummaryCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSummaryCode**](ItemSummaryCode.md)| ItemSummaryCode to be inserted. | 

### Return type

[**ItemSummaryCode**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSummaryCodeAudit"></a>
# **addItemSummaryCodeAudit**
> addItemSummaryCodeAudit(itemSummaryCodeId, itemSummaryCodeAudit)

Add new audit for an itemSummaryCode

Adds an audit to an existing itemSummaryCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to add an audit to

var itemSummaryCodeAudit = "itemSummaryCodeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSummaryCodeAudit(itemSummaryCodeId, itemSummaryCodeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to add an audit to | 
 **itemSummaryCodeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSummaryCodeFile"></a>
# **addItemSummaryCodeFile**
> addItemSummaryCodeFile(itemSummaryCodeId, fileName)

Attach a file to an itemSummaryCode

Adds a file to an existing itemSummaryCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSummaryCodeFile(itemSummaryCodeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemSummaryCodeFileByURL"></a>
# **addItemSummaryCodeFileByURL**
> addItemSummaryCodeFileByURL(body, itemSummaryCodeId)

Attach a file to an itemSummaryCode by URL.

Adds a file to an existing itemSummaryCode by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSummaryCodeFileByURL(body, itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSummaryCodeTag"></a>
# **addItemSummaryCodeTag**
> addItemSummaryCodeTag(itemSummaryCodeId, itemSummaryCodeTag)

Add new tags for an itemSummaryCode.

Adds a tag to an existing itemSummaryCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to add a tag to

var itemSummaryCodeTag = "itemSummaryCodeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSummaryCodeTag(itemSummaryCodeId, itemSummaryCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to add a tag to | 
 **itemSummaryCodeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemSummaryCode"></a>
# **deleteItemSummaryCode**
> deleteItemSummaryCode(itemSummaryCodeId)

Delete an itemSummaryCode

Deletes the itemSummaryCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSummaryCode(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSummaryCodeFile"></a>
# **deleteItemSummaryCodeFile**
> deleteItemSummaryCodeFile(itemSummaryCodeId, fileId)

Delete a file for an itemSummaryCode.

Deletes an existing itemSummaryCode file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSummaryCodeFile(itemSummaryCodeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSummaryCodeTag"></a>
# **deleteItemSummaryCodeTag**
> deleteItemSummaryCodeTag(itemSummaryCodeId, itemSummaryCodeTag)

Delete a tag for an itemSummaryCode.

Deletes an existing itemSummaryCode tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to remove tag from

var itemSummaryCodeTag = "itemSummaryCodeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSummaryCodeTag(itemSummaryCodeId, itemSummaryCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to remove tag from | 
 **itemSummaryCodeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemSummaryCodeById"></a>
# **getDuplicateItemSummaryCodeById**
> ItemSummaryCode getDuplicateItemSummaryCodeById(itemSummaryCodeId)

Get a duplicated an itemSummaryCode by id

Returns a duplicated itemSummaryCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemSummaryCodeById(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to be duplicated. | 

### Return type

[**ItemSummaryCode**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSummaryCodeByFilter"></a>
# **getItemSummaryCodeByFilter**
> [ItemSummaryCode] getItemSummaryCodeByFilter(opts)

Search itemSummaryCodes by filter

Returns the list of itemSummaryCodes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

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
apiInstance.getItemSummaryCodeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemSummaryCode]**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSummaryCodeById"></a>
# **getItemSummaryCodeById**
> ItemSummaryCode getItemSummaryCodeById(itemSummaryCodeId)

Get an itemSummaryCode by id

Returns the itemSummaryCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemSummaryCodeById(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to be returned. | 

### Return type

[**ItemSummaryCode**](ItemSummaryCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSummaryCodeFiles"></a>
# **getItemSummaryCodeFiles**
> getItemSummaryCodeFiles(itemSummaryCodeId)

Get the files for an itemSummaryCode.

Get all existing itemSummaryCode files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSummaryCodeFiles(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSummaryCodeTags"></a>
# **getItemSummaryCodeTags**
> getItemSummaryCodeTags(itemSummaryCodeId)

Get the tags for an itemSummaryCode.

Get all existing itemSummaryCode tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var itemSummaryCodeId = 56; // Number | Id of the itemSummaryCode to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSummaryCodeTags(itemSummaryCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSummaryCodeId** | **Number**| Id of the itemSummaryCode to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemSummaryCode"></a>
# **updateItemSummaryCode**
> updateItemSummaryCode(body)

Update an itemSummaryCode

Updates an existing itemSummaryCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSummaryCodeApi();

var body = new infoplus.ItemSummaryCode(); // ItemSummaryCode | ItemSummaryCode to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemSummaryCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSummaryCode**](ItemSummaryCode.md)| ItemSummaryCode to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

