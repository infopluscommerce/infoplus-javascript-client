# infoplus.ParcelInvoiceApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addParcelInvoiceAudit**](ParcelInvoiceApi.md#addParcelInvoiceAudit) | **PUT** /beta/parcelInvoice/{parcelInvoiceId}/audit/{parcelInvoiceAudit} | Add new audit for a parcelInvoice
[**addParcelInvoiceTag**](ParcelInvoiceApi.md#addParcelInvoiceTag) | **PUT** /beta/parcelInvoice/{parcelInvoiceId}/tag/{parcelInvoiceTag} | Add new tags for a parcelInvoice.
[**deleteParcelInvoice**](ParcelInvoiceApi.md#deleteParcelInvoice) | **DELETE** /beta/parcelInvoice/{parcelInvoiceId} | Delete a parcelInvoice
[**deleteParcelInvoiceTag**](ParcelInvoiceApi.md#deleteParcelInvoiceTag) | **DELETE** /beta/parcelInvoice/{parcelInvoiceId}/tag/{parcelInvoiceTag} | Delete a tag for a parcelInvoice.
[**getDuplicateParcelInvoiceById**](ParcelInvoiceApi.md#getDuplicateParcelInvoiceById) | **GET** /beta/parcelInvoice/duplicate/{parcelInvoiceId} | Get a duplicated a parcelInvoice by id
[**getParcelInvoiceByFilter**](ParcelInvoiceApi.md#getParcelInvoiceByFilter) | **GET** /beta/parcelInvoice/search | Search parcelInvoices by filter
[**getParcelInvoiceById**](ParcelInvoiceApi.md#getParcelInvoiceById) | **GET** /beta/parcelInvoice/{parcelInvoiceId} | Get a parcelInvoice by id
[**getParcelInvoiceTags**](ParcelInvoiceApi.md#getParcelInvoiceTags) | **GET** /beta/parcelInvoice/{parcelInvoiceId}/tag | Get the tags for a parcelInvoice.


<a name="addParcelInvoiceAudit"></a>
# **addParcelInvoiceAudit**
> addParcelInvoiceAudit(parcelInvoiceId, parcelInvoiceAudit)

Add new audit for a parcelInvoice

Adds an audit to an existing parcelInvoice.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

var parcelInvoiceId = 56; // Number | Id of the parcelInvoice to add an audit to

var parcelInvoiceAudit = "parcelInvoiceAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelInvoiceAudit(parcelInvoiceId, parcelInvoiceAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceId** | **Number**| Id of the parcelInvoice to add an audit to | 
 **parcelInvoiceAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addParcelInvoiceTag"></a>
# **addParcelInvoiceTag**
> addParcelInvoiceTag(parcelInvoiceId, parcelInvoiceTag)

Add new tags for a parcelInvoice.

Adds a tag to an existing parcelInvoice.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

var parcelInvoiceId = 56; // Number | Id of the parcelInvoice to add a tag to

var parcelInvoiceTag = "parcelInvoiceTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelInvoiceTag(parcelInvoiceId, parcelInvoiceTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceId** | **Number**| Id of the parcelInvoice to add a tag to | 
 **parcelInvoiceTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteParcelInvoice"></a>
# **deleteParcelInvoice**
> deleteParcelInvoice(parcelInvoiceId)

Delete a parcelInvoice

Deletes the parcelInvoice identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

var parcelInvoiceId = 56; // Number | Id of the parcelInvoice to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteParcelInvoice(parcelInvoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceId** | **Number**| Id of the parcelInvoice to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteParcelInvoiceTag"></a>
# **deleteParcelInvoiceTag**
> deleteParcelInvoiceTag(parcelInvoiceId, parcelInvoiceTag)

Delete a tag for a parcelInvoice.

Deletes an existing parcelInvoice tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

var parcelInvoiceId = 56; // Number | Id of the parcelInvoice to remove tag from

var parcelInvoiceTag = "parcelInvoiceTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteParcelInvoiceTag(parcelInvoiceId, parcelInvoiceTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceId** | **Number**| Id of the parcelInvoice to remove tag from | 
 **parcelInvoiceTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateParcelInvoiceById"></a>
# **getDuplicateParcelInvoiceById**
> ParcelInvoice getDuplicateParcelInvoiceById(parcelInvoiceId)

Get a duplicated a parcelInvoice by id

Returns a duplicated parcelInvoice identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

var parcelInvoiceId = 56; // Number | Id of the parcelInvoice to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateParcelInvoiceById(parcelInvoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceId** | **Number**| Id of the parcelInvoice to be duplicated. | 

### Return type

[**ParcelInvoice**](ParcelInvoice.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceByFilter"></a>
# **getParcelInvoiceByFilter**
> [ParcelInvoice] getParcelInvoiceByFilter(opts)

Search parcelInvoices by filter

Returns the list of parcelInvoices that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

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
apiInstance.getParcelInvoiceByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ParcelInvoice]**](ParcelInvoice.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceById"></a>
# **getParcelInvoiceById**
> ParcelInvoice getParcelInvoiceById(parcelInvoiceId)

Get a parcelInvoice by id

Returns the parcelInvoice identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

var parcelInvoiceId = 56; // Number | Id of the parcelInvoice to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getParcelInvoiceById(parcelInvoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceId** | **Number**| Id of the parcelInvoice to be returned. | 

### Return type

[**ParcelInvoice**](ParcelInvoice.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceTags"></a>
# **getParcelInvoiceTags**
> getParcelInvoiceTags(parcelInvoiceId)

Get the tags for a parcelInvoice.

Get all existing parcelInvoice tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceApi();

var parcelInvoiceId = 56; // Number | Id of the parcelInvoice to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getParcelInvoiceTags(parcelInvoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceId** | **Number**| Id of the parcelInvoice to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

