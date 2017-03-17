# infoplus.LineOfBusinessApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLineOfBusinessById**](LineOfBusinessApi.md#getLineOfBusinessById) | **GET** /beta/lineOfBusiness/{lineOfBusinessId} | Get a lineOfBusiness by id
[**getLineOfBusinessBySearchText**](LineOfBusinessApi.md#getLineOfBusinessBySearchText) | **GET** /beta/lineOfBusiness/search | Search lineOfBusinesses


<a name="getLineOfBusinessById"></a>
# **getLineOfBusinessById**
> LineOfBusiness getLineOfBusinessById(lineOfBusinessId)

Get a lineOfBusiness by id

Returns the lineOfBusiness identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LineOfBusinessApi()

var lineOfBusinessId = "lineOfBusinessId_example"; // {String} Id of lineOfBusiness to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLineOfBusinessById(lineOfBusinessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **String**| Id of lineOfBusiness to be returned. | 

### Return type

[**LineOfBusiness**](LineOfBusiness.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLineOfBusinessBySearchText"></a>
# **getLineOfBusinessBySearchText**
> [LineOfBusiness] getLineOfBusinessBySearchText(opts)

Search lineOfBusinesses

Returns the list of lineOfBusinesses that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LineOfBusinessApi()

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
api.getLineOfBusinessBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[LineOfBusiness]**](LineOfBusiness.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

