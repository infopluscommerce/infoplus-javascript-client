# infoplus.OrderApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrder**](OrderApi.md#addOrder) | **POST** /beta/order | Create an order
[**addOrderAudit**](OrderApi.md#addOrderAudit) | **PUT** /beta/order/{orderId}/audit/{orderAudit} | Add new audit for an order
[**addOrderFile**](OrderApi.md#addOrderFile) | **POST** /beta/order/{orderId}/file/{fileName} | Attach a file to an order
[**addOrderTag**](OrderApi.md#addOrderTag) | **PUT** /beta/order/{orderId}/tag/{orderTag} | Add new tags for an order.
[**applyOrderWarehouseFulfillmentPlan**](OrderApi.md#applyOrderWarehouseFulfillmentPlan) | **POST** /beta/order/applyOrderWarehouseFulfillmentPlan | Run the Apply Order Warehouse Fulfillment Plan method.
[**deleteOrder**](OrderApi.md#deleteOrder) | **DELETE** /beta/order/{orderId} | Delete an order
[**deleteOrderTag**](OrderApi.md#deleteOrderTag) | **DELETE** /beta/order/{orderId}/tag/{orderTag} | Delete a tag for an order.
[**editFulfillmentChannel**](OrderApi.md#editFulfillmentChannel) | **POST** /beta/order/editFulfillmentChannel | Run the EditLineItemFulfillmentStrategy process.
[**editLineItems**](OrderApi.md#editLineItems) | **POST** /beta/order/editLineItems | Run the ReqManualSubstitution process.
[**getDuplicateOrderById**](OrderApi.md#getDuplicateOrderById) | **GET** /beta/order/duplicate/{orderId} | Get a duplicated an order by id
[**getOrderByFilter**](OrderApi.md#getOrderByFilter) | **GET** /beta/order/search | Search orders by filter
[**getOrderById**](OrderApi.md#getOrderById) | **GET** /beta/order/{orderId} | Get an order by id
[**getOrderTags**](OrderApi.md#getOrderTags) | **GET** /beta/order/{orderId}/tag | Get the tags for an order.
[**getOrderWarehouseFulfillmentData**](OrderApi.md#getOrderWarehouseFulfillmentData) | **POST** /beta/order/getOrderWarehouseFulfillmentData | Run the Get Order Warehouse Fulfillment Plan method.
[**runFulfillmentPlan**](OrderApi.md#runFulfillmentPlan) | **POST** /beta/order/runFulfillmentPlan | Run the RunFulfillmentPlan process.
[**updateOrder**](OrderApi.md#updateOrder) | **PUT** /beta/order | Update an order
[**updateOrderCustomFields**](OrderApi.md#updateOrderCustomFields) | **PUT** /beta/order/customFields | Update an order custom fields


<a name="addOrder"></a>
# **addOrder**
> Order addOrder(body)

Create an order

Inserts a new order using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.Order(); // Order | Order to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)| Order to be inserted. | 

### Return type

[**Order**](Order.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderAudit"></a>
# **addOrderAudit**
> addOrderAudit(orderId, orderAudit)

Add new audit for an order

Adds an audit to an existing order.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to add an audit to

var orderAudit = "orderAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderAudit(orderId, orderAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to add an audit to | 
 **orderAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderFile"></a>
# **addOrderFile**
> addOrderFile(orderId, fileName)

Attach a file to an order

Adds a file to an existing order.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderFile(orderId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOrderTag"></a>
# **addOrderTag**
> addOrderTag(orderId, orderTag)

Add new tags for an order.

Adds a tag to an existing order.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to add a tag to

var orderTag = "orderTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderTag(orderId, orderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to add a tag to | 
 **orderTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="applyOrderWarehouseFulfillmentPlan"></a>
# **applyOrderWarehouseFulfillmentPlan**
> ApplyOrderWarehouseFulfillmentPlanOutput applyOrderWarehouseFulfillmentPlan(body)

Run the Apply Order Warehouse Fulfillment Plan method.



### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.ApplyOrderWarehouseFulfillmentPlanInput(); // ApplyOrderWarehouseFulfillmentPlanInput | Input data for Apply Order Warehouse Fulfillment Plan process.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.applyOrderWarehouseFulfillmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApplyOrderWarehouseFulfillmentPlanInput**](ApplyOrderWarehouseFulfillmentPlanInput.md)| Input data for Apply Order Warehouse Fulfillment Plan process. | 

### Return type

[**ApplyOrderWarehouseFulfillmentPlanOutput**](ApplyOrderWarehouseFulfillmentPlanOutput.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrder"></a>
# **deleteOrder**
> deleteOrder(orderId)

Delete an order

Deletes the order identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrder(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderTag"></a>
# **deleteOrderTag**
> deleteOrderTag(orderId, orderTag)

Delete a tag for an order.

Deletes an existing order tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to remove tag from

var orderTag = "orderTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderTag(orderId, orderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to remove tag from | 
 **orderTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="editFulfillmentChannel"></a>
# **editFulfillmentChannel**
> [ProcessOutputAPIModel] editFulfillmentChannel(body)

Run the EditLineItemFulfillmentStrategy process.



### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.EditLineItemFulfillmentStrategyInputAPIModel(); // EditLineItemFulfillmentStrategyInputAPIModel | Input data for EditLineItemFulfillmentStrategy process.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editFulfillmentChannel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EditLineItemFulfillmentStrategyInputAPIModel**](EditLineItemFulfillmentStrategyInputAPIModel.md)| Input data for EditLineItemFulfillmentStrategy process. | 

### Return type

[**[ProcessOutputAPIModel]**](ProcessOutputAPIModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="editLineItems"></a>
# **editLineItems**
> [ProcessOutputAPIModel] editLineItems(body)

Run the ReqManualSubstitution process.



### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.ReqManualSubstitutionInputAPIModel(); // ReqManualSubstitutionInputAPIModel | Input data for ReqManualSubstitution process.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editLineItems(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReqManualSubstitutionInputAPIModel**](ReqManualSubstitutionInputAPIModel.md)| Input data for ReqManualSubstitution process. | 

### Return type

[**[ProcessOutputAPIModel]**](ProcessOutputAPIModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderById"></a>
# **getDuplicateOrderById**
> Order getDuplicateOrderById(orderId)

Get a duplicated an order by id

Returns a duplicated order identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderById(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to be duplicated. | 

### Return type

[**Order**](Order.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderByFilter"></a>
# **getOrderByFilter**
> [Order] getOrderByFilter(opts)

Search orders by filter

Returns the list of orders that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

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
apiInstance.getOrderByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Order]**](Order.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderById"></a>
# **getOrderById**
> Order getOrderById(orderId)

Get an order by id

Returns the order identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderById(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to be returned. | 

### Return type

[**Order**](Order.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderTags"></a>
# **getOrderTags**
> getOrderTags(orderId)

Get the tags for an order.

Get all existing order tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var orderId = 8.14; // Number | Id of the order to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderTags(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Id of the order to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderWarehouseFulfillmentData"></a>
# **getOrderWarehouseFulfillmentData**
> GetOrderWarehouseFulfillmentDataOutput getOrderWarehouseFulfillmentData(body)

Run the Get Order Warehouse Fulfillment Plan method.



### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.GetOrderWarehouseFulfillmentDataInput(); // GetOrderWarehouseFulfillmentDataInput | Input data for Get Order Warehouse Fulfillment Plan process.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderWarehouseFulfillmentData(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetOrderWarehouseFulfillmentDataInput**](GetOrderWarehouseFulfillmentDataInput.md)| Input data for Get Order Warehouse Fulfillment Plan process. | 

### Return type

[**GetOrderWarehouseFulfillmentDataOutput**](GetOrderWarehouseFulfillmentDataOutput.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="runFulfillmentPlan"></a>
# **runFulfillmentPlan**
> [ProcessOutputAPIModel] runFulfillmentPlan(body)

Run the RunFulfillmentPlan process.



### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.RunFulfillmentPlanInputAPIModel(); // RunFulfillmentPlanInputAPIModel | Input data for RunFulfillmentPlan process.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runFulfillmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RunFulfillmentPlanInputAPIModel**](RunFulfillmentPlanInputAPIModel.md)| Input data for RunFulfillmentPlan process. | 

### Return type

[**[ProcessOutputAPIModel]**](ProcessOutputAPIModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrder"></a>
# **updateOrder**
> updateOrder(body)

Update an order

Updates an existing order using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.Order(); // Order | Order to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)| Order to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrderCustomFields"></a>
# **updateOrderCustomFields**
> updateOrderCustomFields(body)

Update an order custom fields

Updates an existing order custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderApi();

var body = new infoplus.Order(); // Order | Order to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)| Order to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

