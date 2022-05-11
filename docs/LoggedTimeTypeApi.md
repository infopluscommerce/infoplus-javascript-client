# infoplus.LoggedTimeTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLoggedTimeTypeById**](LoggedTimeTypeApi.md#getLoggedTimeTypeById) | **GET** /v3.0/loggedTimeType/{loggedTimeTypeId} | Get a loggedTimeType by id
[**getLoggedTimeTypeBySearchText**](LoggedTimeTypeApi.md#getLoggedTimeTypeBySearchText) | **GET** /v3.0/loggedTimeType/search | Search loggedTimeTypes


<a name="getLoggedTimeTypeById"></a>
# **getLoggedTimeTypeById**
> LoggedTimeType getLoggedTimeTypeById(loggedTimeTypeId)

Get a loggedTimeType by id

Returns the loggedTimeType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoggedTimeTypeApi();

var loggedTimeTypeId = "loggedTimeTypeId_example"; // String | Id of loggedTimeType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoggedTimeTypeById(loggedTimeTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedTimeTypeId** | **String**| Id of loggedTimeType to be returned. | 

### Return type

[**LoggedTimeType**](LoggedTimeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoggedTimeTypeBySearchText"></a>
# **getLoggedTimeTypeBySearchText**
> [LoggedTimeType] getLoggedTimeTypeBySearchText(opts)

Search loggedTimeTypes

Returns the list of loggedTimeTypes that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LoggedTimeTypeApi();

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
apiInstance.getLoggedTimeTypeBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[LoggedTimeType]**](LoggedTimeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

