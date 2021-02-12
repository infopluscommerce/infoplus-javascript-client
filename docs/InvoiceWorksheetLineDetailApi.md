# infoplus.InvoiceWorksheetLineDetailApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInvoiceWorksheetLineDetailAudit**](InvoiceWorksheetLineDetailApi.md#addInvoiceWorksheetLineDetailAudit) | **PUT** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/audit/{invoiceWorksheetLineDetailAudit} | Add new audit for an invoiceWorksheetLineDetail
[**addInvoiceWorksheetLineDetailFile**](InvoiceWorksheetLineDetailApi.md#addInvoiceWorksheetLineDetailFile) | **POST** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/file/{fileName} | Attach a file to an invoiceWorksheetLineDetail
[**addInvoiceWorksheetLineDetailFileByURL**](InvoiceWorksheetLineDetailApi.md#addInvoiceWorksheetLineDetailFileByURL) | **POST** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/file | Attach a file to an invoiceWorksheetLineDetail by URL.
[**addInvoiceWorksheetLineDetailTag**](InvoiceWorksheetLineDetailApi.md#addInvoiceWorksheetLineDetailTag) | **PUT** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/tag/{invoiceWorksheetLineDetailTag} | Add new tags for an invoiceWorksheetLineDetail.
[**deleteInvoiceWorksheetLineDetailFile**](InvoiceWorksheetLineDetailApi.md#deleteInvoiceWorksheetLineDetailFile) | **DELETE** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/file/{fileId} | Delete a file for an invoiceWorksheetLineDetail.
[**deleteInvoiceWorksheetLineDetailTag**](InvoiceWorksheetLineDetailApi.md#deleteInvoiceWorksheetLineDetailTag) | **DELETE** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/tag/{invoiceWorksheetLineDetailTag} | Delete a tag for an invoiceWorksheetLineDetail.
[**getDuplicateInvoiceWorksheetLineDetailById**](InvoiceWorksheetLineDetailApi.md#getDuplicateInvoiceWorksheetLineDetailById) | **GET** /beta/invoiceWorksheetLineDetail/duplicate/{invoiceWorksheetLineDetailId} | Get a duplicated an invoiceWorksheetLineDetail by id
[**getInvoiceWorksheetLineDetailByFilter**](InvoiceWorksheetLineDetailApi.md#getInvoiceWorksheetLineDetailByFilter) | **GET** /beta/invoiceWorksheetLineDetail/search | Search invoiceWorksheetLineDetails by filter
[**getInvoiceWorksheetLineDetailById**](InvoiceWorksheetLineDetailApi.md#getInvoiceWorksheetLineDetailById) | **GET** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId} | Get an invoiceWorksheetLineDetail by id
[**getInvoiceWorksheetLineDetailFiles**](InvoiceWorksheetLineDetailApi.md#getInvoiceWorksheetLineDetailFiles) | **GET** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/file | Get the files for an invoiceWorksheetLineDetail.
[**getInvoiceWorksheetLineDetailTags**](InvoiceWorksheetLineDetailApi.md#getInvoiceWorksheetLineDetailTags) | **GET** /beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/tag | Get the tags for an invoiceWorksheetLineDetail.
[**updateInvoiceWorksheetLineDetailCustomFields**](InvoiceWorksheetLineDetailApi.md#updateInvoiceWorksheetLineDetailCustomFields) | **PUT** /beta/invoiceWorksheetLineDetail/customFields | Update an invoiceWorksheetLineDetail custom fields


<a name="addInvoiceWorksheetLineDetailAudit"></a>
# **addInvoiceWorksheetLineDetailAudit**
> addInvoiceWorksheetLineDetailAudit(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailAudit)

Add new audit for an invoiceWorksheetLineDetail

Adds an audit to an existing invoiceWorksheetLineDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to add an audit to

var invoiceWorksheetLineDetailAudit = "invoiceWorksheetLineDetailAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInvoiceWorksheetLineDetailAudit(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to add an audit to | 
 **invoiceWorksheetLineDetailAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInvoiceWorksheetLineDetailFile"></a>
# **addInvoiceWorksheetLineDetailFile**
> addInvoiceWorksheetLineDetailFile(invoiceWorksheetLineDetailId, fileName)

Attach a file to an invoiceWorksheetLineDetail

Adds a file to an existing invoiceWorksheetLineDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInvoiceWorksheetLineDetailFile(invoiceWorksheetLineDetailId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addInvoiceWorksheetLineDetailFileByURL"></a>
# **addInvoiceWorksheetLineDetailFileByURL**
> addInvoiceWorksheetLineDetailFileByURL(body, invoiceWorksheetLineDetailId)

Attach a file to an invoiceWorksheetLineDetail by URL.

Adds a file to an existing invoiceWorksheetLineDetail by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInvoiceWorksheetLineDetailFileByURL(body, invoiceWorksheetLineDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInvoiceWorksheetLineDetailTag"></a>
# **addInvoiceWorksheetLineDetailTag**
> addInvoiceWorksheetLineDetailTag(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailTag)

Add new tags for an invoiceWorksheetLineDetail.

Adds a tag to an existing invoiceWorksheetLineDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to add a tag to

var invoiceWorksheetLineDetailTag = "invoiceWorksheetLineDetailTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInvoiceWorksheetLineDetailTag(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to add a tag to | 
 **invoiceWorksheetLineDetailTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInvoiceWorksheetLineDetailFile"></a>
# **deleteInvoiceWorksheetLineDetailFile**
> deleteInvoiceWorksheetLineDetailFile(invoiceWorksheetLineDetailId, fileId)

Delete a file for an invoiceWorksheetLineDetail.

Deletes an existing invoiceWorksheetLineDetail file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInvoiceWorksheetLineDetailFile(invoiceWorksheetLineDetailId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInvoiceWorksheetLineDetailTag"></a>
# **deleteInvoiceWorksheetLineDetailTag**
> deleteInvoiceWorksheetLineDetailTag(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailTag)

Delete a tag for an invoiceWorksheetLineDetail.

Deletes an existing invoiceWorksheetLineDetail tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to remove tag from

var invoiceWorksheetLineDetailTag = "invoiceWorksheetLineDetailTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInvoiceWorksheetLineDetailTag(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to remove tag from | 
 **invoiceWorksheetLineDetailTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInvoiceWorksheetLineDetailById"></a>
# **getDuplicateInvoiceWorksheetLineDetailById**
> InvoiceWorksheetLineDetail getDuplicateInvoiceWorksheetLineDetailById(invoiceWorksheetLineDetailId)

Get a duplicated an invoiceWorksheetLineDetail by id

Returns a duplicated invoiceWorksheetLineDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateInvoiceWorksheetLineDetailById(invoiceWorksheetLineDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to be duplicated. | 

### Return type

[**InvoiceWorksheetLineDetail**](InvoiceWorksheetLineDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetLineDetailByFilter"></a>
# **getInvoiceWorksheetLineDetailByFilter**
> [InvoiceWorksheetLineDetail] getInvoiceWorksheetLineDetailByFilter(opts)

Search invoiceWorksheetLineDetails by filter

Returns the list of invoiceWorksheetLineDetails that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

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
apiInstance.getInvoiceWorksheetLineDetailByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InvoiceWorksheetLineDetail]**](InvoiceWorksheetLineDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetLineDetailById"></a>
# **getInvoiceWorksheetLineDetailById**
> InvoiceWorksheetLineDetail getInvoiceWorksheetLineDetailById(invoiceWorksheetLineDetailId)

Get an invoiceWorksheetLineDetail by id

Returns the invoiceWorksheetLineDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoiceWorksheetLineDetailById(invoiceWorksheetLineDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to be returned. | 

### Return type

[**InvoiceWorksheetLineDetail**](InvoiceWorksheetLineDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetLineDetailFiles"></a>
# **getInvoiceWorksheetLineDetailFiles**
> getInvoiceWorksheetLineDetailFiles(invoiceWorksheetLineDetailId)

Get the files for an invoiceWorksheetLineDetail.

Get all existing invoiceWorksheetLineDetail files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInvoiceWorksheetLineDetailFiles(invoiceWorksheetLineDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetLineDetailTags"></a>
# **getInvoiceWorksheetLineDetailTags**
> getInvoiceWorksheetLineDetailTags(invoiceWorksheetLineDetailId)

Get the tags for an invoiceWorksheetLineDetail.

Get all existing invoiceWorksheetLineDetail tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var invoiceWorksheetLineDetailId = 56; // Number | Id of the invoiceWorksheetLineDetail to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInvoiceWorksheetLineDetailTags(invoiceWorksheetLineDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineDetailId** | **Number**| Id of the invoiceWorksheetLineDetail to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInvoiceWorksheetLineDetailCustomFields"></a>
# **updateInvoiceWorksheetLineDetailCustomFields**
> updateInvoiceWorksheetLineDetailCustomFields(body)

Update an invoiceWorksheetLineDetail custom fields

Updates an existing invoiceWorksheetLineDetail custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetLineDetailApi();

var body = new infoplus.InvoiceWorksheetLineDetail(); // InvoiceWorksheetLineDetail | InvoiceWorksheetLineDetail to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInvoiceWorksheetLineDetailCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvoiceWorksheetLineDetail**](InvoiceWorksheetLineDetail.md)| InvoiceWorksheetLineDetail to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

