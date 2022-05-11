# infoplus.FulfillmentProcessPickBatchGroupApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFulfillmentProcessGroupPicksByById**](FulfillmentProcessPickBatchGroupApi.md#getFulfillmentProcessGroupPicksByById) | **GET** /v3.0/fulfillmentProcessPickBatchGroup/{fulfillmentProcessPickBatchGroupId} | Get a fulfillmentProcessPickBatchGroup by id
[**getFulfillmentProcessPickBatchGroupBySearchText**](FulfillmentProcessPickBatchGroupApi.md#getFulfillmentProcessPickBatchGroupBySearchText) | **GET** /v3.0/fulfillmentProcessPickBatchGroup/search | Search fulfillmentProcessPickBatchGroups


<a name="getFulfillmentProcessGroupPicksByById"></a>
# **getFulfillmentProcessGroupPicksByById**
> FulfillmentProcessPickBatchGroup getFulfillmentProcessGroupPicksByById(fulfillmentProcessPickBatchGroupId)

Get a fulfillmentProcessPickBatchGroup by id

Returns the fulfillmentProcessPickBatchGroup identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessPickBatchGroupApi();

var fulfillmentProcessPickBatchGroupId = "fulfillmentProcessPickBatchGroupId_example"; // String | Id of fulfillmentProcessPickBatchGroup to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFulfillmentProcessGroupPicksByById(fulfillmentProcessPickBatchGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillmentProcessPickBatchGroupId** | **String**| Id of fulfillmentProcessPickBatchGroup to be returned. | 

### Return type

[**FulfillmentProcessPickBatchGroup**](FulfillmentProcessPickBatchGroup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentProcessPickBatchGroupBySearchText"></a>
# **getFulfillmentProcessPickBatchGroupBySearchText**
> [FulfillmentProcessPickBatchGroup] getFulfillmentProcessPickBatchGroupBySearchText(opts)

Search fulfillmentProcessPickBatchGroups

Returns the list of fulfillmentProcessPickBatchGroups that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.FulfillmentProcessPickBatchGroupApi();

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
apiInstance.getFulfillmentProcessPickBatchGroupBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[FulfillmentProcessPickBatchGroup]**](FulfillmentProcessPickBatchGroup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

