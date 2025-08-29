# infoplus.CarrierCompanyCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCarrierCompanyCodeById**](CarrierCompanyCodeApi.md#getCarrierCompanyCodeById) | **GET** /beta/carrierCompanyCode/{carrierCompanyCodeId} | Get a carrierCompanyCode by id
[**getCarrierCompanyCodeBySearchText**](CarrierCompanyCodeApi.md#getCarrierCompanyCodeBySearchText) | **GET** /beta/carrierCompanyCode/search | Search carrierCompanyCodes


<a name="getCarrierCompanyCodeById"></a>
# **getCarrierCompanyCodeById**
> CarrierCompanyCode getCarrierCompanyCodeById(carrierCompanyCodeId)

Get a carrierCompanyCode by id

Returns the carrierCompanyCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CarrierCompanyCodeApi();

var carrierCompanyCodeId = "carrierCompanyCodeId_example"; // String | Id of carrierCompanyCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCarrierCompanyCodeById(carrierCompanyCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrierCompanyCodeId** | **String**| Id of carrierCompanyCode to be returned. | 

### Return type

[**CarrierCompanyCode**](CarrierCompanyCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCarrierCompanyCodeBySearchText"></a>
# **getCarrierCompanyCodeBySearchText**
> [CarrierCompanyCode] getCarrierCompanyCodeBySearchText(opts)

Search carrierCompanyCodes

Returns the list of carrierCompanyCodes that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CarrierCompanyCodeApi();

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
apiInstance.getCarrierCompanyCodeBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[CarrierCompanyCode]**](CarrierCompanyCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

