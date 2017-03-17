# infoplus.PackingSlipTemplateLineItemDescriptionEnumApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPackingSlipTemplateLineItemDescriptionEnumById**](PackingSlipTemplateLineItemDescriptionEnumApi.md#getPackingSlipTemplateLineItemDescriptionEnumById) | **GET** /beta/packingSlipTemplateLineItemDescriptionEnum/{packingSlipTemplateLineItemDescriptionEnumId} | Get a packingSlipTemplateLineItemDescriptionEnum by id
[**getPackingSlipTemplateLineItemDescriptionEnumBySearchText**](PackingSlipTemplateLineItemDescriptionEnumApi.md#getPackingSlipTemplateLineItemDescriptionEnumBySearchText) | **GET** /beta/packingSlipTemplateLineItemDescriptionEnum/search | Search packingSlipTemplateLineItemDescriptionEnums


<a name="getPackingSlipTemplateLineItemDescriptionEnumById"></a>
# **getPackingSlipTemplateLineItemDescriptionEnumById**
> PackingSlipTemplateLineItemDescriptionEnum getPackingSlipTemplateLineItemDescriptionEnumById(packingSlipTemplateLineItemDescriptionEnumId)

Get a packingSlipTemplateLineItemDescriptionEnum by id

Returns the packingSlipTemplateLineItemDescriptionEnum identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PackingSlipTemplateLineItemDescriptionEnumApi()

var packingSlipTemplateLineItemDescriptionEnumId = "packingSlipTemplateLineItemDescriptionEnumId_example"; // {String} Id of packingSlipTemplateLineItemDescriptionEnum to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPackingSlipTemplateLineItemDescriptionEnumById(packingSlipTemplateLineItemDescriptionEnumId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingSlipTemplateLineItemDescriptionEnumId** | **String**| Id of packingSlipTemplateLineItemDescriptionEnum to be returned. | 

### Return type

[**PackingSlipTemplateLineItemDescriptionEnum**](PackingSlipTemplateLineItemDescriptionEnum.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingSlipTemplateLineItemDescriptionEnumBySearchText"></a>
# **getPackingSlipTemplateLineItemDescriptionEnumBySearchText**
> [PackingSlipTemplateLineItemDescriptionEnum] getPackingSlipTemplateLineItemDescriptionEnumBySearchText(opts)

Search packingSlipTemplateLineItemDescriptionEnums

Returns the list of packingSlipTemplateLineItemDescriptionEnums that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PackingSlipTemplateLineItemDescriptionEnumApi()

var opts = { 
  'searchText': "searchText_example", // {String} Search text, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56 // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPackingSlipTemplateLineItemDescriptionEnumBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[PackingSlipTemplateLineItemDescriptionEnum]**](PackingSlipTemplateLineItemDescriptionEnum.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

