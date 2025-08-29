# infoplus.ManifestPartnerApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getManifestPartnerBySearchText**](ManifestPartnerApi.md#getManifestPartnerBySearchText) | **GET** /beta/manifestPartner/search | Search manifestPartners
[**getManifestSolutionProviderById**](ManifestPartnerApi.md#getManifestSolutionProviderById) | **GET** /beta/manifestPartner/{manifestPartnerId} | Get a manifestPartner by id


<a name="getManifestPartnerBySearchText"></a>
# **getManifestPartnerBySearchText**
> [ManifestPartner] getManifestPartnerBySearchText(opts)

Search manifestPartners

Returns the list of manifestPartners that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManifestPartnerApi();

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
apiInstance.getManifestPartnerBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[ManifestPartner]**](ManifestPartner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getManifestSolutionProviderById"></a>
# **getManifestSolutionProviderById**
> ManifestPartner getManifestSolutionProviderById(manifestPartnerId)

Get a manifestPartner by id

Returns the manifestPartner identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManifestPartnerApi();

var manifestPartnerId = "manifestPartnerId_example"; // String | Id of manifestPartner to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getManifestSolutionProviderById(manifestPartnerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manifestPartnerId** | **String**| Id of manifestPartner to be returned. | 

### Return type

[**ManifestPartner**](ManifestPartner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

