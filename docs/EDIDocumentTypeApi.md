# infoplus.EDIDocumentTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEDIDocumentTypeById**](EDIDocumentTypeApi.md#getEDIDocumentTypeById) | **GET** /v3.0/eDIDocumentType/{eDIDocumentTypeId} | Get an eDIDocumentType by id
[**getEDIDocumentTypeBySearchText**](EDIDocumentTypeApi.md#getEDIDocumentTypeBySearchText) | **GET** /v3.0/eDIDocumentType/search | Search eDIDocumentTypes


<a name="getEDIDocumentTypeById"></a>
# **getEDIDocumentTypeById**
> EDIDocumentType getEDIDocumentTypeById(eDIDocumentTypeId)

Get an eDIDocumentType by id

Returns the eDIDocumentType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EDIDocumentTypeApi();

var eDIDocumentTypeId = "eDIDocumentTypeId_example"; // String | Id of eDIDocumentType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEDIDocumentTypeById(eDIDocumentTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eDIDocumentTypeId** | **String**| Id of eDIDocumentType to be returned. | 

### Return type

[**EDIDocumentType**](EDIDocumentType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEDIDocumentTypeBySearchText"></a>
# **getEDIDocumentTypeBySearchText**
> [EDIDocumentType] getEDIDocumentTypeBySearchText(opts)

Search eDIDocumentTypes

Returns the list of eDIDocumentTypes that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.EDIDocumentTypeApi();

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
apiInstance.getEDIDocumentTypeBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[EDIDocumentType]**](EDIDocumentType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

