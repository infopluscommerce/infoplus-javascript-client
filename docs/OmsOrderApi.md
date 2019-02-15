# infoplus.OmsOrderApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOmsOrder**](OmsOrderApi.md#addOmsOrder) | **POST** /beta/omsOrder | Create an omsOrder
[**addOmsOrderAudit**](OmsOrderApi.md#addOmsOrderAudit) | **PUT** /beta/omsOrder/{omsOrderId}/audit/{omsOrderAudit} | Add new audit for an omsOrder
[**addOmsOrderTag**](OmsOrderApi.md#addOmsOrderTag) | **PUT** /beta/omsOrder/{omsOrderId}/tag/{omsOrderTag} | Add new tags for an omsOrder.
[**deleteOmsOrderTag**](OmsOrderApi.md#deleteOmsOrderTag) | **DELETE** /beta/omsOrder/{omsOrderId}/tag/{omsOrderTag} | Delete a tag for an omsOrder.
[**getDuplicateOmsOrderById**](OmsOrderApi.md#getDuplicateOmsOrderById) | **GET** /beta/omsOrder/duplicate/{omsOrderId} | Get a duplicated an omsOrder by id
[**getOmsOrderByFilter**](OmsOrderApi.md#getOmsOrderByFilter) | **GET** /beta/omsOrder/search | Search omsOrders by filter
[**getOmsOrderById**](OmsOrderApi.md#getOmsOrderById) | **GET** /beta/omsOrder/{omsOrderId} | Get an omsOrder by id
[**getOmsOrderTags**](OmsOrderApi.md#getOmsOrderTags) | **GET** /beta/omsOrder/{omsOrderId}/tag | Get the tags for an omsOrder.
[**updateOmsOrder**](OmsOrderApi.md#updateOmsOrder) | **PUT** /beta/omsOrder | Update an omsOrder
[**updateOmsOrderCustomFields**](OmsOrderApi.md#updateOmsOrderCustomFields) | **PUT** /beta/omsOrder/customFields | Update an omsOrder custom fields


<a name="addOmsOrder"></a>
# **addOmsOrder**
> OmsOrder addOmsOrder(body)

Create an omsOrder

Inserts a new omsOrder using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var body = new infoplus.OmsOrder(); // OmsOrder | OmsOrder to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOmsOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OmsOrder**](OmsOrder.md)| OmsOrder to be inserted. | 

### Return type

[**OmsOrder**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOmsOrderAudit"></a>
# **addOmsOrderAudit**
> addOmsOrderAudit(omsOrderId, omsOrderAudit)

Add new audit for an omsOrder

Adds an audit to an existing omsOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to add an audit to

var omsOrderAudit = "omsOrderAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOmsOrderAudit(omsOrderId, omsOrderAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to add an audit to | 
 **omsOrderAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOmsOrderTag"></a>
# **addOmsOrderTag**
> addOmsOrderTag(omsOrderId, omsOrderTag)

Add new tags for an omsOrder.

Adds a tag to an existing omsOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to add a tag to

var omsOrderTag = "omsOrderTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOmsOrderTag(omsOrderId, omsOrderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to add a tag to | 
 **omsOrderTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOmsOrderTag"></a>
# **deleteOmsOrderTag**
> deleteOmsOrderTag(omsOrderId, omsOrderTag)

Delete a tag for an omsOrder.

Deletes an existing omsOrder tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to remove tag from

var omsOrderTag = "omsOrderTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOmsOrderTag(omsOrderId, omsOrderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to remove tag from | 
 **omsOrderTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOmsOrderById"></a>
# **getDuplicateOmsOrderById**
> OmsOrder getDuplicateOmsOrderById(omsOrderId)

Get a duplicated an omsOrder by id

Returns a duplicated omsOrder identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOmsOrderById(omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to be duplicated. | 

### Return type

[**OmsOrder**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOmsOrderByFilter"></a>
# **getOmsOrderByFilter**
> [OmsOrder] getOmsOrderByFilter(opts)

Search omsOrders by filter

Returns the list of omsOrders that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

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
apiInstance.getOmsOrderByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OmsOrder]**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOmsOrderById"></a>
# **getOmsOrderById**
> OmsOrder getOmsOrderById(omsOrderId)

Get an omsOrder by id

Returns the omsOrder identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOmsOrderById(omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to be returned. | 

### Return type

[**OmsOrder**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOmsOrderTags"></a>
# **getOmsOrderTags**
> getOmsOrderTags(omsOrderId)

Get the tags for an omsOrder.

Get all existing omsOrder tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOmsOrderTags(omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOmsOrder"></a>
# **updateOmsOrder**
> updateOmsOrder(body)

Update an omsOrder

Updates an existing omsOrder using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var body = new infoplus.OmsOrder(); // OmsOrder | OmsOrder to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOmsOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OmsOrder**](OmsOrder.md)| OmsOrder to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOmsOrderCustomFields"></a>
# **updateOmsOrderCustomFields**
> updateOmsOrderCustomFields(body)

Update an omsOrder custom fields

Updates an existing omsOrder custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var body = new infoplus.OmsOrder(); // OmsOrder | OmsOrder to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOmsOrderCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OmsOrder**](OmsOrder.md)| OmsOrder to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

