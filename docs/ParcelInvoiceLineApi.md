# infoplus.ParcelInvoiceLineApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addParcelInvoiceLineAudit**](ParcelInvoiceLineApi.md#addParcelInvoiceLineAudit) | **PUT** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/audit/{parcelInvoiceLineAudit} | Add new audit for a parcelInvoiceLine
[**addParcelInvoiceLineFile**](ParcelInvoiceLineApi.md#addParcelInvoiceLineFile) | **POST** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/file/{fileName} | Attach a file to a parcelInvoiceLine
[**addParcelInvoiceLineFileByURL**](ParcelInvoiceLineApi.md#addParcelInvoiceLineFileByURL) | **POST** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/file | Attach a file to a parcelInvoiceLine by URL.
[**addParcelInvoiceLineTag**](ParcelInvoiceLineApi.md#addParcelInvoiceLineTag) | **PUT** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag/{parcelInvoiceLineTag} | Add new tags for a parcelInvoiceLine.
[**deleteParcelInvoiceLineFile**](ParcelInvoiceLineApi.md#deleteParcelInvoiceLineFile) | **DELETE** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/file/{fileId} | Delete a file for a parcelInvoiceLine.
[**deleteParcelInvoiceLineTag**](ParcelInvoiceLineApi.md#deleteParcelInvoiceLineTag) | **DELETE** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag/{parcelInvoiceLineTag} | Delete a tag for a parcelInvoiceLine.
[**getDuplicateParcelInvoiceLineById**](ParcelInvoiceLineApi.md#getDuplicateParcelInvoiceLineById) | **GET** /beta/parcelInvoiceLine/duplicate/{parcelInvoiceLineId} | Get a duplicated a parcelInvoiceLine by id
[**getParcelInvoiceLineByFilter**](ParcelInvoiceLineApi.md#getParcelInvoiceLineByFilter) | **GET** /beta/parcelInvoiceLine/search | Search parcelInvoiceLines by filter
[**getParcelInvoiceLineById**](ParcelInvoiceLineApi.md#getParcelInvoiceLineById) | **GET** /beta/parcelInvoiceLine/{parcelInvoiceLineId} | Get a parcelInvoiceLine by id
[**getParcelInvoiceLineFiles**](ParcelInvoiceLineApi.md#getParcelInvoiceLineFiles) | **GET** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/file | Get the files for a parcelInvoiceLine.
[**getParcelInvoiceLineTags**](ParcelInvoiceLineApi.md#getParcelInvoiceLineTags) | **GET** /beta/parcelInvoiceLine/{parcelInvoiceLineId}/tag | Get the tags for a parcelInvoiceLine.
[**updateParcelInvoiceLine**](ParcelInvoiceLineApi.md#updateParcelInvoiceLine) | **PUT** /beta/parcelInvoiceLine | Update a parcelInvoiceLine


<a name="addParcelInvoiceLineAudit"></a>
# **addParcelInvoiceLineAudit**
> addParcelInvoiceLineAudit(parcelInvoiceLineId, parcelInvoiceLineAudit)

Add new audit for a parcelInvoiceLine

Adds an audit to an existing parcelInvoiceLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to add an audit to

var parcelInvoiceLineAudit = "parcelInvoiceLineAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelInvoiceLineAudit(parcelInvoiceLineId, parcelInvoiceLineAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to add an audit to | 
 **parcelInvoiceLineAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addParcelInvoiceLineFile"></a>
# **addParcelInvoiceLineFile**
> addParcelInvoiceLineFile(parcelInvoiceLineId, fileName)

Attach a file to a parcelInvoiceLine

Adds a file to an existing parcelInvoiceLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelInvoiceLineFile(parcelInvoiceLineId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addParcelInvoiceLineFileByURL"></a>
# **addParcelInvoiceLineFileByURL**
> addParcelInvoiceLineFileByURL(body, parcelInvoiceLineId)

Attach a file to a parcelInvoiceLine by URL.

Adds a file to an existing parcelInvoiceLine by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelInvoiceLineFileByURL(body, parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addParcelInvoiceLineTag"></a>
# **addParcelInvoiceLineTag**
> addParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag)

Add new tags for a parcelInvoiceLine.

Adds a tag to an existing parcelInvoiceLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to add a tag to

var parcelInvoiceLineTag = "parcelInvoiceLineTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to add a tag to | 
 **parcelInvoiceLineTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteParcelInvoiceLineFile"></a>
# **deleteParcelInvoiceLineFile**
> deleteParcelInvoiceLineFile(parcelInvoiceLineId, fileId)

Delete a file for a parcelInvoiceLine.

Deletes an existing parcelInvoiceLine file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteParcelInvoiceLineFile(parcelInvoiceLineId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteParcelInvoiceLineTag"></a>
# **deleteParcelInvoiceLineTag**
> deleteParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag)

Delete a tag for a parcelInvoiceLine.

Deletes an existing parcelInvoiceLine tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to remove tag from

var parcelInvoiceLineTag = "parcelInvoiceLineTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteParcelInvoiceLineTag(parcelInvoiceLineId, parcelInvoiceLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to remove tag from | 
 **parcelInvoiceLineTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateParcelInvoiceLineById"></a>
# **getDuplicateParcelInvoiceLineById**
> ParcelInvoiceLine getDuplicateParcelInvoiceLineById(parcelInvoiceLineId)

Get a duplicated a parcelInvoiceLine by id

Returns a duplicated parcelInvoiceLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateParcelInvoiceLineById(parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to be duplicated. | 

### Return type

[**ParcelInvoiceLine**](ParcelInvoiceLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceLineByFilter"></a>
# **getParcelInvoiceLineByFilter**
> [ParcelInvoiceLine] getParcelInvoiceLineByFilter(opts)

Search parcelInvoiceLines by filter

Returns the list of parcelInvoiceLines that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

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
apiInstance.getParcelInvoiceLineByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ParcelInvoiceLine]**](ParcelInvoiceLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceLineById"></a>
# **getParcelInvoiceLineById**
> ParcelInvoiceLine getParcelInvoiceLineById(parcelInvoiceLineId)

Get a parcelInvoiceLine by id

Returns the parcelInvoiceLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getParcelInvoiceLineById(parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to be returned. | 

### Return type

[**ParcelInvoiceLine**](ParcelInvoiceLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceLineFiles"></a>
# **getParcelInvoiceLineFiles**
> getParcelInvoiceLineFiles(parcelInvoiceLineId)

Get the files for a parcelInvoiceLine.

Get all existing parcelInvoiceLine files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getParcelInvoiceLineFiles(parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelInvoiceLineTags"></a>
# **getParcelInvoiceLineTags**
> getParcelInvoiceLineTags(parcelInvoiceLineId)

Get the tags for a parcelInvoiceLine.

Get all existing parcelInvoiceLine tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var parcelInvoiceLineId = 56; // Number | Id of the parcelInvoiceLine to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getParcelInvoiceLineTags(parcelInvoiceLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelInvoiceLineId** | **Number**| Id of the parcelInvoiceLine to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateParcelInvoiceLine"></a>
# **updateParcelInvoiceLine**
> updateParcelInvoiceLine(body)

Update a parcelInvoiceLine

Updates an existing parcelInvoiceLine using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelInvoiceLineApi();

var body = new infoplus.ParcelInvoiceLine(); // ParcelInvoiceLine | ParcelInvoiceLine to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateParcelInvoiceLine(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelInvoiceLine**](ParcelInvoiceLine.md)| ParcelInvoiceLine to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

