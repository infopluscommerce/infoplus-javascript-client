# infoplus.OverrideReturnAddressApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOverrideReturnAddress**](OverrideReturnAddressApi.md#addOverrideReturnAddress) | **POST** /beta/overrideReturnAddress | Create an overrideReturnAddress
[**addOverrideReturnAddressAudit**](OverrideReturnAddressApi.md#addOverrideReturnAddressAudit) | **PUT** /beta/overrideReturnAddress/{overrideReturnAddressId}/audit/{overrideReturnAddressAudit} | Add new audit for an overrideReturnAddress
[**addOverrideReturnAddressTag**](OverrideReturnAddressApi.md#addOverrideReturnAddressTag) | **PUT** /beta/overrideReturnAddress/{overrideReturnAddressId}/tag/{overrideReturnAddressTag} | Add new tags for an overrideReturnAddress.
[**deleteOverrideReturnAddress**](OverrideReturnAddressApi.md#deleteOverrideReturnAddress) | **DELETE** /beta/overrideReturnAddress/{overrideReturnAddressId} | Delete an overrideReturnAddress
[**deleteOverrideReturnAddressTag**](OverrideReturnAddressApi.md#deleteOverrideReturnAddressTag) | **DELETE** /beta/overrideReturnAddress/{overrideReturnAddressId}/tag/{overrideReturnAddressTag} | Delete a tag for an overrideReturnAddress.
[**getDuplicateOverrideReturnAddressById**](OverrideReturnAddressApi.md#getDuplicateOverrideReturnAddressById) | **GET** /beta/overrideReturnAddress/duplicate/{overrideReturnAddressId} | Get a duplicated an overrideReturnAddress by id
[**getOverrideReturnAddressByFilter**](OverrideReturnAddressApi.md#getOverrideReturnAddressByFilter) | **GET** /beta/overrideReturnAddress/search | Search overrideReturnAddresses by filter
[**getOverrideReturnAddressById**](OverrideReturnAddressApi.md#getOverrideReturnAddressById) | **GET** /beta/overrideReturnAddress/{overrideReturnAddressId} | Get an overrideReturnAddress by id
[**getOverrideReturnAddressTags**](OverrideReturnAddressApi.md#getOverrideReturnAddressTags) | **GET** /beta/overrideReturnAddress/{overrideReturnAddressId}/tag | Get the tags for an overrideReturnAddress.
[**updateOverrideReturnAddress**](OverrideReturnAddressApi.md#updateOverrideReturnAddress) | **PUT** /beta/overrideReturnAddress | Update an overrideReturnAddress
[**updateOverrideReturnAddressCustomFields**](OverrideReturnAddressApi.md#updateOverrideReturnAddressCustomFields) | **PUT** /beta/overrideReturnAddress/customFields | Update an overrideReturnAddress custom fields


<a name="addOverrideReturnAddress"></a>
# **addOverrideReturnAddress**
> OverrideReturnAddress addOverrideReturnAddress(body)

Create an overrideReturnAddress

Inserts a new overrideReturnAddress using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var body = new infoplus.OverrideReturnAddress(); // OverrideReturnAddress | OverrideReturnAddress to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOverrideReturnAddress(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OverrideReturnAddress**](OverrideReturnAddress.md)| OverrideReturnAddress to be inserted. | 

### Return type

[**OverrideReturnAddress**](OverrideReturnAddress.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOverrideReturnAddressAudit"></a>
# **addOverrideReturnAddressAudit**
> addOverrideReturnAddressAudit(overrideReturnAddressId, overrideReturnAddressAudit)

Add new audit for an overrideReturnAddress

Adds an audit to an existing overrideReturnAddress.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var overrideReturnAddressId = 56; // Number | Id of the overrideReturnAddress to add an audit to

var overrideReturnAddressAudit = "overrideReturnAddressAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOverrideReturnAddressAudit(overrideReturnAddressId, overrideReturnAddressAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideReturnAddressId** | **Number**| Id of the overrideReturnAddress to add an audit to | 
 **overrideReturnAddressAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOverrideReturnAddressTag"></a>
# **addOverrideReturnAddressTag**
> addOverrideReturnAddressTag(overrideReturnAddressId, overrideReturnAddressTag)

Add new tags for an overrideReturnAddress.

Adds a tag to an existing overrideReturnAddress.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var overrideReturnAddressId = 56; // Number | Id of the overrideReturnAddress to add a tag to

var overrideReturnAddressTag = "overrideReturnAddressTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOverrideReturnAddressTag(overrideReturnAddressId, overrideReturnAddressTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideReturnAddressId** | **Number**| Id of the overrideReturnAddress to add a tag to | 
 **overrideReturnAddressTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOverrideReturnAddress"></a>
# **deleteOverrideReturnAddress**
> deleteOverrideReturnAddress(overrideReturnAddressId)

Delete an overrideReturnAddress

Deletes the overrideReturnAddress identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var overrideReturnAddressId = 56; // Number | Id of the overrideReturnAddress to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOverrideReturnAddress(overrideReturnAddressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideReturnAddressId** | **Number**| Id of the overrideReturnAddress to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOverrideReturnAddressTag"></a>
# **deleteOverrideReturnAddressTag**
> deleteOverrideReturnAddressTag(overrideReturnAddressId, overrideReturnAddressTag)

Delete a tag for an overrideReturnAddress.

Deletes an existing overrideReturnAddress tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var overrideReturnAddressId = 56; // Number | Id of the overrideReturnAddress to remove tag from

var overrideReturnAddressTag = "overrideReturnAddressTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOverrideReturnAddressTag(overrideReturnAddressId, overrideReturnAddressTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideReturnAddressId** | **Number**| Id of the overrideReturnAddress to remove tag from | 
 **overrideReturnAddressTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOverrideReturnAddressById"></a>
# **getDuplicateOverrideReturnAddressById**
> OverrideReturnAddress getDuplicateOverrideReturnAddressById(overrideReturnAddressId)

Get a duplicated an overrideReturnAddress by id

Returns a duplicated overrideReturnAddress identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var overrideReturnAddressId = 56; // Number | Id of the overrideReturnAddress to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOverrideReturnAddressById(overrideReturnAddressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideReturnAddressId** | **Number**| Id of the overrideReturnAddress to be duplicated. | 

### Return type

[**OverrideReturnAddress**](OverrideReturnAddress.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOverrideReturnAddressByFilter"></a>
# **getOverrideReturnAddressByFilter**
> [OverrideReturnAddress] getOverrideReturnAddressByFilter(opts)

Search overrideReturnAddresses by filter

Returns the list of overrideReturnAddresses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

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
apiInstance.getOverrideReturnAddressByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OverrideReturnAddress]**](OverrideReturnAddress.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOverrideReturnAddressById"></a>
# **getOverrideReturnAddressById**
> OverrideReturnAddress getOverrideReturnAddressById(overrideReturnAddressId)

Get an overrideReturnAddress by id

Returns the overrideReturnAddress identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var overrideReturnAddressId = 56; // Number | Id of the overrideReturnAddress to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOverrideReturnAddressById(overrideReturnAddressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideReturnAddressId** | **Number**| Id of the overrideReturnAddress to be returned. | 

### Return type

[**OverrideReturnAddress**](OverrideReturnAddress.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOverrideReturnAddressTags"></a>
# **getOverrideReturnAddressTags**
> getOverrideReturnAddressTags(overrideReturnAddressId)

Get the tags for an overrideReturnAddress.

Get all existing overrideReturnAddress tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var overrideReturnAddressId = 56; // Number | Id of the overrideReturnAddress to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOverrideReturnAddressTags(overrideReturnAddressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideReturnAddressId** | **Number**| Id of the overrideReturnAddress to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOverrideReturnAddress"></a>
# **updateOverrideReturnAddress**
> updateOverrideReturnAddress(body)

Update an overrideReturnAddress

Updates an existing overrideReturnAddress using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var body = new infoplus.OverrideReturnAddress(); // OverrideReturnAddress | OverrideReturnAddress to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOverrideReturnAddress(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OverrideReturnAddress**](OverrideReturnAddress.md)| OverrideReturnAddress to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOverrideReturnAddressCustomFields"></a>
# **updateOverrideReturnAddressCustomFields**
> updateOverrideReturnAddressCustomFields(body)

Update an overrideReturnAddress custom fields

Updates an existing overrideReturnAddress custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OverrideReturnAddressApi();

var body = new infoplus.OverrideReturnAddress(); // OverrideReturnAddress | OverrideReturnAddress to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOverrideReturnAddressCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OverrideReturnAddress**](OverrideReturnAddress.md)| OverrideReturnAddress to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

