# infoplus.ReturnShipmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReturnShipmentAudit**](ReturnShipmentApi.md#addReturnShipmentAudit) | **PUT** /beta/returnShipment/{returnShipmentId}/audit/{returnShipmentAudit} | Add new audit for a returnShipment
[**addReturnShipmentFile**](ReturnShipmentApi.md#addReturnShipmentFile) | **POST** /beta/returnShipment/{returnShipmentId}/file/{fileName} | Attach a file to a returnShipment
[**addReturnShipmentFileByURL**](ReturnShipmentApi.md#addReturnShipmentFileByURL) | **POST** /beta/returnShipment/{returnShipmentId}/file | Attach a file to a returnShipment by URL.
[**addReturnShipmentTag**](ReturnShipmentApi.md#addReturnShipmentTag) | **PUT** /beta/returnShipment/{returnShipmentId}/tag/{returnShipmentTag} | Add new tags for a returnShipment.
[**deleteReturnShipmentFile**](ReturnShipmentApi.md#deleteReturnShipmentFile) | **DELETE** /beta/returnShipment/{returnShipmentId}/file/{fileId} | Delete a file for a returnShipment.
[**deleteReturnShipmentTag**](ReturnShipmentApi.md#deleteReturnShipmentTag) | **DELETE** /beta/returnShipment/{returnShipmentId}/tag/{returnShipmentTag} | Delete a tag for a returnShipment.
[**getDuplicateReturnShipmentById**](ReturnShipmentApi.md#getDuplicateReturnShipmentById) | **GET** /beta/returnShipment/duplicate/{returnShipmentId} | Get a duplicated a returnShipment by id
[**getReturnShipmentByFilter**](ReturnShipmentApi.md#getReturnShipmentByFilter) | **GET** /beta/returnShipment/search | Search returnShipments by filter
[**getReturnShipmentById**](ReturnShipmentApi.md#getReturnShipmentById) | **GET** /beta/returnShipment/{returnShipmentId} | Get a returnShipment by id
[**getReturnShipmentFiles**](ReturnShipmentApi.md#getReturnShipmentFiles) | **GET** /beta/returnShipment/{returnShipmentId}/file | Get the files for a returnShipment.
[**getReturnShipmentTags**](ReturnShipmentApi.md#getReturnShipmentTags) | **GET** /beta/returnShipment/{returnShipmentId}/tag | Get the tags for a returnShipment.
[**updateReturnShipmentCustomFields**](ReturnShipmentApi.md#updateReturnShipmentCustomFields) | **PUT** /beta/returnShipment/customFields | Update a returnShipment custom fields


<a name="addReturnShipmentAudit"></a>
# **addReturnShipmentAudit**
> addReturnShipmentAudit(returnShipmentId, returnShipmentAudit)

Add new audit for a returnShipment

Adds an audit to an existing returnShipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to add an audit to

var returnShipmentAudit = "returnShipmentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnShipmentAudit(returnShipmentId, returnShipmentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to add an audit to | 
 **returnShipmentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnShipmentFile"></a>
# **addReturnShipmentFile**
> addReturnShipmentFile(returnShipmentId, fileName)

Attach a file to a returnShipment

Adds a file to an existing returnShipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnShipmentFile(returnShipmentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addReturnShipmentFileByURL"></a>
# **addReturnShipmentFileByURL**
> addReturnShipmentFileByURL(body, returnShipmentId)

Attach a file to a returnShipment by URL.

Adds a file to an existing returnShipment by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var returnShipmentId = 56; // Number | Id of the returnShipment to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnShipmentFileByURL(body, returnShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **returnShipmentId** | **Number**| Id of the returnShipment to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnShipmentTag"></a>
# **addReturnShipmentTag**
> addReturnShipmentTag(returnShipmentId, returnShipmentTag)

Add new tags for a returnShipment.

Adds a tag to an existing returnShipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to add a tag to

var returnShipmentTag = "returnShipmentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnShipmentTag(returnShipmentId, returnShipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to add a tag to | 
 **returnShipmentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReturnShipmentFile"></a>
# **deleteReturnShipmentFile**
> deleteReturnShipmentFile(returnShipmentId, fileId)

Delete a file for a returnShipment.

Deletes an existing returnShipment file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnShipmentFile(returnShipmentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteReturnShipmentTag"></a>
# **deleteReturnShipmentTag**
> deleteReturnShipmentTag(returnShipmentId, returnShipmentTag)

Delete a tag for a returnShipment.

Deletes an existing returnShipment tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to remove tag from

var returnShipmentTag = "returnShipmentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnShipmentTag(returnShipmentId, returnShipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to remove tag from | 
 **returnShipmentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateReturnShipmentById"></a>
# **getDuplicateReturnShipmentById**
> ReturnShipment getDuplicateReturnShipmentById(returnShipmentId)

Get a duplicated a returnShipment by id

Returns a duplicated returnShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateReturnShipmentById(returnShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to be duplicated. | 

### Return type

[**ReturnShipment**](ReturnShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnShipmentByFilter"></a>
# **getReturnShipmentByFilter**
> [ReturnShipment] getReturnShipmentByFilter(opts)

Search returnShipments by filter

Returns the list of returnShipments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

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
apiInstance.getReturnShipmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReturnShipment]**](ReturnShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnShipmentById"></a>
# **getReturnShipmentById**
> ReturnShipment getReturnShipmentById(returnShipmentId)

Get a returnShipment by id

Returns the returnShipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReturnShipmentById(returnShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to be returned. | 

### Return type

[**ReturnShipment**](ReturnShipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnShipmentFiles"></a>
# **getReturnShipmentFiles**
> getReturnShipmentFiles(returnShipmentId)

Get the files for a returnShipment.

Get all existing returnShipment files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnShipmentFiles(returnShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnShipmentTags"></a>
# **getReturnShipmentTags**
> getReturnShipmentTags(returnShipmentId)

Get the tags for a returnShipment.

Get all existing returnShipment tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var returnShipmentId = 56; // Number | Id of the returnShipment to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnShipmentTags(returnShipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnShipmentId** | **Number**| Id of the returnShipment to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReturnShipmentCustomFields"></a>
# **updateReturnShipmentCustomFields**
> updateReturnShipmentCustomFields(body)

Update a returnShipment custom fields

Updates an existing returnShipment custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnShipmentApi();

var body = new infoplus.ReturnShipment(); // ReturnShipment | ReturnShipment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReturnShipmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReturnShipment**](ReturnShipment.md)| ReturnShipment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

