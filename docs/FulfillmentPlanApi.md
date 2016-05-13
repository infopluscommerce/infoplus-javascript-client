# infoplus.FulfillmentPlanApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFulfillmentPlan**](FulfillmentPlanApi.md#addFulfillmentPlan) | **POST** /v1.0/fulfillmentPlan | Create a fulfillmentPlan
[**deleteFulfillmentPlan**](FulfillmentPlanApi.md#deleteFulfillmentPlan) | **DELETE** /v1.0/fulfillmentPlan/{fulfillmentPlanId} | Delete a fulfillmentPlan
[**getFulfillmentPlanByFilter**](FulfillmentPlanApi.md#getFulfillmentPlanByFilter) | **GET** /v1.0/fulfillmentPlan/search | Search fulfillmentPlans by filter
[**getFulfillmentPlanById**](FulfillmentPlanApi.md#getFulfillmentPlanById) | **GET** /v1.0/fulfillmentPlan/{fulfillmentPlanId} | Get a fulfillmentPlan by id
[**updateFulfillmentPlan**](FulfillmentPlanApi.md#updateFulfillmentPlan) | **PUT** /v1.0/fulfillmentPlan | Update a fulfillmentPlan


<a name="addFulfillmentPlan"></a>
# **addFulfillmentPlan**
> FulfillmentPlan addFulfillmentPlan(body)

Create a fulfillmentPlan

Inserts a new fulfillmentPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentPlanApi()

var body = new infoplus.FulfillmentPlan(); // {FulfillmentPlan} FulfillmentPlan to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addFulfillmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FulfillmentPlan**](FulfillmentPlan.md)| FulfillmentPlan to be inserted. | 

### Return type

[**FulfillmentPlan**](FulfillmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFulfillmentPlan"></a>
# **deleteFulfillmentPlan**
> deleteFulfillmentPlan(fulfillmentPlanId)

Delete a fulfillmentPlan

Deletes the fulfillmentPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentPlanApi()

var fulfillmentPlanId = 56; // {Integer} Id of the fulfillmentPlan to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteFulfillmentPlan(fulfillmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentPlanId** | **Integer**| Id of the fulfillmentPlan to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentPlanByFilter"></a>
# **getFulfillmentPlanByFilter**
> [FulfillmentPlan] getFulfillmentPlanByFilter(opts)

Search fulfillmentPlans by filter

Returns the list of fulfillmentPlans that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentPlanApi()

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
api.getFulfillmentPlanByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[FulfillmentPlan]**](FulfillmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentPlanById"></a>
# **getFulfillmentPlanById**
> FulfillmentPlan getFulfillmentPlanById(fulfillmentPlanId)

Get a fulfillmentPlan by id

Returns the fulfillmentPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentPlanApi()

var fulfillmentPlanId = 56; // {Integer} Id of the fulfillmentPlan to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getFulfillmentPlanById(fulfillmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentPlanId** | **Integer**| Id of the fulfillmentPlan to be returned. | 

### Return type

[**FulfillmentPlan**](FulfillmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateFulfillmentPlan"></a>
# **updateFulfillmentPlan**
> updateFulfillmentPlan(body)

Update a fulfillmentPlan

Updates an existing fulfillmentPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.FulfillmentPlanApi()

var body = new infoplus.FulfillmentPlan(); // {FulfillmentPlan} FulfillmentPlan to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateFulfillmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FulfillmentPlan**](FulfillmentPlan.md)| FulfillmentPlan to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

