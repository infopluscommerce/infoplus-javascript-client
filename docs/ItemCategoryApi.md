# infoplus.ItemCategoryApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemCategory**](ItemCategoryApi.md#addItemCategory) | **POST** /beta/itemCategory | Create an itemCategory
[**addItemCategoryAudit**](ItemCategoryApi.md#addItemCategoryAudit) | **PUT** /beta/itemCategory/{itemCategoryId}/audit/{itemCategoryAudit} | Add new audit for an itemCategory
[**addItemCategoryFile**](ItemCategoryApi.md#addItemCategoryFile) | **POST** /beta/itemCategory/{itemCategoryId}/file/{fileName} | Attach a file to an itemCategory
[**addItemCategoryFileByURL**](ItemCategoryApi.md#addItemCategoryFileByURL) | **POST** /beta/itemCategory/{itemCategoryId}/file | Attach a file to an itemCategory by URL.
[**addItemCategoryTag**](ItemCategoryApi.md#addItemCategoryTag) | **PUT** /beta/itemCategory/{itemCategoryId}/tag/{itemCategoryTag} | Add new tags for an itemCategory.
[**deleteItemCategory**](ItemCategoryApi.md#deleteItemCategory) | **DELETE** /beta/itemCategory/{itemCategoryId} | Delete an itemCategory
[**deleteItemCategoryFile**](ItemCategoryApi.md#deleteItemCategoryFile) | **DELETE** /beta/itemCategory/{itemCategoryId}/file/{fileId} | Delete a file for an itemCategory.
[**deleteItemCategoryTag**](ItemCategoryApi.md#deleteItemCategoryTag) | **DELETE** /beta/itemCategory/{itemCategoryId}/tag/{itemCategoryTag} | Delete a tag for an itemCategory.
[**getDuplicateItemCategoryById**](ItemCategoryApi.md#getDuplicateItemCategoryById) | **GET** /beta/itemCategory/duplicate/{itemCategoryId} | Get a duplicated an itemCategory by id
[**getItemCategoryByFilter**](ItemCategoryApi.md#getItemCategoryByFilter) | **GET** /beta/itemCategory/search | Search itemCategorys by filter
[**getItemCategoryById**](ItemCategoryApi.md#getItemCategoryById) | **GET** /beta/itemCategory/{itemCategoryId} | Get an itemCategory by id
[**getItemCategoryFiles**](ItemCategoryApi.md#getItemCategoryFiles) | **GET** /beta/itemCategory/{itemCategoryId}/file | Get the files for an itemCategory.
[**getItemCategoryTags**](ItemCategoryApi.md#getItemCategoryTags) | **GET** /beta/itemCategory/{itemCategoryId}/tag | Get the tags for an itemCategory.
[**updateItemCategory**](ItemCategoryApi.md#updateItemCategory) | **PUT** /beta/itemCategory | Update an itemCategory


<a name="addItemCategory"></a>
# **addItemCategory**
> ItemCategory addItemCategory(body)

Create an itemCategory

Inserts a new itemCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var body = new infoplus.ItemCategory(); // ItemCategory | ItemCategory to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemCategory**](ItemCategory.md)| ItemCategory to be inserted. | 

### Return type

[**ItemCategory**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemCategoryAudit"></a>
# **addItemCategoryAudit**
> addItemCategoryAudit(itemCategoryId, itemCategoryAudit)

Add new audit for an itemCategory

Adds an audit to an existing itemCategory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to add an audit to

var itemCategoryAudit = "itemCategoryAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemCategoryAudit(itemCategoryId, itemCategoryAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to add an audit to | 
 **itemCategoryAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemCategoryFile"></a>
# **addItemCategoryFile**
> addItemCategoryFile(itemCategoryId, fileName)

Attach a file to an itemCategory

Adds a file to an existing itemCategory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemCategoryFile(itemCategoryId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemCategoryFileByURL"></a>
# **addItemCategoryFileByURL**
> addItemCategoryFileByURL(body, itemCategoryId)

Attach a file to an itemCategory by URL.

Adds a file to an existing itemCategory by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var itemCategoryId = 56; // Number | Id of the itemCategory to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemCategoryFileByURL(body, itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **itemCategoryId** | **Number**| Id of the itemCategory to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemCategoryTag"></a>
# **addItemCategoryTag**
> addItemCategoryTag(itemCategoryId, itemCategoryTag)

Add new tags for an itemCategory.

Adds a tag to an existing itemCategory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to add a tag to

var itemCategoryTag = "itemCategoryTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemCategoryTag(itemCategoryId, itemCategoryTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to add a tag to | 
 **itemCategoryTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemCategory"></a>
# **deleteItemCategory**
> deleteItemCategory(itemCategoryId)

Delete an itemCategory

Deletes the itemCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemCategory(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemCategoryFile"></a>
# **deleteItemCategoryFile**
> deleteItemCategoryFile(itemCategoryId, fileId)

Delete a file for an itemCategory.

Deletes an existing itemCategory file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemCategoryFile(itemCategoryId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemCategoryTag"></a>
# **deleteItemCategoryTag**
> deleteItemCategoryTag(itemCategoryId, itemCategoryTag)

Delete a tag for an itemCategory.

Deletes an existing itemCategory tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to remove tag from

var itemCategoryTag = "itemCategoryTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemCategoryTag(itemCategoryId, itemCategoryTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to remove tag from | 
 **itemCategoryTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemCategoryById"></a>
# **getDuplicateItemCategoryById**
> ItemCategory getDuplicateItemCategoryById(itemCategoryId)

Get a duplicated an itemCategory by id

Returns a duplicated itemCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemCategoryById(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to be duplicated. | 

### Return type

[**ItemCategory**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemCategoryByFilter"></a>
# **getItemCategoryByFilter**
> [ItemCategory] getItemCategoryByFilter(opts)

Search itemCategorys by filter

Returns the list of itemCategorys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

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
apiInstance.getItemCategoryByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemCategory]**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemCategoryById"></a>
# **getItemCategoryById**
> ItemCategory getItemCategoryById(itemCategoryId)

Get an itemCategory by id

Returns the itemCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemCategoryById(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to be returned. | 

### Return type

[**ItemCategory**](ItemCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemCategoryFiles"></a>
# **getItemCategoryFiles**
> getItemCategoryFiles(itemCategoryId)

Get the files for an itemCategory.

Get all existing itemCategory files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemCategoryFiles(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemCategoryTags"></a>
# **getItemCategoryTags**
> getItemCategoryTags(itemCategoryId)

Get the tags for an itemCategory.

Get all existing itemCategory tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var itemCategoryId = 56; // Number | Id of the itemCategory to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemCategoryTags(itemCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCategoryId** | **Number**| Id of the itemCategory to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemCategory"></a>
# **updateItemCategory**
> updateItemCategory(body)

Update an itemCategory

Updates an existing itemCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemCategoryApi();

var body = new infoplus.ItemCategory(); // ItemCategory | ItemCategory to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemCategory**](ItemCategory.md)| ItemCategory to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

