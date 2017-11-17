# infoplus.ParcelShipmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDuplicateParcelShipmentById**](ParcelShipmentApi.md#getDuplicateParcelShipmentById) | **GET** /v2.0/parcelShipment/duplicate/{parcelShipmentId} | Get a duplicated a parcelShipment by id
[**getParcelShipmentByFilter**](ParcelShipmentApi.md#getParcelShipmentByFilter) | **GET** /v2.0/parcelShipment/search | Search parcelShipments by filter
[**getParcelShipmentById**](ParcelShipmentApi.md#getParcelShipmentById) | **GET** /v2.0/parcelShipment/{parcelShipmentId} | Get a parcelShipment by id
[**updateParcelShipmentCustomFields**](ParcelShipmentApi.md#updateParcelShipmentCustomFields) | **PUT** /v2.0/parcelShipment/customFields | Update a parcelShipment custom fields


<a name="getDuplicateParcelShipmentById"></a>
# **getDuplicateParcelShipmentById**
> ParcelShipment getDuplicateParcelShipmentById(parcelShipmentId)

Get a duplicated a parcelShipment by id

Returns a duplicated parcelShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelShipmentApi()

var parcelShipmentId = 56; // {Integer} Id of the parcelShipment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateParcelShipmentById(parcelShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelShipmentId** | **Integer**| Id of the parcelShipment to be duplicated. | 

### Return type

[**ParcelShipment**](ParcelShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelShipmentByFilter"></a>
# **getParcelShipmentByFilter**
> [ParcelShipment] getParcelShipmentByFilter(opts)

Search parcelShipments by filter

Returns the list of parcelShipments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelShipmentApi()

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
api.getParcelShipmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ParcelShipment]**](ParcelShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelShipmentById"></a>
# **getParcelShipmentById**
> ParcelShipment getParcelShipmentById(parcelShipmentId)

Get a parcelShipment by id

Returns the parcelShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelShipmentApi()

var parcelShipmentId = 56; // {Integer} Id of the parcelShipment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getParcelShipmentById(parcelShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelShipmentId** | **Integer**| Id of the parcelShipment to be returned. | 

### Return type

[**ParcelShipment**](ParcelShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateParcelShipmentCustomFields"></a>
# **updateParcelShipmentCustomFields**
> updateParcelShipmentCustomFields(body)

Update a parcelShipment custom fields

Updates an existing parcelShipment custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ParcelShipmentApi()

var body = new infoplus.ParcelShipment(); // {ParcelShipment} ParcelShipment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateParcelShipmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelShipment**](ParcelShipment.md)| ParcelShipment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

