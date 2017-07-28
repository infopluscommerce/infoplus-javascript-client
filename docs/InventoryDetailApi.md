# infoplus.InventoryDetailApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventoryDetailAudit**](InventoryDetailApi.md#addInventoryDetailAudit) | **PUT** /beta/inventoryDetail/{inventoryDetailId}/audit/{inventoryDetailAudit} | Add new audit for an inventoryDetail
[**addInventoryDetailTag**](InventoryDetailApi.md#addInventoryDetailTag) | **PUT** /beta/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag} | Add new tags for an inventoryDetail.
[**deleteInventoryDetailTag**](InventoryDetailApi.md#deleteInventoryDetailTag) | **DELETE** /beta/inventoryDetail/{inventoryDetailId}/tag/{inventoryDetailTag} | Delete a tag for an inventoryDetail.
[**getDuplicateInventoryDetailById**](InventoryDetailApi.md#getDuplicateInventoryDetailById) | **GET** /beta/inventoryDetail/duplicate/{inventoryDetailId} | Get a duplicated an inventoryDetail by id
[**getInventoryDetailByFilter**](InventoryDetailApi.md#getInventoryDetailByFilter) | **GET** /beta/inventoryDetail/search | Search inventoryDetails by filter
[**getInventoryDetailById**](InventoryDetailApi.md#getInventoryDetailById) | **GET** /beta/inventoryDetail/{inventoryDetailId} | Get an inventoryDetail by id
[**getInventoryDetailTags**](InventoryDetailApi.md#getInventoryDetailTags) | **GET** /beta/inventoryDetail/{inventoryDetailId}/tag | Get the tags for an inventoryDetail.
[**updateInventoryDetailCustomFields**](InventoryDetailApi.md#updateInventoryDetailCustomFields) | **PUT** /beta/inventoryDetail/customFields | Update an inventoryDetail custom fields


<a name="addInventoryDetailAudit"></a>
# **addInventoryDetailAudit**
> addInventoryDetailAudit(inventoryDetailId, inventoryDetailAudit)

Add new audit for an inventoryDetail

Adds an audit to an existing inventoryDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

var inventoryDetailId = 56; // {Integer} Id of the inventoryDetail to add an audit to

var inventoryDetailAudit = "inventoryDetailAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addInventoryDetailAudit(inventoryDetailId, inventoryDetailAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Integer**| Id of the inventoryDetail to add an audit to | 
 **inventoryDetailAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryDetailTag"></a>
# **addInventoryDetailTag**
> addInventoryDetailTag(inventoryDetailId, inventoryDetailTag)

Add new tags for an inventoryDetail.

Adds a tag to an existing inventoryDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

var inventoryDetailId = 56; // {Integer} Id of the inventoryDetail to add a tag to

var inventoryDetailTag = "inventoryDetailTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addInventoryDetailTag(inventoryDetailId, inventoryDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Integer**| Id of the inventoryDetail to add a tag to | 
 **inventoryDetailTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryDetailTag"></a>
# **deleteInventoryDetailTag**
> deleteInventoryDetailTag(inventoryDetailId, inventoryDetailTag)

Delete a tag for an inventoryDetail.

Deletes an existing inventoryDetail tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

var inventoryDetailId = 56; // {Integer} Id of the inventoryDetail to remove tag from

var inventoryDetailTag = "inventoryDetailTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteInventoryDetailTag(inventoryDetailId, inventoryDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Integer**| Id of the inventoryDetail to remove tag from | 
 **inventoryDetailTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInventoryDetailById"></a>
# **getDuplicateInventoryDetailById**
> InventoryDetail getDuplicateInventoryDetailById(inventoryDetailId)

Get a duplicated an inventoryDetail by id

Returns a duplicated inventoryDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

var inventoryDetailId = 56; // {Integer} Id of the inventoryDetail to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateInventoryDetailById(inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Integer**| Id of the inventoryDetail to be duplicated. | 

### Return type

[**InventoryDetail**](InventoryDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryDetailByFilter"></a>
# **getInventoryDetailByFilter**
> [InventoryDetail] getInventoryDetailByFilter(opts)

Search inventoryDetails by filter

Returns the list of inventoryDetails that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

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
api.getInventoryDetailByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InventoryDetail]**](InventoryDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryDetailById"></a>
# **getInventoryDetailById**
> InventoryDetail getInventoryDetailById(inventoryDetailId)

Get an inventoryDetail by id

Returns the inventoryDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

var inventoryDetailId = 56; // {Integer} Id of the inventoryDetail to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInventoryDetailById(inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Integer**| Id of the inventoryDetail to be returned. | 

### Return type

[**InventoryDetail**](InventoryDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInventoryDetailTags"></a>
# **getInventoryDetailTags**
> getInventoryDetailTags(inventoryDetailId)

Get the tags for an inventoryDetail.

Get all existing inventoryDetail tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

var inventoryDetailId = 56; // {Integer} Id of the inventoryDetail to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getInventoryDetailTags(inventoryDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryDetailId** | **Integer**| Id of the inventoryDetail to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInventoryDetailCustomFields"></a>
# **updateInventoryDetailCustomFields**
> updateInventoryDetailCustomFields(body)

Update an inventoryDetail custom fields

Updates an existing inventoryDetail custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InventoryDetailApi()

var body = new infoplus.InventoryDetail(); // {InventoryDetail} InventoryDetail to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateInventoryDetailCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryDetail**](InventoryDetail.md)| InventoryDetail to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

