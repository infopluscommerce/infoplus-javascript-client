# infoplus.IntegrationPartnerApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIntegrationPartnerById**](IntegrationPartnerApi.md#getIntegrationPartnerById) | **GET** /v1.0/integrationPartner/{integrationPartnerId} | Get an integrationPartner by id
[**getIntegrationPartnerBySearchText**](IntegrationPartnerApi.md#getIntegrationPartnerBySearchText) | **GET** /v1.0/integrationPartner/search | Search integrationPartners


<a name="getIntegrationPartnerById"></a>
# **getIntegrationPartnerById**
> IntegrationPartner getIntegrationPartnerById(integrationPartnerId)

Get an integrationPartner by id

Returns the integrationPartner identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.IntegrationPartnerApi()

var integrationPartnerId = "integrationPartnerId_example"; // {String} Id of integrationPartner to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getIntegrationPartnerById(integrationPartnerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationPartnerId** | **String**| Id of integrationPartner to be returned. | 

### Return type

[**IntegrationPartner**](IntegrationPartner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIntegrationPartnerBySearchText"></a>
# **getIntegrationPartnerBySearchText**
> [IntegrationPartner] getIntegrationPartnerBySearchText(opts)

Search integrationPartners

Returns the list of integrationPartners that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.IntegrationPartnerApi()

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
api.getIntegrationPartnerBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[IntegrationPartner]**](IntegrationPartner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

