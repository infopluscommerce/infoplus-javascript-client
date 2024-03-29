# infoplus.UspsHazmatTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUSPSHazmatTypeById**](UspsHazmatTypeApi.md#getUSPSHazmatTypeById) | **GET** /beta/uspsHazmatType/{uspsHazmatTypeId} | Get an uspsHazmatType by id
[**getUspsHazmatTypeBySearchText**](UspsHazmatTypeApi.md#getUspsHazmatTypeBySearchText) | **GET** /beta/uspsHazmatType/search | Search uspsHazmatTypes


<a name="getUSPSHazmatTypeById"></a>
# **getUSPSHazmatTypeById**
> UspsHazmatType getUSPSHazmatTypeById(uspsHazmatTypeId)

Get an uspsHazmatType by id

Returns the uspsHazmatType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.UspsHazmatTypeApi();

var uspsHazmatTypeId = "uspsHazmatTypeId_example"; // String | Id of uspsHazmatType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUSPSHazmatTypeById(uspsHazmatTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uspsHazmatTypeId** | **String**| Id of uspsHazmatType to be returned. | 

### Return type

[**UspsHazmatType**](UspsHazmatType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUspsHazmatTypeBySearchText"></a>
# **getUspsHazmatTypeBySearchText**
> [UspsHazmatType] getUspsHazmatTypeBySearchText(opts)

Search uspsHazmatTypes

Returns the list of uspsHazmatTypes that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.UspsHazmatTypeApi();

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
apiInstance.getUspsHazmatTypeBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[UspsHazmatType]**](UspsHazmatType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

