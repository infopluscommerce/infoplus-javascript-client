# infoplus.ItemSubGroupApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemSubGroupBySearchText**](ItemSubGroupApi.md#getItemSubGroupBySearchText) | **GET** /beta/itemSubGroup/search | Search itemSubGroups
[**getTranslateSubGroupById**](ItemSubGroupApi.md#getTranslateSubGroupById) | **GET** /beta/itemSubGroup/{itemSubGroupId} | Get an itemSubGroup by id


<a name="getItemSubGroupBySearchText"></a>
# **getItemSubGroupBySearchText**
> [ItemSubGroup] getItemSubGroupBySearchText(opts)

Search itemSubGroups

Returns the list of itemSubGroups that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubGroupApi()

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
api.getItemSubGroupBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[ItemSubGroup]**](ItemSubGroup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTranslateSubGroupById"></a>
# **getTranslateSubGroupById**
> ItemSubGroup getTranslateSubGroupById(itemSubGroupId)

Get an itemSubGroup by id

Returns the itemSubGroup identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ItemSubGroupApi()

var itemSubGroupId = "itemSubGroupId_example"; // {String} Id of itemSubGroup to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTranslateSubGroupById(itemSubGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemSubGroupId** | **String**| Id of itemSubGroup to be returned. | 

### Return type

[**ItemSubGroup**](ItemSubGroup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

