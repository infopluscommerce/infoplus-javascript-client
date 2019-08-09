# infoplus.OrderSourceReservationApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderSourceReservation**](OrderSourceReservationApi.md#addOrderSourceReservation) | **POST** /beta/orderSourceReservation | Create an orderSourceReservation
[**addOrderSourceReservationAudit**](OrderSourceReservationApi.md#addOrderSourceReservationAudit) | **PUT** /beta/orderSourceReservation/{orderSourceReservationId}/audit/{orderSourceReservationAudit} | Add new audit for an orderSourceReservation
[**addOrderSourceReservationFile**](OrderSourceReservationApi.md#addOrderSourceReservationFile) | **POST** /beta/orderSourceReservation/{orderSourceReservationId}/file/{fileName} | Attach a file to an orderSourceReservation
[**addOrderSourceReservationTag**](OrderSourceReservationApi.md#addOrderSourceReservationTag) | **PUT** /beta/orderSourceReservation/{orderSourceReservationId}/tag/{orderSourceReservationTag} | Add new tags for an orderSourceReservation.
[**deleteOrderSourceReservation**](OrderSourceReservationApi.md#deleteOrderSourceReservation) | **DELETE** /beta/orderSourceReservation/{orderSourceReservationId} | Delete an orderSourceReservation
[**deleteOrderSourceReservationTag**](OrderSourceReservationApi.md#deleteOrderSourceReservationTag) | **DELETE** /beta/orderSourceReservation/{orderSourceReservationId}/tag/{orderSourceReservationTag} | Delete a tag for an orderSourceReservation.
[**getDuplicateOrderSourceReservationById**](OrderSourceReservationApi.md#getDuplicateOrderSourceReservationById) | **GET** /beta/orderSourceReservation/duplicate/{orderSourceReservationId} | Get a duplicated an orderSourceReservation by id
[**getOrderSourceReservationByFilter**](OrderSourceReservationApi.md#getOrderSourceReservationByFilter) | **GET** /beta/orderSourceReservation/search | Search orderSourceReservations by filter
[**getOrderSourceReservationById**](OrderSourceReservationApi.md#getOrderSourceReservationById) | **GET** /beta/orderSourceReservation/{orderSourceReservationId} | Get an orderSourceReservation by id
[**getOrderSourceReservationTags**](OrderSourceReservationApi.md#getOrderSourceReservationTags) | **GET** /beta/orderSourceReservation/{orderSourceReservationId}/tag | Get the tags for an orderSourceReservation.
[**updateOrderSourceReservation**](OrderSourceReservationApi.md#updateOrderSourceReservation) | **PUT** /beta/orderSourceReservation | Update an orderSourceReservation
[**updateOrderSourceReservationCustomFields**](OrderSourceReservationApi.md#updateOrderSourceReservationCustomFields) | **PUT** /beta/orderSourceReservation/customFields | Update an orderSourceReservation custom fields


<a name="addOrderSourceReservation"></a>
# **addOrderSourceReservation**
> OrderSourceReservation addOrderSourceReservation(body)

Create an orderSourceReservation

Inserts a new orderSourceReservation using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var body = new infoplus.OrderSourceReservation(); // OrderSourceReservation | OrderSourceReservation to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrderSourceReservation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceReservation**](OrderSourceReservation.md)| OrderSourceReservation to be inserted. | 

### Return type

[**OrderSourceReservation**](OrderSourceReservation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceReservationAudit"></a>
# **addOrderSourceReservationAudit**
> addOrderSourceReservationAudit(orderSourceReservationId, orderSourceReservationAudit)

Add new audit for an orderSourceReservation

Adds an audit to an existing orderSourceReservation.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to add an audit to

var orderSourceReservationAudit = "orderSourceReservationAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceReservationAudit(orderSourceReservationId, orderSourceReservationAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to add an audit to | 
 **orderSourceReservationAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceReservationFile"></a>
# **addOrderSourceReservationFile**
> addOrderSourceReservationFile(orderSourceReservationId, fileName)

Attach a file to an orderSourceReservation

Adds a file to an existing orderSourceReservation.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceReservationFile(orderSourceReservationId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOrderSourceReservationTag"></a>
# **addOrderSourceReservationTag**
> addOrderSourceReservationTag(orderSourceReservationId, orderSourceReservationTag)

Add new tags for an orderSourceReservation.

Adds a tag to an existing orderSourceReservation.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to add a tag to

var orderSourceReservationTag = "orderSourceReservationTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceReservationTag(orderSourceReservationId, orderSourceReservationTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to add a tag to | 
 **orderSourceReservationTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderSourceReservation"></a>
# **deleteOrderSourceReservation**
> deleteOrderSourceReservation(orderSourceReservationId)

Delete an orderSourceReservation

Deletes the orderSourceReservation identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceReservation(orderSourceReservationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderSourceReservationTag"></a>
# **deleteOrderSourceReservationTag**
> deleteOrderSourceReservationTag(orderSourceReservationId, orderSourceReservationTag)

Delete a tag for an orderSourceReservation.

Deletes an existing orderSourceReservation tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to remove tag from

var orderSourceReservationTag = "orderSourceReservationTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceReservationTag(orderSourceReservationId, orderSourceReservationTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to remove tag from | 
 **orderSourceReservationTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderSourceReservationById"></a>
# **getDuplicateOrderSourceReservationById**
> OrderSourceReservation getDuplicateOrderSourceReservationById(orderSourceReservationId)

Get a duplicated an orderSourceReservation by id

Returns a duplicated orderSourceReservation identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderSourceReservationById(orderSourceReservationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to be duplicated. | 

### Return type

[**OrderSourceReservation**](OrderSourceReservation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceReservationByFilter"></a>
# **getOrderSourceReservationByFilter**
> [OrderSourceReservation] getOrderSourceReservationByFilter(opts)

Search orderSourceReservations by filter

Returns the list of orderSourceReservations that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

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
apiInstance.getOrderSourceReservationByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderSourceReservation]**](OrderSourceReservation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceReservationById"></a>
# **getOrderSourceReservationById**
> OrderSourceReservation getOrderSourceReservationById(orderSourceReservationId)

Get an orderSourceReservation by id

Returns the orderSourceReservation identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderSourceReservationById(orderSourceReservationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to be returned. | 

### Return type

[**OrderSourceReservation**](OrderSourceReservation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceReservationTags"></a>
# **getOrderSourceReservationTags**
> getOrderSourceReservationTags(orderSourceReservationId)

Get the tags for an orderSourceReservation.

Get all existing orderSourceReservation tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var orderSourceReservationId = 56; // Number | Id of the orderSourceReservation to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderSourceReservationTags(orderSourceReservationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceReservationId** | **Number**| Id of the orderSourceReservation to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderSourceReservation"></a>
# **updateOrderSourceReservation**
> updateOrderSourceReservation(body)

Update an orderSourceReservation

Updates an existing orderSourceReservation using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var body = new infoplus.OrderSourceReservation(); // OrderSourceReservation | OrderSourceReservation to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderSourceReservation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceReservation**](OrderSourceReservation.md)| OrderSourceReservation to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrderSourceReservationCustomFields"></a>
# **updateOrderSourceReservationCustomFields**
> updateOrderSourceReservationCustomFields(body)

Update an orderSourceReservation custom fields

Updates an existing orderSourceReservation custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceReservationApi();

var body = new infoplus.OrderSourceReservation(); // OrderSourceReservation | OrderSourceReservation to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderSourceReservationCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceReservation**](OrderSourceReservation.md)| OrderSourceReservation to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

