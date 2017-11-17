# infoplus.ParcelAccountApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDuplicateParcelAccountById**](ParcelAccountApi.md#getDuplicateParcelAccountById) | **GET** /v2.0/parcelAccount/duplicate/{parcelAccountId} | Get a duplicated a parcelAccount by id
[**getParcelAccountByFilter**](ParcelAccountApi.md#getParcelAccountByFilter) | **GET** /v2.0/parcelAccount/search | Search parcelAccounts by filter
[**getParcelAccountById**](ParcelAccountApi.md#getParcelAccountById) | **GET** /v2.0/parcelAccount/{parcelAccountId} | Get a parcelAccount by id
[**updateParcelAccountCustomFields**](ParcelAccountApi.md#updateParcelAccountCustomFields) | **PUT** /v2.0/parcelAccount/customFields | Update a parcelAccount custom fields


<a name="getDuplicateParcelAccountById"></a>
# **getDuplicateParcelAccountById**
> ParcelAccount getDuplicateParcelAccountById(parcelAccountId)

Get a duplicated a parcelAccount by id

Returns a duplicated parcelAccount identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelAccountApi()

var parcelAccountId = 56; // {Integer} Id of the parcelAccount to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateParcelAccountById(parcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Integer**| Id of the parcelAccount to be duplicated. | 

### Return type

[**ParcelAccount**](ParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelAccountByFilter"></a>
# **getParcelAccountByFilter**
> [ParcelAccount] getParcelAccountByFilter(opts)

Search parcelAccounts by filter

Returns the list of parcelAccounts that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelAccountApi()

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
api.getParcelAccountByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ParcelAccount]**](ParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelAccountById"></a>
# **getParcelAccountById**
> ParcelAccount getParcelAccountById(parcelAccountId)

Get a parcelAccount by id

Returns the parcelAccount identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelAccountApi()

var parcelAccountId = 56; // {Integer} Id of the parcelAccount to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getParcelAccountById(parcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Integer**| Id of the parcelAccount to be returned. | 

### Return type

[**ParcelAccount**](ParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateParcelAccountCustomFields"></a>
# **updateParcelAccountCustomFields**
> updateParcelAccountCustomFields(body)

Update a parcelAccount custom fields

Updates an existing parcelAccount custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelAccountApi()

var body = new infoplus.ParcelAccount(); // {ParcelAccount} ParcelAccount to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateParcelAccountCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelAccount**](ParcelAccount.md)| ParcelAccount to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

