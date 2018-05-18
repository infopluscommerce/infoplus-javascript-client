# infoplus.OrderSourceStockStatusApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderSourceStockStatusAudit**](OrderSourceStockStatusApi.md#addOrderSourceStockStatusAudit) | **PUT** /beta/orderSourceStockStatus/{orderSourceStockStatusId}/audit/{orderSourceStockStatusAudit} | Add new audit for an orderSourceStockStatus
[**addOrderSourceStockStatusTag**](OrderSourceStockStatusApi.md#addOrderSourceStockStatusTag) | **PUT** /beta/orderSourceStockStatus/{orderSourceStockStatusId}/tag/{orderSourceStockStatusTag} | Add new tags for an orderSourceStockStatus.
[**deleteOrderSourceStockStatusTag**](OrderSourceStockStatusApi.md#deleteOrderSourceStockStatusTag) | **DELETE** /beta/orderSourceStockStatus/{orderSourceStockStatusId}/tag/{orderSourceStockStatusTag} | Delete a tag for an orderSourceStockStatus.
[**getDuplicateOrderSourceStockStatusById**](OrderSourceStockStatusApi.md#getDuplicateOrderSourceStockStatusById) | **GET** /beta/orderSourceStockStatus/duplicate/{orderSourceStockStatusId} | Get a duplicated an orderSourceStockStatus by id
[**getOrderSourceStockStatusByFilter**](OrderSourceStockStatusApi.md#getOrderSourceStockStatusByFilter) | **GET** /beta/orderSourceStockStatus/search | Search orderSourceStockStatuses by filter
[**getOrderSourceStockStatusById**](OrderSourceStockStatusApi.md#getOrderSourceStockStatusById) | **GET** /beta/orderSourceStockStatus/{orderSourceStockStatusId} | Get an orderSourceStockStatus by id
[**getOrderSourceStockStatusTags**](OrderSourceStockStatusApi.md#getOrderSourceStockStatusTags) | **GET** /beta/orderSourceStockStatus/{orderSourceStockStatusId}/tag | Get the tags for an orderSourceStockStatus.


<a name="addOrderSourceStockStatusAudit"></a>
# **addOrderSourceStockStatusAudit**
> addOrderSourceStockStatusAudit(orderSourceStockStatusId, orderSourceStockStatusAudit)

Add new audit for an orderSourceStockStatus

Adds an audit to an existing orderSourceStockStatus.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceStockStatusApi();

var orderSourceStockStatusId = 56; // Number | Id of the orderSourceStockStatus to add an audit to

var orderSourceStockStatusAudit = "orderSourceStockStatusAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceStockStatusAudit(orderSourceStockStatusId, orderSourceStockStatusAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceStockStatusId** | **Number**| Id of the orderSourceStockStatus to add an audit to | 
 **orderSourceStockStatusAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceStockStatusTag"></a>
# **addOrderSourceStockStatusTag**
> addOrderSourceStockStatusTag(orderSourceStockStatusId, orderSourceStockStatusTag)

Add new tags for an orderSourceStockStatus.

Adds a tag to an existing orderSourceStockStatus.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceStockStatusApi();

var orderSourceStockStatusId = 56; // Number | Id of the orderSourceStockStatus to add a tag to

var orderSourceStockStatusTag = "orderSourceStockStatusTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceStockStatusTag(orderSourceStockStatusId, orderSourceStockStatusTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceStockStatusId** | **Number**| Id of the orderSourceStockStatus to add a tag to | 
 **orderSourceStockStatusTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderSourceStockStatusTag"></a>
# **deleteOrderSourceStockStatusTag**
> deleteOrderSourceStockStatusTag(orderSourceStockStatusId, orderSourceStockStatusTag)

Delete a tag for an orderSourceStockStatus.

Deletes an existing orderSourceStockStatus tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceStockStatusApi();

var orderSourceStockStatusId = 56; // Number | Id of the orderSourceStockStatus to remove tag from

var orderSourceStockStatusTag = "orderSourceStockStatusTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceStockStatusTag(orderSourceStockStatusId, orderSourceStockStatusTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceStockStatusId** | **Number**| Id of the orderSourceStockStatus to remove tag from | 
 **orderSourceStockStatusTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderSourceStockStatusById"></a>
# **getDuplicateOrderSourceStockStatusById**
> OrderSourceStockStatus getDuplicateOrderSourceStockStatusById(orderSourceStockStatusId)

Get a duplicated an orderSourceStockStatus by id

Returns a duplicated orderSourceStockStatus identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceStockStatusApi();

var orderSourceStockStatusId = 56; // Number | Id of the orderSourceStockStatus to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderSourceStockStatusById(orderSourceStockStatusId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceStockStatusId** | **Number**| Id of the orderSourceStockStatus to be duplicated. | 

### Return type

[**OrderSourceStockStatus**](OrderSourceStockStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceStockStatusByFilter"></a>
# **getOrderSourceStockStatusByFilter**
> [OrderSourceStockStatus] getOrderSourceStockStatusByFilter(opts)

Search orderSourceStockStatuses by filter

Returns the list of orderSourceStockStatuses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceStockStatusApi();

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
apiInstance.getOrderSourceStockStatusByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderSourceStockStatus]**](OrderSourceStockStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceStockStatusById"></a>
# **getOrderSourceStockStatusById**
> OrderSourceStockStatus getOrderSourceStockStatusById(orderSourceStockStatusId)

Get an orderSourceStockStatus by id

Returns the orderSourceStockStatus identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceStockStatusApi();

var orderSourceStockStatusId = 56; // Number | Id of the orderSourceStockStatus to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderSourceStockStatusById(orderSourceStockStatusId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceStockStatusId** | **Number**| Id of the orderSourceStockStatus to be returned. | 

### Return type

[**OrderSourceStockStatus**](OrderSourceStockStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceStockStatusTags"></a>
# **getOrderSourceStockStatusTags**
> getOrderSourceStockStatusTags(orderSourceStockStatusId)

Get the tags for an orderSourceStockStatus.

Get all existing orderSourceStockStatus tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceStockStatusApi();

var orderSourceStockStatusId = 56; // Number | Id of the orderSourceStockStatus to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderSourceStockStatusTags(orderSourceStockStatusId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceStockStatusId** | **Number**| Id of the orderSourceStockStatus to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

