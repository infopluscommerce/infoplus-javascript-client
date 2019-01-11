# infoplus.SlaSetupApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSlaSetupAudit**](SlaSetupApi.md#addSlaSetupAudit) | **PUT** /beta/slaSetup/{slaSetupId}/audit/{slaSetupAudit} | Add new audit for a slaSetup
[**addSlaSetupTag**](SlaSetupApi.md#addSlaSetupTag) | **PUT** /beta/slaSetup/{slaSetupId}/tag/{slaSetupTag} | Add new tags for a slaSetup.
[**deleteSlaSetupTag**](SlaSetupApi.md#deleteSlaSetupTag) | **DELETE** /beta/slaSetup/{slaSetupId}/tag/{slaSetupTag} | Delete a tag for a slaSetup.
[**getDuplicateSlaSetupById**](SlaSetupApi.md#getDuplicateSlaSetupById) | **GET** /beta/slaSetup/duplicate/{slaSetupId} | Get a duplicated a slaSetup by id
[**getSlaSetupByFilter**](SlaSetupApi.md#getSlaSetupByFilter) | **GET** /beta/slaSetup/search | Search slaSetups by filter
[**getSlaSetupById**](SlaSetupApi.md#getSlaSetupById) | **GET** /beta/slaSetup/{slaSetupId} | Get a slaSetup by id
[**getSlaSetupTags**](SlaSetupApi.md#getSlaSetupTags) | **GET** /beta/slaSetup/{slaSetupId}/tag | Get the tags for a slaSetup.


<a name="addSlaSetupAudit"></a>
# **addSlaSetupAudit**
> addSlaSetupAudit(slaSetupId, slaSetupAudit)

Add new audit for a slaSetup

Adds an audit to an existing slaSetup.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SlaSetupApi();

var slaSetupId = 56; // Number | Id of the slaSetup to add an audit to

var slaSetupAudit = "slaSetupAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSlaSetupAudit(slaSetupId, slaSetupAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slaSetupId** | **Number**| Id of the slaSetup to add an audit to | 
 **slaSetupAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSlaSetupTag"></a>
# **addSlaSetupTag**
> addSlaSetupTag(slaSetupId, slaSetupTag)

Add new tags for a slaSetup.

Adds a tag to an existing slaSetup.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SlaSetupApi();

var slaSetupId = 56; // Number | Id of the slaSetup to add a tag to

var slaSetupTag = "slaSetupTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSlaSetupTag(slaSetupId, slaSetupTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slaSetupId** | **Number**| Id of the slaSetup to add a tag to | 
 **slaSetupTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSlaSetupTag"></a>
# **deleteSlaSetupTag**
> deleteSlaSetupTag(slaSetupId, slaSetupTag)

Delete a tag for a slaSetup.

Deletes an existing slaSetup tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SlaSetupApi();

var slaSetupId = 56; // Number | Id of the slaSetup to remove tag from

var slaSetupTag = "slaSetupTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSlaSetupTag(slaSetupId, slaSetupTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slaSetupId** | **Number**| Id of the slaSetup to remove tag from | 
 **slaSetupTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateSlaSetupById"></a>
# **getDuplicateSlaSetupById**
> SlaSetup getDuplicateSlaSetupById(slaSetupId)

Get a duplicated a slaSetup by id

Returns a duplicated slaSetup identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SlaSetupApi();

var slaSetupId = 56; // Number | Id of the slaSetup to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateSlaSetupById(slaSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slaSetupId** | **Number**| Id of the slaSetup to be duplicated. | 

### Return type

[**SlaSetup**](SlaSetup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSlaSetupByFilter"></a>
# **getSlaSetupByFilter**
> [SlaSetup] getSlaSetupByFilter(opts)

Search slaSetups by filter

Returns the list of slaSetups that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SlaSetupApi();

var opts = { 
  'filter': "filter_example", // String | Query string, used to filter results.
  'page': 56, // Number | Result page number.  Defaults to 1.
  'limit': 56, // Number | Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // String | Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSlaSetupByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[SlaSetup]**](SlaSetup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSlaSetupById"></a>
# **getSlaSetupById**
> SlaSetup getSlaSetupById(slaSetupId)

Get a slaSetup by id

Returns the slaSetup identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SlaSetupApi();

var slaSetupId = 56; // Number | Id of the slaSetup to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSlaSetupById(slaSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slaSetupId** | **Number**| Id of the slaSetup to be returned. | 

### Return type

[**SlaSetup**](SlaSetup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSlaSetupTags"></a>
# **getSlaSetupTags**
> getSlaSetupTags(slaSetupId)

Get the tags for a slaSetup.

Get all existing slaSetup tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SlaSetupApi();

var slaSetupId = 56; // Number | Id of the slaSetup to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSlaSetupTags(slaSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slaSetupId** | **Number**| Id of the slaSetup to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

