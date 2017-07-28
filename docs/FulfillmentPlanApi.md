# infoplus.FulfillmentPlanApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFulfillmentPlan**](FulfillmentPlanApi.md#addFulfillmentPlan) | **POST** /beta/fulfillmentPlan | Create a fulfillmentPlan
[**addFulfillmentPlanAudit**](FulfillmentPlanApi.md#addFulfillmentPlanAudit) | **PUT** /beta/fulfillmentPlan/{fulfillmentPlanId}/audit/{fulfillmentPlanAudit} | Add new audit for a fulfillmentPlan
[**addFulfillmentPlanTag**](FulfillmentPlanApi.md#addFulfillmentPlanTag) | **PUT** /beta/fulfillmentPlan/{fulfillmentPlanId}/tag/{fulfillmentPlanTag} | Add new tags for a fulfillmentPlan.
[**deleteFulfillmentPlan**](FulfillmentPlanApi.md#deleteFulfillmentPlan) | **DELETE** /beta/fulfillmentPlan/{fulfillmentPlanId} | Delete a fulfillmentPlan
[**deleteFulfillmentPlanTag**](FulfillmentPlanApi.md#deleteFulfillmentPlanTag) | **DELETE** /beta/fulfillmentPlan/{fulfillmentPlanId}/tag/{fulfillmentPlanTag} | Delete a tag for a fulfillmentPlan.
[**getDuplicateFulfillmentPlanById**](FulfillmentPlanApi.md#getDuplicateFulfillmentPlanById) | **GET** /beta/fulfillmentPlan/duplicate/{fulfillmentPlanId} | Get a duplicated a fulfillmentPlan by id
[**getFulfillmentPlanByFilter**](FulfillmentPlanApi.md#getFulfillmentPlanByFilter) | **GET** /beta/fulfillmentPlan/search | Search fulfillmentPlans by filter
[**getFulfillmentPlanById**](FulfillmentPlanApi.md#getFulfillmentPlanById) | **GET** /beta/fulfillmentPlan/{fulfillmentPlanId} | Get a fulfillmentPlan by id
[**getFulfillmentPlanTags**](FulfillmentPlanApi.md#getFulfillmentPlanTags) | **GET** /beta/fulfillmentPlan/{fulfillmentPlanId}/tag | Get the tags for a fulfillmentPlan.
[**updateFulfillmentPlan**](FulfillmentPlanApi.md#updateFulfillmentPlan) | **PUT** /beta/fulfillmentPlan | Update a fulfillmentPlan
[**updateFulfillmentPlanCustomFields**](FulfillmentPlanApi.md#updateFulfillmentPlanCustomFields) | **PUT** /beta/fulfillmentPlan/customFields | Update a fulfillmentPlan custom fields


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

<a name="addFulfillmentPlanAudit"></a>
# **addFulfillmentPlanAudit**
> addFulfillmentPlanAudit(fulfillmentPlanId, fulfillmentPlanAudit)

Add new audit for a fulfillmentPlan

Adds an audit to an existing fulfillmentPlan.

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

var fulfillmentPlanId = 56; // {Integer} Id of the fulfillmentPlan to add an audit to

var fulfillmentPlanAudit = "fulfillmentPlanAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addFulfillmentPlanAudit(fulfillmentPlanId, fulfillmentPlanAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentPlanId** | **Integer**| Id of the fulfillmentPlan to add an audit to | 
 **fulfillmentPlanAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFulfillmentPlanTag"></a>
# **addFulfillmentPlanTag**
> addFulfillmentPlanTag(fulfillmentPlanId, fulfillmentPlanTag)

Add new tags for a fulfillmentPlan.

Adds a tag to an existing fulfillmentPlan.

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

var fulfillmentPlanId = 56; // {Integer} Id of the fulfillmentPlan to add a tag to

var fulfillmentPlanTag = "fulfillmentPlanTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addFulfillmentPlanTag(fulfillmentPlanId, fulfillmentPlanTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentPlanId** | **Integer**| Id of the fulfillmentPlan to add a tag to | 
 **fulfillmentPlanTag** | **String**| The tag to add | 

### Return type

null (empty response body)

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

<a name="deleteFulfillmentPlanTag"></a>
# **deleteFulfillmentPlanTag**
> deleteFulfillmentPlanTag(fulfillmentPlanId, fulfillmentPlanTag)

Delete a tag for a fulfillmentPlan.

Deletes an existing fulfillmentPlan tag using the specified data.

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

var fulfillmentPlanId = 56; // {Integer} Id of the fulfillmentPlan to remove tag from

var fulfillmentPlanTag = "fulfillmentPlanTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteFulfillmentPlanTag(fulfillmentPlanId, fulfillmentPlanTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentPlanId** | **Integer**| Id of the fulfillmentPlan to remove tag from | 
 **fulfillmentPlanTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateFulfillmentPlanById"></a>
# **getDuplicateFulfillmentPlanById**
> FulfillmentPlan getDuplicateFulfillmentPlanById(fulfillmentPlanId)

Get a duplicated a fulfillmentPlan by id

Returns a duplicated fulfillmentPlan identified by the specified id.

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

var fulfillmentPlanId = 56; // {Integer} Id of the fulfillmentPlan to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateFulfillmentPlanById(fulfillmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentPlanId** | **Integer**| Id of the fulfillmentPlan to be duplicated. | 

### Return type

[**FulfillmentPlan**](FulfillmentPlan.md)

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

<a name="getFulfillmentPlanTags"></a>
# **getFulfillmentPlanTags**
> getFulfillmentPlanTags(fulfillmentPlanId)

Get the tags for a fulfillmentPlan.

Get all existing fulfillmentPlan tags.

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

var fulfillmentPlanId = 56; // {Integer} Id of the fulfillmentPlan to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getFulfillmentPlanTags(fulfillmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentPlanId** | **Integer**| Id of the fulfillmentPlan to get tags for | 

### Return type

null (empty response body)

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

<a name="updateFulfillmentPlanCustomFields"></a>
# **updateFulfillmentPlanCustomFields**
> updateFulfillmentPlanCustomFields(body)

Update a fulfillmentPlan custom fields

Updates an existing fulfillmentPlan custom fields using the specified data.

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
api.updateFulfillmentPlanCustomFields(body, callback);
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

