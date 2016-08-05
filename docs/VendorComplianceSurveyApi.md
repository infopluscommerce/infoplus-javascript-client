# infoplus.VendorComplianceSurveyApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVendorComplianceSurvey**](VendorComplianceSurveyApi.md#addVendorComplianceSurvey) | **POST** /beta/vendorComplianceSurvey | Create a vendorComplianceSurvey
[**deleteVendorComplianceSurvey**](VendorComplianceSurveyApi.md#deleteVendorComplianceSurvey) | **DELETE** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId} | Delete a vendorComplianceSurvey
[**getVendorComplianceSurveyByFilter**](VendorComplianceSurveyApi.md#getVendorComplianceSurveyByFilter) | **GET** /beta/vendorComplianceSurvey/search | Search vendorComplianceSurveys by filter
[**getVendorComplianceSurveyById**](VendorComplianceSurveyApi.md#getVendorComplianceSurveyById) | **GET** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId} | Get a vendorComplianceSurvey by id
[**updateVendorComplianceSurvey**](VendorComplianceSurveyApi.md#updateVendorComplianceSurvey) | **PUT** /beta/vendorComplianceSurvey | Update a vendorComplianceSurvey
[**updateVendorComplianceSurveyCustomFields**](VendorComplianceSurveyApi.md#updateVendorComplianceSurveyCustomFields) | **PUT** /beta/vendorComplianceSurvey/customFields | Update a vendorComplianceSurvey custom fields


<a name="addVendorComplianceSurvey"></a>
# **addVendorComplianceSurvey**
> VendorComplianceSurvey addVendorComplianceSurvey(body)

Create a vendorComplianceSurvey

Inserts a new vendorComplianceSurvey using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorComplianceSurveyApi()

var body = new infoplus.VendorComplianceSurvey(); // {VendorComplianceSurvey} VendorComplianceSurvey to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addVendorComplianceSurvey(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorComplianceSurvey**](VendorComplianceSurvey.md)| VendorComplianceSurvey to be inserted. | 

### Return type

[**VendorComplianceSurvey**](VendorComplianceSurvey.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVendorComplianceSurvey"></a>
# **deleteVendorComplianceSurvey**
> deleteVendorComplianceSurvey(vendorComplianceSurveyId)

Delete a vendorComplianceSurvey

Deletes the vendorComplianceSurvey identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorComplianceSurveyApi()

var vendorComplianceSurveyId = 56; // {Integer} Id of the vendorComplianceSurvey to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteVendorComplianceSurvey(vendorComplianceSurveyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Integer**| Id of the vendorComplianceSurvey to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorComplianceSurveyByFilter"></a>
# **getVendorComplianceSurveyByFilter**
> [VendorComplianceSurvey] getVendorComplianceSurveyByFilter(opts)

Search vendorComplianceSurveys by filter

Returns the list of vendorComplianceSurveys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorComplianceSurveyApi()

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
api.getVendorComplianceSurveyByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[VendorComplianceSurvey]**](VendorComplianceSurvey.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorComplianceSurveyById"></a>
# **getVendorComplianceSurveyById**
> VendorComplianceSurvey getVendorComplianceSurveyById(vendorComplianceSurveyId)

Get a vendorComplianceSurvey by id

Returns the vendorComplianceSurvey identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorComplianceSurveyApi()

var vendorComplianceSurveyId = 56; // {Integer} Id of the vendorComplianceSurvey to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getVendorComplianceSurveyById(vendorComplianceSurveyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Integer**| Id of the vendorComplianceSurvey to be returned. | 

### Return type

[**VendorComplianceSurvey**](VendorComplianceSurvey.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVendorComplianceSurvey"></a>
# **updateVendorComplianceSurvey**
> updateVendorComplianceSurvey(body)

Update a vendorComplianceSurvey

Updates an existing vendorComplianceSurvey using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorComplianceSurveyApi()

var body = new infoplus.VendorComplianceSurvey(); // {VendorComplianceSurvey} VendorComplianceSurvey to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateVendorComplianceSurvey(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorComplianceSurvey**](VendorComplianceSurvey.md)| VendorComplianceSurvey to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVendorComplianceSurveyCustomFields"></a>
# **updateVendorComplianceSurveyCustomFields**
> updateVendorComplianceSurveyCustomFields(body)

Update a vendorComplianceSurvey custom fields

Updates an existing vendorComplianceSurvey custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorComplianceSurveyApi()

var body = new infoplus.VendorComplianceSurvey(); // {VendorComplianceSurvey} VendorComplianceSurvey to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateVendorComplianceSurveyCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorComplianceSurvey**](VendorComplianceSurvey.md)| VendorComplianceSurvey to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

