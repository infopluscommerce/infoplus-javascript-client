# infoplus.ItemLowStockCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemLowStockCodeBySearchText**](ItemLowStockCodeApi.md#getItemLowStockCodeBySearchText) | **GET** /beta/itemLowStockCode/search | Search itemLowStockCodes
[**getTranslateLowStockCodeById**](ItemLowStockCodeApi.md#getTranslateLowStockCodeById) | **GET** /beta/itemLowStockCode/{itemLowStockCodeId} | Get an itemLowStockCode by id


<a name="getItemLowStockCodeBySearchText"></a>
# **getItemLowStockCodeBySearchText**
> [ItemLowStockCode] getItemLowStockCodeBySearchText(opts)

Search itemLowStockCodes

Returns the list of itemLowStockCodes that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowStockCodeApi()

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
api.getItemLowStockCodeBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[ItemLowStockCode]**](ItemLowStockCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranslateLowStockCodeById"></a>
# **getTranslateLowStockCodeById**
> ItemLowStockCode getTranslateLowStockCodeById(itemLowStockCodeId)

Get an itemLowStockCode by id

Returns the itemLowStockCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLowStockCodeApi()

var itemLowStockCodeId = "itemLowStockCodeId_example"; // {String} Id of itemLowStockCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTranslateLowStockCodeById(itemLowStockCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLowStockCodeId** | **String**| Id of itemLowStockCode to be returned. | 

### Return type

[**ItemLowStockCode**](ItemLowStockCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

