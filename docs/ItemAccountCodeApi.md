# infoplus.ItemAccountCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemAccountCode**](ItemAccountCodeApi.md#addItemAccountCode) | **POST** /beta/itemAccountCode | Create an itemAccountCode
[**addItemAccountCodeAudit**](ItemAccountCodeApi.md#addItemAccountCodeAudit) | **PUT** /beta/itemAccountCode/{itemAccountCodeId}/audit/{itemAccountCodeAudit} | Add new audit for an itemAccountCode
[**addItemAccountCodeTag**](ItemAccountCodeApi.md#addItemAccountCodeTag) | **PUT** /beta/itemAccountCode/{itemAccountCodeId}/tag/{itemAccountCodeTag} | Add new tags for an itemAccountCode.
[**deleteItemAccountCode**](ItemAccountCodeApi.md#deleteItemAccountCode) | **DELETE** /beta/itemAccountCode/{itemAccountCodeId} | Delete an itemAccountCode
[**deleteItemAccountCodeTag**](ItemAccountCodeApi.md#deleteItemAccountCodeTag) | **DELETE** /beta/itemAccountCode/{itemAccountCodeId}/tag/{itemAccountCodeTag} | Delete a tag for an itemAccountCode.
[**getDuplicateItemAccountCodeById**](ItemAccountCodeApi.md#getDuplicateItemAccountCodeById) | **GET** /beta/itemAccountCode/duplicate/{itemAccountCodeId} | Get a duplicated an itemAccountCode by id
[**getItemAccountCodeByFilter**](ItemAccountCodeApi.md#getItemAccountCodeByFilter) | **GET** /beta/itemAccountCode/search | Search itemAccountCodes by filter
[**getItemAccountCodeById**](ItemAccountCodeApi.md#getItemAccountCodeById) | **GET** /beta/itemAccountCode/{itemAccountCodeId} | Get an itemAccountCode by id
[**getItemAccountCodeTags**](ItemAccountCodeApi.md#getItemAccountCodeTags) | **GET** /beta/itemAccountCode/{itemAccountCodeId}/tag | Get the tags for an itemAccountCode.
[**updateItemAccountCode**](ItemAccountCodeApi.md#updateItemAccountCode) | **PUT** /beta/itemAccountCode | Update an itemAccountCode


<a name="addItemAccountCode"></a>
# **addItemAccountCode**
> ItemAccountCode addItemAccountCode(body)

Create an itemAccountCode

Inserts a new itemAccountCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var body = new infoplus.ItemAccountCode(); // {ItemAccountCode} ItemAccountCode to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addItemAccountCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemAccountCode**](ItemAccountCode.md)| ItemAccountCode to be inserted. | 

### Return type

[**ItemAccountCode**](ItemAccountCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemAccountCodeAudit"></a>
# **addItemAccountCodeAudit**
> addItemAccountCodeAudit(itemAccountCodeId, itemAccountCodeAudit)

Add new audit for an itemAccountCode

Adds an audit to an existing itemAccountCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var itemAccountCodeId = 56; // {Integer} Id of the itemAccountCode to add an audit to

var itemAccountCodeAudit = "itemAccountCodeAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addItemAccountCodeAudit(itemAccountCodeId, itemAccountCodeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemAccountCodeId** | **Integer**| Id of the itemAccountCode to add an audit to | 
 **itemAccountCodeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemAccountCodeTag"></a>
# **addItemAccountCodeTag**
> addItemAccountCodeTag(itemAccountCodeId, itemAccountCodeTag)

Add new tags for an itemAccountCode.

Adds a tag to an existing itemAccountCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var itemAccountCodeId = 56; // {Integer} Id of the itemAccountCode to add a tag to

var itemAccountCodeTag = "itemAccountCodeTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addItemAccountCodeTag(itemAccountCodeId, itemAccountCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemAccountCodeId** | **Integer**| Id of the itemAccountCode to add a tag to | 
 **itemAccountCodeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemAccountCode"></a>
# **deleteItemAccountCode**
> deleteItemAccountCode(itemAccountCodeId)

Delete an itemAccountCode

Deletes the itemAccountCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var itemAccountCodeId = 56; // {Integer} Id of the itemAccountCode to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemAccountCode(itemAccountCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemAccountCodeId** | **Integer**| Id of the itemAccountCode to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemAccountCodeTag"></a>
# **deleteItemAccountCodeTag**
> deleteItemAccountCodeTag(itemAccountCodeId, itemAccountCodeTag)

Delete a tag for an itemAccountCode.

Deletes an existing itemAccountCode tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var itemAccountCodeId = 56; // {Integer} Id of the itemAccountCode to remove tag from

var itemAccountCodeTag = "itemAccountCodeTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemAccountCodeTag(itemAccountCodeId, itemAccountCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemAccountCodeId** | **Integer**| Id of the itemAccountCode to remove tag from | 
 **itemAccountCodeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemAccountCodeById"></a>
# **getDuplicateItemAccountCodeById**
> ItemAccountCode getDuplicateItemAccountCodeById(itemAccountCodeId)

Get a duplicated an itemAccountCode by id

Returns a duplicated itemAccountCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var itemAccountCodeId = 56; // {Integer} Id of the itemAccountCode to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateItemAccountCodeById(itemAccountCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemAccountCodeId** | **Integer**| Id of the itemAccountCode to be duplicated. | 

### Return type

[**ItemAccountCode**](ItemAccountCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemAccountCodeByFilter"></a>
# **getItemAccountCodeByFilter**
> [ItemAccountCode] getItemAccountCodeByFilter(opts)

Search itemAccountCodes by filter

Returns the list of itemAccountCodes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var opts = { 
  'filter': "filter_example", // {String} Query string, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56, // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // {String} Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemAccountCodeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemAccountCode]**](ItemAccountCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemAccountCodeById"></a>
# **getItemAccountCodeById**
> ItemAccountCode getItemAccountCodeById(itemAccountCodeId)

Get an itemAccountCode by id

Returns the itemAccountCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var itemAccountCodeId = 56; // {Integer} Id of the itemAccountCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemAccountCodeById(itemAccountCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemAccountCodeId** | **Integer**| Id of the itemAccountCode to be returned. | 

### Return type

[**ItemAccountCode**](ItemAccountCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemAccountCodeTags"></a>
# **getItemAccountCodeTags**
> getItemAccountCodeTags(itemAccountCodeId)

Get the tags for an itemAccountCode.

Get all existing itemAccountCode tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var itemAccountCodeId = 56; // {Integer} Id of the itemAccountCode to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getItemAccountCodeTags(itemAccountCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemAccountCodeId** | **Integer**| Id of the itemAccountCode to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemAccountCode"></a>
# **updateItemAccountCode**
> updateItemAccountCode(body)

Update an itemAccountCode

Updates an existing itemAccountCode using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemAccountCodeApi()

var body = new infoplus.ItemAccountCode(); // {ItemAccountCode} ItemAccountCode to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateItemAccountCode(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemAccountCode**](ItemAccountCode.md)| ItemAccountCode to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

