# infoplus.BillingCodeTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillingCodeType**](BillingCodeTypeApi.md#addBillingCodeType) | **POST** /beta/billingCodeType | Create a billingCodeType
[**deleteBillingCodeType**](BillingCodeTypeApi.md#deleteBillingCodeType) | **DELETE** /beta/billingCodeType/{billingCodeTypeId} | Delete a billingCodeType
[**getBillingCodeTypeByFilter**](BillingCodeTypeApi.md#getBillingCodeTypeByFilter) | **GET** /beta/billingCodeType/search | Search billingCodeTypes by filter
[**getBillingCodeTypeById**](BillingCodeTypeApi.md#getBillingCodeTypeById) | **GET** /beta/billingCodeType/{billingCodeTypeId} | Get a billingCodeType by id
[**updateBillingCodeType**](BillingCodeTypeApi.md#updateBillingCodeType) | **PUT** /beta/billingCodeType | Update a billingCodeType
[**updateBillingCodeTypeCustomFields**](BillingCodeTypeApi.md#updateBillingCodeTypeCustomFields) | **PUT** /beta/billingCodeType/customFields | Update a billingCodeType custom fields


<a name="addBillingCodeType"></a>
# **addBillingCodeType**
> BillingCodeType addBillingCodeType(body)

Create a billingCodeType

Inserts a new billingCodeType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeTypeApi()

var body = new infoplus.BillingCodeType(); // {BillingCodeType} BillingCodeType to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addBillingCodeType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeType**](BillingCodeType.md)| BillingCodeType to be inserted. | 

### Return type

[**BillingCodeType**](BillingCodeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillingCodeType"></a>
# **deleteBillingCodeType**
> deleteBillingCodeType(billingCodeTypeId)

Delete a billingCodeType

Deletes the billingCodeType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeTypeApi()

var billingCodeTypeId = 56; // {Integer} Id of the billingCodeType to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteBillingCodeType(billingCodeTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Integer**| Id of the billingCodeType to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeTypeByFilter"></a>
# **getBillingCodeTypeByFilter**
> [BillingCodeType] getBillingCodeTypeByFilter(opts)

Search billingCodeTypes by filter

Returns the list of billingCodeTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeTypeApi()

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
api.getBillingCodeTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[BillingCodeType]**](BillingCodeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeTypeById"></a>
# **getBillingCodeTypeById**
> BillingCodeType getBillingCodeTypeById(billingCodeTypeId)

Get a billingCodeType by id

Returns the billingCodeType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeTypeApi()

var billingCodeTypeId = 56; // {Integer} Id of the billingCodeType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getBillingCodeTypeById(billingCodeTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Integer**| Id of the billingCodeType to be returned. | 

### Return type

[**BillingCodeType**](BillingCodeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBillingCodeType"></a>
# **updateBillingCodeType**
> updateBillingCodeType(body)

Update a billingCodeType

Updates an existing billingCodeType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeTypeApi()

var body = new infoplus.BillingCodeType(); // {BillingCodeType} BillingCodeType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateBillingCodeType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeType**](BillingCodeType.md)| BillingCodeType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBillingCodeTypeCustomFields"></a>
# **updateBillingCodeTypeCustomFields**
> updateBillingCodeTypeCustomFields(body)

Update a billingCodeType custom fields

Updates an existing billingCodeType custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.BillingCodeTypeApi()

var body = new infoplus.BillingCodeType(); // {BillingCodeType} BillingCodeType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateBillingCodeTypeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeType**](BillingCodeType.md)| BillingCodeType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

