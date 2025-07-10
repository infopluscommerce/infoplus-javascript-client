# infoplus.ReturnOrderApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReturnOrderAudit**](ReturnOrderApi.md#addReturnOrderAudit) | **PUT** /beta/returnOrder/{returnOrderId}/audit/{returnOrderAudit} | Add new audit for a returnOrder
[**addReturnOrderFile**](ReturnOrderApi.md#addReturnOrderFile) | **POST** /beta/returnOrder/{returnOrderId}/file/{fileName} | Attach a file to a returnOrder
[**addReturnOrderFileByURL**](ReturnOrderApi.md#addReturnOrderFileByURL) | **POST** /beta/returnOrder/{returnOrderId}/file | Attach a file to a returnOrder by URL.
[**addReturnOrderTag**](ReturnOrderApi.md#addReturnOrderTag) | **PUT** /beta/returnOrder/{returnOrderId}/tag/{returnOrderTag} | Add new tags for a returnOrder.
[**deleteReturnOrderFile**](ReturnOrderApi.md#deleteReturnOrderFile) | **DELETE** /beta/returnOrder/{returnOrderId}/file/{fileId} | Delete a file for a returnOrder.
[**deleteReturnOrderTag**](ReturnOrderApi.md#deleteReturnOrderTag) | **DELETE** /beta/returnOrder/{returnOrderId}/tag/{returnOrderTag} | Delete a tag for a returnOrder.
[**getDuplicateReturnOrderById**](ReturnOrderApi.md#getDuplicateReturnOrderById) | **GET** /beta/returnOrder/duplicate/{returnOrderId} | Get a duplicated a returnOrder by id
[**getReturnOrderByFilter**](ReturnOrderApi.md#getReturnOrderByFilter) | **GET** /beta/returnOrder/search | Search returnOrders by filter
[**getReturnOrderById**](ReturnOrderApi.md#getReturnOrderById) | **GET** /beta/returnOrder/{returnOrderId} | Get a returnOrder by id
[**getReturnOrderFiles**](ReturnOrderApi.md#getReturnOrderFiles) | **GET** /beta/returnOrder/{returnOrderId}/file | Get the files for a returnOrder.
[**getReturnOrderTags**](ReturnOrderApi.md#getReturnOrderTags) | **GET** /beta/returnOrder/{returnOrderId}/tag | Get the tags for a returnOrder.
[**updateReturnOrder**](ReturnOrderApi.md#updateReturnOrder) | **PUT** /beta/returnOrder | Update a returnOrder
[**updateReturnOrderCustomFields**](ReturnOrderApi.md#updateReturnOrderCustomFields) | **PUT** /beta/returnOrder/customFields | Update a returnOrder custom fields


<a name="addReturnOrderAudit"></a>
# **addReturnOrderAudit**
> addReturnOrderAudit(returnOrderId, returnOrderAudit)

Add new audit for a returnOrder

Adds an audit to an existing returnOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to add an audit to

var returnOrderAudit = "returnOrderAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderAudit(returnOrderId, returnOrderAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to add an audit to | 
 **returnOrderAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnOrderFile"></a>
# **addReturnOrderFile**
> addReturnOrderFile(returnOrderId, fileName)

Attach a file to a returnOrder

Adds a file to an existing returnOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderFile(returnOrderId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addReturnOrderFileByURL"></a>
# **addReturnOrderFileByURL**
> addReturnOrderFileByURL(body, returnOrderId)

Attach a file to a returnOrder by URL.

Adds a file to an existing returnOrder by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var returnOrderId = 56; // Number | Id of the returnOrder to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderFileByURL(body, returnOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **returnOrderId** | **Number**| Id of the returnOrder to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnOrderTag"></a>
# **addReturnOrderTag**
> addReturnOrderTag(returnOrderId, returnOrderTag)

Add new tags for a returnOrder.

Adds a tag to an existing returnOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to add a tag to

var returnOrderTag = "returnOrderTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderTag(returnOrderId, returnOrderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to add a tag to | 
 **returnOrderTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReturnOrderFile"></a>
# **deleteReturnOrderFile**
> deleteReturnOrderFile(returnOrderId, fileId)

Delete a file for a returnOrder.

Deletes an existing returnOrder file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnOrderFile(returnOrderId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteReturnOrderTag"></a>
# **deleteReturnOrderTag**
> deleteReturnOrderTag(returnOrderId, returnOrderTag)

Delete a tag for a returnOrder.

Deletes an existing returnOrder tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to remove tag from

var returnOrderTag = "returnOrderTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnOrderTag(returnOrderId, returnOrderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to remove tag from | 
 **returnOrderTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateReturnOrderById"></a>
# **getDuplicateReturnOrderById**
> ReturnOrder getDuplicateReturnOrderById(returnOrderId)

Get a duplicated a returnOrder by id

Returns a duplicated returnOrder identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateReturnOrderById(returnOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to be duplicated. | 

### Return type

[**ReturnOrder**](ReturnOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderByFilter"></a>
# **getReturnOrderByFilter**
> [ReturnOrder] getReturnOrderByFilter(opts)

Search returnOrders by filter

Returns the list of returnOrders that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

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
apiInstance.getReturnOrderByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReturnOrder]**](ReturnOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderById"></a>
# **getReturnOrderById**
> ReturnOrder getReturnOrderById(returnOrderId)

Get a returnOrder by id

Returns the returnOrder identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReturnOrderById(returnOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to be returned. | 

### Return type

[**ReturnOrder**](ReturnOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderFiles"></a>
# **getReturnOrderFiles**
> getReturnOrderFiles(returnOrderId)

Get the files for a returnOrder.

Get all existing returnOrder files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnOrderFiles(returnOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderTags"></a>
# **getReturnOrderTags**
> getReturnOrderTags(returnOrderId)

Get the tags for a returnOrder.

Get all existing returnOrder tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var returnOrderId = 56; // Number | Id of the returnOrder to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnOrderTags(returnOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderId** | **Number**| Id of the returnOrder to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReturnOrder"></a>
# **updateReturnOrder**
> updateReturnOrder(body)

Update a returnOrder

Updates an existing returnOrder using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var body = new infoplus.ReturnOrder(); // ReturnOrder | ReturnOrder to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReturnOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReturnOrder**](ReturnOrder.md)| ReturnOrder to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateReturnOrderCustomFields"></a>
# **updateReturnOrderCustomFields**
> updateReturnOrderCustomFields(body)

Update a returnOrder custom fields

Updates an existing returnOrder custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderApi();

var body = new infoplus.ReturnOrder(); // ReturnOrder | ReturnOrder to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReturnOrderCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReturnOrder**](ReturnOrder.md)| ReturnOrder to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

