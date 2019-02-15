# infoplus.InvoiceWorksheetApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInvoiceWorksheet**](InvoiceWorksheetApi.md#addInvoiceWorksheet) | **POST** /beta/invoiceWorksheet | Create an invoiceWorksheet
[**addInvoiceWorksheetAudit**](InvoiceWorksheetApi.md#addInvoiceWorksheetAudit) | **PUT** /beta/invoiceWorksheet/{invoiceWorksheetId}/audit/{invoiceWorksheetAudit} | Add new audit for an invoiceWorksheet
[**addInvoiceWorksheetTag**](InvoiceWorksheetApi.md#addInvoiceWorksheetTag) | **PUT** /beta/invoiceWorksheet/{invoiceWorksheetId}/tag/{invoiceWorksheetTag} | Add new tags for an invoiceWorksheet.
[**deleteInvoiceWorksheet**](InvoiceWorksheetApi.md#deleteInvoiceWorksheet) | **DELETE** /beta/invoiceWorksheet/{invoiceWorksheetId} | Delete an invoiceWorksheet
[**deleteInvoiceWorksheetTag**](InvoiceWorksheetApi.md#deleteInvoiceWorksheetTag) | **DELETE** /beta/invoiceWorksheet/{invoiceWorksheetId}/tag/{invoiceWorksheetTag} | Delete a tag for an invoiceWorksheet.
[**getDuplicateInvoiceWorksheetById**](InvoiceWorksheetApi.md#getDuplicateInvoiceWorksheetById) | **GET** /beta/invoiceWorksheet/duplicate/{invoiceWorksheetId} | Get a duplicated an invoiceWorksheet by id
[**getInvoiceWorksheetByFilter**](InvoiceWorksheetApi.md#getInvoiceWorksheetByFilter) | **GET** /beta/invoiceWorksheet/search | Search invoiceWorksheets by filter
[**getInvoiceWorksheetById**](InvoiceWorksheetApi.md#getInvoiceWorksheetById) | **GET** /beta/invoiceWorksheet/{invoiceWorksheetId} | Get an invoiceWorksheet by id
[**getInvoiceWorksheetTags**](InvoiceWorksheetApi.md#getInvoiceWorksheetTags) | **GET** /beta/invoiceWorksheet/{invoiceWorksheetId}/tag | Get the tags for an invoiceWorksheet.
[**updateInvoiceWorksheet**](InvoiceWorksheetApi.md#updateInvoiceWorksheet) | **PUT** /beta/invoiceWorksheet | Update an invoiceWorksheet


<a name="addInvoiceWorksheet"></a>
# **addInvoiceWorksheet**
> InvoiceWorksheet addInvoiceWorksheet(body)

Create an invoiceWorksheet

Inserts a new invoiceWorksheet using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var body = new infoplus.InvoiceWorksheet(); // InvoiceWorksheet | InvoiceWorksheet to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInvoiceWorksheet(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvoiceWorksheet**](InvoiceWorksheet.md)| InvoiceWorksheet to be inserted. | 

### Return type

[**InvoiceWorksheet**](InvoiceWorksheet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInvoiceWorksheetAudit"></a>
# **addInvoiceWorksheetAudit**
> addInvoiceWorksheetAudit(invoiceWorksheetId, invoiceWorksheetAudit)

Add new audit for an invoiceWorksheet

Adds an audit to an existing invoiceWorksheet.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var invoiceWorksheetId = 56; // Number | Id of the invoiceWorksheet to add an audit to

var invoiceWorksheetAudit = "invoiceWorksheetAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInvoiceWorksheetAudit(invoiceWorksheetId, invoiceWorksheetAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetId** | **Number**| Id of the invoiceWorksheet to add an audit to | 
 **invoiceWorksheetAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInvoiceWorksheetTag"></a>
# **addInvoiceWorksheetTag**
> addInvoiceWorksheetTag(invoiceWorksheetId, invoiceWorksheetTag)

Add new tags for an invoiceWorksheet.

Adds a tag to an existing invoiceWorksheet.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var invoiceWorksheetId = 56; // Number | Id of the invoiceWorksheet to add a tag to

var invoiceWorksheetTag = "invoiceWorksheetTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addInvoiceWorksheetTag(invoiceWorksheetId, invoiceWorksheetTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetId** | **Number**| Id of the invoiceWorksheet to add a tag to | 
 **invoiceWorksheetTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInvoiceWorksheet"></a>
# **deleteInvoiceWorksheet**
> deleteInvoiceWorksheet(invoiceWorksheetId)

Delete an invoiceWorksheet

Deletes the invoiceWorksheet identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var invoiceWorksheetId = 56; // Number | Id of the invoiceWorksheet to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInvoiceWorksheet(invoiceWorksheetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetId** | **Number**| Id of the invoiceWorksheet to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInvoiceWorksheetTag"></a>
# **deleteInvoiceWorksheetTag**
> deleteInvoiceWorksheetTag(invoiceWorksheetId, invoiceWorksheetTag)

Delete a tag for an invoiceWorksheet.

Deletes an existing invoiceWorksheet tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var invoiceWorksheetId = 56; // Number | Id of the invoiceWorksheet to remove tag from

var invoiceWorksheetTag = "invoiceWorksheetTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInvoiceWorksheetTag(invoiceWorksheetId, invoiceWorksheetTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetId** | **Number**| Id of the invoiceWorksheet to remove tag from | 
 **invoiceWorksheetTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInvoiceWorksheetById"></a>
# **getDuplicateInvoiceWorksheetById**
> InvoiceWorksheet getDuplicateInvoiceWorksheetById(invoiceWorksheetId)

Get a duplicated an invoiceWorksheet by id

Returns a duplicated invoiceWorksheet identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var invoiceWorksheetId = 56; // Number | Id of the invoiceWorksheet to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateInvoiceWorksheetById(invoiceWorksheetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetId** | **Number**| Id of the invoiceWorksheet to be duplicated. | 

### Return type

[**InvoiceWorksheet**](InvoiceWorksheet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetByFilter"></a>
# **getInvoiceWorksheetByFilter**
> [InvoiceWorksheet] getInvoiceWorksheetByFilter(opts)

Search invoiceWorksheets by filter

Returns the list of invoiceWorksheets that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

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
apiInstance.getInvoiceWorksheetByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InvoiceWorksheet]**](InvoiceWorksheet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetById"></a>
# **getInvoiceWorksheetById**
> InvoiceWorksheet getInvoiceWorksheetById(invoiceWorksheetId)

Get an invoiceWorksheet by id

Returns the invoiceWorksheet identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var invoiceWorksheetId = 56; // Number | Id of the invoiceWorksheet to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoiceWorksheetById(invoiceWorksheetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetId** | **Number**| Id of the invoiceWorksheet to be returned. | 

### Return type

[**InvoiceWorksheet**](InvoiceWorksheet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetTags"></a>
# **getInvoiceWorksheetTags**
> getInvoiceWorksheetTags(invoiceWorksheetId)

Get the tags for an invoiceWorksheet.

Get all existing invoiceWorksheet tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var invoiceWorksheetId = 56; // Number | Id of the invoiceWorksheet to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInvoiceWorksheetTags(invoiceWorksheetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetId** | **Number**| Id of the invoiceWorksheet to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInvoiceWorksheet"></a>
# **updateInvoiceWorksheet**
> updateInvoiceWorksheet(body)

Update an invoiceWorksheet

Updates an existing invoiceWorksheet using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.InvoiceWorksheetApi();

var body = new infoplus.InvoiceWorksheet(); // InvoiceWorksheet | InvoiceWorksheet to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInvoiceWorksheet(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvoiceWorksheet**](InvoiceWorksheet.md)| InvoiceWorksheet to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

