# infoplus.ReceivingWorksheetApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReceivingWorksheet**](ReceivingWorksheetApi.md#addReceivingWorksheet) | **POST** /beta/receivingWorksheet | Create a receivingWorksheet
[**deleteReceivingWorksheet**](ReceivingWorksheetApi.md#deleteReceivingWorksheet) | **DELETE** /beta/receivingWorksheet/{receivingWorksheetId} | Delete a receivingWorksheet
[**getReceivingWorksheetByFilter**](ReceivingWorksheetApi.md#getReceivingWorksheetByFilter) | **GET** /beta/receivingWorksheet/search | Search receivingWorksheets by filter
[**getReceivingWorksheetById**](ReceivingWorksheetApi.md#getReceivingWorksheetById) | **GET** /beta/receivingWorksheet/{receivingWorksheetId} | Get a receivingWorksheet by id
[**updateReceivingWorksheet**](ReceivingWorksheetApi.md#updateReceivingWorksheet) | **PUT** /beta/receivingWorksheet | Update a receivingWorksheet
[**updateReceivingWorksheetCustomFields**](ReceivingWorksheetApi.md#updateReceivingWorksheetCustomFields) | **PUT** /beta/receivingWorksheet/customFields | Update a receivingWorksheet custom fields


<a name="addReceivingWorksheet"></a>
# **addReceivingWorksheet**
> ReceivingWorksheet addReceivingWorksheet(body)

Create a receivingWorksheet

Inserts a new receivingWorksheet using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReceivingWorksheetApi()

var body = new infoplus.ReceivingWorksheet(); // {ReceivingWorksheet} ReceivingWorksheet to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addReceivingWorksheet(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReceivingWorksheet**](ReceivingWorksheet.md)| ReceivingWorksheet to be inserted. | 

### Return type

[**ReceivingWorksheet**](ReceivingWorksheet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReceivingWorksheet"></a>
# **deleteReceivingWorksheet**
> deleteReceivingWorksheet(receivingWorksheetId)

Delete a receivingWorksheet

Deletes the receivingWorksheet identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReceivingWorksheetApi()

var receivingWorksheetId = 56; // {Integer} Id of the receivingWorksheet to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteReceivingWorksheet(receivingWorksheetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingWorksheetId** | **Integer**| Id of the receivingWorksheet to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReceivingWorksheetByFilter"></a>
# **getReceivingWorksheetByFilter**
> [ReceivingWorksheet] getReceivingWorksheetByFilter(opts)

Search receivingWorksheets by filter

Returns the list of receivingWorksheets that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReceivingWorksheetApi()

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
api.getReceivingWorksheetByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReceivingWorksheet]**](ReceivingWorksheet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReceivingWorksheetById"></a>
# **getReceivingWorksheetById**
> ReceivingWorksheet getReceivingWorksheetById(receivingWorksheetId)

Get a receivingWorksheet by id

Returns the receivingWorksheet identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReceivingWorksheetApi()

var receivingWorksheetId = 56; // {Integer} Id of the receivingWorksheet to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getReceivingWorksheetById(receivingWorksheetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingWorksheetId** | **Integer**| Id of the receivingWorksheet to be returned. | 

### Return type

[**ReceivingWorksheet**](ReceivingWorksheet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReceivingWorksheet"></a>
# **updateReceivingWorksheet**
> updateReceivingWorksheet(body)

Update a receivingWorksheet

Updates an existing receivingWorksheet using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReceivingWorksheetApi()

var body = new infoplus.ReceivingWorksheet(); // {ReceivingWorksheet} ReceivingWorksheet to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateReceivingWorksheet(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReceivingWorksheet**](ReceivingWorksheet.md)| ReceivingWorksheet to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateReceivingWorksheetCustomFields"></a>
# **updateReceivingWorksheetCustomFields**
> updateReceivingWorksheetCustomFields(body)

Update a receivingWorksheet custom fields

Updates an existing receivingWorksheet custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ReceivingWorksheetApi()

var body = new infoplus.ReceivingWorksheet(); // {ReceivingWorksheet} ReceivingWorksheet to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateReceivingWorksheetCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReceivingWorksheet**](ReceivingWorksheet.md)| ReceivingWorksheet to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

