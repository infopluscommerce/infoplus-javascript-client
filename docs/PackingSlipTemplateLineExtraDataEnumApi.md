# infoplus.PackingSlipTemplateLineExtraDataEnumApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPackingSlipTemplateLineExtraDataEnumById**](PackingSlipTemplateLineExtraDataEnumApi.md#getPackingSlipTemplateLineExtraDataEnumById) | **GET** /beta/packingSlipTemplateLineExtraDataEnum/{packingSlipTemplateLineExtraDataEnumId} | Get a packingSlipTemplateLineExtraDataEnum by id
[**getPackingSlipTemplateLineExtraDataEnumBySearchText**](PackingSlipTemplateLineExtraDataEnumApi.md#getPackingSlipTemplateLineExtraDataEnumBySearchText) | **GET** /beta/packingSlipTemplateLineExtraDataEnum/search | Search packingSlipTemplateLineExtraDataEnums


<a name="getPackingSlipTemplateLineExtraDataEnumById"></a>
# **getPackingSlipTemplateLineExtraDataEnumById**
> PackingSlipTemplateLineExtraDataEnum getPackingSlipTemplateLineExtraDataEnumById(packingSlipTemplateLineExtraDataEnumId)

Get a packingSlipTemplateLineExtraDataEnum by id

Returns the packingSlipTemplateLineExtraDataEnum identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingSlipTemplateLineExtraDataEnumApi();

var packingSlipTemplateLineExtraDataEnumId = "packingSlipTemplateLineExtraDataEnumId_example"; // String | Id of packingSlipTemplateLineExtraDataEnum to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPackingSlipTemplateLineExtraDataEnumById(packingSlipTemplateLineExtraDataEnumId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingSlipTemplateLineExtraDataEnumId** | **String**| Id of packingSlipTemplateLineExtraDataEnum to be returned. | 

### Return type

[**PackingSlipTemplateLineExtraDataEnum**](PackingSlipTemplateLineExtraDataEnum.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingSlipTemplateLineExtraDataEnumBySearchText"></a>
# **getPackingSlipTemplateLineExtraDataEnumBySearchText**
> [PackingSlipTemplateLineExtraDataEnum] getPackingSlipTemplateLineExtraDataEnumBySearchText(opts)

Search packingSlipTemplateLineExtraDataEnums

Returns the list of packingSlipTemplateLineExtraDataEnums that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingSlipTemplateLineExtraDataEnumApi();

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
apiInstance.getPackingSlipTemplateLineExtraDataEnumBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[PackingSlipTemplateLineExtraDataEnum]**](PackingSlipTemplateLineExtraDataEnum.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

