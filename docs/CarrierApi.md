# infoplus.CarrierApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCarrierById**](CarrierApi.md#getCarrierById) | **GET** /v3.0/carrier/{carrierId} | Get a carrier by id
[**getCarrierBySearchText**](CarrierApi.md#getCarrierBySearchText) | **GET** /v3.0/carrier/search | Search carriers


<a name="getCarrierById"></a>
# **getCarrierById**
> Carrier getCarrierById(carrierId)

Get a carrier by id

Returns the carrier identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CarrierApi();

var carrierId = "carrierId_example"; // String | Id of carrier to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCarrierById(carrierId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrierId** | **String**| Id of carrier to be returned. | 

### Return type

[**Carrier**](Carrier.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCarrierBySearchText"></a>
# **getCarrierBySearchText**
> [Carrier] getCarrierBySearchText(opts)

Search carriers

Returns the list of carriers that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CarrierApi();

var opts = { 
  'searchText': "searchText_example", // String | Search text, used to filter results.
  'page': 56, // Number | Result page number.  Defaults to 1.
  'limit': 56 // Number | Maximum results per page.  Defaults to 20.  Max allowed value is 250.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCarrierBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[Carrier]**](Carrier.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

