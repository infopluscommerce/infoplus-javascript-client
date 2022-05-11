# infoplus.OrderLoadProgramApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderLoadProgramBySearchText**](OrderLoadProgramApi.md#getOrderLoadProgramBySearchText) | **GET** /v3.0/orderLoadProgram/search | Search orderLoadPrograms
[**getReqLoadProgramById**](OrderLoadProgramApi.md#getReqLoadProgramById) | **GET** /v3.0/orderLoadProgram/{orderLoadProgramId} | Get an orderLoadProgram by id


<a name="getOrderLoadProgramBySearchText"></a>
# **getOrderLoadProgramBySearchText**
> [OrderLoadProgram] getOrderLoadProgramBySearchText(opts)

Search orderLoadPrograms

Returns the list of orderLoadPrograms that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLoadProgramApi();

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
apiInstance.getOrderLoadProgramBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[OrderLoadProgram]**](OrderLoadProgram.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReqLoadProgramById"></a>
# **getReqLoadProgramById**
> OrderLoadProgram getReqLoadProgramById(orderLoadProgramId)

Get an orderLoadProgram by id

Returns the orderLoadProgram identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderLoadProgramApi();

var orderLoadProgramId = "orderLoadProgramId_example"; // String | Id of orderLoadProgram to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReqLoadProgramById(orderLoadProgramId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLoadProgramId** | **String**| Id of orderLoadProgram to be returned. | 

### Return type

[**OrderLoadProgram**](OrderLoadProgram.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

