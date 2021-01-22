# infoplus.CustomerInvoiceTemplateLineApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomerInvoiceTemplateLineAudit**](CustomerInvoiceTemplateLineApi.md#addCustomerInvoiceTemplateLineAudit) | **PUT** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/audit/{customerInvoiceTemplateLineAudit} | Add new audit for a customerInvoiceTemplateLine
[**addCustomerInvoiceTemplateLineFile**](CustomerInvoiceTemplateLineApi.md#addCustomerInvoiceTemplateLineFile) | **POST** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/file/{fileName} | Attach a file to a customerInvoiceTemplateLine
[**addCustomerInvoiceTemplateLineFileByURL**](CustomerInvoiceTemplateLineApi.md#addCustomerInvoiceTemplateLineFileByURL) | **POST** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/file | Attach a file to a customerInvoiceTemplateLine by URL.
[**addCustomerInvoiceTemplateLineTag**](CustomerInvoiceTemplateLineApi.md#addCustomerInvoiceTemplateLineTag) | **PUT** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/tag/{customerInvoiceTemplateLineTag} | Add new tags for a customerInvoiceTemplateLine.
[**deleteCustomerInvoiceTemplateLine**](CustomerInvoiceTemplateLineApi.md#deleteCustomerInvoiceTemplateLine) | **DELETE** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId} | Delete a customerInvoiceTemplateLine
[**deleteCustomerInvoiceTemplateLineFile**](CustomerInvoiceTemplateLineApi.md#deleteCustomerInvoiceTemplateLineFile) | **DELETE** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/file/{fileId} | Delete a file for a customerInvoiceTemplateLine.
[**deleteCustomerInvoiceTemplateLineTag**](CustomerInvoiceTemplateLineApi.md#deleteCustomerInvoiceTemplateLineTag) | **DELETE** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/tag/{customerInvoiceTemplateLineTag} | Delete a tag for a customerInvoiceTemplateLine.
[**getCustomerInvoiceTemplateLineByFilter**](CustomerInvoiceTemplateLineApi.md#getCustomerInvoiceTemplateLineByFilter) | **GET** /beta/customerInvoiceTemplateLine/search | Search customerInvoiceTemplateLines by filter
[**getCustomerInvoiceTemplateLineById**](CustomerInvoiceTemplateLineApi.md#getCustomerInvoiceTemplateLineById) | **GET** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId} | Get a customerInvoiceTemplateLine by id
[**getCustomerInvoiceTemplateLineFiles**](CustomerInvoiceTemplateLineApi.md#getCustomerInvoiceTemplateLineFiles) | **GET** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/file | Get the files for a customerInvoiceTemplateLine.
[**getCustomerInvoiceTemplateLineTags**](CustomerInvoiceTemplateLineApi.md#getCustomerInvoiceTemplateLineTags) | **GET** /beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/tag | Get the tags for a customerInvoiceTemplateLine.
[**getDuplicateCustomerInvoiceTemplateLineById**](CustomerInvoiceTemplateLineApi.md#getDuplicateCustomerInvoiceTemplateLineById) | **GET** /beta/customerInvoiceTemplateLine/duplicate/{customerInvoiceTemplateLineId} | Get a duplicated a customerInvoiceTemplateLine by id
[**updateCustomerInvoiceTemplateLine**](CustomerInvoiceTemplateLineApi.md#updateCustomerInvoiceTemplateLine) | **PUT** /beta/customerInvoiceTemplateLine | Update a customerInvoiceTemplateLine


<a name="addCustomerInvoiceTemplateLineAudit"></a>
# **addCustomerInvoiceTemplateLineAudit**
> addCustomerInvoiceTemplateLineAudit(customerInvoiceTemplateLineId, customerInvoiceTemplateLineAudit)

Add new audit for a customerInvoiceTemplateLine

Adds an audit to an existing customerInvoiceTemplateLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to add an audit to

var customerInvoiceTemplateLineAudit = "customerInvoiceTemplateLineAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateLineAudit(customerInvoiceTemplateLineId, customerInvoiceTemplateLineAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to add an audit to | 
 **customerInvoiceTemplateLineAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerInvoiceTemplateLineFile"></a>
# **addCustomerInvoiceTemplateLineFile**
> addCustomerInvoiceTemplateLineFile(customerInvoiceTemplateLineId, fileName)

Attach a file to a customerInvoiceTemplateLine

Adds a file to an existing customerInvoiceTemplateLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateLineFile(customerInvoiceTemplateLineId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCustomerInvoiceTemplateLineFileByURL"></a>
# **addCustomerInvoiceTemplateLineFileByURL**
> addCustomerInvoiceTemplateLineFileByURL(body, customerInvoiceTemplateLineId)

Attach a file to a customerInvoiceTemplateLine by URL.

Adds a file to an existing customerInvoiceTemplateLine by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateLineFileByURL(body, customerInvoiceTemplateLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerInvoiceTemplateLineTag"></a>
# **addCustomerInvoiceTemplateLineTag**
> addCustomerInvoiceTemplateLineTag(customerInvoiceTemplateLineId, customerInvoiceTemplateLineTag)

Add new tags for a customerInvoiceTemplateLine.

Adds a tag to an existing customerInvoiceTemplateLine.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to add a tag to

var customerInvoiceTemplateLineTag = "customerInvoiceTemplateLineTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateLineTag(customerInvoiceTemplateLineId, customerInvoiceTemplateLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to add a tag to | 
 **customerInvoiceTemplateLineTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomerInvoiceTemplateLine"></a>
# **deleteCustomerInvoiceTemplateLine**
> deleteCustomerInvoiceTemplateLine(customerInvoiceTemplateLineId)

Delete a customerInvoiceTemplateLine

Deletes the customerInvoiceTemplateLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerInvoiceTemplateLine(customerInvoiceTemplateLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomerInvoiceTemplateLineFile"></a>
# **deleteCustomerInvoiceTemplateLineFile**
> deleteCustomerInvoiceTemplateLineFile(customerInvoiceTemplateLineId, fileId)

Delete a file for a customerInvoiceTemplateLine.

Deletes an existing customerInvoiceTemplateLine file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerInvoiceTemplateLineFile(customerInvoiceTemplateLineId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomerInvoiceTemplateLineTag"></a>
# **deleteCustomerInvoiceTemplateLineTag**
> deleteCustomerInvoiceTemplateLineTag(customerInvoiceTemplateLineId, customerInvoiceTemplateLineTag)

Delete a tag for a customerInvoiceTemplateLine.

Deletes an existing customerInvoiceTemplateLine tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to remove tag from

var customerInvoiceTemplateLineTag = "customerInvoiceTemplateLineTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerInvoiceTemplateLineTag(customerInvoiceTemplateLineId, customerInvoiceTemplateLineTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to remove tag from | 
 **customerInvoiceTemplateLineTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateLineByFilter"></a>
# **getCustomerInvoiceTemplateLineByFilter**
> [CustomerInvoiceTemplateLine] getCustomerInvoiceTemplateLineByFilter(opts)

Search customerInvoiceTemplateLines by filter

Returns the list of customerInvoiceTemplateLines that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

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
apiInstance.getCustomerInvoiceTemplateLineByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CustomerInvoiceTemplateLine]**](CustomerInvoiceTemplateLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateLineById"></a>
# **getCustomerInvoiceTemplateLineById**
> CustomerInvoiceTemplateLine getCustomerInvoiceTemplateLineById(customerInvoiceTemplateLineId)

Get a customerInvoiceTemplateLine by id

Returns the customerInvoiceTemplateLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerInvoiceTemplateLineById(customerInvoiceTemplateLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to be returned. | 

### Return type

[**CustomerInvoiceTemplateLine**](CustomerInvoiceTemplateLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateLineFiles"></a>
# **getCustomerInvoiceTemplateLineFiles**
> getCustomerInvoiceTemplateLineFiles(customerInvoiceTemplateLineId)

Get the files for a customerInvoiceTemplateLine.

Get all existing customerInvoiceTemplateLine files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomerInvoiceTemplateLineFiles(customerInvoiceTemplateLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateLineTags"></a>
# **getCustomerInvoiceTemplateLineTags**
> getCustomerInvoiceTemplateLineTags(customerInvoiceTemplateLineId)

Get the tags for a customerInvoiceTemplateLine.

Get all existing customerInvoiceTemplateLine tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomerInvoiceTemplateLineTags(customerInvoiceTemplateLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCustomerInvoiceTemplateLineById"></a>
# **getDuplicateCustomerInvoiceTemplateLineById**
> CustomerInvoiceTemplateLine getDuplicateCustomerInvoiceTemplateLineById(customerInvoiceTemplateLineId)

Get a duplicated a customerInvoiceTemplateLine by id

Returns a duplicated customerInvoiceTemplateLine identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var customerInvoiceTemplateLineId = 56; // Number | Id of the customerInvoiceTemplateLine to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCustomerInvoiceTemplateLineById(customerInvoiceTemplateLineId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateLineId** | **Number**| Id of the customerInvoiceTemplateLine to be duplicated. | 

### Return type

[**CustomerInvoiceTemplateLine**](CustomerInvoiceTemplateLine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCustomerInvoiceTemplateLine"></a>
# **updateCustomerInvoiceTemplateLine**
> updateCustomerInvoiceTemplateLine(body)

Update a customerInvoiceTemplateLine

Updates an existing customerInvoiceTemplateLine using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateLineApi();

var body = new infoplus.CustomerInvoiceTemplateLine(); // CustomerInvoiceTemplateLine | CustomerInvoiceTemplateLine to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomerInvoiceTemplateLine(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerInvoiceTemplateLine**](CustomerInvoiceTemplateLine.md)| CustomerInvoiceTemplateLine to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

