# infoplus.ReturnOrderLineApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReturnOrderLineAudit**](ReturnOrderLineApi.md#addReturnOrderLineAudit) | **PUT** /beta/returnOrderLine/{returnOrderLineId}/audit/{returnOrderLineAudit} | Add new audit for a returnOrderLine
[**addReturnOrderLineFile**](ReturnOrderLineApi.md#addReturnOrderLineFile) | **POST** /beta/returnOrderLine/{returnOrderLineId}/file/{fileName} | Attach a file to a returnOrderLine
[**addReturnOrderLineFileByURL**](ReturnOrderLineApi.md#addReturnOrderLineFileByURL) | **POST** /beta/returnOrderLine/{returnOrderLineId}/file | Attach a file to a returnOrderLine by URL.
[**addReturnOrderLineTag**](ReturnOrderLineApi.md#addReturnOrderLineTag) | **PUT** /beta/returnOrderLine/{returnOrderLineId}/tag/{returnOrderLineTag} | Add new tags for a returnOrderLine.
[**deleteReturnOrderLineFile**](ReturnOrderLineApi.md#deleteReturnOrderLineFile) | **DELETE** /beta/returnOrderLine/{returnOrderLineId}/file/{fileId} | Delete a file for a returnOrderLine.
[**deleteReturnOrderLineTag**](ReturnOrderLineApi.md#deleteReturnOrderLineTag) | **DELETE** /beta/returnOrderLine/{returnOrderLineId}/tag/{returnOrderLineTag} | Delete a tag for a returnOrderLine.
[**getDuplicateReturnOrderLineById**](ReturnOrderLineApi.md#getDuplicateReturnOrderLineById) | **GET** /beta/returnOrderLine/duplicate/{returnOrderLineId} | Get a duplicated a returnOrderLine by id
[**getReturnOrderLineByFilter**](ReturnOrderLineApi.md#getReturnOrderLineByFilter) | **GET** /beta/returnOrderLine/search | Search returnOrderLines by filter
[**getReturnOrderLineById**](ReturnOrderLineApi.md#getReturnOrderLineById) | **GET** /beta/returnOrderLine/{returnOrderLineId} | Get a returnOrderLine by id
[**getReturnOrderLineFiles**](ReturnOrderLineApi.md#getReturnOrderLineFiles) | **GET** /beta/returnOrderLine/{returnOrderLineId}/file | Get the files for a returnOrderLine.
[**getReturnOrderLineTags**](ReturnOrderLineApi.md#getReturnOrderLineTags) | **GET** /beta/returnOrderLine/{returnOrderLineId}/tag | Get the tags for a returnOrderLine.
[**updateReturnOrderLineCustomFields**](ReturnOrderLineApi.md#updateReturnOrderLineCustomFields) | **PUT** /beta/returnOrderLine/customFields | Update a returnOrderLine custom fields


<a name="addReturnOrderLineAudit"></a>
# **addReturnOrderLineAudit**
> addReturnOrderLineAudit(returnOrderLineId, returnOrderLineAudit)

Add new audit for a returnOrderLine

Adds an audit to an existing returnOrderLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to add an audit to

var returnOrderLineAudit = "returnOrderLineAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineAudit(returnOrderLineId, returnOrderLineAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to add an audit to | 
 **returnOrderLineAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnOrderLineFile"></a>
# **addReturnOrderLineFile**
> addReturnOrderLineFile(returnOrderLineId, fileName)

Attach a file to a returnOrderLine

Adds a file to an existing returnOrderLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineFile(returnOrderLineId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addReturnOrderLineFileByURL"></a>
# **addReturnOrderLineFileByURL**
> addReturnOrderLineFileByURL(body, returnOrderLineId)

Attach a file to a returnOrderLine by URL.

Adds a file to an existing returnOrderLine by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineFileByURL(body, returnOrderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnOrderLineTag"></a>
# **addReturnOrderLineTag**
> addReturnOrderLineTag(returnOrderLineId, returnOrderLineTag)

Add new tags for a returnOrderLine.

Adds a tag to an existing returnOrderLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to add a tag to

var returnOrderLineTag = "returnOrderLineTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineTag(returnOrderLineId, returnOrderLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to add a tag to | 
 **returnOrderLineTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReturnOrderLineFile"></a>
# **deleteReturnOrderLineFile**
> deleteReturnOrderLineFile(returnOrderLineId, fileId)

Delete a file for a returnOrderLine.

Deletes an existing returnOrderLine file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnOrderLineFile(returnOrderLineId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteReturnOrderLineTag"></a>
# **deleteReturnOrderLineTag**
> deleteReturnOrderLineTag(returnOrderLineId, returnOrderLineTag)

Delete a tag for a returnOrderLine.

Deletes an existing returnOrderLine tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to remove tag from

var returnOrderLineTag = "returnOrderLineTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnOrderLineTag(returnOrderLineId, returnOrderLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to remove tag from | 
 **returnOrderLineTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateReturnOrderLineById"></a>
# **getDuplicateReturnOrderLineById**
> ReturnOrderLine getDuplicateReturnOrderLineById(returnOrderLineId)

Get a duplicated a returnOrderLine by id

Returns a duplicated returnOrderLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateReturnOrderLineById(returnOrderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to be duplicated. | 

### Return type

[**ReturnOrderLine**](ReturnOrderLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineByFilter"></a>
# **getReturnOrderLineByFilter**
> [ReturnOrderLine] getReturnOrderLineByFilter(opts)

Search returnOrderLines by filter

Returns the list of returnOrderLines that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

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
apiInstance.getReturnOrderLineByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReturnOrderLine]**](ReturnOrderLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineById"></a>
# **getReturnOrderLineById**
> ReturnOrderLine getReturnOrderLineById(returnOrderLineId)

Get a returnOrderLine by id

Returns the returnOrderLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReturnOrderLineById(returnOrderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to be returned. | 

### Return type

[**ReturnOrderLine**](ReturnOrderLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineFiles"></a>
# **getReturnOrderLineFiles**
> getReturnOrderLineFiles(returnOrderLineId)

Get the files for a returnOrderLine.

Get all existing returnOrderLine files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnOrderLineFiles(returnOrderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineTags"></a>
# **getReturnOrderLineTags**
> getReturnOrderLineTags(returnOrderLineId)

Get the tags for a returnOrderLine.

Get all existing returnOrderLine tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var returnOrderLineId = 56; // Number | Id of the returnOrderLine to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnOrderLineTags(returnOrderLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineId** | **Number**| Id of the returnOrderLine to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReturnOrderLineCustomFields"></a>
# **updateReturnOrderLineCustomFields**
> updateReturnOrderLineCustomFields(body)

Update a returnOrderLine custom fields

Updates an existing returnOrderLine custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineApi();

var body = new infoplus.ReturnOrderLine(); // ReturnOrderLine | ReturnOrderLine to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReturnOrderLineCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReturnOrderLine**](ReturnOrderLine.md)| ReturnOrderLine to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

