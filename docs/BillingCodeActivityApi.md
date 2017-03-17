# infoplus.BillingCodeActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillingCodeActivity**](BillingCodeActivityApi.md#addBillingCodeActivity) | **POST** /beta/billingCodeActivity | Create a billingCodeActivity
[**addBillingCodeActivityAudit**](BillingCodeActivityApi.md#addBillingCodeActivityAudit) | **PUT** /beta/billingCodeActivity/{billingCodeActivityId}/audit/{billingCodeActivityAudit} | Add new audit for a billingCodeActivity
[**addBillingCodeActivityTag**](BillingCodeActivityApi.md#addBillingCodeActivityTag) | **PUT** /beta/billingCodeActivity/{billingCodeActivityId}/tag/{billingCodeActivityTag} | Add new tags for a billingCodeActivity.
[**deleteBillingCodeActivity**](BillingCodeActivityApi.md#deleteBillingCodeActivity) | **DELETE** /beta/billingCodeActivity/{billingCodeActivityId} | Delete a billingCodeActivity
[**deleteBillingCodeActivityTag**](BillingCodeActivityApi.md#deleteBillingCodeActivityTag) | **DELETE** /beta/billingCodeActivity/{billingCodeActivityId}/tag/{billingCodeActivityTag} | Delete a tag for a billingCodeActivity.
[**getBillingCodeActivityByFilter**](BillingCodeActivityApi.md#getBillingCodeActivityByFilter) | **GET** /beta/billingCodeActivity/search | Search billingCodeActivitys by filter
[**getBillingCodeActivityById**](BillingCodeActivityApi.md#getBillingCodeActivityById) | **GET** /beta/billingCodeActivity/{billingCodeActivityId} | Get a billingCodeActivity by id
[**getBillingCodeActivityTags**](BillingCodeActivityApi.md#getBillingCodeActivityTags) | **GET** /beta/billingCodeActivity/{billingCodeActivityId}/tag | Get the tags for a billingCodeActivity.
[**getDuplicateBillingCodeActivityById**](BillingCodeActivityApi.md#getDuplicateBillingCodeActivityById) | **GET** /beta/billingCodeActivity/duplicate/{billingCodeActivityId} | Get a duplicated a billingCodeActivity by id
[**updateBillingCodeActivity**](BillingCodeActivityApi.md#updateBillingCodeActivity) | **PUT** /beta/billingCodeActivity | Update a billingCodeActivity


<a name="addBillingCodeActivity"></a>
# **addBillingCodeActivity**
> BillingCodeActivity addBillingCodeActivity(body)

Create a billingCodeActivity

Inserts a new billingCodeActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var body = new infoplus.BillingCodeActivity(); // {BillingCodeActivity} BillingCodeActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addBillingCodeActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeActivity**](BillingCodeActivity.md)| BillingCodeActivity to be inserted. | 

### Return type

[**BillingCodeActivity**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillingCodeActivityAudit"></a>
# **addBillingCodeActivityAudit**
> addBillingCodeActivityAudit(billingCodeActivityId, billingCodeActivityAudit)

Add new audit for a billingCodeActivity

Adds an audit to an existing billingCodeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var billingCodeActivityId = 56; // {Integer} Id of the billingCodeActivity to add an audit to

var billingCodeActivityAudit = "billingCodeActivityAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addBillingCodeActivityAudit(billingCodeActivityId, billingCodeActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Integer**| Id of the billingCodeActivity to add an audit to | 
 **billingCodeActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillingCodeActivityTag"></a>
# **addBillingCodeActivityTag**
> addBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag)

Add new tags for a billingCodeActivity.

Adds a tag to an existing billingCodeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var billingCodeActivityId = 56; // {Integer} Id of the billingCodeActivity to add a tag to

var billingCodeActivityTag = "billingCodeActivityTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Integer**| Id of the billingCodeActivity to add a tag to | 
 **billingCodeActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillingCodeActivity"></a>
# **deleteBillingCodeActivity**
> deleteBillingCodeActivity(billingCodeActivityId)

Delete a billingCodeActivity

Deletes the billingCodeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var billingCodeActivityId = 56; // {Integer} Id of the billingCodeActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteBillingCodeActivity(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Integer**| Id of the billingCodeActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBillingCodeActivityTag"></a>
# **deleteBillingCodeActivityTag**
> deleteBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag)

Delete a tag for a billingCodeActivity.

Deletes an existing billingCodeActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var billingCodeActivityId = 56; // {Integer} Id of the billingCodeActivity to remove tag from

var billingCodeActivityTag = "billingCodeActivityTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Integer**| Id of the billingCodeActivity to remove tag from | 
 **billingCodeActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeActivityByFilter"></a>
# **getBillingCodeActivityByFilter**
> [BillingCodeActivity] getBillingCodeActivityByFilter(opts)

Search billingCodeActivitys by filter

Returns the list of billingCodeActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

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
api.getBillingCodeActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[BillingCodeActivity]**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeActivityById"></a>
# **getBillingCodeActivityById**
> BillingCodeActivity getBillingCodeActivityById(billingCodeActivityId)

Get a billingCodeActivity by id

Returns the billingCodeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var billingCodeActivityId = 56; // {Integer} Id of the billingCodeActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getBillingCodeActivityById(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Integer**| Id of the billingCodeActivity to be returned. | 

### Return type

[**BillingCodeActivity**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeActivityTags"></a>
# **getBillingCodeActivityTags**
> getBillingCodeActivityTags(billingCodeActivityId)

Get the tags for a billingCodeActivity.

Get all existing billingCodeActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var billingCodeActivityId = 56; // {Integer} Id of the billingCodeActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getBillingCodeActivityTags(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Integer**| Id of the billingCodeActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateBillingCodeActivityById"></a>
# **getDuplicateBillingCodeActivityById**
> BillingCodeActivity getDuplicateBillingCodeActivityById(billingCodeActivityId)

Get a duplicated a billingCodeActivity by id

Returns a duplicated billingCodeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var billingCodeActivityId = 56; // {Integer} Id of the billingCodeActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateBillingCodeActivityById(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Integer**| Id of the billingCodeActivity to be duplicated. | 

### Return type

[**BillingCodeActivity**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBillingCodeActivity"></a>
# **updateBillingCodeActivity**
> updateBillingCodeActivity(body)

Update a billingCodeActivity

Updates an existing billingCodeActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeActivityApi()

var body = new infoplus.BillingCodeActivity(); // {BillingCodeActivity} BillingCodeActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateBillingCodeActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeActivity**](BillingCodeActivity.md)| BillingCodeActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

