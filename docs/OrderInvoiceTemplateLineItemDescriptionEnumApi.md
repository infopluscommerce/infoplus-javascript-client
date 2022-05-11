# infoplus.OrderInvoiceTemplateLineItemDescriptionEnumApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderInvoiceTemplateLineItemDescriptionEnumById**](OrderInvoiceTemplateLineItemDescriptionEnumApi.md#getOrderInvoiceTemplateLineItemDescriptionEnumById) | **GET** /v3.0/orderInvoiceTemplateLineItemDescriptionEnum/{orderInvoiceTemplateLineItemDescriptionEnumId} | Get an orderInvoiceTemplateLineItemDescriptionEnum by id
[**getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText**](OrderInvoiceTemplateLineItemDescriptionEnumApi.md#getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText) | **GET** /v3.0/orderInvoiceTemplateLineItemDescriptionEnum/search | Search orderInvoiceTemplateLineItemDescriptionEnums


<a name="getOrderInvoiceTemplateLineItemDescriptionEnumById"></a>
# **getOrderInvoiceTemplateLineItemDescriptionEnumById**
> OrderInvoiceTemplateLineItemDescriptionEnum getOrderInvoiceTemplateLineItemDescriptionEnumById(orderInvoiceTemplateLineItemDescriptionEnumId)

Get an orderInvoiceTemplateLineItemDescriptionEnum by id

Returns the orderInvoiceTemplateLineItemDescriptionEnum identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderInvoiceTemplateLineItemDescriptionEnumApi();

var orderInvoiceTemplateLineItemDescriptionEnumId = "orderInvoiceTemplateLineItemDescriptionEnumId_example"; // String | Id of orderInvoiceTemplateLineItemDescriptionEnum to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderInvoiceTemplateLineItemDescriptionEnumById(orderInvoiceTemplateLineItemDescriptionEnumId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderInvoiceTemplateLineItemDescriptionEnumId** | **String**| Id of orderInvoiceTemplateLineItemDescriptionEnum to be returned. | 

### Return type

[**OrderInvoiceTemplateLineItemDescriptionEnum**](OrderInvoiceTemplateLineItemDescriptionEnum.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText"></a>
# **getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText**
> [OrderInvoiceTemplateLineItemDescriptionEnum] getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText(opts)

Search orderInvoiceTemplateLineItemDescriptionEnums

Returns the list of orderInvoiceTemplateLineItemDescriptionEnums that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderInvoiceTemplateLineItemDescriptionEnumApi();

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
apiInstance.getOrderInvoiceTemplateLineItemDescriptionEnumBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[OrderInvoiceTemplateLineItemDescriptionEnum]**](OrderInvoiceTemplateLineItemDescriptionEnum.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

