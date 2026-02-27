# infoplus.ReturnOrderLineDetailsApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReturnOrderLineDetailsAudit**](ReturnOrderLineDetailsApi.md#addReturnOrderLineDetailsAudit) | **PUT** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/audit/{returnOrderLineDetailsAudit} | Add new audit for a returnOrderLineDetails
[**addReturnOrderLineDetailsFile**](ReturnOrderLineDetailsApi.md#addReturnOrderLineDetailsFile) | **POST** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/file/{fileName} | Attach a file to a returnOrderLineDetails
[**addReturnOrderLineDetailsFileByURL**](ReturnOrderLineDetailsApi.md#addReturnOrderLineDetailsFileByURL) | **POST** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/file | Attach a file to a returnOrderLineDetails by URL.
[**addReturnOrderLineDetailsTag**](ReturnOrderLineDetailsApi.md#addReturnOrderLineDetailsTag) | **PUT** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/tag/{returnOrderLineDetailsTag} | Add new tags for a returnOrderLineDetails.
[**deleteReturnOrderLineDetailsFile**](ReturnOrderLineDetailsApi.md#deleteReturnOrderLineDetailsFile) | **DELETE** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/file/{fileId} | Delete a file for a returnOrderLineDetails.
[**deleteReturnOrderLineDetailsTag**](ReturnOrderLineDetailsApi.md#deleteReturnOrderLineDetailsTag) | **DELETE** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/tag/{returnOrderLineDetailsTag} | Delete a tag for a returnOrderLineDetails.
[**getDuplicateReturnOrderLineDetailsById**](ReturnOrderLineDetailsApi.md#getDuplicateReturnOrderLineDetailsById) | **GET** /beta/returnOrderLineDetails/duplicate/{returnOrderLineDetailsId} | Get a duplicated a returnOrderLineDetails by id
[**getReturnOrderLineDetailsByFilter**](ReturnOrderLineDetailsApi.md#getReturnOrderLineDetailsByFilter) | **GET** /beta/returnOrderLineDetails/search | Search returnOrderLineDetailses by filter
[**getReturnOrderLineDetailsById**](ReturnOrderLineDetailsApi.md#getReturnOrderLineDetailsById) | **GET** /beta/returnOrderLineDetails/{returnOrderLineDetailsId} | Get a returnOrderLineDetails by id
[**getReturnOrderLineDetailsFiles**](ReturnOrderLineDetailsApi.md#getReturnOrderLineDetailsFiles) | **GET** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/file | Get the files for a returnOrderLineDetails.
[**getReturnOrderLineDetailsTags**](ReturnOrderLineDetailsApi.md#getReturnOrderLineDetailsTags) | **GET** /beta/returnOrderLineDetails/{returnOrderLineDetailsId}/tag | Get the tags for a returnOrderLineDetails.
[**updateReturnOrderLineDetailsCustomFields**](ReturnOrderLineDetailsApi.md#updateReturnOrderLineDetailsCustomFields) | **PUT** /beta/returnOrderLineDetails/customFields | Update a returnOrderLineDetails custom fields


<a name="addReturnOrderLineDetailsAudit"></a>
# **addReturnOrderLineDetailsAudit**
> addReturnOrderLineDetailsAudit(returnOrderLineDetailsId, returnOrderLineDetailsAudit)

Add new audit for a returnOrderLineDetails

Adds an audit to an existing returnOrderLineDetails.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to add an audit to

var returnOrderLineDetailsAudit = "returnOrderLineDetailsAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineDetailsAudit(returnOrderLineDetailsId, returnOrderLineDetailsAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to add an audit to | 
 **returnOrderLineDetailsAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnOrderLineDetailsFile"></a>
# **addReturnOrderLineDetailsFile**
> addReturnOrderLineDetailsFile(returnOrderLineDetailsId, fileName)

Attach a file to a returnOrderLineDetails

Adds a file to an existing returnOrderLineDetails.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineDetailsFile(returnOrderLineDetailsId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addReturnOrderLineDetailsFileByURL"></a>
# **addReturnOrderLineDetailsFileByURL**
> addReturnOrderLineDetailsFileByURL(body, returnOrderLineDetailsId)

Attach a file to a returnOrderLineDetails by URL.

Adds a file to an existing returnOrderLineDetails by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineDetailsFileByURL(body, returnOrderLineDetailsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReturnOrderLineDetailsTag"></a>
# **addReturnOrderLineDetailsTag**
> addReturnOrderLineDetailsTag(returnOrderLineDetailsId, returnOrderLineDetailsTag)

Add new tags for a returnOrderLineDetails.

Adds a tag to an existing returnOrderLineDetails.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to add a tag to

var returnOrderLineDetailsTag = "returnOrderLineDetailsTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReturnOrderLineDetailsTag(returnOrderLineDetailsId, returnOrderLineDetailsTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to add a tag to | 
 **returnOrderLineDetailsTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReturnOrderLineDetailsFile"></a>
# **deleteReturnOrderLineDetailsFile**
> deleteReturnOrderLineDetailsFile(returnOrderLineDetailsId, fileId)

Delete a file for a returnOrderLineDetails.

Deletes an existing returnOrderLineDetails file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnOrderLineDetailsFile(returnOrderLineDetailsId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteReturnOrderLineDetailsTag"></a>
# **deleteReturnOrderLineDetailsTag**
> deleteReturnOrderLineDetailsTag(returnOrderLineDetailsId, returnOrderLineDetailsTag)

Delete a tag for a returnOrderLineDetails.

Deletes an existing returnOrderLineDetails tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to remove tag from

var returnOrderLineDetailsTag = "returnOrderLineDetailsTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReturnOrderLineDetailsTag(returnOrderLineDetailsId, returnOrderLineDetailsTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to remove tag from | 
 **returnOrderLineDetailsTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateReturnOrderLineDetailsById"></a>
# **getDuplicateReturnOrderLineDetailsById**
> ReturnOrderLineDetails getDuplicateReturnOrderLineDetailsById(returnOrderLineDetailsId)

Get a duplicated a returnOrderLineDetails by id

Returns a duplicated returnOrderLineDetails identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateReturnOrderLineDetailsById(returnOrderLineDetailsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to be duplicated. | 

### Return type

[**ReturnOrderLineDetails**](ReturnOrderLineDetails.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineDetailsByFilter"></a>
# **getReturnOrderLineDetailsByFilter**
> [ReturnOrderLineDetails] getReturnOrderLineDetailsByFilter(opts)

Search returnOrderLineDetailses by filter

Returns the list of returnOrderLineDetailses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

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
apiInstance.getReturnOrderLineDetailsByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReturnOrderLineDetails]**](ReturnOrderLineDetails.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineDetailsById"></a>
# **getReturnOrderLineDetailsById**
> ReturnOrderLineDetails getReturnOrderLineDetailsById(returnOrderLineDetailsId)

Get a returnOrderLineDetails by id

Returns the returnOrderLineDetails identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReturnOrderLineDetailsById(returnOrderLineDetailsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to be returned. | 

### Return type

[**ReturnOrderLineDetails**](ReturnOrderLineDetails.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineDetailsFiles"></a>
# **getReturnOrderLineDetailsFiles**
> getReturnOrderLineDetailsFiles(returnOrderLineDetailsId)

Get the files for a returnOrderLineDetails.

Get all existing returnOrderLineDetails files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnOrderLineDetailsFiles(returnOrderLineDetailsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturnOrderLineDetailsTags"></a>
# **getReturnOrderLineDetailsTags**
> getReturnOrderLineDetailsTags(returnOrderLineDetailsId)

Get the tags for a returnOrderLineDetails.

Get all existing returnOrderLineDetails tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var returnOrderLineDetailsId = 56; // Number | Id of the returnOrderLineDetails to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReturnOrderLineDetailsTags(returnOrderLineDetailsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnOrderLineDetailsId** | **Number**| Id of the returnOrderLineDetails to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReturnOrderLineDetailsCustomFields"></a>
# **updateReturnOrderLineDetailsCustomFields**
> updateReturnOrderLineDetailsCustomFields(body)

Update a returnOrderLineDetails custom fields

Updates an existing returnOrderLineDetails custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReturnOrderLineDetailsApi();

var body = new infoplus.ReturnOrderLineDetails(); // ReturnOrderLineDetails | ReturnOrderLineDetails to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReturnOrderLineDetailsCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReturnOrderLineDetails**](ReturnOrderLineDetails.md)| ReturnOrderLineDetails to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

