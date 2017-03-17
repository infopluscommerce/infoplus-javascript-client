# infoplus.ItemReceiptActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemReceiptActivity**](ItemReceiptActivityApi.md#addItemReceiptActivity) | **POST** /beta/itemReceiptActivity | Create an itemReceiptActivity
[**addItemReceiptActivityAudit**](ItemReceiptActivityApi.md#addItemReceiptActivityAudit) | **PUT** /beta/itemReceiptActivity/{itemReceiptActivityId}/audit/{itemReceiptActivityAudit} | Add new audit for an itemReceiptActivity
[**addItemReceiptActivityTag**](ItemReceiptActivityApi.md#addItemReceiptActivityTag) | **PUT** /beta/itemReceiptActivity/{itemReceiptActivityId}/tag/{itemReceiptActivityTag} | Add new tags for an itemReceiptActivity.
[**deleteItemReceiptActivity**](ItemReceiptActivityApi.md#deleteItemReceiptActivity) | **DELETE** /beta/itemReceiptActivity/{itemReceiptActivityId} | Delete an itemReceiptActivity
[**deleteItemReceiptActivityTag**](ItemReceiptActivityApi.md#deleteItemReceiptActivityTag) | **DELETE** /beta/itemReceiptActivity/{itemReceiptActivityId}/tag/{itemReceiptActivityTag} | Delete a tag for an itemReceiptActivity.
[**getDuplicateItemReceiptActivityById**](ItemReceiptActivityApi.md#getDuplicateItemReceiptActivityById) | **GET** /beta/itemReceiptActivity/duplicate/{itemReceiptActivityId} | Get a duplicated an itemReceiptActivity by id
[**getItemReceiptActivityByFilter**](ItemReceiptActivityApi.md#getItemReceiptActivityByFilter) | **GET** /beta/itemReceiptActivity/search | Search itemReceiptActivitys by filter
[**getItemReceiptActivityById**](ItemReceiptActivityApi.md#getItemReceiptActivityById) | **GET** /beta/itemReceiptActivity/{itemReceiptActivityId} | Get an itemReceiptActivity by id
[**getItemReceiptActivityTags**](ItemReceiptActivityApi.md#getItemReceiptActivityTags) | **GET** /beta/itemReceiptActivity/{itemReceiptActivityId}/tag | Get the tags for an itemReceiptActivity.
[**updateItemReceiptActivity**](ItemReceiptActivityApi.md#updateItemReceiptActivity) | **PUT** /beta/itemReceiptActivity | Update an itemReceiptActivity


<a name="addItemReceiptActivity"></a>
# **addItemReceiptActivity**
> ItemReceiptActivity addItemReceiptActivity(body)

Create an itemReceiptActivity

Inserts a new itemReceiptActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var body = new infoplus.ItemReceiptActivity(); // {ItemReceiptActivity} ItemReceiptActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addItemReceiptActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemReceiptActivity**](ItemReceiptActivity.md)| ItemReceiptActivity to be inserted. | 

### Return type

[**ItemReceiptActivity**](ItemReceiptActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemReceiptActivityAudit"></a>
# **addItemReceiptActivityAudit**
> addItemReceiptActivityAudit(itemReceiptActivityId, itemReceiptActivityAudit)

Add new audit for an itemReceiptActivity

Adds an audit to an existing itemReceiptActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var itemReceiptActivityId = 56; // {Integer} Id of the itemReceiptActivity to add an audit to

var itemReceiptActivityAudit = "itemReceiptActivityAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addItemReceiptActivityAudit(itemReceiptActivityId, itemReceiptActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemReceiptActivityId** | **Integer**| Id of the itemReceiptActivity to add an audit to | 
 **itemReceiptActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemReceiptActivityTag"></a>
# **addItemReceiptActivityTag**
> addItemReceiptActivityTag(itemReceiptActivityId, itemReceiptActivityTag)

Add new tags for an itemReceiptActivity.

Adds a tag to an existing itemReceiptActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var itemReceiptActivityId = 56; // {Integer} Id of the itemReceiptActivity to add a tag to

var itemReceiptActivityTag = "itemReceiptActivityTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addItemReceiptActivityTag(itemReceiptActivityId, itemReceiptActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemReceiptActivityId** | **Integer**| Id of the itemReceiptActivity to add a tag to | 
 **itemReceiptActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemReceiptActivity"></a>
# **deleteItemReceiptActivity**
> deleteItemReceiptActivity(itemReceiptActivityId)

Delete an itemReceiptActivity

Deletes the itemReceiptActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var itemReceiptActivityId = 56; // {Integer} Id of the itemReceiptActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemReceiptActivity(itemReceiptActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemReceiptActivityId** | **Integer**| Id of the itemReceiptActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemReceiptActivityTag"></a>
# **deleteItemReceiptActivityTag**
> deleteItemReceiptActivityTag(itemReceiptActivityId, itemReceiptActivityTag)

Delete a tag for an itemReceiptActivity.

Deletes an existing itemReceiptActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var itemReceiptActivityId = 56; // {Integer} Id of the itemReceiptActivity to remove tag from

var itemReceiptActivityTag = "itemReceiptActivityTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteItemReceiptActivityTag(itemReceiptActivityId, itemReceiptActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemReceiptActivityId** | **Integer**| Id of the itemReceiptActivity to remove tag from | 
 **itemReceiptActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemReceiptActivityById"></a>
# **getDuplicateItemReceiptActivityById**
> ItemReceiptActivity getDuplicateItemReceiptActivityById(itemReceiptActivityId)

Get a duplicated an itemReceiptActivity by id

Returns a duplicated itemReceiptActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var itemReceiptActivityId = 56; // {Integer} Id of the itemReceiptActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateItemReceiptActivityById(itemReceiptActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemReceiptActivityId** | **Integer**| Id of the itemReceiptActivity to be duplicated. | 

### Return type

[**ItemReceiptActivity**](ItemReceiptActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemReceiptActivityByFilter"></a>
# **getItemReceiptActivityByFilter**
> [ItemReceiptActivity] getItemReceiptActivityByFilter(opts)

Search itemReceiptActivitys by filter

Returns the list of itemReceiptActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

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
api.getItemReceiptActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemReceiptActivity]**](ItemReceiptActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemReceiptActivityById"></a>
# **getItemReceiptActivityById**
> ItemReceiptActivity getItemReceiptActivityById(itemReceiptActivityId)

Get an itemReceiptActivity by id

Returns the itemReceiptActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var itemReceiptActivityId = 56; // {Integer} Id of the itemReceiptActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getItemReceiptActivityById(itemReceiptActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemReceiptActivityId** | **Integer**| Id of the itemReceiptActivity to be returned. | 

### Return type

[**ItemReceiptActivity**](ItemReceiptActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemReceiptActivityTags"></a>
# **getItemReceiptActivityTags**
> getItemReceiptActivityTags(itemReceiptActivityId)

Get the tags for an itemReceiptActivity.

Get all existing itemReceiptActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var itemReceiptActivityId = 56; // {Integer} Id of the itemReceiptActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getItemReceiptActivityTags(itemReceiptActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemReceiptActivityId** | **Integer**| Id of the itemReceiptActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemReceiptActivity"></a>
# **updateItemReceiptActivity**
> updateItemReceiptActivity(body)

Update an itemReceiptActivity

Updates an existing itemReceiptActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemReceiptActivityApi()

var body = new infoplus.ItemReceiptActivity(); // {ItemReceiptActivity} ItemReceiptActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateItemReceiptActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemReceiptActivity**](ItemReceiptActivity.md)| ItemReceiptActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

