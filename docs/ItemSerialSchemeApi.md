# infoplus.ItemSerialSchemeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemSerialScheme**](ItemSerialSchemeApi.md#addItemSerialScheme) | **POST** /beta/itemSerialScheme | Create an itemSerialScheme
[**addItemSerialSchemeAudit**](ItemSerialSchemeApi.md#addItemSerialSchemeAudit) | **PUT** /beta/itemSerialScheme/{itemSerialSchemeId}/audit/{itemSerialSchemeAudit} | Add new audit for an itemSerialScheme
[**addItemSerialSchemeFile**](ItemSerialSchemeApi.md#addItemSerialSchemeFile) | **POST** /beta/itemSerialScheme/{itemSerialSchemeId}/file/{fileName} | Attach a file to an itemSerialScheme
[**addItemSerialSchemeFileByURL**](ItemSerialSchemeApi.md#addItemSerialSchemeFileByURL) | **POST** /beta/itemSerialScheme/{itemSerialSchemeId}/file | Attach a file to an itemSerialScheme by URL.
[**addItemSerialSchemeTag**](ItemSerialSchemeApi.md#addItemSerialSchemeTag) | **PUT** /beta/itemSerialScheme/{itemSerialSchemeId}/tag/{itemSerialSchemeTag} | Add new tags for an itemSerialScheme.
[**deleteItemSerialScheme**](ItemSerialSchemeApi.md#deleteItemSerialScheme) | **DELETE** /beta/itemSerialScheme/{itemSerialSchemeId} | Delete an itemSerialScheme
[**deleteItemSerialSchemeFile**](ItemSerialSchemeApi.md#deleteItemSerialSchemeFile) | **DELETE** /beta/itemSerialScheme/{itemSerialSchemeId}/file/{fileId} | Delete a file for an itemSerialScheme.
[**deleteItemSerialSchemeTag**](ItemSerialSchemeApi.md#deleteItemSerialSchemeTag) | **DELETE** /beta/itemSerialScheme/{itemSerialSchemeId}/tag/{itemSerialSchemeTag} | Delete a tag for an itemSerialScheme.
[**getDuplicateItemSerialSchemeById**](ItemSerialSchemeApi.md#getDuplicateItemSerialSchemeById) | **GET** /beta/itemSerialScheme/duplicate/{itemSerialSchemeId} | Get a duplicated an itemSerialScheme by id
[**getItemSerialSchemeByFilter**](ItemSerialSchemeApi.md#getItemSerialSchemeByFilter) | **GET** /beta/itemSerialScheme/search | Search itemSerialSchemes by filter
[**getItemSerialSchemeById**](ItemSerialSchemeApi.md#getItemSerialSchemeById) | **GET** /beta/itemSerialScheme/{itemSerialSchemeId} | Get an itemSerialScheme by id
[**getItemSerialSchemeFiles**](ItemSerialSchemeApi.md#getItemSerialSchemeFiles) | **GET** /beta/itemSerialScheme/{itemSerialSchemeId}/file | Get the files for an itemSerialScheme.
[**getItemSerialSchemeTags**](ItemSerialSchemeApi.md#getItemSerialSchemeTags) | **GET** /beta/itemSerialScheme/{itemSerialSchemeId}/tag | Get the tags for an itemSerialScheme.
[**updateItemSerialScheme**](ItemSerialSchemeApi.md#updateItemSerialScheme) | **PUT** /beta/itemSerialScheme | Update an itemSerialScheme


<a name="addItemSerialScheme"></a>
# **addItemSerialScheme**
> ItemSerialScheme addItemSerialScheme(body)

Create an itemSerialScheme

Inserts a new itemSerialScheme using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var body = new infoplus.ItemSerialScheme(); // ItemSerialScheme | ItemSerialScheme to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemSerialScheme(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSerialScheme**](ItemSerialScheme.md)| ItemSerialScheme to be inserted. | 

### Return type

[**ItemSerialScheme**](ItemSerialScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSerialSchemeAudit"></a>
# **addItemSerialSchemeAudit**
> addItemSerialSchemeAudit(itemSerialSchemeId, itemSerialSchemeAudit)

Add new audit for an itemSerialScheme

Adds an audit to an existing itemSerialScheme.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to add an audit to

var itemSerialSchemeAudit = "itemSerialSchemeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialSchemeAudit(itemSerialSchemeId, itemSerialSchemeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to add an audit to | 
 **itemSerialSchemeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSerialSchemeFile"></a>
# **addItemSerialSchemeFile**
> addItemSerialSchemeFile(itemSerialSchemeId, fileName)

Attach a file to an itemSerialScheme

Adds a file to an existing itemSerialScheme.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialSchemeFile(itemSerialSchemeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemSerialSchemeFileByURL"></a>
# **addItemSerialSchemeFileByURL**
> addItemSerialSchemeFileByURL(body, itemSerialSchemeId)

Attach a file to an itemSerialScheme by URL.

Adds a file to an existing itemSerialScheme by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialSchemeFileByURL(body, itemSerialSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSerialSchemeTag"></a>
# **addItemSerialSchemeTag**
> addItemSerialSchemeTag(itemSerialSchemeId, itemSerialSchemeTag)

Add new tags for an itemSerialScheme.

Adds a tag to an existing itemSerialScheme.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to add a tag to

var itemSerialSchemeTag = "itemSerialSchemeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSerialSchemeTag(itemSerialSchemeId, itemSerialSchemeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to add a tag to | 
 **itemSerialSchemeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemSerialScheme"></a>
# **deleteItemSerialScheme**
> deleteItemSerialScheme(itemSerialSchemeId)

Delete an itemSerialScheme

Deletes the itemSerialScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSerialScheme(itemSerialSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSerialSchemeFile"></a>
# **deleteItemSerialSchemeFile**
> deleteItemSerialSchemeFile(itemSerialSchemeId, fileId)

Delete a file for an itemSerialScheme.

Deletes an existing itemSerialScheme file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSerialSchemeFile(itemSerialSchemeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSerialSchemeTag"></a>
# **deleteItemSerialSchemeTag**
> deleteItemSerialSchemeTag(itemSerialSchemeId, itemSerialSchemeTag)

Delete a tag for an itemSerialScheme.

Deletes an existing itemSerialScheme tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to remove tag from

var itemSerialSchemeTag = "itemSerialSchemeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSerialSchemeTag(itemSerialSchemeId, itemSerialSchemeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to remove tag from | 
 **itemSerialSchemeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemSerialSchemeById"></a>
# **getDuplicateItemSerialSchemeById**
> ItemSerialScheme getDuplicateItemSerialSchemeById(itemSerialSchemeId)

Get a duplicated an itemSerialScheme by id

Returns a duplicated itemSerialScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemSerialSchemeById(itemSerialSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to be duplicated. | 

### Return type

[**ItemSerialScheme**](ItemSerialScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialSchemeByFilter"></a>
# **getItemSerialSchemeByFilter**
> [ItemSerialScheme] getItemSerialSchemeByFilter(opts)

Search itemSerialSchemes by filter

Returns the list of itemSerialSchemes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

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
apiInstance.getItemSerialSchemeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemSerialScheme]**](ItemSerialScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialSchemeById"></a>
# **getItemSerialSchemeById**
> ItemSerialScheme getItemSerialSchemeById(itemSerialSchemeId)

Get an itemSerialScheme by id

Returns the itemSerialScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemSerialSchemeById(itemSerialSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to be returned. | 

### Return type

[**ItemSerialScheme**](ItemSerialScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialSchemeFiles"></a>
# **getItemSerialSchemeFiles**
> getItemSerialSchemeFiles(itemSerialSchemeId)

Get the files for an itemSerialScheme.

Get all existing itemSerialScheme files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSerialSchemeFiles(itemSerialSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSerialSchemeTags"></a>
# **getItemSerialSchemeTags**
> getItemSerialSchemeTags(itemSerialSchemeId)

Get the tags for an itemSerialScheme.

Get all existing itemSerialScheme tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var itemSerialSchemeId = 56; // Number | Id of the itemSerialScheme to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSerialSchemeTags(itemSerialSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSerialSchemeId** | **Number**| Id of the itemSerialScheme to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemSerialScheme"></a>
# **updateItemSerialScheme**
> updateItemSerialScheme(body)

Update an itemSerialScheme

Updates an existing itemSerialScheme using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSerialSchemeApi();

var body = new infoplus.ItemSerialScheme(); // ItemSerialScheme | ItemSerialScheme to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemSerialScheme(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSerialScheme**](ItemSerialScheme.md)| ItemSerialScheme to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

