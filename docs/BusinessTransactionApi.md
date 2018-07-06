# infoplus.BusinessTransactionApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBusinessTransactionAudit**](BusinessTransactionApi.md#addBusinessTransactionAudit) | **PUT** /beta/businessTransaction/{businessTransactionId}/audit/{businessTransactionAudit} | Add new audit for a businessTransaction
[**addBusinessTransactionTag**](BusinessTransactionApi.md#addBusinessTransactionTag) | **PUT** /beta/businessTransaction/{businessTransactionId}/tag/{businessTransactionTag} | Add new tags for a businessTransaction.
[**deleteBusinessTransactionTag**](BusinessTransactionApi.md#deleteBusinessTransactionTag) | **DELETE** /beta/businessTransaction/{businessTransactionId}/tag/{businessTransactionTag} | Delete a tag for a businessTransaction.
[**getBusinessTransactionByFilter**](BusinessTransactionApi.md#getBusinessTransactionByFilter) | **GET** /beta/businessTransaction/search | Search businessTransactions by filter
[**getBusinessTransactionById**](BusinessTransactionApi.md#getBusinessTransactionById) | **GET** /beta/businessTransaction/{businessTransactionId} | Get a businessTransaction by id
[**getBusinessTransactionTags**](BusinessTransactionApi.md#getBusinessTransactionTags) | **GET** /beta/businessTransaction/{businessTransactionId}/tag | Get the tags for a businessTransaction.
[**getDuplicateBusinessTransactionById**](BusinessTransactionApi.md#getDuplicateBusinessTransactionById) | **GET** /beta/businessTransaction/duplicate/{businessTransactionId} | Get a duplicated a businessTransaction by id
[**updateBusinessTransactionCustomFields**](BusinessTransactionApi.md#updateBusinessTransactionCustomFields) | **PUT** /beta/businessTransaction/customFields | Update a businessTransaction custom fields


<a name="addBusinessTransactionAudit"></a>
# **addBusinessTransactionAudit**
> addBusinessTransactionAudit(businessTransactionId, businessTransactionAudit)

Add new audit for a businessTransaction

Adds an audit to an existing businessTransaction.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

var businessTransactionId = 56; // Number | Id of the businessTransaction to add an audit to

var businessTransactionAudit = "businessTransactionAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBusinessTransactionAudit(businessTransactionId, businessTransactionAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessTransactionId** | **Number**| Id of the businessTransaction to add an audit to | 
 **businessTransactionAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBusinessTransactionTag"></a>
# **addBusinessTransactionTag**
> addBusinessTransactionTag(businessTransactionId, businessTransactionTag)

Add new tags for a businessTransaction.

Adds a tag to an existing businessTransaction.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

var businessTransactionId = 56; // Number | Id of the businessTransaction to add a tag to

var businessTransactionTag = "businessTransactionTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBusinessTransactionTag(businessTransactionId, businessTransactionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessTransactionId** | **Number**| Id of the businessTransaction to add a tag to | 
 **businessTransactionTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBusinessTransactionTag"></a>
# **deleteBusinessTransactionTag**
> deleteBusinessTransactionTag(businessTransactionId, businessTransactionTag)

Delete a tag for a businessTransaction.

Deletes an existing businessTransaction tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

var businessTransactionId = 56; // Number | Id of the businessTransaction to remove tag from

var businessTransactionTag = "businessTransactionTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBusinessTransactionTag(businessTransactionId, businessTransactionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessTransactionId** | **Number**| Id of the businessTransaction to remove tag from | 
 **businessTransactionTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBusinessTransactionByFilter"></a>
# **getBusinessTransactionByFilter**
> [BusinessTransaction] getBusinessTransactionByFilter(opts)

Search businessTransactions by filter

Returns the list of businessTransactions that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

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
apiInstance.getBusinessTransactionByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[BusinessTransaction]**](BusinessTransaction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBusinessTransactionById"></a>
# **getBusinessTransactionById**
> BusinessTransaction getBusinessTransactionById(businessTransactionId)

Get a businessTransaction by id

Returns the businessTransaction identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

var businessTransactionId = 56; // Number | Id of the businessTransaction to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBusinessTransactionById(businessTransactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessTransactionId** | **Number**| Id of the businessTransaction to be returned. | 

### Return type

[**BusinessTransaction**](BusinessTransaction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBusinessTransactionTags"></a>
# **getBusinessTransactionTags**
> getBusinessTransactionTags(businessTransactionId)

Get the tags for a businessTransaction.

Get all existing businessTransaction tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

var businessTransactionId = 56; // Number | Id of the businessTransaction to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBusinessTransactionTags(businessTransactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessTransactionId** | **Number**| Id of the businessTransaction to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateBusinessTransactionById"></a>
# **getDuplicateBusinessTransactionById**
> BusinessTransaction getDuplicateBusinessTransactionById(businessTransactionId)

Get a duplicated a businessTransaction by id

Returns a duplicated businessTransaction identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

var businessTransactionId = 56; // Number | Id of the businessTransaction to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateBusinessTransactionById(businessTransactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessTransactionId** | **Number**| Id of the businessTransaction to be duplicated. | 

### Return type

[**BusinessTransaction**](BusinessTransaction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBusinessTransactionCustomFields"></a>
# **updateBusinessTransactionCustomFields**
> updateBusinessTransactionCustomFields(body)

Update a businessTransaction custom fields

Updates an existing businessTransaction custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BusinessTransactionApi();

var body = new infoplus.BusinessTransaction(); // BusinessTransaction | BusinessTransaction to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBusinessTransactionCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BusinessTransaction**](BusinessTransaction.md)| BusinessTransaction to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

