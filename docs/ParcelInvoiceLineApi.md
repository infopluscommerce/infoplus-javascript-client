# infoplus.ParcelInvoiceLineApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addParcelInvoiceLineAudit**](ParcelInvoiceLineApi.md#addParcelInvoiceLineAudit) | **PUT** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/audit/{parcelInvoiceLineAudit} | Add new audit for a parcelInvoiceLine
[**addParcelInvoiceLineTag**](ParcelInvoiceLineApi.md#addParcelInvoiceLineTag) | **PUT** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag/{parcelInvoiceLineTag} | Add new tags for a parcelInvoiceLine.
[**deleteParcelInvoiceLineTag**](ParcelInvoiceLineApi.md#deleteParcelInvoiceLineTag) | **DELETE** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag/{parcelInvoiceLineTag} | Delete a tag for a parcelInvoiceLine.
[**getDuplicateParcelInvoiceLineById**](ParcelInvoiceLineApi.md#getDuplicateParcelInvoiceLineById) | **GET** /beta/parcelInvoiceLine/duplicate/{parcelInvoiceLineId} | Get a duplicated a parcelInvoiceLine by id
[**getParcelInvoiceLineByFilter**](ParcelInvoiceLineApi.md#getParcelInvoiceLineByFilter) | **GET** /beta/parcelInvoiceLine/search | Search parcelInvoiceLines by filter
[**getParcelInvoiceLineById**](ParcelInvoiceLineApi.md#getParcelInvoiceLineById) | **GET** /beta/parcelInvoiceLine/{parcelInvoiceLineId} | Get a parcelInvoiceLine by id
[**getParcelInvoiceLineTags**](ParcelInvoiceLineApi.md#getParcelInvoiceLineTags) | **GET** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag | Get the tags for a parcelInvoiceLine.
[**updateParcelInvoiceLine**](ParcelInvoiceLineApi.md#updateParcelInvoiceLine) | **PUT** /beta/parcelInvoiceLine | Update a parcelInvoiceLine


<a name="addParcelInvoiceLineAudit"></a>
# **addParcelInvoiceLineAudit**
> addParcelInvoiceLineAudit(parcelInvoiceLineId, parcelInvoiceLineAudit)

Add new audit for a parcelInvoiceLine

Adds an audit to an existing parcelInvoiceLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

var parcelInvoiceLineId = 56; // {Integer} Id of the parcelInvoiceLine to add an audit to

var parcelInvoiceLineAudit = "parcelInvoiceLineAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addParcelInvoiceLineAudit(parcelInvoiceLineId, parcelInvoiceLineAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Integer**| Id of the parcelInvoiceLine to add an audit to | 
 **parcelInvoiceLineAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addParcelInvoiceLineTag"></a>
# **addParcelInvoiceLineTag**
> addParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag)

Add new tags for a parcelInvoiceLine.

Adds a tag to an existing parcelInvoiceLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

var parcelInvoiceLineId = 56; // {Integer} Id of the parcelInvoiceLine to add a tag to

var parcelInvoiceLineTag = "parcelInvoiceLineTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Integer**| Id of the parcelInvoiceLine to add a tag to | 
 **parcelInvoiceLineTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteParcelInvoiceLineTag"></a>
# **deleteParcelInvoiceLineTag**
> deleteParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag)

Delete a tag for a parcelInvoiceLine.

Deletes an existing parcelInvoiceLine tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

var parcelInvoiceLineId = 56; // {Integer} Id of the parcelInvoiceLine to remove tag from

var parcelInvoiceLineTag = "parcelInvoiceLineTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Integer**| Id of the parcelInvoiceLine to remove tag from | 
 **parcelInvoiceLineTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateParcelInvoiceLineById"></a>
# **getDuplicateParcelInvoiceLineById**
> ParcelInvoiceLine getDuplicateParcelInvoiceLineById(parcelInvoiceLineId)

Get a duplicated a parcelInvoiceLine by id

Returns a duplicated parcelInvoiceLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

var parcelInvoiceLineId = 56; // {Integer} Id of the parcelInvoiceLine to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateParcelInvoiceLineById(parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Integer**| Id of the parcelInvoiceLine to be duplicated. | 

### Return type

[**ParcelInvoiceLine**](ParcelInvoiceLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceLineByFilter"></a>
# **getParcelInvoiceLineByFilter**
> [ParcelInvoiceLine] getParcelInvoiceLineByFilter(opts)

Search parcelInvoiceLines by filter

Returns the list of parcelInvoiceLines that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

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
api.getParcelInvoiceLineByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ParcelInvoiceLine]**](ParcelInvoiceLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceLineById"></a>
# **getParcelInvoiceLineById**
> ParcelInvoiceLine getParcelInvoiceLineById(parcelInvoiceLineId)

Get a parcelInvoiceLine by id

Returns the parcelInvoiceLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

var parcelInvoiceLineId = 56; // {Integer} Id of the parcelInvoiceLine to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getParcelInvoiceLineById(parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Integer**| Id of the parcelInvoiceLine to be returned. | 

### Return type

[**ParcelInvoiceLine**](ParcelInvoiceLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceLineTags"></a>
# **getParcelInvoiceLineTags**
> getParcelInvoiceLineTags(parcelInvoiceLineId)

Get the tags for a parcelInvoiceLine.

Get all existing parcelInvoiceLine tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

var parcelInvoiceLineId = 56; // {Integer} Id of the parcelInvoiceLine to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getParcelInvoiceLineTags(parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Integer**| Id of the parcelInvoiceLine to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateParcelInvoiceLine"></a>
# **updateParcelInvoiceLine**
> updateParcelInvoiceLine(body)

Update a parcelInvoiceLine

Updates an existing parcelInvoiceLine using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelInvoiceLineApi()

var body = new infoplus.ParcelInvoiceLine(); // {ParcelInvoiceLine} ParcelInvoiceLine to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateParcelInvoiceLine(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelInvoiceLine**](ParcelInvoiceLine.md)| ParcelInvoiceLine to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

