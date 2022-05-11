# infoplus.OrderSourceApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderSource**](OrderSourceApi.md#addOrderSource) | **POST** /v3.0/orderSource | Create an orderSource
[**addOrderSourceAudit**](OrderSourceApi.md#addOrderSourceAudit) | **PUT** /v3.0/orderSource/{orderSourceId}/audit/{orderSourceAudit} | Add new audit for an orderSource
[**addOrderSourceFile**](OrderSourceApi.md#addOrderSourceFile) | **POST** /v3.0/orderSource/{orderSourceId}/file/{fileName} | Attach a file to an orderSource
[**addOrderSourceFileByURL**](OrderSourceApi.md#addOrderSourceFileByURL) | **POST** /v3.0/orderSource/{orderSourceId}/file | Attach a file to an orderSource by URL.
[**addOrderSourceTag**](OrderSourceApi.md#addOrderSourceTag) | **PUT** /v3.0/orderSource/{orderSourceId}/tag/{orderSourceTag} | Add new tags for an orderSource.
[**deleteOrderSource**](OrderSourceApi.md#deleteOrderSource) | **DELETE** /v3.0/orderSource/{orderSourceId} | Delete an orderSource
[**deleteOrderSourceFile**](OrderSourceApi.md#deleteOrderSourceFile) | **DELETE** /v3.0/orderSource/{orderSourceId}/file/{fileId} | Delete a file for an orderSource.
[**deleteOrderSourceTag**](OrderSourceApi.md#deleteOrderSourceTag) | **DELETE** /v3.0/orderSource/{orderSourceId}/tag/{orderSourceTag} | Delete a tag for an orderSource.
[**getDuplicateOrderSourceById**](OrderSourceApi.md#getDuplicateOrderSourceById) | **GET** /v3.0/orderSource/duplicate/{orderSourceId} | Get a duplicated an orderSource by id
[**getOrderSourceByFilter**](OrderSourceApi.md#getOrderSourceByFilter) | **GET** /v3.0/orderSource/search | Search orderSources by filter
[**getOrderSourceById**](OrderSourceApi.md#getOrderSourceById) | **GET** /v3.0/orderSource/{orderSourceId} | Get an orderSource by id
[**getOrderSourceFiles**](OrderSourceApi.md#getOrderSourceFiles) | **GET** /v3.0/orderSource/{orderSourceId}/file | Get the files for an orderSource.
[**getOrderSourceTags**](OrderSourceApi.md#getOrderSourceTags) | **GET** /v3.0/orderSource/{orderSourceId}/tag | Get the tags for an orderSource.
[**updateOrderSource**](OrderSourceApi.md#updateOrderSource) | **PUT** /v3.0/orderSource | Update an orderSource
[**updateOrderSourceCustomFields**](OrderSourceApi.md#updateOrderSourceCustomFields) | **PUT** /v3.0/orderSource/customFields | Update an orderSource custom fields


<a name="addOrderSource"></a>
# **addOrderSource**
> OrderSource addOrderSource(body)

Create an orderSource

Inserts a new orderSource using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var body = new infoplus.OrderSource(); // OrderSource | OrderSource to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrderSource(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSource**](OrderSource.md)| OrderSource to be inserted. | 

### Return type

[**OrderSource**](OrderSource.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceAudit"></a>
# **addOrderSourceAudit**
> addOrderSourceAudit(orderSourceId, orderSourceAudit)

Add new audit for an orderSource

Adds an audit to an existing orderSource.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to add an audit to

var orderSourceAudit = "orderSourceAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceAudit(orderSourceId, orderSourceAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to add an audit to | 
 **orderSourceAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceFile"></a>
# **addOrderSourceFile**
> addOrderSourceFile(orderSourceId, fileName)

Attach a file to an orderSource

Adds a file to an existing orderSource.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceFile(orderSourceId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOrderSourceFileByURL"></a>
# **addOrderSourceFileByURL**
> addOrderSourceFileByURL(body, orderSourceId)

Attach a file to an orderSource by URL.

Adds a file to an existing orderSource by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var orderSourceId = 56; // Number | Id of the orderSource to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceFileByURL(body, orderSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **orderSourceId** | **Number**| Id of the orderSource to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceTag"></a>
# **addOrderSourceTag**
> addOrderSourceTag(orderSourceId, orderSourceTag)

Add new tags for an orderSource.

Adds a tag to an existing orderSource.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to add a tag to

var orderSourceTag = "orderSourceTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceTag(orderSourceId, orderSourceTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to add a tag to | 
 **orderSourceTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderSource"></a>
# **deleteOrderSource**
> deleteOrderSource(orderSourceId)

Delete an orderSource

Deletes the orderSource identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSource(orderSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderSourceFile"></a>
# **deleteOrderSourceFile**
> deleteOrderSourceFile(orderSourceId, fileId)

Delete a file for an orderSource.

Deletes an existing orderSource file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceFile(orderSourceId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderSourceTag"></a>
# **deleteOrderSourceTag**
> deleteOrderSourceTag(orderSourceId, orderSourceTag)

Delete a tag for an orderSource.

Deletes an existing orderSource tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to remove tag from

var orderSourceTag = "orderSourceTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceTag(orderSourceId, orderSourceTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to remove tag from | 
 **orderSourceTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderSourceById"></a>
# **getDuplicateOrderSourceById**
> OrderSource getDuplicateOrderSourceById(orderSourceId)

Get a duplicated an orderSource by id

Returns a duplicated orderSource identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderSourceById(orderSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to be duplicated. | 

### Return type

[**OrderSource**](OrderSource.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceByFilter"></a>
# **getOrderSourceByFilter**
> [OrderSource] getOrderSourceByFilter(opts)

Search orderSources by filter

Returns the list of orderSources that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

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
apiInstance.getOrderSourceByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderSource]**](OrderSource.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceById"></a>
# **getOrderSourceById**
> OrderSource getOrderSourceById(orderSourceId)

Get an orderSource by id

Returns the orderSource identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderSourceById(orderSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to be returned. | 

### Return type

[**OrderSource**](OrderSource.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceFiles"></a>
# **getOrderSourceFiles**
> getOrderSourceFiles(orderSourceId)

Get the files for an orderSource.

Get all existing orderSource files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderSourceFiles(orderSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceTags"></a>
# **getOrderSourceTags**
> getOrderSourceTags(orderSourceId)

Get the tags for an orderSource.

Get all existing orderSource tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var orderSourceId = 56; // Number | Id of the orderSource to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderSourceTags(orderSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceId** | **Number**| Id of the orderSource to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderSource"></a>
# **updateOrderSource**
> updateOrderSource(body)

Update an orderSource

Updates an existing orderSource using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var body = new infoplus.OrderSource(); // OrderSource | OrderSource to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderSource(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSource**](OrderSource.md)| OrderSource to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrderSourceCustomFields"></a>
# **updateOrderSourceCustomFields**
> updateOrderSourceCustomFields(body)

Update an orderSource custom fields

Updates an existing orderSource custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceApi();

var body = new infoplus.OrderSource(); // OrderSource | OrderSource to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderSourceCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSource**](OrderSource.md)| OrderSource to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

