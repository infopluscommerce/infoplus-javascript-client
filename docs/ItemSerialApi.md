# infoplus.ItemSerialApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemSerial**](ItemSerialApi.md#addItemSerial) | **POST** /v3.0/itemSerial | Create an itemSerial
[**addItemSerialAudit**](ItemSerialApi.md#addItemSerialAudit) | **PUT** /v3.0/itemSerial/{itemSerialId}/audit/{itemSerialAudit} | Add new audit for an itemSerial
[**addItemSerialFile**](ItemSerialApi.md#addItemSerialFile) | **POST** /v3.0/itemSerial/{itemSerialId}/file/{fileName} | Attach a file to an itemSerial
[**addItemSerialFileByURL**](ItemSerialApi.md#addItemSerialFileByURL) | **POST** /v3.0/itemSerial/{itemSerialId}/file | Attach a file to an itemSerial by URL.
[**addItemSerialTag**](ItemSerialApi.md#addItemSerialTag) | **PUT** /v3.0/itemSerial/{itemSerialId}/tag/{itemSerialTag} | Add new tags for an itemSerial.
[**deleteItemSerial**](ItemSerialApi.md#deleteItemSerial) | **DELETE** /v3.0/itemSerial/{itemSerialId} | Delete an itemSerial
[**deleteItemSerialFile**](ItemSerialApi.md#deleteItemSerialFile) | **DELETE** /v3.0/itemSerial/{itemSerialId}/file/{fileId} | Delete a file for an itemSerial.
[**deleteItemSerialTag**](ItemSerialApi.md#deleteItemSerialTag) | **DELETE** /v3.0/itemSerial/{itemSerialId}/tag/{itemSerialTag} | Delete a tag for an itemSerial.
[**getDuplicateItemSerialById**](ItemSerialApi.md#getDuplicateItemSerialById) | **GET** /v3.0/itemSerial/duplicate/{itemSerialId} | Get a duplicated an itemSerial by id
[**getItemSerialByFilter**](ItemSerialApi.md#getItemSerialByFilter) | **GET** /v3.0/itemSerial/search | Search itemSerials by filter
[**getItemSerialById**](ItemSerialApi.md#getItemSerialById) | **GET** /v3.0/itemSerial/{itemSerialId} | Get an itemSerial by id
[**getItemSerialFiles**](ItemSerialApi.md#getItemSerialFiles) | **GET** /v3.0/itemSerial/{itemSerialId}/file | Get the files for an itemSerial.
[**getItemSerialTags**](ItemSerialApi.md#getItemSerialTags) | **GET** /v3.0/itemSerial/{itemSerialId}/tag | Get the tags for an itemSerial.
[**updateItemSerial**](ItemSerialApi.md#updateItemSerial) | **PUT** /v3.0/itemSerial | Update an itemSerial


<a name="addItemSerial"></a>
# **addItemSerial**
> ItemSerial addItemSerial(body)

Create an itemSerial

Inserts a new itemSerial using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var body = new infoplus.ItemSerial(); // ItemSerial | ItemSerial to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemSerial(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSerial**](ItemSerial.md)| ItemSerial to be inserted. | 

### Return type

[**ItemSerial**](ItemSerial.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSerialAudit"></a>
# **addItemSerialAudit**
> addItemSerialAudit(itemSerialId, itemSerialAudit)

Add new audit for an itemSerial

Adds an audit to an existing itemSerial.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to add an audit to

var itemSerialAudit = "itemSerialAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialAudit(itemSerialId, itemSerialAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to add an audit to | 
 **itemSerialAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSerialFile"></a>
# **addItemSerialFile**
> addItemSerialFile(itemSerialId, fileName)

Attach a file to an itemSerial

Adds a file to an existing itemSerial.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialFile(itemSerialId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemSerialFileByURL"></a>
# **addItemSerialFileByURL**
> addItemSerialFileByURL(body, itemSerialId)

Attach a file to an itemSerial by URL.

Adds a file to an existing itemSerial by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var itemSerialId = 56; // Number | Id of the itemSerial to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialFileByURL(body, itemSerialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **itemSerialId** | **Number**| Id of the itemSerial to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSerialTag"></a>
# **addItemSerialTag**
> addItemSerialTag(itemSerialId, itemSerialTag)

Add new tags for an itemSerial.

Adds a tag to an existing itemSerial.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to add a tag to

var itemSerialTag = "itemSerialTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialTag(itemSerialId, itemSerialTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to add a tag to | 
 **itemSerialTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemSerial"></a>
# **deleteItemSerial**
> deleteItemSerial(itemSerialId)

Delete an itemSerial

Deletes the itemSerial identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSerial(itemSerialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSerialFile"></a>
# **deleteItemSerialFile**
> deleteItemSerialFile(itemSerialId, fileId)

Delete a file for an itemSerial.

Deletes an existing itemSerial file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSerialFile(itemSerialId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSerialTag"></a>
# **deleteItemSerialTag**
> deleteItemSerialTag(itemSerialId, itemSerialTag)

Delete a tag for an itemSerial.

Deletes an existing itemSerial tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to remove tag from

var itemSerialTag = "itemSerialTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSerialTag(itemSerialId, itemSerialTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to remove tag from | 
 **itemSerialTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemSerialById"></a>
# **getDuplicateItemSerialById**
> ItemSerial getDuplicateItemSerialById(itemSerialId)

Get a duplicated an itemSerial by id

Returns a duplicated itemSerial identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemSerialById(itemSerialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to be duplicated. | 

### Return type

[**ItemSerial**](ItemSerial.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialByFilter"></a>
# **getItemSerialByFilter**
> [ItemSerial] getItemSerialByFilter(opts)

Search itemSerials by filter

Returns the list of itemSerials that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

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
apiInstance.getItemSerialByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemSerial]**](ItemSerial.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialById"></a>
# **getItemSerialById**
> ItemSerial getItemSerialById(itemSerialId)

Get an itemSerial by id

Returns the itemSerial identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemSerialById(itemSerialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to be returned. | 

### Return type

[**ItemSerial**](ItemSerial.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialFiles"></a>
# **getItemSerialFiles**
> getItemSerialFiles(itemSerialId)

Get the files for an itemSerial.

Get all existing itemSerial files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSerialFiles(itemSerialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialTags"></a>
# **getItemSerialTags**
> getItemSerialTags(itemSerialId)

Get the tags for an itemSerial.

Get all existing itemSerial tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var itemSerialId = 56; // Number | Id of the itemSerial to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSerialTags(itemSerialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialId** | **Number**| Id of the itemSerial to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemSerial"></a>
# **updateItemSerial**
> updateItemSerial(body)

Update an itemSerial

Updates an existing itemSerial using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialApi();

var body = new infoplus.ItemSerial(); // ItemSerial | ItemSerial to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemSerial(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSerial**](ItemSerial.md)| ItemSerial to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

