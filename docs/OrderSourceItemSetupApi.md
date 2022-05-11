# infoplus.OrderSourceItemSetupApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderSourceItemSetup**](OrderSourceItemSetupApi.md#addOrderSourceItemSetup) | **POST** /v3.0/orderSourceItemSetup | Create an orderSourceItemSetup
[**addOrderSourceItemSetupAudit**](OrderSourceItemSetupApi.md#addOrderSourceItemSetupAudit) | **PUT** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/audit/{orderSourceItemSetupAudit} | Add new audit for an orderSourceItemSetup
[**addOrderSourceItemSetupFile**](OrderSourceItemSetupApi.md#addOrderSourceItemSetupFile) | **POST** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/file/{fileName} | Attach a file to an orderSourceItemSetup
[**addOrderSourceItemSetupFileByURL**](OrderSourceItemSetupApi.md#addOrderSourceItemSetupFileByURL) | **POST** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/file | Attach a file to an orderSourceItemSetup by URL.
[**addOrderSourceItemSetupTag**](OrderSourceItemSetupApi.md#addOrderSourceItemSetupTag) | **PUT** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/tag/{orderSourceItemSetupTag} | Add new tags for an orderSourceItemSetup.
[**deleteOrderSourceItemSetup**](OrderSourceItemSetupApi.md#deleteOrderSourceItemSetup) | **DELETE** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId} | Delete an orderSourceItemSetup
[**deleteOrderSourceItemSetupFile**](OrderSourceItemSetupApi.md#deleteOrderSourceItemSetupFile) | **DELETE** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/file/{fileId} | Delete a file for an orderSourceItemSetup.
[**deleteOrderSourceItemSetupTag**](OrderSourceItemSetupApi.md#deleteOrderSourceItemSetupTag) | **DELETE** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/tag/{orderSourceItemSetupTag} | Delete a tag for an orderSourceItemSetup.
[**getDuplicateOrderSourceItemSetupById**](OrderSourceItemSetupApi.md#getDuplicateOrderSourceItemSetupById) | **GET** /v3.0/orderSourceItemSetup/duplicate/{orderSourceItemSetupId} | Get a duplicated an orderSourceItemSetup by id
[**getOrderSourceItemSetupByFilter**](OrderSourceItemSetupApi.md#getOrderSourceItemSetupByFilter) | **GET** /v3.0/orderSourceItemSetup/search | Search orderSourceItemSetups by filter
[**getOrderSourceItemSetupById**](OrderSourceItemSetupApi.md#getOrderSourceItemSetupById) | **GET** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId} | Get an orderSourceItemSetup by id
[**getOrderSourceItemSetupFiles**](OrderSourceItemSetupApi.md#getOrderSourceItemSetupFiles) | **GET** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/file | Get the files for an orderSourceItemSetup.
[**getOrderSourceItemSetupTags**](OrderSourceItemSetupApi.md#getOrderSourceItemSetupTags) | **GET** /v3.0/orderSourceItemSetup/{orderSourceItemSetupId}/tag | Get the tags for an orderSourceItemSetup.
[**updateOrderSourceItemSetup**](OrderSourceItemSetupApi.md#updateOrderSourceItemSetup) | **PUT** /v3.0/orderSourceItemSetup | Update an orderSourceItemSetup
[**updateOrderSourceItemSetupCustomFields**](OrderSourceItemSetupApi.md#updateOrderSourceItemSetupCustomFields) | **PUT** /v3.0/orderSourceItemSetup/customFields | Update an orderSourceItemSetup custom fields


<a name="addOrderSourceItemSetup"></a>
# **addOrderSourceItemSetup**
> OrderSourceItemSetup addOrderSourceItemSetup(body)

Create an orderSourceItemSetup

Inserts a new orderSourceItemSetup using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var body = new infoplus.OrderSourceItemSetup(); // OrderSourceItemSetup | OrderSourceItemSetup to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrderSourceItemSetup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceItemSetup**](OrderSourceItemSetup.md)| OrderSourceItemSetup to be inserted. | 

### Return type

[**OrderSourceItemSetup**](OrderSourceItemSetup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceItemSetupAudit"></a>
# **addOrderSourceItemSetupAudit**
> addOrderSourceItemSetupAudit(orderSourceItemSetupId, orderSourceItemSetupAudit)

Add new audit for an orderSourceItemSetup

Adds an audit to an existing orderSourceItemSetup.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to add an audit to

var orderSourceItemSetupAudit = "orderSourceItemSetupAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceItemSetupAudit(orderSourceItemSetupId, orderSourceItemSetupAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to add an audit to | 
 **orderSourceItemSetupAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceItemSetupFile"></a>
# **addOrderSourceItemSetupFile**
> addOrderSourceItemSetupFile(orderSourceItemSetupId, fileName)

Attach a file to an orderSourceItemSetup

Adds a file to an existing orderSourceItemSetup.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceItemSetupFile(orderSourceItemSetupId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOrderSourceItemSetupFileByURL"></a>
# **addOrderSourceItemSetupFileByURL**
> addOrderSourceItemSetupFileByURL(body, orderSourceItemSetupId)

Attach a file to an orderSourceItemSetup by URL.

Adds a file to an existing orderSourceItemSetup by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceItemSetupFileByURL(body, orderSourceItemSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOrderSourceItemSetupTag"></a>
# **addOrderSourceItemSetupTag**
> addOrderSourceItemSetupTag(orderSourceItemSetupId, orderSourceItemSetupTag)

Add new tags for an orderSourceItemSetup.

Adds a tag to an existing orderSourceItemSetup.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to add a tag to

var orderSourceItemSetupTag = "orderSourceItemSetupTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderSourceItemSetupTag(orderSourceItemSetupId, orderSourceItemSetupTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to add a tag to | 
 **orderSourceItemSetupTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrderSourceItemSetup"></a>
# **deleteOrderSourceItemSetup**
> deleteOrderSourceItemSetup(orderSourceItemSetupId)

Delete an orderSourceItemSetup

Deletes the orderSourceItemSetup identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceItemSetup(orderSourceItemSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderSourceItemSetupFile"></a>
# **deleteOrderSourceItemSetupFile**
> deleteOrderSourceItemSetupFile(orderSourceItemSetupId, fileId)

Delete a file for an orderSourceItemSetup.

Deletes an existing orderSourceItemSetup file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceItemSetupFile(orderSourceItemSetupId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOrderSourceItemSetupTag"></a>
# **deleteOrderSourceItemSetupTag**
> deleteOrderSourceItemSetupTag(orderSourceItemSetupId, orderSourceItemSetupTag)

Delete a tag for an orderSourceItemSetup.

Deletes an existing orderSourceItemSetup tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to remove tag from

var orderSourceItemSetupTag = "orderSourceItemSetupTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrderSourceItemSetupTag(orderSourceItemSetupId, orderSourceItemSetupTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to remove tag from | 
 **orderSourceItemSetupTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOrderSourceItemSetupById"></a>
# **getDuplicateOrderSourceItemSetupById**
> OrderSourceItemSetup getDuplicateOrderSourceItemSetupById(orderSourceItemSetupId)

Get a duplicated an orderSourceItemSetup by id

Returns a duplicated orderSourceItemSetup identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOrderSourceItemSetupById(orderSourceItemSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to be duplicated. | 

### Return type

[**OrderSourceItemSetup**](OrderSourceItemSetup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceItemSetupByFilter"></a>
# **getOrderSourceItemSetupByFilter**
> [OrderSourceItemSetup] getOrderSourceItemSetupByFilter(opts)

Search orderSourceItemSetups by filter

Returns the list of orderSourceItemSetups that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

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
apiInstance.getOrderSourceItemSetupByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OrderSourceItemSetup]**](OrderSourceItemSetup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceItemSetupById"></a>
# **getOrderSourceItemSetupById**
> OrderSourceItemSetup getOrderSourceItemSetupById(orderSourceItemSetupId)

Get an orderSourceItemSetup by id

Returns the orderSourceItemSetup identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderSourceItemSetupById(orderSourceItemSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to be returned. | 

### Return type

[**OrderSourceItemSetup**](OrderSourceItemSetup.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceItemSetupFiles"></a>
# **getOrderSourceItemSetupFiles**
> getOrderSourceItemSetupFiles(orderSourceItemSetupId)

Get the files for an orderSourceItemSetup.

Get all existing orderSourceItemSetup files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderSourceItemSetupFiles(orderSourceItemSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderSourceItemSetupTags"></a>
# **getOrderSourceItemSetupTags**
> getOrderSourceItemSetupTags(orderSourceItemSetupId)

Get the tags for an orderSourceItemSetup.

Get all existing orderSourceItemSetup tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var orderSourceItemSetupId = 56; // Number | Id of the orderSourceItemSetup to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrderSourceItemSetupTags(orderSourceItemSetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSourceItemSetupId** | **Number**| Id of the orderSourceItemSetup to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrderSourceItemSetup"></a>
# **updateOrderSourceItemSetup**
> updateOrderSourceItemSetup(body)

Update an orderSourceItemSetup

Updates an existing orderSourceItemSetup using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var body = new infoplus.OrderSourceItemSetup(); // OrderSourceItemSetup | OrderSourceItemSetup to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderSourceItemSetup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceItemSetup**](OrderSourceItemSetup.md)| OrderSourceItemSetup to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrderSourceItemSetupCustomFields"></a>
# **updateOrderSourceItemSetupCustomFields**
> updateOrderSourceItemSetupCustomFields(body)

Update an orderSourceItemSetup custom fields

Updates an existing orderSourceItemSetup custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OrderSourceItemSetupApi();

var body = new infoplus.OrderSourceItemSetup(); // OrderSourceItemSetup | OrderSourceItemSetup to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrderSourceItemSetupCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderSourceItemSetup**](OrderSourceItemSetup.md)| OrderSourceItemSetup to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

