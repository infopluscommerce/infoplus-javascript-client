# infoplus.ItemSubCategoryApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemSubCategory**](ItemSubCategoryApi.md#addItemSubCategory) | **POST** /v3.0/itemSubCategory | Create an itemSubCategory
[**addItemSubCategoryAudit**](ItemSubCategoryApi.md#addItemSubCategoryAudit) | **PUT** /v3.0/itemSubCategory/{itemSubCategoryId}/audit/{itemSubCategoryAudit} | Add new audit for an itemSubCategory
[**addItemSubCategoryFile**](ItemSubCategoryApi.md#addItemSubCategoryFile) | **POST** /v3.0/itemSubCategory/{itemSubCategoryId}/file/{fileName} | Attach a file to an itemSubCategory
[**addItemSubCategoryFileByURL**](ItemSubCategoryApi.md#addItemSubCategoryFileByURL) | **POST** /v3.0/itemSubCategory/{itemSubCategoryId}/file | Attach a file to an itemSubCategory by URL.
[**addItemSubCategoryTag**](ItemSubCategoryApi.md#addItemSubCategoryTag) | **PUT** /v3.0/itemSubCategory/{itemSubCategoryId}/tag/{itemSubCategoryTag} | Add new tags for an itemSubCategory.
[**deleteItemSubCategory**](ItemSubCategoryApi.md#deleteItemSubCategory) | **DELETE** /v3.0/itemSubCategory/{itemSubCategoryId} | Delete an itemSubCategory
[**deleteItemSubCategoryFile**](ItemSubCategoryApi.md#deleteItemSubCategoryFile) | **DELETE** /v3.0/itemSubCategory/{itemSubCategoryId}/file/{fileId} | Delete a file for an itemSubCategory.
[**deleteItemSubCategoryTag**](ItemSubCategoryApi.md#deleteItemSubCategoryTag) | **DELETE** /v3.0/itemSubCategory/{itemSubCategoryId}/tag/{itemSubCategoryTag} | Delete a tag for an itemSubCategory.
[**getDuplicateItemSubCategoryById**](ItemSubCategoryApi.md#getDuplicateItemSubCategoryById) | **GET** /v3.0/itemSubCategory/duplicate/{itemSubCategoryId} | Get a duplicated an itemSubCategory by id
[**getItemSubCategoryByFilter**](ItemSubCategoryApi.md#getItemSubCategoryByFilter) | **GET** /v3.0/itemSubCategory/search | Search itemSubCategorys by filter
[**getItemSubCategoryById**](ItemSubCategoryApi.md#getItemSubCategoryById) | **GET** /v3.0/itemSubCategory/{itemSubCategoryId} | Get an itemSubCategory by id
[**getItemSubCategoryFiles**](ItemSubCategoryApi.md#getItemSubCategoryFiles) | **GET** /v3.0/itemSubCategory/{itemSubCategoryId}/file | Get the files for an itemSubCategory.
[**getItemSubCategoryTags**](ItemSubCategoryApi.md#getItemSubCategoryTags) | **GET** /v3.0/itemSubCategory/{itemSubCategoryId}/tag | Get the tags for an itemSubCategory.
[**updateItemSubCategory**](ItemSubCategoryApi.md#updateItemSubCategory) | **PUT** /v3.0/itemSubCategory | Update an itemSubCategory


<a name="addItemSubCategory"></a>
# **addItemSubCategory**
> ItemSubCategory addItemSubCategory(body)

Create an itemSubCategory

Inserts a new itemSubCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var body = new infoplus.ItemSubCategory(); // ItemSubCategory | ItemSubCategory to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemSubCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSubCategory**](ItemSubCategory.md)| ItemSubCategory to be inserted. | 

### Return type

[**ItemSubCategory**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSubCategoryAudit"></a>
# **addItemSubCategoryAudit**
> addItemSubCategoryAudit(itemSubCategoryId, itemSubCategoryAudit)

Add new audit for an itemSubCategory

Adds an audit to an existing itemSubCategory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to add an audit to

var itemSubCategoryAudit = "itemSubCategoryAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSubCategoryAudit(itemSubCategoryId, itemSubCategoryAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to add an audit to | 
 **itemSubCategoryAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSubCategoryFile"></a>
# **addItemSubCategoryFile**
> addItemSubCategoryFile(itemSubCategoryId, fileName)

Attach a file to an itemSubCategory

Adds a file to an existing itemSubCategory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSubCategoryFile(itemSubCategoryId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemSubCategoryFileByURL"></a>
# **addItemSubCategoryFileByURL**
> addItemSubCategoryFileByURL(body, itemSubCategoryId)

Attach a file to an itemSubCategory by URL.

Adds a file to an existing itemSubCategory by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSubCategoryFileByURL(body, itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemSubCategoryTag"></a>
# **addItemSubCategoryTag**
> addItemSubCategoryTag(itemSubCategoryId, itemSubCategoryTag)

Add new tags for an itemSubCategory.

Adds a tag to an existing itemSubCategory.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to add a tag to

var itemSubCategoryTag = "itemSubCategoryTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemSubCategoryTag(itemSubCategoryId, itemSubCategoryTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to add a tag to | 
 **itemSubCategoryTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemSubCategory"></a>
# **deleteItemSubCategory**
> deleteItemSubCategory(itemSubCategoryId)

Delete an itemSubCategory

Deletes the itemSubCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSubCategory(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSubCategoryFile"></a>
# **deleteItemSubCategoryFile**
> deleteItemSubCategoryFile(itemSubCategoryId, fileId)

Delete a file for an itemSubCategory.

Deletes an existing itemSubCategory file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSubCategoryFile(itemSubCategoryId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemSubCategoryTag"></a>
# **deleteItemSubCategoryTag**
> deleteItemSubCategoryTag(itemSubCategoryId, itemSubCategoryTag)

Delete a tag for an itemSubCategory.

Deletes an existing itemSubCategory tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to remove tag from

var itemSubCategoryTag = "itemSubCategoryTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemSubCategoryTag(itemSubCategoryId, itemSubCategoryTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to remove tag from | 
 **itemSubCategoryTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemSubCategoryById"></a>
# **getDuplicateItemSubCategoryById**
> ItemSubCategory getDuplicateItemSubCategoryById(itemSubCategoryId)

Get a duplicated an itemSubCategory by id

Returns a duplicated itemSubCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemSubCategoryById(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to be duplicated. | 

### Return type

[**ItemSubCategory**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSubCategoryByFilter"></a>
# **getItemSubCategoryByFilter**
> [ItemSubCategory] getItemSubCategoryByFilter(opts)

Search itemSubCategorys by filter

Returns the list of itemSubCategorys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

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
apiInstance.getItemSubCategoryByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemSubCategory]**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSubCategoryById"></a>
# **getItemSubCategoryById**
> ItemSubCategory getItemSubCategoryById(itemSubCategoryId)

Get an itemSubCategory by id

Returns the itemSubCategory identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemSubCategoryById(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to be returned. | 

### Return type

[**ItemSubCategory**](ItemSubCategory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSubCategoryFiles"></a>
# **getItemSubCategoryFiles**
> getItemSubCategoryFiles(itemSubCategoryId)

Get the files for an itemSubCategory.

Get all existing itemSubCategory files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSubCategoryFiles(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemSubCategoryTags"></a>
# **getItemSubCategoryTags**
> getItemSubCategoryTags(itemSubCategoryId)

Get the tags for an itemSubCategory.

Get all existing itemSubCategory tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var itemSubCategoryId = 56; // Number | Id of the itemSubCategory to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemSubCategoryTags(itemSubCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubCategoryId** | **Number**| Id of the itemSubCategory to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemSubCategory"></a>
# **updateItemSubCategory**
> updateItemSubCategory(body)

Update an itemSubCategory

Updates an existing itemSubCategory using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemSubCategoryApi();

var body = new infoplus.ItemSubCategory(); // ItemSubCategory | ItemSubCategory to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemSubCategory(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemSubCategory**](ItemSubCategory.md)| ItemSubCategory to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

