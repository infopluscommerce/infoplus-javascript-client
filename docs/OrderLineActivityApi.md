# infoplus.OrderLineActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderLineActivity**](OrderLineActivityApi.md#addOrderLineActivity) | **POST** /beta/orderLineActivity | Create an orderLineActivity
[**addOrderLineActivityAudit**](OrderLineActivityApi.md#addOrderLineActivityAudit) | **PUT** /beta/orderLineActivity/{orderLineActivityId}/audit/{orderLineActivityAudit} | Add new audit for an orderLineActivity
[**addOrderLineActivityFile**](OrderLineActivityApi.md#addOrderLineActivityFile) | **POST** /beta/orderLineActivity/{orderLineActivityId}/file/{fileName} | Attach a file to an orderLineActivity
[**addOrderLineActivityTag**](OrderLineActivityApi.md#addOrderLineActivityTag) | **PUT** /beta/orderLineActivity/{orderLineActivityId}/tag/{orderLineActivityTag} | Add new tags for an orderLineActivity.
[**deleteOrderLineActivity**](OrderLineActivityApi.md#deleteOrderLineActivity) | **DELETE** /beta/orderLineActivity/{orderLineActivityId} | Delete an orderLineActivity
[**deleteOrderLineActivityTag**](OrderLineActivityApi.md#deleteOrderLineActivityTag) | **DELETE** /beta/orderLineActivity/{orderLineActivityId}/tag/{orderLineActivityTag} | Delete a tag for an orderLineActivity.
[**getDuplicateOrderLineActivityById**](OrderLineActivityApi.md#getDuplicateOrderLineActivityById) | **GET** /beta/orderLineActivity/duplicate/{orderLineActivityId} | Get a duplicated an orderLineActivity by id
[**getOrderLineActivityByFilter**](OrderLineActivityApi.md#getOrderLineActivityByFilter) | **GET** /beta/orderLineActivity/search | Search orderLineActivitys by filter
[**getOrderLineActivityById**](OrderLineActivityApi.md#getOrderLineActivityById) | **GET** /beta/orderLineActivity/{orderLineActivityId} | Get an orderLineActivity by id
[**getOrderLineActivityTags**](OrderLineActivityApi.md#getOrderLineActivityTags) | **GET** /beta/orderLineActivity/{orderLineActivityId}/tag | Get the tags for an orderLineActivity.
[**updateOrderLineActivity**](OrderLineActivityApi.md#updateOrderLineActivity) | **PUT** /beta/orderLineActivity | Update an orderLineActivity


<a name="addOrderLineActivity"></a>
# **addOrderLineActivity**
> OrderLineActivity addOrderLineActivity(body)

Create an orderLineActivity

Inserts a new orderLineActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var body = new infoplus.OrderLineActivity(); // OrderLineActivity | OrderLineActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrderLineActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderLineActivity**](OrderLineActivity.md)| OrderLineActivity to be inserted. | 

### Return type

[**OrderLineActivity**](OrderLineActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderLineActivityAudit"></a>
# **addOrderLineActivityAudit**
> addOrderLineActivityAudit(orderLineActivityId, orderLineActivityAudit)

Add new audit for an orderLineActivity

Adds an audit to an existing orderLineActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to add an audit to

var orderLineActivityAudit = "orderLineActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderLineActivityAudit(orderLineActivityId, orderLineActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to add an audit to | 
 **orderLineActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderLineActivityFile"></a>
# **addOrderLineActivityFile**
> addOrderLineActivityFile(orderLineActivityId, fileName)

Attach a file to an orderLineActivity

Adds a file to an existing orderLineActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderLineActivityFile(orderLineActivityId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOrderLineActivityTag"></a>
# **addOrderLineActivityTag**
> addOrderLineActivityTag(orderLineActivityId, orderLineActivityTag)

Add new tags for an orderLineActivity.

Adds a tag to an existing orderLineActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to add a tag to

var orderLineActivityTag = "orderLineActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderLineActivityTag(orderLineActivityId, orderLineActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to add a tag to | 
 **orderLineActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderLineActivity"></a>
# **deleteOrderLineActivity**
> deleteOrderLineActivity(orderLineActivityId)

Delete an orderLineActivity

Deletes the orderLineActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderLineActivity(orderLineActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderLineActivityTag"></a>
# **deleteOrderLineActivityTag**
> deleteOrderLineActivityTag(orderLineActivityId, orderLineActivityTag)

Delete a tag for an orderLineActivity.

Deletes an existing orderLineActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to remove tag from

var orderLineActivityTag = "orderLineActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderLineActivityTag(orderLineActivityId, orderLineActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to remove tag from | 
 **orderLineActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderLineActivityById"></a>
# **getDuplicateOrderLineActivityById**
> OrderLineActivity getDuplicateOrderLineActivityById(orderLineActivityId)

Get a duplicated an orderLineActivity by id

Returns a duplicated orderLineActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderLineActivityById(orderLineActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to be duplicated. | 

### Return type

[**OrderLineActivity**](OrderLineActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderLineActivityByFilter"></a>
# **getOrderLineActivityByFilter**
> [OrderLineActivity] getOrderLineActivityByFilter(opts)

Search orderLineActivitys by filter

Returns the list of orderLineActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

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
apiInstance.getOrderLineActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderLineActivity]**](OrderLineActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderLineActivityById"></a>
# **getOrderLineActivityById**
> OrderLineActivity getOrderLineActivityById(orderLineActivityId)

Get an orderLineActivity by id

Returns the orderLineActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderLineActivityById(orderLineActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to be returned. | 

### Return type

[**OrderLineActivity**](OrderLineActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderLineActivityTags"></a>
# **getOrderLineActivityTags**
> getOrderLineActivityTags(orderLineActivityId)

Get the tags for an orderLineActivity.

Get all existing orderLineActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var orderLineActivityId = 56; // Number | Id of the orderLineActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderLineActivityTags(orderLineActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineActivityId** | **Number**| Id of the orderLineActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderLineActivity"></a>
# **updateOrderLineActivity**
> updateOrderLineActivity(body)

Update an orderLineActivity

Updates an existing orderLineActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineActivityApi();

var body = new infoplus.OrderLineActivity(); // OrderLineActivity | OrderLineActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderLineActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderLineActivity**](OrderLineActivity.md)| OrderLineActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

