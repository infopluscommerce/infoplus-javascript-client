# infoplus.ItemProductCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemProductCode**](ItemProductCodeApi.md#addItemProductCode) | **POST** /beta/itemProductCode | Create an itemProductCode
[**addItemProductCodeAudit**](ItemProductCodeApi.md#addItemProductCodeAudit) | **PUT** /beta/itemProductCode/{itemProductCodeId}/audit/{itemProductCodeAudit} | Add new audit for an itemProductCode
[**addItemProductCodeFile**](ItemProductCodeApi.md#addItemProductCodeFile) | **POST** /beta/itemProductCode/{itemProductCodeId}/file/{fileName} | Attach a file to an itemProductCode
[**addItemProductCodeTag**](ItemProductCodeApi.md#addItemProductCodeTag) | **PUT** /beta/itemProductCode/{itemProductCodeId}/tag/{itemProductCodeTag} | Add new tags for an itemProductCode.
[**deleteItemProductCode**](ItemProductCodeApi.md#deleteItemProductCode) | **DELETE** /beta/itemProductCode/{itemProductCodeId} | Delete an itemProductCode
[**deleteItemProductCodeTag**](ItemProductCodeApi.md#deleteItemProductCodeTag) | **DELETE** /beta/itemProductCode/{itemProductCodeId}/tag/{itemProductCodeTag} | Delete a tag for an itemProductCode.
[**getDuplicateItemProductCodeById**](ItemProductCodeApi.md#getDuplicateItemProductCodeById) | **GET** /beta/itemProductCode/duplicate/{itemProductCodeId} | Get a duplicated an itemProductCode by id
[**getItemProductCodeByFilter**](ItemProductCodeApi.md#getItemProductCodeByFilter) | **GET** /beta/itemProductCode/search | Search itemProductCodes by filter
[**getItemProductCodeById**](ItemProductCodeApi.md#getItemProductCodeById) | **GET** /beta/itemProductCode/{itemProductCodeId} | Get an itemProductCode by id
[**getItemProductCodeTags**](ItemProductCodeApi.md#getItemProductCodeTags) | **GET** /beta/itemProductCode/{itemProductCodeId}/tag | Get the tags for an itemProductCode.
[**updateItemProductCode**](ItemProductCodeApi.md#updateItemProductCode) | **PUT** /beta/itemProductCode | Update an itemProductCode


<a name="addItemProductCode"></a>
# **addItemProductCode**
> ItemProductCode addItemProductCode(body)

Create an itemProductCode

Inserts a new itemProductCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var body = new infoplus.ItemProductCode(); // ItemProductCode | ItemProductCode to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemProductCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemProductCode**](ItemProductCode.md)| ItemProductCode to be inserted. | 

### Return type

[**ItemProductCode**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemProductCodeAudit"></a>
# **addItemProductCodeAudit**
> addItemProductCodeAudit(itemProductCodeId, itemProductCodeAudit)

Add new audit for an itemProductCode

Adds an audit to an existing itemProductCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to add an audit to

var itemProductCodeAudit = "itemProductCodeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemProductCodeAudit(itemProductCodeId, itemProductCodeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to add an audit to | 
 **itemProductCodeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemProductCodeFile"></a>
# **addItemProductCodeFile**
> addItemProductCodeFile(itemProductCodeId, fileName)

Attach a file to an itemProductCode

Adds a file to an existing itemProductCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemProductCodeFile(itemProductCodeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemProductCodeTag"></a>
# **addItemProductCodeTag**
> addItemProductCodeTag(itemProductCodeId, itemProductCodeTag)

Add new tags for an itemProductCode.

Adds a tag to an existing itemProductCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to add a tag to

var itemProductCodeTag = "itemProductCodeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemProductCodeTag(itemProductCodeId, itemProductCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to add a tag to | 
 **itemProductCodeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemProductCode"></a>
# **deleteItemProductCode**
> deleteItemProductCode(itemProductCodeId)

Delete an itemProductCode

Deletes the itemProductCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemProductCode(itemProductCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemProductCodeTag"></a>
# **deleteItemProductCodeTag**
> deleteItemProductCodeTag(itemProductCodeId, itemProductCodeTag)

Delete a tag for an itemProductCode.

Deletes an existing itemProductCode tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to remove tag from

var itemProductCodeTag = "itemProductCodeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemProductCodeTag(itemProductCodeId, itemProductCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to remove tag from | 
 **itemProductCodeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemProductCodeById"></a>
# **getDuplicateItemProductCodeById**
> ItemProductCode getDuplicateItemProductCodeById(itemProductCodeId)

Get a duplicated an itemProductCode by id

Returns a duplicated itemProductCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemProductCodeById(itemProductCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to be duplicated. | 

### Return type

[**ItemProductCode**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemProductCodeByFilter"></a>
# **getItemProductCodeByFilter**
> [ItemProductCode] getItemProductCodeByFilter(opts)

Search itemProductCodes by filter

Returns the list of itemProductCodes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

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
apiInstance.getItemProductCodeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemProductCode]**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemProductCodeById"></a>
# **getItemProductCodeById**
> ItemProductCode getItemProductCodeById(itemProductCodeId)

Get an itemProductCode by id

Returns the itemProductCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemProductCodeById(itemProductCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to be returned. | 

### Return type

[**ItemProductCode**](ItemProductCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemProductCodeTags"></a>
# **getItemProductCodeTags**
> getItemProductCodeTags(itemProductCodeId)

Get the tags for an itemProductCode.

Get all existing itemProductCode tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var itemProductCodeId = 56; // Number | Id of the itemProductCode to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemProductCodeTags(itemProductCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemProductCodeId** | **Number**| Id of the itemProductCode to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemProductCode"></a>
# **updateItemProductCode**
> updateItemProductCode(body)

Update an itemProductCode

Updates an existing itemProductCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemProductCodeApi();

var body = new infoplus.ItemProductCode(); // ItemProductCode | ItemProductCode to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemProductCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemProductCode**](ItemProductCode.md)| ItemProductCode to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

