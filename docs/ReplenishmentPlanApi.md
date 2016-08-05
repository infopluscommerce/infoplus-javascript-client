# infoplus.ReplenishmentPlanApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReplenishmentPlan**](ReplenishmentPlanApi.md#addReplenishmentPlan) | **POST** /beta/replenishmentPlan | Create a replenishmentPlan
[**deleteReplenishmentPlan**](ReplenishmentPlanApi.md#deleteReplenishmentPlan) | **DELETE** /beta/replenishmentPlan/{replenishmentPlanId} | Delete a replenishmentPlan
[**getReplenishmentPlanByFilter**](ReplenishmentPlanApi.md#getReplenishmentPlanByFilter) | **GET** /beta/replenishmentPlan/search | Search replenishmentPlans by filter
[**getReplenishmentPlanById**](ReplenishmentPlanApi.md#getReplenishmentPlanById) | **GET** /beta/replenishmentPlan/{replenishmentPlanId} | Get a replenishmentPlan by id
[**updateReplenishmentPlan**](ReplenishmentPlanApi.md#updateReplenishmentPlan) | **PUT** /beta/replenishmentPlan | Update a replenishmentPlan
[**updateReplenishmentPlanCustomFields**](ReplenishmentPlanApi.md#updateReplenishmentPlanCustomFields) | **PUT** /beta/replenishmentPlan/customFields | Update a replenishmentPlan custom fields


<a name="addReplenishmentPlan"></a>
# **addReplenishmentPlan**
> ReplenishmentPlan addReplenishmentPlan(body)

Create a replenishmentPlan

Inserts a new replenishmentPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReplenishmentPlanApi()

var body = new infoplus.ReplenishmentPlan(); // {ReplenishmentPlan} ReplenishmentPlan to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addReplenishmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReplenishmentPlan**](ReplenishmentPlan.md)| ReplenishmentPlan to be inserted. | 

### Return type

[**ReplenishmentPlan**](ReplenishmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReplenishmentPlan"></a>
# **deleteReplenishmentPlan**
> deleteReplenishmentPlan(replenishmentPlanId)

Delete a replenishmentPlan

Deletes the replenishmentPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReplenishmentPlanApi()

var replenishmentPlanId = 56; // {Integer} Id of the replenishmentPlan to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteReplenishmentPlan(replenishmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Integer**| Id of the replenishmentPlan to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentPlanByFilter"></a>
# **getReplenishmentPlanByFilter**
> [ReplenishmentPlan] getReplenishmentPlanByFilter(opts)

Search replenishmentPlans by filter

Returns the list of replenishmentPlans that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReplenishmentPlanApi()

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
api.getReplenishmentPlanByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReplenishmentPlan]**](ReplenishmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentPlanById"></a>
# **getReplenishmentPlanById**
> ReplenishmentPlan getReplenishmentPlanById(replenishmentPlanId)

Get a replenishmentPlan by id

Returns the replenishmentPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReplenishmentPlanApi()

var replenishmentPlanId = 56; // {Integer} Id of the replenishmentPlan to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getReplenishmentPlanById(replenishmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Integer**| Id of the replenishmentPlan to be returned. | 

### Return type

[**ReplenishmentPlan**](ReplenishmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReplenishmentPlan"></a>
# **updateReplenishmentPlan**
> updateReplenishmentPlan(body)

Update a replenishmentPlan

Updates an existing replenishmentPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReplenishmentPlanApi()

var body = new infoplus.ReplenishmentPlan(); // {ReplenishmentPlan} ReplenishmentPlan to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateReplenishmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReplenishmentPlan**](ReplenishmentPlan.md)| ReplenishmentPlan to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateReplenishmentPlanCustomFields"></a>
# **updateReplenishmentPlanCustomFields**
> updateReplenishmentPlanCustomFields(body)

Update a replenishmentPlan custom fields

Updates an existing replenishmentPlan custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReplenishmentPlanApi()

var body = new infoplus.ReplenishmentPlan(); // {ReplenishmentPlan} ReplenishmentPlan to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateReplenishmentPlanCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReplenishmentPlan**](ReplenishmentPlan.md)| ReplenishmentPlan to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

