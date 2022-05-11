# infoplus.OrderActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderActivity**](OrderActivityApi.md#addOrderActivity) | **POST** /v3.0/orderActivity | Create an orderActivity
[**addOrderActivityAudit**](OrderActivityApi.md#addOrderActivityAudit) | **PUT** /v3.0/orderActivity/{orderActivityId}/audit/{orderActivityAudit} | Add new audit for an orderActivity
[**addOrderActivityFile**](OrderActivityApi.md#addOrderActivityFile) | **POST** /v3.0/orderActivity/{orderActivityId}/file/{fileName} | Attach a file to an orderActivity
[**addOrderActivityFileByURL**](OrderActivityApi.md#addOrderActivityFileByURL) | **POST** /v3.0/orderActivity/{orderActivityId}/file | Attach a file to an orderActivity by URL.
[**addOrderActivityTag**](OrderActivityApi.md#addOrderActivityTag) | **PUT** /v3.0/orderActivity/{orderActivityId}/tag/{orderActivityTag} | Add new tags for an orderActivity.
[**deleteOrderActivity**](OrderActivityApi.md#deleteOrderActivity) | **DELETE** /v3.0/orderActivity/{orderActivityId} | Delete an orderActivity
[**deleteOrderActivityFile**](OrderActivityApi.md#deleteOrderActivityFile) | **DELETE** /v3.0/orderActivity/{orderActivityId}/file/{fileId} | Delete a file for an orderActivity.
[**deleteOrderActivityTag**](OrderActivityApi.md#deleteOrderActivityTag) | **DELETE** /v3.0/orderActivity/{orderActivityId}/tag/{orderActivityTag} | Delete a tag for an orderActivity.
[**getDuplicateOrderActivityById**](OrderActivityApi.md#getDuplicateOrderActivityById) | **GET** /v3.0/orderActivity/duplicate/{orderActivityId} | Get a duplicated an orderActivity by id
[**getOrderActivityByFilter**](OrderActivityApi.md#getOrderActivityByFilter) | **GET** /v3.0/orderActivity/search | Search orderActivitys by filter
[**getOrderActivityById**](OrderActivityApi.md#getOrderActivityById) | **GET** /v3.0/orderActivity/{orderActivityId} | Get an orderActivity by id
[**getOrderActivityFiles**](OrderActivityApi.md#getOrderActivityFiles) | **GET** /v3.0/orderActivity/{orderActivityId}/file | Get the files for an orderActivity.
[**getOrderActivityTags**](OrderActivityApi.md#getOrderActivityTags) | **GET** /v3.0/orderActivity/{orderActivityId}/tag | Get the tags for an orderActivity.
[**updateOrderActivity**](OrderActivityApi.md#updateOrderActivity) | **PUT** /v3.0/orderActivity | Update an orderActivity


<a name="addOrderActivity"></a>
# **addOrderActivity**
> OrderActivity addOrderActivity(body)

Create an orderActivity

Inserts a new orderActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var body = new infoplus.OrderActivity(); // OrderActivity | OrderActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrderActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderActivity**](OrderActivity.md)| OrderActivity to be inserted. | 

### Return type

[**OrderActivity**](OrderActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderActivityAudit"></a>
# **addOrderActivityAudit**
> addOrderActivityAudit(orderActivityId, orderActivityAudit)

Add new audit for an orderActivity

Adds an audit to an existing orderActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to add an audit to

var orderActivityAudit = "orderActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderActivityAudit(orderActivityId, orderActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to add an audit to | 
 **orderActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderActivityFile"></a>
# **addOrderActivityFile**
> addOrderActivityFile(orderActivityId, fileName)

Attach a file to an orderActivity

Adds a file to an existing orderActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderActivityFile(orderActivityId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOrderActivityFileByURL"></a>
# **addOrderActivityFileByURL**
> addOrderActivityFileByURL(body, orderActivityId)

Attach a file to an orderActivity by URL.

Adds a file to an existing orderActivity by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var orderActivityId = 8.14; // Number | Id of the orderActivity to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderActivityFileByURL(body, orderActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **orderActivityId** | **Number**| Id of the orderActivity to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderActivityTag"></a>
# **addOrderActivityTag**
> addOrderActivityTag(orderActivityId, orderActivityTag)

Add new tags for an orderActivity.

Adds a tag to an existing orderActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to add a tag to

var orderActivityTag = "orderActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderActivityTag(orderActivityId, orderActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to add a tag to | 
 **orderActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderActivity"></a>
# **deleteOrderActivity**
> deleteOrderActivity(orderActivityId)

Delete an orderActivity

Deletes the orderActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderActivity(orderActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderActivityFile"></a>
# **deleteOrderActivityFile**
> deleteOrderActivityFile(orderActivityId, fileId)

Delete a file for an orderActivity.

Deletes an existing orderActivity file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderActivityFile(orderActivityId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderActivityTag"></a>
# **deleteOrderActivityTag**
> deleteOrderActivityTag(orderActivityId, orderActivityTag)

Delete a tag for an orderActivity.

Deletes an existing orderActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to remove tag from

var orderActivityTag = "orderActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderActivityTag(orderActivityId, orderActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to remove tag from | 
 **orderActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderActivityById"></a>
# **getDuplicateOrderActivityById**
> OrderActivity getDuplicateOrderActivityById(orderActivityId)

Get a duplicated an orderActivity by id

Returns a duplicated orderActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderActivityById(orderActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to be duplicated. | 

### Return type

[**OrderActivity**](OrderActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderActivityByFilter"></a>
# **getOrderActivityByFilter**
> [OrderActivity] getOrderActivityByFilter(opts)

Search orderActivitys by filter

Returns the list of orderActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

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
apiInstance.getOrderActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderActivity]**](OrderActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderActivityById"></a>
# **getOrderActivityById**
> OrderActivity getOrderActivityById(orderActivityId)

Get an orderActivity by id

Returns the orderActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderActivityById(orderActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to be returned. | 

### Return type

[**OrderActivity**](OrderActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderActivityFiles"></a>
# **getOrderActivityFiles**
> getOrderActivityFiles(orderActivityId)

Get the files for an orderActivity.

Get all existing orderActivity files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderActivityFiles(orderActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderActivityTags"></a>
# **getOrderActivityTags**
> getOrderActivityTags(orderActivityId)

Get the tags for an orderActivity.

Get all existing orderActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var orderActivityId = 8.14; // Number | Id of the orderActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderActivityTags(orderActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderActivityId** | **Number**| Id of the orderActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderActivity"></a>
# **updateOrderActivity**
> updateOrderActivity(body)

Update an orderActivity

Updates an existing orderActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderActivityApi();

var body = new infoplus.OrderActivity(); // OrderActivity | OrderActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderActivity**](OrderActivity.md)| OrderActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

