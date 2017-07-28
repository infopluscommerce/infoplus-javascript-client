# infoplus.InvoiceWorksheetLineApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInvoiceWorksheetLine**](InvoiceWorksheetLineApi.md#addInvoiceWorksheetLine) | **POST** /beta/invoiceWorksheetLine | Create an invoiceWorksheetLine
[**addInvoiceWorksheetLineAudit**](InvoiceWorksheetLineApi.md#addInvoiceWorksheetLineAudit) | **PUT** /beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/audit/{invoiceWorksheetLineAudit} | Add new audit for an invoiceWorksheetLine
[**addInvoiceWorksheetLineTag**](InvoiceWorksheetLineApi.md#addInvoiceWorksheetLineTag) | **PUT** /beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/tag/{invoiceWorksheetLineTag} | Add new tags for an invoiceWorksheetLine.
[**deleteInvoiceWorksheetLine**](InvoiceWorksheetLineApi.md#deleteInvoiceWorksheetLine) | **DELETE** /beta/invoiceWorksheetLine/{invoiceWorksheetLineId} | Delete an invoiceWorksheetLine
[**deleteInvoiceWorksheetLineTag**](InvoiceWorksheetLineApi.md#deleteInvoiceWorksheetLineTag) | **DELETE** /beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/tag/{invoiceWorksheetLineTag} | Delete a tag for an invoiceWorksheetLine.
[**getDuplicateInvoiceWorksheetLineById**](InvoiceWorksheetLineApi.md#getDuplicateInvoiceWorksheetLineById) | **GET** /beta/invoiceWorksheetLine/duplicate/{invoiceWorksheetLineId} | Get a duplicated an invoiceWorksheetLine by id
[**getInvoiceWorksheetLineByFilter**](InvoiceWorksheetLineApi.md#getInvoiceWorksheetLineByFilter) | **GET** /beta/invoiceWorksheetLine/search | Search invoiceWorksheetLines by filter
[**getInvoiceWorksheetLineById**](InvoiceWorksheetLineApi.md#getInvoiceWorksheetLineById) | **GET** /beta/invoiceWorksheetLine/{invoiceWorksheetLineId} | Get an invoiceWorksheetLine by id
[**getInvoiceWorksheetLineTags**](InvoiceWorksheetLineApi.md#getInvoiceWorksheetLineTags) | **GET** /beta/invoiceWorksheetLine/{invoiceWorksheetLineId}/tag | Get the tags for an invoiceWorksheetLine.
[**updateInvoiceWorksheetLine**](InvoiceWorksheetLineApi.md#updateInvoiceWorksheetLine) | **PUT** /beta/invoiceWorksheetLine | Update an invoiceWorksheetLine


<a name="addInvoiceWorksheetLine"></a>
# **addInvoiceWorksheetLine**
> InvoiceWorksheetLine addInvoiceWorksheetLine(body)

Create an invoiceWorksheetLine

Inserts a new invoiceWorksheetLine using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var body = new infoplus.InvoiceWorksheetLine(); // {InvoiceWorksheetLine} InvoiceWorksheetLine to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addInvoiceWorksheetLine(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvoiceWorksheetLine**](InvoiceWorksheetLine.md)| InvoiceWorksheetLine to be inserted. | 

### Return type

[**InvoiceWorksheetLine**](InvoiceWorksheetLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInvoiceWorksheetLineAudit"></a>
# **addInvoiceWorksheetLineAudit**
> addInvoiceWorksheetLineAudit(invoiceWorksheetLineId, invoiceWorksheetLineAudit)

Add new audit for an invoiceWorksheetLine

Adds an audit to an existing invoiceWorksheetLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var invoiceWorksheetLineId = 56; // {Integer} Id of the invoiceWorksheetLine to add an audit to

var invoiceWorksheetLineAudit = "invoiceWorksheetLineAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addInvoiceWorksheetLineAudit(invoiceWorksheetLineId, invoiceWorksheetLineAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineId** | **Integer**| Id of the invoiceWorksheetLine to add an audit to | 
 **invoiceWorksheetLineAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInvoiceWorksheetLineTag"></a>
# **addInvoiceWorksheetLineTag**
> addInvoiceWorksheetLineTag(invoiceWorksheetLineId, invoiceWorksheetLineTag)

Add new tags for an invoiceWorksheetLine.

Adds a tag to an existing invoiceWorksheetLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var invoiceWorksheetLineId = 56; // {Integer} Id of the invoiceWorksheetLine to add a tag to

var invoiceWorksheetLineTag = "invoiceWorksheetLineTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addInvoiceWorksheetLineTag(invoiceWorksheetLineId, invoiceWorksheetLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineId** | **Integer**| Id of the invoiceWorksheetLine to add a tag to | 
 **invoiceWorksheetLineTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInvoiceWorksheetLine"></a>
# **deleteInvoiceWorksheetLine**
> deleteInvoiceWorksheetLine(invoiceWorksheetLineId)

Delete an invoiceWorksheetLine

Deletes the invoiceWorksheetLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var invoiceWorksheetLineId = 56; // {Integer} Id of the invoiceWorksheetLine to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteInvoiceWorksheetLine(invoiceWorksheetLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineId** | **Integer**| Id of the invoiceWorksheetLine to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteInvoiceWorksheetLineTag"></a>
# **deleteInvoiceWorksheetLineTag**
> deleteInvoiceWorksheetLineTag(invoiceWorksheetLineId, invoiceWorksheetLineTag)

Delete a tag for an invoiceWorksheetLine.

Deletes an existing invoiceWorksheetLine tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var invoiceWorksheetLineId = 56; // {Integer} Id of the invoiceWorksheetLine to remove tag from

var invoiceWorksheetLineTag = "invoiceWorksheetLineTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteInvoiceWorksheetLineTag(invoiceWorksheetLineId, invoiceWorksheetLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineId** | **Integer**| Id of the invoiceWorksheetLine to remove tag from | 
 **invoiceWorksheetLineTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateInvoiceWorksheetLineById"></a>
# **getDuplicateInvoiceWorksheetLineById**
> InvoiceWorksheetLine getDuplicateInvoiceWorksheetLineById(invoiceWorksheetLineId)

Get a duplicated an invoiceWorksheetLine by id

Returns a duplicated invoiceWorksheetLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var invoiceWorksheetLineId = 56; // {Integer} Id of the invoiceWorksheetLine to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateInvoiceWorksheetLineById(invoiceWorksheetLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineId** | **Integer**| Id of the invoiceWorksheetLine to be duplicated. | 

### Return type

[**InvoiceWorksheetLine**](InvoiceWorksheetLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetLineByFilter"></a>
# **getInvoiceWorksheetLineByFilter**
> [InvoiceWorksheetLine] getInvoiceWorksheetLineByFilter(opts)

Search invoiceWorksheetLines by filter

Returns the list of invoiceWorksheetLines that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var opts = { 
  'filter': "filter_example", // {String} Query string, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56, // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // {String} Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInvoiceWorksheetLineByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[InvoiceWorksheetLine]**](InvoiceWorksheetLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetLineById"></a>
# **getInvoiceWorksheetLineById**
> InvoiceWorksheetLine getInvoiceWorksheetLineById(invoiceWorksheetLineId)

Get an invoiceWorksheetLine by id

Returns the invoiceWorksheetLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var invoiceWorksheetLineId = 56; // {Integer} Id of the invoiceWorksheetLine to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInvoiceWorksheetLineById(invoiceWorksheetLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineId** | **Integer**| Id of the invoiceWorksheetLine to be returned. | 

### Return type

[**InvoiceWorksheetLine**](InvoiceWorksheetLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoiceWorksheetLineTags"></a>
# **getInvoiceWorksheetLineTags**
> getInvoiceWorksheetLineTags(invoiceWorksheetLineId)

Get the tags for an invoiceWorksheetLine.

Get all existing invoiceWorksheetLine tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var invoiceWorksheetLineId = 56; // {Integer} Id of the invoiceWorksheetLine to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getInvoiceWorksheetLineTags(invoiceWorksheetLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceWorksheetLineId** | **Integer**| Id of the invoiceWorksheetLine to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInvoiceWorksheetLine"></a>
# **updateInvoiceWorksheetLine**
> updateInvoiceWorksheetLine(body)

Update an invoiceWorksheetLine

Updates an existing invoiceWorksheetLine using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.InvoiceWorksheetLineApi()

var body = new infoplus.InvoiceWorksheetLine(); // {InvoiceWorksheetLine} InvoiceWorksheetLine to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateInvoiceWorksheetLine(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvoiceWorksheetLine**](InvoiceWorksheetLine.md)| InvoiceWorksheetLine to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

