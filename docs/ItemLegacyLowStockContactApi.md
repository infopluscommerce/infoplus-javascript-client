# infoplus.ItemLegacyLowStockContactApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemLegacyLowStockContactBySearchText**](ItemLegacyLowStockContactApi.md#getItemLegacyLowStockContactBySearchText) | **GET** /v1.0/itemLegacyLowStockContact/search | Search itemLegacyLowStockContacts
[**getTranslateLowStockContactById**](ItemLegacyLowStockContactApi.md#getTranslateLowStockContactById) | **GET** /v1.0/itemLegacyLowStockContact/{itemLegacyLowStockContactId} | Get an itemLegacyLowStockContact by id


<a name="getItemLegacyLowStockContactBySearchText"></a>
# **getItemLegacyLowStockContactBySearchText**
> [ItemLegacyLowStockContact] getItemLegacyLowStockContactBySearchText(opts)

Search itemLegacyLowStockContacts

Returns the list of itemLegacyLowStockContacts that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLegacyLowStockContactApi()

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
api.getItemLegacyLowStockContactBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[ItemLegacyLowStockContact]**](ItemLegacyLowStockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranslateLowStockContactById"></a>
# **getTranslateLowStockContactById**
> ItemLegacyLowStockContact getTranslateLowStockContactById(itemLegacyLowStockContactId)

Get an itemLegacyLowStockContact by id

Returns the itemLegacyLowStockContact identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemLegacyLowStockContactApi()

var itemLegacyLowStockContactId = "itemLegacyLowStockContactId_example"; // {String} Id of itemLegacyLowStockContact to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTranslateLowStockContactById(itemLegacyLowStockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemLegacyLowStockContactId** | **String**| Id of itemLegacyLowStockContact to be returned. | 

### Return type

[**ItemLegacyLowStockContact**](ItemLegacyLowStockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

