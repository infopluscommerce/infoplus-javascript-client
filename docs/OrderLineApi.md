# infoplus.OrderLineApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderLineAudit**](OrderLineApi.md#addOrderLineAudit) | **PUT** /beta/orderLine/{orderLineId}/audit/{orderLineAudit} | Add new audit for an orderLine
[**addOrderLineFile**](OrderLineApi.md#addOrderLineFile) | **POST** /beta/orderLine/{orderLineId}/file/{fileName} | Attach a file to an orderLine
[**addOrderLineTag**](OrderLineApi.md#addOrderLineTag) | **PUT** /beta/orderLine/{orderLineId}/tag/{orderLineTag} | Add new tags for an orderLine.
[**deleteOrderLineTag**](OrderLineApi.md#deleteOrderLineTag) | **DELETE** /beta/orderLine/{orderLineId}/tag/{orderLineTag} | Delete a tag for an orderLine.
[**getDuplicateOrderLineById**](OrderLineApi.md#getDuplicateOrderLineById) | **GET** /beta/orderLine/duplicate/{orderLineId} | Get a duplicated an orderLine by id
[**getOrderLineByFilter**](OrderLineApi.md#getOrderLineByFilter) | **GET** /beta/orderLine/search | Search orderLines by filter
[**getOrderLineById**](OrderLineApi.md#getOrderLineById) | **GET** /beta/orderLine/{orderLineId} | Get an orderLine by id
[**getOrderLineTags**](OrderLineApi.md#getOrderLineTags) | **GET** /beta/orderLine/{orderLineId}/tag | Get the tags for an orderLine.
[**updateOrderLineCustomFields**](OrderLineApi.md#updateOrderLineCustomFields) | **PUT** /beta/orderLine/customFields | Update an orderLine custom fields


<a name="addOrderLineAudit"></a>
# **addOrderLineAudit**
> addOrderLineAudit(orderLineId, orderLineAudit)

Add new audit for an orderLine

Adds an audit to an existing orderLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var orderLineId = 56; // Number | Id of the orderLine to add an audit to

var orderLineAudit = "orderLineAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderLineAudit(orderLineId, orderLineAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **Number**| Id of the orderLine to add an audit to | 
 **orderLineAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderLineFile"></a>
# **addOrderLineFile**
> addOrderLineFile(orderLineId, fileName)

Attach a file to an orderLine

Adds a file to an existing orderLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var orderLineId = 56; // Number | Id of the orderLine to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderLineFile(orderLineId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **Number**| Id of the orderLine to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOrderLineTag"></a>
# **addOrderLineTag**
> addOrderLineTag(orderLineId, orderLineTag)

Add new tags for an orderLine.

Adds a tag to an existing orderLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var orderLineId = 56; // Number | Id of the orderLine to add a tag to

var orderLineTag = "orderLineTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderLineTag(orderLineId, orderLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **Number**| Id of the orderLine to add a tag to | 
 **orderLineTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderLineTag"></a>
# **deleteOrderLineTag**
> deleteOrderLineTag(orderLineId, orderLineTag)

Delete a tag for an orderLine.

Deletes an existing orderLine tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var orderLineId = 56; // Number | Id of the orderLine to remove tag from

var orderLineTag = "orderLineTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderLineTag(orderLineId, orderLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **Number**| Id of the orderLine to remove tag from | 
 **orderLineTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderLineById"></a>
# **getDuplicateOrderLineById**
> OrderLine getDuplicateOrderLineById(orderLineId)

Get a duplicated an orderLine by id

Returns a duplicated orderLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var orderLineId = 56; // Number | Id of the orderLine to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderLineById(orderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **Number**| Id of the orderLine to be duplicated. | 

### Return type

[**OrderLine**](OrderLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderLineByFilter"></a>
# **getOrderLineByFilter**
> [OrderLine] getOrderLineByFilter(opts)

Search orderLines by filter

Returns the list of orderLines that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

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
apiInstance.getOrderLineByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderLine]**](OrderLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderLineById"></a>
# **getOrderLineById**
> OrderLine getOrderLineById(orderLineId)

Get an orderLine by id

Returns the orderLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var orderLineId = 56; // Number | Id of the orderLine to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderLineById(orderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **Number**| Id of the orderLine to be returned. | 

### Return type

[**OrderLine**](OrderLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderLineTags"></a>
# **getOrderLineTags**
> getOrderLineTags(orderLineId)

Get the tags for an orderLine.

Get all existing orderLine tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var orderLineId = 56; // Number | Id of the orderLine to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderLineTags(orderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineId** | **Number**| Id of the orderLine to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderLineCustomFields"></a>
# **updateOrderLineCustomFields**
> updateOrderLineCustomFields(body)

Update an orderLine custom fields

Updates an existing orderLine custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLineApi();

var body = new infoplus.OrderLine(); // OrderLine | OrderLine to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderLineCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderLine**](OrderLine.md)| OrderLine to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

